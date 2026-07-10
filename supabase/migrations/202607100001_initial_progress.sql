-- User-owned progress only. Static course content remains in the frontend repository.
create table public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  lesson_id text not null,
  content_version text not null,
  status text not null default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  last_score smallint check (last_score between 0 and 100),
  best_score smallint check (best_score between 0 and 100),
  attempts_count integer not null default 0 check (attempts_count >= 0),
  notes text not null default '' check (length(notes) <= 20000),
  started_at timestamptz,
  completed_at timestamptz,
  last_opened_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id, lesson_id)
);

create table public.exercise_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  lesson_id text not null,
  exercise_id text not null,
  exercise_type text not null check (exercise_type in ('single_choice', 'multiple_choice', 'numeric', 'short_text', 'ordering', 'self_assessed')),
  answer jsonb not null,
  score numeric(5,4) not null check (score between 0 and 1),
  is_correct boolean not null,
  created_at timestamptz not null default now()
);

create table public.flashcard_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  flashcard_id text not null,
  mastery_level smallint not null default 0 check (mastery_level between 0 and 2),
  review_count integer not null default 0 check (review_count >= 0),
  last_reviewed_at timestamptz,
  next_review_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id, flashcard_id)
);

create table public.simulation_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  simulation_id text not null,
  current_step integer not null default 0 check (current_step >= 0),
  state jsonb not null default '{}'::jsonb,
  score smallint check (score between 0 and 100),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, simulation_id)
);

create index exercise_attempts_user_lesson_idx on public.exercise_attempts (user_id, course_id, lesson_id, created_at desc);
create index flashcard_progress_review_idx on public.flashcard_progress (user_id, next_review_at);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger lesson_progress_updated_at before update on public.lesson_progress for each row execute function public.set_updated_at();
create trigger flashcard_progress_updated_at before update on public.flashcard_progress for each row execute function public.set_updated_at();
create trigger simulation_progress_updated_at before update on public.simulation_progress for each row execute function public.set_updated_at();

alter table public.lesson_progress enable row level security;
alter table public.exercise_attempts enable row level security;
alter table public.flashcard_progress enable row level security;
alter table public.simulation_progress enable row level security;

-- No grants are given to anon. Authenticated users receive table privileges, while
-- RLS policies below restrict every row to the JWT subject (auth.uid()).
revoke all on public.lesson_progress, public.exercise_attempts, public.flashcard_progress, public.simulation_progress from anon;
grant select, insert, update, delete on public.lesson_progress, public.exercise_attempts, public.flashcard_progress, public.simulation_progress to authenticated;
grant usage, select on sequence public.exercise_attempts_id_seq to authenticated;

create policy lesson_progress_select_own on public.lesson_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy lesson_progress_insert_own on public.lesson_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy lesson_progress_update_own on public.lesson_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy lesson_progress_delete_own on public.lesson_progress for delete to authenticated using ((select auth.uid()) = user_id);

create policy exercise_attempts_select_own on public.exercise_attempts for select to authenticated using ((select auth.uid()) = user_id);
create policy exercise_attempts_insert_own on public.exercise_attempts for insert to authenticated with check ((select auth.uid()) = user_id);
create policy exercise_attempts_update_own on public.exercise_attempts for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy exercise_attempts_delete_own on public.exercise_attempts for delete to authenticated using ((select auth.uid()) = user_id);

create policy flashcard_progress_select_own on public.flashcard_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy flashcard_progress_insert_own on public.flashcard_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy flashcard_progress_update_own on public.flashcard_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy flashcard_progress_delete_own on public.flashcard_progress for delete to authenticated using ((select auth.uid()) = user_id);

create policy simulation_progress_select_own on public.simulation_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy simulation_progress_insert_own on public.simulation_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy simulation_progress_update_own on public.simulation_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy simulation_progress_delete_own on public.simulation_progress for delete to authenticated using ((select auth.uid()) = user_id);
