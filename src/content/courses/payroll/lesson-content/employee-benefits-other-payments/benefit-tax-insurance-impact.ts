import { defineLessonContent } from '../define'

export const benefitTaxInsuranceImpactContent = defineLessonContent({
  moduleId: 'employee-benefits-other-payments',
  skillIds: [
    'benefit-tax-base-impact',
    'benefit-insurance-base-impact',
    'benefit-limit-tracking',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Dopad benefitů na základ daně a vyměřovací základy sociálního a zdravotního pojištění včetně limitů roku 2026 ověřený podle zákona o daních z příjmů a pojistných předpisů.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Jedna položka, tři samostatné otázky',
    },
    {
      type: 'paragraph',
      text: 'U každého benefitu je nutné samostatně určit daň z příjmů, sociální pojistné a zdravotní pojistné. Výsledky spolu často souvisejí, ale mzdová účetní je nesmí odvodit jen z názvu položky.',
    },
    {
      type: 'list',
      items: [
        'je plnění zdanitelným příjmem zaměstnance',
        'vstupuje do vyměřovacího základu sociálního pojištění',
        'vstupuje do vyměřovacího základu zdravotního pojištění',
      ],
    },
    {
      type: 'heading',
      text: 'Zdanitelný benefit',
    },
    {
      type: 'paragraph',
      text: 'Peněžní benefit nebo nepeněžní plnění nesplňující podmínky osvobození je příjmem ze závislé činnosti. Jeho hodnota se přičítá ke zdanitelným příjmům zaměstnance v rozhodném období.',
    },
    {
      type: 'heading',
      text: 'Dopad do pojistného',
    },
    {
      type: 'paragraph',
      text: 'Příjem ze závislé činnosti, který není od daně osvobozen a není zvláštním pojistným předpisem vyloučen, zpravidla vstupuje také do vyměřovacího základu sociálního a zdravotního pojištění.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Daňový výsledek je důležitým vstupem, ale pojistné se musí vždy ověřit podle zákona o pojistném. Nevytvářej univerzální pravidlo, že každá zdanitelná položka bez výjimky vstupuje do obou pojistných základů.',
    },
    {
      type: 'heading',
      text: 'Osvobozený benefit',
    },
    {
      type: 'paragraph',
      text: 'Benefit osvobozený od daně podle zákona o daních z příjmů se do základu daně nezahrne. Při splnění příslušných pojistných podmínek nevstupuje ani do vyměřovacích základů sociálního a zdravotního pojištění.',
    },
    {
      type: 'heading',
      text: 'Plnění mimo předmět daně',
    },
    {
      type: 'paragraph',
      text: 'Plnění, které není předmětem daně, například řádná náhrada pracovního výdaje, není příjmem zaměstnance pro daň. Jeho pojistný režim se odvíjí od stejného skutečného právního důvodu a příslušných zákonných pravidel.',
    },
    {
      type: 'heading',
      text: 'Nadlimitní část nepeněžního benefitu',
    },
    {
      type: 'paragraph',
      text: 'Při překročení ročního limitu není automaticky zdanitelná celá hodnota dosavadních benefitů. Zdanitelnou se stává část, která limit přesahuje, pokud byly dříve poskytnuté částky oprávněně osvobozeny.',
    },
    {
      type: 'example',
      title: 'Překročení volnočasového limitu',
      situation:
        'Zaměstnanec má před listopadem 2026 vyčerpáno 23 000 Kč volnočasového limitu. V listopadu obdrží nepeněžní sportovní benefit v hodnotě 3 000 Kč. Ostatní podmínky jsou splněny.',
      solution:
        'Do limitu 24 483,50 Kč zbývá 1 483,50 Kč. Tato část je osvobozená. Nadlimitních 1 516,50 Kč je zdanitelným příjmem a při splnění obecných podmínek vstupuje také do pojistných základů.',
    },
    {
      type: 'heading',
      text: 'Zdravotní limit se sleduje odděleně',
    },
    {
      type: 'paragraph',
      text: 'Zdravotní nepeněžní benefity mají v roce 2026 vlastní limit 48 967 Kč. Jejich čerpání nesnižuje volnočasový limit a naopak.',
    },
    {
      type: 'example',
      title: 'Zdravotní benefit pod limitem',
      situation:
        'Zaměstnanec má před prosincem zdravotní benefity 44 000 Kč a v prosinci obdrží další oprávněný zdravotní benefit 4 000 Kč.',
      solution:
        'Roční součet činí 48 000 Kč a nepřesahuje limit 48 967 Kč. Celých 4 000 Kč může být při splnění dalších podmínek osvobozeno.',
    },
    {
      type: 'heading',
      text: 'Peněžní příspěvek se do nepeněžního limitu nezařazuje',
    },
    {
      type: 'paragraph',
      text: 'Peněžní částka vyplacená zaměstnanci na sport, kulturu nebo rekreaci se neposuzuje jako čerpání osvobozeného nepeněžního limitu. Jde zpravidla o zdanitelný příjem v plné hodnotě.',
    },
    {
      type: 'example',
      title: 'Peněžní příspěvek na sport',
      situation:
        'Zaměstnavatel vyplatí zaměstnanci 2 500 Kč na sportovní aktivity.',
      solution:
        'Částka 2 500 Kč je peněžním příjmem. Neodečítá se z volnočasového limitu jako osvobozený benefit a zpracuje se podle pravidel zdanitelného příjmu.',
    },
    {
      type: 'heading',
      text: 'Benefit vázaný na výkon',
    },
    {
      type: 'paragraph',
      text: 'Nepeněžní odměna za pracovní výkon je zdanitelná v celé správně oceněné hodnotě. Roční benefitní limity nelze použít k osvobození naturální mzdy nebo obdobné výkonové odměny.',
    },
    {
      type: 'heading',
      text: 'Spoluúčast zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Do základu daně a limitu vstupuje hodnota skutečného nepeněžního příjmu po odečtení částky, kterou zaměstnanec zaměstnavateli uhradil.',
    },
    {
      type: 'example',
      title: 'Benefit se spoluúčastí a limitem',
      situation:
        'Správně určená hodnota rekreace je 8 000 Kč. Zaměstnanec zaplatí 3 000 Kč. Před čerpáním má v ročním volnočasovém limitu volných 4 000 Kč.',
      solution:
        'Nepeněžní příjem činí 5 000 Kč. Z toho 4 000 Kč může být osvobozeno a 1 000 Kč je nadlimitní zdanitelný příjem.',
    },
    {
      type: 'heading',
      text: 'Rodinný příslušník',
    },
    {
      type: 'paragraph',
      text: 'Hodnota benefitu využitého rodinným příslušníkem se eviduje u zaměstnance. Ovlivní jeho roční limit, zdanitelnou část a případné pojistné.',
    },
    {
      type: 'heading',
      text: 'Více zaměstnavatelů',
    },
    {
      type: 'paragraph',
      text: 'Limity nepeněžních benefitů se sledují u každého zaměstnavatele samostatně. Zaměstnavatel nesčítá benefity poskytnuté zaměstnanci jinými zaměstnavateli, pokud zákon nestanoví jinak.',
    },
    {
      type: 'heading',
      text: 'Kumulace od začátku roku',
    },
    {
      type: 'list',
      items: [
        'zdravotní benefity osvobozené a zdanitelné',
        'ostatní volnočasové benefity osvobozené a zdanitelné',
        'benefity rodinných příslušníků',
        'storna a opravy',
        'datum a měsíc vzniku příjmu',
        'použitý limit a právní verze',
      ],
    },
    {
      type: 'heading',
      text: 'Oprava storna',
    },
    {
      type: 'paragraph',
      text: 'Při stornu nebo vrácení nepeněžního benefitu je nutné ověřit, zda zaměstnanci skutečně zanikl majetkový prospěch a zda lze upravit původní roční kumulaci. Pouhé účetní storno faktury nemusí automaticky znamenat storno zaměstnaneckého příjmu.',
    },
    {
      type: 'heading',
      text: 'Daňový náklad zaměstnavatele je jiná otázka',
    },
    {
      type: 'paragraph',
      text: 'To, zda je benefit u zaměstnance osvobozen, samo neurčuje daňovou uznatelnost nákladu zaměstnavatele. Mzdová evidence má předat účetnictví správnou kategorii a hodnotu, ale nesmí směšovat oba testy.',
    },
    {
      type: 'heading',
      text: 'JMHZ a osvobozené příjmy',
    },
    {
      type: 'paragraph',
      text: 'Od roku 2026 se při evidenci a jednotném měsíčním hlášení postupuje podle aktuální datové specifikace. Skutečnost, že je příjem osvobozený, neznamená automaticky, že zaměstnanec nebo položka nejsou evidenčně relevantní.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Nevytvářej vlastní zkratku, že osvobozené = nevykazované. Použij aktuální pokyny JMHZ a kód konkrétního příjmu.',
    },
    {
      type: 'heading',
      text: 'Mzdový vstup zdanitelného benefitu',
    },
    {
      type: 'list',
      items: [
        'správně oceněná zdanitelná část',
        'měsíc zúčtování nebo poskytnutí',
        'vstup do základu daně',
        'vstup nebo nevstup do sociálního vyměřovacího základu',
        'vstup nebo nevstup do zdravotního vyměřovacího základu',
        'vykázání v JMHZ podle aktuální specifikace',
      ],
    },
    {
      type: 'heading',
      text: 'Modelová matice',
    },
    {
      type: 'list',
      items: [
        'peněžní sportovní příspěvek – zpravidla zdanitelný a pojistně relevantní',
        'nepeněžní sportovní benefit pod limitem – osvobozený při splnění podmínek',
        'nadlimitní část sportovního benefitu – zdanitelná a zpravidla pojistně relevantní',
        'pracovní notebook bez soukromého prospěchu – mimo zaměstnancův zdanitelný příjem',
        'nepeněžní odměna za výkon – zdanitelná v celé hodnotě',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit právní kategorii a formu',
        'ocenit plnění',
        'určit roční kategorii a kumulaci',
        'rozdělit osvobozenou a zdanitelnou část',
        'ověřit sociální vyměřovací základ',
        'ověřit zdravotní vyměřovací základ',
        'přiřadit měsíc a vykazovací kód',
        'uložit výpočet a zdroj pravidla',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zdanit celý benefit při překročení jen části limitu',
        'smíchat zdravotní a volnočasovou kumulaci',
        'zahrnout peněžní příspěvek do osvobozeného nepeněžního limitu',
        'osvobodit výkonovou odměnu',
        'ignorovat spoluúčast zaměstnance',
        'nepřičíst benefit rodinného příslušníka',
        'odvodit pojistné pouze z marketingového názvu',
        'automaticky nevykázat osvobozený příjem v JMHZ',
      ],
    },
    {
      type: 'summary',
      items: [
        'Zdanitelná část benefitu vstupuje do základu daně a zpravidla také do pojistných základů.',
        'Osvobozené a nezdanitelné části se musí právně odlišit.',
        'Při překročení limitu se zdaňuje pouze nadlimitní část.',
        'Zdravotní a volnočasový limit se sledují odděleně.',
        'JMHZ se řídí aktuální datovou specifikací, nikoli jednoduchým pravidlem osvobozené = nevykázané.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'benefit-tax-insurance-impact-card-01',
      front: 'Co se zdaní při překročení ročního limitu nepeněžního benefitu?',
      back: 'Část přesahující limit.',
      explanation:
        'Dříve správně osvobozené částky se automaticky zpětně nezdaňují celé.',
      skillIds: ['benefit-limit-tracking'],
    },
    {
      id: 'benefit-tax-insurance-impact-card-02',
      front:
        'Vstupuje nadlimitní benefit do sociálního a zdravotního pojistného?',
      back: 'Zpravidla ano, pokud není zvláštním předpisem vyloučen.',
      explanation: 'Pojistný režim je nutné samostatně ověřit.',
      skillIds: ['benefit-insurance-base-impact'],
    },
    {
      id: 'benefit-tax-insurance-impact-card-03',
      front: 'Sčítá se zdravotní limit s volnočasovým limitem?',
      back: 'Ne.',
      explanation: 'V roce 2026 jde o dvě samostatné roční kategorie.',
      skillIds: ['benefit-limit-tracking'],
    },
    {
      id: 'benefit-tax-insurance-impact-card-04',
      front: 'Je osvobozený příjem automaticky nevykazovaný v JMHZ?',
      back: 'Ne.',
      explanation: 'Použije se aktuální datová specifikace JMHZ.',
      skillIds: ['benefit-tax-base-impact'],
    },
  ],
  exercises: [
    {
      id: 'benefit-tax-insurance-impact-exercise-01',
      type: 'single_choice',
      prompt:
        'Před novým benefitem je vyčerpáno 23 000 Kč z volnočasového limitu. Nový benefit má hodnotu 3 000 Kč. Kolik je zdanitelné?',
      options: [
        {
          id: 'a',
          text: '0 Kč.',
        },
        {
          id: 'b',
          text: '1 483,50 Kč.',
        },
        {
          id: 'c',
          text: '1 516,50 Kč.',
        },
        {
          id: 'd',
          text: '3 000 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['benefit-limit-tracking'],
      explanation:
        'Do limitu zbývá 1 483,50 Kč; zbytek 1 516,50 Kč je nadlimitní.',
      commonMistake:
        'Zdanit celý benefit nebo zaměnit zbývající a nadlimitní část.',
    },
    {
      id: 'benefit-tax-insurance-impact-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které položky je nutné určit u zdanitelné části benefitu?',
      options: [
        {
          id: 'tax',
          text: 'Vstup do základu daně.',
        },
        {
          id: 'social',
          text: 'Vstup do sociálního vyměřovacího základu.',
        },
        {
          id: 'health',
          text: 'Vstup do zdravotního vyměřovacího základu.',
        },
        {
          id: 'month',
          text: 'Rozhodný měsíc.',
        },
        {
          id: 'ignore',
          text: 'Benefit z evidence odstranit.',
        },
      ],
      correctOptionIds: ['tax', 'social', 'health', 'month'],
      skillIds: ['benefit-tax-base-impact', 'benefit-insurance-base-impact'],
      explanation: 'Každý dopad se musí doložit samostatně.',
      commonMistake: 'Řešit pouze daň a zapomenout na pojistné nebo vykázání.',
    },
    {
      id: 'benefit-tax-insurance-impact-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď posouzení dopadu benefitu.',
      steps: [
        {
          id: 'value',
          text: 'Určit hodnotu příjmu.',
        },
        {
          id: 'category',
          text: 'Přiřadit daňovou kategorii.',
        },
        {
          id: 'limit',
          text: 'Zkontrolovat roční kumulaci.',
        },
        {
          id: 'split',
          text: 'Rozdělit osvobozenou a zdanitelnou část.',
        },
        {
          id: 'insurance',
          text: 'Ověřit oba pojistné základy.',
        },
        {
          id: 'report',
          text: 'Zapsat měsíc a vykázání.',
        },
      ],
      correctOrder: [
        'value',
        'category',
        'limit',
        'split',
        'insurance',
        'report',
      ],
      skillIds: ['benefit-tax-base-impact', 'benefit-limit-tracking'],
      explanation:
        'Pojistné a vykázání vycházejí ze správně oceněné a rozdělené částky.',
      commonMistake: 'Vypočítat pojistné před určením zdanitelné části.',
    },
    {
      id: 'benefit-tax-insurance-impact-exercise-04',
      type: 'single_choice',
      prompt:
        'Hodnota rekreace je 8 000 Kč, zaměstnanec zaplatí 3 000 Kč a v limitu zbývá 4 000 Kč. Kolik je zdanitelné?',
      options: [
        {
          id: 'a',
          text: '0 Kč.',
        },
        {
          id: 'b',
          text: '1 000 Kč.',
        },
        {
          id: 'c',
          text: '4 000 Kč.',
        },
        {
          id: 'd',
          text: '5 000 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['benefit-limit-tracking'],
      explanation:
        'Příjem je 5 000 Kč, z toho 4 000 Kč osvobozeno a 1 000 Kč nad limit.',
      commonMistake: 'Použít celou hodnotu před spoluúčastí.',
    },
    {
      id: 'benefit-tax-insurance-impact-exercise-05',
      type: 'short_text',
      prompt:
        'Jaká část nadlimitního benefitu se při překročení limitu zdaňuje?',
      acceptedAnswers: [
        'nadlimitní část',
        'cast presahujici limit',
        'část přesahující limit',
        'přesah',
      ],
      ignoreDiacritics: true,
      skillIds: ['benefit-tax-base-impact'],
      explanation: 'Zdanitelná je část nad zákonný limit.',
      commonMistake: 'Uvést celá roční hodnota benefitů.',
    },
    {
      id: 'benefit-tax-insurance-impact-exercise-06',
      type: 'single_choice',
      prompt:
        'Je peněžní příspěvek 2 500 Kč na sport čerpáním osvobozeného volnočasového limitu?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne, jde zpravidla o zdanitelný peněžní příjem.',
        },
        {
          id: 'c',
          text: 'Ano, ale jen z poloviny.',
        },
        {
          id: 'd',
          text: 'Ano, pokud je vyplacen kartou.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['benefit-tax-base-impact'],
      explanation: 'Osvobození této kategorie vyžaduje nepeněžní formu.',
      commonMistake: 'Zaměnit účel a formu plnění.',
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
        'Zákon č. 589/1992 Sb., o pojistném na sociální zabezpečení – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1992/589',
      kind: 'official',
    },
    {
      title:
        'Zákon č. 592/1992 Sb., o pojistném na veřejné zdravotní pojištění – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1992/592',
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
      title: 'ČSSZ – Informace pro nejmenší zaměstnavatele k JMHZ',
      url: 'https://www.cssz.cz/informace-pro-nejmensi-zamestnavatele',
      kind: 'official',
    },
  ],
})
