// Supabase Edge Function: process-entry
// Takes an entry_id, runs Claude extraction over its transcript, stores the
// summary/people/decisions/insights on the entry, and inserts proposed tasks.
//
// Deploy:  supabase functions deploy process-entry
// Secrets: supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

import Anthropic from "npm:@anthropic-ai/sdk";
import { createClient } from "npm:@supabase/supabase-js@2";

const EXTRACTION_SCHEMA = {
  type: "object",
  properties: {
    summary: {
      type: "string",
      description: "2-5 sentence summary of the entry.",
    },
    people: {
      type: "array",
      items: { type: "string" },
      description: "Names of people present or mentioned as participants.",
    },
    decisions: { type: "array", items: { type: "string" } },
    insights: {
      type: "array",
      items: { type: "string" },
      description: "Ideas or realizations worth keeping, not action items.",
    },
    action_items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          what: { type: "string", description: "The task, phrased as an imperative." },
          owner: {
            type: "string",
            enum: ["me", "them"],
            description: "'me' if the speaker owes it, 'them' if owed to the speaker.",
          },
          person: {
            anyOf: [{ type: "string" }, { type: "null" }],
            description: "The other person involved, if any.",
          },
          due_date: {
            anyOf: [{ type: "string", format: "date" }, { type: "null" }],
            description: "ISO date if a date or relative day was mentioned, else null.",
          },
        },
        required: ["what", "owner", "person", "due_date"],
        additionalProperties: false,
      },
    },
  },
  required: ["summary", "people", "decisions", "insights", "action_items"],
  additionalProperties: false,
};

const SYSTEM = `You analyze transcripts of the user's recorded conversations and voice notes.
The transcript has no speaker labels; infer from context who is speaking and who said what.
Extract only commitments and action items that were actually made — do not invent tasks.
Resolve relative dates ("next Friday", "by end of month") against the recording date given in the message.`;

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
      .from("entries")
      .select()
      .eq("id", entry_id)
      .single();
    if (entryError || !entry) {
      return Response.json({ error: "entry not found" }, { status: 404 });
    }

    const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY
    const response = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 16000,
      thinking: { type: "adaptive" },
      system: SYSTEM,
      output_config: {
        format: { type: "json_schema", schema: EXTRACTION_SCHEMA },
      },
      messages: [
        {
          role: "user",
          content: `Recorded at: ${entry.created_at}\nEntry type: ${entry.kind}\n\nTranscript:\n${entry.transcript}`,
        },
      ],
    });

    if (response.stop_reason === "refusal") {
      return Response.json({ error: "model declined the request" }, { status: 422 });
    }

    const textBlock = response.content.find((b) => b.type === "text");
    const extraction = JSON.parse(textBlock?.text ?? "{}");

    await supabase
      .from("entries")
      .update({
        summary: extraction.summary,
        people: extraction.people,
        decisions: extraction.decisions,
        insights: extraction.insights,
      })
      .eq("id", entry_id);

    let tasks: unknown[] = [];
    if (extraction.action_items.length > 0) {
      const { data: inserted, error: taskError } = await supabase
        .from("tasks")
        .insert(
          extraction.action_items.map((item: Record<string, unknown>) => ({
            entry_id,
            what: item.what,
            owner: item.owner,
            person: item.person,
            due_date: item.due_date,
            status: "proposed",
          })),
        )
        .select();
      if (taskError) throw taskError;
      tasks = inserted ?? [];
    }

    return Response.json({ summary: extraction.summary, tasks });
  } catch (err) {
    console.error(err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
});
