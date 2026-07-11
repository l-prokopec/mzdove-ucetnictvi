import { defineLessonContent } from '../define'

export const agreementTimeRecordsContent = defineLessonContent({
  moduleId: 'work-agreements',
  skillIds: [
    'agreement-schedule-control',
    'agreement-hours-evidence',
    'agreement-vacation-records',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Rozvrhování a evidence pracovní doby, odpočinku, překážek a dovolené u DPP a DPČ ověřené podle českého zákoníku práce a pravidel účinných v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Rozvrh a evidence nejsou totéž',
    },
    {
      type: 'paragraph',
      text: 'Rozvrh pracovní doby určuje předem plánované směny. Evidence pracovní doby zachycuje skutečný průběh práce. Mzdová účetní potřebuje oba podklady, protože samotný plán nedokládá skutečně odpracované hodiny a samotný součet hodin neprokazuje správné rozvržení a odpočinek.',
    },
    {
      type: 'definition',
      term: 'Rozvrh pracovní doby',
      definition:
        'Předem určené rozložení pracovní doby do konkrétních směn nebo pracovních období.',
    },
    {
      type: 'definition',
      term: 'Evidence pracovní doby',
      definition:
        'Průkazný záznam skutečně odpracované doby a dalších zákonem sledovaných časových údajů zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Písemný rozvrh u dohod',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí pracovní dobu zaměstnance na DPP nebo DPČ předem rozvrhnout písemně. Zaměstnance s rozvrhem nebo jeho změnou seznámí nejpozději tři dny před začátkem směny nebo období, na které je pracovní doba rozvržena, pokud se společně nedohodnou na jiné době.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Ústní pokyn v den směny není standardním písemným rozvrhem. Kratší doba seznámení musí vycházet z dohody se zaměstnancem, nikoli jen z provozní zvyklosti.',
    },
    {
      type: 'heading',
      text: 'Co má rozvrh obsahovat',
    },
    {
      type: 'list',
      items: [
        'datum směny',
        'začátek směny',
        'konec směny',
        'případné rozdělení nebo návaznost směn',
        'identifikaci konkrétního pracovněprávního vztahu',
        'verzi a datum změny rozvrhu',
      ],
    },
    {
      type: 'heading',
      text: 'Samorozvrhování zaměstnancem',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec si může na základě písemné dohody se zaměstnavatelem rozvrhovat pracovní dobu do směn sám. Dohoda musí být vedena odděleně od DPP nebo DPČ, pokud není její součástí, a musí být možné doložit, kdy platila.',
    },
    {
      type: 'paragraph',
      text: 'Samorozvrhování nepřenáší odpovědnost za zákonné limity výhradně na zaměstnance. Zaměstnavatel stále kontroluje délku směny, odpočinek, evidenci a rozsah DPP nebo DPČ.',
    },
    {
      type: 'heading',
      text: 'Maximální délka směny',
    },
    {
      type: 'paragraph',
      text: 'Délka směny nesmí u zaměstnance na dohodu běžně přesáhnout 12 hodin. Evidenční systém má upozornit na delší směnu nebo na nesoulad mezi plánem a skutečností.',
    },
    {
      type: 'example',
      title: 'Příliš dlouhá směna',
      situation:
        'Dohodář vykáže práci od 7:00 do 20:30 s třicetiminutovou přestávkou.',
      solution:
        'Čistá pracovní doba činí 13 hodin. Záznam vyžaduje kontrolu a opravu nebo pracovněprávní řešení, protože běžný limit směny je 12 hodin. Mzdová účetní nesmí pouze proplatit součet bez upozornění.',
    },
    {
      type: 'heading',
      text: 'Přestávky a odpočinek',
    },
    {
      type: 'paragraph',
      text: 'Také dohodáři mají právo na přestávku v práci a na nepřetržitý denní a týdenní odpočinek. Mzdová evidence musí umožnit zkontrolovat, zda se směny různých pracovních vztahů jedné osoby nekryjí nebo nevytvářejí zjevně nemožný časový průběh.',
    },
    {
      type: 'heading',
      text: 'Evidence skutečného výkonu práce',
    },
    {
      type: 'list',
      items: [
        'začátek a konec skutečné práce',
        'přestávky, pokud jsou pro výpočet a kontrolu rozhodné',
        'práce v noci',
        'práce v sobotu a neděli',
        'práce ve svátek',
        'pracovní pohotovost, pokud je sjednána a přípustná',
        'dovolená a relevantní překážky',
        'opravy původního záznamu a jejich schválení',
      ],
    },
    {
      type: 'paragraph',
      text: 'Evidence musí být vedena za každý pracovněprávní vztah samostatně. Souhrnný měsíční počet hodin bez vazby na konkrétní dny, směny a vztah není pro všechny kontroly dostatečný.',
    },
    {
      type: 'heading',
      text: 'Kontrola DPP',
    },
    {
      type: 'paragraph',
      text: 'U DPP se z evidence skutečně odpracovaných hodin průběžně aktualizuje součet všech DPP zaměstnance u stejného zaměstnavatele za kalendářní rok. Systém má upozornit před vyčerpáním 300 hodin, nikoli až po jeho překročení.',
    },
    {
      type: 'example',
      title: 'Hodiny rozdělené mezi dvě střediska',
      situation:
        'Zaměstnanec má dvě DPP pod dvěma středisky. Jedna evidence ukazuje 170 hodin, druhá 145 hodin.',
      solution:
        'Celkem jde o 315 hodin u stejného zaměstnavatele. Rozdělení do středisek ani více dokumentů nezvyšuje zákonný limit. Případ musí být neprodleně předán k nápravě.',
    },
    {
      type: 'heading',
      text: 'Kontrola DPČ',
    },
    {
      type: 'paragraph',
      text: 'U DPČ se skutečné hodiny převádějí na průměr za dobu trvání dohody nebo za vyrovnávací období nejvýše 52 týdnů. Kontrola musí zohlednit začátek a konec dohody a nesmí používat náhodně zvolené měsíční období.',
    },
    {
      type: 'example',
      title: 'Průměr za dvanáct týdnů',
      situation:
        'Zaměstnanec na DPČ odpracoval za dvanáct týdnů celkem 228 hodin při stanovené týdenní pracovní době 40 hodin.',
      solution:
        'Průměr činí 228 ÷ 12 = 19 hodin týdně. Základní limit poloviny stanovené týdenní pracovní doby je dodržen.',
    },
    {
      type: 'heading',
      text: 'Dovolená a evidence doby',
    },
    {
      type: 'paragraph',
      text: 'Pro vznik práva na dovolenou musí dohoda v daném kalendářním roce nepřetržitě trvat alespoň čtyři týdny a zaměstnanec musí odpracovat nebo mít započitatelnou dobu alespoň 80 hodin. Pro výpočet se používá fiktivní týdenní pracovní doba 20 hodin.',
    },
    {
      type: 'paragraph',
      text: 'Čerpání dovolené se rozvrhuje a eviduje v hodinách. Pokud dohoda skončí a dovolená zůstane nevyčerpaná, posoudí se náhrada odměny za nevyčerpanou dovolenou podle zákonných pravidel.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Dovolená ani jiná náhradní doba se nesmí mechanicky přičíst jako skutečně odpracované hodiny do ročního limitu 300 hodin DPP. Jednotlivé limity mají odlišný účel.',
    },
    {
      type: 'heading',
      text: 'Překážky v práci',
    },
    {
      type: 'paragraph',
      text: 'Překážka musí být doložena, správně označena a přiřazena ke směně, která byla zaměstnanci rozvržena. Bez rozvrhu nelze vždy určit, zda zaměstnanci v daném čase práce skutečně odpadla.',
    },
    {
      type: 'paragraph',
      text: 'U vybraných osobních překážek a překážek z důvodu obecného zájmu může mít dohodář právo na omluvené volno, ale bez náhrady odměny, pokud náhrada nebyla sjednána nebo stanovena vnitřním předpisem.',
    },
    {
      type: 'heading',
      text: 'Příplatky a časové kategorie',
    },
    {
      type: 'paragraph',
      text: 'Čas práce ve svátek, v noci, v sobotu a neděli nebo ve ztíženém prostředí musí být v evidenci rozlišitelný, protože ovlivňuje odměnu. Nestačí vykázat pouze celkový počet hodin.',
    },
    {
      type: 'heading',
      text: 'Souběh více vztahů',
    },
    {
      type: 'paragraph',
      text: 'Pokud má jedna osoba pracovní poměr a dohodu nebo více dohod, musí být možné zkontrolovat časovou reálnost směn. Stejná hodina nesmí být bez skutečného důvodu vykázána jako práce ve dvou vztazích současně.',
    },
    {
      type: 'example',
      title: 'Překrývající se směny',
      situation:
        'Docházka v pracovním poměru uvádí směnu 8:00–16:30 a DPP u stejného zaměstnavatele práci 14:00–18:00 téhož dne.',
      solution:
        'Evidence obsahuje dvouapůlhodinový překryv. Mzdová účetní vyžádá opravu nebo vysvětlení před výplatou a nepřevezme oba záznamy bez kontroly.',
    },
    {
      type: 'heading',
      text: 'Oprava docházky',
    },
    {
      type: 'list',
      items: [
        'zachovat původní záznam',
        'uvést opravenou hodnotu',
        'zaznamenat důvod opravy',
        'identifikovat autora a schvalující osobu',
        'ověřit dopad na odměnu, limit, dovolenou a podání',
        'nepřepisovat historii bez kontrolní stopy',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní postup před mzdou',
    },
    {
      type: 'list',
      items: [
        'porovnat platný rozvrh a skutečnou evidenci',
        'zkontrolovat délku směn a odpočinek',
        'ověřit časové kategorie pro příplatky',
        'u DPP aktualizovat roční součet',
        'u DPČ aktualizovat týdenní průměr',
        'zkontrolovat dovolenou a překážky',
        'prověřit překryvy dalších vztahů',
        'uzavřít pouze schválené a dohledatelné záznamy',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat plán za skutečnou docházku',
        'evidovat pouze měsíční součet hodin',
        'nemít písemný rozvrh',
        'seznamovat zaměstnance se směnou bez dohodnuté výjimky až v den práce',
        'překročit 12hodinovou směnu',
        'přehlédnout překryv souběžných vztahů',
        'započítat dovolenou jako skutečnou práci do 300 hodin DPP',
        'opravit docházku bez historie',
      ],
    },
    {
      type: 'summary',
      items: [
        'Rozvrh je plán, evidence zachycuje skutečný průběh práce.',
        'Dohodář musí být s rozvrhem seznámen zpravidla nejméně tři dny předem.',
        'Směna nesmí běžně přesáhnout 12 hodin.',
        'Evidence musí umožnit kontrolu limitu DPP, průměru DPČ, dovolené a příplatků.',
        'Každý vztah a každá oprava musí zůstat samostatné a dohledatelné.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'agreement-time-records-card-01',
      front: 'Jaký je rozdíl mezi rozvrhem a evidencí pracovní doby?',
      back: 'Rozvrh plánuje směny, evidence zachycuje skutečný průběh práce.',
      explanation: 'Pro mzdové zpracování jsou potřeba oba podklady.',
      skillIds: ['agreement-schedule-control'],
    },
    {
      id: 'agreement-time-records-card-02',
      front: 'Jak dlouho předem se dohodář zpravidla seznamuje s rozvrhem?',
      back: 'Nejpozději tři dny před začátkem směny nebo období, není-li dohodnuto jinak.',
      explanation: 'Kratší doba musí vycházet z dohody.',
      skillIds: ['agreement-schedule-control'],
    },
    {
      id: 'agreement-time-records-card-03',
      front: 'Jaká je běžná maximální délka směny dohodáře?',
      back: '12 hodin.',
      explanation: 'Delší záznam vyžaduje kontrolu.',
      skillIds: ['agreement-hours-evidence'],
    },
    {
      id: 'agreement-time-records-card-04',
      front: 'Kolik hodin je potřeba pro základní podmínku dovolené u dohody?',
      back: 'Alespoň 80 hodin při současném nepřetržitém trvání vztahu alespoň čtyři týdny.',
      explanation:
        'Pro výpočet se používá fiktivní týdenní pracovní doba 20 hodin.',
      skillIds: ['agreement-vacation-records'],
    },
  ],
  exercises: [
    {
      id: 'agreement-time-records-exercise-01',
      type: 'single_choice',
      prompt: 'Co dokládá skutečně odpracovanou dobu?',
      options: [
        {
          id: 'a',
          text: 'Pouze plán směn.',
        },
        {
          id: 'b',
          text: 'Evidence pracovní doby.',
        },
        {
          id: 'c',
          text: 'Název dohody.',
        },
        {
          id: 'd',
          text: 'Bankovní výpis.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-hours-evidence'],
      explanation: 'Rozvrh je plán, skutečnost zachycuje evidence.',
      commonMistake: 'Automaticky převzít plánované směny jako odpracované.',
    },
    {
      id: 'agreement-time-records-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které údaje má evidence rozlišit pro správnou odměnu?',
      options: [
        {
          id: 'night',
          text: 'Práci v noci.',
        },
        {
          id: 'weekend',
          text: 'Práci v sobotu a neděli.',
        },
        {
          id: 'holiday',
          text: 'Práci ve svátek.',
        },
        {
          id: 'actual',
          text: 'Skutečný začátek a konec práce.',
        },
        {
          id: 'only-total',
          text: 'Pouze jeden celkový počet bez data.',
        },
      ],
      correctOptionIds: ['night', 'weekend', 'holiday', 'actual'],
      skillIds: ['agreement-hours-evidence'],
      explanation:
        'Časové kategorie ovlivňují příplatky a kontrolu pracovní doby.',
      commonMistake: 'Evidovat pouze součet hodin.',
    },
    {
      id: 'agreement-time-records-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď měsíční kontrolu pracovní doby u dohody.',
      steps: [
        {
          id: 'schedule',
          text: 'Ověřit platný písemný rozvrh.',
        },
        {
          id: 'actual',
          text: 'Porovnat skutečně vykázané směny.',
        },
        {
          id: 'limits',
          text: 'Zkontrolovat délku směn, odpočinek a překryvy.',
        },
        {
          id: 'agreement-limit',
          text: 'Aktualizovat limit DPP nebo průměr DPČ.',
        },
        {
          id: 'vacation',
          text: 'Vyhodnotit dovolenou a překážky.',
        },
        {
          id: 'approve',
          text: 'Uzavřít schválený podklad pro mzdu.',
        },
      ],
      correctOrder: [
        'schedule',
        'actual',
        'limits',
        'agreement-limit',
        'vacation',
        'approve',
      ],
      skillIds: ['agreement-schedule-control', 'agreement-hours-evidence'],
      explanation:
        'Podklad pro mzdu se uzavírá až po kontrole plánu, skutečnosti a zákonných limitů.',
      commonMistake: 'Schválit součet bez kontroly konkrétních směn.',
    },
    {
      id: 'agreement-time-records-exercise-04',
      type: 'single_choice',
      prompt:
        'DPP v jednom středisku má 170 hodin a ve druhém 145 hodin. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Limit je dodržen.',
        },
        {
          id: 'b',
          text: 'Celkem je 315 hodin a limit je překročen.',
        },
        {
          id: 'c',
          text: 'Každé středisko má vlastní limit.',
        },
        {
          id: 'd',
          text: 'Hodiny se nesčítají.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-hours-evidence'],
      explanation: 'Rozhoduje zaměstnavatel, nikoli středisko.',
      commonMistake: 'Rozdělit zákonný limit podle interního členění.',
    },
    {
      id: 'agreement-time-records-exercise-05',
      type: 'short_text',
      prompt: 'Jaká je běžná maximální délka jedné směny?',
      acceptedAnswers: ['12 hodin', '12', 'dvanáct hodin'],
      ignoreDiacritics: true,
      skillIds: ['agreement-schedule-control'],
      explanation: 'Běžný maximální rozsah směny je 12 hodin.',
      commonMistake: 'Uvést 24 hodin.',
    },
    {
      id: 'agreement-time-records-exercise-06',
      type: 'single_choice',
      prompt:
        'Může být změna rozvrhu oznámena až v den směny bez jakékoli dohody?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, standardně platí třídenní předstih nebo dohodnutá jiná doba.',
        },
        {
          id: 'c',
          text: 'Ano, pokud jde o DPP.',
        },
        {
          id: 'd',
          text: 'Ano, pokud zaměstnanec mlčí.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-schedule-control'],
      explanation: 'Odlišná doba seznámení musí být dohodnuta.',
      commonMistake:
        'Považovat nepravidelnost dohody za zrušení povinnosti rozvrhu.',
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
      title: 'MPSV – Rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII3Rozvrzenipracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Rozvržení pracovní doby zaměstnancem',
      url: 'https://ppropo.mpsv.cz/viii35rozvrzenipracovnidobyzames',
      kind: 'official',
    },
    {
      title: 'MPSV – Dovolená za kalendářní rok a její poměrná část',
      url: 'https://ppropo.mpsv.cz/X1Dovolenazakalendarnirokajejipo',
      kind: 'official',
    },
  ],
})
