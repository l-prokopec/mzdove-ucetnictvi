import { defineLessonContent } from '../define'

export const overtimeCompensationContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'overtime-wage-calculation',
    'overtime-leave-settlement',
    'overtime-included-remuneration-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Mzda a plat za práci přesčas, příplatky, náhradní volno a odměna sjednaná s přihlédnutím k přesčasu ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nejdříve se potvrzuje přesčas, potom se počítá',
    },
    {
      type: 'paragraph',
      text: 'Mzdové vypořádání smí začít až po potvrzení, že vykázané hodiny splňují definici práce přesčas. Výpočet se následně liší podle toho, zda je zaměstnanec odměňován mzdou nebo platem a zda bylo dohodnuto náhradní volno.',
    },
    {
      type: 'heading',
      text: 'Mzdová sféra: dosažená mzda a příplatek',
    },
    {
      type: 'paragraph',
      text: 'Za dobu práce přesčas přísluší zaměstnanci dosažená mzda a příplatek nejméně ve výši 25 % průměrného výdělku, pokud se zaměstnavatel se zaměstnancem nedohodli na náhradním volnu místo příplatku.',
    },
    {
      type: 'definition',
      term: 'Dosažená mzda',
      definition:
        'Mzda, na kterou zaměstnanci vzniklo právo za skutečně vykonanou práci přesčas podle platných mzdových pravidel.',
    },
    {
      type: 'definition',
      term: 'Přesčasový příplatek ve mzdové sféře',
      definition:
        'Příplatek nejméně 25 % průměrného hodinového výdělku za každou hodinu práce přesčas, není-li místo něj dohodnuto náhradní volno.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Příplatek 25 % nenahrazuje dosaženou mzdu za odpracovanou hodinu. Ve standardním režimu náleží obě položky.',
    },
    {
      type: 'example',
      title: 'Hodinová mzda a přesčas',
      situation:
        'Hodinová mzda činí 240 Kč, průměrný hodinový výdělek 280 Kč a zaměstnanec odpracuje 4 hodiny přesčas bez dohody o náhradním volnu.',
      solution:
        'Dosažená mzda činí 4 × 240 = 960 Kč. Minimální příplatek činí 4 × 280 × 25 % = 280 Kč. Celkové přesčasové plnění ze zadaných složek činí 1 240 Kč.',
    },
    {
      type: 'heading',
      text: 'Měsíční mzda a dosažená mzda za přesčas',
    },
    {
      type: 'paragraph',
      text: 'U měsíční mzdy musí mzdový systém určit část mzdy odpovídající práci přesčas podle platného způsobu odměňování. Samotná skutečnost, že zaměstnanec dostává měsíční mzdu, neznamená, že odpracované přesčasové hodiny jsou bez dalšího zahrnuty.',
    },
    {
      type: 'example',
      title: 'Explicitně zadaná hodinová hodnota měsíční mzdy',
      situation:
        'Pro příklad je hodinová hodnota dosažené mzdy určena na 250 Kč, průměrný hodinový výdělek činí 300 Kč a zaměstnanec vykonal 3 hodiny přesčas.',
      solution:
        'Dosažená mzda činí 3 × 250 = 750 Kč. Minimální příplatek činí 3 × 300 × 25 % = 225 Kč. Celkem 975 Kč.',
    },
    {
      type: 'heading',
      text: 'Náhradní volno ve mzdové sféře',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel a zaměstnanec se mohou dohodnout na poskytnutí náhradního volna v rozsahu práce přesčas místo přesčasového příplatku. Dosažená mzda za práci přesčas zaměstnanci nadále náleží.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Náhradní volno za přesčas ve mzdové sféře nenahrazuje dosaženou mzdu. Nahrazuje pouze příplatek. Za dobu čerpání tohoto náhradního volna se standardně neposkytuje další náhrada mzdy.',
    },
    {
      type: 'example',
      title: 'Čtyři hodiny přesčas s náhradním volnem',
      situation:
        'Zaměstnanec odpracuje 4 hodiny přesčas a písemně se dohodne na 4 hodinách náhradního volna místo příplatku.',
      solution:
        'Za přesčas dostane dosaženou mzdu. Příplatek 25 % se nyní neposkytne. Později čerpá 4 hodiny náhradního volna podle dohody.',
    },
    {
      type: 'heading',
      text: 'Lhůta pro náhradní volno',
    },
    {
      type: 'paragraph',
      text: 'Náhradní volno musí být poskytnuto do tří kalendářních měsíců po výkonu práce přesčas nebo v jiné době dohodnuté se zaměstnancem.',
    },
    {
      type: 'paragraph',
      text: 'Není-li náhradní volno včas poskytnuto, zaměstnanci vzniká právo na přesčasový příplatek k dosažené mzdě.',
    },
    {
      type: 'example',
      title: 'Nevyčerpané náhradní volno',
      situation:
        'Zaměstnanec vykonal 5 hodin přesčas v lednu. Dohoda neurčila jinou dobu a do konce dubna náhradní volno nečerpal. Průměrný hodinový výdělek činil pro použití 320 Kč.',
      solution:
        'Zaměstnavatel musí doplatit příplatek nejméně 5 × 320 × 25 % = 400 Kč. Dosažená mzda za přesčas již měla být zúčtována za dobu výkonu práce.',
    },
    {
      type: 'heading',
      text: 'Mzda sjednaná s přihlédnutím k přesčasu',
    },
    {
      type: 'paragraph',
      text: 'Mzdu lze smluvně sjednat s přihlédnutím k případné práci přesčas pouze tehdy, je-li současně přesně sjednán rozsah přesčasu, k němuž bylo přihlédnuto. Obecná formulace přesčasy jsou zahrnuty ve mzdě nestačí.',
    },
    {
      type: 'list',
      items: [
        'u běžného zaměstnance nejvýše 150 hodin za kalendářní rok',
        'u vedoucího zaměstnance až v mezích celkového zákonného rozsahu práce přesčas',
        'musí jít o sjednanou mzdu ve smlouvě',
        'nelze použít pouze jednostranný mzdový výměr nebo vnitřní předpis',
      ],
    },
    {
      type: 'paragraph',
      text: 'Ve sjednaném rozsahu zaměstnanci nepřísluší samostatná dosažená mzda, příplatek ani náhradní volno za přesčas, protože mzda byla sjednána s ohledem na tento konkrétní rozsah. Hodiny se přesto musí evidovat a započítávají se do limitů práce přesčas.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Sjednání mzdy s přihlédnutím k přesčasu neruší povinnost evidovat pracovní dobu ani dodržet limity přesčasu a odpočinku.',
    },
    {
      type: 'example',
      title: 'Sjednaných 100 hodin ročně',
      situation:
        'Pracovní smlouva platně stanoví, že sjednaná mzda přihlíží ke 100 hodinám práce přesčas za rok. Zaměstnanec v roce vykoná 84 potvrzených hodin přesčasu.',
      solution:
        'Za těchto 84 hodin se neposkytne další dosažená mzda, příplatek ani náhradní volno, pokud ujednání splňuje všechny zákonné podmínky. Hodiny zůstávají v evidenci přesčasů.',
    },
    {
      type: 'example',
      title: 'Překročení sjednaného rozsahu',
      situation:
        'Mzda přihlíží ke 100 hodinám ročně, ale zaměstnanec vykoná 108 hodin přesčasu.',
      solution:
        'Prvních 100 hodin se vypořádá sjednanou mzdou. Osm hodin nad sjednaný rozsah se vypořádá standardně dosaženou mzdou a příplatkem nebo náhradním volnem.',
    },
    {
      type: 'heading',
      text: 'Platová sféra: plat za hodinu přesčasu',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci odměňovanému platem přísluší za hodinu práce přesčas poměrná část platového tarifu, osobního příplatku, zvláštního příplatku a příplatku za práci ve ztíženém pracovním prostředí připadající na jednu hodinu práce v daném měsíci, a přesčasový příplatek.',
    },
    {
      type: 'heading',
      text: 'Přesčasový příplatek v platové sféře',
    },
    {
      type: 'list',
      items: [
        '25 % průměrného hodinového výdělku za běžnou práci přesčas',
        '50 % průměrného hodinového výdělku za práci přesčas ve dnech nepřetržitého odpočinku v týdnu',
      ],
    },
    {
      type: 'example',
      title: 'Platový přesčas v pracovním dni',
      situation:
        'Poměrná část platových složek činí 260 Kč za hodinu, průměrný hodinový výdělek 320 Kč a zaměstnanec odpracuje 3 hodiny přesčas v běžném pracovním dni.',
      solution:
        'Část platu činí 3 × 260 = 780 Kč. Příplatek činí 3 × 320 × 25 % = 240 Kč. Celkem 1 020 Kč.',
    },
    {
      type: 'example',
      title: 'Platový přesčas v den týdenního odpočinku',
      situation:
        'Stejné hodnoty, ale 3 hodiny přesčasu připadají na den nepřetržitého odpočinku zaměstnance.',
      solution:
        'Část platu činí 780 Kč. Příplatek činí 3 × 320 × 50 % = 480 Kč. Celkem 1 260 Kč.',
    },
    {
      type: 'heading',
      text: 'Náhradní volno v platové sféře',
    },
    {
      type: 'paragraph',
      text: 'Po dohodě lze místo platu za práci přesčas poskytnout náhradní volno v rozsahu přesčasu. V měsíci výkonu se příslušné přesčasové platové plnění nevyplatí a za dobu pozdějšího náhradního volna se plat nekrátí.',
    },
    {
      type: 'paragraph',
      text: 'Není-li náhradní volno poskytnuto do tří po sobě jdoucích kalendářních měsíců po výkonu přesčasu nebo v jiné dohodnuté době, vznikne právo na příslušnou část platu a příplatek.',
    },
    {
      type: 'heading',
      text: 'Vedoucí zaměstnanec v platové sféře',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance s příplatkem za vedení je v platu ze zákona přihlédnuto k případné práci přesčas v rozsahu 150 hodin za kalendářní rok. Toto zahrnutí se nevztahuje na přesčas konaný v noci, v den pracovního klidu nebo v době pracovní pohotovosti.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Při zpracování vedoucího zaměstnance v platové sféře je nutné kontrolovat nejen roční kumulaci, ale také časový režim každé hodiny přesčasu.',
    },
    {
      type: 'example',
      title: 'Vedoucí pracuje přesčas v noci',
      situation:
        'Vedoucí zaměstnanec odměňovaný platem vykoná 2 hodiny přesčasu od 22:00 do 24:00.',
      solution:
        'Tyto hodiny nelze skrýt do zákonného zahrnutí 150 hodin, protože byly vykonány v noci. Musí být vypořádány podle pravidel § 127 a současně vzniká nárok na noční příplatek.',
    },
    {
      type: 'heading',
      text: 'Zlomky hodin',
    },
    {
      type: 'paragraph',
      text: 'Přesčasové plnění se poskytuje také za zlomky hodin. Evidence nesmí odpracovaný čas automaticky zaokrouhlovat dolů na celé hodiny nebo čtvrthodiny v neprospěch zaměstnance.',
    },
    {
      type: 'example',
      title: 'Přesčas 1 hodina 30 minut',
      situation: 'Průměrný hodinový výdělek činí 300 Kč a příplatek je 25 %.',
      solution:
        'Příplatek činí 1,5 × 300 × 25 % = 112,50 Kč. Dosažená mzda nebo část platu se vypočte ze stejné skutečné doby.',
    },
    {
      type: 'heading',
      text: 'Přesčas a další zvýhodnění',
    },
    {
      type: 'paragraph',
      text: 'Jestliže přesčas současně probíhá v noci, v sobotu, v neděli nebo ve svátek, přesčasové vypořádání samo nenahrazuje ostatní zákonná zvýhodnění. Každá kategorie se posuzuje samostatně.',
    },
    {
      type: 'heading',
      text: 'Podklad pro mzdovou uzávěrku',
    },
    {
      type: 'list',
      items: [
        'počet potvrzených přesčasových hodin',
        'datum a čas přesčasu',
        'mzdová nebo platová sféra',
        'dosažená hodinová mzda nebo poměrná část platových složek',
        'průměrný hodinový výdělek',
        'běžný den nebo den týdenního odpočinku',
        'dohoda o náhradním volnu',
        'sjednání mzdy s přihlédnutím k přesčasu',
        'roční kumulace zahrnutých a nezahrnutých hodin',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'vyplatit pouze příplatek bez dosažené mzdy',
        'poskytnout náhradní volno bez dohody',
        'zapomenout doplatit příplatek po uplynutí lhůty',
        'považovat měsíční mzdu automaticky za mzdu zahrnující přesčas',
        'použít neurčitou formulaci přesčasy zahrnuty',
        'nevypořádat hodiny nad sjednaný zahrnutý rozsah',
        'zaměnit sazby mzdové a platové sféry',
        'u platu nepoužít 50 % za den týdenního odpočinku',
        'zaokrouhlit zlomky hodin dolů',
      ],
    },
    {
      type: 'summary',
      items: [
        'Ve mzdové sféře náleží dosažená mzda a nejméně 25% příplatek, nebo po dohodě náhradní volno místo příplatku.',
        'Náhradní volno za přesčas musí být poskytnuto do tří měsíců nebo v jiné dohodnuté době.',
        'Mzda může zahrnovat přesčas jen na základě přesného smluvního ujednání o rozsahu.',
        'V platové sféře činí příplatek 25 %, nebo 50 % v den týdenního odpočinku.',
        'Přesčasové plnění se počítá za skutečné hodiny a nenahrazuje souběžné noční, víkendové nebo sváteční zvýhodnění.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'overtime-compensation-card-01',
      front: 'Jaký je minimální přesčasový příplatek ve mzdové sféře?',
      back: '25 % průměrného hodinového výdělku.',
      explanation: 'Vedle něj zpravidla náleží dosažená mzda.',
      skillIds: ['overtime-wage-calculation'],
    },
    {
      id: 'overtime-compensation-card-02',
      front: 'Co náhradní volno ve mzdové sféře nahrazuje?',
      back: 'Přesčasový příplatek, nikoli dosaženou mzdu.',
      explanation: 'Musí být dohodnuto.',
      skillIds: ['overtime-leave-settlement'],
    },
    {
      id: 'overtime-compensation-card-03',
      front:
        'Jaký je přesčasový příplatek v platové sféře v den týdenního odpočinku?',
      back: '50 % průměrného hodinového výdělku.',
      explanation: 'V jiný den jde standardně o 25 %.',
      skillIds: ['overtime-wage-calculation'],
    },
    {
      id: 'overtime-compensation-card-04',
      front: 'Stačí ve smlouvě uvést, že přesčasy jsou zahrnuty ve mzdě?',
      back: 'Ne. Musí být sjednán konkrétní rozsah.',
      explanation: 'U běžného zaměstnance nejvýše 150 hodin ročně.',
      skillIds: ['overtime-included-remuneration-control'],
    },
  ],
  exercises: [
    {
      id: 'overtime-compensation-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec ve mzdové sféře odpracuje 3,5 hodiny přesčas. Jeho hodinová mzda činí 265 Kč a průměrný hodinový výdělek 312 Kč. Náhradní volno nebylo dohodnuto. Kolik činí součet dosažené mzdy za přesčas a minimálního přesčasového příplatku?',
      options: [
        {
          id: 'a',
          text: '273 Kč.',
        },
        {
          id: 'b',
          text: '927,50 Kč.',
        },
        {
          id: 'c',
          text: '1 200,50 Kč.',
        },
        {
          id: 'd',
          text: '1 290 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['overtime-wage-calculation'],
      explanation:
        'Dosažená mzda je 3,5 × 265 = 927,50 Kč. Příplatek je 3,5 × 312 × 25 % = 273 Kč. Celkem 1 200,50 Kč.',
      commonMistake:
        'Vypočítat jen příplatek nebo použít průměrný výdělek také jako dosaženou mzdu.',
    },
    {
      id: 'overtime-compensation-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Která tvrzení o náhradním volnu za přesčas ve mzdové sféře jsou správná?',
      options: [
        {
          id: 'agreement',
          text: 'Musí být dohodnuto.',
        },
        {
          id: 'same-hours',
          text: 'Poskytuje se v rozsahu přesčasu.',
        },
        {
          id: 'wage',
          text: 'Dosažená mzda za přesčas nadále náleží.',
        },
        {
          id: 'deadline',
          text: 'Bez jiné dohody se poskytuje do tří měsíců.',
        },
        {
          id: 'automatic',
          text: 'Zaměstnavatel jím může příplatek jednostranně nahradit.',
        },
      ],
      correctOptionIds: ['agreement', 'same-hours', 'wage', 'deadline'],
      skillIds: ['overtime-leave-settlement'],
      explanation: 'Náhradní volno není jednostrannou volbou zaměstnavatele.',
      commonMistake:
        'Považovat náhradní volno za automatický způsob vypořádání.',
    },
    {
      id: 'overtime-compensation-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď mzdové vypořádání přesčasu.',
      steps: [
        {
          id: 'confirm',
          text: 'Potvrdit právní přesčas.',
        },
        {
          id: 'sphere',
          text: 'Určit mzdovou nebo platovou sféru.',
        },
        {
          id: 'included',
          text: 'Ověřit zahrnutí přesčasu v odměně.',
        },
        {
          id: 'leave',
          text: 'Ověřit dohodu o náhradním volnu.',
        },
        {
          id: 'calculate',
          text: 'Vypočítat mzdu nebo plat a příplatek.',
        },
        {
          id: 'record',
          text: 'Zapsat čerpání a roční kumulaci.',
        },
      ],
      correctOrder: [
        'confirm',
        'sphere',
        'included',
        'leave',
        'calculate',
        'record',
      ],
      skillIds: ['overtime-wage-calculation', 'overtime-leave-settlement'],
      explanation: 'Způsob výpočtu závisí na právním režimu a dokumentech.',
      commonMistake: 'Začít výpočtem 25 % u každého záznamu.',
    },
    {
      id: 'overtime-compensation-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec odměňovaný platem vykoná 4,5 hodiny práce přesčas v den svého nepřetržitého odpočinku. Průměrný hodinový výdělek činí 336 Kč. Kolik činí přesčasový příplatek?',
      options: [
        {
          id: 'a',
          text: '378 Kč.',
        },
        {
          id: 'b',
          text: '672 Kč.',
        },
        {
          id: 'c',
          text: '756 Kč.',
        },
        {
          id: 'd',
          text: '1 512 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['overtime-wage-calculation'],
      explanation:
        'V den nepřetržitého odpočinku činí platový přesčasový příplatek 50 %. Výpočet je 4,5 × 336 × 50 % = 756 Kč.',
      commonMistake:
        'Použít 25% sazbu nebo zaměnit výši příplatku s celou částí platu za přesčas.',
    },
    {
      id: 'overtime-compensation-exercise-05',
      type: 'short_text',
      prompt:
        'Mzda byla platně sjednána s přihlédnutím k 90 hodinám práce přesčas za kalendářní rok. Zaměstnanec skutečně vykonal 104 hodin přesčasu. Kolik hodin se musí vypořádat nad rámec sjednaného zahrnutí?',
      acceptedAnswers: ['14 hodin', '14', 'čtrnáct hodin'],
      ignoreDiacritics: true,
      skillIds: ['overtime-included-remuneration-control'],
      explanation:
        'Do sjednané mzdy je zahrnuto 90 hodin. Nad tento rozsah zbývá 104 − 90 = 14 hodin ke standardnímu vypořádání.',
      commonMistake:
        'Považovat ujednání za neomezené nebo počítat všech 104 hodin znovu.',
    },
    {
      id: 'overtime-compensation-exercise-06',
      type: 'single_choice',
      prompt:
        'Pracovní smlouva uvádí pouze větu „sjednaná mzda zahrnuje veškerou případnou práci přesčas“, ale neobsahuje žádný počet hodin ani jinak určitý rozsah. Jak má mzdová účetní postupovat při potvrzeném přesčasu?',
      options: [
        {
          id: 'a',
          text: 'Považovat veškerý přesčas za vypořádaný sjednanou mzdou.',
        },
        {
          id: 'b',
          text: 'Nepovažovat neurčité ujednání za dostatečné a přesčas vypořádat standardním způsobem, dokud není doloženo platné konkrétní sjednání.',
        },
        {
          id: 'c',
          text: 'Poskytnout pouze neplacené náhradní volno.',
        },
        {
          id: 'd',
          text: 'Převést přesčas automaticky do dalšího kalendářního roku.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['overtime-included-remuneration-control'],
      explanation:
        'Mzda může přihlížet k přesčasu jen při sjednání konkrétního rozsahu. Obecná neomezená formulace není dostatečným podkladem.',
      commonMistake:
        'Považovat jakoukoli zmínku o zahrnutí přesčasu za platné neomezené vypořádání.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Mzda nebo náhradní volno za práci přesčas',
      url: 'https://ppropo.mpsv.cz/XIX2Mzdanebonahradnivolnozapraci',
      kind: 'official',
    },
    {
      title: 'MPSV – Plat nebo náhradní volno za práci přesčas',
      url: 'https://ppropo.mpsv.cz/XX9Platnebonahradnivolnoza',
      kind: 'official',
    },
    {
      title: 'MPSV – Práce přesčas',
      url: 'https://ppropo.mpsv.cz/VIII5Praceprescas',
      kind: 'official',
    },
    {
      title: 'MPSV – Průměrný výdělek',
      url: 'https://ppropo.mpsv.cz/XXI8Prumernyvydelek',
      kind: 'official',
    },
  ],
})
