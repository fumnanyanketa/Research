// Supabase Edge Function: process-entry
// Runs Google Gemini (free tier) over an entry's transcript and:
//  - writes summary / area / people / decisions / insights onto the entry
//  - inserts proposed tasks with area + priority + owner + due date
//
// Deploy:  supabase functions deploy process-entry
// Secrets: supabase secrets set GEMINI_API_KEY=...   (free: aistudio.google.com/apikey)
//          (optional) supabase secrets set GEMINI_MODEL=gemini-2.5-flash

import { GoogleGenAI } from "npm:@google/genai";
import { createClient } from "npm:@supabase/supabase-js@2";

const MODEL = Deno.env.get("GEMINI_MODEL") ?? "gemini-2.5-flash";

const SYSTEM = `You process the user's captured conversations, voice notes, and journal entries into a personal life database.

Context on the user: building an AI business (an "agent orchestrator" helping companies become AI-native, still pre-revenue), works a part-time cleaning job a few days a week, takes occasional paid photography gigs, and is learning a language ~20 minutes a day to make strong progress before language school resumes in September.

Return ONLY a JSON object (no markdown fences) with exactly this shape:
{
  "summary": string,            // 2-5 sentences
  "area": string,               // one of the provided area keys
  "people": string[],
  "decisions": string[],
  "insights": string[],         // ideas/reflections worth keeping, not action items
  "action_items": [
    {
      "what": string,           // imperative
      "area": string,           // one of the provided area keys
      "owner": "me" | "them",  // "me" if the user owes it, "them" if it is owed to the user
      "person": string | null,
      "due_date": string | null, // ISO date YYYY-MM-DD, resolving relative dates against the recording date; else null
      "priority": "high" | "medium" | "low"
    }
  ]
}

Extract only action items that were actually stated or committed to — never invent. A short note may yield zero action items. Transcripts have no speaker labels — infer who is speaking from context.`;

Deno.serve(async (req) => {
  try {
    const { entry_id } = await req.json();
    if (!entry_id) return Response.json({ error: "entry_id is required" }, { status: 400 });

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: entry, error: entryError } = await supabase
      .from("entries").select().eq("id", entry_id).single();
    if (entryError || !entry) return Response.json({ error: "entry not found" }, { status: 404 });

    const { data: areas } = await supabase.from("areas").select("id,key,label");
    const areaList = (areas ?? []) as { id: string; key: string; label: string }[];
    const areaIdByKey: Record<string, string> = {};
    for (const a of areaList) areaIdByKey[a.key] = a.id;
    const areaLabels = areaList.map((a) => `${a.key} (${a.label})`).join(", ");

    const ai = new GoogleGenAI({ apiKey: Deno.env.get("GEMINI_API_KEY")! });
    const prompt =
      `Recorded at: ${entry.created_at}\nEntry type: ${entry.kind}\n` +
      `Available area keys: ${areaLabels}\n\nTranscript:\n${entry.transcript}`;

    const result = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: { systemInstruction: SYSTEM, responseMimeType: "application/json", temperature: 0.2 },
    });

    const raw = (result.text ?? "{}").trim();
    let extraction: Record<string, unknown>;
    try {
      extraction = JSON.parse(raw);
    } catch {
      // tolerate accidental ```json fences
      extraction = JSON.parse(raw.replace(/^```json\s*/i, "").replace(/```$/, "").trim());
    }

    const area = typeof extraction.area === "string" ? extraction.area : "";
    await supabase.from("entries").update({
      summary: (extraction.summary as string) ?? null,
      area_id: areaIdByKey[area] ?? null,
      people: (extraction.people as string[]) ?? [],
      decisions: (extraction.decisions as string[]) ?? [],
      insights: (extraction.insights as string[]) ?? [],
    }).eq("id", entry_id);

    let tasks: unknown[] = [];
    const items = (extraction.action_items as Record<string, unknown>[]) ?? [];
    if (items.length > 0) {
      const { data: inserted, error: taskError } = await supabase.from("tasks").insert(
        items.map((item) => ({
          entry_id,
          area_id: areaIdByKey[item.area as string] ?? areaIdByKey[area] ?? null,
          what: item.what,
          owner: item.owner === "them" ? "them" : "me",
          person: (item.person as string) ?? null,
          due_date: (item.due_date as string) ?? null,
          priority: ["high", "medium", "low"].includes(item.priority as string) ? item.priority : "medium",
          status: "proposed",
        })),
      ).select();
      if (taskError) throw taskError;
      tasks = inserted ?? [];
    }

    return Response.json({ summary: extraction.summary, area, tasks });
  } catch (err) {
    console.error(err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
});
