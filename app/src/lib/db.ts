import { supabase } from './supabase';
import type {
  Area,
  EntryKind,
  Goal,
  Habit,
  HabitLog,
  HabitToday,
  ProcessResult,
  Task,
} from './types';

export function todayStr(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export async function getAreas(): Promise<Area[]> {
  const { data, error } = await supabase.from('areas').select().order('sort');
  if (error) throw error;
  return (data ?? []) as Area[];
}

const PRIORITY_RANK: Record<string, number> = { high: 0, medium: 1, low: 2 };

export async function getTasks(): Promise<Task[]> {
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .order('created_at', { ascending: false });
  if (error) throw error;
  const tasks = (data ?? []) as Task[];
  return tasks.sort(
    (a, b) => (PRIORITY_RANK[a.priority] ?? 1) - (PRIORITY_RANK[b.priority] ?? 1),
  );
}

export async function updateTask(id: string, patch: Partial<Task>): Promise<void> {
  const { error } = await supabase.from('tasks').update(patch).eq('id', id);
  if (error) throw error;
}

export async function getGoals(): Promise<Goal[]> {
  const { data, error } = await supabase
    .from('goals')
    .select()
    .eq('status', 'active')
    .order('sort');
  if (error) throw error;
  return (data ?? []) as Goal[];
}

export async function getHabitsToday(): Promise<HabitToday[]> {
  const today = todayStr();
  const weekAgo = todayStr(new Date(Date.now() - 6 * 86400000));
  const [habitsRes, logsRes] = await Promise.all([
    supabase.from('habits').select().eq('active', true).order('sort'),
    supabase.from('habit_logs').select().gte('day', weekAgo),
  ]);
  if (habitsRes.error) throw habitsRes.error;
  if (logsRes.error) throw logsRes.error;
  const habits = (habitsRes.data ?? []) as Habit[];
  const logs = (logsRes.data ?? []) as HabitLog[];
  return habits.map((habit) => {
    const mine = logs.filter((l) => l.habit_id === habit.id);
    return {
      ...habit,
      today: mine.find((l) => l.day === today) ?? null,
      week_done: mine.filter((l) => l.done).length,
    };
  });
}

export async function toggleHabit(habit: Habit, done: boolean): Promise<void> {
  const { error } = await supabase.from('habit_logs').upsert(
    {
      habit_id: habit.id,
      day: todayStr(),
      done,
      minutes: done ? habit.target_minutes : null,
    },
    { onConflict: 'habit_id,day' },
  );
  if (error) throw error;
}

export async function createEntry(kind: EntryKind, transcript: string): Promise<string> {
  const { data, error } = await supabase
    .from('entries')
    .insert({ kind, transcript })
    .select('id')
    .single();
  if (error) throw error;
  return (data as { id: string }).id;
}

export async function processEntry(entryId: string): Promise<ProcessResult> {
  const { data, error } = await supabase.functions.invoke<ProcessResult>('process-entry', {
    body: { entry_id: entryId },
  });
  if (error) throw error;
  if (!data) throw new Error('No response from process-entry');
  return data;
}
