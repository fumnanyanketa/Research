export interface Area {
  id: string;
  key: string;
  label: string;
  sort: number;
}

export type TaskStatus = 'proposed' | 'confirmed' | 'dismissed' | 'done';
export type Priority = 'high' | 'medium' | 'low';

export interface Task {
  id: string;
  created_at: string;
  entry_id: string | null;
  area_id: string | null;
  what: string;
  owner: 'me' | 'them';
  person: string | null;
  due_date: string | null;
  priority: Priority;
  is_key: boolean;
  status: TaskStatus;
}

export interface Habit {
  id: string;
  label: string;
  area_id: string | null;
  cue: string | null;
  target_minutes: number | null;
  sort: number;
  active: boolean;
}

export interface HabitLog {
  id: string;
  habit_id: string;
  day: string;
  done: boolean;
  minutes: number | null;
}

export interface HabitToday extends Habit {
  today: HabitLog | null;
  week_done: number;
}

export interface Goal {
  id: string;
  title: string;
  area_id: string | null;
  target_date: string | null;
  status: 'active' | 'done' | 'dropped';
  sort: number;
}

export interface FinanceSlice {
  label: string;
  value: number;
  color: string;
}

export type EntryKind = 'conversation' | 'brain_dump' | 'journal';

export interface ProcessResult {
  summary: string;
  area: string;
  tasks: Task[];
}
