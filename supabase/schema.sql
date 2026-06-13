-- Anchor schema. Run in the Supabase SQL editor (idempotent — safe to re-run).

create extension if not exists pgcrypto;

-- Life areas (the "brain" categories). Tailored to: AI business, photography,
-- the day job, money, language learning, body, mind. Edit freely.
create table if not exists areas (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  label text not null,
  sort int not null default 0
);

insert into areas (key, label, sort) values
  ('business',    'AI Business',       1),
  ('photography', 'Photography',       2),
  ('job',         'Day Job',           3),
  ('money',       'Money',             4),
  ('language',    'Language Learning', 5),
  ('body',        'Body & Health',     6),
  ('mind',        'Mind & Journal',    7),
  ('personal',    'Personal',          8)
on conflict (key) do nothing;

-- Capture log: every recording, voice/typed brain dump, or journal entry.
create table if not exists entries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null default 'conversation'
    check (kind in ('conversation', 'brain_dump', 'journal')),
  transcript text not null,
  summary text,
  area_id uuid references areas(id),
  people text[] not null default '{}',
  decisions text[] not null default '{}',
  insights text[] not null default '{}'
);
alter table entries add column if not exists area_id uuid references areas(id);

-- Tasks / action items, with AI-assigned priority and a manual "key" star.
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  entry_id uuid references entries(id) on delete set null,
  area_id uuid references areas(id),
  what text not null,
  owner text not null default 'me' check (owner in ('me', 'them')),
  person text,
  due_date date,
  priority text not null default 'medium' check (priority in ('high', 'medium', 'low')),
  is_key boolean not null default false,
  status text not null default 'proposed'
    check (status in ('proposed', 'confirmed', 'dismissed', 'done'))
);
alter table tasks add column if not exists area_id uuid references areas(id);
alter table tasks add column if not exists priority text not null default 'medium';
alter table tasks add column if not exists is_key boolean not null default false;

create index if not exists tasks_status_idx on tasks (status, due_date);
create index if not exists entries_created_idx on entries (created_at desc);

-- Habits + daily check-offs.
create table if not exists habits (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  area_id uuid references areas(id),
  target_minutes int,
  sort int not null default 0,
  active boolean not null default true
);

create table if not exists habit_logs (
  id uuid primary key default gen_random_uuid(),
  habit_id uuid not null references habits(id) on delete cascade,
  day date not null,
  done boolean not null default false,
  minutes int,
  unique (habit_id, day)
);
create index if not exists habit_logs_day_idx on habit_logs (day);

-- Starter habits (the language habit is the flagship — edit in DB or app).
insert into habits (label, area_id, target_minutes, sort)
select 'Language app — 30 min', a.id, 30, 1 from areas a where a.key = 'language'
  and not exists (select 1 from habits where label = 'Language app — 30 min');
insert into habits (label, area_id, sort)
select 'Gym', a.id, 2 from areas a where a.key = 'body'
  and not exists (select 1 from habits where label = 'Gym');
insert into habits (label, area_id, sort)
select 'Morning business block', a.id, 3 from areas a where a.key = 'business'
  and not exists (select 1 from habits where label = 'Morning business block');
insert into habits (label, area_id, sort)
select 'Evening journal', a.id, 4 from areas a where a.key = 'mind'
  and not exists (select 1 from habits where label = 'Evening journal');

-- Goals (with target dates). Seeds the September language goal.
create table if not exists goals (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  area_id uuid references areas(id),
  target_date date,
  status text not null default 'active' check (status in ('active', 'done', 'dropped')),
  sort int not null default 0
);
insert into goals (title, area_id, target_date, sort)
select 'Strong language progress before school resumes', a.id, date '2026-09-01', 1
from areas a where a.key = 'language'
  and not exists (select 1 from goals where title = 'Strong language progress before school resumes');

-- Simple finance log (income from job, photography, clients; expenses).
-- UI lands in the next round; schema is ready now so capture can populate it.
create table if not exists finance_entries (
  id uuid primary key default gen_random_uuid(),
  occurred_on date not null default current_date,
  amount numeric not null,
  kind text not null check (kind in ('income', 'expense')),
  category text,
  source text,
  note text
);

-- v1 is single-user via the anon key. Add Supabase Auth + per-user policies
-- before storing anything you wouldn't want readable with the anon key.
alter table areas enable row level security;
alter table entries enable row level security;
alter table tasks enable row level security;
alter table habits enable row level security;
alter table habit_logs enable row level security;
alter table goals enable row level security;
alter table finance_entries enable row level security;
do $$
declare t text;
begin
  foreach t in array array['areas', 'entries', 'tasks', 'habits', 'habit_logs', 'goals', 'finance_entries'] loop
    execute format('drop policy if exists "v1 open access" on %I', t);
    execute format('create policy "v1 open access" on %I for all using (true) with check (true)', t);
  end loop;
end $$;
