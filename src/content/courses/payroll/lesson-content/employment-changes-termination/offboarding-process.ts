import { defineLessonContent } from '../define'

export const offboardingProcessContent = defineLessonContent({
  moduleId: 'employment-changes-termination',
  skillIds: [
    'offboarding-documentation',
    'offboarding-notifications',
    'final-payroll-reconciliation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-04-01',
    verifiedAt: '2026-07-11',
    note: 'Výstupní mzdový proces, potvrzení, odhlášení prostřednictvím REGZEC, zdravotní pojištění, daňové doklady a evidence pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Výstupní proces začíná před poslední mzdou',
    },
    {
      type: 'paragraph',
      text: 'Bezpečné ukončení zaměstnance není jediný technický krok. Propojuje pracovněprávní dokument, rozhodný den skončení, uzavření docházky, poslední mzdu, potvrzení zaměstnanci, odhlášení institucím, vrácení majetku a archivaci.',
    },
    {
      type: 'definition',
      term: 'Výstupní mzdový proces',
      definition:
        'Řízený soubor kontrol a úkonů, který převádí právní skončení zaměstnání do mzdových, personálních, pojistných, daňových a archivních evidencí.',
    },
    {
      type: 'heading',
      text: 'Vstupní podklad výstupního procesu',
    },
    {
      type: 'list',
      items: [
        'finální dokument nebo právní skutečnost způsobující skončení',
        'potvrzený způsob a důvod skončení',
        'rozhodný den skončení',
        'potvrzení o doručení, je-li relevantní',
        'informace o ochranné době nebo jiných zvláštních okolnostech',
        'schválení oprávněné osoby',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Zaměstnance nelze bezpečně uzavřít pouze podle data v tabulce HR. Rozhodný den musí být podložen finálním právním dokumentem a jeho účinky.',
    },
    {
      type: 'heading',
      text: 'Uzavření docházky',
    },
    {
      type: 'paragraph',
      text: 'Docházka musí obsahovat práci, dovolenou, překážky, přesčas a další rozhodné doby až do posledního dne pracovního poměru. Poslední fyzicky odpracovaná směna nemusí být posledním dnem vztahu.',
    },
    {
      type: 'heading',
      text: 'Poslední mzda',
    },
    {
      type: 'list',
      items: [
        'mzda nebo plat za vykonanou práci',
        'náhrady mzdy a překážky',
        'příplatky a mimořádné složky',
        'náhrada za nevyčerpanou dovolenou',
        'odstupné nebo jednorázová náhrada',
        'cestovní náhrady a dosud nevyúčtované částky',
        'srážky ze mzdy',
        'případný doplatek nebo oprava minulého období',
      ],
    },
    {
      type: 'paragraph',
      text: 'Každá položka musí mít vlastní právní titul a správné daňové a pojistné posouzení. Není přípustné sloučit všechna plnění do jedné neurčité položky.',
    },
    {
      type: 'example',
      title: 'Skončení uprostřed měsíce',
      situation:
        'Pracovní poměr končí 18. října. Zaměstnanec do 15. října pracoval, další dny čerpal dovolenou a zbývá mu nevyčerpaná dovolená.',
      solution:
        'Mzdová účetní zpracuje jednotlivé dny podle docházky do 18. října, zkontroluje dovolenou čerpanou před skončením a při skončení posoudí náhradu za zbývající nevyčerpanou dovolenou. Vztah neukončí podle poslední odpracované směny.',
    },
    {
      type: 'heading',
      text: 'Potvrzení o zaměstnání',
    },
    {
      type: 'definition',
      term: 'Potvrzení o zaměstnání',
      definition:
        'Doklad, který zaměstnavatel vydává zaměstnanci při skončení zaměstnání a uvádí v něm zákonem stanovené údaje o skončeném pracovním vztahu.',
    },
    {
      type: 'list',
      items: [
        'druh pracovněprávního vztahu a doba jeho trvání',
        'druh konaných prací',
        'dosažená kvalifikace',
        'vybrané údaje o expozici',
        'údaje o srážkách ze mzdy v zákonném rozsahu',
        'další údaje stanovené zákoníkem práce',
      ],
    },
    {
      type: 'paragraph',
      text: 'Potvrzení o zaměstnání se vydává při skončení. Nemá obsahovat libovolné hodnocení zaměstnance ani údaje, které do něj zákon nezařazuje. Údaje významné pro podporu v nezaměstnanosti se zaměstnanci poskytují v odděleném potvrzení.',
    },
    {
      type: 'heading',
      text: 'Pracovní posudek',
    },
    {
      type: 'paragraph',
      text: 'Pracovní posudek se vydává na žádost zaměstnance do patnácti dnů. Zaměstnavatel jej nemusí vydat dříve než dva měsíce před skončením zaměstnání. Obsahuje hodnocení práce, kvalifikace, schopností a dalších skutečností vztahujících se k výkonu práce, nikoli soukromý nebo rodinný život.',
    },
    {
      type: 'heading',
      text: 'Potvrzení o zdanitelných příjmech',
    },
    {
      type: 'paragraph',
      text: 'Na žádost zaměstnance vystaví plátce daně Potvrzení o zdanitelných příjmech nejpozději do deseti dnů od žádosti. Použije se správný aktuální vzor pro příslušné zdaňovací období a údaje se musí shodovat se mzdovým listem.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Potvrzení o zaměstnání se vydává při skončení, zatímco daňové potvrzení se vystavuje na žádost. Jde o dva různé doklady.',
    },
    {
      type: 'heading',
      text: 'Odhlášení z evidence zaměstnanců',
    },
    {
      type: 'paragraph',
      text: 'Od 1. dubna 2026 se odhlášení zaměstnance z evidence zaměstnanců provádí elektronickým podáním REGZEC. Odhlášení je nutné provést v příslušné osmidenní lhůtě od skončení zaměstnání nebo od jiné rozhodné skutečnosti vymezené registračními pravidly.',
    },
    {
      type: 'paragraph',
      text: 'Podání ONZ se pro nové odhlášení po zavedení REGZEC nepoužívá. Mzdová účetní kontroluje přijetí, případné chyby a shodu data skončení s mzdovou evidencí.',
    },
    {
      type: 'heading',
      text: 'Zdravotní pojišťovna',
    },
    {
      type: 'paragraph',
      text: 'Ukončení zaměstnání se oznamuje příslušné zdravotní pojišťovně v zákonné lhůtě, u běžného pracovního poměru zpravidla do osmi dnů. Datum ukončení musí odpovídat pracovnímu vztahu a pojistné evidenci.',
    },
    {
      type: 'heading',
      text: 'JMHZ a důchodová evidence',
    },
    {
      type: 'paragraph',
      text: 'Údaje za období roku 2026 a pozdější se pro důchodové pojištění standardně vykazují prostřednictvím JMHZ. ELDP zůstává zachován pro starší období a pro odůvodněné případy, kdy jej ČSSZ vyžádá. Mzdová účetní proto nepředpokládá automaticky stejný postup pro všechna období.',
    },
    {
      type: 'heading',
      text: 'Srážky ze mzdy',
    },
    {
      type: 'paragraph',
      text: 'Při skončení je nutné správně dokončit srážky z poslední mzdy a uvést zákonem požadované informace v potvrzení o zaměstnání. Dokumentace k exekucím a jiným srážkám musí zůstat úplná a dohledatelná.',
    },
    {
      type: 'heading',
      text: 'Firemní majetek a přístupy',
    },
    {
      type: 'paragraph',
      text: 'Vrácení zařízení, karet, klíčů nebo přístupů zpravidla zajišťují jiné útvary. Mzdová účetní má mít informaci jen tehdy, pokud má právní a mzdový dopad. Neprovedená vratka sama o sobě neopravňuje k libovolné srážce z poslední mzdy.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Škodu nebo nevrácený majetek nelze automaticky jednostranně odečíst z poslední mzdy bez zákonného nebo dohodnutého titulu pro srážku.',
    },
    {
      type: 'heading',
      text: 'Pozdě doručený podklad',
    },
    {
      type: 'paragraph',
      text: 'Po skončení může být doručen přesčas, prémie, cestovní vyúčtování, rozhodnutí o náhradě nebo oprava docházky. Podklad se neignoruje. Určí se jeho období, právní titul, dopad na daň, pojistné, JMHZ a případná opravná podání.',
    },
    {
      type: 'example',
      title: 'Dodatečně potvrzený přesčas',
      situation:
        'Po odeslání poslední mzdy je potvrzen přesčas odpracovaný před skončením pracovního poměru.',
      solution:
        'Mzdová účetní zpracuje doplatek jako příjem související se skončeným zaměstnáním, posoudí správné období a provede potřebné opravy výstupů. Zaměstnání znovu nezakládá.',
    },
    {
      type: 'heading',
      text: 'Archivace a omezení přístupu',
    },
    {
      type: 'list',
      items: [
        'uložit finální dokumenty o skončení',
        'uložit mzdový výpočet a výstupní potvrzení',
        'uložit potvrzení registračních podání',
        'uzavřít přístup aktivních uživatelů k systémům',
        'zachovat dokumenty po příslušnou archivační dobu',
        'omezit přístup podle pracovních rolí',
        'nevymazat údaje, které musí být dále uchovávány',
      ],
    },
    {
      type: 'heading',
      text: 'Modelový výstupní checklist',
    },
    {
      type: 'list',
      items: [
        'právní titul a rozhodný den potvrzen',
        'docházka uzavřena',
        'všechna plnění klasifikována',
        'poslední mzda zkontrolována',
        'dovolená vypořádána',
        'odstupné nebo náhrada ověřeny',
        'potvrzení o zaměstnání vydáno',
        'daňové potvrzení připraveno na žádost',
        'REGZEC odhlášení podáno a přijato',
        'zdravotní pojišťovna oznámena',
        'JMHZ a důchodová evidence zkontrolovány',
        'srážky a archivace dokončeny',
      ],
    },
    {
      type: 'example',
      title: 'Komplexní skončení s odstupným',
      situation:
        'Zaměstnanec končí 30. listopadu pro nadbytečnost po čtyřech letech. Má nevyčerpanou dovolenou, probíhající exekuční srážku a nevyúčtovanou pracovní cestu.',
      solution:
        'Mzdová účetní ověří organizační důvod a trojnásobné minimální odstupné, uzavře docházku a dovolenou, samostatně zpracuje cestovní náhrady, provede zákonné srážky, vydá potvrzení o zaměstnání, zajistí REGZEC a zdravotní odhlášení a uloží potvrzení podání.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'ukončit zaměstnance bez finálního dokumentu',
        'zaměnit poslední směnu za den skončení',
        'nevydat potvrzení o zaměstnání',
        'zaměnit daňové potvrzení za zápočtový list',
        'použít po dubnu 2026 staré ONZ místo REGZEC',
        'nezkontrolovat přijetí odhlášení',
        'automaticky strhnout hodnotu nevráceného majetku',
        'ignorovat pozdě doručený mzdový podklad',
        'vymazat dokumentaci místo archivace',
      ],
    },
    {
      type: 'summary',
      items: [
        'Výstupní proces propojuje právní skončení, poslední mzdu, potvrzení, odhlášení a archivaci.',
        'Potvrzení o zaměstnání se vydává při skončení; daňové potvrzení na žádost.',
        'Odhlášení ČSSZ se v roce 2026 provádí prostřednictvím REGZEC.',
        'Pozdní příjem se zpracuje jako doplatek skončeného zaměstnání, nikoli jako nový vztah.',
        'Každý krok musí mít vlastníka, termín a kontrolní stopu.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'offboarding-process-card-01',
      front: 'Kdy se vydává potvrzení o zaměstnání?',
      back: 'Při skončení zaměstnání.',
      explanation: 'Jde o povinný výstupní doklad.',
      skillIds: ['offboarding-documentation'],
    },
    {
      id: 'offboarding-process-card-02',
      front: 'Do kdy se na žádost vystavuje potvrzení o zdanitelných příjmech?',
      back: 'Nejpozději do deseti dnů od žádosti.',
      explanation: 'Musí odpovídat údajům mzdového listu.',
      skillIds: ['offboarding-documentation'],
    },
    {
      id: 'offboarding-process-card-03',
      front:
        'Jakým podáním se od dubna 2026 odhlašuje zaměstnanec z evidence ČSSZ?',
      back: 'REGZEC.',
      explanation: 'Staré ONZ se pro nové odhlášení nepoužívá.',
      skillIds: ['offboarding-notifications'],
    },
    {
      id: 'offboarding-process-card-04',
      front: 'Co udělat s doplatkem zjištěným až po skončení?',
      back: 'Zpracovat jej podle právního titulu a opravit navazující výstupy.',
      explanation: 'Nezakládá se kvůli němu nový pracovní poměr.',
      skillIds: ['final-payroll-reconciliation'],
    },
  ],
  exercises: [
    {
      id: 'offboarding-process-exercise-01',
      type: 'multiple_choice',
      prompt: 'Které kroky patří do výstupního mzdového procesu?',
      options: [
        {
          id: 'attendance',
          text: 'Uzavření docházky.',
        },
        {
          id: 'delete',
          text: 'Okamžité smazání všech údajů zaměstnance.',
        },
        {
          id: 'payroll',
          text: 'Kontrola poslední mzdy.',
        },
        {
          id: 'certificate',
          text: 'Vydání potvrzení o zaměstnání.',
        },
        {
          id: 'notifications',
          text: 'Odhlášení ČSSZ a zdravotní pojišťovny.',
        },
      ],
      correctOptionIds: [
        'attendance',
        'payroll',
        'certificate',
        'notifications',
      ],
      skillIds: ['offboarding-documentation', 'offboarding-notifications'],
      explanation:
        'Výstup propojuje mzdové, dokumentační a oznamovací kroky; povinné údaje se archivují.',
      commonMistake:
        'Zaměnit ukončení aktivního vztahu za okamžité vymazání všech záznamů.',
    },
    {
      id: 'offboarding-process-exercise-02',
      type: 'single_choice',
      prompt:
        'Který doklad musí zaměstnavatel vydat při skončení pracovního poměru?',
      options: [
        {
          id: 'a',
          text: 'Potvrzení o zaměstnání.',
        },
        {
          id: 'b',
          text: 'Pracovní posudek vždy bez žádosti.',
        },
        {
          id: 'c',
          text: 'Novou pracovní smlouvu.',
        },
        {
          id: 'd',
          text: 'Cestovní příkaz.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['offboarding-documentation'],
      explanation: 'Potvrzení o zaměstnání je povinným dokladem při skončení.',
      commonMistake:
        'Zaměnit jej za pracovní posudek, který se vydává na žádost.',
    },
    {
      id: 'offboarding-process-exercise-03',
      type: 'multiple_choice',
      prompt: 'Které kroky patří do úplného výstupního mzdového checklistu?',
      options: [
        { id: 'a', text: 'Ověřit právní den skončení.' },
        { id: 'e', text: 'Smazat historii pracovního vztahu.' },
        { id: 'b', text: 'Uzavřít poslední docházku a mzdové podklady.' },
        {
          id: 'f',
          text: 'Automaticky změnit důvod skončení podle výše poslední mzdy.',
        },
        { id: 'c', text: 'Připravit zákonná potvrzení a odhlášky.' },
        { id: 'd', text: 'Zachovat auditní a archivační stopu.' },
      ],
      correctOptionIds: ['a', 'b', 'c', 'd'],
      skillIds: [
        'offboarding-documentation',
        'offboarding-notifications',
        'final-payroll-reconciliation',
      ],
      explanation:
        'Výstup propojuje právní titul, poslední mzdu, potvrzení, oznámení a archivaci.',
      commonMistake:
        'Soustředit se jen na odhlášku a vynechat poslední mzdové vypořádání.',
    },
    {
      id: 'offboarding-process-exercise-04',
      type: 'single_choice',
      prompt:
        'Které podání se používá pro odhlášení zaměstnance z evidence ČSSZ po 1. dubnu 2026?',
      options: [
        {
          id: 'a',
          text: 'REGZEC.',
        },
        {
          id: 'b',
          text: 'Staré ONZ.',
        },
        {
          id: 'c',
          text: 'Daňové přiznání.',
        },
        {
          id: 'd',
          text: 'Zápočtový list.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['offboarding-notifications'],
      explanation:
        'Přihlášení, změny a odhlášení se provádějí prostřednictvím REGZEC.',
      commonMistake: 'Pokračovat v používání historického ONZ.',
    },
    {
      id: 'offboarding-process-exercise-05',
      type: 'short_text',
      prompt: 'Jak se běžně označuje potvrzení o zaměstnání?',
      acceptedAnswers: ['zápočtový list', 'zapocetovy list'],
      ignoreDiacritics: true,
      skillIds: ['offboarding-documentation'],
      explanation:
        'Potvrzení o zaměstnání se běžně označuje jako zápočtový list.',
      commonMistake: 'Uvést pracovní posudek.',
    },
    {
      id: 'offboarding-process-exercise-06',
      type: 'single_choice',
      prompt:
        'Po poslední výplatě je doložen dřívější přesčas. Jaký je správný postup?',
      options: [
        {
          id: 'a',
          text: 'Podklad ignorovat.',
        },
        {
          id: 'b',
          text: 'Zpracovat doplatek a potřebné opravy bez založení nového zaměstnání.',
        },
        {
          id: 'c',
          text: 'Založit nový pracovní poměr na jeden den.',
        },
        {
          id: 'd',
          text: 'Přepsat poslední výplatu bez kontrolní stopy.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['final-payroll-reconciliation'],
      explanation:
        'Pozdní podklad se řeší jako oprava nebo doplatek skončeného vztahu.',
      commonMistake:
        'Považovat uzavřenou výplatu za důvod podklad nezpracovat.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Potvrzení o zaměstnání',
      url: 'https://ppropo.mpsv.cz/VI71Potvrzeniozamestnanizapoctov',
      kind: 'official',
    },
    {
      title: 'MPSV – Posudek o pracovní činnosti',
      url: 'https://ppropo.mpsv.cz/VI72Posudekopracovnicinnosti',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Registrace zaměstnance',
      url: 'https://eportal.cssz.cz/web/portal/-/sluzby/registrace-zamestnance',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidence zaměstnanců',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidenční listy důchodového pojištění od roku 2026',
      url: 'https://www.cssz.cz/evidencni-listy-duchodoveho-pojisteni',
      kind: 'official',
    },
    {
      title: 'VZP – Oznamovací povinnost zaměstnavatele',
      url: 'https://www.vzp.cz/platci/informace/zamestnavatel/povinnosti-zamestnavatele/oznamovaci-povinnost',
      kind: 'official',
    },
    {
      title: 'Finanční správa – Zaměstnanci a zaměstnavatelé',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
  ],
})
