import { defineLessonContent } from '../define'

export const employerRetirementContributionsContent = defineLessonContent({
  moduleId: 'employee-benefits-other-payments',
  skillIds: [
    'retirement-product-identification',
    'employer-contribution-limit',
    'retirement-contribution-documentation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Dobrovolné a povinné příspěvky zaměstnavatele na daňově podporované produkty spoření na stáří a pojištění dlouhodobé péče včetně společného ročního limitu 50 000 Kč ověřené pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Příspěvek zaměstnavatele není výplata zaměstnanci',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek zaměstnavatele na produkt spoření na stáří je plnění směřované na konkrétní finanční produkt zaměstnance. Pro osvobození se posuzuje druh produktu, osoba účastníka, způsob platby, roční součet a splnění zákonných podmínek.',
    },
    {
      type: 'definition',
      term: 'Daňově podporovaný produkt spoření na stáří',
      definition:
        'Produkt vymezený zákonem o daních z příjmů, který při splnění zákonných podmínek může využívat daňovou podporu zaměstnance nebo příspěvku zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Podporované produktové skupiny',
    },
    {
      type: 'list',
      items: [
        'penzijní připojištění se státním příspěvkem',
        'doplňkové penzijní spoření',
        'penzijní pojištění splňující zákonné podmínky',
        'soukromé životní pojištění splňující zákonné podmínky',
        'dlouhodobý investiční produkt',
        'daňově podporované pojištění dlouhodobé péče',
      ],
    },
    {
      type: 'paragraph',
      text: 'Konkrétní smlouva musí skutečně splňovat zákonnou definici daňově podporovaného produktu. Obchodní název produktu nebo sdělení zaměstnance samo o sobě nestačí.',
    },
    {
      type: 'heading',
      text: 'Roční limit zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Příspěvky zaměstnavatele na daňově podporované produkty spoření na stáří a pojištění dlouhodobé péče jsou u zaměstnance v roce 2026 osvobozeny v úhrnu nejvýše 50 000 Kč za kalendářní rok u jednoho zaměstnavatele.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Limit 50 000 Kč je společný pro všechny podporované produkty a zahrnuje také povinný příspěvek při rizikové práci. Není to samostatný limit pro každý produkt.',
    },
    {
      type: 'heading',
      text: 'Dobrovolný a povinný příspěvek',
    },
    {
      type: 'paragraph',
      text: 'Dobrovolný příspěvek vychází ze smlouvy, kolektivní smlouvy, vnitřního předpisu nebo jiného zaměstnavatelského pravidla. Povinný příspěvek při rizikové práci vzniká podle zvláštního zákona při splnění zákonných podmínek. Pro daňové osvobození se oba druhy započítávají do společného ročního limitu.',
    },
    {
      type: 'heading',
      text: 'Vlastní odpočet zaměstnance je jiný limit',
    },
    {
      type: 'paragraph',
      text: 'Roční limit 50 000 Kč se týká příspěvků zaměstnavatele osvobozených u zaměstnance. Nesmí být zaměněn s limitem vlastních příspěvků zaměstnance, které si zaměstnanec za zákonných podmínek odečítá od základu daně.',
    },
    {
      type: 'example',
      title: 'Dva různé limity',
      situation:
        'Zaměstnavatel přispívá zaměstnanci na produkt spoření na stáří a zaměstnanec současně platí vlastní příspěvky.',
      solution:
        'Příspěvek zaměstnavatele se sleduje v ročním limitu osvobození 50 000 Kč. Vlastní platby zaměstnance se posuzují odděleně podle pravidel nezdanitelné části základu daně.',
    },
    {
      type: 'heading',
      text: 'Sledování součtu za kalendářní rok',
    },
    {
      type: 'list',
      items: [
        'dobrovolné příspěvky na penzijní připojištění',
        'dobrovolné příspěvky na doplňkové penzijní spoření',
        'příspěvky na soukromé životní pojištění',
        'příspěvky na dlouhodobý investiční produkt',
        'příspěvky na pojištění dlouhodobé péče',
        'povinný příspěvek při rizikové práci',
      ],
    },
    {
      type: 'paragraph',
      text: 'Mzdová evidence musí kumulovat všechny tyto příspěvky zaměstnavatele podle konkrétního zaměstnance a kalendářního roku.',
    },
    {
      type: 'heading',
      text: 'Překročení limitu',
    },
    {
      type: 'paragraph',
      text: 'Při překročení souhrnného limitu 50 000 Kč se nadlimitní část v příslušném měsíci přičte ke zdanitelnému příjmu zaměstnance. Tato část rovněž vstupuje do vyměřovacích základů sociálního a zdravotního pojištění, pokud ji zvláštní předpis nevylučuje.',
    },
    {
      type: 'example',
      title: 'Překročení společného limitu',
      situation:
        'Před prosincovou platbou eviduje zaměstnavatel u zaměstnance 49 000 Kč příspěvků od začátku roku. V prosinci zaplatí další 3 000 Kč.',
      solution:
        'Do limitu zbývá 1 000 Kč. Tato část je osvobozená. Zbývajících 2 000 Kč je nadlimitním zdanitelným příjmem a při splnění obecných podmínek také pojistným příjmem.',
    },
    {
      type: 'heading',
      text: 'Více produktů jednoho zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může určit více podporovaných produktů, pokud to zaměstnavatelské pravidlo umožňuje. Rozdělení příspěvku mezi produkty nevytváří nové daňové limity.',
    },
    {
      type: 'example',
      title: 'Penzijní spoření a DIP',
      situation:
        'Zaměstnavatel v roce přispěje 30 000 Kč na doplňkové penzijní spoření a 18 000 Kč na dlouhodobý investiční produkt.',
      solution:
        'Součet činí 48 000 Kč. Při splnění všech produktových podmínek zůstává pod společným limitem 50 000 Kč.',
    },
    {
      type: 'heading',
      text: 'Více zaměstnavatelů',
    },
    {
      type: 'paragraph',
      text: 'Každý zaměstnavatel sleduje svůj vlastní roční součet příspěvků poskytnutých zaměstnanci. Mzdová účetní běžně nesčítá příspěvky jiného zaměstnavatele, pokud pro konkrétní povinnost zákon nestanoví jinak.',
    },
    {
      type: 'heading',
      text: 'Podklady od zaměstnance',
    },
    {
      type: 'list',
      items: [
        'identifikace produktu a poskytovatele',
        'číslo smlouvy nebo klientský identifikátor',
        'platební údaje poskytovatele',
        'potvrzení, že produkt patří zaměstnanci',
        'datum účinnosti požadavku',
        'případné rozdělení mezi více produktů',
        'oznámení změny nebo ukončení produktu',
      ],
    },
    {
      type: 'paragraph',
      text: 'Citlivé finanční údaje se zpracovávají pouze v rozsahu nutném pro příspěvek a s omezeným přístupem.',
    },
    {
      type: 'heading',
      text: 'Podklad zaměstnavatele',
    },
    {
      type: 'list',
      items: [
        'pracovní nebo kolektivní smlouva',
        'vnitřní předpis',
        'individuální rozhodnutí oprávněné osoby',
        'zákonný titul povinného rizikového příspěvku',
        'výše a periodicita příspěvku',
        'podmínky nároku při nástupu, nepřítomnosti a skončení',
      ],
    },
    {
      type: 'heading',
      text: 'Platba poskytovateli',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek se poukazuje na správný produkt podle potvrzených platebních údajů. Přímé vyplacení stejné částky zaměstnanci není automaticky příspěvkem na produkt spoření na stáří pro účely osvobození.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Změnu platebních údajů ověř bezpečným kanálem. Chybná platba na cizí smlouvu nesmí být bez dalšího považována za splnění nároku zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Měsíc platby a mzdový list',
    },
    {
      type: 'paragraph',
      text: 'Evidence musí zachytit měsíc, kdy zaměstnavatel příspěvek skutečně zaplatil, produkt, částku, osvobozenou a zdanitelnou část a roční kumulaci. U povinného příspěvku může být měsíc nároku odlišný od měsíce zaplacení.',
    },
    {
      type: 'heading',
      text: 'Změna nebo ukončení produktu',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec musí včas oznámit změnu smlouvy nebo platebních údajů. Zaměstnavatel nesmí pokračovat v platbě na neaktuální produkt jen proto, že jej má uložený ve mzdovém systému.',
    },
    {
      type: 'heading',
      text: 'Skončení zaměstnání',
    },
    {
      type: 'paragraph',
      text: 'Při skončení pracovního vztahu se ověří poslední nárok, měsíc platby a případná částka placená po skončení. Příspěvek se nepřevádí automaticky na zaměstnance v hotovosti.',
    },
    {
      type: 'heading',
      text: 'Navrácení daňové podpory',
    },
    {
      type: 'paragraph',
      text: 'Porušení podmínek daňově podporovaného produktu může mít daňové důsledky na straně zaměstnance. Mzdová účetní však nemá bez zákonného podkladu sama zpětně přepočítávat historicky oprávněně osvobozené příspěvky zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Oprava platby',
    },
    {
      type: 'list',
      items: [
        'ověřit původní produkt a částku',
        'zjistit, zda byla platba vrácena nebo převedena',
        'určit měsíc skutečného poskytnutí',
        'opravit roční kumulaci',
        'opravit zdanitelnou část a pojistné, pokud je dotčeno',
        'uchovat komunikaci s poskytovatelem',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit podporovaný produkt',
        'ověřit zaměstnance a platební údaje',
        'dohledat právní titul a výši',
        'spočítat souhrn příspěvků od začátku roku',
        'zahrnout dobrovolný i povinný příspěvek',
        'rozdělit osvobozenou a nadlimitní část',
        'provést platbu poskytovateli',
        'zapsat měsíc platby a mzdový list',
        'provést kontrolu bankovního a poskytovatelského potvrzení',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'použít limit 50 000 Kč pro každý produkt zvlášť',
        'nezahrnout povinný rizikový příspěvek',
        'zaměnit zaměstnavatelský limit a vlastní odpočet zaměstnance',
        'vyplatit příspěvek zaměstnanci v hotovosti',
        'platit na neověřenou nebo cizí smlouvu',
        'ignorovat změnu produktu',
        'nezdanit nadlimitní část',
        'sledovat pouze měsíc nároku a ne měsíc skutečné platby',
      ],
    },
    {
      type: 'summary',
      items: [
        'Příspěvky zaměstnavatele na podporované produkty mají společný roční limit 50 000 Kč.',
        'Do limitu se sčítají dobrovolné i povinné příspěvky zaměstnavatele.',
        'Nadlimitní část je zdanitelná a zpravidla pojistně relevantní.',
        'Produkt, zaměstnanec, platební údaje a právní titul musí být doložené.',
        'Vlastní příspěvky zaměstnance používají jiný daňový režim a jiný limit.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employer-retirement-contributions-card-01',
      front:
        'Jaký je roční limit osvobozených příspěvků zaměstnavatele na podporované produkty v roce 2026?',
      back: '50 000 Kč.',
      explanation:
        'Jde o společný limit všech podporovaných produktů u jednoho zaměstnavatele.',
      skillIds: ['employer-contribution-limit'],
    },
    {
      id: 'employer-retirement-contributions-card-02',
      front:
        'Započítává se povinný příspěvek při rizikové práci do limitu 50 000 Kč?',
      back: 'Ano.',
      explanation: 'Sdílí limit s dobrovolnými příspěvky zaměstnavatele.',
      skillIds: ['employer-contribution-limit'],
    },
    {
      id: 'employer-retirement-contributions-card-03',
      front:
        'Je limit zaměstnavatele 50 000 Kč totožný s vlastním odpočtem zaměstnance?',
      back: 'Ne.',
      explanation: 'Jde o dva samostatné daňové mechanismy.',
      skillIds: ['retirement-product-identification'],
    },
    {
      id: 'employer-retirement-contributions-card-04',
      front: 'Co je nadlimitní část příspěvku zaměstnavatele?',
      back: 'Zdanitelný příjem zaměstnance a zpravidla také pojistný příjem.',
      explanation: 'Vzniká v měsíci překročení společného limitu.',
      skillIds: ['employer-contribution-limit'],
    },
  ],
  exercises: [
    {
      id: 'employer-retirement-contributions-exercise-01',
      type: 'single_choice',
      prompt:
        'Před prosincovou platbou je roční součet 49 000 Kč. Zaměstnavatel zaplatí 3 000 Kč. Kolik je zdanitelné?',
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
          text: '2 000 Kč.',
        },
        {
          id: 'd',
          text: '3 000 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['employer-contribution-limit'],
      explanation: 'Do limitu zbývá 1 000 Kč, zbylé 2 000 Kč jsou nad limit.',
      commonMistake:
        'Zdanit celou platbu nebo zaměnit zbývající a nadlimitní část.',
    },
    {
      id: 'employer-retirement-contributions-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které příspěvky se mohou započítávat do společného limitu zaměstnavatele?',
      options: [
        {
          id: 'pension',
          text: 'Doplňkové penzijní spoření.',
        },
        {
          id: 'dip',
          text: 'Dlouhodobý investiční produkt.',
        },
        {
          id: 'life',
          text: 'Podporované soukromé životní pojištění.',
        },
        {
          id: 'care',
          text: 'Podporované pojištění dlouhodobé péče.',
        },
        {
          id: 'salary',
          text: 'Běžná základní mzda.',
        },
      ],
      correctOptionIds: ['pension', 'dip', 'life', 'care'],
      skillIds: ['retirement-product-identification'],
      explanation: 'Mzda není příspěvkem na produkt spoření na stáří.',
      commonMistake: 'Sčítat jakýkoli zaměstnanecký příjem.',
    },
    {
      id: 'employer-retirement-contributions-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování příspěvku zaměstnavatele.',
      steps: [
        {
          id: 'product',
          text: 'Ověřit podporovaný produkt.',
        },
        {
          id: 'documents',
          text: 'Ověřit smlouvu a platební údaje.',
        },
        {
          id: 'entitlement',
          text: 'Dohledat právní titul a částku.',
        },
        {
          id: 'year',
          text: 'Zkontrolovat roční kumulaci.',
        },
        {
          id: 'split',
          text: 'Rozdělit osvobozenou a zdanitelnou část.',
        },
        {
          id: 'payment',
          text: 'Provést a zdokumentovat platbu poskytovateli.',
        },
      ],
      correctOrder: [
        'product',
        'documents',
        'entitlement',
        'year',
        'split',
        'payment',
      ],
      skillIds: ['retirement-contribution-documentation'],
      explanation: 'Platba následuje až po ověření produktu, nároku a limitu.',
      commonMistake:
        'Nejprve poslat částku a teprve potom kontrolovat smlouvu.',
    },
    {
      id: 'employer-retirement-contributions-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel přispěje 30 000 Kč na penzijní spoření a 18 000 Kč na DIP. Jaký je součet pro limit?',
      options: [
        {
          id: 'a',
          text: '18 000 Kč.',
        },
        {
          id: 'b',
          text: '30 000 Kč.',
        },
        {
          id: 'c',
          text: '48 000 Kč.',
        },
        {
          id: 'd',
          text: '50 000 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['employer-contribution-limit'],
      explanation: 'Příspěvky na různé podporované produkty se sčítají.',
      commonMistake: 'Kontrolovat každý produkt samostatně.',
    },
    {
      id: 'employer-retirement-contributions-exercise-05',
      type: 'short_text',
      prompt: 'Jaký je společný roční limit příspěvků zaměstnavatele?',
      acceptedAnswers: ['50 000 Kč', '50000', '50 000'],
      ignoreDiacritics: true,
      skillIds: ['employer-contribution-limit'],
      explanation: 'Limit činí 50 000 Kč za kalendářní rok.',
      commonMistake: 'Uvést limit vlastních příspěvků zaměstnance.',
    },
    {
      id: 'employer-retirement-contributions-exercise-06',
      type: 'single_choice',
      prompt:
        'Může zaměstnavatel pro účely osvobozeného příspěvku vyplatit stejnou částku zaměstnanci v hotovosti?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, musí být splněn režim příspěvku na konkrétní podporovaný produkt.',
        },
        {
          id: 'c',
          text: 'Ano, pokud zaměstnanec podepíše příjem.',
        },
        {
          id: 'd',
          text: 'Ano, pokud částka nepřesáhne 50 000 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['retirement-contribution-documentation'],
      explanation:
        'Peněžní výplata zaměstnanci není sama o sobě příspěvkem na produkt.',
      commonMistake:
        'Považovat účel deklarovaný zaměstnancem za náhradu přímé platby poskytovateli.',
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
        'Finanční správa – Informace k povinnému příspěvku na produkty spoření na stáří',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/informace-stanoviska-sdeleni/2026/informace-k-povinnemu-prispevku-na-produkty-na-stari',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Aktuální dotazy a odpovědi k dani ze závislé činnosti 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/dotazy-a-odpovedi/2026/aktualni-dotazy-a-odpovedi-k-dani-z',
      kind: 'official',
    },
    {
      title: 'Zákon č. 427/2011 Sb., o doplňkovém penzijním spoření – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2011/427',
      kind: 'official',
    },
    {
      title: 'Zákon č. 42/1994 Sb., o penzijním připojištění – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1994/42',
      kind: 'official',
    },
  ],
})
