import { defineLessonContent } from '../define'

export const attendanceReconciliationContent = defineLessonContent({
  moduleId: 'working-time',
  skillIds: [
    'attendance-schedule-reconciliation',
    'attendance-deviation-classification',
    'attendance-payroll-handoff',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Praktická kontrola rozvrhu proti skutečné docházce a převod časových odchylek na mzdové vstupy podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Rozvrh je plán, docházka je skutečnost',
    },
    {
      type: 'paragraph',
      text: 'Kontrola docházky porovnává platný plán směn se skutečně doloženým průběhem práce. Cílem není pouze najít rozdíl v počtu hodin, ale správně určit jeho důvod a mzdovou kategorii.',
    },
    {
      type: 'definition',
      term: 'Reconciliation docházky',
      definition:
        'Systematické porovnání rozvržené a skutečné pracovní doby včetně klasifikace každého rozdílu, schválení a předání do mzdy.',
    },
    {
      type: 'heading',
      text: 'Podklady pro kontrolu',
    },
    {
      type: 'list',
      items: [
        'platný rozvrh a jeho změny',
        'skutečné začátky a konce práce',
        'přestávky',
        'žádosti o dovolenou',
        'doklady překážek v práci',
        'schválení práce přesčas',
        'záznamy pracovní pohotovosti',
        'evidence svátků, nocí a víkendů',
        'opravy a jejich kontrolní stopa',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Docházku nelze správně vyhodnotit proti rozvrhu, který byl zpětně přepsán podle skutečnosti. Původní plán musí zůstat dohledatelný.',
    },
    {
      type: 'heading',
      text: 'Základní typy rozdílů',
    },
    {
      type: 'list',
      items: [
        'skutečný začátek je dřívější než rozvrh',
        'skutečný konec je pozdější než rozvrh',
        'zaměstnanec přišel pozdě',
        'zaměstnanec odešel dříve',
        'celá směna chybí',
        'evidovaná směna není v rozvrhu',
        'chybí nebo nesouhlasí přestávka',
        'směna zasahuje do noci, víkendu nebo svátku',
        'překrývají se dva pracovní vztahy',
      ],
    },
    {
      type: 'heading',
      text: 'Rozdíl není automaticky chyba zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Rozdíl může být schválenou změnou směny, přesčasem, dovolenou, překážkou na straně zaměstnance nebo zaměstnavatele, pracovní cestou, neomluvenou absencí nebo technickou chybou evidence. Klasifikace musí vycházet z podkladu.',
    },
    {
      type: 'heading',
      text: 'Rozdíl není automaticky přesčas',
    },
    {
      type: 'paragraph',
      text: 'Práce před směnou nebo po směně je přesčasem pouze tehdy, pokud splňuje zákonnou definici a byla nařízena nebo alespoň schválena zaměstnavatelem. Jinak může jít o neprokázaný čas přítomnosti nebo chybu evidence.',
    },
    {
      type: 'example',
      title: 'Odchod o 90 minut později',
      situation:
        'Rozvrh směny je 8:00–16:30 s třicetiminutovou přestávkou. Evidence ukazuje práci do 18:00.',
      solution:
        'Rozdíl činí 1,5 hodiny. Před zpracováním je nutné ověřit, zda zaměstnanec skutečně pracoval a zda práci nařídil nebo schválil zaměstnavatel. Teprve poté lze čas klasifikovat jako přesčas nebo jinou kategorii.',
    },
    {
      type: 'heading',
      text: 'Pozdní příchod',
    },
    {
      type: 'paragraph',
      text: 'Pozdní příchod může být omluvenou překážkou, dohodnutou změnou směny, pružným začátkem, neomluvenou absencí nebo technickou chybou. Systém nesmí automaticky srazit mzdu bez určení právního důvodu.',
    },
    {
      type: 'example',
      title: 'Návštěva lékaře před směnou',
      situation:
        'Směna začíná v 8:00, zaměstnanec přichází v 10:00 a předloží potvrzení o vyšetření.',
      solution:
        'Dvě chybějící hodiny se neposoudí jako běžná práce ani automaticky jako neomluvená absence. Je nutné určit rozsah omluvené překážky, případný nárok na náhradu a správné časové zařazení.',
    },
    {
      type: 'heading',
      text: 'Dřívější odchod',
    },
    {
      type: 'paragraph',
      text: 'Dřívější odchod se klasifikuje podle schválené dovolené, překážky, náhradního volna, změny rozvrhu nebo neomluvené absence. Pouhý údaj z turniketu nestačí.',
    },
    {
      type: 'heading',
      text: 'Chybějící celá směna',
    },
    {
      type: 'list',
      items: [
        'dovolená',
        'dočasná pracovní neschopnost',
        'jiná překážka v práci',
        'náhradní volno',
        'schválená změna rozvrhu',
        'pracovní cesta bez správně přenesené docházky',
        'neomluvená absence',
        'chyba importu',
      ],
    },
    {
      type: 'heading',
      text: 'Práce ve svátek',
    },
    {
      type: 'paragraph',
      text: 'Nejdříve se zjistí, zda zaměstnanec měl na svátek podle rozvrhu směnu. Pokud pracoval, eviduje se skutečná práce ve svátek. Pokud směnu rozvrženou neměl, samotný svátek nevytváří chybějící docházku.',
    },
    {
      type: 'example',
      title: 'Svátek v nerovnoměrném provozu',
      situation:
        'Svátek připadne na středu. Zaměstnanec v nepřetržitém provozu má podle rozvrhu volno, jeho kolega má dvanáctihodinovou směnu.',
      solution:
        'První zaměstnanec nemá chybějící směnu. U druhého se eviduje skutečná práce ve svátek podle čisté pracovní doby po správném posouzení přestávek.',
    },
    {
      type: 'heading',
      text: 'Noční práce přes půlnoc',
    },
    {
      type: 'paragraph',
      text: 'Směna přes půlnoc se pro časové kategorie rozdělí podle skutečného data a hodin. Noční práce se určuje intervalem 22:00–6:00, zatímco sobota, neděle a svátek se určují podle kalendářního dne.',
    },
    {
      type: 'example',
      title: 'Páteční noční směna',
      situation:
        'Zaměstnanec pracuje v pátek od 22:00 do soboty 6:00 bez nezapočitatelné přestávky.',
      solution:
        'Všech 8 hodin je noční prací. Úsek od půlnoci do 6:00, tedy 6 hodin, současně připadá na sobotu. Evidence musí umožnit souběh obou kategorií.',
    },
    {
      type: 'heading',
      text: 'Kratší pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance s kratší pracovní dobou se práce nad úvazek do stanovené týdenní pracovní doby vykazuje samostatně. Není automaticky přesčasem, ale ovlivňuje odpracované hodiny a mzdu.',
    },
    {
      type: 'example',
      title: 'Čtyři hodiny nad úvazek',
      situation:
        'Zaměstnanec má 30 hodin týdně, platný rozvrh na 30 hodin a se souhlasem zaměstnavatele odpracuje 34 hodin. Stanovená týdenní pracovní doba je 40 hodin.',
      solution:
        'Rozdíl 4 hodiny je prací nad kratší pracovní dobu, nikoli ještě přesčasem. Do mzdových vstupů se předá samostatně bez automatického přesčasového příplatku.',
    },
    {
      type: 'heading',
      text: 'Nerovnoměrný rozvrh',
    },
    {
      type: 'paragraph',
      text: 'Vyšší počet hodin v jednom týdnu nerovnoměrného rozvrhu není sám o sobě přesčasem, pokud odpovídá platnému rozvrhu a průměr se vyrovnává v určeném období. Přesčas se posuzuje proti rozvrhu a zákonné týdenní době.',
    },
    {
      type: 'example',
      title: 'Dlouhý týden podle rozvrhu',
      situation:
        'Zaměstnanec má v dlouhém týdnu řádně rozvrženo 48 hodin a v krátkém týdnu 27 hodin. Jeho stanovená týdenní pracovní doba činí 37,5 hodiny a oba týdny tvoří platné vyrovnávací období.',
      solution:
        'Průměr je (48 + 27) ÷ 2 = 37,5 hodiny. Samotných 48 hodin v prvním týdnu není automaticky přesčasem, protože odpovídá nerovnoměrnému rozvrhu.',
    },
    {
      type: 'heading',
      text: 'Přestávka v docházce',
    },
    {
      type: 'paragraph',
      text: 'Automaticky odečtená přestávka se musí porovnat se skutečným režimem práce. U běžné přestávky se čas nezapočítává, u nepřerušitelné práce nebo bezpečnostní přestávky může být započitatelný.',
    },
    {
      type: 'example',
      title: 'Automatický odečet u nepřerušitelné práce',
      situation:
        'Systém každý den automaticky odečítá 30 minut, ale zaměstnanec vykonává doloženou nepřerušitelnou obsluhu a jí během výkonu práce.',
      solution:
        'Automatický odečet je nesprávný. Přiměřená doba na jídlo při nepřerušitelné práci se započítává do pracovní doby a evidence se musí opravit.',
    },
    {
      type: 'heading',
      text: 'Překryv pracovních vztahů',
    },
    {
      type: 'paragraph',
      text: 'Má-li osoba více pracovních vztahů, porovnají se jejich časové osy. Skutečný souběžný výkon dvou prací pro téhož zaměstnavatele bývá zpravidla nemožný a vyžaduje vysvětlení.',
    },
    {
      type: 'example',
      title: 'Pracovní poměr a DPP ve stejný čas',
      situation:
        'Pracovní poměr uvádí práci 8:00–16:00 a DPP práci 14:00–18:00.',
      solution:
        'Čas 14:00–16:00 se překrývá. Před výplatou se musí určit, který záznam je chybný, zda šlo o jiný reálný způsob výkonu nebo zda má být některý podklad opraven.',
    },
    {
      type: 'heading',
      text: 'Technické chyby',
    },
    {
      type: 'list',
      items: [
        'duplicitní načtení stejné směny',
        'chybějící odchod',
        'přehodnocení časové zóny',
        'chybný přechod přes půlnoc',
        'automatický odečet přestávky dvakrát',
        'přiřazení ke špatnému pracovnímu vztahu',
        'neaktuální rozvrh v jednom ze systémů',
      ],
    },
    {
      type: 'heading',
      text: 'Rozhodovací postup pro každou odchylku',
    },
    {
      type: 'list',
      items: [
        'identifikovat zaměstnance, vztah a den',
        'zjistit platný rozvrh',
        'zjistit skutečný časový průběh',
        'spočítat přesný rozdíl',
        'dohledat právní a schvalovací podklad',
        'přiřadit mzdovou kategorii',
        'ověřit přestávky a odpočinek',
        'provést a schválit opravu',
        'předat čistý mzdový vstup',
      ],
    },
    {
      type: 'heading',
      text: 'Mzdový výstup kontroly',
    },
    {
      type: 'list',
      items: [
        'běžně odpracované hodiny',
        'práce nad kratší pracovní dobu',
        'schválená práce přesčas',
        'noční hodiny',
        'sobota a neděle',
        'svátek',
        'pracovní pohotovost a výkon při ní',
        'dovolená',
        'placené a neplacené překážky',
        'neomluvená absence',
        'náhradní volno',
      ],
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Jedna hodina může patřit do více časových kategorií současně, například může být noční prací i prací v sobotu. Evidence musí zachovat všechny relevantní příznaky.',
    },
    {
      type: 'heading',
      text: 'Modelová kompletní kontrola',
    },
    {
      type: 'example',
      title: 'Týdenní reconciliation',
      situation:
        'Rozvrh: pondělí až pátek 8:00–16:30 s 30minutovou přestávkou. Skutečnost: pondělí přesně podle plánu; úterý do 18:00 se schváleným přesčasem; středa příchod 10:00 s doloženým lékařem; čtvrtek podle plánu; pátek dovolená.',
      solution:
        'Pondělí: 8 běžných hodin. Úterý: 8 běžných hodin a 1,5 hodiny schválené práce mimo rozvrh, následně posouzené jako přesčas. Středa: 6 odpracovaných hodin a 2 hodiny překážky podle doloženého rozsahu. Čtvrtek: 8 běžných hodin. Pátek: 8 hodin dovolené podle rozvrhu. Každá kategorie se předá do mzdy odděleně.',
    },
    {
      type: 'heading',
      text: 'Kontrola před uzávěrkou',
    },
    {
      type: 'list',
      items: [
        'žádný nevyřešený chybějící příchod nebo odchod',
        'žádný nevysvětlený překryv',
        'všechny odchylky mají kategorii',
        'přesčasy mají schválení',
        'překážky mají podklad',
        'přestávky jsou správně započteny',
        'noční, víkendové a sváteční hodiny jsou časově přesné',
        'rozvrh a evidence používají stejnou verzi',
        'opravy mají auditní stopu',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'převést každou odchylku na přesčas',
        'automaticky krátit mzdu za pozdní příchod',
        'použít poslední verzi rozvrhu i zpětně',
        'označit dlouhý týden v nerovnoměrném rozvrhu za přesčas',
        'nechat automatický odečet přestávky bez kontroly',
        'nezachytit souběh noční a víkendové práce',
        'přehlédnout překryv více vztahů',
        'předat mzdě syrová turniketová data',
      ],
    },
    {
      type: 'summary',
      items: [
        'Kontrola docházky porovnává platný rozvrh se skutečným výkonem práce.',
        'Každý rozdíl musí mít konkrétní právní a mzdovou klasifikaci.',
        'Práce mimo rozvrh ani nad kratší úvazek není automaticky přesčas.',
        'Jedna hodina může současně nést více příznaků, například noc a sobotu.',
        'Do mzdy se předávají až vyřešené, schválené a auditovatelné časové vstupy.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'attendance-reconciliation-card-01',
      front: 'Co je prvním podkladem kontroly docházky?',
      back: 'Platný rozvrh směn.',
      explanation: 'Skutečnost se musí porovnat s plánem účinným pro daný den.',
      skillIds: ['attendance-schedule-reconciliation'],
    },
    {
      id: 'attendance-reconciliation-card-02',
      front: 'Je pozdější odchod automaticky přesčas?',
      back: 'Ne. Musí být doložena skutečná práce a příkaz nebo souhlas zaměstnavatele.',
      explanation: 'Může jít pouze o přítomnost nebo chybu evidence.',
      skillIds: ['attendance-deviation-classification'],
    },
    {
      id: 'attendance-reconciliation-card-03',
      front: 'Je dlouhý týden v nerovnoměrném rozvrhu automaticky přesčas?',
      back: 'Ne, pokud odpovídá platnému rozvrhu a průměr se vyrovná.',
      explanation:
        'Přesčas se posuzuje proti rozvrhu a stanovené týdenní době.',
      skillIds: ['attendance-deviation-classification'],
    },
    {
      id: 'attendance-reconciliation-card-04',
      front: 'Může být jedna hodina současně noční a víkendová?',
      back: 'Ano.',
      explanation:
        'Časové příznaky se mohou překrývat a musí zůstat zachovány.',
      skillIds: ['attendance-payroll-handoff'],
    },
  ],
  exercises: [
    {
      id: 'attendance-reconciliation-exercise-01',
      type: 'single_choice',
      prompt:
        'Rozvrh končí v 16:30, evidence ukazuje práci do 18:00. Co je první správný krok?',
      options: [
        {
          id: 'a',
          text: 'Automaticky přidat 1,5 hodiny přesčasu.',
        },
        {
          id: 'b',
          text: 'Ověřit skutečnou práci a schválení zaměstnavatele.',
        },
        {
          id: 'c',
          text: 'Záznam smazat.',
        },
        {
          id: 'd',
          text: 'Zkrátit další směnu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['attendance-deviation-classification'],
      explanation: 'Odchylka musí být nejprve doložena a klasifikována.',
      commonMistake: 'Přenést rozdíl přímo do mzdy.',
    },
    {
      id: 'attendance-reconciliation-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které výstupy mohou vzniknout z kontroly docházky?',
      options: [
        {
          id: 'ordinary',
          text: 'Běžné odpracované hodiny.',
        },
        {
          id: 'overtime',
          text: 'Schválený přesčas.',
        },
        {
          id: 'obstacle',
          text: 'Překážka v práci.',
        },
        {
          id: 'vacation',
          text: 'Dovolená.',
        },
        {
          id: 'raw',
          text: 'Nevysvětlený rozdíl bez kategorie jako konečný mzdový vstup.',
        },
      ],
      correctOptionIds: ['ordinary', 'overtime', 'obstacle', 'vacation'],
      skillIds: ['attendance-payroll-handoff'],
      explanation: 'Mzdě se předávají jen klasifikované časové kategorie.',
      commonMistake: 'Předat nevyřešený rozdíl jako obecné hodiny.',
    },
    {
      id: 'attendance-reconciliation-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď postup kontroly jedné odchylky.',
      steps: [
        {
          id: 'identify',
          text: 'Identifikovat zaměstnance, vztah a datum.',
        },
        {
          id: 'schedule',
          text: 'Ověřit platný rozvrh.',
        },
        {
          id: 'actual',
          text: 'Zjistit skutečný průběh.',
        },
        {
          id: 'document',
          text: 'Dohledat důvod a schválení.',
        },
        {
          id: 'classify',
          text: 'Přiřadit mzdovou kategorii.',
        },
        {
          id: 'handoff',
          text: 'Schválit opravu a předat vstup do mzdy.',
        },
      ],
      correctOrder: [
        'identify',
        'schedule',
        'actual',
        'document',
        'classify',
        'handoff',
      ],
      skillIds: ['attendance-schedule-reconciliation'],
      explanation:
        'Klasifikace vzniká až po porovnání plánu, skutečnosti a podkladu.',
      commonMistake: 'Začít přiřazením mzdové položky bez zjištění důvodu.',
    },
    {
      id: 'attendance-reconciliation-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má 30hodinový úvazek a odpracuje 34 hodin při stanovené době 40 hodin. Jak se rozdíl klasifikuje?',
      options: [
        {
          id: 'a',
          text: 'Automaticky přesčas.',
        },
        {
          id: 'b',
          text: 'Práce nad kratší pracovní dobu, ale ne ještě přesčas.',
        },
        {
          id: 'c',
          text: 'Dovolená.',
        },
        {
          id: 'd',
          text: 'Neomluvená absence.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['attendance-deviation-classification'],
      explanation: 'Hranicí přesčasu je stanovená týdenní pracovní doba.',
      commonMistake: 'Použít hranici individuálního úvazku.',
    },
    {
      id: 'attendance-reconciliation-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá porovnání rozvrhu se skutečnou docházkou a klasifikace rozdílů?',
      acceptedAnswers: [
        'reconciliation docházky',
        'kontrola docházky',
        'kontrola dochazky',
      ],
      ignoreDiacritics: true,
      skillIds: ['attendance-schedule-reconciliation'],
      explanation:
        'Jde o reconciliation neboli kontrolu docházky proti rozvrhu.',
      commonMistake: 'Uvést pouze evidenci přítomnosti.',
    },
    {
      id: 'attendance-reconciliation-exercise-06',
      type: 'single_choice',
      prompt:
        'Směna probíhá v pátek 22:00 až sobotu 6:00. Kolik hodin je současně nočních a sobotních?',
      options: [
        {
          id: 'a',
          text: '2 hodiny.',
        },
        {
          id: 'b',
          text: '6 hodin.',
        },
        {
          id: 'c',
          text: '8 hodin.',
        },
        {
          id: 'd',
          text: '0 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['attendance-payroll-handoff'],
      explanation:
        'Od půlnoci do 6:00 jde současně o noční práci a práci v sobotu.',
      commonMistake: 'Přiřadit celou směnu pouze k pátku.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Evidence pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII9Evidencepracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Vymezení pojmů pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII1Vymezenipojmu',
      kind: 'official',
    },
    {
      title: 'MPSV – Rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII3Rozvrzenipracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Nerovnoměrné rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII32Nerovnomernerozvrzenipraco',
      kind: 'official',
    },
    {
      title: 'MPSV – Přestávka v práci a bezpečnostní přestávka',
      url: 'https://ppropo.mpsv.cz/VIII4Prestavkavpraciabezpecnostn',
      kind: 'official',
    },
  ],
})
