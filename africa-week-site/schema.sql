-- Run this once in your database's SQL editor (Neon console > SQL Editor).

create table if not exists ideas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text,
  email text,
  ideas text not null
);
