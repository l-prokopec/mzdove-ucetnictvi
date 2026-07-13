import { defineLessonContent } from '../define'

export const hazardousWorkMandatoryContributionContent = defineLessonContent({
  moduleId: 'employee-benefits-other-payments',
  skillIds: [
    'hazardous-work-entitlement',
    'hazardous-shift-evidence',
    'mandatory-contribution-processing',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Povinný příspěvek zaměstnavatele při výkonu vybraných rizikových prací podle zákona č. 324/2025 Sb., včetně nároku, evidence směn, sazby 4 % a lhůty platby.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nová povinnost od 1. ledna 2026',
    },
    {
      type: 'paragraph',
      text: 'Od roku 2026 musí zaměstnavatel za zákonných podmínek poskytovat vybraným zaměstnancům vykonávajícím rizikovou práci povinný příspěvek na penzijní připojištění nebo doplňkové penzijní spoření.',
    },
    {
      type: 'definition',
      term: 'Povinný příspěvek při rizikové práci',
      definition:
        'Příspěvek zaměstnavatele ve výši stanovené zvláštním zákonem, který se za splnění podmínek poukazuje zaměstnanci na vybraný penzijní produkt.',
    },
    {
      type: 'heading',
      text: 'Ne každá riziková práce zakládá tento nárok',
    },
    {
      type: 'paragraph',
      text: 'Zákon se zaměřuje na práci zařazenou do třetí kategorie rizikovosti u přesně vymezených faktorů pracovních podmínek. Samotné interní označení práce jako náročné nebo rizikové nestačí.',
    },
    {
      type: 'heading',
      text: 'Vybrané faktory třetí kategorie',
    },
    {
      type: 'list',
      items: [
        'vibrace',
        'zátěž chladem',
        'zátěž teplem',
        'celková fyzická zátěž při dynamické fyzické práci vykonávané velkými svalovými skupinami',
      ],
    },
    {
      type: 'paragraph',
      text: 'O zařazení práce do příslušné kategorie rozhoduje krajská hygienická stanice. Mzdová účetní vychází z platného rozhodnutí nebo jiného závazného podkladu odpovědné odborné osoby, nikoli z vlastního odhadu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Třetí kategorie jiného rizikového faktoru automaticky nezakládá nárok podle zákona č. 324/2025 Sb.',
    },
    {
      type: 'heading',
      text: 'Informační povinnost zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí zaměstnance prokazatelně písemně informovat o právu na povinný příspěvek předtím, než zaměstnanec začne vybranou rizikovou práci vykonávat. U zaměstnanců, kteří takovou práci vykonávali již při účinnosti zákona, platila zvláštní přechodná lhůta.',
    },
    {
      type: 'heading',
      text: 'Zaměstnanec musí právo uplatnit',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek se nezačne poskytovat automaticky jen na základě evidence rizikové práce. Zaměstnanec musí u zaměstnavatele uplatnit právo na příspěvek a oznámit potřebné údaje o penzijním připojištění nebo doplňkovém penzijním spoření.',
    },
    {
      type: 'paragraph',
      text: 'Právo může vzniknout poprvé za kalendářní měsíc následující po měsíci, ve kterém zaměstnanec příspěvek řádně uplatnil.',
    },
    {
      type: 'example',
      title: 'Uplatnění práva v březnu',
      situation:
        'Zaměstnanec doručí úplné oznámení a platební údaje 18. března 2026.',
      solution:
        'Při splnění ostatních podmínek může nárok vzniknout poprvé za duben 2026. Příspěvek za březen zpětně nevznikne jen proto, že zaměstnanec již rizikovou práci vykonával.',
    },
    {
      type: 'heading',
      text: 'Podmínka alespoň tří rizikových směn',
    },
    {
      type: 'paragraph',
      text: 'V daném kalendářním měsíci musí zaměstnanec získat alespoň tři směny rizikové práce podle zákonné evidence. Při nižším počtu za tento měsíc nárok na povinný příspěvek nevznikne.',
    },
    {
      type: 'definition',
      term: 'Směna rizikové práce',
      definition:
        'Směna, během níž zaměstnanec vykonává vybranou rizikovou práci po převážnou část směny, tedy déle než polovinu její délky.',
    },
    {
      type: 'example',
      title: 'Osmihodinová směna s pěti hodinami rizikové práce',
      situation:
        'Směna trvá 8 hodin a zaměstnanec vykonává vybranou rizikovou práci 5 hodin.',
      solution:
        'Riziková práce probíhala déle než polovinu směny. Jde o směnu rizikové práce.',
    },
    {
      type: 'example',
      title: 'Osmihodinová směna se třemi hodinami rizikové práce',
      situation:
        'Směna trvá 8 hodin a vybraná riziková práce je vykonávána 3 hodiny.',
      solution:
        'Riziková práce netrvala déle než polovinu směny. Směna ani její poměrná část se do evidence pro příspěvek nezapočte.',
    },
    {
      type: 'heading',
      text: 'Směny jiné než osmihodinové',
    },
    {
      type: 'paragraph',
      text: 'Pokud směna splní definici směny rizikové práce, započítává se podle své délky. Za každou započatou hodinu směny se započte jedna osmina směny rizikové práce.',
    },
    {
      type: 'example',
      title: 'Desetihodinová směna',
      situation: 'Směna trvá 10 hodin a riziková práce je vykonávána 7 hodin.',
      solution:
        'Riziková práce probíhala po převážnou část směny. Do součtu se započte 10/8, tedy 1,25 směny rizikové práce.',
    },
    {
      type: 'example',
      title: 'Tříapůlhodinová směna',
      situation:
        'Směna trvá 3,5 hodiny a po celou dobu je vykonávána riziková práce.',
      solution:
        'Zohlední se každá započatá hodina, tedy 4/8 = 0,5 směny rizikové práce.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Nejdříve se vždy rozhodne, zda riziková práce trvala déle než polovinu směny. Teprve potom se celá délka kvalifikované směny přepočítá po osminách.',
    },
    {
      type: 'heading',
      text: 'Plánovaná práce a přesčas',
    },
    {
      type: 'paragraph',
      text: 'Pro definici směny rizikové práce se nerozlišuje, zda byla práce vykonána v plánované směně nebo v práci přesčas. Rozhodující je skutečný výkon vybrané rizikové práce a délka časového úseku.',
    },
    {
      type: 'heading',
      text: 'Výše příspěvku',
    },
    {
      type: 'paragraph',
      text: 'Povinný příspěvek činí 4 % z vyměřovacího základu zaměstnance pro pojistné na sociální zabezpečení za kalendářní měsíc, za který nárok vznikl.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Příspěvek se nepočítá pouze z odměny za rizikové směny. Zákonným základem je příslušný sociální vyměřovací základ zaměstnance za daný měsíc.',
    },
    {
      type: 'example',
      title: 'Výpočet z explicitního základu',
      situation:
        'Zaměstnanec splnil podmínky nároku a jeho vyměřovací základ pro sociální pojistné za měsíc činí 60 000 Kč.',
      solution: 'Povinný příspěvek činí 60 000 × 4 % = 2 400 Kč.',
    },
    {
      type: 'heading',
      text: 'Maximální vyměřovací základ',
    },
    {
      type: 'paragraph',
      text: 'Pro účely výpočtu povinného příspěvku se podle metodiky nepřihlíží k ustanovením o maximálním vyměřovacím základu. Mzdová účetní nesmí částku omezit sociálním maximem bez ověření aktuálního zákonného znění.',
    },
    {
      type: 'heading',
      text: 'Vliv nadlimitní části příspěvku',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek se započítává do společného ročního limitu 50 000 Kč pro příspěvky zaměstnavatele na podporované produkty. Část příspěvku, která není od daně osvobozena, může vstupovat do sociálního vyměřovacího základu podle aktuálních pravidel a ovlivnit navazující výpočet.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Při překročení limitu nepoužívej vlastní zjednodušený kruhový přepočet. Postupuj podle aktuální metodiky MPSV a Finanční správy pro měsíc platby.',
    },
    {
      type: 'heading',
      text: 'Kam se příspěvek platí',
    },
    {
      type: 'list',
      items: [
        'penzijní připojištění se státním příspěvkem',
        'doplňkové penzijní spoření',
      ],
    },
    {
      type: 'paragraph',
      text: 'Povinný příspěvek nelze podle tohoto zákona poukazovat na dlouhodobý investiční produkt, soukromé životní pojištění ani jiný finanční produkt.',
    },
    {
      type: 'heading',
      text: 'Lhůta zaplacení',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek musí zaměstnavatel zaplatit do konce prvního kalendářního měsíce následujícího po skončení měsíce, za který se příspěvek platí.',
    },
    {
      type: 'example',
      title: 'Nárok za duben',
      situation: 'Zaměstnanec splní v dubnu všechny podmínky nároku.',
      solution:
        'Příspěvek za duben musí být zaplacen nejpozději do konce května.',
    },
    {
      type: 'heading',
      text: 'Dobrovolný příspěvek může povinnost pokrýt',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnavatel již platí na stejné penzijní připojištění nebo doplňkové penzijní spoření dobrovolný příspěvek alespoň ve výši povinného příspěvku, může tím povinnost částkově splnit. Povinná a dobrovolná část však musí zůstat právně a evidenčně rozlišena.',
    },
    {
      type: 'example',
      title: 'Dobrovolný příspěvek 1 500 Kč',
      situation:
        'Povinný příspěvek za měsíc činí 1 200 Kč a zaměstnavatel na příslušný produkt zaplatí dobrovolně 1 500 Kč.',
      solution:
        'Povinná část činí 1 200 Kč a zbývajících 300 Kč je dobrovolný příspěvek. Evidence musí oba důvody rozlišit.',
    },
    {
      type: 'heading',
      text: 'První potvrzení zaměstnanci',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel vydá zaměstnanci jednorázové potvrzení o zaplacení povinného příspěvku do konce kalendářního měsíce, ve kterém jej poprvé zaplatil.',
    },
    {
      type: 'heading',
      text: 'Povinná evidence zaměstnavatele',
    },
    {
      type: 'list',
      items: [
        'doklad o kategorii práce a vybraném rizikovém faktoru',
        'písemné informování zaměstnance',
        'uplatnění práva zaměstnancem',
        'identifikace penzijního produktu',
        'jednotlivé směny rizikové práce',
        'měsíční součet směn',
        'sociální vyměřovací základ',
        'výpočet 4 %',
        'datum a částka platby',
        'povinná a dobrovolná část',
        'jednorázové potvrzení',
      ],
    },
    {
      type: 'heading',
      text: 'Mzdový list a JMHZ',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek se eviduje na mzdovém listu v období podle aktuálních pravidel. Směny a související údaje se vykazují v rozsahu stanoveném JMHZ a navazující metodikou.',
    },
    {
      type: 'paragraph',
      text: 'Pokud je příspěvek zaplacen po skončení zaměstnání, může se v JMHZ použít režim odloženého příjmu. Konkrétní vykázání musí odpovídat aktuální datové specifikaci.',
    },
    {
      type: 'heading',
      text: 'Kontrola povinnosti',
    },
    {
      type: 'paragraph',
      text: 'Kontrolu plnění povinností provádí místně příslušná územní správa sociálního zabezpečení. Zaměstnavatel proto musí být schopen předložit rozhodnutí o kategorii práce, směnovou evidenci, výpočty a doklady o platbě.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit rozhodnutí o třetí kategorii a vybraném faktoru',
        'ověřit písemné informování zaměstnance',
        'ověřit uplatnění práva a produkt',
        'vyhodnotit každou směnu podle převážné části',
        'přepočítat kvalifikované směny po osminách',
        'ověřit dosažení alespoň tří směn',
        'načíst sociální vyměřovací základ',
        'vypočítat 4 %',
        'zkontrolovat roční limit 50 000 Kč',
        'zaplatit do zákonné lhůty',
        'evidovat, potvrdit a vykázat',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'přiznat příspěvek pro jakoukoli třetí kategorii',
        'určit rizikovost bez podkladu hygienické stanice',
        'začít platit bez uplatnění práva zaměstnancem',
        'počítat nárok už v měsíci oznámení',
        'započítat směnu s rizikovou prací kratší než polovina',
        'přepočítat jen hodiny rizikové práce místo délky kvalifikované směny',
        'počítat 4 % jen z odměny za rizikovou práci',
        'platit příspěvek na DIP',
        'nezahrnout jej do limitu 50 000 Kč',
        'zaměnit dobrovolnou a povinnou část',
      ],
    },
    {
      type: 'summary',
      items: [
        'Nárok se týká třetí kategorie u čtyř vybraných rizikových faktorů.',
        'Zaměstnanec musí právo uplatnit a uvést způsobilý penzijní produkt.',
        'Za měsíc musí získat alespoň tři směny rizikové práce.',
        'Příspěvek činí 4 % sociálního vyměřovacího základu a platí se do konce následujícího měsíce.',
        'Povinný příspěvek se započítává do společného ročního limitu 50 000 Kč.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'hazardous-work-mandatory-contribution-card-01',
      front: 'Které vybrané faktory třetí kategorie mohou založit nárok?',
      back: 'Vibrace, chlad, teplo a vybraná celková fyzická zátěž.',
      explanation:
        'Jiná rizika třetí kategorie se neposuzují automaticky stejně.',
      skillIds: ['hazardous-work-entitlement'],
    },
    {
      id: 'hazardous-work-mandatory-contribution-card-02',
      front: 'Kolik směn rizikové práce je potřeba za měsíc?',
      back: 'Alespoň tři.',
      explanation: 'Součet může obsahovat poměrně započtené směny jiné délky.',
      skillIds: ['hazardous-shift-evidence'],
    },
    {
      id: 'hazardous-work-mandatory-contribution-card-03',
      front: 'Jaká je výše povinného příspěvku?',
      back: '4 % ze sociálního vyměřovacího základu zaměstnance.',
      explanation: 'Nepočítá se jen z odměny za rizikové směny.',
      skillIds: ['mandatory-contribution-processing'],
    },
    {
      id: 'hazardous-work-mandatory-contribution-card-04',
      front: 'Na které produkty lze povinný příspěvek platit?',
      back: 'Na penzijní připojištění nebo doplňkové penzijní spoření.',
      explanation: 'Nelze jej platit na DIP ani soukromé životní pojištění.',
      skillIds: ['mandatory-contribution-processing'],
    },
  ],
  exercises: [
    {
      id: 'hazardous-work-mandatory-contribution-exercise-01',
      type: 'single_choice',
      prompt:
        'Sociální vyměřovací základ činí 60 000 Kč. Jaký je povinný příspěvek 4 %?',
      options: [
        {
          id: 'a',
          text: '600 Kč.',
        },
        {
          id: 'b',
          text: '1 200 Kč.',
        },
        {
          id: 'c',
          text: '2 400 Kč.',
        },
        {
          id: 'd',
          text: '6 000 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['mandatory-contribution-processing'],
      explanation: '60 000 × 0,04 = 2 400 Kč.',
      commonMistake: 'Použít nesprávné procento nebo počítat z čisté mzdy.',
    },
    {
      id: 'hazardous-work-mandatory-contribution-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které podmínky musí být splněny pro měsíční nárok?',
      options: [
        {
          id: 'category',
          text: 'Práce ve třetí kategorii u vybraného faktoru.',
        },
        {
          id: 'dip',
          text: 'Příspěvek musí směřovat na DIP.',
        },
        {
          id: 'claim',
          text: 'Zaměstnanec dříve uplatnil právo.',
        },
        {
          id: 'product',
          text: 'Zaměstnanec uvedl způsobilý penzijní produkt.',
        },
        {
          id: 'shifts',
          text: 'Alespoň tři směny rizikové práce.',
        },
      ],
      correctOptionIds: ['category', 'claim', 'product', 'shifts'],
      skillIds: ['hazardous-work-entitlement'],
      explanation: 'DIP není způsobilým cílem povinného příspěvku.',
      commonMistake: 'Považovat samotné zařazení práce za dostatečné.',
    },
    {
      id: 'hazardous-work-mandatory-contribution-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Které podmínky patří do kontroly povinného příspěvku při vybrané rizikové práci?',
      options: [
        {
          id: 'a',
          text: 'Způsobilé zařazení práce do vymezené rizikové kategorie.',
        },
        { id: 'd', text: 'Libovolné rozhodnutí mzdové účetní bez podkladu.' },
        {
          id: 'b',
          text: 'Uplatnění práva zaměstnancem a určení způsobilého produktu.',
        },
        { id: 'e', text: 'Platba na jakýkoli účet zaměstnance v hotovosti.' },
        {
          id: 'c',
          text: 'Dosažení potřebného počtu kvalifikovaných směn v měsíci.',
        },
        { id: 'f', text: 'Automatické použití DIP jako jediného produktu.' },
      ],
      correctOptionIds: ['a', 'b', 'c'],
      skillIds: ['mandatory-contribution-processing'],
      explanation:
        'Nárok stojí na rizikové práci, uplatnění zaměstnance, směnách a způsobilém produktu.',
      commonMistake: 'Vyplatit příspěvek bez rozhodných evidenčních vstupů.',
    },
    {
      id: 'hazardous-work-mandatory-contribution-exercise-04',
      type: 'single_choice',
      prompt:
        'Desetihodinová směna obsahuje 7 hodin rizikové práce. Kolik směny se započte?',
      options: [
        {
          id: 'a',
          text: '0,7 směny.',
        },
        {
          id: 'b',
          text: '0,875 směny.',
        },
        {
          id: 'c',
          text: '1 směna.',
        },
        {
          id: 'd',
          text: '1,25 směny.',
        },
      ],
      correctOptionId: 'd',
      skillIds: ['hazardous-shift-evidence'],
      explanation:
        'Směna se kvalifikuje a její délka 10 hodin se přepočte jako 10/8.',
      commonMistake: 'Dělit pouze počet rizikových hodin osmi.',
    },
    {
      id: 'hazardous-work-mandatory-contribution-exercise-05',
      type: 'short_text',
      prompt:
        'Kolik procent ze sociálního vyměřovacího základu činí příspěvek?',
      acceptedAnswers: ['4 %', '4 procenta', '4'],
      ignoreDiacritics: true,
      skillIds: ['mandatory-contribution-processing'],
      explanation: 'Zákonná sazba činí 4 %.',
      commonMistake: 'Uvést sazbu sociálního pojistného.',
    },
    {
      id: 'hazardous-work-mandatory-contribution-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec uplatní právo v březnu. Kdy může nárok vzniknout poprvé?',
      options: [
        {
          id: 'a',
          text: 'Za únor.',
        },
        {
          id: 'b',
          text: 'Za březen.',
        },
        {
          id: 'c',
          text: 'Za duben.',
        },
        {
          id: 'd',
          text: 'Až za leden dalšího roku.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['hazardous-work-entitlement'],
      explanation: 'Právo může vzniknout od následujícího kalendářního měsíce.',
      commonMistake: 'Přiznat nárok zpětně za měsíc oznámení.',
    },
  ],
  sources: [
    {
      title:
        'Zákon č. 324/2025 Sb., o povinném příspěvku na produkty spoření na stáří – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2025/324',
      kind: 'official',
    },
    {
      title: 'MPSV – Povinné spoření pro vybrané rizikové profese',
      url: 'https://www.mpsv.cz/povinne-sporeni-pro-vybrane-rizikove-profese',
      kind: 'official',
    },
    {
      title:
        'MPSV – Informace a otázky k povinnému příspěvku při rizikové práci',
      url: 'https://www.mpsv.cz/cms/documents/03c9c571-9ed4-b4c0-1329-830e06cfe02c/Rizikov%C3%A1%20pr%C3%A1ce%20%C3%BAvod_QaA%20%28002%29_revizeO52%20fin3_aktualizace.pdf',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Informace k povinnému příspěvku na produkty spoření na stáří',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/informace-stanoviska-sdeleni/2026/informace-k-povinnemu-prispevku-na-produkty-na-stari',
      kind: 'official',
    },
    {
      title: 'MPSV – Sociální pojištění v roce 2026',
      url: 'https://www.mpsv.cz/socialni-pojisteni',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Informace pro nejmenší zaměstnavatele k JMHZ',
      url: 'https://www.cssz.cz/informace-pro-nejmensi-zamestnavatele',
      kind: 'official',
    },
  ],
})
