import { defineLessonContent } from '../define'

export const taxInsuranceOnboardingContent = defineLessonContent({
  moduleId: 'employee-onboarding',
  skillIds: [
    'onboarding-tax-documents',
    'onboarding-health-documents',
    'onboarding-social-documents',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Daňové, zdravotní a sociální podklady při nástupu zaměstnance ověřené podle pravidel Finanční správy, ČSSZ, zdravotního pojištění a českých předpisů pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Tři oddělené oblasti podkladů',
    },
    {
      type: 'paragraph',
      text: 'Při nástupu zaměstnance se pracovněprávní dokumentace doplňuje o podklady pro daň, zdravotní pojištění a sociální zabezpečení. Tyto oblasti se nesmí směšovat. Každá má vlastní účel, údaje, doklady a rozhodovací pravidla.',
    },
    {
      type: 'heading',
      text: 'Daňové podklady',
    },
    {
      type: 'list',
      items: [
        'Prohlášení poplatníka k dani, pokud je zaměstnanec činí',
        'údaje potřebné pro určení daňového režimu',
        'doklady k uplatňovaným slevám',
        'doklady k daňovému zvýhodnění na děti',
        'informace o souběhu příjmů významná pro správné použití Prohlášení',
        'případné potvrzení od předchozího zaměstnavatele pro navazující roční procesy',
      ],
    },
    {
      type: 'definition',
      term: 'Prohlášení poplatníka',
      definition:
        'Daňový dokument, jehož prostřednictvím zaměstnanec u plátce za splnění podmínek uplatňuje měsíční daňové slevy a daňové zvýhodnění.',
    },
    {
      type: 'paragraph',
      text: 'Prohlášení může být učiněno v listinné nebo přípustné elektronické podobě. Mzdová účetní musí ověřit osobu, zdaňovací období, datum, uplatňované nároky a to, že dokument odpovídá podmínkám pro konkrétního zaměstnavatele.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Prohlášení poplatníka nelze pro stejné období účinně uplatňovat současně u více plátců. Nejasný souběh musí být vyjasněn před použitím měsíčních slev.',
    },
    {
      type: 'heading',
      text: 'Doklady k daňovým nárokům',
    },
    {
      type: 'paragraph',
      text: 'Samotné zaškrtnutí nároku nemusí být vždy dostatečné. U jednotlivých slev a daňového zvýhodnění se kontroluje, zda zaměstnanec předložil předepsané nebo věcně potřebné doklady a zda nárok patří do správného období.',
    },
    {
      type: 'example',
      title: 'Nástup bez podepsaného Prohlášení',
      situation:
        'Zaměstnanec nastoupí a do uzávěrky nepředloží platné Prohlášení poplatníka.',
      solution:
        'Mzdová účetní nesmí měsíční slevy automaticky uplatnit. Zpracuje daň podle skutečně doloženého stavu a zaměstnance informuje o dalším možném postupu podle daňových pravidel.',
    },
    {
      type: 'heading',
      text: 'Zdravotní pojištění',
    },
    {
      type: 'list',
      items: [
        'identifikace zdravotní pojišťovny',
        'datum vzniku zaměstnání rozhodné pro oznámení',
        'údaje pojištěnce vyžadované pro přihlášení',
        'informace o případné kategorii, za kterou platí pojistné stát, je-li relevantní',
        'údaje o zahraničním nebo přeshraničním pojištění, pokud se případ týká jiné soustavy',
        'podklad pro případnou výjimku z minimálního vyměřovacího základu',
      ],
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní musí znát příslušnou zdravotní pojišťovnu a správné datum nástupu. U cizinců nebo přeshraničních pracovníků nesmí automaticky předpokládat účast v českém systému; vyžádá si příslušné posouzení a dokumentaci.',
    },
    {
      type: 'example',
      title: 'Chybějící zdravotní pojišťovna',
      situation:
        'Zaměstnanec předal pracovní smlouvu a daňové prohlášení, ale neuvedl zdravotní pojišťovnu.',
      solution:
        'Mzdová účetní údaj neodhadne podle minulého zaměstnání ani podle pojišťovny rodinného příslušníka. Vyžádá doplnění od zaměstnance a zaznamená, že pojistný podklad není úplný.',
    },
    {
      type: 'heading',
      text: 'Sociální zabezpečení a evidence zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Pro evidenci zaměstnance jsou potřebné identifikační údaje osoby, údaje o zaměstnavateli a konkrétním zaměstnání, den nástupu, typ pracovního vztahu a další položky požadované registračním procesem. Každé souběžné zaměstnání musí být správně rozlišeno.',
    },
    {
      type: 'list',
      items: [
        'identifikační údaje zaměstnance',
        'státní občanství a místo narození v požadovaném rozsahu',
        'den nástupu nebo předpokládaný den nástupu',
        'typ a identifikace zaměstnání',
        'údaje o zaměstnavateli a mzdové účtárně',
        'údaje potřebné pro REGZEC a navazující JMHZ',
        'případné zahraniční identifikátory nebo zvláštní dokumenty',
      ],
    },
    {
      type: 'heading',
      text: 'Podklady nejsou totéž co výpočet',
    },
    {
      type: 'paragraph',
      text: 'Tato fáze řeší úplnost vstupů. Samotný výpočet daně a pojistného patří do navazujících modulů. Mzdová účetní při nástupu připraví správnou klasifikaci a evidenci, ale nepoužívá neověřené sazby nebo limity.',
    },
    {
      type: 'heading',
      text: 'Souběh zaměstnání',
    },
    {
      type: 'paragraph',
      text: 'Jeden zaměstnanec může mít více vztahů u stejného nebo různých zaměstnavatelů. Daňové prohlášení, účast na pojištění a registrace se posuzují podle konkrétních vztahů a pravidel. Nelze bez kontroly přenést výsledek z jednoho vztahu na druhý.',
    },
    {
      type: 'heading',
      text: 'Kontrolní matice podkladů',
    },
    {
      type: 'list',
      items: [
        'Daň: dokument, období, podpis nebo elektronické potvrzení, nároky a doklady.',
        'Zdravotní pojištění: pojišťovna, datum nástupu, kategorie a případné přeshraniční dokumenty.',
        'Sociální zabezpečení: identita, zaměstnání, datum nástupu a registrační údaje.',
        'Všechny oblasti: shoda jména, identifikátorů, pracovního vztahu a účinnosti.',
      ],
    },
    {
      type: 'example',
      title: 'Rozporné datum nástupu',
      situation:
        'Pracovní smlouva uvádí nástup 1. října, ale daňový formulář a personální zadání uvádějí 2. října.',
      solution:
        'Mzdová účetní vychází z pracovněprávního podkladu a nesoulad před zpracováním vyjasní. Registrační, daňové a pojistné údaje musí používat správné rozhodné datum.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'uplatnit daňové slevy bez platného Prohlášení',
        'neověřit souběžné Prohlášení u jiného plátce',
        'odhadnout zdravotní pojišťovnu',
        'zaměnit kategorii státního pojištěnce za automatickou výjimku pro všechny účely',
        'použít registrační údaje jiného pracovního vztahu',
        'smíchat podklady pro daň, zdravotní a sociální pojištění do jednoho neurčitého stavu',
        'provést výpočet dříve, než jsou vstupy úplné',
      ],
    },
    {
      type: 'summary',
      items: [
        'Daňové, zdravotní a sociální podklady jsou tři samostatné oblasti.',
        'Daňové slevy a zvýhodnění se používají pouze podle platného Prohlášení a doložených nároků.',
        'Zdravotní pojišťovna a pojistný status se nesmí odhadovat.',
        'Registrace sociálního zabezpečení vyžaduje přesnou identitu a vazbu na konkrétní zaměstnání.',
        'Rozpory v datech se vyjasňují před výpočtem a podáním.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'tax-insurance-onboarding-card-01',
      front: 'K čemu slouží Prohlášení poplatníka?',
      back: 'K uplatnění měsíčních daňových slev a daňového zvýhodnění u plátce za splnění podmínek.',
      explanation:
        'Bez platného Prohlášení se měsíční nároky automaticky nepoužijí.',
      skillIds: ['onboarding-tax-documents'],
    },
    {
      id: 'tax-insurance-onboarding-card-02',
      front: 'Lze zdravotní pojišťovnu zaměstnance odhadnout?',
      back: 'Ne. Musí být ověřena z oprávněného podkladu.',
      explanation: 'Chybné přihlášení ovlivní evidenci i platby pojistného.',
      skillIds: ['onboarding-health-documents'],
    },
    {
      id: 'tax-insurance-onboarding-card-03',
      front:
        'Co je zásadní pro registraci zaměstnance u sociálního zabezpečení?',
      back: 'Přesné identifikační údaje, konkrétní zaměstnání a správný den nástupu.',
      explanation: 'Souběžná zaměstnání musí být evidována samostatně.',
      skillIds: ['onboarding-social-documents'],
    },
    {
      id: 'tax-insurance-onboarding-card-04',
      front: 'Patří výpočet pojistného do kontroly nástupních dokumentů?',
      back: 'Nejdříve se ověřuje úplnost a klasifikace vstupů; samotný výpočet navazuje později.',
      explanation:
        'Bez správných podkladů nelze spolehlivě použít sazby ani pravidla.',
      skillIds: [
        'onboarding-tax-documents',
        'onboarding-health-documents',
        'onboarding-social-documents',
      ],
    },
  ],
  exercises: [
    {
      id: 'tax-insurance-onboarding-exercise-01',
      type: 'multiple_choice',
      prompt: 'Které podklady patří do daňové části nástupu?',
      options: [
        {
          id: 'declaration',
          text: 'Prohlášení poplatníka.',
        },
        {
          id: 'discounts',
          text: 'Doklady k uplatňovaným slevám.',
        },
        {
          id: 'children',
          text: 'Doklady k daňovému zvýhodnění.',
        },
        {
          id: 'insurer',
          text: 'Kód zdravotní pojišťovny.',
        },
        {
          id: 'regzec',
          text: 'Technický identifikátor podání REGZEC.',
        },
      ],
      correctOptionIds: ['declaration', 'discounts', 'children'],
      skillIds: ['onboarding-tax-documents'],
      explanation:
        'Prohlášení a doklady k daňovým nárokům patří do daňové oblasti.',
      commonMistake:
        'Smíchat daňové podklady s údaji zdravotního a sociálního pojištění.',
    },
    {
      id: 'tax-insurance-onboarding-exercise-02',
      type: 'single_choice',
      prompt:
        'Zaměstnanec nepředložil platné Prohlášení poplatníka. Jak se zachází s měsíčními slevami?',
      options: [
        {
          id: 'a',
          text: 'Automaticky se uplatní.',
        },
        {
          id: 'b',
          text: 'Neuplatní se bez platného podkladu.',
        },
        {
          id: 'c',
          text: 'Určí je vedoucí.',
        },
        {
          id: 'd',
          text: 'Použijí se podle minulého zaměstnavatele.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['onboarding-tax-documents'],
      explanation:
        'Měsíční nároky se uplatňují pouze na základě platného daňového podkladu.',
      commonMistake:
        'Předpokládat, že základní sleva se uplatňuje automaticky bez Prohlášení.',
    },
    {
      id: 'tax-insurance-onboarding-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kontrolu daňových a pojistných podkladů.',
      steps: [
        {
          id: 'identity',
          text: 'Ověřit identitu a konkrétní pracovní vztah.',
        },
        {
          id: 'tax',
          text: 'Zkontrolovat Prohlášení a daňové doklady.',
        },
        {
          id: 'health',
          text: 'Ověřit zdravotní pojišťovnu a pojistný status.',
        },
        {
          id: 'social',
          text: 'Připravit údaje pro evidenci zaměstnance a REGZEC.',
        },
        {
          id: 'reconcile',
          text: 'Porovnat data, účinnost a odstranit rozpory.',
        },
      ],
      correctOrder: ['identity', 'tax', 'health', 'social', 'reconcile'],
      skillIds: [
        'onboarding-tax-documents',
        'onboarding-health-documents',
        'onboarding-social-documents',
      ],
      explanation:
        'Všechny oblasti se vážou na ověřenou osobu a pracovní vztah a na konci se vzájemně porovnají.',
      commonMistake: 'Zpracovat každou oblast s jiným datem nástupu.',
    },
    {
      id: 'tax-insurance-onboarding-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec neuvedl zdravotní pojišťovnu. Co má mzdová účetní udělat?',
      options: [
        {
          id: 'a',
          text: 'Vybrat největší pojišťovnu.',
        },
        {
          id: 'b',
          text: 'Vyžádat ověřený údaj od zaměstnance.',
        },
        {
          id: 'c',
          text: 'Použít pojišťovnu předchozího kolegy.',
        },
        {
          id: 'd',
          text: 'Oznámení vůbec neřešit.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['onboarding-health-documents'],
      explanation:
        'Příslušná zdravotní pojišťovna je rozhodný údaj a nesmí být odhadnuta.',
      commonMistake:
        'Považovat pravděpodobnost za dostatečný podklad pro veřejnoprávní oznámení.',
    },
    {
      id: 'tax-insurance-onboarding-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá registrační podání používané pro evidenci zaměstnance v systému JMHZ?',
      acceptedAnswers: ['REGZEC', 'regzec'],
      ignoreDiacritics: true,
      skillIds: ['onboarding-social-documents'],
      explanation:
        'Registrace zaměstnance se provádí prostřednictvím podání REGZEC.',
      commonMistake: 'Uvést JMHZ jako název konkrétního registračního podání.',
    },
    {
      id: 'tax-insurance-onboarding-exercise-06',
      type: 'single_choice',
      prompt:
        'Pracovní smlouva uvádí nástup 1. října, personální formulář 2. října. Jaký je správný postup?',
      options: [
        {
          id: 'a',
          text: 'Použít v každé evidenci jiné datum.',
        },
        {
          id: 'b',
          text: 'Rozpor vyjasnit podle pracovněprávního podkladu před registrací a výpočtem.',
        },
        {
          id: 'c',
          text: 'Použít pozdější datum bez kontroly.',
        },
        {
          id: 'd',
          text: 'Použít datum první výplaty.',
        },
      ],
      correctOptionId: 'b',
      skillIds: [
        'onboarding-tax-documents',
        'onboarding-health-documents',
        'onboarding-social-documents',
      ],
      explanation:
        'Všechny navazující evidence musí vycházet ze správného rozhodného data.',
      commonMistake:
        'Ponechat rozpor a vytvořit nekonzistentní podání a mzdový záznam.',
    },
  ],
  sources: [
    {
      title: 'Finanční správa – Zaměstnanci a zaměstnavatelé',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title: 'Finanční správa – Prohlášení poplatníka pro rok 2026',
      url: 'https://financnisprava.gov.cz/assets/cs/prilohy/dt-upozorneni-mf-k-tiskopisum/5457_26.pdf',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidence zaměstnanců',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'VZP – Oznamovací povinnost zaměstnavatele',
      url: 'https://www.vzp.cz/platci/informace/zamestnavatel/povinnosti-zamestnavatele/oznamovaci-povinnost',
      kind: 'official',
    },
    {
      title: 'Zákon č. 586/1992 Sb., o daních z příjmů – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1992/586',
      kind: 'official',
    },
  ],
})
