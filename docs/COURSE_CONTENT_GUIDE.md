# Průvodce obsahem kurzu

## Jeden zdroj pravdy

Master osnova je v `src/content/courses/payroll/outline.ts`. Obsahuje pořadí modulů, prerequisites, plánované lekce, praktické situace, výpočtové příklady a modulové testy. `course.ts` ve stejné složce je pouze technický adapter pro současné UI; ručně do něj obsah nepřidávejte.

Strukturu osnovy popisuje `src/types/course-outline.ts` a při importu ji validuje `src/content/outline-schema.ts`. Validace kontroluje také unikátní ID a to, že návaznosti odkazují pouze na dříve zařazené moduly a lekce.

## Modul

Nový modul přidejte do pole `modules` se stabilním kebab-case `id`. Vyplňte název, popis, obtížnost, odhad času, prerequisites, learning objectives, kategorii `core` nebo `advanced`, praktické situace, plánované výpočty a tematické zdroje. Modulový test vytváří helper z těchto metadat.

Kategorie `core` označuje hlavní cestu k samostatnému měsíčnímu zpracování. `advanced` je méně častá nebo specializovaná agenda. Obtížnost je nezávislá na kategorii: i jádrový závěrečný modul může být obtížností pokročilý.

## Plánovaná lekce

Každá lekce má stabilní ID, konkrétní název a popis, čas, learning objectives, návaznosti, typ, stav a příznaky výpočtového příkladu a cvičení. Helper v osnově automaticky nastavuje návaznost na předchozí lekci modulu. Jednou publikované ID neměňte: `lesson_id` je součástí uživatelského pokroku.

Dokud lekce nemá odborně zkontrolované bloky, nejméně tři kartičky, pět cvičení a zdroje, ponechte `status: 'planned'`. Adapter pro UI v takovém případě vytváří prázdné obsahové kolekce a Zod je dovolí pouze plánované lekci. U `available` lekce původní minimální požadavky zůstávají povinné.

## Tvorba plného obsahu

Při zpřístupnění lekce je potřeba doplnit plný objekt podle `src/types/course.ts`: cíle, skill IDs, bloky, kartičky, cvičení, zdroje a případnou legislativní platnost. Správná odpověď a zpětná vazba musí být explicitní a deterministická.

Konkrétní sazbu nebo limit přidejte do `src/content/legal-parameters/cz-2026.ts` pouze s oficiálním zdrojem, dobou platnosti a datem ověření. Po každé změně spusťte `npm run lint`, `npm run typecheck`, `npm run test` a `npm run build`.
