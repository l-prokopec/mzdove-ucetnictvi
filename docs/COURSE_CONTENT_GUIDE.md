# Průvodce obsahem kurzu

## Modul a lekce

Modul přidejte do `src/content/courses/payroll-cz/course.ts` se stabilním, anglickým kebab-case `id`, pořadím, referencí k osnově a stavem `planned` nebo `available`. Lekce musí mít trvale stejné `id`, `moduleId`, cíle, `skillIds`, bloky, nejméně tři kartičky, pět cvičení a zdroj. Jednou publikované ID neměňte: je součástí databázového klíče uživatelského pokroku.

Bloky jsou diskriminovaná union podle `type`: `paragraph`, `heading`, `definition`, `list`, `notice`, `example` a `summary`. Nepoužívá se HTML ani Markdown.

## Dovednosti, kartičky a otázky

Každá dovednost má stabilní `skillId`, který sdílí lekce, kartička a cvičení. Kartička vyžaduje `id`, přední a zadní stranu, vysvětlení a dovednosti.

Podporované typy cvičení:

- `single_choice`: možnosti a `correctOptionId`.
- `multiple_choice`: možnosti a množina `correctOptionIds`; pořadí odpovědí se ignoruje.
- `numeric`: desetinná očekávaná hodnota a tolerance jako řetězce, jednotka, zaokrouhlení a postup.
- `short_text`: pole povolených variant a volitelné ignorování diakritiky.
- `ordering`: kroky a pole ID ve správném pořadí.
- `self_assessed`: modelové řešení; aplikace vyžádá vlastní sebehodnocení.

Každá otázka musí mít původní vysvětlení správné odpovědi i konkrétní popis časté chyby. Správnou odpověď vždy definujte explicitně, nikdy ji neodvozujte jazykovým modelem.

## Platnost a zdroje

U tématu závislého na právní úpravě vyplňte `legalValidity` s rokem a omezením. Zdroj má druh `official`, `didactic` nebo `outline`. Konkrétní sazbu přidejte do `src/content/legal-parameters/cz-2026.ts` pouze s oficiálním zdrojem, datem platnosti a datem ověření. Po změně obsahu spusťte `npm run test` — Zod test zachytí neúplnou strukturu.

Nový typ otázky vyžaduje současnou změnu TypeScript union, Zod schématu, validátoru, komponenty formuláře, databázového check constraintu a testů.
