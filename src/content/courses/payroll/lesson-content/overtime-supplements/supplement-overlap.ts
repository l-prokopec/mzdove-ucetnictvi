import { defineLessonContent } from '../define'

export const supplementOverlapContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'supplement-overlap-classification',
    'supplement-overlap-calculation',
    'supplement-overlap-audit',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Souběh přesčasového, svátečního, nočního a víkendového zvýhodnění a oddělení pracovní pohotovosti ověřené podle českého zákoníku práce pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Jedna hodina může mít více právních příznaků',
    },
    {
      type: 'paragraph',
      text: 'Přesčas, svátek, noční práce, sobota, neděle a pracovní pohotovost nejsou vzájemně zaměnitelné kódy. U skutečně odpracované hodiny se vyhodnotí každý režim samostatně a všechna vzniklá zvýhodnění se zachovají.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Pravidlo použij nejvyšší příplatek a ostatní zruš je obecně nesprávné. Zákonné příplatky se při splnění podmínek sčítají.',
    },
    {
      type: 'heading',
      text: 'Základní vrstva: odměna za práci',
    },
    {
      type: 'paragraph',
      text: 'Nejprve se určí dosažená mzda, plat nebo odměna z dohody za skutečně odpracovaný čas. Teprve k ní se přidávají jednotlivá zvýhodnění nebo se řeší náhradní volno.',
    },
    {
      type: 'heading',
      text: 'Časové příznaky',
    },
    {
      type: 'list',
      items: [
        'práce přesčas',
        'práce ve svátek',
        'noční práce',
        'práce v sobotu',
        'práce v neděli',
        'výkon práce během pracovní pohotovosti',
      ],
    },
    {
      type: 'heading',
      text: 'Příznaky se určují různými testy',
    },
    {
      type: 'list',
      items: [
        'přesčas – rozvrh, stanovená týdenní doba a souhlas zaměstnavatele',
        'svátek – kalendářní datum a skutečný výkon',
        'noc – interval 22:00–6:00',
        'sobota a neděle – kalendářní datum',
        'pohotovost – dohoda, místo a oddělení skutečného výkonu',
      ],
    },
    {
      type: 'paragraph',
      text: 'Proto nelze jeden příznak automaticky odvodit z jiného. Noční práce není automaticky přesčasem a sobotní pohotovost bez zásahu není prací v sobotu.',
    },
    {
      type: 'heading',
      text: 'Modelový případ',
    },
    {
      type: 'list',
      items: [
        'zaměstnanec je odměňován hodinovou mzdou 250 Kč',
        'průměrný hodinový výdělek činí 320 Kč',
        'zaměstnanec již naplnil stanovenou týdenní pracovní dobu',
        'na příkaz zaměstnavatele pracuje v sobotu 26. prosince 2026 od 22:00 do neděle 27. prosince 2026 do 4:00',
        '26. prosinec je svátek',
        'nejde o nezapočitatelnou přestávku',
        'přesčas se vypořádá příplatkem, nikoli náhradním volnem',
        'za svátek je dohodnut příplatek místo náhradního volna',
        'nejsou sjednány odchylné noční ani víkendové sazby',
      ],
    },
    {
      type: 'heading',
      text: 'Krok 1: časová osa',
    },
    {
      type: 'list',
      items: [
        '22:00–24:00 v sobotu 26. prosince – přesčas, noc, sobota a svátek',
        '00:00–4:00 v neděli 27. prosince – přesčas, noc a neděle',
      ],
    },
    {
      type: 'paragraph',
      text: 'Celková práce činí 6 hodin. Všech 6 hodin je přesčasových, nočních a víkendových. Pouze první 2 hodiny jsou prací ve svátek.',
    },
    {
      type: 'heading',
      text: 'Krok 2: dosažená mzda',
    },
    {
      type: 'example',
      title: 'Dosažená mzda za šest hodin',
      situation: 'Hodinová mzda činí 250 Kč.',
      solution:
        'Dosažená mzda činí 6 × 250 = 1 500 Kč. Tato částka se započte pouze jednou, i když mají hodiny více příznaků.',
    },
    {
      type: 'heading',
      text: 'Krok 3: přesčasový příplatek',
    },
    {
      type: 'example',
      title: 'Přesčas 25 %',
      situation: 'Šest hodin přesčasu a průměrný výdělek 320 Kč.',
      solution: 'Přesčasový příplatek činí 6 × 320 × 25 % = 480 Kč.',
    },
    {
      type: 'heading',
      text: 'Krok 4: noční příplatek',
    },
    {
      type: 'example',
      title: 'Noční práce 10 %',
      situation: 'Všech šest hodin spadá do intervalu 22:00–6:00.',
      solution: 'Noční příplatek činí 6 × 320 × 10 % = 192 Kč.',
    },
    {
      type: 'heading',
      text: 'Krok 5: víkendový příplatek',
    },
    {
      type: 'example',
      title: 'Sobota a neděle 10 %',
      situation: 'Dvě hodiny připadají na sobotu a čtyři na neděli.',
      solution:
        'Víkendový příplatek činí celkem 6 × 320 × 10 % = 192 Kč. Sobotní a nedělní čas lze evidenčně oddělit, ale sazba je v příkladu stejná.',
    },
    {
      type: 'heading',
      text: 'Krok 6: sváteční příplatek',
    },
    {
      type: 'example',
      title: 'Dvě hodiny ve svátek',
      situation:
        'Svátek 26. prosince končí o půlnoci a strany se dohodly na příplatku místo náhradního volna.',
      solution:
        'Sváteční příplatek činí 2 × 320 × 100 % = 640 Kč. Hodiny po půlnoci již nejsou sváteční.',
    },
    {
      type: 'heading',
      text: 'Krok 7: celkové plnění za modelovou práci',
    },
    {
      type: 'example',
      title: 'Součet všech položek',
      situation: 'Sečte se dosažená mzda a všechny vzniklé příplatky.',
      solution:
        '1 500 + 480 + 192 + 192 + 640 = 3 004 Kč. Jde o plnění za šestihodinový pracovní úsek podle zadaných sazeb.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Souběh neznamená násobit základní mzdu počtem příznaků. Dosažená mzda se započte jednou a každý zákonný příplatek se přidá podle svého základu a hodin.',
    },
    {
      type: 'heading',
      text: 'Varianta s náhradním volnem za svátek',
    },
    {
      type: 'paragraph',
      text: 'Kdyby místo svátečního příplatku bylo použito přednostní náhradní volno, částka 640 Kč by se nyní nevyplatila jako příplatek. Zaměstnanec by později čerpal 2 hodiny placeného náhradního volna s náhradou mzdy podle pravidel svátku.',
    },
    {
      type: 'heading',
      text: 'Varianta s náhradním volnem za přesčas',
    },
    {
      type: 'paragraph',
      text: 'Kdyby bylo dohodnuto náhradní volno za přesčas, nevznikl by přesčasový příplatek 480 Kč. Dosažená mzda 1 500 Kč a noční, víkendové a sváteční zvýhodnění by zůstaly zachovány.',
    },
    {
      type: 'heading',
      text: 'Souběh dvou náhradních volen',
    },
    {
      type: 'paragraph',
      text: 'Pokud stejná hodina byla současně přesčasem a prací ve svátek, dohoda o náhradním volnu se musí evidovat odděleně pro každý právní důvod. Náhradní volno za přesčas a za svátek má odlišný mzdový režim.',
    },
    {
      type: 'heading',
      text: 'Platová sféra',
    },
    {
      type: 'paragraph',
      text: 'V platové sféře se používají platové sazby: noční příplatek 20 %, víkendový 25 % a přesčasový 25 % nebo 50 % podle dne týdenního odpočinku. Sváteční peněžní varianta činí 100 % průměrného hodinového výdělku.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'U platového přesčasu neurčuj 50% sazbu jen podle toho, že jde o sobotu nebo neděli. Musí jít o den nepřetržitého odpočinku konkrétního zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Souběh v platové sféře – model',
    },
    {
      type: 'example',
      title: 'Noční nedělní přesčas',
      situation:
        'Zaměstnanec odměňovaný platem pracuje 2 hodiny přesčas v neděli, která je jeho dnem týdenního odpočinku. Obě hodiny jsou noční. Průměrný výdělek činí 320 Kč.',
      solution:
        'Přesčasový příplatek činí 2 × 320 × 50 % = 320 Kč. Noční příplatek činí 2 × 320 × 20 % = 128 Kč. Nedělní příplatek činí 2 × 320 × 25 % = 160 Kč. Vedle toho se vypočte příslušná část platu za přesčas, není-li dohodnuto náhradní volno.',
    },
    {
      type: 'heading',
      text: 'Pracovní pohotovost v souběhu',
    },
    {
      type: 'paragraph',
      text: 'Neaktivní pohotovost se nesčítá s nočním, víkendovým nebo svátečním příplatkem za práci. Souběžná zvýhodnění vznikají až za čas skutečného výkonu práce.',
    },
    {
      type: 'example',
      title: 'Nedělní pohotovost se zásahem',
      situation:
        'Pohotovost trvá v neděli 18:00–24:00. Zaměstnanec pracuje 21:00–23:00.',
      solution:
        'Odměna za pohotovost se počítá za 4 hodiny bez výkonu. Dvě hodiny výkonu jsou nedělní prací, jedna hodina 22:00–23:00 je také noční. Přesčas se ověří samostatně.',
    },
    {
      type: 'heading',
      text: 'DPP a DPČ',
    },
    {
      type: 'paragraph',
      text: 'U odměny z dohody se obdobně používají pravidla svátku, noční práce a práce v sobotu a neděli. Přesčas se u dohod neposuzuje automaticky podle pravidel pracovního poměru.',
    },
    {
      type: 'heading',
      text: 'Kontrolní matice',
    },
    {
      type: 'list',
      items: [
        'řádek = konkrétní časový úsek',
        'sloupce = práce, přesčas, noc, sobota, neděle, svátek a výkon při pohotovosti',
        'samostatný sloupec pro mzdovou nebo platovou sazbu',
        'samostatný sloupec pro dohodu o náhradním volnu',
        'samostatný sloupec pro dosaženou mzdu nebo část platu',
        'samostatný sloupec pro každý příplatek',
      ],
    },
    {
      type: 'heading',
      text: 'Auditní kontrola',
    },
    {
      type: 'list',
      items: [
        'součet pracovních hodin odpovídá evidenci',
        'dosažená mzda není započtena vícekrát',
        'každý příplatek má správný počet hodin',
        'hodiny jsou rozděleny přes půlnoc',
        'svátek končí o půlnoci',
        'pohotovost neobsahuje čas výkonu',
        'náhradní volna mají samostatný právní důvod',
        'použité sazby odpovídají mzdové nebo platové sféře',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'ponechat jen nejvyšší příplatek',
        'započítat dosaženou mzdu za stejnou hodinu vícekrát',
        'přiřadit celou směnu jednomu dni',
        'zaměnit sobotu a den týdenního odpočinku',
        'považovat pohotovost za noční práci',
        'zaplatit pohotovost i výkon za stejný čas',
        'sloučit náhradní volno za přesčas a za svátek',
        'použít mzdové sazby v platové sféře',
        'zapomenout na DPP a DPČ u noční, víkendové a sváteční práce',
      ],
    },
    {
      type: 'summary',
      items: [
        'Každá hodina se klasifikuje podle všech současně splněných režimů.',
        'Dosažená mzda nebo část platu se započte jednou, příplatky se přidávají samostatně.',
        'V modelovém případu činí celkové plnění 3 004 Kč.',
        'Náhradní volno mění jen konkrétní příplatek nebo platové vypořádání, nikoli ostatní souběžné nároky.',
        'Pracovní pohotovost se od skutečného výkonu vždy časově odděluje.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'supplement-overlap-card-01',
      front:
        'Může jedna hodina současně být přesčasem, noční, víkendová a sváteční?',
      back: 'Ano.',
      explanation: 'Každý režim se posuzuje samostatně.',
      skillIds: ['supplement-overlap-classification'],
    },
    {
      id: 'supplement-overlap-card-02',
      front: 'Kolikrát se při souběhu započte dosažená mzda za stejnou hodinu?',
      back: 'Jednou.',
      explanation: 'Samostatně se přidávají vzniklé příplatky.',
      skillIds: ['supplement-overlap-calculation'],
    },
    {
      id: 'supplement-overlap-card-03',
      front:
        'Zruší dohoda o náhradním volnu za přesčas současný nárok na noční nebo víkendový příplatek?',
      back: 'Ne.',
      explanation:
        'Náhradní volno nahrazuje konkrétní přesčasové vypořádání. Ostatní současně vzniklá zvýhodnění se posoudí samostatně.',
      skillIds: ['supplement-overlap-audit'],
    },
    {
      id: 'supplement-overlap-card-04',
      front: 'Vzniká noční příplatek za neaktivní noční pohotovost?',
      back: 'Ne.',
      explanation: 'Noční příplatek náleží až za skutečný výkon práce.',
      skillIds: ['supplement-overlap-audit'],
    },
  ],
  exercises: [
    {
      id: 'supplement-overlap-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec pracuje v neděli, která je současně svátkem, od 21:30 do pondělí 2:30. Kolik hodin je současně noční prací, prací v neděli a prací ve svátek?',
      options: [
        {
          id: 'a',
          text: '0,5 hodiny.',
        },
        {
          id: 'b',
          text: '1,5 hodiny.',
        },
        {
          id: 'c',
          text: '2 hodiny.',
        },
        {
          id: 'd',
          text: '5 hodin.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['supplement-overlap-classification'],
      explanation:
        'Všechny tři režimy se překrývají od 22:00 do nedělní půlnoci, tedy 2 hodiny.',
      commonMistake:
        'Považovat za současný překryv celý interval do pondělního rána.',
    },
    {
      id: 'supplement-overlap-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Zaměstnanec na příkaz zaměstnavatele pracuje mimo rozvrh od soboty 23:00 do neděle 3:00. Již naplnil stanovenou týdenní pracovní dobu, nejde o svátek ani pracovní pohotovost. Které režimy platí pro celý čtyřhodinový úsek?',
      options: [
        {
          id: 'overtime',
          text: 'Práce přesčas.',
        },
        {
          id: 'holiday',
          text: 'Práce ve svátek.',
        },
        {
          id: 'night',
          text: 'Noční práce.',
        },
        {
          id: 'standby',
          text: 'Neaktivní pracovní pohotovost.',
        },
        {
          id: 'weekend',
          text: 'Práce v sobotu nebo neděli.',
        },
      ],
      correctOptionIds: ['overtime', 'night', 'weekend'],
      skillIds: ['supplement-overlap-classification'],
      explanation:
        'Celý úsek je mimo rozvrh po naplnění stanovené doby, leží v noční době a zároveň v kalendářním víkendu.',
      commonMistake: 'Přidat svátek nebo pohotovost bez skutkového podkladu.',
    },
    {
      id: 'supplement-overlap-exercise-03',
      type: 'multiple_choice',
      prompt: 'Která pravidla platí při souběhu více mzdových zvýhodnění?',
      options: [
        { id: 'a', text: 'Dosažená mzda za stejnou hodinu se započte jednou.' },
        { id: 'e', text: 'Vždy se ponechá jen nejvyšší příplatek.' },
        { id: 'b', text: 'Každý vzniklý příplatek se posoudí samostatně.' },
        {
          id: 'f',
          text: 'Stejná hodina se zaplatí základní mzdou tolikrát, kolik má příznaků.',
        },
        {
          id: 'c',
          text: 'Směna přes půlnoc se rozdělí podle kalendářních hranic.',
        },
        { id: 'd', text: 'Neaktivní pohotovost se oddělí od výkonu práce.' },
      ],
      correctOptionIds: ['a', 'b', 'c', 'd'],
      skillIds: ['supplement-overlap-calculation', 'supplement-overlap-audit'],
      explanation:
        'Souběh přidává samostatná zvýhodnění, nikoli opakovanou základní mzdu.',
      commonMistake:
        'Zrušit ostatní nároky ve prospěch jediného nejvyššího příplatku.',
    },
    {
      id: 'supplement-overlap-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec pracuje ve svátek 3,75 hodiny. Průměrný hodinový výdělek činí 336 Kč a bylo dohodnuto peněžní vypořádání místo náhradního volna. Kolik činí minimální sváteční příplatek?',
      options: [
        {
          id: 'a',
          text: '315 Kč.',
        },
        {
          id: 'b',
          text: '630 Kč.',
        },
        {
          id: 'c',
          text: '1 260 Kč.',
        },
        {
          id: 'd',
          text: '2 520 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['supplement-overlap-calculation'],
      explanation:
        'Sváteční příplatek činí 100 % průměrného výdělku: 3,75 × 336 = 1 260 Kč.',
      commonMistake:
        'Použít přesčasovou, noční nebo víkendovou procentní sazbu.',
    },
    {
      id: 'supplement-overlap-exercise-05',
      type: 'short_text',
      prompt:
        'Zaměstnanec ve mzdové sféře má hodinovou mzdu 270 Kč a průměrný hodinový výdělek 340 Kč. V neděli, která je současně svátkem, pracuje na příkaz zaměstnavatele od 22:30 do pondělí 3:30. Již naplnil stanovenou týdenní pracovní dobu, takže všech 5 hodin je přesčasem. Celých 5 hodin je noční prací, ale pouze 1,5 hodiny do nedělní půlnoci jsou současně prací v neděli a ve svátek. Náhradní volno nebylo dohodnuto a za svátek byl dohodnut příplatek. Použij zákonná minima 25 % za přesčas, 10 % za noční práci, 10 % za neděli a 100 % za svátek. Kolik činí celkové plnění za tento pracovní úsek včetně dosažené mzdy?',
      acceptedAnswers: ['2 506 Kč', '2506 Kč', '2 506', '2506'],
      ignoreDiacritics: true,
      skillIds: ['supplement-overlap-calculation'],
      explanation:
        'Dosažená mzda: 5 × 270 = 1 350 Kč. Přesčas: 5 × 340 × 25 % = 425 Kč. Noc: 5 × 340 × 10 % = 170 Kč. Neděle: 1,5 × 340 × 10 % = 51 Kč. Svátek: 1,5 × 340 × 100 % = 510 Kč. Celkem 1 350 + 425 + 170 + 51 + 510 = 2 506 Kč.',
      commonMistake:
        'Použít víkendový nebo sváteční příplatek na všech pět hodin, případně započítat dosaženou mzdu vícekrát.',
    },
    {
      id: 'supplement-overlap-exercise-06',
      type: 'single_choice',
      prompt:
        'Pracovní pohotovost trvá 8 hodin. Během ní zaměstnanec vykoná 1,5 hodiny práce. Průměrný hodinový výdělek činí 320 Kč. Kolik činí minimální odměna za zbývající neaktivní pohotovost?',
      options: [
        {
          id: 'a',
          text: '160 Kč.',
        },
        {
          id: 'b',
          text: '208 Kč.',
        },
        {
          id: 'c',
          text: '256 Kč.',
        },
        {
          id: 'd',
          text: '320 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['supplement-overlap-audit'],
      explanation:
        'Neaktivní pohotovost činí 8 − 1,5 = 6,5 hodiny. Odměna je 6,5 × 320 × 10 % = 208 Kč.',
      commonMistake:
        'Počítat odměnu za pohotovost také za dobu skutečného výkonu práce.',
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
      title: 'MPSV – Mzda, náhradní volno nebo náhrada mzdy za svátek',
      url: 'https://ppropo.mpsv.cz/xix4mzdanahradnivolnonebonahrada',
      kind: 'official',
    },
    {
      title: 'MPSV – Mzda za noční práci',
      url: 'https://ppropo.mpsv.cz/xix5mzdazanocnipraci',
      kind: 'official',
    },
    {
      title: 'MPSV – Mzda za práci v sobotu a v neděli',
      url: 'https://ppropo.mpsv.cz/xix7mzdazapracivsobotuavnedeli',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna za pracovní pohotovost',
      url: 'https://ppropo.mpsv.cz/XXI2Odmenazapracovnipohotovost',
      kind: 'official',
    },
    {
      title: 'MPSV – Plat nebo náhradní volno za práci přesčas',
      url: 'https://ppropo.mpsv.cz/XX9Platnebonahradnivolnoza',
      kind: 'official',
    },
  ],
})
