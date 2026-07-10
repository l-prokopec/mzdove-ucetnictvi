# Architektura

Aplikace je statický Vite/React klient vhodný pro GitHub Pages. `HashRouter` zajišťuje navigaci bez serverových přepisů. Obsah kurzu je verzovaný TypeScript v `src/content`, při importu validovaný Zod schématem. Do databáze se ukládají pouze uživatelská data.

## Vrstvy

- `src/content/courses/payroll/outline.ts`: jediný zdroj pravdy pro pořadí modulů a plánovaných lekcí.
- `src/content/courses/payroll/course.ts`: odvozený kompatibilní pohled pro současné UI; neobsahuje vlastní osnovu.
- `src/content`: Zod validace osnovy, hotových lekcí, kartiček a předem definované zpětné vazby.
- `src/lib`: konfigurace a čisté deterministické výpočty.
- `src/services`: malé funkce pro Supabase; UI neobsahuje SQL ani dotazy.
- `src/features`: autentizace, query hooks a obrazovky.
- `supabase/migrations`: schéma, omezení, indexy a RLS.

TanStack Query načítá pokrok po přihlášení, při návratu do okna a po invalidaci. Mutace lekce používá optimistickou aktualizaci s návratem původních dat při chybě. Konflikt řeší poslední zápis podle serverového `updated_at`. Runtime nepoužívá AI, externí analytiku ani vlastní backend.

## Bezpečnostní hranice

Frontend zná pouze Supabase Project URL a publishable key. RLS porovnává `auth.uid()` s `user_id` pro každou operaci. Statický obsah neobsahuje osobní data a poznámky React zobrazuje jako text bez `dangerouslySetInnerHTML`.
