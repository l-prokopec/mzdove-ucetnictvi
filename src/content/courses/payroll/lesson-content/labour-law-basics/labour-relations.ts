import { defineLessonContent } from '../define'

export const labourRelationsContent = defineLessonContent({
  moduleId: 'labour-law-basics',
  skillIds: [
    'labour-relation-types',
    'labour-relation-selection',
    'parallel-relations-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-10',
    note: 'Základní rozlišení pracovního poměru, DPP a DPČ a jejich evidenčního významu ověřené pro české právní prostředí roku 2026; konkrétní limity jsou vyhrazeny navazujícím lekcím.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Tři základní formy výkonu závislé práce',
    },
    {
      type: 'paragraph',
      text: 'Závislá práce se v běžné mzdové praxi vykonává v pracovním poměru, na dohodu o provedení práce nebo na dohodu o pracovní činnosti. Každý vztah má vlastní dokumentaci, pravidla a evidenční dopady. Pro mzdovou účetní je zásadní nezaměnit osobu s konkrétním zaměstnáním.',
    },
    {
      type: 'definition',
      term: 'Pracovní poměr',
      definition:
        'Základní pracovněprávní vztah zpravidla založený pracovní smlouvou, v němž zaměstnanec dlouhodobě nebo po sjednanou dobu vykonává závislou práci.',
    },
    {
      type: 'definition',
      term: 'Dohoda o provedení práce',
      definition:
        'Základní pracovněprávní vztah určený pro práci v zákonem omezeném rozsahu, založený písemnou DPP.',
    },
    {
      type: 'definition',
      term: 'Dohoda o pracovní činnosti',
      definition:
        'Základní pracovněprávní vztah pro práci v omezeném průměrném rozsahu, založený písemnou DPČ.',
    },
    {
      type: 'heading',
      text: 'Pracovní poměr jako hlavní forma',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr se používá zejména tam, kde má být práce vykonávána soustavně v dohodnutém druhu, místě a režimu. Poskytuje široký rámec pro pracovní dobu, odměňování, překážky, dovolenou, změny i skončení.',
    },
    {
      type: 'heading',
      text: 'Dohody mimo pracovní poměr',
    },
    {
      type: 'paragraph',
      text: 'DPP a DPČ jsou rovněž pracovněprávní vztahy a osoba pracující na dohodu je zaměstnancem. Dohody nejsou běžnou obchodní objednávkou. Na jejich výkon se vztahuje významná část pracovněprávních pravidel, i když v některých oblastech existují odlišnosti.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Dohoda neznamená práci bez evidence, bez rozvrhu nebo bez pracovněprávní ochrany. Konkrétní povinnosti se vždy ověřují podle aktuální právní úpravy a podmínek daného vztahu.',
    },
    {
      type: 'heading',
      text: 'Volba vztahu není pouze mzdové rozhodnutí',
    },
    {
      type: 'paragraph',
      text: 'O tom, jaký vztah bude uzavřen, rozhoduje zaměstnavatel s pracovníkem v mezích právních pravidel a skutečné potřeby práce. Mzdová účetní může upozornit na chybějící nebo neslučitelný podklad, ale sama nemá bez oprávnění měnit DPP na DPČ nebo pracovní poměr.',
    },
    {
      type: 'heading',
      text: 'Co musí mzdová evidence rozlišit',
    },
    {
      type: 'list',
      items: [
        'typ pracovněprávního vztahu',
        'datum vzniku a skončení',
        'sjednanou práci a podmínky odměny',
        'rozvrh a evidenci pracovní doby',
        'jednoznačný identifikátor konkrétního zaměstnání',
        'daňové a pojistné posouzení pro příslušné období',
        'nároky a nepřítomnosti vztahující se ke konkrétnímu vztahu',
        'registrace, změny a ukončení v příslušných evidencích',
      ],
    },
    {
      type: 'heading',
      text: 'Souběh více vztahů',
    },
    {
      type: 'paragraph',
      text: 'Jedna fyzická osoba může mít u jednoho zaměstnavatele více pracovněprávních vztahů. Každý musí mít vlastní právní titul, obsah a mzdovou evidenci. Současně se ověřuje, zda se vztahy nepřekrývají způsobem odporujícím jejich účelu nebo zákonným pravidlům.',
    },
    {
      type: 'example',
      title: 'Pracovní poměr a samostatná DPP',
      situation:
        'Administrativní zaměstnanec má pracovní poměr na účetní práci a DPP na jednorázové fotografování firemní akce.',
      solution:
        'Vztahy mají odlišný obsah a musí být vedeny odděleně. Docházka, odměna a ostatní podklady se přiřazují ke správnému vztahu a následně se posoudí jejich společné daňové a pojistné dopady.',
    },
    {
      type: 'heading',
      text: 'Změna typu vztahu',
    },
    {
      type: 'paragraph',
      text: 'Pokud se má spolupráce změnit, nestačí v mzdovém systému přepnout typ zaměstnání. Musí existovat odpovídající pracovněprávní dokumentace, musí být určeno datum skončení nebo změny původního vztahu a datum vzniku nového vztahu.',
    },
    {
      type: 'example',
      title: 'Navazující pracovní poměr po DPČ',
      situation:
        'Zaměstnavatel se dohodne s pracovníkem, že od prvního dne dalšího měsíce přejde z DPČ do pracovního poměru.',
      solution:
        'Mzdová účetní potřebuje doložené ukončení nebo změnu DPČ a vznik pracovního poměru s přesnými daty. Teprve potom provede odhlášení, registraci, nastavení mzdy a další navazující kroky.',
    },
    {
      type: 'heading',
      text: 'Rozdíl mezi pracovním vztahem a obchodní spoluprací',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr, DPP a DPČ slouží k výkonu závislé práce. Obchodní smlouva je určena pro skutečně samostatnou činnost. Nelze ji použít pouze proto, aby se obešly pracovněprávní, daňové nebo pojistné povinnosti.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup při založení vztahu',
    },
    {
      type: 'list',
      items: [
        'ověřit písemný pracovněprávní dokument',
        'ověřit totožnost zaměstnavatele a zaměstnance',
        'určit přesný typ vztahu a datum jeho vzniku',
        'založit jednoznačný záznam konkrétního zaměstnání',
        'přenést sjednané pracovní a mzdové podmínky',
        'zajistit registrační, daňové a pojistné podklady',
        'zkontrolovat souběh s dalšími vztahy stejné osoby',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat dohodáře za osobu mimo pracovněprávní ochranu',
        'sloučit více vztahů bez rozlišení',
        'zadat jiný typ vztahu, než vyplývá z podepsaného dokumentu',
        'změnit vztah v systému bez právního podkladu',
        'přiřadit odměnu nebo docházku k nesprávnému zaměstnání',
        'použít obchodní smlouvu pro faktický výkon závislé práce',
      ],
    },
    {
      type: 'summary',
      items: [
        'Základními pracovněprávními vztahy jsou pracovní poměr, DPP a DPČ.',
        'Pracovník na DPP nebo DPČ je zaměstnancem, nikoli běžným dodavatelem.',
        'Každý vztah musí mít samostatný právní titul a jednoznačnou mzdovou evidenci.',
        'Změnu typu vztahu nelze provést pouze technickým přepnutím v systému.',
        'Konkrétní limity a odvodové režimy dohod se řeší v navazujících specializovaných lekcích.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'labour-relations-card-01',
      front: 'Jaké jsou tři základní pracovněprávní vztahy?',
      back: 'Pracovní poměr, DPP a DPČ.',
      explanation:
        'Ve všech těchto vztazích může být vykonávána závislá práce.',
      skillIds: ['labour-relation-types'],
    },
    {
      id: 'labour-relations-card-02',
      front: 'Je člověk pracující na DPP zaměstnancem?',
      back: 'Ano. DPP je základní pracovněprávní vztah.',
      explanation:
        'Dohoda není běžná obchodní smlouva mezi nezávislými podnikateli.',
      skillIds: ['labour-relation-types'],
    },
    {
      id: 'labour-relations-card-03',
      front: 'Lze změnit DPČ na pracovní poměr pouze v mzdovém systému?',
      back: 'Ne. Změna musí mít odpovídající pracovněprávní dokumentaci a přesná data.',
      explanation:
        'Technická změna musí následovat až po řádném vzniku, změně nebo skončení právních vztahů.',
      skillIds: ['labour-relation-selection'],
    },
    {
      id: 'labour-relations-card-04',
      front: 'Jak se evidují dva vztahy jedné osoby?',
      back: 'Každý vztah se vede samostatně a podklady se přiřazují ke správnému zaměstnání.',
      explanation:
        'Společná identita osoby neodstraňuje potřebu oddělit jednotlivé právní vztahy.',
      skillIds: ['parallel-relations-control'],
    },
  ],
  exercises: [
    {
      id: 'labour-relations-exercise-01',
      type: 'single_choice',
      prompt: 'Který vztah není základním pracovněprávním vztahem?',
      options: [
        { id: 'employment', text: 'Pracovní poměr.' },
        { id: 'dpp', text: 'Dohoda o provedení práce.' },
        { id: 'dpc', text: 'Dohoda o pracovní činnosti.' },
        { id: 'invoice', text: 'Běžná faktura bez smluvního vztahu.' },
      ],
      correctOptionId: 'invoice',
      skillIds: ['labour-relation-types'],
      explanation: 'Základními vztahy jsou pracovní poměr, DPP a DPČ.',
      commonMistake: 'Považovat samotnou fakturu za pracovněprávní titul.',
    },
    {
      id: 'labour-relations-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které údaje musí evidence rozlišit u každého pracovního vztahu?',
      options: [
        { id: 'type', text: 'Typ vztahu.' },
        { id: 'dates', text: 'Datum vzniku a skončení.' },
        { id: 'work', text: 'Sjednanou práci a podmínky odměny.' },
        { id: 'identifier', text: 'Identifikátor konkrétního zaměstnání.' },
        {
          id: 'favorite-color',
          text: 'Oblíbenou barvu zaměstnance bez mzdového účelu.',
        },
      ],
      correctOptionIds: ['type', 'dates', 'work', 'identifier'],
      skillIds: ['parallel-relations-control'],
      explanation:
        'Evidence musí umožnit jednoznačně určit právní vztah a jeho rozhodné podmínky.',
      commonMistake:
        'Vést pouze obecnou kartu osoby bez rozlišení jednotlivých zaměstnání.',
    },
    {
      id: 'labour-relations-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kroky při přechodu z DPČ do pracovního poměru.',
      steps: [
        {
          id: 'documents',
          text: 'Získat dokumentaci ke skončení nebo změně DPČ a vzniku pracovního poměru.',
        },
        {
          id: 'dates',
          text: 'Ověřit přesná data obou právních událostí.',
        },
        {
          id: 'records',
          text: 'Založit nebo upravit evidenci obou zaměstnání.',
        },
        {
          id: 'notifications',
          text: 'Provést potřebné registrační a ohlašovací kroky.',
        },
        {
          id: 'payroll',
          text: 'Zpracovat mzdu podle vztahu účinného v daném období.',
        },
      ],
      correctOrder: [
        'documents',
        'dates',
        'records',
        'notifications',
        'payroll',
      ],
      skillIds: ['labour-relation-selection'],
      explanation:
        'Mzdová a registrační změna musí vycházet z doložených právních událostí a dat.',
      commonMistake:
        'Nejprve změnit typ v systému a dokumentaci doplnit až následně.',
    },
    {
      id: 'labour-relations-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má pracovní poměr a DPP na odlišné činnosti. Jak se postupuje?',
      options: [
        {
          id: 'a',
          text: 'Oba vztahy se vedou odděleně a podklady se správně přiřazují.',
        },
        { id: 'b', text: 'DPP se automaticky zruší.' },
        { id: 'c', text: 'Všechny hodiny se vykážou v pracovním poměru.' },
        { id: 'd', text: 'Jeden vztah se v evidenci skryje.' },
      ],
      correctOptionId: 'a',
      skillIds: ['parallel-relations-control'],
      explanation:
        'Souběžné vztahy musí zůstat právně a evidenčně rozlišitelné.',
      commonMistake: 'Sloučit docházku a odměny bez vazby na konkrétní vztah.',
    },
    {
      id: 'labour-relations-exercise-05',
      type: 'short_text',
      prompt: 'Jaká zkratka se používá pro dohodu o pracovní činnosti?',
      acceptedAnswers: ['DPČ', 'DPC'],
      ignoreDiacritics: true,
      skillIds: ['labour-relation-types'],
      explanation: 'Dohoda o pracovní činnosti se označuje zkratkou DPČ.',
      commonMistake: 'Zaměnit DPČ za DPP.',
    },
    {
      id: 'labour-relations-exercise-06',
      type: 'single_choice',
      prompt: 'Kdo může bez dalšího rozhodnout o změně DPP na pracovní poměr?',
      options: [
        {
          id: 'a',
          text: 'Mzdová účetní pouze podle počtu odpracovaných hodin.',
        },
        {
          id: 'b',
          text: 'Účastníci vztahu prostřednictvím odpovídající pracovněprávní dokumentace.',
        },
        { id: 'c', text: 'Mzdový software.' },
        { id: 'd', text: 'Banka zaměstnavatele.' },
      ],
      correctOptionId: 'b',
      skillIds: ['labour-relation-selection'],
      explanation:
        'Vznik a změna pracovněprávního vztahu vyžadují právní jednání účastníků, nikoli pouze technickou změnu.',
      commonMistake:
        'Přenést rozhodnutí o právním vztahu na osobu, která jej pouze eviduje.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Základní pracovněprávní vztahy',
      url: 'https://ppropo.mpsv.cz/IVZakladnipracovnepravnivztahy',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohody o pracích konaných mimo pracovní poměr',
      url: 'https://ppropo.mpsv.cz/VIIDohodyopracichkonanychmimopra',
      kind: 'official',
    },
    {
      title: 'MPSV – Pracovněprávní vztahy',
      url: 'https://mpsv.gov.cz/pracovne-pravni-vztahy',
      kind: 'official',
    },
  ],
})
