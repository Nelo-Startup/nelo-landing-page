-- Waitlist table
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  created_at timestamptz not null default now()
);

alter table waitlist enable row level security;

create policy "Allow anonymous inserts on waitlist"
  on waitlist
  for insert
  to anon
  with check (true);

-- Contact messages table
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "Allow anonymous inserts on contact_messages"
  on contact_messages
  for insert
  to anon
  with check (true);

-- Fix: RLS policies alone aren't enough, the anon role also needs the
-- base table-level privilege granted before Postgres will evaluate policies.
grant insert on waitlist to anon;
grant insert on contact_messages to anon;

-- Fix 2: the new publishable-key system may not map to the legacy "anon"
-- role, so target public instead (every role is implicitly a member of it).
drop policy "Allow anonymous inserts on waitlist" on waitlist;
drop policy "Allow anonymous inserts on contact_messages" on contact_messages;

create policy "Allow inserts on waitlist"
  on waitlist
  for insert
  to public
  with check (true);

create policy "Allow inserts on contact_messages"
  on contact_messages
  for insert
  to public
  with check (true);

grant insert on waitlist to public;
grant insert on contact_messages to public;
