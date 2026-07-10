# Mzdová akademie

Osobní česká webová aplikace pro systematickou výuku mzdového účetnictví od základních pojmů. Obsahová vrstva nyní obsahuje novou master osnovu s 30 moduly a 184 konkrétními plánovanými lekcemi. Plné texty lekcí budou vznikat postupně; připravované lekce proto aplikace neprezentuje jako hotový obsah. Nevyužívá AI ani placené runtime služby.

## Stack a architektura

Vite, React, strict TypeScript, HashRouter, Supabase Auth/PostgreSQL, TanStack Query, Zod, React Hook Form-ready formuláře, Decimal.js, Vitest/Testing Library, ESLint a Prettier. Podrobnosti jsou v [architektuře](docs/ARCHITECTURE.md).

## Lokální spuštění

Požadován je Node.js 22+.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Do `.env.local` doplňte `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` a případně `VITE_ALLOW_SIGN_UP=false`. Skutečný env soubor je ignorován. Bez konfigurace aplikace zobrazí instrukční obrazovku, ne prázdnou stránku.

## Supabase

Vytvořte Free projekt, spusťte migraci z `supabase/migrations`, nastavte Email Auth, Site URL a Redirect URLs. Přesný postup včetně ručního RLS testu je v [nastavení Supabase](docs/SUPABASE_SETUP.md). Frontend nikdy nesmí obsahovat service-role key, databázové heslo ani osobní token.

## GitHub Pages

V Settings > Pages nastavte Source na **GitHub Actions**. V Settings > Secrets and variables > Actions > Variables vytvořte:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_ALLOW_SIGN_UP`

Push do `master` spustí lint, typecheck, testy, build a oficiální Pages deployment. Vite base je centralizovaný ve `vite.config.ts` pro repository `mzdove-ucetnictvi`; při přejmenování ho změňte právě tam.

## Obsah a legislativa

Obsah verze 2026.1 je studijní pomůcka a nenahrazuje aktuální právní, daňové ani mzdové poradenství. První verze záměrně neobsahuje neověřené sazby, limity ani univerzální kalkulačku čisté mzdy. Postup přidávání lekcí, otázkových typů a legislativních parametrů je v [průvodci obsahem](docs/COURSE_CONTENT_GUIDE.md).

Lokální PDF posloužilo pouze k osnově. Je autorsky chráněným zdrojem, nesmí se publikovat, je ignorováno Gitem a nevstupuje do buildu. Normalizované názvy hlavních kapitol jsou v [PDF osnově](docs/PDF_OUTLINE.md).

## Kontroly

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Veškerý obsah a vyhodnocení jsou předem definované a deterministické. Aplikace neposílá studijní odpovědi žádné AI službě ani externí analytice.
