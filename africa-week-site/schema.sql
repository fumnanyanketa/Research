-- Run this once in Supabase: Dashboard > SQL Editor > New query > paste > Run.

create table if not exists ideas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text,
  email text,
  ideas text not null
);

-- The API writes with the service role key, which bypasses row level security.
-- We still enable RLS so nothing is readable with the public anon key.
alter table ideas enable row level security;
