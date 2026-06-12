-- Life OS v1 schema. Run this in the Supabase SQL editor (or `supabase db push`).

create extension if not exists pgcrypto;

create table if not exists entries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null default 'conversation' check (kind in ('conversation', 'brain_dump')),
  transcript text not null,
  summary text,
  people text[] not null default '{}',
  decisions text[] not null default '{}',
  insights text[] not null default '{}'
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  entry_id uuid references entries(id) on delete set null,
  what text not null,
  owner text not null default 'me' check (owner in ('me', 'them')),
  person text,
  due_date date,
  status text not null default 'proposed'
    check (status in ('proposed', 'confirmed', 'dismissed', 'done'))
);

create index if not exists tasks_status_idx on tasks (status, due_date);
create index if not exists entries_created_idx on entries (created_at desc);

-- v1 is single-user via the anon key. Before storing anything sensitive,
-- add Supabase Auth and replace these permissive policies with per-user ones.
alter table entries enable row level security;
alter table tasks enable row level security;
create policy "v1 open access" on entries for all using (true) with check (true);
create policy "v1 open access" on tasks for all using (true) with check (true);
