# Zadání: webová aplikace pro výuku českého mzdového účetnictví

V tomto repozitáři vytvoř kompletní první verzi webové aplikace pro systematickou výuku českého mzdového účetnictví.

Aplikace bude osobní interaktivní kurz připravující uživatele od úplných základů na juniorní pozici mzdové účetní v České republice.

Nejde o aplikaci využívající AI. V runtime aplikace nesmí používat žádný jazykový model, OpenAI API, chatbot, embeddings, generování textu ani jinou AI službu. Všechny výklady, otázky, správné odpovědi, vysvětlení, modelové příklady, validační pravidla a zpětná vazba musí být předem definované jako statický obsah aplikace.

---

# 1. Hlavní cíl

Vytvoř aplikaci, která uživatele systematicky provede kurzem českého mzdového účetnictví a umožní mu:

- studovat teorii po jednotlivých lekcích,
- procházet praktické příklady,
- odpovídat na otázky,
- počítat mzdové příklady,
- používat studijní kartičky,
- dostávat okamžité deterministické vyhodnocení,
- sledovat zvládnuté a nezvládnuté oblasti,
- opakovat chybně zodpovězené otázky,
- ukládat poznámky,
- sledovat celkový postup kurzem,
- pokračovat ve studiu na jiném počítači,
- později absolvovat závěrečnou zkoušku,
- později projít simulací práce mzdové účetní ve fiktivní firmě.

Aplikace musí fungovat bez vlastního serverového backendu:

```text
React aplikace na GitHub Pages
        │
        ▼
Supabase Auth + PostgreSQL
```

Frontend bude hostovaný zdarma na GitHub Pages. Přihlášení a synchronizaci uživatelského progresu bude zajišťovat Supabase Free.

---

# 2. Zásadní omezení

Dodrž následující pravidla:

1. Nepoužívej žádnou AI službu v runtime aplikace.
2. Nepoužívej placené služby.
3. Nevytvářej vlastní Node.js server ani serverless backend, pokud není objektivně nutný.
4. Nepoužívej Firebase, protože databázovou a autentizační vrstvou bude Supabase.
5. Nepoužívej SQLite jako zdroj synchronizovaných dat.
6. Nepoužívej service-role, secret key ani databázové heslo ve frontendu.
7. Do repozitáře necommituj skutečné environment variables.
8. Do veřejného repozitáře necommituj zdrojové PDF učebnice.
9. Nekopíruj text učebnice. PDF použij pouze pro získání osnovy a názvů témat.
10. Nevymýšlej neověřené legislativní údaje, sazby, limity nebo lhůty.
11. Nepředstírej právní závaznost obsahu aplikace.
12. Nepoužívej skutečná osobní data zaměstnanců.
13. Nepoužívej Redux ani jiný globální state management bez reálné potřeby.
14. Nevytvářej zbytečně obecný framework nebo složité abstrakce.
15. Nezastavuj implementaci jen proto, že ještě nejsou dostupné skutečné Supabase údaje.

---

# 3. Zdrojová osnova kurzu

V pracovním prostoru vyhledej soubor:

```text
mzdy-3-17.pdf
```

Preferovaná lokální cesta:

```text
docs/source/mzdy-3-17.pdf
```

PDF obsahuje obsah učebnice. Použij ho jako zdroj struktury kurzu.

Pokud soubor není dostupný:

- pokračuj podle osnovy uvedené v tomto zadání,
- nezastavuj práci,
- do závěrečného reportu napiš, že nebylo možné automaticky extrahovat podrobné členění.

PDF necommituj. Pokud je soubor pouze lokálně přítomný a není sledovaný Gitem:

- přidej vhodné pravidlo do `.gitignore`,
- ponech možnost mít lokální zdrojové dokumenty ve `docs/source/`,
- přidej `docs/source/README.md`,
- do README vysvětli, že licencované nebo autorsky chráněné zdroje nemají být publikovány.

Z PDF extrahuj pouze:

- názvy hlavních kapitol,
- názvy tematických celků,
- jejich hierarchii,
- případně čísla kapitol pro dohledatelnost.

Kvůli možným problémům s textovým kódováním názvy normalizuj do správné češtiny s diakritikou.

---

# 4. Tematické pokrytí kurzu

Kurz musí mít připravenou osnovu minimálně pro následující oblasti:

1. Úvod do mzdového účetnictví
2. Pracovněprávní základy
3. Pracovní poměr
4. DPP a DPČ
5. Pracovní doba a doba odpočinku
6. Překážky v práci
7. Dovolená
8. Základy odměňování
9. Mzda, plat a odměna z dohody
10. Mzdová zvýhodnění a příplatky
11. Splatnost a výplata mzdy
12. Srážky ze mzdy
13. Exekuce a insolvence
14. Cestovní náhrady
15. Průměrný a pravděpodobný výdělek
16. Osobní spis a ochrana osobních údajů
17. Kontrolní orgány
18. Zaměstnavatel a Úřad práce
19. Zaměstnávání osob se zdravotním postižením
20. Zaměstnávání cizinců a občanů EU
21. Daň z příjmů ze závislé činnosti
22. Zálohová a srážková daň
23. Prohlášení poplatníka
24. Slevy na dani
25. Daňové zvýhodnění
26. Roční zúčtování
27. Zdravotní pojištění
28. Sociální zabezpečení
29. Nemocenské pojištění
30. Náhrada mzdy při pracovní neschopnosti
31. Nemocenské dávky
32. Důchodové pojištění a ELDP
33. Náhrada škody
34. Pracovní úrazy a nemoci z povolání
35. Jednotné měsíční hlášení zaměstnavatele
36. Měsíční a roční uzávěrka mzdové agendy
37. Princip práce v programech POHODA, HELIOS a PAMICA
38. Závěrečná zkouška
39. Simulace práce ve fiktivní firmě

Zachovej vazbu na původní kapitoly PDF, ale studijní pořadí můžeš pedagogicky upravit.

Například detailní témata pracovněprávních základů mohou být v aplikaci rozdělena do několika menších a lépe zvládnutelných modulů.

---

# 5. Rozsah první implementace

Nevytvářej v jednom kroku kompletní odborný obsah odpovídající celé učebnici o stovkách stran. Takový výsledek by byl obtížně kontrolovatelný a legislativně nespolehlivý.

První implementace musí obsahovat:

## 5.1 Kompletní technickou aplikaci

Implementuj všechny hlavní obrazovky, navigaci, autentizaci, ukládání progresu, validaci odpovědí, hodnocení, poznámky, kartičky a připravenou architekturu pro další obsah.

## 5.2 Kompletní osnovu kurzu

Vytvoř strom všech modulů a tematických celků podle PDF.

Moduly, které ještě nemají kompletní obsah, označ stavem:

```ts
status: 'planned'
```

V uživatelském rozhraní se musí zobrazovat jako připravované, nikoliv jako hotové lekce.

## 5.3 Plně zpracovaný úvodní modul

Plně vytvoř minimálně následující lekce:

1. Co je mzdové účetnictví
2. Role a odpovědnost mzdové účetní
3. Průběh typického mzdového měsíce
4. Zaměstnanec, zaměstnavatel a závislá práce
5. Mzda, plat a odměna z dohody
6. Základní složky hrubé mzdy
7. Jednoduchý modelový příklad sestavení hrubé mzdy

Každá z těchto lekcí musí obsahovat:

- cíle lekce,
- stručný a původní výklad,
- vysvětlení pojmů,
- alespoň jeden praktický příklad,
- alespoň 3 studijní kartičky,
- alespoň 5 ověřovacích otázek,
- alespoň jeden úkol nebo praktickou situaci,
- předem připravenou zpětnou vazbu,
- seznam procvičovaných dovedností,
- zdroje nebo informaci, že jde o obecný didaktický obsah,
- datum nebo rok legislativní platnosti, pokud je relevantní.

Text musí být původní. Nekopíruj formulace z PDF ani z učebnice.

## 5.4 Ukázková simulace

Implementuj technický základ simulace firmy a jeden jednoduchý demonstrační měsíc.

Použij výhradně smyšlené údaje.

Ukázková firma může mít například dva zaměstnance a následující události:

- nástup zaměstnance,
- evidence základní mzdy,
- osobní ohodnocení,
- několik hodin přesčasu,
- krátká dovolená,
- kontrola vstupních podkladů.

První simulace nemusí obsahovat kompletní legislativní výpočet čisté mzdy, pokud nejsou ověřené všechny potřebné parametry. Může být zaměřená na správný pracovní postup a identifikaci potřebných podkladů.

---

# 6. Technologie

Použij:

- Vite
- React
- TypeScript
- TypeScript strict mode
- React Router
- HashRouter nebo ekvivalent vhodný pro GitHub Pages
- Supabase JavaScript client
- Supabase Auth
- Supabase PostgreSQL
- TanStack Query pro serverový stav a synchronizaci
- Zod pro runtime validaci obsahu a konfigurace
- React Hook Form tam, kde přináší reálnou hodnotu
- Decimal.js, Big.js nebo bezpečnou celočíselnou reprezentaci pro peněžní výpočty
- Vitest
- React Testing Library
- ESLint
- Prettier
- GitHub Actions
- běžné CSS, CSS Modules nebo jiný jednoduchý stylovací přístup

Nepoužívej těžkou komponentovou knihovnu, pokud ji nepotřebuješ. Aplikace má být vizuálně kvalitní, ale dlouhodobě udržitelná.

Použij aktuální stabilní verze kompatibilních balíčků.

---

# 7. Jazyk a lokalizace

Celé uživatelské rozhraní bude v češtině.

Používej:

- správnou českou diakritiku,
- české názvy stavů,
- české formátování data,
- české formátování měny,
- měnu CZK,
- časovou zónu Europe/Prague tam, kde je relevantní.

Kód, názvy souborů, proměnných a technická dokumentace mohou být anglicky.

Odborné pojmy v obsahu musí používat běžnou českou mzdovou terminologii.

---

# 8. Uživatelské role

První verze potřebuje pouze jednu aplikační roli:

```text
authenticated learner
```

Není potřeba administrační rozhraní ani role lektora.

Obsah kurzu bude uložen staticky v repozitáři. Databáze bude ukládat pouze individuální uživatelská data a progres.

---

# 9. Autentizace

Implementuj:

- registraci pomocí e-mailu a hesla,
- přihlášení,
- odhlášení,
- obnovení existující session,
- stav načítání session,
- srozumitelné chybové zprávy,
- chráněné části aplikace.

Přidej environment variable:

```env
VITE_ALLOW_SIGN_UP=true
```

Pokud bude nastavená na `false`, registrační formulář se nesmí zobrazovat.

To umožní po vytvoření osobního účtu registraci skrýt a zároveň ji případně zakázat i v Supabase administraci.

Nikdy nepoužívej ve frontendu:

- service-role key,
- secret key,
- databázové heslo,
- osobní access token.

Použij pouze:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

Připrav `.env.example`.

Skutečné `.env.local` nesmí být commitováno.

Pokud proměnné chybí, aplikace nesmí spadnout na prázdnou obrazovku. Zobraz jasnou konfigurační stránku s instrukcí, které proměnné chybí.

---

# 10. Navigace a obrazovky

Implementuj minimálně následující routy:

```text
/
#/login
#/course
#/course/module/:moduleId
#/course/lesson/:lessonId
#/review
#/checklist
#/simulation
#/statistics
#/settings
```

Konkrétní podoba hash URL může odpovídat použitému routeru.

## 10.1 Přihlašovací stránka

Obsahuje:

- název aplikace,
- krátké vysvětlení účelu,
- přihlášení,
- volitelnou registraci,
- chybové stavy,
- stav zpracování.

## 10.2 Dashboard

Obsahuje:

- tlačítko „Pokračovat ve studiu“,
- aktuální lekci,
- celkový postup kurzem,
- postup po modulech,
- počet dokončených lekcí,
- průměrné skóre,
- otázky určené k opakování,
- slabé oblasti,
- naposledy studované lekce,
- přehled dovedností.

## 10.3 Osnova kurzu

Zobraz:

- moduly,
- lekce,
- stav modulu,
- stav lekce,
- procento dokončení,
- poslední dosažené skóre,
- doporučené pořadí,
- označení připravovaného obsahu.

Nepoužívej tvrdé zamykání lekcí. Uživatel může otevřít libovolnou dostupnou lekci, ale aplikace může zobrazovat doporučené pořadí.

## 10.4 Detail lekce

Každá lekce může obsahovat:

1. cíle lekce,
2. výklad,
3. klíčové pojmy,
4. praktické příklady,
5. studijní kartičky,
6. procvičování,
7. závěrečný test,
8. vyhodnocení,
9. kontrolní checklist,
10. uživatelskou poznámku,
11. zdroje a legislativní platnost.

Uložení poznámky musí být automatické nebo explicitně potvrzené a musí mít viditelný stav:

- ukládání,
- uloženo,
- chyba při ukládání.

## 10.5 Opakování

Obrazovka opakování musí zobrazovat:

- chybně zodpovězené otázky,
- kartičky označené jako nezvládnuté,
- témata s nízkým skóre,
- doporučené další opakování.

Pro první verzi implementuj jednoduchý deterministický algoritmus. Není nutné implementovat přesný SM-2.

Například:

- nesprávná odpověď: zopakovat dnes,
- částečné zvládnutí: zopakovat za 2 dny,
- správná odpověď: zopakovat za 7 dní,
- opakovaně správná odpověď: interval postupně prodlužovat.

## 10.6 Checklist dovedností

Zobraz přehled typu:

```text
[✓] Rozliším mzdu, plat a odměnu z dohody
[~] Rozumím základním složkám hrubé mzdy
[ ] Umím samostatně vypočítat čistou mzdu
```

Použij minimálně stavy:

```ts
type MasteryStatus = 'not_started' | 'partial' | 'mastered'
```

Checklist se má odvozovat z dokončených lekcí a výsledků otázek, nikoliv být pouze ručně editovaný.

## 10.7 Statistiky

Zobraz:

- počet dokončených lekcí,
- počet pokusů,
- průměrné skóre,
- úspěšnost podle tématu,
- nejčastěji chybované dovednosti,
- historii studia,
- počet kartiček čekajících na opakování.

Nepřidávej externí analytickou službu.

---

# 11. Typy výukového obsahu

Navrhni silně typovaný datový model kurzu.

Použij diskriminované TypeScript union typy a Zod schémata.

Kurz musí podporovat minimálně:

## 11.1 Textový výklad

- nadpisy,
- odstavce,
- upozornění,
- definice,
- seznamy,
- shrnutí,
- příklady.

Není potřeba obecný Markdown renderer, pokud jednoduchý typovaný obsah poskytne lepší bezpečnost a kontrolu.

## 11.2 Studijní kartičky

Kartička obsahuje:

- stabilní ID,
- otázku nebo pojem,
- odpověď,
- vysvětlení,
- související dovednosti.

Uživatel nejprve vidí přední stranu, poté odpověď odkryje a zvolí:

- Neumím
- Částečně
- Umím

Výsledek se uloží.

## 11.3 Otázka s jednou odpovědí

Obsahuje:

- text otázky,
- možnosti,
- ID správné možnosti,
- vysvětlení správné odpovědi,
- vysvětlení časté chyby.

## 11.4 Otázka s více odpověďmi

Obsahuje množinu správných možností.

Vyhodnocení nesmí záviset na pořadí vybraných odpovědí.

## 11.5 Číselná otázka

Obsahuje:

- očekávanou hodnotu,
- jednotku,
- povolenou toleranci,
- pravidlo zaokrouhlení,
- postup řešení,
- vysvětlení.

Peněžní výpočty neprováděj pomocí nepřesné aritmetiky běžných JavaScriptových desetinných čísel.

## 11.6 Krátká textová odpověď

Použij ji pouze tam, kde existuje rozumná deterministická validace.

Podporuj:

- trim,
- ignorování velikosti písmen,
- více povolených variant,
- volitelnou normalizaci diakritiky.

Nepokoušej se algoritmicky hodnotit libovolné dlouhé odpovědi.

## 11.7 Seřazení kroků

Uživatel seřadí kroky pracovního postupu.

Pro první verzi nemusí být implementovaný drag and drop. Může být použito přístupnější ovládání tlačítky nebo selecty.

## 11.8 Sebehodnocený praktický úkol

Pro úkoly s otevřenou odpovědí použij:

1. zadání,
2. textové pole pro vlastní odpověď,
3. tlačítko „Zobrazit modelové řešení“,
4. předem napsané modelové řešení,
5. sebehodnocení:

```text
Nezvládnuto
Částečně
Zvládnuto
```

Aplikace nesmí tvrdit, že otevřenou odpověď automaticky odborně vyhodnotila.

---

# 12. Hodnocení

Po každé lekci zobraz:

- dosažené skóre,
- správné odpovědi,
- chybné odpovědi,
- vysvětlení chyb,
- procvičované dovednosti,
- doporučení k opakování.

Použij následující hodnocení:

```text
🟢 Zvládnuto: 80–100 %
🟡 Částečně zvládnuto: 50–79 %
🔴 Nezvládnuto: 0–49 %
```

Barva nesmí být jediným způsobem předání informace. Vždy zobraz také text a přístupný symbol nebo ikonu.

Lekce může získat stav `completed`, pokud:

- byly dokončeny všechny povinné části,
- byl odevzdán závěrečný test,
- uživatel dosáhl alespoň 80 %.

Uživatel může test opakovat. Ukládej:

- poslední skóre,
- nejlepší skóre,
- počet pokusů,
- datum dokončení,
- datum posledního otevření.

---

# 13. Datový model statického obsahu

Obsah kurzu drž v repozitáři, například:

```text
src/
  content/
    courses/
      payroll-cz/
        course.ts
        modules/
          introduction/
          labour-law/
          remuneration/
          taxation/
          health-insurance/
          social-insurance/
          sickness-insurance/
          pension-insurance/
          reporting/
          simulation/
```

Každý modul a lekce musí mít stabilní ID.

Příklad požadovaného konceptu:

```ts
interface Course {
  id: string
  title: string
  description: string
  version: string
  defaultLegalYear: number
  modules: CourseModule[]
}

interface CourseModule {
  id: string
  sourceReference?: string
  title: string
  description: string
  order: number
  status: 'available' | 'planned'
  lessons: Lesson[]
}

interface Lesson {
  id: string
  moduleId: string
  title: string
  order: number
  status: 'available' | 'planned'
  objectives: string[]
  skillIds: string[]
  legalValidity?: LegalValidity
  blocks: LessonBlock[]
  flashcards: Flashcard[]
  exercises: Exercise[]
  sources: SourceReference[]
}
```

Toto je koncept, ne povinná přesná implementace. Menší změny jsou možné, pokud budou dobře zdůvodněné.

Obsah při startu aplikace validuj přes Zod. Chybný obsah musí vyvolat srozumitelnou vývojářskou chybu.

---

# 14. Legislativní parametry a verze obsahu

Mzdové účetnictví se průběžně mění. Architektura musí oddělit:

- obecné principy,
- legislativní parametry konkrétního roku,
- výpočtovou logiku,
- text jednotlivých lekcí.

Připrav strukturu například:

```text
src/content/legal-parameters/
  cz-2026.ts
```

Každý legislativní parametr musí umožnit uložit:

```ts
interface LegalParameter<T> {
  id: string
  value: T
  validFrom: string
  validTo?: string
  sourceTitle: string
  sourceUrl?: string
  verifiedAt?: string
}
```

Příklady parametrů:

- sazby pojistného,
- hranice příjmů,
- minimální mzda,
- daňové slevy,
- redukční hranice,
- limity DPP a DPČ.

Nevkládej konkrétní hodnotu, pokud ji nelze ověřit z důvěryhodného zdroje.

Pokud máš během implementace dostupný internet:

- používej primárně oficiální české zdroje,
- preferuj e-Sbírku, MPSV, ČSSZ, Finanční správu a další příslušné úřady,
- ulož zdroj a datum ověření,
- ve výsledném reportu vypiš, které hodnoty byly ověřeny.

Pokud internet dostupný není:

- nevymýšlej hodnoty,
- nevytvářej neověřené legislativní tvrzení,
- u numerických ukázkových příkladů můžeš použít parametry explicitně uvedené přímo v zadání otázky,
- tyto příklady označ jako didaktické, nikoliv jako aktuální zákonný výpočet.

V aplikaci zobraz:

```text
Studijní obsah: verze 2026.x
Legislativní stav: podle údajů uvedených u jednotlivých lekcí
```

Přidej viditelné upozornění:

```text
Aplikace je studijní pomůcka. Nenahrazuje aktuální právní, daňové ani mzdové poradenství.
```

---

# 15. Výpočtová logika

Výpočty odděl od React komponent.

Použij čisté funkce například pro:

- součet složek hrubé mzdy,
- výpočet hodinové sazby podle explicitně zadaných parametrů,
- příplatky,
- zaokrouhlování,
- porovnání uživatelské odpovědi,
- výpočet procentuálního skóre.

Výpočtové funkce musí:

- být typované,
- být testovatelné,
- nepřistupovat přímo do databáze,
- nepoužívat globální stav,
- mít testy pro hraniční hodnoty,
- explicitně řešit zaokrouhlování.

Nepřidávej „univerzální kalkulačku čisté mzdy“, dokud nejsou všechny její parametry a pravidla odborně ověřené.

---

# 16. Databáze Supabase

V databázi ukládej pouze uživatelský progres.

Připrav SQL migraci v:

```text
supabase/migrations/
```

Datový model musí pokrývat minimálně následující tabulky.

## 16.1 `lesson_progress`

Doporučená pole:

```text
user_id
course_id
lesson_id
content_version
status
last_score
best_score
attempts_count
notes
started_at
completed_at
last_opened_at
updated_at
```

Použij složený primární nebo unikátní klíč:

```text
user_id + course_id + lesson_id
```

Stav lekce:

```text
not_started
in_progress
completed
```

## 16.2 `exercise_attempts`

Doporučená pole:

```text
id
user_id
course_id
lesson_id
exercise_id
exercise_type
answer
score
is_correct
created_at
```

Odpověď může být uložena jako `jsonb`.

Neukládej citlivé osobní údaje.

## 16.3 `flashcard_progress`

Doporučená pole:

```text
user_id
course_id
flashcard_id
mastery_level
review_count
last_reviewed_at
next_review_at
updated_at
```

Použij unikátní kombinaci:

```text
user_id + course_id + flashcard_id
```

## 16.4 `simulation_progress`

Doporučená pole:

```text
user_id
simulation_id
current_step
state
score
completed_at
updated_at
```

Pro jednoduchý stav simulace může být použito `jsonb`.

Menší změny schématu jsou možné, pokud zlepší integritu nebo jednoduchost.

---

# 17. Row Level Security

Na všech tabulkách obsahujících uživatelská data:

- zapni RLS,
- odeber přístup roli `anon`,
- povol potřebné operace roli `authenticated`,
- vytvoř SELECT, INSERT, UPDATE a případně DELETE policy,
- vždy kontroluj:

```sql
auth.uid() = user_id
```

U INSERT a UPDATE použij správně `with check`.

Uživatel nesmí:

- číst data jiného uživatele,
- vložit záznam pod jiným `user_id`,
- aktualizovat data jiného uživatele.

Přidej potřebné:

- foreign keys,
- check constraints,
- unique constraints,
- indexy,
- automatickou aktualizaci `updated_at`, pokud je vhodná.

Do migrace přidej komentáře vysvětlující bezpečnostní rozhodnutí.

Připrav také krátký manuální postup ověření RLS.

---

# 18. Synchronizace mezi zařízeními

Po přihlášení:

1. načti uživatelský progres ze Supabase,
2. spoj ho se statickým obsahem kurzu,
3. zobraz aktuální stav,
4. po změně proveď upsert,
5. aktualizuj UI optimisticky,
6. při chybě změnu vrať a zobraz chybu.

Použij TanStack Query.

Nastav:

- refetch po návratu do okna,
- rozumnou invalidaci query,
- viditelné načítací stavy,
- viditelné chybové stavy,
- retry pouze tam, kde dává smysl.

Není nutné implementovat Supabase Realtime. Pro první verzi stačí synchronizace:

- při přihlášení,
- při načtení stránky,
- při návratu do okna,
- po uložení změny,
- po ručním obnovení.

Pro konflikty u osobní aplikace použij strategii posledního zápisu podle `updated_at`.

---

# 19. Architektura aplikace

Použij přehlednou strukturu podobnou:

```text
src/
  app/
  components/
  content/
  features/
    auth/
    course/
    lessons/
    exercises/
    flashcards/
    review/
    checklist/
    statistics/
    simulation/
  lib/
  services/
  types/
  utils/
```

Nevytvářej adresáře jen kvůli formální architektuře. Struktura musí odpovídat skutečným hranicím funkcionality.

Odděl:

- obsah kurzu,
- komponenty,
- validační logiku odpovědí,
- výpočtovou logiku,
- Supabase klienta,
- databázové služby,
- query hooks,
- prezentační stav.

React komponenty nesmí obsahovat rozsáhlou databázovou nebo výpočtovou logiku.

---

# 20. Uživatelské rozhraní

Vytvoř moderní, čisté a profesionální rozhraní vhodné pro studium.

Požadavky:

- responzivní desktop i mobilní zobrazení,
- přehledná typografie,
- dostatečný kontrast,
- jednoznačné aktivní prvky,
- přístupné formuláře,
- ovladatelnost klávesnicí,
- viditelný focus,
- správné HTML prvky,
- žádné horizontální posouvání na telefonu,
- rozumně široký studijní text,
- navigace v rámci lekce,
- jasný postup „předchozí / další lekce“.

Barevné stavy:

- zelená: zvládnuto,
- žlutá: částečně,
- červená: nezvládnuto,
- neutrální: nezahájeno.

Nepředávej význam pouze barvou.

Používej ikony a emoji střídmě. Aplikace má působit jako seriózní vzdělávací nástroj, ne jako dětská hra.

---

# 21. GitHub Pages

Aplikace bude nasazená na GitHub Pages.

Implementuj:

- správné Vite `base`,
- GitHub Actions workflow,
- build do `dist`,
- deployment přes oficiální GitHub Pages actions,
- podporu spuštění z podcesty repozitáře,
- router kompatibilní s obnovením stránky na GitHub Pages.

Pokud lze zjistit název repozitáře z Git konfigurace, použij ho.

Pokud název nelze zjistit:

- připrav centrální konfigurační hodnotu,
- nepoužívej na více místech natvrdo stejný název,
- zdokumentuj, kde hodnotu změnit.

GitHub Actions musí před deploymentem spustit:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Použij GitHub repository variables:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
VITE_ALLOW_SIGN_UP
```

Žádné tajné serverové klíče.

---

# 22. README a dokumentace

Připrav kvalitní `README.md` obsahující:

1. účel aplikace,
2. technologický stack,
3. architekturu,
4. lokální spuštění,
5. vytvoření `.env.local`,
6. vytvoření Supabase projektu,
7. spuštění SQL migrace,
8. nastavení Supabase Auth,
9. nastavení Site URL a Redirect URLs,
10. nastavení GitHub repository variables,
11. zapnutí GitHub Pages,
12. deployment,
13. bezpečnostní upozornění,
14. informaci o legislativní verzi,
15. informaci o zdrojovém PDF,
16. upozornění, že PDF nemá být publikováno,
17. postup přidání nové lekce,
18. postup přidání nového typu otázky,
19. postup aktualizace legislativních parametrů.

Přidej také:

```text
docs/ARCHITECTURE.md
docs/COURSE_CONTENT_GUIDE.md
docs/SUPABASE_SETUP.md
```

## `COURSE_CONTENT_GUIDE.md`

Musí vysvětlit:

- jak vytvořit modul,
- jak vytvořit lekci,
- jak přidat cíle,
- jak přidat dovednosti,
- jak přidat kartičku,
- jak přidat jednotlivé typy otázek,
- jak definovat správnou odpověď,
- jak definovat zpětnou vazbu,
- jak přidat legislativní platnost,
- jak přidat zdroj,
- jak zabránit změně stabilních ID.

---

# 23. Testování

Přidej testy minimálně pro:

- validaci single-choice odpovědi,
- validaci multiple-choice odpovědi,
- číselnou odpověď s tolerancí,
- pravidla zaokrouhlení,
- normalizaci krátké textové odpovědi,
- výpočet skóre lekce,
- převod skóre na červený, žlutý nebo zelený stav,
- výpočet stavu checklistu,
- algoritmus dalšího opakování kartičky,
- načtení a validaci ukázkového obsahu,
- chování při chybějících environment variables,
- alespoň základní komponentový test lekce.

Testy nesmí záviset na reálném Supabase projektu.

Datovou vrstvu navrhni tak, aby bylo možné Supabase volání mockovat.

---

# 24. Bezpečnost a soukromí

Dodrž:

- žádné tajné klíče ve frontendu,
- žádná skutečná osobní data,
- bezpečné RLS,
- validace environment variables,
- validace statického obsahu,
- bezpečné zobrazování uživatelských poznámek,
- žádné použití `dangerouslySetInnerHTML`, pokud není nezbytné,
- žádné ukládání hesla aplikací,
- žádné vlastní logování access tokenů,
- žádné vypisování session do produkční konzole.

Ve fiktivních scénářích používej smyšlené osoby a zjevně testovací údaje. Nepoužívej reálně vypadající platná rodná čísla.

---

# 25. Kvalita kódu

Požaduji:

- TypeScript strict mode,
- žádné neodůvodněné `any`,
- malé a srozumitelné komponenty,
- čisté funkce pro výpočty,
- konzistentní názvy,
- stabilní ID obsahu,
- centrální datové modely,
- srozumitelné chybové stavy,
- minimální duplicitu,
- žádné zbytečné komentáře popisující zřejmý kód,
- komentáře pouze u důležitých rozhodnutí a složitější logiky.

Nepřidávej abstrakci jen kvůli hypotetickému budoucímu použití.

---

# 26. Požadovaný pracovní postup

Postupuj v tomto pořadí:

## Fáze 1: Analýza

1. Prozkoumej repozitář.
2. Zjisti, zda už obsahuje aplikaci.
3. Zjisti název repozitáře a hlavní branch.
4. Vyhledej zdrojové PDF.
5. Zkontroluj `.gitignore`.
6. Navrhni stručný implementační plán.
7. Identifikuj rizika, zejména legislativní správnost a dostupnost PDF.

## Fáze 2: Technický základ

1. Inicializuj nebo uprav Vite React TypeScript projekt.
2. Nastav lint, formátování, testy a typecheck.
3. Připrav router.
4. Připrav základní layout.
5. Připrav environment konfiguraci.
6. Připrav Supabase klienta.
7. Připrav autentizaci.

## Fáze 3: Datový model kurzu

1. Vytvoř TypeScript typy.
2. Vytvoř Zod schémata.
3. Vytvoř course registry.
4. Z PDF vytvoř normalizovanou osnovu.
5. Připrav stabilní ID.
6. Připrav úvodní lekce.

## Fáze 4: Výukové funkce

1. Detail lekce.
2. Kartičky.
3. Otázky.
4. Deterministická validace.
5. Hodnocení.
6. Checklist.
7. Opakování.
8. Statistiky.
9. Poznámky.

## Fáze 5: Supabase

1. Připrav migraci.
2. Připrav RLS.
3. Připrav datové služby.
4. Připrav TanStack Query hooks.
5. Implementuj optimistické aktualizace.
6. Implementuj synchronizaci.

## Fáze 6: Simulace

1. Připrav datový model simulace.
2. Implementuj demonstrační měsíc.
3. Ulož stav simulace do Supabase.

## Fáze 7: Deployment

1. Nastav Vite base.
2. Připrav GitHub Actions.
3. Připrav dokumentaci.
4. Ověř produkční build.

## Fáze 8: Kontrola

Spusť:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Oprav všechny chyby.

Nenechávej známé TypeScript, lint nebo testovací chyby.

---

# 27. Akceptační kritéria

Implementace je hotová pouze tehdy, pokud platí:

- aplikace se lokálně spustí,
- aplikace se úspěšně sestaví,
- TypeScript kontrola projde,
- lint projde,
- testy projdou,
- chybějící Supabase konfigurace má srozumitelnou obrazovku,
- přihlášený uživatel může procházet kurz,
- úvodní modul je plně použitelný,
- otázky se vyhodnocují bez AI,
- výsledky se ukládají do Supabase,
- poznámky se ukládají do Supabase,
- kartičky se ukládají do Supabase,
- uživatel po přihlášení na jiném zařízení uvidí svůj progres,
- druhý uživatel nemůže číst cizí progres,
- připravované moduly nejsou prezentované jako dokončený obsah,
- PDF není součástí produkčního buildu,
- PDF není nově commitované,
- GitHub Pages workflow je připravené,
- README obsahuje všechny manuální kroky,
- aplikace nepoužívá žádnou AI službu,
- aplikace nepoužívá placenou službu,
- aplikace obsahuje právní a legislativní upozornění.

---

# 28. Manuální kroky, které nemáš blokovat

Při práci mohou chybět:

- skutečný Supabase projekt,
- Project URL,
- publishable key,
- spuštěná SQL migrace,
- GitHub repository variables,
- zapnuté GitHub Pages.

Kvůli tomu implementaci nezastavuj.

Použij `.env.example`, mocky v testech a připrav vše tak, aby uživatel mohl údaje později doplnit.

Nikdy nevkládej falešný produkční klíč.

---

# 29. Závěrečný výstup

Po dokončení napiš přesný report obsahující:

1. stručný popis implementované architektury,
2. seznam hlavních vytvořených a změněných souborů,
3. seznam implementovaných funkcí,
4. počet dostupných modulů a lekcí,
5. co bylo získáno z PDF,
6. které odborné části jsou pouze připravené jako osnova,
7. které legislativní hodnoty byly ověřeny,
8. které hodnoty zůstaly záměrně nedoplněné,
9. výsledky lint, typecheck, test a build,
10. přesné manuální kroky v Supabase,
11. přesné manuální kroky na GitHubu,
12. známá omezení,
13. doporučené pořadí dalšího doplňování kurzu.

Nevypisuj skutečné hodnoty z `.env.local`.

Nevytvářej ani nespouštěj placené prostředky.

Neprováděj automatický push, deployment ani destruktivní Git operace bez výslovného povolení.

Začni analýzou aktuálního stavu repozitáře a poté pokračuj implementací.
