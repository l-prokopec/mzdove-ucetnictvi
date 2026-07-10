import { defineLessonContent } from '../define'

export const equalTreatmentContent = defineLessonContent({
  moduleId: 'labour-law-basics',
  skillIds: [
    'equal-treatment-recognition',
    'discrimination-risk',
    'pay-difference-documentation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-10',
    note: 'Zásady rovného zacházení, zákaz diskriminace a jejich dopad do odměňování a mzdové evidence ověřené podle české právní úpravy účinné v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Rovné zacházení v pracovněprávních vztazích',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí zajišťovat rovné zacházení se zaměstnanci zejména v pracovních podmínkách, odměňování, poskytování dalších plnění, odborné přípravě a příležitosti k postupu. Pro mzdovou účetní je nejviditelnější oblastí mzda, odměny, benefity a srážky.',
    },
    {
      type: 'definition',
      term: 'Rovné zacházení',
      definition:
        'Požadavek, aby s osobami ve srovnatelné situaci nebylo bez věcného a právně přípustného důvodu zacházeno rozdílně.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Rovné zacházení neznamená, že všichni musí vždy dostat stejnou částku. Rozdíl může být oprávněný, pokud vychází z doložitelného a nediskriminačního důvodu.',
    },
    {
      type: 'heading',
      text: 'Diskriminace',
    },
    {
      type: 'definition',
      term: 'Diskriminace',
      definition:
        'Zakázané rozdílné zacházení založené na chráněném důvodu nebo jiná zákonem vymezená forma diskriminačního jednání.',
    },
    {
      type: 'heading',
      text: 'Přímá diskriminace',
    },
    {
      type: 'paragraph',
      text: 'Přímá diskriminace nastává, je-li s osobou zacházeno méně příznivě než s jinou osobou ve srovnatelné situaci přímo z chráněného důvodu. V mzdové praxi může jít například o nižší odměnu přiznanou pouze kvůli věku, pohlaví nebo zdravotnímu postižení.',
    },
    {
      type: 'heading',
      text: 'Nepřímá diskriminace',
    },
    {
      type: 'paragraph',
      text: 'Nepřímá diskriminace může vzniknout zdánlivě neutrálním pravidlem, které určitou skupinu bez dostatečného ospravedlnění znevýhodňuje. Proto je nutné hodnotit nejen text pravidla, ale také jeho skutečný dopad.',
    },
    {
      type: 'heading',
      text: 'Chráněné důvody',
    },
    {
      type: 'list',
      items: [
        'rasa a etnický původ',
        'národnost',
        'pohlaví, těhotenství, mateřství nebo otcovství',
        'sexuální orientace',
        'věk',
        'zdravotní postižení',
        'náboženské vyznání, víra nebo světový názor',
        'další důvody chráněné pracovněprávními a antidiskriminačními předpisy',
      ],
    },
    {
      type: 'heading',
      text: 'Další formy diskriminačního jednání',
    },
    {
      type: 'list',
      items: [
        'obtěžování',
        'sexuální obtěžování',
        'pronásledování osoby za uplatnění práv',
        'pokyn k diskriminaci',
        'navádění k diskriminaci',
      ],
    },
    {
      type: 'heading',
      text: 'Rozdíl v odměně může být oprávněný',
    },
    {
      type: 'paragraph',
      text: 'Rozdílná odměna může vycházet například z odlišné práce, odpovědnosti, výkonu, výsledků, pracovních podmínek nebo jiného objektivního kritéria. Důvod musí být skutečný, použitý konzistentně a doložitelný.',
    },
    {
      type: 'example',
      title: 'Rozdílná odměna podle výkonu',
      situation:
        'Dva zaměstnanci mají stejný druh práce, ale jeden splnil předem stanovené a měřitelné podmínky pro výkonovou odměnu, druhý nikoli.',
      solution:
        'Rozdíl může být oprávněný, pokud jsou kritéria věcná, předem použitelná, nediskriminační a jejich splnění je doloženo.',
    },
    {
      type: 'example',
      title: 'Rizikový požadavek na odebrání odměny',
      situation:
        'Vedoucí požaduje odebrat zaměstnankyni osobní odměnu s odůvodněním, že je těhotná a pravděpodobně bude brzy nepřítomná.',
      solution:
        'Takový důvod představuje závažné riziko přímé diskriminace. Mzdová účetní nesmí změnu bez dalšího provést a musí případ eskalovat oprávněné osobě, HR nebo právnímu útvaru.',
    },
    {
      type: 'heading',
      text: 'Role mzdové účetní',
    },
    {
      type: 'list',
      items: [
        'zpracovávat pouze doložené a oprávněně schválené rozdíly',
        'upozornit na neobvyklý nebo nekonzistentní mzdový rozdíl',
        'nepoužívat chráněný údaj jako neověřené kritérium odměny',
        'ověřit vazbu odměny na pravidlo, výkon nebo rozhodnutí',
        'omezit přístup k citlivým osobním údajům',
        'zachovat kontrolní stopu změny a jejího důvodu',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Mzdová účetní nemusí sama právně rozhodnout, zda došlo k diskriminaci. Musí však rozpoznat rizikový podklad, nezpracovat zjevně problematickou změnu bez ověření a předat případ oprávněné osobě.',
    },
    {
      type: 'heading',
      text: 'Kontrola mzdových rozdílů',
    },
    {
      type: 'list',
      items: [
        'vymezit srovnatelné zaměstnance nebo skupiny',
        'určit konkrétní rozdíl ve mzdě nebo plnění',
        'dohledat rozhodovací kritérium',
        'ověřit, zda bylo kritérium použito konzistentně',
        'zkontrolovat, zda rozdíl nesouvisí s chráněným důvodem',
        'zaznamenat vysvětlení a schválení',
        'eskalovat nevysvětlenou nebo rizikovou odchylku',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každý rozdíl v odměně automaticky za diskriminaci',
        'považovat každý schválený rozdíl automaticky za oprávněný',
        'použít neurčité kritérium bez dokladů',
        'srovnávat zaměstnance vykonávající rozdílnou práci bez další analýzy',
        'ignorovat skutečný dopad zdánlivě neutrálního pravidla',
        'uvést chráněný údaj přímo jako důvod snížení odměny',
      ],
    },
    {
      type: 'summary',
      items: [
        'Rovné zacházení se týká pracovních podmínek, odměňování, dalších plnění, vzdělávání i postupu.',
        'Diskriminace může být přímá, nepřímá nebo mít jinou zákonem vymezenou formu.',
        'Rozdílná odměna může být oprávněná, musí však mít objektivní a doložitelný důvod.',
        'Mzdová účetní kontroluje podklad a konzistenci, ale složité právní posouzení eskaluje.',
        'Nevysvětlené mzdové rozdíly a změny založené na chráněném důvodu jsou významnou kontrolní výjimkou.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'equal-treatment-card-01',
      front: 'Znamená rovné zacházení vždy stejnou mzdu?',
      back: 'Ne. Rozdíl může mít objektivní, nediskriminační a doložitelný důvod.',
      explanation:
        'Srovnává se situace zaměstnanců a kritéria, podle kterých byl rozdíl vytvořen.',
      skillIds: ['equal-treatment-recognition'],
    },
    {
      id: 'equal-treatment-card-02',
      front: 'Co je přímá diskriminace?',
      back: 'Méně příznivé zacházení s osobou ve srovnatelné situaci přímo z chráněného důvodu.',
      explanation:
        'Důvod rozdílu je přímo spojen například s věkem, pohlavím nebo zdravotním postižením.',
      skillIds: ['discrimination-risk'],
    },
    {
      id: 'equal-treatment-card-03',
      front: 'Co je nepřímá diskriminace?',
      back: 'Zdánlivě neutrální pravidlo, které bez dostatečného ospravedlnění znevýhodňuje určitou skupinu.',
      explanation:
        'Rozhodující může být skutečný dopad pravidla, nikoli pouze jeho neutrální formulace.',
      skillIds: ['discrimination-risk'],
    },
    {
      id: 'equal-treatment-card-04',
      front: 'Co má mzdová účetní udělat s nevysvětleným mzdovým rozdílem?',
      back: 'Vyžádat doložení kritéria, zkontrolovat konzistenci a rizikový případ eskalovat.',
      explanation: 'Mzdová změna musí mít dohledatelný a přípustný důvod.',
      skillIds: ['pay-difference-documentation'],
    },
  ],
  exercises: [
    {
      id: 'equal-treatment-exercise-01',
      type: 'single_choice',
      prompt: 'Které tvrzení o rovném zacházení je správné?',
      options: [
        {
          id: 'a',
          text: 'Všichni zaměstnanci musí vždy dostat stejnou částku.',
        },
        {
          id: 'b',
          text: 'Rozdíl může být oprávněný, pokud má objektivní a doložitelný důvod.',
        },
        {
          id: 'c',
          text: 'Schválený rozdíl se nikdy nekontroluje.',
        },
        {
          id: 'd',
          text: 'Rovné zacházení se netýká odměňování.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['equal-treatment-recognition'],
      explanation:
        'Rovnost neznamená mechanickou stejnost; rozdíly musí být věcně odůvodněné a nediskriminační.',
      commonMistake:
        'Zaměnit rovné zacházení za absolutně stejnou odměnu bez ohledu na práci a výkon.',
    },
    {
      id: 'equal-treatment-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které okolnosti mohou být chráněnými důvody?',
      options: [
        { id: 'age', text: 'Věk.' },
        { id: 'sex', text: 'Pohlaví.' },
        { id: 'disability', text: 'Zdravotní postižení.' },
        { id: 'religion', text: 'Náboženské vyznání nebo víra.' },
        {
          id: 'performance',
          text: 'Doložený rozdíl v pracovním výkonu.',
        },
      ],
      correctOptionIds: ['age', 'sex', 'disability', 'religion'],
      skillIds: ['discrimination-risk'],
      explanation:
        'Věk, pohlaví, zdravotní postižení a náboženství patří mezi chráněné důvody; doložený výkon může být objektivním kritériem.',
      commonMistake:
        'Považovat objektivní výkonové kritérium samo o sobě za chráněný důvod.',
    },
    {
      id: 'equal-treatment-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kontrolu nevysvětleného rozdílu v odměně.',
      steps: [
        {
          id: 'compare',
          text: 'Vymezit srovnatelnou situaci a konkrétní rozdíl.',
        },
        {
          id: 'criterion',
          text: 'Dohledat kritérium, podle kterého rozdíl vznikl.',
        },
        {
          id: 'consistency',
          text: 'Ověřit konzistentní použití kritéria.',
        },
        {
          id: 'protected',
          text: 'Prověřit vazbu na chráněný důvod.',
        },
        {
          id: 'record',
          text: 'Výsledek doložit nebo případ eskalovat.',
        },
      ],
      correctOrder: [
        'compare',
        'criterion',
        'consistency',
        'protected',
        'record',
      ],
      skillIds: ['pay-difference-documentation'],
      explanation:
        'Kontrola začíná srovnáním, pokračuje důvodem a jeho použitím a končí doložením nebo eskalací.',
      commonMistake:
        'Uzavřít případ jen na základě tvrzení, že rozdíl schválil vedoucí.',
    },
    {
      id: 'equal-treatment-exercise-04',
      type: 'single_choice',
      prompt:
        'Vedoucí požaduje snížit odměnu zaměstnankyni pouze kvůli jejímu těhotenství. Co má mzdová účetní udělat?',
      options: [
        { id: 'a', text: 'Změnu ihned provést.' },
        {
          id: 'b',
          text: 'Změnu nezpracovat bez ověření a případ eskalovat jako diskriminační riziko.',
        },
        { id: 'c', text: 'Důvod odstranit z e-mailu a změnu provést.' },
        { id: 'd', text: 'Změnu rozdělit mezi více měsíců.' },
      ],
      correctOptionId: 'b',
      skillIds: ['discrimination-risk'],
      explanation:
        'Těhotenství je chráněná okolnost a uvedený důvod představuje závažné riziko přímé diskriminace.',
      commonMistake:
        'Považovat pokyn vedoucího za automaticky dostatečný a přípustný podklad.',
    },
    {
      id: 'equal-treatment-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá diskriminace založená na zdánlivě neutrálním pravidle se znevýhodňujícím dopadem?',
      acceptedAnswers: ['nepřímá diskriminace', 'neprima diskriminace'],
      ignoreDiacritics: true,
      skillIds: ['discrimination-risk'],
      explanation:
        'Jde o nepřímou diskriminaci, pokud pravidlo nemá dostatečné objektivní ospravedlnění.',
      commonMistake:
        'Posuzovat pouze neutrální formulaci pravidla a ignorovat jeho dopad.',
    },
    {
      id: 'equal-treatment-exercise-06',
      type: 'single_choice',
      prompt:
        'Dva zaměstnanci mají rozdílnou odměnu podle předem daného a doloženého výkonového výsledku. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Každý rozdíl je automaticky diskriminací.',
        },
        {
          id: 'b',
          text: 'Rozdíl může být oprávněný, pokud je kritérium věcné, nediskriminační a použité konzistentně.',
        },
        {
          id: 'c',
          text: 'Výkon se při odměňování nikdy nesmí zohlednit.',
        },
        {
          id: 'd',
          text: 'Kritérium nemusí být dohledatelné.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['equal-treatment-recognition', 'pay-difference-documentation'],
      explanation:
        'Objektivní výkonové kritérium může odůvodnit rozdílnou odměnu, pokud je řádně použito a doloženo.',
      commonMistake:
        'Považovat každý rozdíl za zakázaný nebo naopak každý výkonový rozdíl za automaticky správný.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'Zákon č. 198/2009 Sb., antidiskriminační zákon – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2009/198',
      kind: 'official',
    },
    {
      title: 'MPSV – Rovné zacházení a zákaz diskriminace',
      url: 'https://ppropo.mpsv.cz/IIVybranezasadypracovnepravnichv',
      kind: 'official',
    },
    {
      title: 'Zákon č. 435/2004 Sb., o zaměstnanosti – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2004/435',
      kind: 'official',
    },
  ],
})
