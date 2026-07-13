import { defineLessonContent } from '../define'

export const payrollMonthCycleContent = defineLessonContent({
  moduleId: 'payroll-foundations',
  skillIds: [
    'payroll-cycle-sequence',
    'payroll-cutoff-management',
    'payroll-output-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-04-01',
    verifiedAt: '2026-07-10',
    note: 'Obecný měsíční proces české mzdové agendy včetně návaznosti na registrační, evidenční a měsíční výstupy po zavedení JMHZ.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Mzdový měsíc jako řízený proces',
    },
    {
      type: 'paragraph',
      text: 'Mzdový měsíc není jeden výpočet spuštěný v programu. Jde o posloupnost navazujících kroků od převzetí změn a docházky přes kontrolu, výpočet a schválení až po platby, podání, účetní výstupy a archivaci.',
    },
    {
      type: 'definition',
      term: 'Uzávěrka vstupů',
      definition:
        'Interně stanovený okamžik, do kterého mají být dodány standardní podklady pro běžné zpracování daného období.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Uzávěrka vstupů není totéž co výplatní termín, uzavření výpočtu ani zákonné termíny plateb a podání.',
    },
    {
      type: 'heading',
      text: '1. Příprava období a personální změny',
    },
    {
      type: 'paragraph',
      text: 'Na začátku cyklu se připraví nové období, ověří kalendář a převezmou se nástupy, skončení, změny pracovních vztahů, mzdových podmínek a dalších trvalých údajů. Změna musí být přiřazena správnému datu účinnosti.',
    },
    {
      type: 'heading',
      text: '2. Docházka, nepřítomnosti a mimořádné vstupy',
    },
    {
      type: 'list',
      items: [
        'odpracované směny a hodiny',
        'práce přesčas a zvláštní režimy práce',
        'dovolená a překážky v práci',
        'dočasná pracovní neschopnost a další nepřítomnosti',
        'odměny, osobní ohodnocení a jiné mimořádné složky',
        'benefity, srážky a opravy minulých období',
      ],
    },
    {
      type: 'heading',
      text: '3. Kontrola úplnosti a uzávěrka vstupů',
    },
    {
      type: 'paragraph',
      text: 'Před výpočtem se kontroluje, zda jsou všechny očekávané podklady doručené, schválené a vzájemně konzistentní. Uzávěrka neznamená, že pozdější podklad přestane existovat. Určuje však, zda jej lze ještě zahrnout do standardního běhu, nebo musí projít řízeným opravným postupem.',
    },
    {
      type: 'heading',
      text: '4. Předběžný výpočet',
    },
    {
      type: 'paragraph',
      text: 'Předběžný výpočet převádí ověřené vstupy do hrubé mzdy, náhrad, daně, pojistného, srážek a částky k výplatě. Výsledek zatím není automaticky připravený k odeslání. Slouží jako podklad pro individuální a souhrnné kontroly.',
    },
    {
      type: 'heading',
      text: '5. Individuální a souhrnné kontroly',
    },
    {
      type: 'list',
      items: [
        'porovnání zaměstnance s předchozím obdobím',
        'kontrola neobvyklých nebo nulových částek',
        'vazba mzdových položek na docházku a podklady',
        'kontrola nástupů, skončení a změn',
        'souhrn hrubých mezd, daně, pojistného a částek k výplatě',
        'kontrola zaměstnanců nebo vztahů chybějících v očekávaném výstupu',
      ],
    },
    {
      type: 'heading',
      text: '6. Schválení, výplata a další výstupy',
    },
    {
      type: 'paragraph',
      text: 'Po odstranění výjimek se výsledky schválí podle interního procesu. Následují výplatní doklady, bankovní podklady, odvody, evidenční a ohlašovací výstupy, údaje JMHZ a podklady pro účetnictví. Všechny tyto výstupy musí vycházet ze stejné schválené verze mzdových výsledků.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Výplata zaměstnancům není posledním krokem. Po ní stále následují nebo se kontrolují odvody, podání, zaúčtování, evidence a archivace.',
    },
    {
      type: 'heading',
      text: '7. Archivace a uzavření období',
    },
    {
      type: 'paragraph',
      text: 'Po dokončení výstupů se uloží podklady, schválení, rekapitulace a záznamy o kontrolách. Období má být uzavřeno tak, aby bylo možné později vysvětlit původ každé významné položky a bezpečně zpracovat případnou opravu.',
    },
    {
      type: 'heading',
      text: 'Oprava před výplatou a po uzavření období',
    },
    {
      type: 'paragraph',
      text: 'Před výplatou lze při zachování kontroly obvykle opravit výpočet a znovu vytvořit navazující výstupy. Po uzavření období může být nutné opravit více evidencí, plateb nebo podání. Čím později chyba vznikne nebo je zjištěna, tím širší bývá její dopad.',
    },
    {
      type: 'example',
      title: 'Modelový mzdový měsíc malé firmy',
      situation:
        'Firma řeší jednoho nového zaměstnance, jednu nemoc, schválený přesčas, mimořádnou odměnu a podklad k odměně doručený až po uzávěrce.',
      solution:
        'Nástup, nemoc a přesčas se po kontrole zařadí do standardního zpracování. U odměny se ověří schválení a fáze procesu. Pokud ještě nebyly výstupy schváleny, lze výpočet řízeně aktualizovat. Pokud je období uzavřené, odměna se řeší opravným postupem včetně dopadu do všech navazujících výstupů. Ostatní zaměstnance lze zpracovávat dál, pokud pozastavený případ neovlivňuje jejich výsledky.',
    },
    {
      type: 'heading',
      text: 'Časté procesní chyby',
    },
    {
      type: 'list',
      items: [
        'spuštění výpočtu před kontrolou vstupů',
        'smíchání neověřených a schválených dat',
        'odeslání bankovního souboru z jiné verze než rekapitulace',
        'považování výplaty za konec celého procesu',
        'nejasné vlastnictví jednotlivých kontrolních kroků',
        'oprava mzdy bez aktualizace hlášení nebo účetních podkladů',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzdový měsíc je posloupnost řízených a navazujících kroků.',
        'Kontrola vstupů musí předcházet výpočtu.',
        'Předběžný výpočet není totéž co schválený výsledek.',
        'Výplata, odvody, hlášení, účetnictví a archivace musí vycházet ze stejné verze dat.',
        'Pozdní vstup se řeší podle fáze procesu a jeho dopady musí být dohledatelné.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'payroll-month-cycle-card-01',
      front: 'Co je uzávěrka vstupů?',
      back: 'Interní okamžik, do kterého mají být dodány standardní podklady pro běžné zpracování období.',
      explanation:
        'Pozdější podklad se neignoruje, ale může vyžadovat jiný způsob zpracování.',
      skillIds: ['payroll-cutoff-management'],
    },
    {
      id: 'payroll-month-cycle-card-02',
      front: 'Je předběžný výpočet připravený k výplatě?',
      back: 'Ne. Nejprve musí projít individuálními a souhrnnými kontrolami a schválením.',
      explanation: 'Výpočet je mezikrok, nikoli automaticky konečný výsledek.',
      skillIds: ['payroll-output-control'],
    },
    {
      id: 'payroll-month-cycle-card-03',
      front: 'Končí mzdový proces odesláním čistých mezd?',
      back: 'Ne. Následují nebo se kontrolují odvody, podání, účetní výstupy, evidence a archivace.',
      explanation:
        'Mzdová agenda vytváří více navazujících výstupů než samotnou výplatu.',
      skillIds: ['payroll-cycle-sequence'],
    },
    {
      id: 'payroll-month-cycle-card-04',
      front: 'Co rozhoduje o způsobu zpracování pozdního vstupu?',
      back: 'Jeho úplnost, účinnost a fáze, ve které se mzdový proces nachází.',
      explanation:
        'Jiný postup se použije před výpočtem, před výplatou a po uzavření období.',
      skillIds: ['payroll-cutoff-management'],
    },
  ],
  exercises: [
    {
      id: 'payroll-month-cycle-exercise-01',
      type: 'multiple_choice',
      prompt:
        'Které kroky musí proběhnout po prvním výpočtu mezd a před definitivním uzavřením období?',
      options: [
        { id: 'a', text: 'Okamžitě smazat zdrojové podklady.' },
        { id: 'b', text: 'Provést věcné a součtové kontroly.' },
        { id: 'c', text: 'Archivovat období bez řešení odchylek.' },
        { id: 'd', text: 'Vyřešit zjištěné odchylky a znovu ověřit výstupy.' },
        { id: 'e', text: 'Považovat první výpočet za automaticky schválený.' },
      ],
      correctOptionIds: ['b', 'd'],
      skillIds: ['payroll-cycle-sequence'],
      explanation:
        'První výpočet je pracovní výstup, který musí projít kontrolou a vypořádáním odchylek.',
      commonMistake: 'Přeskočit kontrolní fázi a zaměnit výpočet za uzávěrku.',
    },
    {
      id: 'payroll-month-cycle-exercise-02',
      type: 'single_choice',
      prompt: 'K čemu primárně slouží předběžný výpočet?',
      options: [
        { id: 'a', text: 'K okamžitému odeslání peněz bez kontroly.' },
        {
          id: 'b',
          text: 'K vytvoření výsledků pro následnou kontrolu a schválení.',
        },
        { id: 'c', text: 'K nahrazení chybějících podkladů.' },
        { id: 'd', text: 'Pouze k archivaci.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-output-control'],
      explanation: 'Předběžný výpočet je pracovní výsledek určený ke kontrole.',
      commonMistake: 'Považovat první výpočet za automaticky konečný.',
    },
    {
      id: 'payroll-month-cycle-exercise-03',
      type: 'multiple_choice',
      prompt: 'Které kroky následují po výpočtu a před uzavřením období?',
      options: [
        { id: 'individual', text: 'Individuální kontroly zaměstnanců.' },
        { id: 'guess', text: 'Domyšlení chybějících vstupů.' },
        { id: 'summary', text: 'Souhrnné kontroly organizace.' },
        { id: 'approval', text: 'Schválení výsledků.' },
        { id: 'payments', text: 'Příprava plateb a povinných výstupů.' },
      ],
      correctOptionIds: ['individual', 'summary', 'approval', 'payments'],
      skillIds: ['payroll-cycle-sequence', 'payroll-output-control'],
      explanation:
        'Výpočet musí projít kontrolou a schválením, než se použije pro platby a další výstupy.',
      commonMistake: 'Přeskočit kontrolu a rovnou vytvářet bankovní soubor.',
    },
    {
      id: 'payroll-month-cycle-exercise-04',
      type: 'single_choice',
      prompt:
        'Odměna je doručena po uzávěrce vstupů, ale ještě před schválením výsledků. Co je správně?',
      options: [
        { id: 'a', text: 'Vždy ji ignorovat.' },
        { id: 'b', text: 'Vždy ji vyplatit bez kontroly.' },
        {
          id: 'c',
          text: 'Ověřit podklad, posoudit dopad a případně řízeně aktualizovat výpočet a kontroly.',
        },
        { id: 'd', text: 'Změnit ji na dovolenou.' },
      ],
      correctOptionId: 'c',
      skillIds: ['payroll-cutoff-management'],
      explanation:
        'Pozdní vstup lze před schválením zahrnout, pokud je ověřen a znovu se provedou dotčené kontroly.',
      commonMistake:
        'Považovat interní uzávěrku za důvod k ignorování správného podkladu.',
    },
    {
      id: 'payroll-month-cycle-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá pracovní termín, do kterého mají být dodány standardní podklady pro běžné zpracování?',
      acceptedAnswers: [
        'uzávěrka vstupů',
        'uzaverka vstupu',
        'uzávěrka',
        'uzaverka',
      ],
      ignoreDiacritics: true,
      skillIds: ['payroll-cutoff-management'],
      explanation:
        'Uzávěrka vstupů odděluje standardní sběr podkladů od pozdních změn.',
      commonMistake: 'Zaměnit uzávěrku vstupů za výplatní termín.',
    },
    {
      id: 'payroll-month-cycle-exercise-06',
      type: 'single_choice',
      prompt: 'Které tvrzení nejlépe popisuje opravu po uzavření období?',
      options: [
        {
          id: 'a',
          text: 'Stačí změnit jednu částku bez kontroly dalších výstupů.',
        },
        {
          id: 'b',
          text: 'Je nutné posoudit dopad do mzdy, plateb, evidencí, podání a účetních podkladů.',
        },
        { id: 'c', text: 'Oprava už není nikdy možná.' },
        { id: 'd', text: 'Oprava se provede pouze ústně.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-output-control'],
      explanation:
        'Po uzavření období může změna ovlivnit více již vytvořených výstupů.',
      commonMistake:
        'Opravit pouze čistou mzdu a zapomenout na související odvody a evidence.',
    },
  ],
  sources: [
    {
      title: 'MPSV – Jednotné měsíční hlášení zaměstnavatele',
      url: 'https://jmhz.mpsv.cz/',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Registrace zaměstnance',
      url: 'https://eportal.cssz.cz/web/portal/-/sluzby/registrace-zamestnance',
      kind: 'official',
    },
    {
      title: 'Finanční správa – Zaměstnanci a zaměstnavatelé',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele',
      kind: 'official',
    },
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
  ],
})
