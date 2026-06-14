-- Anchor schema. Run in the Supabase SQL editor (idempotent — safe to re-run).
-- Aligned to the Anchor design data model.

create extension if not exists pgcrypto;

-- Life areas (the "Brain"). icon matches the app's icon set.
create table if not exists areas (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  label text not null,
  icon text,
  sort int not null default 0
);
alter table areas add column if not exists icon text;

insert into areas (key, label, icon, sort) values
  ('business',    'AI Business',       'biz',    1),
  ('photography', 'Photography',       'camera', 2),
  ('job',         'Day Job',           'job',    3),
  ('money',       'Money',             'money',  4),
  ('language',    'Language Learning', 'lang',   5),
  ('body',        'Body & Health',     'body',   6),
  ('mind',        'Mind & Journal',    'mind',   7),
  ('personal',    'Personal',          'user',   8)
on conflict (key) do nothing;

update areas as a set icon = v.icon
from (values
  ('business','biz'), ('photography','camera'), ('job','job'), ('money','money'),
  ('language','lang'), ('body','body'), ('mind','mind'), ('personal','user')
) as v(key, icon)
where a.key = v.key and a.icon is distinct from v.icon;

-- Capture log: recordings, typed/voice brain dumps, journal entries.
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

-- Tasks / action items.
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
  cue text,
  target_minutes int,
  sort int not null default 0,
  active boolean not null default true
);
alter table habits add column if not exists cue text;

create table if not exists habit_logs (
  id uuid primary key default gen_random_uuid(),
  habit_id uuid not null references habits(id) on delete cascade,
  day date not null,
  done boolean not null default false,
  minutes int,
  unique (habit_id, day)
);
create index if not exists habit_logs_day_idx on habit_logs (day);

insert into habits (label, area_id, cue, target_minutes, sort)
select 'Spanish · 20 min', a.id, 'After coffee', 20, 1 from areas a where a.key = 'language'
  and not exists (select 1 from habits where label = 'Spanish · 20 min');
insert into habits (label, area_id, cue, sort)
select 'Train · strength', a.id, 'Midday', 2 from areas a where a.key = 'body'
  and not exists (select 1 from habits where label = 'Train · strength');
insert into habits (label, area_id, cue, sort)
select 'Journal', a.id, 'Wind-down', 3 from areas a where a.key = 'mind'
  and not exists (select 1 from habits where label = 'Journal');
insert into habits (label, area_id, cue, sort)
select 'Read · 10 pages', a.id, 'Before bed', 4 from areas a where a.key = 'personal'
  and not exists (select 1 from habits where label = 'Read · 10 pages');

-- Goals / countdowns (icon matches the app icon set).
create table if not exists goals (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  area_id uuid references areas(id),
  target_date date,
  icon text,
  status text not null default 'active' check (status in ('active', 'done', 'dropped')),
  sort int not null default 0
);
alter table goals add column if not exists icon text;

insert into goals (title, area_id, target_date, icon, sort)
select 'Strong language progress before school resumes', a.id, date '2026-09-01', 'lang', 1
from areas a where a.key = 'language'
  and not exists (select 1 from goals where title = 'Strong language progress before school resumes');
insert into goals (title, area_id, target_date, icon, sort)
select 'Ship the AI product public beta', a.id, current_date + 32, 'biz', 2
from areas a where a.key = 'business'
  and not exists (select 1 from goals where title = 'Ship the AI product public beta');
insert into goals (title, area_id, target_date, icon, sort)
select 'Deliver the Hale wedding album', a.id, current_date + 14, 'camera', 3
from areas a where a.key = 'photography'
  and not exists (select 1 from goals where title = 'Deliver the Hale wedding album');

-- Finance log (income sources + expenses). Seeded so the pulse renders.
create table if not exists finance_entries (
  id uuid primary key default gen_random_uuid(),
  occurred_on date not null default current_date,
  amount numeric not null,
  kind text not null check (kind in ('income', 'expense')),
  category text,
  source text,
  note text
);

insert into finance_entries (occurred_on, amount, kind, source)
select current_date, 4200, 'income', 'Day job'
where not exists (select 1 from finance_entries where source = 'Day job'
  and date_trunc('month', occurred_on) = date_trunc('month', current_date));
insert into finance_entries (occurred_on, amount, kind, source)
select current_date, 1850, 'income', 'Photography'
where not exists (select 1 from finance_entries where source = 'Photography'
  and date_trunc('month', occurred_on) = date_trunc('month', current_date));
insert into finance_entries (occurred_on, amount, kind, source)
select current_date, 3400, 'income', 'Clients'
where not exists (select 1 from finance_entries where source = 'Clients'
  and date_trunc('month', occurred_on) = date_trunc('month', current_date));

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
