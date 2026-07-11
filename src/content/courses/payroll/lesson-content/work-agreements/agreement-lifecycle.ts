import { defineLessonContent } from '../define'

export const agreementLifecycleContent = defineLessonContent({
  moduleId: 'work-agreements',
  skillIds: [
    'agreement-onboarding-process',
    'agreement-change-process',
    'agreement-termination-process',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-07-01',
    verifiedAt: '2026-07-11',
    note: 'Vznik, registrace, změny a skončení DPP a DPČ včetně REGZEC, JMHZ a oznamovacích pravidel účinných v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Každá dohoda má samostatný životní cyklus',
    },
    {
      type: 'paragraph',
      text: 'DPP nebo DPČ musí být od vzniku do skončení vedena jako konkrétní pracovněprávní vztah. Mzdová účetní sleduje dokument, registraci, dobu trvání, rozvrh, práci, odměnu, změny, dovolenou, daň, pojištění a konečné odhlášení.',
    },
    {
      type: 'definition',
      term: 'Životní cyklus dohody',
      definition:
        'Posloupnost kroků od uzavření a registrace dohody přes měsíční zpracování a změny až po její právní skončení, konečné vyúčtování a archivaci.',
    },
    {
      type: 'heading',
      text: 'Před založením dohody',
    },
    {
      type: 'list',
      items: [
        'ověřit skutečný druh a rozsah práce',
        'zvolit DPP nebo DPČ podle pracovního režimu',
        'prověřit jiné vztahy stejné osoby',
        'zkontrolovat zákaz stejně druhově vymezené práce nebo použitelnou výjimku',
        'ověřit identifikační, daňové a pojistné údaje',
        'určit vlastníka rozvrhu a evidence pracovní doby',
      ],
    },
    {
      type: 'heading',
      text: 'Uzavření dohody',
    },
    {
      type: 'paragraph',
      text: 'DPP i DPČ musí být písemné a zaměstnanec obdrží jedno vyhotovení. Dokument musí být dokončen před tím, než podle něj mzdová účetní vytvoří finální pracovní vztah a zaměstnanec začne vykonávat práci.',
    },
    {
      type: 'list',
      items: [
        'identifikace stran',
        'sjednaná práce',
        'doba trvání',
        'rozsah práce podle druhu dohody',
        'odměna a podmínky jejího poskytování',
        'místo výkonu práce a další potřebné údaje',
        'způsob skončení, pokud se strany odchylují od zákonného výchozího režimu',
      ],
    },
    {
      type: 'heading',
      text: 'Informační povinnost',
    },
    {
      type: 'paragraph',
      text: 'Neobsahuje-li dohoda všechny zákonem stanovené informace o pracovních podmínkách, zaměstnavatel je poskytne zaměstnanci písemně v zákonné lhůtě. Mzdová účetní musí vědět, který dokument je samotná dohoda a který pouze doplňuje informační povinnost.',
    },
    {
      type: 'heading',
      text: 'Registrace v roce 2026',
    },
    {
      type: 'paragraph',
      text: 'V systému JMHZ se eviduje každé jednotlivé zaměstnání samostatně bez ohledu na to, zda v daném měsíci zakládá účast na pojištění. Od 1. července 2026 musí být zaměstnanec přihlášen do evidence zaměstnanců nejpozději před zahájením výkonu práce.',
    },
    {
      type: 'paragraph',
      text: 'Přednástupní registrace se provádí prostřednictvím REGZEC. Lze ji podat nejdříve osm kalendářních dnů před předpokládaným nástupem. Po skutečném nástupu se doplní zbývající údaje, pokud bylo použito přípustné částečné přihlášení.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Nízký příjem nebo předpoklad, že dohoda nebude pojištěná, neznamená, že se pracovněprávní vztah v evidenci zaměstnanců vůbec neregistruje.',
    },
    {
      type: 'heading',
      text: 'Den nástupu',
    },
    {
      type: 'paragraph',
      text: 'Pro pracovněprávní a registrační evidenci musí být jednoznačné, kdy dohoda vznikla a kdy zaměstnanec skutečně začal vykonávat sjednanou práci. Datum podpisu, předpokládaný nástup a první výkon práce mohou být odlišné údaje a musí být správně použity podle konkrétní povinnosti.',
    },
    {
      type: 'example',
      title: 'Podepsaná dohoda bez skutečného nástupu',
      situation:
        'DPP je podepsána s plánovaným nástupem 5. srpna a zaměstnanec je předem registrován, ale k práci vůbec nenastoupí.',
      solution:
        'Odpovědná osoba potvrdí nenastoupení, opraví registrační stav v zákonné lhůtě a nevytvoří fiktivní hodiny ani odměnu. Samotný podpis dokumentu neprokazuje výkon práce.',
    },
    {
      type: 'heading',
      text: 'Rozvrh a první směna',
    },
    {
      type: 'paragraph',
      text: 'Před první směnou musí existovat písemný rozvrh nebo písemná dohoda o samorozvrhování. Zaměstnanec se s rozvrhem seznámí ve stanoveném nebo dohodnutém předstihu.',
    },
    {
      type: 'heading',
      text: 'Měsíční provoz dohody',
    },
    {
      type: 'list',
      items: [
        'schválený rozvrh',
        'evidence skutečně odpracované doby',
        'kontrola 300 hodin DPP nebo průměru DPČ',
        'výpočet odměny a příplatků',
        'dovolená a překážky',
        'součet příjmů dohod stejného druhu',
        'daňové a pojistné posouzení',
        'JMHZ a další povinné výstupy',
      ],
    },
    {
      type: 'heading',
      text: 'Změna dohody',
    },
    {
      type: 'paragraph',
      text: 'Změna sjednané práce, odměny, rozsahu nebo doby trvání musí mít odpovídající písemný podklad. Mzdová účetní nesmí změnu provést pouze podle ústního požadavku nebo přepsat původní data bez zachování historie.',
    },
    {
      type: 'example',
      title: 'Prodloužení DPČ',
      situation:
        'DPČ uzavřená do 31. srpna má pokračovat do 31. prosince. HR pošle pouze e-mail s novým datem.',
      solution:
        'Mzdová účetní vyžádá finální písemný dodatek nebo nový právní dokument. Teprve poté upraví dobu trvání a navazující registraci.',
    },
    {
      type: 'heading',
      text: 'Navazující dohody od dubna 2026',
    },
    {
      type: 'paragraph',
      text: 'Pokud po skončení jedné DPP bezprostředně navazuje další DPP, nebo po DPČ další DPČ, musí se od dubna 2026 každé zaměstnání evidovat samostatně. Skončení prvního a nástup druhého vztahu se oznámí odděleně, i když pojistná účast fakticky pokračuje bez přerušení.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Nový dokument není pouze pokračováním staré mzdové karty. Má vlastní identitu zaměstnání, období, limity a kontrolní stopu.',
    },
    {
      type: 'heading',
      text: 'Způsoby skončení dohod',
    },
    {
      type: 'paragraph',
      text: 'Strany si mohou způsob zrušení vztahu sjednat. Není-li sjednáno jinak, lze DPP nebo DPČ skončit dohodou ke sjednanému dni nebo písemnou výpovědí z jakéhokoli důvodu či bez uvedení důvodu.',
    },
    {
      type: 'paragraph',
      text: 'Výpovědní doba činí 15 dnů a začíná dnem, kdy byla výpověď doručena druhé straně. Písemná forma je nezbytná.',
    },
    {
      type: 'paragraph',
      text: 'Okamžité zrušení lze použít pouze tehdy, pokud bylo v dohodě sjednáno, a jen pro případy, ve kterých lze okamžitě zrušit pracovní poměr.',
    },
    {
      type: 'heading',
      text: 'Uplynutí sjednané doby',
    },
    {
      type: 'paragraph',
      text: 'Dohoda na dobu určitou končí uplynutím sjednané doby, pokud nebyla dříve zrušena jiným platným způsobem. Mzdová účetní nesmí zaměnit konec pojistné účasti v jednom měsíci za právní skončení celé dohody.',
    },
    {
      type: 'example',
      title: 'Měsíc bez pojistné účasti',
      situation:
        'DPČ trvá do 31. prosince, ale v listopadu příjem nedosáhne rozhodné částky.',
      solution:
        'V listopadu se samostatně posoudí pojistná účast. Právní vztah však nekončí a zůstává evidován do sjednaného dne nebo jiného platného skončení.',
    },
    {
      type: 'heading',
      text: 'Výpověď dohody',
    },
    {
      type: 'example',
      title: 'Výpověď doručená 10. října',
      situation:
        'DPP neobsahuje odlišné ujednání o skončení. Zaměstnanec doručí písemnou výpověď 10. října.',
      solution:
        'Patnáctidenní výpovědní doba začíná 10. října. Mzdová účetní použije právně potvrzený poslední den, uzavře evidenci práce a provede navazující odhlášení.',
    },
    {
      type: 'heading',
      text: 'Zdravotní pojišťovna u dohod',
    },
    {
      type: 'paragraph',
      text: 'U osob pracujících pouze na DPP nebo DPČ se v roce 2026 oznámení nástupu a ukončení zdravotní pojišťovně provádí do 20. dne kalendářního měsíce následujícího po měsíci, v němž oznamovaná skutečnost nastala. Použije se skutečný pojistný režim a aktuální elektronický postup.',
    },
    {
      type: 'heading',
      text: 'Odhlášení ČSSZ',
    },
    {
      type: 'paragraph',
      text: 'Skončení každého zaměstnání se oznámí prostřednictvím REGZEC podle registračních pravidel. U DPP a zaměstnání malého rozsahu se odhlášení váže na právní skončení zaměstnání, nikoli pouze na měsíc, ve kterém přestala vznikat pojistná účast.',
    },
    {
      type: 'heading',
      text: 'Konečné mzdové zpracování',
    },
    {
      type: 'list',
      items: [
        'odměna za poslední vykonanou práci',
        'příplatky',
        'náhrada za nevyčerpanou dovolenou, vznikl-li nárok',
        'překážky a další náhrady podle podkladů',
        'srážky',
        'později zúčtovaný příjem',
        'daňové a pojistné dopady',
        'JMHZ a opravná podání',
      ],
    },
    {
      type: 'heading',
      text: 'Potvrzení a archivace',
    },
    {
      type: 'paragraph',
      text: 'Při skončení se vydají zákonem požadované výstupní doklady a na žádost také příslušná daňová potvrzení. Dokumentace dohody, docházky, dovolené, odměny, registrace a skončení se archivuje po odpovídající dobu a s omezeným přístupem.',
    },
    {
      type: 'heading',
      text: 'Pozdě doručený příjem',
    },
    {
      type: 'paragraph',
      text: 'Odměna, příplatek nebo oprava zúčtovaná až po skončení dohody se přiřadí ke správnému pracovněprávnímu vztahu a období. Nezakládá se kvůli ní nová dohoda a nesmí se přehlédnout dopad na pojistnou hranici měsíce skončení.',
    },
    {
      type: 'example',
      title: 'Dodatečný příplatek po skončení',
      situation:
        'Po skončení DPP je doloženo, že část poslední směny proběhla ve svátek.',
      solution:
        'Mzdová účetní zpracuje doplatek k původní DPP, posoudí daň, pojištění a potřebnou opravu JMHZ. Neotevírá nový pracovněprávní vztah.',
    },
    {
      type: 'heading',
      text: 'Výstupní checklist',
    },
    {
      type: 'list',
      items: [
        'ověřit způsob a den skončení',
        'uzavřít rozvrh a docházku',
        'zkontrolovat roční limit DPP nebo konečný průměr DPČ',
        'vypořádat odměnu, příplatky a dovolenou',
        'posoudit daň a pojistné včetně doplatků',
        'provést REGZEC a zdravotní oznámení',
        'vydat potřebná potvrzení',
        'uzavřít přístupy a archivovat podklady',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'nechat zaměstnance začít bez písemné dohody a registrace',
        'zaměnit datum podpisu za první výkon práce',
        'měnit dohodu bez písemného podkladu',
        'u navazující dohody neukončit původní zaměstnání',
        'počítat patnáctidenní výpovědní dobu až od následujícího dne nebo měsíce bez kontroly',
        'zaměnit konec pojistné účasti za konec dohody',
        'nevyplatit vzniklou náhradu za dovolenou',
        'neprovést odhlášení a opravu JMHZ',
        'založit novou dohodu kvůli pozdnímu doplatku',
      ],
    },
    {
      type: 'summary',
      items: [
        'Každá DPP a DPČ je samostatné zaměstnání od uzavření až po archivaci.',
        'V roce 2026 se každé zaměstnání registruje bez ohledu na aktuální pojistnou účast.',
        'Změny dohody musí mít písemný a účinný podklad.',
        'Není-li sjednáno jinak, lze dohodu písemně vypovědět s patnáctidenní dobou od doručení.',
        'Skončení zahrnuje konečnou odměnu, dovolenou, REGZEC, zdravotní oznámení, JMHZ a archivaci.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'agreement-lifecycle-card-01',
      front:
        'Musí se v roce 2026 evidovat i dohoda bez aktuální pojistné účasti?',
      back: 'Ano, každé zaměstnání se eviduje samostatně podle pravidel JMHZ.',
      explanation: 'Nízký příjem neruší existenci pracovněprávního vztahu.',
      skillIds: ['agreement-onboarding-process'],
    },
    {
      id: 'agreement-lifecycle-card-02',
      front: 'Jak dlouhá je výchozí výpovědní doba DPP nebo DPČ?',
      back: '15 dnů od doručení výpovědi.',
      explanation:
        'Platí, pokud si strany nesjednaly jiný zákonný způsob skončení.',
      skillIds: ['agreement-termination-process'],
    },
    {
      id: 'agreement-lifecycle-card-03',
      front: 'Lze změnit dobu trvání dohody pouze e-mailem HR?',
      back: 'Ne. Je potřeba odpovídající písemný právní podklad.',
      explanation:
        'Historie původní a nové účinnosti musí zůstat dohledatelná.',
      skillIds: ['agreement-change-process'],
    },
    {
      id: 'agreement-lifecycle-card-04',
      front: 'Končí DPČ v měsíci, kdy příjem nedosáhne pojistné hranice?',
      back: 'Ne.',
      explanation:
        'Pojistná účast za měsíc a právní trvání dohody jsou odlišné otázky.',
      skillIds: ['agreement-termination-process'],
    },
  ],
  exercises: [
    {
      id: 'agreement-lifecycle-exercise-01',
      type: 'single_choice',
      prompt:
        'Může zaměstnanec začít pracovat před uzavřením písemné dohody a potřebnou registrací?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne.',
        },
        {
          id: 'c',
          text: 'Ano, pokud odměna bude nízká.',
        },
        {
          id: 'd',
          text: 'Ano, pokud jde o jednu směnu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-onboarding-process'],
      explanation:
        'Práce musí vycházet z platného pracovněprávního vztahu a splněných registračních povinností.',
      commonMistake: 'Považovat krátkou brigádu za výjimku.',
    },
    {
      id: 'agreement-lifecycle-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které kroky patří do skončení dohody?',
      options: [
        {
          id: 'date',
          text: 'Ověřit způsob a den skončení.',
        },
        {
          id: 'hours',
          text: 'Uzavřít evidenci práce.',
        },
        {
          id: 'vacation',
          text: 'Vypořádat vzniklou dovolenou.',
        },
        {
          id: 'notifications',
          text: 'Provést registrační a pojistná oznámení.',
        },
        {
          id: 'delete',
          text: 'Smazat bez archivace všechny záznamy.',
        },
      ],
      correctOptionIds: ['date', 'hours', 'vacation', 'notifications'],
      skillIds: ['agreement-termination-process'],
      explanation: 'Výstup musí zachovat dokumentaci, mzdu i správná podání.',
      commonMistake: 'Považovat skončení za pouhé vypnutí mzdové karty.',
    },
    {
      id: 'agreement-lifecycle-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď životní cyklus dohody.',
      steps: [
        {
          id: 'select',
          text: 'Zvolit správný druh dohody podle práce a rozsahu.',
        },
        {
          id: 'sign',
          text: 'Uzavřít písemnou dohodu.',
        },
        {
          id: 'register',
          text: 'Provést registraci a připravit rozvrh.',
        },
        {
          id: 'process',
          text: 'Měsíčně evidovat práci, odměnu, daň a pojištění.',
        },
        {
          id: 'change',
          text: 'Zpracovat doložené změny se zachováním historie.',
        },
        {
          id: 'terminate',
          text: 'Skončit, vyúčtovat, odhlásit a archivovat.',
        },
      ],
      correctOrder: [
        'select',
        'sign',
        'register',
        'process',
        'change',
        'terminate',
      ],
      skillIds: [
        'agreement-onboarding-process',
        'agreement-change-process',
        'agreement-termination-process',
      ],
      explanation:
        'Technické zpracování vždy navazuje na platný právní stav dohody.',
      commonMistake: 'Začít prací a dokumentaci doplnit až při výplatě.',
    },
    {
      id: 'agreement-lifecycle-exercise-04',
      type: 'single_choice',
      prompt:
        'Výpověď DPP byla doručena 10. října a dohoda nemá odlišný režim. Kdy začne výpovědní doba?',
      options: [
        {
          id: 'a',
          text: '10. října.',
        },
        {
          id: 'b',
          text: '11. října.',
        },
        {
          id: 'c',
          text: '1. listopadu.',
        },
        {
          id: 'd',
          text: 'Dnem další výplaty.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['agreement-termination-process'],
      explanation: 'Patnáctidenní výpovědní doba začíná dnem doručení.',
      commonMistake:
        'Použít pravidlo pracovního poměru nebo následující kalendářní den.',
    },
    {
      id: 'agreement-lifecycle-exercise-05',
      type: 'short_text',
      prompt:
        'Jaká zkratka označuje registrační podání zaměstnance v systému JMHZ?',
      acceptedAnswers: ['REGZEC', 'regzec'],
      ignoreDiacritics: true,
      skillIds: ['agreement-onboarding-process'],
      explanation: 'REGZEC slouží k registraci, změně a odhlášení zaměstnance.',
      commonMistake: 'Uvést pouze JMHZ, což je širší systém měsíčního hlášení.',
    },
    {
      id: 'agreement-lifecycle-exercise-06',
      type: 'single_choice',
      prompt:
        'DPČ trvá do konce roku, ale v jednom měsíci příjem nedosáhne 4 500 Kč. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Dohoda automaticky skončila.',
        },
        {
          id: 'b',
          text: 'Právní vztah trvá dál, pouze se samostatně posoudí pojistná účast za měsíc.',
        },
        {
          id: 'c',
          text: 'Musí vzniknout nová DPČ další měsíc.',
        },
        {
          id: 'd',
          text: 'Zaměstnanec se smaže z evidence.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-termination-process'],
      explanation: 'Trvání dohody a měsíční pojistná účast nejsou totožné.',
      commonMistake: 'Ukončit právní vztah podle výše měsíčního příjmu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohody o pracích konaných mimo pracovní poměr',
      url: 'https://ppropo.mpsv.cz/VIIDohodyopracichkonanychmimopra',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidence zaměstnanců',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Změna postupu u navazujících zaměstnání od 1. dubna 2026',
      url: 'https://www.cssz.cz/web/cz/-/zmena-postupu-u-navazujicich-zamestnani-od-1-4-2026',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Informace pro nejmenší zaměstnavatele k JMHZ',
      url: 'https://www.cssz.cz/informace-pro-nejmensi-zamestnavatele',
      kind: 'official',
    },
    {
      title: 'VZP – Změny v oznamovací povinnosti zaměstnavatelů',
      url: 'https://www.vzp.cz/o-nas/tiskove-centrum/otazky-tydne/zmeny-v-oznamovaci-povinnosti-zamestnavatelu',
      kind: 'official',
    },
  ],
})
