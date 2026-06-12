export type TaskStatus = 'proposed' | 'confirmed' | 'dismissed' | 'done';

export interface Task {
  id: string;
  entry_id: string | null;
  what: string;
  owner: 'me' | 'them';
  person: string | null;
  due_date: string | null;
  status: TaskStatus;
}

export interface ProcessResult {
  summary: string;
  tasks: Task[];
}
