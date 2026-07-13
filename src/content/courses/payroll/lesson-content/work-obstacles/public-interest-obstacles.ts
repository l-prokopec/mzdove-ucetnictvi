import { defineLessonContent } from '../define'

export const publicInterestObstaclesContent = defineLessonContent({
  moduleId: 'work-obstacles',
  skillIds: [
    'public-interest-obstacle-classification',
    'public-interest-paid-status',
    'public-interest-documentation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Překážky v práci z důvodu obecného zájmu podle § 200 až 205 zákoníku práce včetně limitu náhrady pro akce dětí a mládeže 276,90 Kč za hodinu pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Obecný zájem má vlastní právní titul',
    },
    {
      type: 'paragraph',
      text: 'Překážky z důvodu obecného zájmu jsou překážkami na straně zaměstnance, ale nevycházejí z jeho soukromé osobní situace. Zaměstnanec plní veřejnou funkci, občanskou povinnost nebo jiný zákonem vymezený úkon v obecném zájmu.',
    },
    {
      type: 'definition',
      term: 'Překážka z důvodu obecného zájmu',
      definition:
        'Zákonem uznaná nepřítomnost, při které zaměstnanec v době své směny plní veřejnou funkci, občanskou povinnost nebo jiný úkon v obecném zájmu, který nebylo možné provést mimo pracovní dobu.',
    },
    {
      type: 'heading',
      text: 'Tři základní skupiny',
    },
    {
      type: 'list',
      items: [
        'výkon veřejné funkce',
        'výkon občanské povinnosti',
        'jiný úkon v obecném zájmu',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Zařazení do obecného zájmu neznamená automaticky náhradu mzdy od zaměstnavatele. Náhrada přísluší jen tam, kde ji stanoví zákon, zvláštní předpis, dohoda nebo vnitřní předpis.',
    },
    {
      type: 'heading',
      text: 'Obecné podmínky pracovního volna',
    },
    {
      type: 'list',
      items: [
        'činnost zasahuje do rozvržené pracovní doby',
        'činnost nelze provést mimo pracovní dobu',
        'zaměstnanec doloží právní titul, datum a rozsah',
        'zaměstnavatel určí placený nebo neplacený režim podle konkrétního ustanovení',
      ],
    },
    {
      type: 'heading',
      text: 'Výkon veřejné funkce',
    },
    {
      type: 'paragraph',
      text: 'Veřejná funkce je funkce vymezená funkčním nebo časovým obdobím a obsazovaná přímou či nepřímou volbou nebo jmenováním podle zvláštního právního předpisu. Patří sem například poslanec, senátor, člen zastupitelstva nebo přísedící.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Členství v orgánu obchodní korporace není veřejnou funkcí jen proto, že je společnost vlastněna státem nebo obcí.',
    },
    {
      type: 'paragraph',
      text: 'Není-li zvláštním předpisem stanoven jiný rozsah, může být zaměstnanci vykonávajícímu veřejnou funkci vedle pracovního poměru poskytnuto pracovní volno nejvýše v rozsahu 20 pracovních dnů nebo směn za kalendářní rok.',
    },
    {
      type: 'example',
      title: 'Přísedící u soudu',
      situation:
        'Zaměstnanec je předvolán jako přísedící na jednání, které zasáhne do čtyř hodin jeho směny. Předvolání doloží.',
      solution:
        'Jde o výkon veřejné funkce. Pracovní volno se poskytne v nezbytně nutném rozsahu podle zvláštního předpisu a mzdová účetní samostatně ověří, zda a kdo hradí náhradu.',
    },
    {
      type: 'heading',
      text: 'Dlouhodobé uvolnění pro veřejnou funkci',
    },
    {
      type: 'paragraph',
      text: 'Dlouhodobě uvolněnému zaměstnanci neposkytuje původní zaměstnavatel náhradu mzdy nebo platu. Odměnu za výkon veřejné funkce poskytuje subjekt, pro který byl zaměstnanec uvolněn, podle zvláštního právního předpisu.',
    },
    {
      type: 'heading',
      text: 'Výkon občanské povinnosti',
    },
    {
      type: 'list',
      items: [
        'svědek, tlumočník, soudní znalec nebo jiná předvolaná osoba',
        'poskytnutí první pomoci',
        'opatření proti infekčnímu onemocnění',
        'osobní pomoc při požární ochraně',
        'osobní pomoc při živelní nebo jiné mimořádné události',
        'jiná povinná osobní pomoc podle právního předpisu',
      ],
    },
    {
      type: 'paragraph',
      text: 'Základním režimem je pracovní volno v nezbytně nutném rozsahu. Náhradu mzdy od zaměstnavatele nelze přiznat automaticky; často ji řeší zvláštní předpis nebo náhrada od orgánu, který zaměstnance povolal.',
    },
    {
      type: 'example',
      title: 'Předvolání svědka',
      situation:
        'Zaměstnanec předloží předvolání k soudu a potvrzení o účasti od 9:00 do 12:30. Jeho směna trvá 7:00–15:30.',
      solution:
        'Doba zásahu do směny se omluví jako občanská povinnost. Mzdová účetní ověří podle předvolání a zvláštního předpisu náhradový režim a případnou refundaci.',
    },
    {
      type: 'heading',
      text: 'Jiné úkony v obecném zájmu',
    },
    {
      type: 'paragraph',
      text: 'Jde o taxativně nebo zvláštními předpisy vymezené činnosti, například odborovou činnost, dárcovství, výuku, záchranné akce, tábory pro děti a mládež nebo dobrovolnou činnost při organizovaných akcích.',
    },
    {
      type: 'heading',
      text: 'Funkce zástupců zaměstnanců',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno s náhradou mzdy nebo platu ve výši průměrného výdělku přísluší při výkonu funkce člena orgánu odborové organizace, rady zaměstnanců, volební komise, zástupce pro oblast BOZP a dalších zákonem vymezených zaměstnaneckých orgánů.',
    },
    {
      type: 'heading',
      text: 'Odborové školení',
    },
    {
      type: 'paragraph',
      text: 'Při účasti na školení pořádaném odborovou organizací přísluší pracovní volno s náhradou v rozsahu nejvýše pěti pracovních dnů za kalendářní rok, nebrání-li tomu vážné provozní důvody.',
    },
    {
      type: 'heading',
      text: 'Dárcovství krve a aferéza',
    },
    {
      type: 'paragraph',
      text: 'Při odběru krve nebo aferéze přísluší pracovní volno s náhradou ve výši průměrného výdělku za cestu k odběru, odběr, cestu zpět a zotavení, pokud zasahují do pracovní doby v rámci 24 hodin od nástupu cesty k odběru.',
    },
    {
      type: 'paragraph',
      text: 'Nedojde-li k odběru, přísluší pracovní volno s náhradou jen za prokázanou nezbytně nutnou dobu nepřítomnosti.',
    },
    {
      type: 'example',
      title: 'Odběr krve a návrat do práce',
      situation:
        'Zaměstnanec má směnu 6:00–14:00. Cesta, odběr a lékařem potvrzené zotavení zasáhnou do směny od 7:20 do 12:10.',
      solution:
        'Do evidence se zapíše 4 hodiny 50 minut placené překážky z důvodu dárcovství. Zbývající část směny se posoudí podle skutečné práce.',
    },
    {
      type: 'heading',
      text: 'Dárce dalších biologických materiálů',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno s náhradou se poskytuje za cestu, odběr, cestu zpět a zotavení v rámci 48 hodin od nástupu cesty. Lékař může dobu podle charakteru odběru a zdravotního stavu zkrátit nebo prodloužit, nejvýše do 96 hodin.',
    },
    {
      type: 'heading',
      text: 'Přednášková, výuková a zkušební činnost',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno se poskytuje nejvýše v rozsahu 12 směn nebo pracovních dnů za kalendářní rok, nebrání-li tomu vážné provozní důvody. Kratší části směn se pro limit sčítají.',
    },
    {
      type: 'heading',
      text: 'Horská služba a záchranná akce',
    },
    {
      type: 'paragraph',
      text: 'Členu Horské služby nebo osobě, která na její výzvu a podle jejích pokynů pomáhá při záchranné akci v terénu, přísluší pracovní volno v nezbytně nutném rozsahu.',
    },
    {
      type: 'heading',
      text: 'Tábory a sportovní soustředění dětí a mládeže',
    },
    {
      type: 'paragraph',
      text: 'Vedoucím, instruktorům, vychovatelům, zdravotníkům a dalším vymezeným osobám přísluší pracovní volno v nezbytně nutném rozsahu, nejvýše tři týdny za kalendářní rok, pokud tomu nebrání vážné provozní důvody a zaměstnanec předtím nejméně rok soustavně a bezplatně pracoval s dětmi nebo mládeží.',
    },
    {
      type: 'paragraph',
      text: 'Podmínka předchozí soustavné a bezplatné práce se nevyžaduje u táborů nebo sportovních soustředění pro zdravotně postižené děti a mládež.',
    },
    {
      type: 'paragraph',
      text: 'Za splnění dalších zákonných podmínek přísluší náhrada nejvýše za počet hodin odpovídající délce stanovené nebo kratší týdenní pracovní doby zaměstnance za kalendářní rok.',
    },
    {
      type: 'heading',
      text: 'Hodinový strop náhrady pro rok 2026',
    },
    {
      type: 'paragraph',
      text: 'Náhrada za placenou část pracovního volna při akci pro děti a mládež vychází z průměrného hodinového výdělku, ale pro refundaci a zákonný limit se v roce 2026 použije maximálně 276,90 Kč za hodinu.',
    },
    {
      type: 'example',
      title: 'Placená část tábora',
      situation:
        'Zaměstnanec má týdenní pracovní dobu 40 hodin, čerpá první placený týden tábora a jeho průměrný hodinový výdělek činí 305 Kč.',
      solution:
        'Náhrada se pro 40 hodin omezí sazbou 276,90 Kč. Výsledek je 40 × 276,90 = 11 076 Kč. Vyšší průměr 305 Kč se pro tento zákonný strop nepoužije.',
    },
    {
      type: 'heading',
      text: 'Pořadatel akce pro děti a mládež',
    },
    {
      type: 'list',
      items: [
        'právnická osoba je zapsána ve veřejném rejstříku nejméně pět let',
        'práce s dětmi a mládeží tvoří podstatnou část její hlavní činnosti',
        'zaměstnanec doloží splnění těchto podmínek',
        'děti a mládež jsou pro tento účel osoby mladší 26 let',
      ],
    },
    {
      type: 'heading',
      text: 'Refundace poskytnuté náhrady',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnavatel poskytne náhradu v případech, kdy ji má podle zvláštního předpisu uhradit jiná právnická nebo fyzická osoba, vede samostatnou pohledávku a uchová podklady pro refundaci. U akce dětí a mládeže se zákonná úhrada řeší přes příslušnou správu sociálního zabezpečení podle aktuálního postupu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Refundace zaměstnavateli a nárok zaměstnance na pracovní volno jsou dvě odlišné otázky. Zaměstnanec nesmí přijít o zákonné volno jen proto, že refundace ještě nebyla vyřízena.',
    },
    {
      type: 'heading',
      text: 'Doklady',
    },
    {
      type: 'list',
      items: [
        'předvolání nebo jmenovací akt',
        'potvrzení orgánu o účasti a délce',
        'potvrzení zdravotnického zařízení o odběru',
        'potvrzení pořadatele akce',
        'doklad o předchozí práci s dětmi a mládeží',
        'potvrzení o právní existenci a hlavní činnosti pořadatele',
        'podklad k refundaci',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každou veřejně prospěšnou činnost za placenou',
        'zaměnit veřejnou funkci a členství v orgánu obchodní korporace',
        'použít automaticky 20 dnů bez ověření zvláštního předpisu',
        'neodlišit občanskou povinnost a jiný úkon v obecném zájmu',
        'proplatit neuskutečněný odběr jako celý odběrný režim',
        'ignorovat roční limit výuky',
        'neověřit podmínky pořadatele dětského tábora',
        'použít průměrný výdělek nad zákonný hodinový strop',
        'zaměnit náhradu zaměstnanci a refundaci zaměstnavateli',
      ],
    },
    {
      type: 'summary',
      items: [
        'Obecný zájem zahrnuje veřejnou funkci, občanskou povinnost a jiné zákonné úkony.',
        'Pracovní volno se poskytuje v nezbytně nutném rozsahu, pokud činnost nelze vykonat mimo směnu.',
        'Náhrada mzdy není automatická a musí mít konkrétní právní titul.',
        'Dárcovství, odborová činnost a některé akce dětí a mládeže mají zvláštní placený režim.',
        'Pro placenou část akce dětí a mládeže činí hodinový strop roku 2026 částku 276,90 Kč.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'public-interest-obstacles-card-01',
      front: 'Jaké jsou tři skupiny překážek z důvodu obecného zájmu?',
      back: 'Veřejná funkce, občanská povinnost a jiný úkon v obecném zájmu.',
      explanation: 'Každá skupina má vlastní právní a náhradový režim.',
      skillIds: ['public-interest-obstacle-classification'],
    },
    {
      id: 'public-interest-obstacles-card-02',
      front: 'Je náhrada mzdy při obecném zájmu automatická?',
      back: 'Ne.',
      explanation:
        'Musí ji stanovit konkrétní zákon, zvláštní předpis, dohoda nebo vnitřní předpis.',
      skillIds: ['public-interest-paid-status'],
    },
    {
      id: 'public-interest-obstacles-card-03',
      front: 'Jak dlouhý je základní placený režim odběru krve?',
      back: 'Doba cesty, odběru, návratu a zotavení zasahující do směny v rámci 24 hodin.',
      explanation:
        'Při neuskutečněném odběru se hradí jen prokázaná nezbytná nepřítomnost.',
      skillIds: ['public-interest-paid-status'],
    },
    {
      id: 'public-interest-obstacles-card-04',
      front:
        'Jaký je hodinový strop náhrady pro placenou část akce dětí a mládeže v roce 2026?',
      back: '276,90 Kč za hodinu.',
      explanation:
        'Roční placený rozsah je současně omezen týdenní pracovní dobou zaměstnance.',
      skillIds: ['public-interest-documentation'],
    },
  ],
  exercises: [
    {
      id: 'public-interest-obstacles-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec je členem dozorčí rady obchodní společnosti vlastněné městem. Je samotné členství automaticky veřejnou funkcí podle zákoníku práce?',
      options: [
        {
          id: 'a',
          text: 'Ano, protože vlastníkem je město.',
        },
        {
          id: 'b',
          text: 'Ne, členství v orgánu obchodní korporace samo veřejnou funkcí není.',
        },
        {
          id: 'c',
          text: 'Ano, pokud je funkce placená.',
        },
        {
          id: 'd',
          text: 'Ano, pokud schůze proběhne v pracovní době.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['public-interest-obstacle-classification'],
      explanation:
        'Rozhoduje právní povaha funkce, nikoli veřejný vlastník společnosti.',
      commonMistake: 'Zaměnit veřejné vlastnictví a veřejnou funkci.',
    },
    {
      id: 'public-interest-obstacles-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které situace jsou typickým výkonem občanské povinnosti?',
      options: [
        {
          id: 'court',
          text: 'Předvolání svědka k soudu.',
        },
        {
          id: 'first-aid',
          text: 'Poskytnutí první pomoci.',
        },
        {
          id: 'fire',
          text: 'Povinná osobní pomoc při požáru.',
        },
        {
          id: 'board',
          text: 'Běžné zasedání představenstva soukromé společnosti.',
        },
        {
          id: 'vacation',
          text: 'Soukromá účast na kulturním festivalu.',
        },
      ],
      correctOptionIds: ['court', 'first-aid', 'fire'],
      skillIds: ['public-interest-obstacle-classification'],
      explanation:
        'Občanská povinnost vzniká z veřejnoprávního předvolání nebo zákonné povinnosti pomoci.',
      commonMistake: 'Zařadit jakoukoli společensky užitečnou činnost.',
    },
    {
      id: 'public-interest-obstacles-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování překážky z důvodu obecného zájmu.',
      steps: [
        {
          id: 'schedule',
          text: 'Ověřit zásah do rozvržené směny.',
        },
        {
          id: 'category',
          text: 'Určit veřejnou funkci, občanskou povinnost nebo jiný úkon.',
        },
        {
          id: 'legal-title',
          text: 'Dohledat konkrétní právní titul a limit.',
        },
        {
          id: 'document',
          text: 'Zkontrolovat potvrzení a rozsah.',
        },
        {
          id: 'compensation',
          text: 'Určit náhradu a případnou refundaci.',
        },
        {
          id: 'record',
          text: 'Zapsat překážku a refundaci odděleně.',
        },
      ],
      correctOrder: [
        'schedule',
        'category',
        'legal-title',
        'document',
        'compensation',
        'record',
      ],
      skillIds: ['public-interest-documentation'],
      explanation: 'Refundace se řeší až po potvrzení nároku zaměstnance.',
      commonMistake:
        'Odmítnout volno jen proto, že není jasný plátce refundace.',
    },
    {
      id: 'public-interest-obstacles-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec přijde na plánovaný odběr krve, ale odběr se ze zdravotních důvodů neuskuteční. Jaký je základní placený rozsah?',
      options: [
        {
          id: 'a',
          text: 'Automaticky celých 24 hodin.',
        },
        {
          id: 'b',
          text: 'Pouze prokázaná nezbytně nutná doba nepřítomnosti.',
        },
        {
          id: 'c',
          text: 'Žádné omluvené volno.',
        },
        {
          id: 'd',
          text: 'Automaticky celá směna i následující den.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['public-interest-paid-status'],
      explanation: 'Plný režim odběru se nepoužije, pokud k odběru nedošlo.',
      commonMistake: 'Zaměnit plánovaný a uskutečněný odběr.',
    },
    {
      id: 'public-interest-obstacles-exercise-05',
      type: 'short_text',
      prompt:
        'Zaměstnanec s kratší týdenní pracovní dobou 32 hodin splní podmínky placeného volna pro akci dětí a mládeže. Jeho průměrný hodinový výdělek činí 260 Kč, tedy méně než strop roku 2026. Kolik činí nejvyšší náhrada za celý roční placený rozsah 32 hodin?',
      acceptedAnswers: ['8 320 Kč', '8320 Kč', '8 320', '8320'],
      ignoreDiacritics: true,
      skillIds: ['public-interest-paid-status'],
      explanation:
        'Použije se skutečný průměr 260 Kč, protože je pod stropem 276,90 Kč. Výpočet je 32 × 260 = 8 320 Kč.',
      commonMistake:
        'Použít automaticky strop 276,90 Kč i při nižším průměrném výdělku.',
    },
    {
      id: 'public-interest-obstacles-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec čerpá pracovní volno pro výukovou činnost po částech. Započítávají se kratší části směn do ročního limitu?',
      options: [
        {
          id: 'a',
          text: 'Ne, počítají se jen celé směny.',
        },
        {
          id: 'b',
          text: 'Ano, kratší části směn se sčítají.',
        },
        {
          id: 'c',
          text: 'Jen pokud trvají alespoň čtyři hodiny.',
        },
        {
          id: 'd',
          text: 'Jen u platové sféry.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['public-interest-documentation'],
      explanation:
        'Roční limit výukové činnosti se sleduje i z částí jednotlivých směn.',
      commonMistake: 'Vynechat krátká čerpání z kumulace.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Překážky v práci z důvodu obecného zájmu',
      url: 'https://ppropo.mpsv.cz/IX12Prekazkyvpracizduvoduobecneh',
      kind: 'official',
    },
    {
      title: 'MPSV – Překážky v práci',
      url: 'https://ppropo.mpsv.cz/IXPrekazkyvpraci',
      kind: 'official',
    },
    {
      title: 'Sdělení MPSV č. 539/2025 Sb. – hodinový limit pro rok 2026',
      url: 'https://www.e-sbirka.cz/sb/2025/539',
      kind: 'official',
    },
    {
      title: 'MPSV – Průměrný výdělek',
      url: 'https://ppropo.mpsv.cz/XXI8Prumernyvydelek',
      kind: 'official',
    },
  ],
})
