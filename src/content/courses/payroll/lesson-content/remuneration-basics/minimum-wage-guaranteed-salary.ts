import { defineLessonContent } from '../define'

export const minimumWageGuaranteedSalaryContent = defineLessonContent({
  moduleId: 'remuneration-basics',
  skillIds: [
    'minimum-wage-control',
    'guaranteed-salary-control',
    'remuneration-floor-supplement',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Minimální mzda a čtyři úrovně zaručeného platu pro rok 2026, poměrné úpravy a doplatky ověřené podle § 111 a § 112 zákoníku práce a sdělení MPSV č. 356/2025 Sb.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Dvě ochranné hranice odměňování',
    },
    {
      type: 'paragraph',
      text: 'Minimální mzda chrání nejnižší přípustnou odměnu za práci zejména ve mzdové sféře a u dohod. Zaručený plat chrání zaměstnance odměňované platem ve veřejných službách a správě podle náročnosti práce. Mzdová účetní musí nejprve určit, která ochranná hranice se na vztah použije.',
    },
    {
      type: 'definition',
      term: 'Minimální mzda',
      definition:
        'Nejnižší přípustná výše odměny za práci zaměstnance, který nemá právo na příslušnou nejnižší úroveň zaručeného platu.',
    },
    {
      type: 'definition',
      term: 'Zaručený plat',
      definition:
        'Plat, na který zaměstnanci vzniklo právo, nejméně však v příslušné ze čtyř úrovní podle skupiny prací v platové sféře.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Od roku 2025 se v podnikatelské mzdové sféře nepoužívají dřívější skupiny zaručené mzdy. Zůstává minimální mzda a v platové sféře čtyři úrovně zaručeného platu.',
    },
    {
      type: 'heading',
      text: 'Minimální mzda pro rok 2026',
    },
    {
      type: 'list',
      items: [
        '22 400 Kč za měsíc při stanovené týdenní pracovní době 40 hodin',
        '134,40 Kč za hodinu při stanovené týdenní pracovní době 40 hodin',
      ],
    },
    {
      type: 'paragraph',
      text: 'Částky platí od 1. ledna do 31. prosince 2026. Pro další kalendářní rok se musí načíst nově vyhlášené hodnoty; nelze částky roku 2026 používat bez kontroly.',
    },
    {
      type: 'heading',
      text: 'Minimální mzda pro každý vztah samostatně',
    },
    {
      type: 'paragraph',
      text: 'Ochrana minimální mzdou se uplatní v každém pracovním poměru, DPP nebo DPČ samostatně. Příjem z jednoho vztahu se nepoužívá k dorovnání podlimitní odměny v jiném vztahu.',
    },
    {
      type: 'example',
      title: 'Pracovní poměr a DPP',
      situation:
        'Zaměstnanec má u jednoho zaměstnavatele pracovní poměr a současně DPP na odlišnou práci.',
      solution:
        'Minimální odměna se kontroluje samostatně u pracovního poměru a samostatně u DPP. Vyšší mzda z pracovního poměru nemůže nahradit případný nedostatek hodinové odměny z DPP.',
    },
    {
      type: 'heading',
      text: 'Jiná stanovená týdenní pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'Měsíční minimální mzda pro plný stanovený rozsah zůstává stejná i při zákonem zkrácené stanovené týdenní pracovní době. Hodinová minimální mzda se však úměrně zvyšuje podle poměru 40 hodin k příslušné stanovené týdenní pracovní době.',
    },
    {
      type: 'list',
      items: [
        '40 hodin týdně – 134,40 Kč za hodinu',
        '38,75 hodiny týdně – 138,80 Kč za hodinu',
        '37,5 hodiny týdně – 143,40 Kč za hodinu',
      ],
    },
    {
      type: 'paragraph',
      text: 'Hodinové částky pro jiný stanovený týdenní rozsah se vypočtou z hodnoty 134,40 Kč násobením koeficientem 40 děleno příslušným týdenním rozsahem a zaokrouhlí se na desetihaléře směrem nahoru.',
    },
    {
      type: 'example',
      title: 'Vícesměnný režim',
      situation:
        'Zaměstnanec pracuje ve vícesměnném režimu se stanovenou týdenní pracovní dobou 37,5 hodiny.',
      solution:
        'Pro hodinovou kontrolu roku 2026 se použije 134,40 × 40 ÷ 37,5 = 143,36 Kč, po zaokrouhlení směrem nahoru 143,40 Kč za hodinu. Měsíční minimum při plném fondu zůstává 22 400 Kč.',
    },
    {
      type: 'heading',
      text: 'Individuálně kratší pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'Má-li zaměstnanec sjednánu kratší pracovní dobu, měsíční minimální mzda se snižuje úměrně tomuto rozsahu nebo skutečně odpracované době. Hodinová minimální mzda se kvůli individuálnímu kratšímu úvazku nemění.',
    },
    {
      type: 'example',
      title: 'Poloviční úvazek',
      situation:
        'Zaměstnanec má v běžném čtyřicetihodinovém režimu sjednáno 20 hodin týdně a odpracuje celý svůj rozvrh.',
      solution:
        'Poměrná měsíční minimální mzda činí 22 400 × 20 ÷ 40 = 11 200 Kč. Hodinová hranice zůstává 134,40 Kč.',
    },
    {
      type: 'heading',
      text: 'Neodpracovaný celý fond',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnanec neodpracuje v měsíci příslušnou pracovní dobu, měsíční minimální hranice se sníží úměrně odpracované době. Pro správnou kontrolu je nutné oddělit odpracované hodiny od náhrad mzdy a dalších nemzdových plnění.',
    },
    {
      type: 'heading',
      text: 'Co se do dosažené mzdy pro minimum nezahrnuje',
    },
    {
      type: 'list',
      items: [
        'mzda za práci přesčas',
        'příplatek za práci ve svátek',
        'příplatek za noční práci',
        'příplatek za práci ve ztíženém pracovním prostředí',
        'příplatek za zvýšenou zátěž zaměstnance ve zdravotnictví',
        'příplatek za práci v sobotu a v neděli',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tyto zákonné složky musí být poskytnuty nad ochrannou hranici. Zaměstnavatel nemůže nízkou základní odměnu dorovnat například vysokým počtem nočních nebo víkendových příplatků.',
    },
    {
      type: 'heading',
      text: 'Co není mzdou pro kontrolu minima',
    },
    {
      type: 'list',
      items: [
        'náhrada mzdy',
        'odstupné',
        'cestovní náhrady',
        'odměna za pracovní pohotovost',
        'náhrada škody',
        'jiné plnění neposkytované za práci',
      ],
    },
    {
      type: 'example',
      title: 'Mzda a víkendový příplatek',
      situation:
        'Zaměstnanci při plném čtyřicetihodinovém fondu náleží základní a výkonová mzda 21 900 Kč a příplatek za práci v sobotu 900 Kč.',
      solution:
        'Pro kontrolu minimální mzdy se víkendový příplatek nezahrne. Dosažená mzda pro minimum činí 21 900 Kč a zaměstnavatel musí poskytnout doplatek 500 Kč. Příplatek 900 Kč náleží vedle toho.',
    },
    {
      type: 'heading',
      text: 'Doplatek ke mzdě',
    },
    {
      type: 'paragraph',
      text: 'Nedosáhne-li mzda minimální mzdy, zaměstnavatel poskytne doplatek. U mzdy lze použít měsíční nebo hodinovou kontrolu podle způsobu sjednaného, stanoveného nebo určeného předem; není-li způsob určen, použije se hodinová minimální mzda.',
    },
    {
      type: 'heading',
      text: 'Doplatek k odměně z dohody',
    },
    {
      type: 'paragraph',
      text: 'U DPP a DPČ se doplatek kontroluje jako rozdíl mezi odměnou připadající na jednu odpracovanou hodinu a příslušnou hodinovou minimální mzdou.',
    },
    {
      type: 'example',
      title: 'DPP pod hodinovým minimem',
      situation:
        'Zaměstnanec na DPP odpracuje v roce 2026 v běžném čtyřicetihodinovém režimu 20 hodin a podle dohody mu vyjde odměna 2 500 Kč.',
      solution:
        'Odměna na hodinu činí 2 500 ÷ 20 = 125 Kč. Minimální hodinová mzda činí 134,40 Kč, takže chybí 9,40 Kč za hodinu. Doplatek činí 20 × 9,40 = 188 Kč.',
    },
    {
      type: 'heading',
      text: 'Zaručený plat pouze v platové sféře',
    },
    {
      type: 'paragraph',
      text: 'Zaručený plat se používá pro zaměstnance odměňované platem. Jeho nejnižší úroveň se určuje podle skupiny prací navázané na platovou třídu a vyhlašuje se pro každý kalendářní rok.',
    },
    {
      type: 'heading',
      text: 'Čtyři skupiny zaručeného platu',
    },
    {
      type: 'list',
      items: [
        '1. skupina – práce v 1. a 2. platové třídě',
        '2. skupina – práce ve 3. až 5. platové třídě',
        '3. skupina – práce v 6. až 9. platové třídě',
        '4. skupina – práce v 10. až 16. platové třídě',
      ],
    },
    {
      type: 'heading',
      text: 'Nejnižší úrovně zaručeného platu v roce 2026',
    },
    {
      type: 'list',
      items: [
        '1. skupina – 22 400 Kč měsíčně nebo 134,40 Kč za hodinu',
        '2. skupina – 26 880 Kč měsíčně nebo 161,30 Kč za hodinu',
        '3. skupina – 31 360 Kč měsíčně nebo 188,20 Kč za hodinu',
        '4. skupina – 35 840 Kč měsíčně nebo 215,10 Kč za hodinu',
      ],
    },
    {
      type: 'paragraph',
      text: 'U jiné stanovené týdenní pracovní doby než 40 hodin se hodinová úroveň zaručeného platu úměrně zvýší. Měsíční úroveň při plném stanoveném rozsahu zůstává stejná.',
    },
    {
      type: 'heading',
      text: 'Poměrná úprava zaručeného platu',
    },
    {
      type: 'paragraph',
      text: 'Při individuálně sjednané kratší pracovní době nebo při neodpracování příslušného měsíčního rozsahu se měsíční úroveň zaručeného platu poměrně sníží. Hodinová úroveň zůstává stejná pro daný stanovený týdenní režim.',
    },
    {
      type: 'example',
      title: 'Třetí skupina a poloviční úvazek',
      situation:
        'Zaměstnanec v platové sféře patří do 3. skupiny a má při čtyřicetihodinové stanovené době sjednán poloviční úvazek 20 hodin.',
      solution:
        'Poměrná měsíční hranice činí 31 360 × 20 ÷ 40 = 15 680 Kč. Hodinová hranice zůstává 188,20 Kč.',
    },
    {
      type: 'heading',
      text: 'Co se nezahrnuje do platu pro zaručenou úroveň',
    },
    {
      type: 'paragraph',
      text: 'Do dosaženého platu pro kontrolu zaručeného platu se nezahrnují obdobné zvláštní složky jako u minimální mzdy, zejména plat za práci přesčas a příplatky za svátek, noční práci, ztížené prostředí, zvýšenou zátěž ve zdravotnictví a sobotu a neděli.',
    },
    {
      type: 'example',
      title: 'Doplatek k zaručenému platu',
      situation:
        'Zaměstnanec ve 2. skupině při plném fondu dosáhne platu započitatelného pro kontrolu ve výši 26 300 Kč. Další zvláštní příplatky činí 1 200 Kč.',
      solution:
        'Nejnižší úroveň pro 2. skupinu je 26 880 Kč. Zvláštní příplatky se do porovnání nezahrnou, takže doplatek k platu činí 580 Kč a příplatky zůstávají nad tuto hranici.',
    },
    {
      type: 'heading',
      text: 'Mzdová účetní neurčuje skupinu podle názvu pozice',
    },
    {
      type: 'paragraph',
      text: 'Zařazení do skupiny zaručeného platu vychází z platové třídy, která se určuje podle nejnáročnější požadované práce a příslušných právních pravidel. Název pracovní pozice nebo organizačního útvaru sám nestačí.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'určit vztah a mzdovou nebo platovou sféru',
        'načíst hodnoty platné pro konkrétní rok',
        'určit stanovenou týdenní pracovní dobu',
        'určit individuální kratší pracovní dobu a skutečný fond',
        'u platu určit správnou skupinu',
        'sestavit pouze započitatelnou odměnu za práci',
        'vyloučit zvláštní příplatky a nemzdová plnění',
        'porovnat měsíční nebo hodinovou hranici',
        'vypočítat a doložit doplatek',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'použít skupiny historické zaručené mzdy v soukromé sféře',
        'použít hodnoty minulého roku',
        'nezvýšit hodinovou hranici při kratší stanovené týdenní době',
        'snížit hodinové minimum kvůli individuálnímu kratšímu úvazku',
        'zahrnout víkendový nebo noční příplatek do minima',
        'započítat náhradu mzdy nebo cestovní náhradu',
        'kontrolovat dva vztahy jedné osoby dohromady',
        'určit skupinu zaručeného platu pouze podle názvu pozice',
      ],
    },
    {
      type: 'summary',
      items: [
        'Minimální mzda v roce 2026 činí 22 400 Kč měsíčně nebo 134,40 Kč za hodinu při 40 hodinách týdně.',
        'Při kratší stanovené týdenní době se hodinová hranice zvyšuje, při individuálním kratším úvazku se měsíční hranice poměrně snižuje.',
        'Zvláštní příplatky a nemzdová plnění se do ochranného minima nezahrnují.',
        'Zaručený plat se používá pouze v platové sféře a má čtyři skupiny.',
        'Při nedosažení hranice zaměstnavatel poskytne samostatně doložený doplatek.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'minimum-wage-guaranteed-salary-card-01',
      front:
        'Jaká je měsíční minimální mzda pro rok 2026 při 40 hodinách týdně?',
      back: '22 400 Kč.',
      explanation: 'Hodinová minimální mzda činí 134,40 Kč.',
      skillIds: ['minimum-wage-control'],
    },
    {
      id: 'minimum-wage-guaranteed-salary-card-02',
      front: 'Používá se zaručený plat v soukromé mzdové sféře?',
      back: 'Ne. Zaručený plat se vztahuje na zaměstnance odměňované platem.',
      explanation:
        'V mzdové sféře zůstává ochrana minimální mzdou a případně vyššími smluvními pravidly.',
      skillIds: ['guaranteed-salary-control'],
    },
    {
      id: 'minimum-wage-guaranteed-salary-card-03',
      front:
        'Zahrnuje se příplatek za noční práci do mzdy pro kontrolu minimální mzdy?',
      back: 'Ne.',
      explanation: 'Musí být poskytnut nad ochrannou hranici.',
      skillIds: ['minimum-wage-control'],
    },
    {
      id: 'minimum-wage-guaranteed-salary-card-04',
      front: 'Kolik činí měsíční zaručený plat ve 4. skupině v roce 2026?',
      back: '35 840 Kč.',
      explanation: 'Hodinová úroveň při 40 hodinách týdně činí 215,10 Kč.',
      skillIds: ['guaranteed-salary-control'],
    },
  ],
  exercises: [
    {
      id: 'minimum-wage-guaranteed-salary-exercise-01',
      type: 'single_choice',
      prompt:
        'Jaká je hodinová minimální mzda při 40hodinové stanovené týdenní době v roce 2026?',
      options: [
        {
          id: 'a',
          text: '124,40 Kč.',
        },
        {
          id: 'b',
          text: '134,40 Kč.',
        },
        {
          id: 'c',
          text: '143,40 Kč.',
        },
        {
          id: 'd',
          text: '161,30 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['minimum-wage-control'],
      explanation: 'Pro rok 2026 činí základní hodinová sazba 134,40 Kč.',
      commonMistake:
        'Použít hodnotu roku 2025 nebo sazbu upravenou pro jiný režim.',
    },
    {
      id: 'minimum-wage-guaranteed-salary-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které položky se nezahrnují do dosažené mzdy pro kontrolu minima?',
      options: [
        {
          id: 'overtime',
          text: 'Mzda za práci přesčas.',
        },
        {
          id: 'night',
          text: 'Příplatek za noční práci.',
        },
        {
          id: 'weekend',
          text: 'Příplatek za práci v sobotu a v neděli.',
        },
        {
          id: 'travel',
          text: 'Cestovní náhrada.',
        },
        {
          id: 'base',
          text: 'Základní mzda za práci.',
        },
      ],
      correctOptionIds: ['overtime', 'night', 'weekend', 'travel'],
      skillIds: ['minimum-wage-control'],
      explanation:
        'Základní mzda se zahrnuje; uvedené zvláštní a nemzdové položky nikoli.',
      commonMistake: 'Porovnat minimum s celou částkou k výplatě.',
    },
    {
      id: 'minimum-wage-guaranteed-salary-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kontrolu minimální mzdy nebo zaručeného platu.',
      steps: [
        {
          id: 'sphere',
          text: 'Určit mzdovou nebo platovou sféru.',
        },
        {
          id: 'year',
          text: 'Načíst částky platné pro rok.',
        },
        {
          id: 'hours',
          text: 'Určit stanovenou a kratší pracovní dobu.',
        },
        {
          id: 'group',
          text: 'U platové sféry určit skupinu prací.',
        },
        {
          id: 'included',
          text: 'Sestavit započitatelnou odměnu.',
        },
        {
          id: 'supplement',
          text: 'Porovnat hranici a vypočítat doplatek.',
        },
      ],
      correctOrder: [
        'sphere',
        'year',
        'hours',
        'group',
        'included',
        'supplement',
      ],
      skillIds: [
        'minimum-wage-control',
        'guaranteed-salary-control',
        'remuneration-floor-supplement',
      ],
      explanation:
        'Hranice se určuje dříve než započitatelná částka a doplatek.',
      commonMistake: 'Začít výpočtem z celé hrubé výplaty bez klasifikace.',
    },
    {
      id: 'minimum-wage-guaranteed-salary-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má poloviční úvazek 20 z 40 hodin. Jaká je poměrná měsíční minimální mzda roku 2026 při plně odpracovaném rozvrhu?',
      options: [
        {
          id: 'a',
          text: '5 600 Kč.',
        },
        {
          id: 'b',
          text: '11 200 Kč.',
        },
        {
          id: 'c',
          text: '22 400 Kč.',
        },
        {
          id: 'd',
          text: '26 880 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['minimum-wage-control'],
      explanation: '22 400 × 20 ÷ 40 = 11 200 Kč.',
      commonMistake: 'Snížit také hodinovou minimální mzdu.',
    },
    {
      id: 'minimum-wage-guaranteed-salary-exercise-05',
      type: 'short_text',
      prompt: 'Kolik činí měsíční zaručený plat ve 3. skupině v roce 2026?',
      acceptedAnswers: ['31 360 Kč', '31360', '31 360'],
      ignoreDiacritics: true,
      skillIds: ['guaranteed-salary-control'],
      explanation: 'Třetí skupina odpovídá 1,4násobku minimální mzdy.',
      commonMistake: 'Uvést částku druhé nebo čtvrté skupiny.',
    },
    {
      id: 'minimum-wage-guaranteed-salary-exercise-06',
      type: 'single_choice',
      prompt:
        'Započitatelná mzda činí 21 900 Kč a víkendový příplatek 900 Kč při plném fondu. Jaký je doplatek do minima 22 400 Kč?',
      options: [
        {
          id: 'a',
          text: '0 Kč.',
        },
        {
          id: 'b',
          text: '500 Kč.',
        },
        {
          id: 'c',
          text: '900 Kč.',
        },
        {
          id: 'd',
          text: '1 400 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['remuneration-floor-supplement'],
      explanation:
        'Víkendový příplatek se do porovnání nezahrnuje; rozdíl je 500 Kč.',
      commonMistake: 'Přičíst zvláštní příplatek k částce pro kontrolu minima.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Minimální mzda',
      url: 'https://www.mpsv.cz/minimalni-mzda',
      kind: 'official',
    },
    {
      title: 'MPSV – Minimální mzda v roce 2026',
      url: 'https://www.mpsv.cz/cms/documents/22a4c972-ceb3-8605-5a8f-2174df433e54/Informa%C4%8Dn%C3%AD%20let%C3%A1k%20o%20minim%C3%A1ln%C3%AD%20mzd%C4%9B%20v%20roce%202026.pdf',
      kind: 'official',
    },
    {
      title: 'MPSV – Minimální mzda a doplatek',
      url: 'https://ppropo.mpsv.cz/xviii1minimalnimzdaanejnizsiurov',
      kind: 'official',
    },
    {
      title: 'MPSV – Zaručený plat',
      url: 'https://ppropo.mpsv.cz/xviii2zarucenyplat',
      kind: 'official',
    },
    {
      title: 'Sdělení MPSV č. 356/2025 Sb.',
      url: 'https://www.e-sbirka.cz/sb/2025/356',
      kind: 'official',
    },
  ],
})
