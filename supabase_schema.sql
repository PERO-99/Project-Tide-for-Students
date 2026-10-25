-- ====================================================================
-- Project Tide for Students - Supabase Database Schema
-- Run this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/urgoewkatpxpccbixbwn/sql/new
-- ====================================================================

-- 1. Student Profiles Table
create table if not exists public.tide_profiles (
  id text primary key,
  name text,
  handle text,
  grade text,
  school text,
  motto text,
  weekly_target integer default 25,
  streak integer default 0,
  photo_url text,
  avatar_data jsonb default '{}'::jsonb,
  updated_at timestamp with time zone default now()
);

-- 2. Tasks & Assignments Table
create table if not exists public.tide_tasks (
  id bigint primary key,
  user_id text default 'default_student',
  title text not null,
  subject text,
  due_day integer,
  due_hour integer,
  est_minutes integer default 60,
  importance integer default 1,
  first_step text default '',
  created_at timestamp with time zone default now()
);

-- 3. Scheduled Study Blocks Table
create table if not exists public.tide_blocks (
  id text primary key,
  task_id bigint references public.tide_tasks(id) on delete cascade,
  day_index integer,
  slot_index integer,
  duration_slots integer default 1,
  is_done boolean default false,
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS)
alter table public.tide_profiles enable row level security;
alter table public.tide_tasks enable row level security;
alter table public.tide_blocks enable row level security;

-- Drop existing public access policies if re-running
drop policy if exists "Public access tide_profiles" on public.tide_profiles;
drop policy if exists "Public access tide_tasks" on public.tide_tasks;
drop policy if exists "Public access tide_blocks" on public.tide_blocks;

-- Public read/write policies for client application with publishable key
create policy "Public access tide_profiles" on public.tide_profiles
  for all using (true) with check (true);

create policy "Public access tide_tasks" on public.tide_tasks
  for all using (true) with check (true);

create policy "Public access tide_blocks" on public.tide_blocks
  for all using (true) with check (true);

-- Notify schema reload
notify pgrst, 'reload schema';
