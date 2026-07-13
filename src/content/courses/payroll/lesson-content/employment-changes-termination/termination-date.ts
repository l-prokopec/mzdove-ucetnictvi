import { defineLessonContent } from '../define'

export const terminationDateContent = defineLessonContent({
  moduleId: 'employment-changes-termination',
  skillIds: [
    'termination-date-calculation',
    'notice-period-control',
    'final-payroll-period',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-11',
    note: 'Určení rozhodného dne skončení, běh výpovědní doby od června 2025 a dopad do posledního mzdového období ověřené podle zákoníku práce účinného v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Proč je přesný den skončení zásadní',
    },
    {
      type: 'paragraph',
      text: 'Den skončení určuje poslední trvání pracovního vztahu, účast v evidencích, poslední zpracovanou docházku, nárok na mzdu, náhrady, dovolenou, odstupné a termíny odhlášení. Chyba jediného dne může vytvořit nesoulad mezi pracovní smlouvou, mzdou, ČSSZ a zdravotní pojišťovnou.',
    },
    {
      type: 'definition',
      term: 'Rozhodný den skončení',
      definition:
        'Poslední den trvání pracovního poměru určený podle konkrétního způsobu skončení a jeho právních účinků.',
    },
    {
      type: 'heading',
      text: 'Dohoda',
    },
    {
      type: 'paragraph',
      text: 'Při dohodě končí pracovní poměr sjednaným dnem. Nejbezpečnější je přesné kalendářní datum. Sjednaný den nemůže být bez dalšího nahrazen dnem podpisu, dnem poslední směny ani dnem, kdy dokument obdržela mzdová účtárna.',
    },
    {
      type: 'example',
      title: 'Dohoda podepsaná před skončením',
      situation:
        'Dohoda je podepsána 10. září a stanoví skončení pracovního poměru 30. září.',
      solution:
        'Posledním dnem pracovního poměru je 30. září. Mzdová účetní zpracuje celé období do tohoto dne bez ohledu na dřívější datum podpisu.',
    },
    {
      type: 'heading',
      text: 'Výpověď a nový běh výpovědní doby',
    },
    {
      type: 'paragraph',
      text: 'U výpovědí doručených podle právní úpravy účinné od 1. června 2025 začíná výpovědní doba dnem doručení druhé straně. Končí dnem, který se s dnem doručení číslem shoduje; není-li takový den v posledním měsíci, končí posledním dnem tohoto měsíce.',
    },
    {
      type: 'paragraph',
      text: 'Výpovědní doba činí běžně nejméně dva měsíce. U vybraných výpovědních důvodů zaměstnavatele podle § 52 písm. f) až h) činí nejméně jeden měsíc. Písemná dohoda stran může za zákonných podmínek dobu prodloužit nebo upravit její běh.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Nepoužívej automaticky historické pravidlo, podle kterého výpovědní doba vždy začínala prvním dnem následujícího měsíce. U každého případu ověř datum doručení, právní režim a případnou písemnou dohodu stran.',
    },
    {
      type: 'example',
      title: 'Dvouměsíční výpovědní doba',
      situation:
        'Výpověď s běžnou dvouměsíční dobou byla doručena 12. srpna 2026.',
      solution:
        'Pokud se neuplatní zvláštní dohoda, ochranná doba nebo jiná výjimka, výpovědní doba běží od 12. srpna a pracovní poměr skončí 12. října 2026.',
    },
    {
      type: 'example',
      title: 'Den v posledním měsíci neexistuje',
      situation:
        'Dvouměsíční výpověď je doručena 31. prosince. V únoru stejné číslo dne neexistuje.',
      solution:
        'Výpovědní doba skončí posledním kalendářním dnem února, pokud její běh neovlivní jiná právní skutečnost.',
    },
    {
      type: 'heading',
      text: 'Jednoměsíční výpovědní doba',
    },
    {
      type: 'paragraph',
      text: 'U výpovědi dané zaměstnavatelem z vybraných důvodů spojených s nesplňováním předpokladů nebo povinností může zákonná minimální výpovědní doba činit jeden měsíc. Mzdová účetní tuto délku neurčuje podle názvu případu, ale přebírá ji z ověřeného právního podkladu.',
    },
    {
      type: 'heading',
      text: 'Ochranná doba a prodloužení',
    },
    {
      type: 'paragraph',
      text: 'Pokud byla výpověď dána před začátkem ochranné doby a měla by během ní skončit, ochranná doba se za stanovených podmínek do výpovědní doby nezapočítá. Pracovní poměr může skončit až po doběhnutí zbývající části. Existují však zákonné výjimky a zaměstnanec může sdělit, že na prodloužení netrvá.',
    },
    {
      type: 'example',
      title: 'Ochranná doba před původním koncem',
      situation:
        'V evidenci je předběžně uveden konec 15. listopadu, ale zaměstnanec se před tímto datem dostane do ochranné doby.',
      solution:
        'Mzdová účetní nesmí datum automaticky použít pro odhlášení. Vyžádá potvrzené nové datum podle pracovněprávního posouzení.',
    },
    {
      type: 'heading',
      text: 'Okamžité zrušení',
    },
    {
      type: 'paragraph',
      text: 'Při platném okamžitém zrušení končí pracovní poměr dnem doručení druhé straně. Dokument nesmí stanovovat zpětný konec a nelze k němu připočítat běžnou výpovědní dobu.',
    },
    {
      type: 'heading',
      text: 'Zrušení ve zkušební době',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr končí dnem doručení písemného zrušení, není-li v něm uveden den pozdější. Je nutné ověřit, že zkušební doba v okamžiku zrušení ještě trvala, včetně případného zákonného nebo dohodnutého prodloužení.',
    },
    {
      type: 'heading',
      text: 'Doba určitá',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr na dobu určitou končí uplynutím sjednané doby. Může jít o konkrétní datum, časové období nebo dostatečně určitou událost. Posledním dnem je den vyplývající ze smlouvy a případných dodatků.',
    },
    {
      type: 'heading',
      text: 'Poslední směna není vždy den skončení',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může mít poslední směnu před rozhodným dnem skončení, například kvůli víkendu, dovolené nebo překážce. Mzdová účetní proto nesmí vztah uzavřít podle posledního záznamu docházky.',
    },
    {
      type: 'example',
      title: 'Konec pracovního poměru v neděli',
      situation:
        'Doba určitá končí v neděli 31. května. Poslední směna zaměstnance byla v pátek 29. května.',
      solution:
        'Pracovní poměr trvá do neděle 31. května. Docházka a nároky se posoudí podle rozvrhu a pracovněprávního stavu, nikoli pouze podle poslední fyzicky odpracované směny.',
    },
    {
      type: 'heading',
      text: 'Dopad do poslední mzdy',
    },
    {
      type: 'list',
      items: [
        'mzda nebo plat za práci do rozhodného dne',
        'náhrady mzdy a překážky do rozhodného dne',
        'příplatky a mimořádné složky patřící do posledního období',
        'náhrada za nevyčerpanou dovolenou při skončení',
        'odstupné nebo jiné zvláštní plnění',
        'srážky a jejich konečné pořadí',
        'později zúčtované příjmy po skončení',
      ],
    },
    {
      type: 'heading',
      text: 'Později zúčtovaný příjem',
    },
    {
      type: 'paragraph',
      text: 'Skončení pracovního poměru neznamená, že už nikdy nelze zaměstnanci nic zúčtovat. Po skončení může být doplacena mzda, odměna, náhrada nebo oprava. Takové plnění se zpracuje podle svého právního důvodu a období a nesmí být zaměněno za pokračování pracovního vztahu.',
    },
    {
      type: 'heading',
      text: 'Odhlášení a návazné evidence',
    },
    {
      type: 'paragraph',
      text: 'Rozhodný den se používá při odhlášení z evidence zaměstnanců prostřednictvím REGZEC a při oznámení zdravotní pojišťovně. Odhlášení se provádí v příslušné lhůtě po skončení. Stejné datum musí být v personální, mzdové a pojistné evidenci.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'určit způsob skončení',
        'ověřit finální dokument',
        'ověřit datum podpisu a doručení',
        'určit délku a běh výpovědní doby, pokud se používá',
        'prověřit ochrannou dobu a výjimky',
        'určit poslední den pracovního poměru',
        'porovnat datum se smlouvou, docházkou a systémy',
        'zpracovat poslední mzdu a odhlášení',
        'zachovat kontrolní stopu',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit datum podpisu dohody za sjednaný den skončení',
        'použít starý kalendářní běh výpovědní doby bez kontroly',
        'nezohlednit jednoměsíční výpovědní dobu u vybraných důvodů',
        'ignorovat ochrannou dobu',
        'zaměnit poslední směnu za poslední den pracovního poměru',
        'odhlásit zaměstnance jiným datem, než používá mzda',
        'považovat pozdější doplatek za pokračování zaměstnání',
      ],
    },
    {
      type: 'summary',
      items: [
        'Rozhodný den se určuje podle konkrétního způsobu skončení.',
        'Výpovědní doba od června 2025 běžně začíná dnem doručení.',
        'Běžná výpovědní doba je nejméně dvouměsíční, u vybraných důvodů nejméně jednoměsíční.',
        'Ochranná doba může původně očekávaný konec změnit.',
        'Poslední směna, den podpisu a den skončení jsou tři různé údaje.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'termination-date-card-01',
      front: 'Kdy od 1. června 2025 běžně začíná výpovědní doba?',
      back: 'Dnem doručení výpovědi druhé straně.',
      explanation: 'Nezačíná automaticky až prvním dnem dalšího měsíce.',
      skillIds: ['notice-period-control'],
    },
    {
      id: 'termination-date-card-02',
      front: 'Je poslední směna vždy dnem skončení pracovního poměru?',
      back: 'Ne.',
      explanation: 'Pracovní poměr může trvat i ve dnech bez směny.',
      skillIds: ['termination-date-calculation'],
    },
    {
      id: 'termination-date-card-03',
      front: 'Kdy končí pracovní poměr při dohodě?',
      back: 'Sjednaným dnem.',
      explanation: 'Datum podpisu může být jiné.',
      skillIds: ['termination-date-calculation'],
    },
    {
      id: 'termination-date-card-04',
      front: 'Může být příjem zúčtován i po skončení zaměstnání?',
      back: 'Ano.',
      explanation:
        'Může jít o doplatek, odměnu nebo opravu, nikoli automaticky o pokračování vztahu.',
      skillIds: ['final-payroll-period'],
    },
  ],
  exercises: [
    {
      id: 'termination-date-exercise-01',
      type: 'single_choice',
      prompt:
        'Dohoda podepsaná 10. září stanoví konec 30. září. Kdy pracovní poměr končí?',
      options: [
        {
          id: 'a',
          text: '10. září.',
        },
        {
          id: 'b',
          text: '30. září.',
        },
        {
          id: 'c',
          text: 'Dnem poslední směny.',
        },
        {
          id: 'd',
          text: 'Dnem výplaty.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['termination-date-calculation'],
      explanation: 'Dohoda končí sjednaným dnem.',
      commonMistake: 'Použít datum podpisu.',
    },
    {
      id: 'termination-date-exercise-02',
      type: 'single_choice',
      prompt:
        'Běžná dvouměsíční výpověď byla doručena 12. srpna 2026. Jaký je očekávaný konec bez dalších okolností?',
      options: [
        {
          id: 'a',
          text: '31. října.',
        },
        {
          id: 'b',
          text: '12. října.',
        },
        {
          id: 'c',
          text: '1. listopadu.',
        },
        {
          id: 'd',
          text: '12. září.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['notice-period-control'],
      explanation:
        'Výpovědní doba běží ode dne doručení a končí číselně shodným dnem.',
      commonMistake: 'Použít historický konec kalendářního měsíce.',
    },
    {
      id: 'termination-date-exercise-03',
      type: 'multiple_choice',
      prompt: 'Co může ovlivnit konečný den pracovního poměru při výpovědi?',
      options: [
        {
          id: 'delivery',
          text: 'Datum doručení.',
        },
        {
          id: 'payday',
          text: 'Běžný výplatní termín sám o sobě.',
        },
        {
          id: 'length',
          text: 'Délka výpovědní doby.',
        },
        {
          id: 'protection',
          text: 'Ochranná doba.',
        },
        {
          id: 'agreement',
          text: 'Písemná dohoda o běhu výpovědní doby.',
        },
      ],
      correctOptionIds: ['delivery', 'length', 'protection', 'agreement'],
      skillIds: ['notice-period-control'],
      explanation: 'Výplatní termín neurčuje konec pracovního poměru.',
      commonMistake:
        'Odvozovat konec jen z data uvedeného v personálním přehledu.',
    },
    {
      id: 'termination-date-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec přestal chodit do práce dříve, ale platná dohoda stanoví skončení k pozdějšímu datu. Které datum je rozhodné pro ukončení pracovního poměru?',
      options: [
        { id: 'a', text: 'Poslední fyzická přítomnost.' },
        { id: 'b', text: 'Datum stanovené platnou dohodou.' },
        { id: 'c', text: 'Datum poslední výplaty.' },
        { id: 'd', text: 'Datum odhlášky vytvořené mzdovou účtárnou.' },
      ],
      correctOptionId: 'b',
      skillIds: ['termination-date-calculation', 'final-payroll-period'],
      explanation:
        'Rozhodný den vyplývá z právního titulu skončení, nikoli jen z docházky.',
      commonMistake: 'Odvodit skončení pouze z posledního odpracovaného dne.',
    },
    {
      id: 'termination-date-exercise-05',
      type: 'short_text',
      prompt:
        'Který den zahajuje běžnou výpovědní dobu podle úpravy účinné od června 2025?',
      acceptedAnswers: ['den doručení', 'dnem doručení', 'den doruceni'],
      ignoreDiacritics: true,
      skillIds: ['notice-period-control'],
      explanation: 'Výpovědní doba začíná dnem doručení druhé straně.',
      commonMistake: 'Uvést první den následujícího měsíce.',
    },
    {
      id: 'termination-date-exercise-06',
      type: 'single_choice',
      prompt:
        'Doba určitá končí v neděli, poslední směna byla v pátek. Který den je dnem skončení?',
      options: [
        {
          id: 'a',
          text: 'Pátek.',
        },
        {
          id: 'b',
          text: 'Sobota.',
        },
        {
          id: 'c',
          text: 'Neděle.',
        },
        {
          id: 'd',
          text: 'Následující pondělí.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['termination-date-calculation'],
      explanation: 'Rozhoduje sjednaná doba trvání, nikoli poslední směna.',
      commonMistake: 'Uzavřít vztah podle docházky.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Obecné podmínky výpovědi a výpovědní doba',
      url: 'https://ppropo.mpsv.cz/VI21Obecnepodminkyplatnostivypov',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohoda o rozvázání pracovního poměru',
      url: 'https://ppropo.mpsv.cz/VI1Dohodaorozvazanipracovnihopom',
      kind: 'official',
    },
    {
      title: 'MPSV – Skončení pracovního poměru na dobu určitou',
      url: 'https://ppropo.mpsv.cz/VI5Skoncenipracovnihopomerusjedn',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákaz výpovědi',
      url: 'https://ppropo.mpsv.cz/VI222Zakazvypovedi',
      kind: 'official',
    },
  ],
})
