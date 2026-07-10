import { defineLessonContent } from '../define'

export const payrollRolesContent = defineLessonContent({
  moduleId: 'payroll-foundations',
  skillIds: [
    'payroll-role-accountability',
    'payroll-role-boundaries',
    'payroll-escalation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-04-01',
    verifiedAt: '2026-07-10',
    note: 'Obecné rozdělení rolí a odpovědností v české mzdové agendě, včetně ochrany osobních údajů a procesů navazujících na JMHZ.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Proč je rozdělení rolí důležité',
    },
    {
      type: 'paragraph',
      text: 'Mzdový výsledek vzniká spoluprací více osob a systémů. Někdo vytvoří rozhodnou skutečnost, jiný ji schválí, další ji zaeviduje, mzdová účetní ji zpracuje a oprávněná osoba výsledek zkontroluje nebo uvolní k výplatě. Pokud tyto role nejsou jasné, roste riziko neoprávněné změny, chybného výpočtu i nedohledatelného rozhodnutí.',
    },
    {
      type: 'definition',
      term: 'Rozhodná skutečnost',
      definition:
        'Událost nebo údaj, který může ovlivnit mzdu, daň, pojistné, evidenci nebo povinné hlášení, například nástup zaměstnance, změna mzdy, práce přesčas, nemoc nebo schválená odměna.',
    },
    {
      type: 'heading',
      text: 'Rozhodnutí, schválení, evidence a zpracování',
    },
    {
      type: 'list',
      items: [
        'Rozhodnutí určuje, že určitá skutečnost nastala nebo má být provedena.',
        'Schválení potvrzuje, že rozhodnutí učinila oprávněná osoba.',
        'Evidence zachycuje údaj ve zdrojovém nebo personálním systému.',
        'Mzdové zpracování převádí ověřený údaj do konkrétní mzdové položky a navazujících výstupů.',
        'Kontrola ověřuje úplnost, věcnou správnost a vazbu výsledku na podklad.',
      ],
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Jedna osoba může v malé organizaci zastávat více rolí, ale jednotlivé kroky musí zůstat rozlišitelné a dohledatelné.',
    },
    {
      type: 'heading',
      text: 'Zaměstnanec a vedoucí zaměstnanec',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec poskytuje a aktualizuje údaje, které je povinen nebo oprávněn doložit, například údaje pro evidenci, daňové nároky nebo oznámení změny. Vedoucí zaměstnanec typicky potvrzuje pracovní výkon, docházku, přesčasy, odměny nebo jiné skutečnosti v rozsahu své pravomoci. Ani jeden z nich však nemá automaticky oprávnění měnit data přímo v mzdovém systému.',
    },
    {
      type: 'heading',
      text: 'HR a personální agenda',
    },
    {
      type: 'paragraph',
      text: 'Personalista nebo HR obvykle zakládá a mění údaje o pracovním vztahu, připravuje pracovněprávní dokumenty a předává mzdové účtárně informace o nástupu, změně nebo skončení. Mzdová účetní musí ověřit, zda je podklad úplný, účinný pro správné období a schválený osobou, která je k tomu oprávněná.',
    },
    {
      type: 'heading',
      text: 'Role mzdové účetní',
    },
    {
      type: 'list',
      items: [
        'přebírá a třídí mzdové podklady',
        'kontroluje jejich úplnost a vazbu na zaměstnance a období',
        'aplikuje pravidla platná pro zpracovávané období',
        'provádí mzdové, daňové a pojistné zpracování',
        'upozorňuje na nesoulad nebo neobvyklý výsledek',
        'připravuje evidenční, platební a ohlašovací výstupy',
        'zachovává kontrolní stopu a chrání citlivé údaje',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Technické provedení výpočtu nedává mzdové účetní oprávnění sama přiznat nebo zamítnout odměnu, přesčas, náhradu ani jiný nárok, pokud o něm má rozhodnout jiná oprávněná osoba.',
    },
    {
      type: 'heading',
      text: 'Finance, oprávněná osoba a externí dodavatel',
    },
    {
      type: 'paragraph',
      text: 'Finanční nebo účetní oddělení zpravidla navazuje zaúčtováním, přípravou plateb a kontrolou souhrnných částek. Oprávněná osoba zaměstnavatele schvaluje rozhodnutí a výstupy v rozsahu interních pravidel. Externí zpracovatel může mzdy technicky a odborně zpracovat, ale zaměstnavatel musí nadále zajistit správné podklady, zákonné povinnosti, bezpečné předávání údajů a kontrolu výsledků.',
    },
    {
      type: 'heading',
      text: 'Správce systému a přístup k údajům',
    },
    {
      type: 'paragraph',
      text: 'Správce mzdového nebo docházkového systému zajišťuje technickou dostupnost, oprávnění a změnové záznamy. Technická role sama o sobě neznamená potřebu číst všechny mzdové údaje. Přístup má odpovídat pracovnímu účelu a má být omezen na nezbytný rozsah.',
    },
    {
      type: 'heading',
      text: 'Eskalace nejasného případu',
    },
    {
      type: 'list',
      items: [
        'zaznamenat, co je neúplné nebo rozporné',
        'pozastavit pouze dotčenou položku nebo případ, pokud lze ostatní zpracování bezpečně dokončit',
        'vyžádat doplnění od vlastníka podkladu',
        'předat rozhodnutí osobě s odpovídající pravomocí',
        'po doplnění ověřit účinnost a období',
        'zaznamenat konečné rozhodnutí a způsob zpracování',
      ],
    },
    {
      type: 'example',
      title: 'Odměna oznámená po uzávěrce',
      situation:
        'Vedoucí zaměstnanec po uzávěrce pošle požadavek na mimořádnou odměnu, ale není doloženo schválení osoby oprávněné odměnu přiznat.',
      solution:
        'Mzdová účetní požadavek zaznamená, ověří zaměstnance a období, vyžádá oprávněné schválení a sama nerozhodne o přiznání ani zamítnutí. Podle fáze zpracování se odměna zahrne do standardního nebo řízeného opravného procesu. Součástí výsledku musí být dohledatelný podklad a schválení.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'mzdová účetní sama doplní chybějící rozhodnutí',
        'vedoucí schvaluje položku mimo rozsah své pravomoci',
        'externímu dodavateli jsou předány neúplné nebo neověřené údaje',
        'správce systému má zbytečně široký přístup k osobním údajům',
        'schválení proběhne pouze ústně a není dohledatelné',
        'není určeno, kdo odpovídá za konečnou kontrolu a odeslání výstupů',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzdový proces rozlišuje vznik skutečnosti, schválení, evidenci, zpracování a kontrolu.',
        'Mzdová účetní zpracovává ověřené podklady, ale nenahrazuje rozhodnutí oprávněných osob.',
        'Externí zpracování ani software neodstraňují odpovědnost zaměstnavatele za vstupy a povinnosti.',
        'Přístup k mzdovým údajům má odpovídat účelu a pracovní roli.',
        'Nejasný případ se vrací k doplnění nebo eskaluje a celý postup musí být dohledatelný.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'payroll-roles-card-01',
      front: 'Jaký je rozdíl mezi schválením a mzdovým zpracováním?',
      back: 'Schválení potvrzuje rozhodnutí oprávněné osoby. Mzdové zpracování převádí ověřené rozhodnutí do mzdy a souvisejících výstupů.',
      explanation:
        'Osoba, která technicky zpracovává mzdu, nemusí mít pravomoc rozhodnout o samotném nároku.',
      skillIds: ['payroll-role-boundaries'],
    },
    {
      id: 'payroll-roles-card-02',
      front: 'Může mzdová účetní sama přiznat mimořádnou odměnu?',
      back: 'Ne, pokud rozhodnutí o odměně náleží jiné oprávněné osobě. Mzdová účetní může pouze zpracovat řádně schválený podklad.',
      explanation:
        'Tím se odděluje rozhodovací pravomoc od technického a odborného zpracování.',
      skillIds: ['payroll-role-accountability'],
    },
    {
      id: 'payroll-roles-card-03',
      front: 'Zbavuje externí zpracovatel zaměstnavatele odpovědnosti?',
      back: 'Ne. Zaměstnavatel musí zajistit správné podklady, plnění povinností, bezpečné předání údajů a kontrolu výstupů.',
      explanation:
        'Externí dodavatel vykonává sjednané zpracování, ale nenahrazuje zaměstnavatele jako nositele pracovněprávních a veřejnoprávních povinností.',
      skillIds: ['payroll-role-accountability'],
    },
    {
      id: 'payroll-roles-card-04',
      front: 'Co udělat s nejasným nebo neschváleným mzdovým vstupem?',
      back: 'Zaznamenat problém, vyžádat doplnění a eskalovat rozhodnutí oprávněné osobě.',
      explanation:
        'Chybějící rozhodnutí se nesmí nahrazovat odhadem mzdové účetní.',
      skillIds: ['payroll-escalation'],
    },
  ],
  exercises: [
    {
      id: 'payroll-roles-exercise-01',
      type: 'single_choice',
      prompt:
        'Kdo má rozhodnout o přiznání mimořádné odměny, pokud interní pravidla tuto pravomoc svěřují řediteli?',
      options: [
        { id: 'a', text: 'Mzdová účetní podle vlastního uvážení.' },
        { id: 'b', text: 'Ředitel nebo jím oprávněná osoba.' },
        { id: 'c', text: 'Správce mzdového systému.' },
        { id: 'd', text: 'Banka provádějící výplatu.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-role-accountability'],
      explanation:
        'Mzdová účetní odměnu zpracuje až na základě rozhodnutí osoby s příslušnou pravomocí.',
      commonMistake:
        'Zaměnit technickou možnost zadat položku do systému za oprávnění rozhodnout o nároku.',
    },
    {
      id: 'payroll-roles-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které činnosti typicky patří do role mzdové účetní?',
      options: [
        { id: 'check', text: 'Kontrola úplnosti mzdových podkladů.' },
        { id: 'calculate', text: 'Zpracování mzdy, daně a pojistného.' },
        { id: 'invent', text: 'Domýšlení chybějící docházky.' },
        { id: 'warn', text: 'Upozornění na nesoulad nebo výjimku.' },
        { id: 'grant', text: 'Samostatné přiznání odměny bez schválení.' },
      ],
      correctOptionIds: ['check', 'calculate', 'warn'],
      skillIds: ['payroll-role-boundaries'],
      explanation:
        'Mzdová účetní kontroluje a zpracovává ověřené vstupy, ale nevytváří chybějící skutečnosti ani nenahrazuje rozhodovací pravomoc.',
      commonMistake:
        'Považovat mzdovou účetní za osobu, která může sama doplnit nebo schválit libovolný vstup.',
    },
    {
      id: 'payroll-roles-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď správný postup při neschválené odměně.',
      steps: [
        { id: 'record', text: 'Zaznamenat přijatý požadavek.' },
        {
          id: 'verify',
          text: 'Ověřit zaměstnance, období a chybějící schválení.',
        },
        { id: 'escalate', text: 'Vyžádat rozhodnutí oprávněné osoby.' },
        { id: 'process', text: 'Po schválení položku mzdově zpracovat.' },
        { id: 'retain', text: 'Uchovat podklad a kontrolní stopu.' },
      ],
      correctOrder: ['record', 'verify', 'escalate', 'process', 'retain'],
      skillIds: ['payroll-escalation'],
      explanation: 'Položka se zpracuje až po ověření a oprávněném rozhodnutí.',
      commonMistake:
        'Nejprve položku vyplatit a schválení doplňovat až zpětně.',
    },
    {
      id: 'payroll-roles-exercise-04',
      type: 'single_choice',
      prompt:
        'Správce systému potřebuje opravit technickou chybu. Jaký přístup k mzdovým údajům má dostat?',
      options: [
        { id: 'a', text: 'Automaticky neomezený přístup ke všem údajům.' },
        {
          id: 'b',
          text: 'Pouze rozsah nezbytný pro konkrétní technický účel.',
        },
        {
          id: 'c',
          text: 'Přístup k údajům rodinných příslušníků všech zaměstnanců.',
        },
        { id: 'd', text: 'Možnost měnit mzdy bez záznamu.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-role-boundaries'],
      explanation:
        'Oprávnění má odpovídat pracovnímu účelu a nemá být širší, než je nezbytné.',
      commonMistake:
        'Předpokládat, že technická správa systému vyžaduje trvalý přístup ke všem datům.',
    },
    {
      id: 'payroll-roles-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá předání nejasného případu osobě s vyšší nebo příslušnou rozhodovací pravomocí?',
      acceptedAnswers: ['eskalace', 'eskalovat'],
      ignoreDiacritics: true,
      skillIds: ['payroll-escalation'],
      explanation:
        'Eskalace znamená předání případu osobě nebo roli, která má pravomoc rozhodnout.',
      commonMistake:
        'Pokusit se nejasnost vyřešit odhadem bez příslušného oprávnění.',
    },
    {
      id: 'payroll-roles-exercise-06',
      type: 'single_choice',
      prompt: 'Které tvrzení o externím zpracování mezd je správné?',
      options: [
        {
          id: 'a',
          text: 'Zaměstnavatel už nemusí kontrolovat podklady ani výstupy.',
        },
        {
          id: 'b',
          text: 'Externí dodavatel může zpracovat mzdy, ale zaměstnavatel musí zajistit správné vstupy, povinnosti a kontrolu.',
        },
        {
          id: 'c',
          text: 'Externí dodavatel může libovolně měnit pracovněprávní údaje.',
        },
        {
          id: 'd',
          text: 'Externí zpracování ruší potřebu chránit osobní údaje.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-role-accountability'],
      explanation:
        'Přenesení technického zpracování neodstraňuje povinnosti zaměstnavatele vůči zaměstnancům a institucím.',
      commonMistake: 'Považovat outsourcing za úplný přenos odpovědnosti.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatelé',
      url: 'https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/zamestnavatele',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Základní příručka k ochraně údajů',
      url: 'https://uoou.gov.cz/verejnost/zakladni-prirucka-k-ochrane-udaju',
      kind: 'official',
    },
    {
      title: 'MPSV – Jednotné měsíční hlášení zaměstnavatele',
      url: 'https://jmhz.mpsv.cz/',
      kind: 'official',
    },
  ],
})
