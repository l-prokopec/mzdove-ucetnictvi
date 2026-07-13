import { defineLessonContent } from '../define'

export const restBreaksContent = defineLessonContent({
  moduleId: 'working-time',
  skillIds: [
    'meal-break-classification',
    'safety-break-classification',
    'rest-period-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Přestávky na jídlo a oddech, bezpečnostní přestávky, nepřetržitý denní a týdenní odpočinek ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Přestávka ovlivňuje čistou pracovní dobu',
    },
    {
      type: 'paragraph',
      text: 'Při zpracování docházky nestačí znát čas příchodu a odchodu. Je nutné určit, zda zaměstnanec čerpal nezapočitatelnou přestávku na jídlo a oddech, započitatelnou bezpečnostní přestávku nebo přiměřenou dobu na jídlo při nepřerušitelné práci.',
    },
    {
      type: 'definition',
      term: 'Přestávka na jídlo a oddech',
      definition:
        'Nejméně třicetiminutová přestávka poskytnutá nejdéle po šesti hodinách nepřetržité práce, která se běžně nezapočítává do pracovní doby.',
    },
    {
      type: 'heading',
      text: 'Nejpozději po šesti hodinách',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí zaměstnanci poskytnout přestávku na jídlo a oddech nejdéle po šesti hodinách nepřetržité práce. Mladistvému zaměstnanci se poskytuje nejdéle po čtyřech a půl hodinách nepřetržité práce.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Přestávku nelze poskytnout až po dokončení celé osmihodinové směny. Musí být vložena do průběhu práce tak, aby byl dodržen maximální nepřetržitý úsek práce.',
    },
    {
      type: 'heading',
      text: 'Délka a rozdělení přestávky',
    },
    {
      type: 'paragraph',
      text: 'Celková délka přestávky musí činit nejméně 30 minut. Lze ji rozdělit do více částí, ale alespoň jedna část musí trvat nejméně 15 minut a rozdělení musí stále umožnit skutečný oddech a jídlo.',
    },
    {
      type: 'paragraph',
      text: 'Přestávka na jídlo a oddech se neposkytuje na začátku ani na konci pracovní doby. Nemůže tedy sloužit jen jako formální zkrácení začátku nebo dřívější odchod.',
    },
    {
      type: 'example',
      title: 'Rozdělená přestávka',
      situation:
        'Zaměstnanec během směny čerpá přestávky 15 minut, 10 minut a 5 minut.',
      solution:
        'Celkem jde o 30 minut a jedna část trvá alespoň 15 minut. Formální minimum je splněno, ale zaměstnavatel musí současně posoudit, zda rozdělení skutečně plní účel přestávky.',
    },
    {
      type: 'heading',
      text: 'Přestávka se nezapočítává',
    },
    {
      type: 'paragraph',
      text: 'Běžná přestávka na jídlo a oddech není pracovní dobou. Časový úsek mezi začátkem a koncem směny se proto pro mzdový vstup zkrátí o nezapočitatelnou přestávku.',
    },
    {
      type: 'example',
      title: 'Směna 6:00–14:30',
      situation:
        'Zaměstnanec má směnu od 6:00 do 14:30 a čerpá jednu třicetiminutovou přestávku.',
      solution:
        'Doba přítomnosti činí 8,5 hodiny. Čistá pracovní doba činí 8 hodin.',
    },
    {
      type: 'heading',
      text: 'Práce, kterou nelze přerušit',
    },
    {
      type: 'paragraph',
      text: 'Jde-li o práci, kterou nelze přerušit, zaměstnavatel zajistí přiměřenou dobu na oddech a jídlo bez přerušení provozu nebo práce. Tato doba není běžnou přestávkou a započítává se do pracovní doby.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Nerozhoduje jen provozní pohodlí. Musí jít o práci, kterou skutečně nelze přerušit. Pouhé přání zaměstnavatele udržet obsluhu bez střídání nestačí.',
    },
    {
      type: 'example',
      title: 'Nepřerušitelná obsluha',
      situation:
        'Zaměstnanec musí po celou směnu dohlížet na technologický proces a nemůže pracoviště opustit. Jídlo konzumuje během dohledu.',
      solution:
        'Pokud jde skutečně o nepřerušitelnou práci, poskytnutá přiměřená doba na jídlo a oddech se započítává do pracovní doby. Mzdový systém ji nesmí automaticky odečíst jako standardní přestávku.',
    },
    {
      type: 'heading',
      text: 'Mladistvý zaměstnanec',
    },
    {
      type: 'paragraph',
      text: 'Mladistvému zaměstnanci musí být vždy poskytnuta skutečná přestávka na jídlo a oddech. Nelze u něj nahradit přestávku pouze přiměřenou dobou na jídlo při nepřerušitelné práci.',
    },
    {
      type: 'heading',
      text: 'Bezpečnostní přestávka',
    },
    {
      type: 'definition',
      term: 'Bezpečnostní přestávka',
      definition:
        'Přestávka vyžadovaná zvláštním právním předpisem z důvodu ochrany zdraví nebo bezpečnosti při konkrétní práci.',
    },
    {
      type: 'paragraph',
      text: 'Bezpečnostní přestávka se započítává do pracovní doby. Může se týkat například práce s určitými rizikovými faktory, fyzickou, psychickou nebo zrakovou zátěží.',
    },
    {
      type: 'heading',
      text: 'Souběh bezpečnostní a jídelní přestávky',
    },
    {
      type: 'paragraph',
      text: 'Připadne-li bezpečnostní přestávka na dobu přestávky na jídlo a oddech, započítá se souběžná část do pracovní doby. Evidence proto musí odlišit, která část byla bezpečnostní a která pouze nezapočitatelnou jídelní přestávkou.',
    },
    {
      type: 'example',
      title: 'Částečný souběh přestávek',
      situation:
        'Zaměstnanec čerpá třicetiminutovou přestávku na jídlo. Prvních 10 minut je současně povinnou bezpečnostní přestávkou.',
      solution:
        'Deset souběžných minut se započítá do pracovní doby. Zbývajících 20 minut běžné přestávky se do pracovní doby nezapočítá.',
    },
    {
      type: 'heading',
      text: 'Nepřetržitý denní odpočinek',
    },
    {
      type: 'definition',
      term: 'Nepřetržitý denní odpočinek',
      definition:
        'Souvislá doba odpočinku v rámci 24 hodin po sobě jdoucích, která u dospělého zaměstnance činí zpravidla alespoň 11 hodin.',
    },
    {
      type: 'paragraph',
      text: 'Mladistvému zaměstnanci přísluší zpravidla alespoň 12 hodin denního odpočinku. U mladistvého mladšího 15 let nebo bez ukončené povinné školní docházky činí minimum 14 hodin.',
    },
    {
      type: 'example',
      title: 'Kontrola návaznosti směn',
      situation:
        'První směna končí ve 22:00 a další má začít v 6:00 následujícího dne.',
      solution:
        'Mezi směnami je pouze 8 hodin. To neodpovídá běžnému minimu 11 hodin a lze to použít pouze při konkrétní zákonné výjimce a s následnou kompenzací.',
    },
    {
      type: 'heading',
      text: 'Zkrácení denního odpočinku',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance staršího 18 let lze denní odpočinek ve vybraných zákonných případech zkrátit až na 8 hodin, například v nepřetržitých provozech, při nerovnoměrně rozvržené pracovní době nebo při práci přesčas. Následující odpočinek musí být prodloužen o dobu zkrácení.',
    },
    {
      type: 'paragraph',
      text: 'Při mimořádných událostech vymezených zákonem může být odpočinek zkrácen až na 6 hodin, opět s povinností následného prodloužení. Nejde o běžný plánovací nástroj.',
    },
    {
      type: 'example',
      title: 'Kompenzace zkráceného odpočinku',
      situation:
        'Denní odpočinek byl v zákonném případě zkrácen z 11 na 8 hodin.',
      solution:
        'Nejbližší následující denní odpočinek musí činit alespoň 14 hodin, tedy běžných 11 hodin plus 3 hodiny předchozího zkrácení.',
    },
    {
      type: 'heading',
      text: 'Nepřetržitý odpočinek v týdnu',
    },
    {
      type: 'definition',
      term: 'Nepřetržitý odpočinek v týdnu',
      definition:
        'U dospělého zaměstnance nejméně 24 hodin odpočinku bezprostředně navazujících na nezkrácený denní odpočinek, tedy běžně nejméně 35 hodin vcelku.',
    },
    {
      type: 'paragraph',
      text: 'U mladistvého zaměstnance nesmí nepřetržitý odpočinek v týdnu činit méně než 48 hodin. Pokud to provoz umožňuje, má odpočinek připadat všem zaměstnancům na stejný den a zahrnovat neděli.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Hodnota 24 hodin sama o sobě není běžným celkovým týdenním odpočinkem. Musí bezprostředně navazovat na nezkrácený denní odpočinek, takže u dospělého jde standardně o 35 hodin.',
    },
    {
      type: 'heading',
      text: 'Zkrácení týdenního odpočinku',
    },
    {
      type: 'paragraph',
      text: 'Ve vybraných provozech lze týdenní odpočinek zkrátit za zákonných podmínek, ale musí být následně vyrovnán tak, aby zaměstnanec obdržel alespoň 70 hodin nepřetržitého odpočinku za období dvou týdnů. Zvláštní pravidla existují pro zemědělství a zdravotnictví.',
    },
    {
      type: 'heading',
      text: 'Dny pracovního klidu',
    },
    {
      type: 'paragraph',
      text: 'Dny pracovního klidu jsou dny nepřetržitého odpočinku zaměstnance v týdnu a svátky. Práci v těchto dnech může zaměstnavatel nařídit jen v zákonem vymezených případech. Pro mzdové zpracování se musí zachytit skutečný čas a právní titul práce.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'zjistit začátek a konec směny',
        'oddělit běžnou jídelní přestávku',
        'ověřit případnou nepřerušitelnost práce',
        'označit bezpečnostní přestávky a jejich souběh',
        'spočítat čistou pracovní dobu',
        'zkontrolovat nejdelší nepřetržitý úsek práce',
        'zkontrolovat denní odpočinek',
        'zkontrolovat týdenní odpočinek',
        'ověřit zákonný důvod a kompenzaci každého zkrácení',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'automaticky odečíst 30 minut i u nepřerušitelné práce',
        'započítat běžnou jídelní přestávku do pracovní doby',
        'nezapočítat bezpečnostní přestávku',
        'přesunout přestávku na začátek nebo konec směny',
        'považovat osmihodinový denní odpočinek za běžný standard',
        'zapomenout na prodloužení následujícího odpočinku',
        'považovat 24 hodin za celé běžné týdenní minimum',
      ],
    },
    {
      type: 'summary',
      items: [
        'Přestávka na jídlo a oddech se poskytuje nejpozději po šesti hodinách a běžně se nezapočítává do pracovní doby.',
        'Při nepřerušitelné práci se přiměřená doba na jídlo započítává.',
        'Bezpečnostní přestávka je pracovní dobou.',
        'Denní odpočinek činí u dospělého zpravidla nejméně 11 hodin.',
        'Týdenní odpočinek činí u dospělého běžně alespoň 35 hodin vcelku.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'rest-breaks-card-01',
      front:
        'Kdy musí dospělý zaměstnanec nejpozději dostat přestávku na jídlo a oddech?',
      back: 'Po nejvýše šesti hodinách nepřetržité práce.',
      explanation: 'Přestávka musí trvat celkem alespoň 30 minut.',
      skillIds: ['meal-break-classification'],
    },
    {
      id: 'rest-breaks-card-02',
      front: 'Započítává se bezpečnostní přestávka do pracovní doby?',
      back: 'Ano.',
      explanation: 'Na rozdíl od běžné přestávky na jídlo a oddech.',
      skillIds: ['safety-break-classification'],
    },
    {
      id: 'rest-breaks-card-03',
      front: 'Jak dlouhý je běžný denní odpočinek dospělého zaměstnance?',
      back: 'Alespoň 11 hodin během 24 hodin po sobě jdoucích.',
      explanation: 'Zkrácení je možné jen ve vybraných zákonných případech.',
      skillIds: ['rest-period-control'],
    },
    {
      id: 'rest-breaks-card-04',
      front: 'Kolik činí běžný celkový týdenní odpočinek dospělého?',
      back: 'Nejméně 35 hodin vcelku.',
      explanation:
        'Jde o 24 hodin navazujících na nezkrácený jedenáctihodinový denní odpočinek.',
      skillIds: ['rest-period-control'],
    },
  ],
  exercises: [
    {
      id: 'rest-breaks-exercise-01',
      type: 'single_choice',
      prompt:
        'Směna trvá 6:00–14:30 a obsahuje 30 minut běžné jídelní přestávky. Kolik činí pracovní doba?',
      options: [
        {
          id: 'a',
          text: '8 hodin.',
        },
        {
          id: 'b',
          text: '8,5 hodiny.',
        },
        {
          id: 'c',
          text: '7,5 hodiny.',
        },
        {
          id: 'd',
          text: '9 hodin.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['meal-break-classification'],
      explanation:
        'Z 8,5 hodiny přítomnosti se odečte nezapočitatelná třicetiminutová přestávka.',
      commonMistake: 'Započítat celou dobu přítomnosti.',
    },
    {
      id: 'rest-breaks-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které časové úseky se započítávají do pracovní doby?',
      options: [
        {
          id: 'safety',
          text: 'Bezpečnostní přestávka.',
        },
        {
          id: 'uninterruptible',
          text: 'Přiměřená doba na jídlo při nepřerušitelné práci.',
        },
        {
          id: 'meal',
          text: 'Běžná přestávka na jídlo a oddech.',
        },
        {
          id: 'overlap',
          text: 'Část jídelní přestávky souběžná s bezpečnostní přestávkou.',
        },
      ],
      correctOptionIds: ['safety', 'uninterruptible', 'overlap'],
      skillIds: ['meal-break-classification', 'safety-break-classification'],
      explanation:
        'Běžná jídelní přestávka se nezapočítává, uvedené výjimky ano.',
      commonMistake: 'Odečíst všechny přestávky bez rozlišení.',
    },
    {
      id: 'rest-breaks-exercise-03',
      type: 'single_choice',
      prompt:
        'Která doba se na rozdíl od běžné přestávky na jídlo a oddech započítává do pracovní doby?',
      options: [
        { id: 'a', text: 'Bezpečnostní přestávka.' },
        { id: 'b', text: 'Libovolná soukromá pauza.' },
        { id: 'c', text: 'Cesta z domova.' },
        { id: 'd', text: 'Neomluvený pozdní příchod.' },
      ],
      correctOptionId: 'a',
      skillIds: ['rest-period-control'],
      explanation:
        'Bezpečnostní přestávka je součástí pracovní doby; běžná přestávka zpravidla nikoli.',
      commonMistake:
        'Odečíst z pracovní doby i zákonnou bezpečnostní přestávku.',
    },
    {
      id: 'rest-breaks-exercise-04',
      type: 'single_choice',
      prompt:
        'Směna končí ve 22:00 a další začíná v 6:00. Kolik činí odpočinek?',
      options: [
        {
          id: 'a',
          text: '6 hodin.',
        },
        {
          id: 'b',
          text: '8 hodin.',
        },
        {
          id: 'c',
          text: '11 hodin.',
        },
        {
          id: 'd',
          text: '14 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['rest-period-control'],
      explanation:
        'Od 22:00 do 6:00 je 8 hodin, což není běžné jedenáctihodinové minimum.',
      commonMistake: 'Považovat osm hodin za běžný standard.',
    },
    {
      id: 'rest-breaks-exercise-05',
      type: 'short_text',
      prompt:
        'Jak dlouho musí trvat celková běžná přestávka na jídlo a oddech?',
      acceptedAnswers: ['30 minut', '30', 'třicet minut'],
      ignoreDiacritics: true,
      skillIds: ['meal-break-classification'],
      explanation: 'Celkové minimum je 30 minut.',
      commonMistake:
        'Uvést 15 minut, což je minimum jedné části při rozdělení.',
    },
    {
      id: 'rest-breaks-exercise-06',
      type: 'single_choice',
      prompt:
        'Denní odpočinek byl zákonně zkrácen z 11 na 8 hodin. Jak dlouhý má být nejbližší následující odpočinek?',
      options: [
        {
          id: 'a',
          text: '8 hodin.',
        },
        {
          id: 'b',
          text: '11 hodin.',
        },
        {
          id: 'c',
          text: '14 hodin.',
        },
        {
          id: 'd',
          text: '16 hodin.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['rest-period-control'],
      explanation: 'Následující odpočinek se prodlouží o tři chybějící hodiny.',
      commonMistake: 'Neprovést kompenzaci zkrácení.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Přestávka v práci a bezpečnostní přestávka',
      url: 'https://ppropo.mpsv.cz/VIII4Prestavkavpraciabezpecnostn',
      kind: 'official',
    },
    {
      title: 'MPSV – Nepřetržitý denní odpočinek',
      url: 'https://ppropo.mpsv.cz/viii81nepretrzitydenniodpocinek',
      kind: 'official',
    },
    {
      title: 'MPSV – Nepřetržitý odpočinek v týdnu',
      url: 'https://ppropo.mpsv.cz/VIII82Nepretrzityodpocinekvtydnu',
      kind: 'official',
    },
    {
      title: 'MPSV – Dny pracovního klidu',
      url: 'https://ppropo.mpsv.cz/VIII83Dnypracovnihoklidu',
      kind: 'official',
    },
  ],
})
