# Průvodce obsahem kurzu

## Jeden zdroj pravdy

Master osnova je v `src/content/courses/payroll/outline.ts`. Pouze zde se udržuje pořadí modulů a lekcí, názvy, popisy, cíle, prerequisites, kategorie a stav publikace.

`src/content/courses/payroll/course.ts` je technický adaptér, který osnovu spojuje s registrem plného obsahu. Ručně ho neupravujte a nevkládejte do něj obsah lekcí.

## Struktura plného obsahu

Plný obsah patří pod:

```text
src/content/courses/payroll/lesson-content/
  <module-id>/
    <lesson-id>.ts
    index.ts
  registry.ts
  types.ts
```

Jedna lekce má jeden soubor. Soubor neobsahuje `id`, název, pořadí, cíle ani stav; ty se vždy přebírají z outline. Obsahuje pouze `moduleId`, skill IDs, legislativní metadata, bloky, kartičky, cvičení a zdroje.

## Přidání souboru lekce

Vytvořte například `lesson-content/payroll-foundations/payroll-purpose.ts`:

```ts
import { defineLessonContent } from '../define'

export const payrollPurposeContent = defineLessonContent({
  moduleId: 'payroll-foundations',
  skillIds: ['payroll-workflow'],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-10',
    note: 'Obecné principy ověřené pro české prostředí.',
  },
  blocks: [],
  flashcards: [],
  exercises: [],
  sources: [],
})
```

Ukázka pouze znázorňuje umístění a datový tvar. Takto prázdný objekt validací publikace neprojde a nesmí být zaregistrován jako hotová lekce.

## Registrace obsahu

V adresáři modulu vytvořte `index.ts`, který exportuje registr daného modulu pod stabilním ID lekce:

```ts
import { defineLessonContentRegistry } from '../define'
import { payrollPurposeContent } from './payroll-purpose'

export const payrollFoundationsContent = defineLessonContentRegistry({
  'payroll-purpose': payrollPurposeContent,
})
```

Poté importujte modulový registr v centrálním `lesson-content/registry.ts` a rozbalte ho do `lessonContentRegistry`. Neznámé lesson ID nebo nesprávné `moduleId` způsobí chybu při sestavení kurzu.

## Změna z planned na available

1. Dokončete a odborně zkontrolujte soubor plného obsahu.
2. Zaregistrujte jej v modulovém a centrálním registru.
3. Spusťte všechny kontroly projektu.
4. Teprve potom změňte `status` příslušné lekce v `outline.ts` z `planned` na `available`.

Lekce `planned` může být bez plného obsahu. Lekce `available` bez registrovaného úplného obsahu ukončí build nebo test chybou.

## Povinné kontroly lekce

Dostupná lekce musí mít:

- alespoň jeden výkladový blok,
- alespoň tři studijní kartičky,
- alespoň pět cvičení s deterministickou správnou odpovědí,
- neprázdné skill IDs,
- strukturovanou legislativní platnost,
- alespoň jeden oficiální zdroj,
- `moduleId` shodné s outline.

Zod dále kontroluje strukturu jednotlivých typů bloků a cvičení. `course.ts` ověřuje známé lesson ID, shodu modulu a úplnost všech dostupných lekcí.

## Legislativní metadata a zdroje

`legalValidity` patří k plnému odbornému obsahu, nikoli k outline. Uvádí:

- `jurisdiction`, pro tento kurz obvykle `CZ`,
- `validFrom` ve formátu `YYYY-MM-DD`,
- volitelné `validTo`,
- `verifiedAt`, datum posledního odborného ověření,
- stručnou poznámku k rozsahu platnosti.

Oficiální zdroje ukládejte do `sources` s `kind: 'official'`, názvem a přímou URL. Preferujte e-Sbírku, MPSV, ČSSZ, Finanční správu, zdravotní pojišťovny a další věcně příslušné instituce. Konkrétní sazby a limity patří do verzovaných souborů `src/content/legal-parameters/`, nikoli přímo do outline.

## Stabilita ID

Po zveřejnění lekce její ID neměňte. `lesson_id` je součástí uživatelského pokroku a klíčem registru plného obsahu. Přejmenování titulku je možné, změna ID vyžaduje vědomé řešení dopadu na uložená data.

## Rozsah kurzu

Zdrojové PDF slouží jako kontrolní mapa odborných témat, nikoli jako předloha k mechanickému kopírování kapitol. Pořadí a velikost lekcí vycházejí z praktické návaznosti mzdového procesu a z více odborných a oficiálních zdrojů.

Kurz se soustředí na běžnou českou mzdovou praxi a schopnost samostatně zpracovat měsíční mzdu. Velmi specializovaná témata mimo běžnou agendu mohou být později doplněna jako referenční nebo advanced rozšíření, aniž by narušila hlavní studijní cestu.

## Kontroly před publikací

```bash
npm run lint
npm run typecheck
npm run test
npm run build
git diff --check
```
