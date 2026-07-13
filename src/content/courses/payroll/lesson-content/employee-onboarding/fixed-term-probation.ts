import { defineLessonContent } from '../define'

export const fixedTermProbationContent = defineLessonContent({
  moduleId: 'employee-onboarding',
  skillIds: [
    'fixed-term-control',
    'probation-period-control',
    'employment-duration-records',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-11',
    note: 'Pracovní poměr na dobu určitou a zkušební doba včetně změn účinných od června 2025, ověřené podle zákoníku práce a metodiky MPSV.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Doba trvání pracovního poměru',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr může být sjednán na dobu neurčitou nebo na dobu určitou. Doba trvání ovlivňuje evidenci, plánování výstupu, registrační změny i kontrolu platnosti zkušební doby.',
    },
    {
      type: 'definition',
      term: 'Pracovní poměr na dobu neurčitou',
      definition:
        'Pracovní poměr bez předem sjednaného data nebo jinak určeného okamžiku skončení.',
    },
    {
      type: 'definition',
      term: 'Pracovní poměr na dobu určitou',
      definition:
        'Pracovní poměr, jehož trvání je písemně omezeno konkrétním datem, dobou nebo jinou dostatečně určitou skutečností.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Nebyla-li doba trvání písemně sjednána, pracovní poměr se považuje za sjednaný na dobu neurčitou.',
    },
    {
      type: 'heading',
      text: 'Základní limit doby určité',
    },
    {
      type: 'paragraph',
      text: 'Mezi stejným zaměstnavatelem a zaměstnancem může být pracovní poměr na dobu určitou běžně sjednán nejdéle na tři roky a může být opakován nejvýše dvakrát. Za opakování se považuje také prodloužení.',
    },
    {
      type: 'definition',
      term: 'Opakování pracovního poměru',
      definition:
        'Nové sjednání dalšího pracovního poměru na dobu určitou nebo prodloužení již existujícího pracovního poměru na dobu určitou mezi stejnými stranami.',
    },
    {
      type: 'paragraph',
      text: 'Celková doba běžně navazujících pracovních poměrů na dobu určitou nesmí překročit devět let. Pokud od skončení předchozího pracovního poměru na dobu určitou uplynou tři roky, k předchozímu vztahu se pro běžný limit nepřihlíží.',
    },
    {
      type: 'heading',
      text: 'Výjimky a zvláštní režimy',
    },
    {
      type: 'paragraph',
      text: 'Zákoník práce obsahuje výjimky, například pro náhradu dočasně nepřítomného zaměstnance v souvislosti s mateřskou, otcovskou nebo rodičovskou dovolenou, případně pro vážné provozní důvody nebo zvláštní povahu práce při splnění zákonných podmínek. Mzdová účetní výjimku nepředpokládá; musí být doložena pracovněprávním podkladem.',
    },
    {
      type: 'heading',
      text: 'Evidence doby určité',
    },
    {
      type: 'list',
      items: [
        'datum vzniku pracovního poměru',
        'způsob určení skončení',
        'konkrétní datum skončení, je-li sjednáno',
        'předchozí vztahy na dobu určitou mezi stejnými stranami',
        'prodloužení a jejich data',
        'právní podklad případné výjimky',
        'upozornění na blížící se skončení',
      ],
    },
    {
      type: 'example',
      title: 'Prodloužení se počítá jako opakování',
      situation:
        'Pracovní poměr na dobu určitou byl sjednán na jeden rok a zaměstnavatel jej dodatkem prodlouží o další rok.',
      solution:
        'Prodloužení se pro účely zákonného limitu počítá jako opakování. V evidenci musí být zachován původní vztah, dodatek, nové datum skončení a aktualizovaný počet opakování.',
    },
    {
      type: 'heading',
      text: 'Zkušební doba',
    },
    {
      type: 'definition',
      term: 'Zkušební doba',
      definition:
        'Písemně sjednané počáteční období pracovního poměru, během kterého mohou zaměstnavatel i zaměstnanec pracovní poměr zrušit ve zvláštním režimu.',
    },
    {
      type: 'paragraph',
      text: 'Zkušební dobu lze sjednat nejpozději v den vzniku pracovního poměru a musí být sjednána písemně. Nelze ji dodatečně založit až po tomto dni.',
    },
    {
      type: 'heading',
      text: 'Maximální délka zkušební doby',
    },
    {
      type: 'list',
      items: [
        'nejvýše čtyři měsíce u běžného zaměstnance',
        'nejvýše osm měsíců u vedoucího zaměstnance',
        'u pracovního poměru na dobu určitou nejvýše polovina sjednané doby jeho trvání',
      ],
    },
    {
      type: 'example',
      title: 'Krátký pracovní poměr na dobu určitou',
      situation:
        'Pracovní poměr je sjednán na šest měsíců a smlouva uvádí čtyřměsíční zkušební dobu.',
      solution:
        'Zkušební doba nesmí přesáhnout polovinu sjednané doby trvání pracovního poměru. V tomto případě je maximem tři měsíce, i když obecný limit běžného zaměstnance činí čtyři měsíce.',
    },
    {
      type: 'heading',
      text: 'Prodloužení zkušební doby',
    },
    {
      type: 'paragraph',
      text: 'Za trvání zkušební doby se mohou strany písemně dohodnout na jejím prodloužení, ale pouze v mezích zákonných maxim. Zkušební doba se dále prodlužuje o pracovní dny, v nichž zaměstnanec během zkušební doby neodpracoval celou směnu z důvodu překážky v práci, dovolené nebo neomluveného zameškání práce.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Prodloužení se neprovádí pouhým přepsáním data v systému. Musí vycházet z právního pravidla nebo z písemné dohody a musí být doložitelně vypočteno.',
    },
    {
      type: 'heading',
      text: 'Role mzdové účetní',
    },
    {
      type: 'list',
      items: [
        'převzít přesné datum vzniku a skončení pracovního poměru',
        'zkontrolovat evidenci předchozích dob určitých',
        'upozornit na překročení běžného limitu',
        'zkontrolovat maximální délku zkušební doby',
        'u doby určité porovnat zkušební dobu s polovinou trvání vztahu',
        'evidovat doložené prodloužení zkušební doby',
        'nastavit kontrolní upozornění před skončením',
      ],
    },
    {
      type: 'example',
      title: 'Neurčitý údaj o konci vztahu',
      situation:
        'V personálním požadavku je uvedeno pouze „nástup na dobu určitou“, ale smlouva ani jiný dokument neurčuje datum nebo událost skončení.',
      solution:
        'Mzdová účetní nemá datum domýšlet. Vyžádá úplný pracovněprávní podklad. Bez písemného sjednání doby určité se vztah eviduje podle skutečného právního stavu, nikoli podle neformální poznámky.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každé prodloužení za pokračování bez započtení opakování',
        'nezohlednit předchozí pracovní poměry stejného zaměstnance',
        'sjednat zkušební dobu až po dni vzniku pracovního poměru',
        'použít čtyřměsíční zkušební dobu u příliš krátké doby určité',
        'prodloužit zkušební dobu bez písemného nebo zákonného podkladu',
        'neaktualizovat datum skončení v navazujících evidencích',
      ],
    },
    {
      type: 'summary',
      items: [
        'Bez písemného omezení se pracovní poměr považuje za dobu neurčitou.',
        'Běžný pracovní poměr na dobu určitou lze sjednat nejdéle na tři roky a opakovat nejvýše dvakrát.',
        'Prodloužení se počítá jako opakování a běžná celková doba nesmí překročit devět let.',
        'Zkušební doba musí být písemná a sjednaná nejpozději v den vzniku pracovního poměru.',
        'Maximem jsou čtyři měsíce, u vedoucího osm měsíců, současně nejvýše polovina doby určité.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'fixed-term-probation-card-01',
      front: 'Co platí, pokud doba určitá nebyla písemně sjednána?',
      back: 'Pracovní poměr se považuje za sjednaný na dobu neurčitou.',
      explanation: 'Omezení doby trvání musí být zachyceno písemně.',
      skillIds: ['fixed-term-control'],
    },
    {
      id: 'fixed-term-probation-card-02',
      front: 'Počítá se prodloužení doby určité jako opakování?',
      back: 'Ano.',
      explanation:
        'Prodloužení již existujícího vztahu se započítává stejně jako nové sjednání další doby určité.',
      skillIds: ['fixed-term-control'],
    },
    {
      id: 'fixed-term-probation-card-03',
      front: 'Jaká je maximální zkušební doba u běžného zaměstnance?',
      back: 'Nejvýše čtyři měsíce, současně u doby určité nejvýše polovina jejího sjednaného trvání.',
      explanation: 'Vždy se použije přísnější z příslušných limitů.',
      skillIds: ['probation-period-control'],
    },
    {
      id: 'fixed-term-probation-card-04',
      front: 'Do kdy lze sjednat zkušební dobu?',
      back: 'Nejpozději v den vzniku pracovního poměru a písemně.',
      explanation:
        'Po vzniku pracovního poměru již nelze novou zkušební dobu dodatečně založit.',
      skillIds: ['probation-period-control'],
    },
  ],
  exercises: [
    {
      id: 'fixed-term-probation-exercise-01',
      type: 'single_choice',
      prompt:
        'Doba trvání nebyla ve smlouvě ani jiném písemném ujednání omezena. Jaký je vztah?',
      options: [
        {
          id: 'a',
          text: 'Na dobu neurčitou.',
        },
        {
          id: 'b',
          text: 'Automaticky na jeden rok.',
        },
        {
          id: 'c',
          text: 'Na zkušební dobu.',
        },
        {
          id: 'd',
          text: 'Bez pracovního poměru.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['fixed-term-control'],
      explanation:
        'Není-li písemně sjednána doba určitá, pracovní poměr trvá na dobu neurčitou.',
      commonMistake:
        'Převzít neformální personální poznámku jako písemné sjednání doby určité.',
    },
    {
      id: 'fixed-term-probation-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Která tvrzení odpovídají běžnému limitu pracovního poměru na dobu určitou?',
      options: [
        {
          id: 'three-years',
          text: 'Jedno sjednání nejvýše na tři roky.',
        },
        {
          id: 'unlimited',
          text: 'Bez výjimky lze dobu určitou prodlužovat neomezeně.',
        },
        {
          id: 'two-repeats',
          text: 'Nejvýše dvě opakování.',
        },
        {
          id: 'extension-repeat',
          text: 'Prodloužení se považuje za opakování.',
        },
        {
          id: 'nine-years',
          text: 'Běžná celková doba navazujících vztahů nejvýše devět let.',
        },
      ],
      correctOptionIds: [
        'three-years',
        'two-repeats',
        'extension-repeat',
        'nine-years',
      ],
      skillIds: ['fixed-term-control'],
      explanation:
        'Základní pravidlo kombinuje délku jednotlivého vztahu, počet opakování a celkovou dobu.',
      commonMistake: 'Nezapočítat prodloužení nebo předchozí navazující vztah.',
    },
    {
      id: 'fixed-term-probation-exercise-03',
      type: 'single_choice',
      prompt:
        'Pracovní poměr je sjednán na šest měsíců. Jaká může být nejdelší zkušební doba běžného zaměstnance?',
      options: [
        {
          id: 'a',
          text: 'Dva měsíce.',
        },
        {
          id: 'b',
          text: 'Tři měsíce.',
        },
        {
          id: 'c',
          text: 'Čtyři měsíce.',
        },
        {
          id: 'd',
          text: 'Šest měsíců.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['probation-period-control'],
      explanation:
        'Polovina šestiměsíční doby určité jsou tři měsíce, což je přísnější limit.',
      commonMistake:
        'Použít obecný čtyřměsíční limit bez kontroly poloviny doby určité.',
    },
    {
      id: 'fixed-term-probation-exercise-04',
      type: 'single_choice',
      prompt:
        'Kdy musí být zkušební doba sjednána, aby mohla platně vzniknout?',
      options: [
        { id: 'a', text: 'Kdykoli během prvního roku.' },
        {
          id: 'b',
          text: 'Nejpozději v den vzniku pracovního poměru a písemně.',
        },
        { id: 'c', text: 'Až po první mzdové uzávěrce.' },
        { id: 'd', text: 'Pouze ústně po skončení směny.' },
      ],
      correctOptionId: 'b',
      skillIds: [
        'fixed-term-control',
        'probation-period-control',
        'employment-duration-records',
      ],
      explanation:
        'Zkušební doba musí být písemně sjednána nejpozději v den vzniku pracovního poměru.',
      commonMistake: 'Doplňovat zkušební dobu zpětně.',
    },
    {
      id: 'fixed-term-probation-exercise-05',
      type: 'short_text',
      prompt:
        'Jaký maximální počet opakování běžně připouští zákon u doby určité mezi stejnými stranami?',
      acceptedAnswers: ['dvě', '2', 'dve'],
      ignoreDiacritics: true,
      skillIds: ['fixed-term-control'],
      explanation:
        'Běžný limit připouští nejvýše dvě opakování; prodloužení se do nich započítává.',
      commonMistake:
        'Uvést tři opakování místo tří celkových navazujících sjednání.',
    },
    {
      id: 'fixed-term-probation-exercise-06',
      type: 'single_choice',
      prompt:
        'HR požaduje založit dvouměsíční zkušební dobu týden po vzniku pracovního poměru. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Zkušební dobu lze kdykoli založit ústní dohodou.',
        },
        {
          id: 'b',
          text: 'Novou zkušební dobu již nelze sjednat, protože nebyla sjednána nejpozději v den vzniku pracovního poměru.',
        },
        {
          id: 'c',
          text: 'Stačí změnit datum v mzdovém systému.',
        },
        {
          id: 'd',
          text: 'Zkušební doba vznikne automaticky.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['probation-period-control'],
      explanation:
        'Zkušební doba musí být písemně sjednána nejpozději v den vzniku pracovního poměru.',
      commonMistake:
        'Zaměnit dodatečné prodloužení již platné zkušební doby za dodatečné založení nové zkušební doby.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Doba trvání pracovního poměru',
      url: 'https://ppropo.mpsv.cz/IV13Dobatrvanipracovnihopomeru',
      kind: 'official',
    },
    {
      title: 'MPSV – Sjednání zkušební doby',
      url: 'https://ppropo.mpsv.cz/IV14Sjednanizkusebnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákoník práce v aktuálním znění',
      url: 'https://ppropo.mpsv.cz/zakon_262_2006',
      kind: 'official',
    },
  ],
})
