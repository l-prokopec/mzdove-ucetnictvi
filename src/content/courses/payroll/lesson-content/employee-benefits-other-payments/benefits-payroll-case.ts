import { defineLessonContent } from '../define'

export const benefitsPayrollCaseContent = defineLessonContent({
  moduleId: 'employee-benefits-other-payments',
  skillIds: [
    'benefits-case-classification',
    'benefits-case-calculation',
    'benefits-case-documentation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Komplexní mzdové zpracování peněžních a nepeněžních benefitů, příspěvků na spoření na stáří a povinného příspěvku při rizikové práci podle pravidel roku 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Cíl případové studie',
    },
    {
      type: 'paragraph',
      text: 'Úkolem je převést několik různých plnění jednoho zaměstnance do kontrolovatelných mzdových vstupů. Případ záměrně kombinuje peněžní benefit, zdravotní benefit, volnočasový benefit, cestovní náhradu, dobrovolný příspěvek na spoření na stáří a povinný příspěvek při rizikové práci.',
    },
    {
      type: 'heading',
      text: 'Zaměstnanec a rozhodné období',
    },
    {
      type: 'list',
      items: [
        'zaměstnanec: Jana Novotná',
        'pracovní poměr u jednoho zaměstnavatele',
        'mzdové období: listopad 2026',
        'základní mzda za měsíc: 45 000 Kč',
        'Prohlášení poplatníka a vlastní výpočet daně nejsou předmětem této lekce',
      ],
    },
    {
      type: 'heading',
      text: 'Plnění v listopadu',
    },
    {
      type: 'list',
      items: [
        'peněžní příspěvek na sport: 2 000 Kč',
        'nepeněžní zdravotní služba: 6 000 Kč',
        'nepeněžní kulturní a sportovní benefit: 3 000 Kč',
        'řádná cestovní náhrada: 1 200 Kč',
        'dobrovolný příspěvek zaměstnavatele na doplňkové penzijní spoření: 2 000 Kč',
        'povinný příspěvek při rizikové práci za říjen zaplacený v listopadu: 2 000 Kč',
      ],
    },
    {
      type: 'heading',
      text: 'Roční kumulace před listopadem',
    },
    {
      type: 'list',
      items: [
        'zdravotní benefity: 40 000 Kč',
        'ostatní volnočasové benefity: 23 000 Kč',
        'příspěvky zaměstnavatele na podporované produkty: 47 000 Kč',
      ],
    },
    {
      type: 'heading',
      text: 'Podklady k rizikové práci',
    },
    {
      type: 'list',
      items: [
        'platné rozhodnutí o třetí kategorii pro vybraný rizikový faktor',
        'zaměstnanec uplatnil právo před říjnem',
        'uvedl doplňkové penzijní spoření',
        'v říjnu získal alespoň tři směny rizikové práce',
        'sociální vyměřovací základ za říjen činil 50 000 Kč',
      ],
    },
    {
      type: 'paragraph',
      text: 'Povinný příspěvek za říjen tedy činí 50 000 × 4 % = 2 000 Kč a byl včas zaplacen v listopadu.',
    },
    {
      type: 'heading',
      text: 'Krok 1: peněžní příspěvek na sport',
    },
    {
      type: 'paragraph',
      text: 'Částka 2 000 Kč byla vyplacena zaměstnanci v penězích. Nelze ji osvobodit podle pravidla určeného pro nepeněžní sportovní benefit.',
    },
    {
      type: 'example',
      title: 'Výsledek peněžního příspěvku',
      situation:
        'Zaměstnanec obdržel na účet 2 000 Kč s označením sportovní benefit.',
      solution:
        'Celých 2 000 Kč je zdanitelným příjmem. Při splnění obecných podmínek vstupuje také do sociálního a zdravotního vyměřovacího základu.',
    },
    {
      type: 'heading',
      text: 'Krok 2: zdravotní benefit',
    },
    {
      type: 'paragraph',
      text: 'Před listopadem bylo v samostatném zdravotním limitu využito 40 000 Kč. Listopadový oprávněný nepeněžní zdravotní benefit činí 6 000 Kč.',
    },
    {
      type: 'example',
      title: 'Kontrola zdravotního limitu',
      situation: '40 000 Kč předchozí kumulace + 6 000 Kč nový benefit.',
      solution:
        'Roční součet činí 46 000 Kč. Je nižší než limit 48 967 Kč, proto je při splnění ostatních podmínek celých 6 000 Kč osvobozeno.',
    },
    {
      type: 'heading',
      text: 'Krok 3: kulturní a sportovní benefit',
    },
    {
      type: 'paragraph',
      text: 'Před listopadem bylo v ostatním volnočasovém limitu využito 23 000 Kč. Nový benefit má hodnotu 3 000 Kč.',
    },
    {
      type: 'example',
      title: 'Rozdělení volnočasového benefitu',
      situation: 'Limit činí 24 483,50 Kč a předchozí kumulace 23 000 Kč.',
      solution:
        'Osvobozená část činí 1 483,50 Kč. Zdanitelná nadlimitní část činí 3 000 − 1 483,50 = 1 516,50 Kč.',
    },
    {
      type: 'heading',
      text: 'Krok 4: cestovní náhrada',
    },
    {
      type: 'paragraph',
      text: 'Částka 1 200 Kč odpovídá řádně doložené zákonné cestovní náhradě. Nejde o odměnu za práci ani benefit podle volnočasového limitu.',
    },
    {
      type: 'example',
      title: 'Výsledek cestovní náhrady',
      situation:
        'Náhrada odpovídá doloženému pracovnímu výdaji a zákonnému režimu.',
      solution:
        'Částka 1 200 Kč se vede jako samostatné plnění mimo mzdu. Do benefitních limitů se nezahrne.',
    },
    {
      type: 'heading',
      text: 'Krok 5: příspěvky na produkty spoření na stáří',
    },
    {
      type: 'paragraph',
      text: 'Před listopadovou platbou činí roční kumulace příspěvků zaměstnavatele 47 000 Kč. V listopadu zaměstnavatel zaplatí dobrovolný příspěvek 2 000 Kč a povinný rizikový příspěvek 2 000 Kč.',
    },
    {
      type: 'example',
      title: 'Společný roční limit 50 000 Kč',
      situation: '47 000 + 2 000 + 2 000 = 51 000 Kč.',
      solution:
        'Z listopadových příspěvků lze do společného limitu osvobodit 3 000 Kč. Nadlimitních 1 000 Kč je zdanitelným příjmem a zpravidla vstoupí do pojistných základů.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Povinný příspěvek nemá samostatný další limit. Sdílí roční hranici s dobrovolným příspěvkem.',
    },
    {
      type: 'heading',
      text: 'Krok 6: součet zdanitelných benefitních částí',
    },
    {
      type: 'list',
      items: [
        'peněžní příspěvek na sport: 2 000 Kč',
        'nadlimitní volnočasový benefit: 1 516,50 Kč',
        'nadlimitní příspěvky na produkty spoření na stáří: 1 000 Kč',
      ],
    },
    {
      type: 'example',
      title: 'Celková zdanitelná benefitní část',
      situation: 'Sečtou se pouze zdanitelné části plnění.',
      solution:
        '2 000 + 1 516,50 + 1 000 = 4 516,50 Kč. Tato částka se přičte k ostatním zdanitelným příjmům zaměstnance pro další mzdové zpracování.',
    },
    {
      type: 'heading',
      text: 'Osvobozené části',
    },
    {
      type: 'list',
      items: [
        'zdravotní benefit: 6 000 Kč',
        'osvobozená část volnočasového benefitu: 1 483,50 Kč',
        'osvobozená část listopadových příspěvků na produkty: 3 000 Kč',
      ],
    },
    {
      type: 'paragraph',
      text: 'Osvobozené částky se nezahrnou do základu daně, ale musí zůstat evidované podle kategorie, roční kumulace a aktuálních pravidel JMHZ.',
    },
    {
      type: 'heading',
      text: 'Plnění mimo benefitní výpočty',
    },
    {
      type: 'list',
      items: ['cestovní náhrada 1 200 Kč'],
    },
    {
      type: 'paragraph',
      text: 'Cestovní náhrada se nezahrnuje do hrubé mzdy ani do ročních benefitních limitů. Její správnost se dokládá cestovním příkazem a vyúčtováním.',
    },
    {
      type: 'heading',
      text: 'Nové roční kumulace po listopadu',
    },
    {
      type: 'list',
      items: [
        'zdravotní benefity: 46 000 Kč',
        'volnočasové benefity celkem: 26 000 Kč, z toho 24 483,50 Kč osvobozeno a 1 516,50 Kč zdaněno',
        'příspěvky zaměstnavatele na produkty celkem: 51 000 Kč, z toho 50 000 Kč osvobozeno a 1 000 Kč zdaněno',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrola pojistného',
    },
    {
      type: 'paragraph',
      text: 'Pro sociální a zdravotní pojistné se samostatně ověří, že zdanitelné benefitní části 4 516,50 Kč nejsou zvláštním předpisem vyloučeny. Osvobozené části a řádná cestovní náhrada se vedou podle svého právního režimu.',
    },
    {
      type: 'heading',
      text: 'Kontrola povinného příspěvku',
    },
    {
      type: 'list',
      items: [
        'správný rizikový faktor a kategorie',
        'uplatnění práva zaměstnancem',
        'alespoň tři rizikové směny za říjen',
        'základ 50 000 Kč',
        'výpočet 2 000 Kč',
        'platba do konce listopadu',
        'evidence povinné části',
        'zahrnutí do ročního limitu',
      ],
    },
    {
      type: 'heading',
      text: 'Mzdové položky',
    },
    {
      type: 'list',
      items: [
        'základní mzda 45 000 Kč',
        'zdanitelný peněžní sportovní příspěvek 2 000 Kč',
        'zdanitelná nadlimitní část volnočasového benefitu 1 516,50 Kč',
        'zdanitelná nadlimitní část příspěvků na produkty 1 000 Kč',
        'osvobozený zdravotní benefit 6 000 Kč',
        'osvobozený volnočasový benefit 1 483,50 Kč',
        'osvobozené příspěvky na produkty 3 000 Kč',
        'cestovní náhrada 1 200 Kč',
      ],
    },
    {
      type: 'heading',
      text: 'Co se v této lekci nepočítá',
    },
    {
      type: 'list',
      items: [
        'měsíční záloha na daň',
        'konkrétní částka sociálního pojistného',
        'konkrétní částka zdravotního pojistného',
        'čistá mzda',
        'bankovní částka k výplatě',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tyto výpočty navazují až po správné klasifikaci částek. Cílem případu je vytvořit přesné vstupy, nikoli předbíhat daňové a pojistné moduly.',
    },
    {
      type: 'heading',
      text: 'Kontrolní stopa',
    },
    {
      type: 'list',
      items: [
        'směrnice o benefitech',
        'doklad peněžního příspěvku',
        'faktura a potvrzení zdravotní služby',
        'doklad kulturního nebo sportovního benefitu',
        'roční benefitní kumulace',
        'cestovní příkaz',
        'smlouva a platba penzijnímu poskytovateli',
        'evidence rizikových směn',
        'výpočet 4 %',
        'schválení a měsíční rekapitulace',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní otázky před uzávěrkou',
    },
    {
      type: 'list',
      items: [
        'Je každý benefit správně oceněn?',
        'Je peněžní forma oddělena od nepeněžní?',
        'Jsou zdravotní a volnočasové limity vedeny samostatně?',
        'Je povinný příspěvek zahrnut do limitu 50 000 Kč?',
        'Je nadlimitní část přidána do zdanitelných příjmů?',
        'Jsou pojistné dopady ověřeny?',
        'Je cestovní náhrada vedena samostatně?',
        'Odpovídá evidence JMHZ aktuální specifikaci?',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby v případu',
    },
    {
      type: 'list',
      items: [
        'osvobodit peněžní sportovní příspěvek',
        'použít nevyčerpaný zdravotní limit na kulturu',
        'zdanit celý tří tisícový volnočasový benefit',
        'zahrnout cestovní náhradu do mzdy',
        'nezahrnout povinný příspěvek do limitu 50 000 Kč',
        'zdanit celé čtyři tisíce příspěvků na produkty',
        'zapomenout na pojistné z nadlimitních částí',
        'neaktualizovat roční kumulace',
      ],
    },
    {
      type: 'summary',
      items: [
        'Zdanitelné benefitní části v případu činí 4 516,50 Kč.',
        'Zdravotní benefit 6 000 Kč je celý pod samostatným limitem.',
        'Z volnočasového benefitu je 1 483,50 Kč osvobozeno a 1 516,50 Kč zdaněno.',
        'Z listopadových příspěvků na produkty jsou 3 000 Kč osvobozeny a 1 000 Kč zdaněno.',
        'Cestovní náhrada zůstává samostatným nemzdovým plněním.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'benefits-payroll-case-card-01',
      front:
        'Kolik činí zdanitelná část tří tisícového volnočasového benefitu při předchozí kumulaci 23 000 Kč?',
      back: '1 516,50 Kč.',
      explanation: 'Do limitu zbývá 1 483,50 Kč.',
      skillIds: ['benefits-case-calculation'],
    },
    {
      id: 'benefits-payroll-case-card-02',
      front:
        'Kolik z listopadových příspěvků 4 000 Kč je zdanitelné při předchozí kumulaci 47 000 Kč?',
      back: '1 000 Kč.',
      explanation: 'Společný roční limit činí 50 000 Kč.',
      skillIds: ['benefits-case-calculation'],
    },
    {
      id: 'benefits-payroll-case-card-03',
      front:
        'Je peněžní sportovní příspěvek 2 000 Kč osvobozeným nepeněžním benefitem?',
      back: 'Ne.',
      explanation: 'Celá částka je peněžním zdanitelným příjmem.',
      skillIds: ['benefits-case-classification'],
    },
    {
      id: 'benefits-payroll-case-card-04',
      front: 'Jaká je celková zdanitelná benefitní část případu?',
      back: '4 516,50 Kč.',
      explanation: '2 000 + 1 516,50 + 1 000 Kč.',
      skillIds: ['benefits-case-calculation'],
    },
  ],
  exercises: [
    {
      id: 'benefits-payroll-case-exercise-01',
      type: 'single_choice',
      prompt:
        'Kolik činí zdravotní kumulace po přidání 6 000 Kč k dosavadním 40 000 Kč?',
      options: [
        {
          id: 'a',
          text: '40 000 Kč.',
        },
        {
          id: 'b',
          text: '46 000 Kč.',
        },
        {
          id: 'c',
          text: '48 967 Kč.',
        },
        {
          id: 'd',
          text: '52 000 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['benefits-case-calculation'],
      explanation: '40 000 + 6 000 = 46 000 Kč.',
      commonMistake: 'Přičíst volnočasový benefit do zdravotní kategorie.',
    },
    {
      id: 'benefits-payroll-case-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které částky jsou v případu zdanitelné?',
      options: [
        {
          id: 'cash',
          text: 'Peněžní sportovní příspěvek 2 000 Kč.',
        },
        {
          id: 'leisure-excess',
          text: 'Nadlimitní volnočasová část 1 516,50 Kč.',
        },
        {
          id: 'retirement-excess',
          text: 'Nadlimitní příspěvek 1 000 Kč.',
        },
        {
          id: 'health',
          text: 'Celý zdravotní benefit 6 000 Kč.',
        },
        {
          id: 'travel',
          text: 'Řádná cestovní náhrada 1 200 Kč.',
        },
      ],
      correctOptionIds: ['cash', 'leisure-excess', 'retirement-excess'],
      skillIds: ['benefits-case-classification'],
      explanation:
        'Zdravotní benefit je pod limitem a cestovní náhrada má jiný právní režim.',
      commonMistake:
        'Zahrnout do zdanitelné mzdy každou vyplacenou nebo evidovanou položku.',
    },
    {
      id: 'benefits-payroll-case-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování komplexního benefitního případu.',
      steps: [
        {
          id: 'documents',
          text: 'Shromáždit podklady a kumulace.',
        },
        {
          id: 'classify',
          text: 'Klasifikovat každé plnění.',
        },
        {
          id: 'value',
          text: 'Ocenit nepeněžní plnění.',
        },
        {
          id: 'limits',
          text: 'Použít samostatné roční limity.',
        },
        {
          id: 'insurance',
          text: 'Ověřit daňové a pojistné dopady.',
        },
        {
          id: 'reconcile',
          text: 'Zapsat položky, vykázání a kontrolní stopu.',
        },
      ],
      correctOrder: [
        'documents',
        'classify',
        'value',
        'limits',
        'insurance',
        'reconcile',
      ],
      skillIds: ['benefits-case-documentation'],
      explanation:
        'Konečná rekapitulace vzniká až po klasifikaci, ocenění a limitech.',
      commonMistake: 'Začít výpočtem čisté mzdy bez správných vstupů.',
    },
    {
      id: 'benefits-payroll-case-exercise-04',
      type: 'single_choice',
      prompt:
        'Příspěvky na produkty před listopadem činí 47 000 Kč a v listopadu se zaplatí 4 000 Kč. Kolik je osvobozeno z listopadové platby?',
      options: [
        {
          id: 'a',
          text: '1 000 Kč.',
        },
        {
          id: 'b',
          text: '2 000 Kč.',
        },
        {
          id: 'c',
          text: '3 000 Kč.',
        },
        {
          id: 'd',
          text: '4 000 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['benefits-case-calculation'],
      explanation: 'Do limitu 50 000 Kč zbývají 3 000 Kč.',
      commonMistake: 'Považovat povinnou část za část mimo limit.',
    },
    {
      id: 'benefits-payroll-case-exercise-05',
      type: 'short_text',
      prompt: 'Kolik činí celková zdanitelná benefitní část případu?',
      acceptedAnswers: ['4 516,50 Kč', '4516,50', '4 516.50', '4516.5'],
      ignoreDiacritics: true,
      skillIds: ['benefits-case-calculation'],
      explanation: 'Součet je 2 000 + 1 516,50 + 1 000 Kč.',
      commonMistake:
        'Přičíst osvobozený zdravotní benefit nebo cestovní náhradu.',
    },
    {
      id: 'benefits-payroll-case-exercise-06',
      type: 'single_choice',
      prompt: 'Jak se v případu zpracuje cestovní náhrada 1 200 Kč?',
      options: [
        {
          id: 'a',
          text: 'Jako volnočasový benefit.',
        },
        {
          id: 'b',
          text: 'Jako samostatné plnění mimo mzdu a benefitní limity.',
        },
        {
          id: 'c',
          text: 'Jako příspěvek na spoření na stáří.',
        },
        {
          id: 'd',
          text: 'Jako pohyblivá mzdová složka.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['benefits-case-classification'],
      explanation: 'Řádná cestovní náhrada má vlastní právní titul.',
      commonMistake: 'Zařadit ji mezi zaměstnanecké benefity.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 586/1992 Sb., o daních z příjmů – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1992/586',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Obecné informace pro zaměstnance a zaměstnavatele 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Aktuální dotazy a odpovědi k dani ze závislé činnosti 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/dotazy-a-odpovedi/2026/aktualni-dotazy-a-odpovedi-k-dani-z',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Informace k povinnému příspěvku na produkty spoření na stáří',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/informace-stanoviska-sdeleni/2026/informace-k-povinnemu-prispevku-na-produkty-na-stari',
      kind: 'official',
    },
    {
      title:
        'MPSV – Informace a otázky k povinnému příspěvku při rizikové práci',
      url: 'https://www.mpsv.cz/cms/documents/03c9c571-9ed4-b4c0-1329-830e06cfe02c/Rizikov%C3%A1%20pr%C3%A1ce%20%C3%BAvod_QaA%20%28002%29_revizeO52%20fin3_aktualizace.pdf',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Informace pro nejmenší zaměstnavatele k JMHZ',
      url: 'https://www.cssz.cz/informace-pro-nejmensi-zamestnavatele',
      kind: 'official',
    },
  ],
})
