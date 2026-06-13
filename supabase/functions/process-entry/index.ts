// Supabase Edge Function: process-entry
// Takes an entry_id, runs Claude over the transcript, and:
//  - writes summary / area / people / decisions / insights onto the entry
//  - inserts proposed tasks with area + priority + owner + due date
//
// Deploy:  supabase functions deploy process-entry
// Secrets: supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

import Anthropic from "npm:@anthropic-ai/sdk";
import { createClient } from "npm:@supabase/supabase-js@2";

const SYSTEM = `You process the user's captured conversations, voice notes, and journal entries into a personal life database.

Context on the user: they are building an AI business (an "agent orchestrator" helping companies become AI-native, still pre-revenue), work a part-time cleaning job a few days a week for income, take occasional paid photography gigs, and are learning a language ~30 minutes a day to make strong progress before language school resumes in September.

Your job:
- Write a 2-5 sentence summary of the entry.
- Classify the whole entry into the single best life area from the provided list (use the area key).
- Extract real action items only — commitments actually made or things to do that were actually stated. Never invent tasks. A short brain-dump may yield zero tasks, and that's fine.
- For each task: phrase it as an imperative; set owner ("me" if the user owes it, "them" if it is owed to the user); name the other person if there is one; set due_date by resolving relative dates ("next Friday", "by month end") against the recording date, else null; set priority (high/medium/low) by urgency and importance; and pick the best area for that task.
- Capture decisions made and insights/ideas worth keeping (insights are reflections or ideas, not action items).

Transcripts may have no speaker labels — infer who is speaking from context.`;

function buildSchema(areaKeys: string[]) {
  const areaEnum = { type: "string", enum: areaKeys };
  return {
    type: "object",
    properties: {
      summary: { type: "string" },
      area: areaEnum,
      people: { type: "array", items: { type: "string" } },
      decisions: { type: "array", items: { type: "string" } },
      insights: { type: "array", items: { type: "string" } },
      action_items: {
        type: "array",
        items: {
          type: "object",
          properties: {
            what: { type: "string" },
            area: areaEnum,
            owner: { type: "string", enum: ["me", "them"] },
            person: { anyOf: [{ type: "string" }, { type: "null" }] },
            due_date: { anyOf: [{ type: "string", format: "date" }, { type: "null" }] },
            priority: { type: "string", enum: ["high", "medium", "low"] },
          },
          required: ["what", "area", "owner", "person", "due_date", "priority"],
          additionalProperties: false,
        },
      },
    },
    required: ["summary", "area", "people", "decisions", "insights", "action_items"],
    additionalProperties: false,
  };
}

Deno.serve(async (req) => {
  try {
    const { entry_id } = await req.json();
    if (!entry_id) {
      return Response.json({ error: "entry_id is required" }, { status: 400 });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: entry, error: entryError } = await supabase
      .from("entries").select().eq("id", entry_id).single();
    if (entryError || !entry) {
      return Response.json({ error: "entry not found" }, { status: 404 });
    }

    const { data: areas } = await supabase.from("areas").select("id,key,label");
    const areaList = (areas ?? []) as { id: string; key: string; label: string }[];
    const areaKeys = areaList.map((a) => a.key);
    const areaIdByKey: Record<string, string> = {};
    for (const a of areaList) areaIdByKey[a.key] = a.id;
    const areaLabels = areaList.map((a) => `${a.key} (${a.label})`).join(", ");

    const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY
    const response = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 16000,
      thinking: { type: "adaptive" },
      system: SYSTEM,
      output_config: { format: { type: "json_schema", schema: buildSchema(areaKeys) } },
      messages: [{
        role: "user",
        content:
          `Recorded at: ${entry.created_at}\nEntry type: ${entry.kind}\n` +
          `Available areas: ${areaLabels}\n\nTranscript:\n${entry.transcript}`,
      }],
    });

    if (response.stop_reason === "refusal") {
      return Response.json({ error: "model declined the request" }, { status: 422 });
    }

    const textBlock = response.content.find((b) => b.type === "text");
    const extraction = JSON.parse(textBlock?.text ?? "{}");

    await supabase.from("entries").update({
      summary: extraction.summary,
      area_id: areaIdByKey[extraction.area] ?? null,
      people: extraction.people,
      decisions: extraction.decisions,
      insights: extraction.insights,
    }).eq("id", entry_id);

    let tasks: unknown[] = [];
    const items = (extraction.action_items ?? []) as Record<string, unknown>[];
    if (items.length > 0) {
      const { data: inserted, error: taskError } = await supabase.from("tasks").insert(
        items.map((item) => ({
          entry_id,
          area_id: areaIdByKey[item.area as string] ?? areaIdByKey[extraction.area] ?? null,
          what: item.what,
          owner: item.owner,
          person: item.person,
          due_date: item.due_date,
          priority: item.priority,
          status: "proposed",
        })),
      ).select();
      if (taskError) throw taskError;
      tasks = inserted ?? [];
    }

    return Response.json({ summary: extraction.summary, area: extraction.area, tasks });
  } catch (err) {
    console.error(err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
});
