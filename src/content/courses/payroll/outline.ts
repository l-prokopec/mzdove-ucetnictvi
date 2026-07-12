import { courseOutlineSchema } from '../../outline-schema'
import type {
  CourseOutline,
  OutlineLesson,
  OutlineLessonType,
  OutlineModule,
} from '../../../types/course-outline'

type LessonSeed = {
  id: string
  title: string
  description: string
  lessonType?: OutlineLessonType
  estimatedMinutes?: number
  hasWorkedExample?: boolean
  hasExercise?: boolean
  status?: 'planned' | 'available'
}

type ModuleSeed = Omit<OutlineModule, 'lessons' | 'finalTest'> & {
  lessons: LessonSeed[]
}

const lesson = (
  id: string,
  title: string,
  description: string,
  lessonType: OutlineLessonType = 'theory',
  hasWorkedExample = false,
  hasExercise = true,
  estimatedMinutes?: number,
): LessonSeed => ({
  id,
  title,
  description,
  lessonType,
  hasWorkedExample,
  hasExercise,
  estimatedMinutes,
})

const module = (seed: ModuleSeed): OutlineModule => ({
  ...seed,
  lessons: seed.lessons.map<OutlineLesson>((item, index, lessons) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    estimatedMinutes:
      item.estimatedMinutes ??
      (item.lessonType === 'case_study' || item.lessonType === 'worked_example'
        ? 30
        : 20),
    learningObjectives: [
      `Po dokončení lekce student dokáže ${item.description.charAt(0).toLocaleLowerCase('cs-CZ')}${item.description.slice(1)}`,
    ],
    prerequisites: index === 0 ? [] : [lessons[index - 1].id],
    lessonType: item.lessonType ?? 'theory',
    status: item.status ?? 'planned',
    hasWorkedExample: item.hasWorkedExample ?? false,
    hasExercise: item.hasExercise ?? true,
  })),
  finalTest: {
    id: `${seed.id}-test`,
    title: `Ověření modulu: ${seed.title}`,
    questionCount: seed.category === 'advanced' ? 12 : 10,
    passingScore: 80,
    includesCalculation: seed.plannedExamples.length > 0,
    skillsAssessed: seed.learningObjectives,
  },
})

const modules: OutlineModule[] = [
  module({
    id: 'payroll-foundations',
    title: 'Mzdová agenda a role mzdové účetní',
    description:
      'Orientace v účelu mzdové agendy, odpovědnostech, vstupních podkladech a měsíčním pracovním cyklu.',
    difficulty: 'beginner',
    estimatedMinutes: 130,
    prerequisites: [],
    learningObjectives: [
      'Popsat vstupy, kroky a výstupy běžného mzdového procesu.',
      'Rozlišit odpovědnost mzdové účetní, zaměstnance a vedoucího.',
      'Používat kontrolní stopu a bezpečně pracovat s citlivými údaji.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'payroll-purpose',
          'Co řeší mzdové účetnictví',
          'vymezit účel a hranice mzdové agendy',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'payroll-roles',
          'Role a odpovědnosti',
          'rozlišit role osob zapojených do zpracování mezd',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'payroll-inputs',
          'Vstupní mzdové podklady',
          'roztřídit pravidelné a mimořádné mzdové podklady',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'payroll-month-cycle',
          'Průběh mzdového měsíce',
          'seřadit kroky od uzávěrky vstupů po archivaci',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'payroll-control-trail',
          'Kontrolní stopa a čtyři oči',
          'navrhnout základní kontrolu zpracované mzdy',
          'practice',
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Převzetí neúplné docházky před uzávěrkou.',
      'Dohledání zdroje mimořádné odměny při kontrole.',
    ],
    plannedExamples: [],
    sourceTopics: [
      'Průřez mzdovou agendou',
      'Kontrolní a evidenční povinnosti',
    ],
  }),
  module({
    id: 'labour-law-basics',
    title: 'Pracovněprávní minimum',
    description:
      'Nezbytné pracovněprávní pojmy a zásady, které určují správné zařazení zaměstnance a jeho nároků.',
    difficulty: 'beginner',
    estimatedMinutes: 150,
    prerequisites: ['payroll-foundations'],
    learningObjectives: [
      'Rozpoznat základní pracovněprávní vztahy a závislou práci.',
      'Rozlišit zaměstnance, zaměstnavatele a vedoucího zaměstnance.',
      'Vyhodnotit, kdy je potřeba písemná forma nebo doručení dokumentu.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'dependent-work',
          'Závislá práce',
          'rozpoznat charakteristické znaky závislé práce',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'employment-parties',
          'Zaměstnanec a zaměstnavatel',
          'určit práva a základní povinnosti obou stran',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'labour-relations',
          'Druhy pracovněprávních vztahů',
          'odlišit pracovní poměr od dohod mimo pracovní poměr',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'equal-treatment',
          'Rovné zacházení a zákaz diskriminace',
          'identifikovat rizikové rozdíly v zacházení a odměňování',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'legal-acts-form',
          'Forma pracovněprávního jednání',
          'určit význam písemné formy, lhůt a doručování',
          'process',
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Posouzení znaků závislé práce u modelové spolupráce.',
      'Kontrola způsobu předání pracovněprávní písemnosti.',
    ],
    plannedExamples: [],
    sourceTopics: ['PDF kapitola 1 - Pracovněprávní základy'],
  }),
  module({
    id: 'employee-onboarding',
    title: 'Vznik pracovního poměru a nástup',
    description:
      'Pracovní smlouva, vstupní údaje a koordinovaný postup mzdové účtárny při nástupu zaměstnance.',
    difficulty: 'beginner',
    estimatedMinutes: 180,
    prerequisites: ['labour-law-basics'],
    learningObjectives: [
      'Zkontrolovat základní náležitosti pracovního vztahu před nástupem.',
      'Sestavit úplný checklist nástupních podkladů pro mzdovou agendu.',
      'Rozlišit údaje potřebné pro mzdu, daně a pojištění.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'employment-contract',
          'Pracovní smlouva',
          'zkontrolovat povinné a prakticky důležité údaje pracovní smlouvy',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'fixed-term-probation',
          'Doba určitá a zkušební doba',
          'rozlišit dobu trvání vztahu a význam zkušební doby',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'employee-personal-data',
          'Vstupní osobní a mzdové údaje',
          'vybrat údaje nezbytné pro založení zaměstnance v mzdové evidenci',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'tax-insurance-onboarding',
          'Daňové a pojistné podklady při nástupu',
          'roztřídit podklady pro daň, zdravotní a sociální pojištění',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'onboarding-notifications',
          'Ohlašovací kroky při nástupu',
          'sestavit posloupnost interních a vnějších oznámení',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'onboarding-checklist',
          'Kontrola nástupu zaměstnance',
          'provést úplnou kontrolu modelového nástupního spisu',
          'case_study',
          false,
          true,
          35,
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Nástup zaměstnance v průběhu kalendářního měsíce.',
      'Chybějící podklad k pojištění při založení zaměstnance.',
    ],
    plannedExamples: [
      'Poměrná základní mzda při nástupu v průběhu měsíce podle explicitně zadaných pracovních dnů.',
    ],
    sourceTopics: ['PDF kapitola 1 - Založení a vznik pracovního poměru'],
  }),
  module({
    id: 'employment-changes-termination',
    title: 'Změny a skončení pracovního poměru',
    description:
      'Změny pracovních podmínek, způsoby skončení a bezpečný výstupní proces z pohledu mzdové účtárny.',
    difficulty: 'intermediate',
    estimatedMinutes: 190,
    prerequisites: ['employee-onboarding'],
    learningObjectives: [
      'Promítnout změnu pracovních podmínek do mzdové evidence.',
      'Rozlišit hlavní způsoby skončení pracovního poměru.',
      'Připravit mzdové podklady a potvrzení při výstupu zaměstnance.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'employment-data-changes',
          'Změny pracovních a mzdových údajů',
          'určit účinnost změny a aktualizovat navazující evidenci',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'employment-transfer',
          'Převedení, přeložení a pracovní cesta',
          'odlišit změny místa nebo druhu výkonu práce',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'termination-methods',
          'Způsoby skončení pracovního poměru',
          'rozlišit dohodu, výpověď, okamžité zrušení a další způsoby',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'termination-date',
          'Rozhodný den skončení',
          'určit datum skončení a jeho dopad na poslední zpracování',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'severance-basics',
          'Odstupné a související plnění',
          'rozpoznat plnění vyžadující zvláštní mzdové posouzení',
          'worked_example',
          true,
        ),
        status: 'available',
      },
      {
        ...lesson(
          'offboarding-process',
          'Výstupní mzdový checklist',
          'připravit potvrzení, odhlášky a archivaci při skončení',
          'case_study',
          false,
          true,
          35,
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Skončení pracovního poměru uprostřed měsíce.',
      'Oprava poslední mzdy po dodatečně doručeném podkladu.',
    ],
    plannedExamples: [
      'Poměrná mzda v posledním měsíci zaměstnání.',
      'Modelové sestavení poslední hrubé mzdy včetně odstupného bez výpočtu odvodů.',
    ],
    sourceTopics: ['PDF kapitola 1 - Změny a skončení pracovního poměru'],
  }),
  module({
    id: 'work-agreements',
    title: 'DPP a DPČ',
    description:
      'Založení, evidence a mzdové zpracování dohod o pracích konaných mimo pracovní poměr.',
    difficulty: 'intermediate',
    estimatedMinutes: 170,
    prerequisites: ['labour-law-basics'],
    learningObjectives: [
      'Rozlišit DPP a DPČ podle jejich účelu a pracovního režimu.',
      'Zkontrolovat podklady a evidenci práce na dohodu.',
      'Identifikovat parametry potřebné pro daňové a pojistné posouzení dohody.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'dpp-purpose',
          'Dohoda o provedení práce',
          'popsat použití DPP a potřebné mzdové podklady',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'dpc-purpose',
          'Dohoda o pracovní činnosti',
          'popsat použití DPČ a potřebné mzdové podklady',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'agreement-comparison',
          'Rozdíly mezi DPP, DPČ a pracovním poměrem',
          'porovnat tři formy pracovněprávního vztahu',
          'practice',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'agreement-time-records',
          'Evidence pracovní doby u dohod',
          'zkontrolovat evidenci práce, odpočinku a překážek',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'agreement-tax-insurance-inputs',
          'Daňové a pojistné vstupy u dohod',
          'určit proměnné nutné pro správné posouzení odvodů',
          'worked_example',
          true,
        ),
        status: 'available',
      },
      {
        ...lesson(
          'agreement-lifecycle',
          'Nástup a skončení dohody',
          'sestavit proces založení, změny a ukončení dohody',
          'process',
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Souběh více pracovních vztahů u jednoho zaměstnavatele.',
      'Změna rozsahu práce vykonávané na dohodu.',
    ],
    plannedExamples: [
      'Odměna z dohody podle zadaného počtu hodin a hodinové sazby.',
      'Porovnání variant zdanění při explicitně zadaných podmínkách.',
    ],
    sourceTopics: [
      'PDF kapitola 1 - Dohody o pracích konaných mimo pracovní poměr',
    ],
  }),
  module({
    id: 'working-time',
    title: 'Pracovní doba a směnné režimy',
    description:
      'Rozvržení pracovní doby, směny, odpočinek a evidence jako základ pro správný mzdový vstup.',
    difficulty: 'intermediate',
    estimatedMinutes: 190,
    prerequisites: ['labour-law-basics'],
    learningObjectives: [
      'Číst rozvrh směn a rozlišit základní pracovní režimy.',
      'Zkontrolovat evidenci odpracované doby a odpočinku.',
      'Převést docházkové údaje na mzdové vstupy bez záměny kategorií.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'working-time-concepts',
          'Pracovní doba, směna a pracovní režim',
          'rozlišit základní pojmy pracovní doby',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'weekly-hours',
          'Stanovená a kratší pracovní doba',
          'určit sjednaný rozsah práce pro mzdové zpracování',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'shift-patterns',
          'Jednosměnný a vícesměnný provoz',
          'číst modelový rozvrh směn a jeho změny',
          'worked_example',
          true,
        ),
        status: 'available',
      },
      {
        ...lesson(
          'rest-breaks',
          'Přestávky a doba odpočinku',
          'odlišit započitatelné a nezapočitatelné části směny',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'work-time-records',
          'Evidence pracovní doby',
          'zkontrolovat povinné údaje evidence pro zpracování mzdy',
          'process',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'attendance-reconciliation',
          'Kontrola docházky proti rozvrhu',
          'najít rozdíly mezi plánem směn a skutečnou docházkou',
          'practice',
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Nesoulad mezi plánem směn a evidovanou docházkou.',
      'Kratší pracovní doba zaměstnance ve vícesměnném provozu.',
    ],
    plannedExamples: [
      'Fond pracovní doby podle explicitně zadaného rozvrhu.',
      'Součet odpracovaných hodin po odečtení nezapočitatelných přestávek.',
    ],
    sourceTopics: ['PDF kapitola 1 - Pracovní doba a doba odpočinku'],
  }),
  module({
    id: 'remuneration-basics',
    title: 'Mzda, plat a odměna z dohody',
    description:
      'Základní principy odměňování a rozlišení jednotlivých druhů plnění za práci.',
    difficulty: 'beginner',
    estimatedMinutes: 150,
    prerequisites: ['labour-law-basics'],
    learningObjectives: [
      'Rozlišit mzdu, plat a odměnu z dohody podle pracovního vztahu.',
      'Rozpoznat mzdové a nemzdové plnění.',
      'Určit způsob sjednání nebo stanovení odměny za práci.',
    ],
    category: 'core',
    lessons: [
      {
        ...lesson(
          'wage-salary-agreement',
          'Mzda, plat a odměna',
          'správně pojmenovat plnění podle zaměstnavatele a vztahu',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'remuneration-setting',
          'Sjednání, stanovení a určení odměny',
          'odlišit způsoby založení nároku na odměnu',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'wage-components',
          'Pevné a pohyblivé složky mzdy',
          'roztřídit základní, výkonové a mimořádné složky',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'minimum-wage-guaranteed-salary',
          'Minimální mzda a zaručený plat',
          'rozlišit minimální mzdu a zaručený plat a promítnout je do kontroly odměny',
          'worked_example',
          true,
        ),
        status: 'available',
      },
      {
        ...lesson(
          'non-wage-benefits',
          'Plnění nemzdové povahy',
          'rozpoznat položky, které nelze automaticky zahrnout do mzdy',
        ),
        status: 'available',
      },
      {
        ...lesson(
          'payday-payment',
          'Splatnost a výplata',
          'popsat kontrolní kroky před předáním výplaty',
          'process',
        ),
        status: 'available',
      },
    ],
    practicalScenarios: [
      'Zařazení osobního ohodnocení a mimořádné odměny.',
      'Rozlišení mzdového plnění a náhrady výdajů.',
    ],
    plannedExamples: [
      'Součet pevné a pohyblivé složky mzdy z explicitně zadaných částek.',
    ],
    sourceTopics: ['PDF kapitola 2 - Základy odměňování'],
  }),
  module({
    id: 'employee-benefits-other-payments',
    title: 'Zaměstnanecké benefity a ostatní plnění',
    description:
      'Klasifikace, ocenění a základní mzdové posouzení peněžních i nepeněžních benefitů a dalších plnění zaměstnavatele.',
    difficulty: 'intermediate',
    estimatedMinutes: 220,
    prerequisites: ['remuneration-basics'],
    learningObjectives: [
      'Rozlišit zdanitelná, osvobozená a daňově neutrální plnění zaměstnavatele.',
      'Určit údaje potřebné pro ocenění a mzdové zpracování nepeněžního benefitu.',
      'Posoudit vazbu benefitu na daňový a pojistný základ pomocí verzovaných pravidel.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'benefit-classification',
        'Klasifikace zaměstnaneckých benefitů',
        'rozlišit zdanitelné příjmy, osvobozené příjmy a příjmy, které nejsou předmětem daně',
      ),
      lesson(
        'non-cash-benefits',
        'Nepeněžní benefity',
        'určit způsob ocenění a základní mzdové zpracování nepeněžního plnění',
        'worked_example',
        true,
      ),
      lesson(
        'benefit-tax-insurance-impact',
        'Dopad benefitů na daň a pojistné',
        'propojit benefit se základem daně a vyměřovacími základy zdravotního a sociálního pojištění',
        'worked_example',
        true,
      ),
      lesson(
        'employer-retirement-contributions',
        'Příspěvky zaměstnavatele na produkty spoření na stáří',
        'rozpoznat potřebné podklady a použít aktuální verzované podmínky pro mzdové posouzení',
      ),
      lesson(
        'hazardous-work-mandatory-contribution',
        'Povinný příspěvek při rizikové práci',
        'rozpoznat nárok, evidenční vstupy a vazbu příspěvku na mzdové zpracování bez použití neověřených limitů',
      ),
      lesson(
        'benefits-payroll-case',
        'Praktický případ zpracování benefitů',
        'zpracovat kombinaci peněžního a nepeněžního plnění a zdokumentovat daňové a pojistné posouzení',
        'case_study',
        true,
        true,
        45,
      ),
    ],
    practicalScenarios: [
      'Kombinace peněžního příspěvku a nepeněžního benefitu v jednom období.',
      'Povinný příspěvek zaměstnanci vykonávajícímu rizikovou práci.',
    ],
    plannedExamples: [
      'Ocenění nepeněžního benefitu podle explicitně zadaných vstupů.',
      'Rozdělení benefitů podle dopadu na daň a pojistné při použití verzovaných pravidel.',
      'Mzdové zpracování příspěvku zaměstnavatele na produkt spoření na stáří.',
    ],
    sourceTopics: [
      'PDF kapitola 2 - Plnění nemzdové povahy',
      'PDF kapitola 14 - Povinný příspěvek při rizikové práci',
    ],
  }),
  module({
    id: 'overtime-supplements',
    title: 'Přesčasy, svátky a mzdová zvýhodnění',
    description:
      'Identifikace zvláštních režimů práce a sestavení podkladů pro příplatky nebo náhradní volno.',
    difficulty: 'intermediate',
    estimatedMinutes: 220,
    prerequisites: ['working-time', 'remuneration-basics'],
    learningObjectives: [
      'Rozpoznat práci přesčas a odlišit ji od běžné směny.',
      'Rozlišit práci ve svátek, v noci, o víkendu a pracovní pohotovost.',
      'Sestavit kontrolovatelný podklad pro výpočet mzdového zvýhodnění.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'overtime-identification',
        'Identifikace práce přesčas',
        'posoudit přesčas podle rozvrhu a skutečně odpracované doby',
      ),
      lesson(
        'overtime-compensation',
        'Mzda, příplatek a náhradní volno za přesčas',
        'rozlišit varianty vypořádání přesčasové práce',
        'worked_example',
        true,
      ),
      lesson(
        'holiday-work',
        'Práce ve svátek',
        'určit mzdové vstupy při práci nebo neodpracovaném svátku',
        'worked_example',
        true,
      ),
      lesson(
        'night-work',
        'Práce v noci',
        'vymezit hodiny práce v nočním režimu pro příplatek',
        'worked_example',
        true,
      ),
      lesson(
        'weekend-work',
        'Práce v sobotu a neděli',
        'vymezit hodiny práce o víkendu pro příplatek',
        'worked_example',
        true,
      ),
      lesson(
        'on-call-duty',
        'Pracovní pohotovost',
        'odlišit pohotovost od výkonu práce během pohotovosti',
        'worked_example',
        true,
      ),
      lesson(
        'supplement-overlap',
        'Souběh mzdových zvýhodnění',
        'zkontrolovat souběh několika režimů u jedné směny',
        'case_study',
        true,
        true,
        35,
      ),
    ],
    practicalScenarios: [
      'Noční přesčas zasahující do soboty.',
      'Práce ve svátek s následným náhradním volnem.',
    ],
    plannedExamples: [
      'Příplatek za přesčas z explicitně zadaného průměrného výdělku a hodin.',
      'Souběh nočního, víkendového a přesčasového zvýhodnění.',
      'Odměna za pracovní pohotovost a oddělený výkon práce.',
    ],
    sourceTopics: [
      'PDF kapitola 1 - Práce přesčas a pracovní pohotovost',
      'PDF kapitola 2 - Mzdová zvýhodnění',
    ],
  }),
  module({
    id: 'work-obstacles',
    title: 'Překážky v práci',
    description:
      'Klasifikace nepřítomností a určení podkladů pro náhradu mzdy nebo omluvenou nepřítomnost.',
    difficulty: 'intermediate',
    estimatedMinutes: 180,
    prerequisites: ['working-time', 'remuneration-basics'],
    learningObjectives: [
      'Rozlišit překážku na straně zaměstnance a zaměstnavatele.',
      'Určit, jaký doklad a mzdový režim situace vyžaduje.',
      'Zabránit záměně překážky, dovolené a neomluvené absence.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'employee-obstacles',
        'Překážky na straně zaměstnance',
        'roztřídit základní osobní překážky v práci',
      ),
      lesson(
        'public-interest-obstacles',
        'Překážky z důvodu obecného zájmu',
        'rozpoznat nepřítomnosti vyžadující zvláštní podklad',
      ),
      lesson(
        'employer-obstacles',
        'Překážky na straně zaměstnavatele',
        'rozlišit prostoje a jiné překážky zaměstnavatele',
      ),
      lesson(
        'obstacle-documents',
        'Dokladování a evidence překážek',
        'zkontrolovat vazbu dokladu, docházky a mzdového kódu',
        'process',
      ),
      lesson(
        'obstacle-compensation',
        'Náhrada mzdy při překážce',
        'určit vstupy pro výpočet náhrady mzdy',
        'worked_example',
        true,
      ),
    ],
    practicalScenarios: [
      'Návštěva lékaře zasahující do části směny.',
      'Přerušení práce z důvodu na straně zaměstnavatele.',
    ],
    plannedExamples: [
      'Náhrada mzdy za část směny podle zadaného průměrného hodinového výdělku.',
    ],
    sourceTopics: ['PDF kapitola 1 - Překážky v práci'],
  }),
  module({
    id: 'annual-leave',
    title: 'Dovolená',
    description:
      'Vznik nároku, evidence, čerpání a mzdové zpracování dovolené v hodinách.',
    difficulty: 'intermediate',
    estimatedMinutes: 220,
    prerequisites: ['working-time', 'work-obstacles'],
    learningObjectives: [
      'Rozlišit dovolenou za kalendářní rok, poměrnou a dodatkovou dovolenou.',
      'Určit vstupy pro výpočet nároku a čerpání v hodinách.',
      'Zpracovat převod nebo proplacení dovolené při skončení.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'leave-types',
        'Druhy dovolené',
        'rozlišit druhy dovolené a jejich použití',
      ),
      lesson(
        'leave-entitlement',
        'Vznik nároku na dovolenou',
        'určit údaje potřebné pro výpočet nároku',
      ),
      lesson(
        'leave-worked-times',
        'Odpracované a započitatelné doby',
        'roztřídit doby ovlivňující nárok na dovolenou',
      ),
      lesson(
        'leave-hours-calculation',
        'Výpočet dovolené v hodinách',
        'sestavit výpočet nároku z explicitně zadaných parametrů',
        'worked_example',
        true,
      ),
      lesson(
        'leave-taking',
        'Čerpání, převod a krácení',
        'promítnout čerpání a změny nároku do evidence',
        'process',
      ),
      lesson(
        'leave-termination',
        'Dovolená při skončení zaměstnání',
        'určit zůstatek a podklady pro případné proplacení',
        'case_study',
        true,
        true,
        35,
      ),
    ],
    practicalScenarios: [
      'Nástup zaměstnance v průběhu roku a výpočet poměrné části.',
      'Nevyčerpaná dovolená při skončení pracovního poměru.',
    ],
    plannedExamples: [
      'Nárok na dovolenou při zadané týdenní pracovní době a odpracovaných týdnech.',
      'Náhrada mzdy za čerpanou dovolenou.',
    ],
    sourceTopics: ['PDF kapitola 1 - Dovolená'],
  }),
  module({
    id: 'average-earnings',
    title: 'Průměrný a pravděpodobný výdělek',
    description:
      'Rozhodné období, započitatelné složky a použití průměrného nebo pravděpodobného výdělku.',
    difficulty: 'intermediate',
    estimatedMinutes: 210,
    prerequisites: ['remuneration-basics', 'working-time'],
    learningObjectives: [
      'Určit rozhodné období a započitatelnou mzdu a dobu.',
      'Vypočítat průměrný hodinový výdělek z daných vstupů.',
      'Rozpoznat situaci vyžadující pravděpodobný výdělek.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'average-purpose',
        'Kdy se používá průměrný výdělek',
        'přiřadit průměrný výdělek k typickým mzdovým situacím',
      ),
      lesson(
        'average-reference-period',
        'Rozhodné období',
        'určit správné období pro zjištění průměrného výdělku',
      ),
      lesson(
        'average-includable-wage',
        'Započitatelná mzda a odpracovaná doba',
        'vybrat správné částky a hodiny do výpočtu',
      ),
      lesson(
        'average-hourly',
        'Průměrný hodinový výdělek',
        'vypočítat hodinový průměr a provést kontrolu výsledku',
        'worked_example',
        true,
      ),
      lesson(
        'average-monthly',
        'Průměrný měsíční výdělek',
        'převést hodinový průměr na měsíční hodnotu podle zadaných parametrů',
        'worked_example',
        true,
      ),
      lesson(
        'probable-earnings',
        'Pravděpodobný výdělek',
        'zvolit a zdokumentovat postup při nedostatku rozhodných údajů',
        'case_study',
        true,
      ),
    ],
    practicalScenarios: [
      'Nový zaměstnanec bez dostatečně odpracované doby.',
      'Čtvrtletní odměna zasahující do rozhodného období.',
    ],
    plannedExamples: [
      'Průměrný hodinový výdělek ze zadané hrubé mzdy a odpracovaných hodin.',
      'Poměrné zahrnutí složky poskytované za delší období.',
      'Pravděpodobný výdělek podle doloženého srovnávacího podkladu.',
    ],
    sourceTopics: ['PDF kapitola 2 - Průměrný výdělek'],
  }),
  module({
    id: 'gross-wage',
    title: 'Sestavení hrubé mzdy',
    description:
      'Převod ověřených docházkových a mzdových podkladů na kontrolovatelnou hrubou mzdu.',
    difficulty: 'intermediate',
    estimatedMinutes: 210,
    prerequisites: [
      'overtime-supplements',
      'work-obstacles',
      'annual-leave',
      'average-earnings',
      'employee-benefits-other-payments',
    ],
    learningObjectives: [
      'Přiřadit mzdové podklady ke správnému období a zaměstnanci.',
      'Sestavit hrubou mzdu z pevných, pohyblivých a náhradových složek.',
      'Provést vazební a aritmetickou kontrolu hrubé mzdy.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'gross-wage-input-map',
        'Mapa vstupů hrubé mzdy',
        'spojit docházku, mzdové složky a schválení do jednoho podkladu',
        'process',
      ),
      lesson(
        'time-wage',
        'Časová mzda',
        'vypočítat časovou mzdu z explicitní sazby a odpracované doby',
        'worked_example',
        true,
      ),
      lesson(
        'monthly-wage-proration',
        'Měsíční mzda a neodpracovaná část',
        'sestavit poměrnou měsíční mzdu podle zadaných údajů',
        'worked_example',
        true,
      ),
      lesson(
        'variable-components',
        'Odměny a osobní ohodnocení',
        'připojit správně schválené pohyblivé složky',
      ),
      lesson(
        'compensations-in-gross-process',
        'Náhrady mzdy ve mzdovém zpracování',
        'odlišit odpracovanou mzdu od náhrad mzdy',
      ),
      lesson(
        'gross-wage-reconciliation',
        'Rekapitulace hrubé mzdy',
        'provést kontrolu součtu a vazby na zdrojové doklady',
        'case_study',
        true,
        true,
        40,
      ),
    ],
    practicalScenarios: [
      'Měsíc s odměnou, dovolenou a několika hodinami přesčasu.',
      'Rozdíl mezi docházkou a vyplacenými hodinovými složkami.',
    ],
    plannedExamples: [
      'Časová mzda s příplatky a osobním ohodnocením.',
      'Poměrná měsíční mzda s dovolenou a překážkou v práci.',
      'Kompletní rekapitulace hrubých složek jednoho zaměstnance.',
    ],
    sourceTopics: ['PDF kapitola 2 - Odměňování a mzdová zvýhodnění'],
  }),
  module({
    id: 'employment-tax-foundations',
    title: 'Daň ze závislé činnosti a Prohlášení poplatníka',
    description:
      'Základní daňové pojmy, podepsané Prohlášení poplatníka a volba režimu zdanění příjmu.',
    difficulty: 'intermediate',
    estimatedMinutes: 190,
    prerequisites: ['gross-wage', 'employee-benefits-other-payments'],
    learningObjectives: [
      'Rozpoznat příjem ze závislé činnosti a základní daňové vstupy.',
      'Zkontrolovat použití Prohlášení poplatníka v daném období.',
      'Rozlišit zálohovou a srážkovou daň podle zadaných podmínek.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'dependent-income',
        'Příjmy ze závislé činnosti',
        'roztřídit příjmy a plnění relevantní pro zdanění',
      ),
      lesson(
        'taxpayer-declaration',
        'Prohlášení poplatníka',
        'zkontrolovat platnost a uplatnění Prohlášení v období',
        'process',
      ),
      lesson(
        'tax-base-inputs',
        'Vstupy do základu daně',
        'určit částky vstupující do modelového základu daně',
      ),
      lesson(
        'advance-tax-regime',
        'Zálohová daň',
        'rozpoznat situaci zpracovanou v režimu zálohové daně',
      ),
      lesson(
        'withholding-tax-regime',
        'Srážková daň',
        'rozpoznat situaci zpracovanou v režimu srážkové daně',
      ),
      lesson(
        'tax-regime-decision',
        'Volba daňového režimu',
        'rozhodnout mezi režimy podle explicitně zadaných podmínek',
        'case_study',
        true,
      ),
    ],
    practicalScenarios: [
      'Souběh zaměstnání a podepsané Prohlášení u jiného plátce.',
      'Odměna z dohody s různými vstupními podmínkami zdanění.',
    ],
    plannedExamples: [
      'Určení režimu daně z modelových podmínek bez použití neověřených limitů.',
      'Sestavení základu daně z explicitně zadaných zdanitelných položek.',
    ],
    sourceTopics: ['PDF kapitola 6 - Daň z příjmů ze závislé činnosti'],
  }),
  module({
    id: 'tax-calculation-benefits',
    title: 'Výpočet daně, slevy a zvýhodnění na děti',
    description:
      'Postup měsíčního výpočtu daně při použití verzovaných sazeb, slev a daňového zvýhodnění.',
    difficulty: 'intermediate',
    estimatedMinutes: 230,
    prerequisites: ['employment-tax-foundations'],
    learningObjectives: [
      'Vypočítat zálohu na daň z explicitně zadaného základu a sazeb.',
      'Aplikovat doložené měsíční slevy ve správném pořadí.',
      'Zpracovat daňové zvýhodnění na děti podle zadaných nároků.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'tax-rounding',
        'Zaokrouhlení daňového základu',
        'použít zadané pravidlo zaokrouhlení před výpočtem daně',
        'worked_example',
        true,
      ),
      lesson(
        'tax-rate-calculation',
        'Výpočet zálohy na daň',
        'aplikovat verzované sazby na explicitně zadaný základ',
        'worked_example',
        true,
      ),
      lesson(
        'tax-discounts',
        'Slevy na dani',
        'vybrat a uplatnit doložené slevy ve správném pořadí',
      ),
      lesson(
        'child-benefit',
        'Daňové zvýhodnění na děti',
        'určit pořadí dětí a podklady k nároku',
      ),
      lesson(
        'tax-bonus',
        'Daňový bonus',
        'rozpoznat výsledek výpočtu vedoucí k bonusu',
        'worked_example',
        true,
      ),
      lesson(
        'monthly-tax-case',
        'Kompletní měsíční daň',
        'spojit základ, sazbu, slevy a zvýhodnění do jedné kontroly',
        'case_study',
        true,
        true,
        40,
      ),
    ],
    practicalScenarios: [
      'Zaměstnanec uplatňuje základní slevu a dvě děti.',
      'Dodatečně doložený nárok na daňovou slevu.',
    ],
    plannedExamples: [
      'Záloha na daň se zadanými sazbami a pravidlem zaokrouhlení.',
      'Daň po slevách a daňovém zvýhodnění na děti.',
      'Kontrola výsledku měsíční daně a bonusu.',
    ],
    sourceTopics: ['PDF kapitola 6 - Slevy na dani a daňové zvýhodnění'],
  }),
  module({
    id: 'health-insurance',
    title: 'Zdravotní pojištění zaměstnance',
    description:
      'Účast, vyměřovací základ, odvody a komunikace se zdravotními pojišťovnami.',
    difficulty: 'intermediate',
    estimatedMinutes: 230,
    prerequisites: ['gross-wage', 'employee-benefits-other-payments'],
    learningObjectives: [
      'Určit pojistný vztah a příslušnou zdravotní pojišťovnu.',
      'Sestavit vyměřovací základ a použít verzované sazby.',
      'Připravit oznámení a měsíční kontrolu odvodu pojistného.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'health-participants',
        'Pojištěnec, zaměstnavatel a pojišťovna',
        'rozlišit účastníky a jejich oznamovací role',
      ),
      lesson(
        'health-categories',
        'Kategorie pojištěnců',
        'identifikovat stav ovlivňující posouzení pojistného',
      ),
      lesson(
        'health-assessment-base',
        'Vyměřovací základ',
        'vybrat položky vstupující do vyměřovacího základu',
      ),
      lesson(
        'health-minimum-base',
        'Minimální vyměřovací základ',
        'rozpoznat situace vyžadující kontrolu minima nebo výjimky',
      ),
      lesson(
        'health-contribution',
        'Výpočet zdravotního pojistného',
        'vypočítat podíly ze zadaného základu a sazeb',
        'worked_example',
        true,
      ),
      lesson(
        'health-notifications',
        'Oznámení zdravotní pojišťovně',
        'sestavit postup přihlášení, změny a odhlášení',
        'process',
      ),
      lesson(
        'health-monthly-report',
        'Měsíční přehled a kontrola platby',
        'sladit souhrn, splatnou částku a evidované zaměstnance',
        'case_study',
        true,
      ),
    ],
    practicalScenarios: [
      'Změna zdravotní pojišťovny zaměstnance.',
      'Zaměstnanec s výjimkou z minimálního vyměřovacího základu.',
    ],
    plannedExamples: [
      'Pojistné zaměstnance a zaměstnavatele ze zadaného vyměřovacího základu.',
      'Doplatek do minima podle explicitně zadaných parametrů.',
    ],
    sourceTopics: ['PDF kapitola 7 - Zdravotní pojištění'],
  }),
  module({
    id: 'social-security',
    title: 'Sociální zabezpečení a komunikace s ČSSZ',
    description:
      'Účast na pojištění, evidence zaměstnavatele, registrace zaměstnance přes REGZEC, výpočet pojistného a vykázání údajů prostřednictvím JMHZ.',
    difficulty: 'intermediate',
    estimatedMinutes: 230,
    prerequisites: [
      'gross-wage',
      'work-agreements',
      'employee-benefits-other-payments',
    ],
    learningObjectives: [
      'Rozpoznat účast zaměstnance na sociálním zabezpečení.',
      'Vypočítat pojistné z explicitně zadaného základu a sazeb.',
      'Sladit evidenci zaměstnavatele a zaměstnanců, výpočet pojistného, platbu a údaje JMHZ.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'social-insurance-scope',
        'Složky sociálního zabezpečení',
        'popsat vztah nemocenského, důchodového pojištění a politiky zaměstnanosti',
      ),
      lesson(
        'social-participation',
        'Účast zaměstnance na pojištění',
        'určit vstupy pro posouzení účasti pracovního vztahu',
      ),
      lesson(
        'social-assessment-base',
        'Vyměřovací základ',
        'roztřídit započitatelné a nezapočitatelné příjmy',
      ),
      lesson(
        'social-contribution',
        'Výpočet a platba sociálního pojistného',
        'vypočítat podíly ze zadaného základu a sazeb a připravit kontrolu platby',
        'worked_example',
        true,
      ),
      lesson(
        'social-contribution-discounts',
        'Slevy na pojistném',
        'rozpoznat možný nárok zaměstnavatele nebo zaměstnance na slevu a určit potřebné verzované parametry',
        'worked_example',
        true,
      ),
      lesson(
        'social-employer-evidence',
        'Evidence zaměstnavatele v systému JMHZ',
        'rozlišit přihlášení, doplnění, změnu a odhlášení údajů evidence zaměstnavatele',
        'process',
      ),
      lesson(
        'jmhz-employee-registration',
        'Registrace zaměstnance: JMHZ a REGZEC',
        'sestavit postup přihlášení, změny a odhlášení zaměstnance v evidenci zaměstnanců přes REGZEC',
        'process',
      ),
      lesson(
        'social-jmhz-reporting',
        'Vykázání pojistných údajů prostřednictvím JMHZ',
        'zkontrolovat vazbu vypočteného pojistného, platby a údajů vykazovaných v měsíčním hlášení',
        'case_study',
        true,
      ),
      lesson(
        'social-preserved-forms',
        'Zachované formuláře ČSSZ',
        'odlišit údaje začleněné do JMHZ od formulářů a podání, které zůstávají samostatné',
        'process',
      ),
    ],
    practicalScenarios: [
      'Posouzení účasti u více pracovních vztahů.',
      'Rozdíl mezi rekapitulací mezd a měsíčním přehledem.',
    ],
    plannedExamples: [
      'Pojistné zaměstnance a zaměstnavatele ze zadaného vyměřovacího základu.',
      'Kontrolní součet pojistného za více zaměstnanců.',
    ],
    sourceTopics: ['PDF kapitola 8 - Pojistné na sociální zabezpečení'],
  }),
  module({
    id: 'sickness-wage-compensation',
    title: 'Dočasná pracovní neschopnost a náhrada mzdy',
    description:
      'Evidence nemoci, rozhodné směny, redukovaný průměr a náhrada mzdy v období hrazeném zaměstnavatelem.',
    difficulty: 'intermediate',
    estimatedMinutes: 220,
    prerequisites: ['average-earnings', 'working-time'],
    learningObjectives: [
      'Zpracovat vstupní údaje dočasné pracovní neschopnosti.',
      'Určit plánované směny a hodiny relevantní pro náhradu mzdy.',
      'Vypočítat náhradu pomocí verzovaných redukčních parametrů.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'sickness-record',
        'Evidence dočasné pracovní neschopnosti',
        'zkontrolovat období, doklad a návaznost na docházku',
        'process',
      ),
      lesson(
        'sickness-scheduled-hours',
        'Směny a hodiny při nemoci',
        'vybrat z rozvrhu hodiny relevantní pro náhradu',
      ),
      lesson(
        'reduced-average',
        'Redukovaný průměrný výdělek',
        'aplikovat zadané redukční hranice na hodinový průměr',
        'worked_example',
        true,
      ),
      lesson(
        'sickness-compensation-calculation',
        'Výpočet náhrady mzdy',
        'spojit redukovaný průměr a relevantní hodiny',
        'worked_example',
        true,
      ),
      lesson(
        'sickness-edge-months',
        'Nemoc na přelomu období',
        'rozdělit nepřítomnost a mzdové dopady mezi období',
        'case_study',
        true,
      ),
      lesson(
        'sickness-employer-control',
        'Kontrolní povinnosti zaměstnavatele',
        'popsat evidenční a předávací kroky zaměstnavatele',
      ),
    ],
    practicalScenarios: [
      'Nemoc začínající uprostřed směny.',
      'Pracovní neschopnost přecházející do dalšího měsíce.',
    ],
    plannedExamples: [
      'Redukce průměrného hodinového výdělku podle zadaných hranic.',
      'Náhrada mzdy za explicitně zadané směny a hodiny.',
    ],
    sourceTopics: [
      'PDF kapitola 9 - Náhrada mzdy při dočasné pracovní neschopnosti',
    ],
  }),
  module({
    id: 'sickness-benefits-family',
    title: 'Nemocenské dávky a rodinné události',
    description:
      'Orientace v dávkách nemocenského pojištění a v podkladech předávaných zaměstnavatelem.',
    difficulty: 'intermediate',
    estimatedMinutes: 210,
    prerequisites: ['sickness-wage-compensation', 'social-security'],
    learningObjectives: [
      'Rozlišit hlavní dávky nemocenského pojištění a jejich účel.',
      'Určit podklady a období předávané zaměstnavatelem.',
      'Správně evidovat mateřství, otcovskou a různé typy ošetřovného.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'sickness-benefit',
        'Nemocenské',
        'odlišit nemocenskou dávku od náhrady mzdy zaměstnavatele',
      ),
      lesson(
        'maternity-benefit',
        'Peněžitá pomoc v mateřství',
        'popsat úlohu zaměstnavatele při uplatnění žádosti',
      ),
      lesson(
        'paternity-benefit',
        'Otcovská',
        'zkontrolovat mzdovou evidenci období otcovské',
      ),
      lesson(
        'care-benefit',
        'Ošetřovné',
        'zpracovat podklady běžného ošetřovného',
      ),
      lesson(
        'long-term-care-benefit',
        'Dlouhodobé ošetřovné',
        'odlišit dlouhodobé ošetřovné a jeho evidenci',
      ),
      lesson(
        'parental-leave-records',
        'Mateřská a rodičovská dovolená v evidenci',
        'propojit pracovněprávní nepřítomnost s dávkovou agendou',
        'process',
      ),
      lesson(
        'benefit-employer-submission',
        'Předání podkladů pro dávku',
        'sestavit kontrolní postup elektronického předání podkladů',
        'case_study',
        false,
        true,
        35,
      ),
    ],
    practicalScenarios: [
      'Návaznost mateřské a rodičovské dovolené.',
      'Předání neúplné žádosti o ošetřovné.',
    ],
    plannedExamples: [
      'Sestavení rozhodného období z explicitně zadaných měsíců a vyloučených dnů.',
    ],
    sourceTopics: ['PDF kapitola 9 - Dávky nemocenského pojištění'],
  }),
  module({
    id: 'net-wage',
    title: 'Výpočet čisté mzdy',
    description:
      'Spojení hrubé mzdy, pojistného, daně a ostatních položek do kontrolovatelného výpočtu čisté mzdy.',
    difficulty: 'intermediate',
    estimatedMinutes: 260,
    prerequisites: [
      'tax-calculation-benefits',
      'health-insurance',
      'social-security',
      'gross-wage',
    ],
    learningObjectives: [
      'Seřadit výpočtové kroky od hrubé mzdy k čisté mzdě.',
      'Použít správné zaokrouhlení v jednotlivých krocích.',
      'Provést kontrolu čisté mzdy a částky k výplatě.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'net-wage-flow',
        'Výpočtový tok čisté mzdy',
        'seřadit daňové, pojistné a výplatní kroky',
        'process',
      ),
      lesson(
        'employee-deductions',
        'Pojistné sražené zaměstnanci',
        'vypočítat zaměstnanecké pojistné ze zadaných parametrů',
        'worked_example',
        true,
      ),
      lesson(
        'tax-in-net-wage',
        'Daň v čisté mzdě',
        'přenést výsledek daňového výpočtu do čisté mzdy',
        'worked_example',
        true,
      ),
      lesson(
        'net-wage-rounding',
        'Zaokrouhlení a kontrolní součty',
        'použít zadaná pravidla a ověřit aritmetickou vazbu',
        'practice',
        true,
      ),
      lesson(
        'amount-payable',
        'Čistá mzda a částka k výplatě',
        'odlišit čistou mzdu od částky po ostatních srážkách a plněních',
      ),
      lesson(
        'complete-net-wage-case',
        'Kompletní výpočet čisté mzdy',
        'zpracovat modelovou mzdu od vstupů po částku k výplatě',
        'case_study',
        true,
        true,
        50,
      ),
    ],
    practicalScenarios: [
      'Zaměstnanec s měsíční mzdou, příplatkem, dovolenou a dítětem.',
      'Dohledání chyby v rekapitulaci čisté mzdy.',
    ],
    plannedExamples: [
      'Kompletní čistá mzda s parametry dodanými verzovanou legislativní sadou.',
      'Kontrolní přepočet čisté mzdy po opravě jedné hrubé složky.',
    ],
    sourceTopics: ['Průřez PDF kapitolami 2, 6, 7 a 8'],
  }),
  module({
    id: 'personnel-file-gdpr',
    title: 'Osobní spis, GDPR a archivace',
    description:
      'Bezpečné vedení osobního spisu, omezení zpracování údajů a řízená archivace mzdových dokumentů.',
    difficulty: 'intermediate',
    estimatedMinutes: 170,
    prerequisites: ['employee-onboarding'],
    learningObjectives: [
      'Rozlišit dokumenty osobního spisu a provozní mzdové evidence.',
      'Použít zásady minimalizace, přístupových oprávnění a zabezpečení.',
      'Zařadit dokument do řízeného archivačního a skartačního procesu.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'personnel-file-content',
        'Obsah osobního spisu',
        'roztřídit dokumenty podle účelu a oprávněného přístupu',
      ),
      lesson(
        'gdpr-principles',
        'Zásady zpracování osobních údajů',
        'použít minimalizaci, účelové omezení a přesnost údajů',
      ),
      lesson(
        'sensitive-payroll-data',
        'Citlivé údaje v mzdové agendě',
        'identifikovat údaje vyžadující zvýšenou ochranu',
      ),
      lesson(
        'access-and-disclosure',
        'Přístupy a předávání údajů',
        'ověřit oprávnění před zpřístupněním mzdového údaje',
        'process',
      ),
      lesson(
        'retention-disposal',
        'Archivace a skartace',
        'zařadit dokument do správné retenční skupiny podle aktuálního pravidla',
        'process',
      ),
      lesson(
        'data-incident',
        'Chybné odeslání mzdového dokumentu',
        'navrhnout první kroky při incidentu s osobními údaji',
        'case_study',
      ),
    ],
    practicalScenarios: [
      'Žádost vedoucího o údaje, ke kterým nemá oprávnění.',
      'Nesprávně adresovaná elektronická výplatní páska.',
    ],
    plannedExamples: [],
    sourceTopics: [
      'PDF kapitola 3 - Ochrana osobních údajů a vedení osobního spisu',
    ],
  }),
  module({
    id: 'payroll-records-reporting',
    title: 'Mzdové evidence a ohlašovací povinnosti',
    description:
      'Vedení mzdových záznamů, měsíční a roční výstupy a kontrola vazeb mezi evidencemi a formuláři.',
    difficulty: 'intermediate',
    estimatedMinutes: 220,
    prerequisites: ['net-wage', 'personnel-file-gdpr'],
    learningObjectives: [
      'Rozlišit zaměstnanecké, mzdové, daňové a pojistné evidence.',
      'Přiřadit formulář správné instituci a události.',
      'Provést kontrolu souhrnných výstupů proti mzdové rekapitulaci.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'payroll-sheet',
        'Mzdový list',
        'určit zdroje údajů a kontrolní vazby mzdového listu',
      ),
      lesson(
        'pay-slip',
        'Výplatní doklad zaměstnance',
        'zkontrolovat srozumitelnost a úplnost výplatního dokladu',
      ),
      lesson(
        'tax-records',
        'Daňové evidence plátce',
        'přiřadit měsíční údaje k daňovým evidencím',
      ),
      lesson(
        'insurance-records',
        'Pojistné evidence',
        'sladit seznam zaměstnanců s evidencí zdravotního a sociálního pojištění',
      ),
      lesson(
        'event-notifications',
        'Událostní registrace a změny v systému JMHZ',
        'vybrat registrační nebo změnový krok v REGZEC a odlišit jej od zachovaných událostních podání',
        'process',
      ),
      lesson(
        'monthly-annual-outputs',
        'Měsíční a roční výstupy',
        'sestavit kontrolní mapu pravidelných výstupů',
        'process',
      ),
    ],
    practicalScenarios: [
      'Rozdíl mezi mzdovým listem a měsíční rekapitulací.',
      'Chybějící odhláška po skončení zaměstnance.',
    ],
    plannedExamples: [
      'Kontrolní součet hrubých mezd, pojistného a daně mezi dvěma výstupy.',
    ],
    sourceTopics: [
      'PDF kapitoly 6 až 10 - Evidence a povinnosti zaměstnavatele',
    ],
  }),
  module({
    id: 'unified-monthly-report',
    title: 'Jednotné měsíční hlášení zaměstnavatele',
    description:
      'Datové zdroje, identifikátory, validační kontroly a opravný proces jednotného měsíčního hlášení.',
    difficulty: 'advanced',
    estimatedMinutes: 190,
    prerequisites: ['payroll-records-reporting'],
    learningObjectives: [
      'Popsat vazbu hlášení na mzdová a personální data.',
      'Zkontrolovat identifikátory zaměstnavatele, zaměstnance a zaměstnání.',
      'Vyhodnotit validační chybu a připravit opravu podání.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'report-purpose-scope',
        'Účel a rozsah jednotného hlášení',
        'vymezit agendy a data soustředěná do měsíčního podání',
      ),
      lesson(
        'report-identifiers',
        'Identifikátory v hlášení',
        'zkontrolovat vazbu identifikátorů na evidenci zaměstnavatele a zaměstnance',
      ),
      lesson(
        'report-data-sources',
        'Zdroje dat pro hlášení',
        'přiřadit vykazované údaje k mzdovým a personálním zdrojům',
        'process',
      ),
      lesson(
        'report-monthly-process',
        'Příprava a podání hlášení',
        'seřadit export, kontrolu, autorizaci a podání',
        'process',
      ),
      lesson(
        'report-validation-errors',
        'Vady podání a opravy',
        'roztřídit chyby a připravit opravný postup',
        'case_study',
      ),
      lesson(
        'report-reconciliation',
        'Kontrola hlášení proti mzdám',
        'sladit souhrn hlášení s měsíční mzdovou rekapitulací',
        'practice',
        true,
      ),
    ],
    practicalScenarios: [
      'Odmítnuté podání kvůli nesouladu identifikátoru.',
      'Dodatečná oprava mzdy po odeslání hlášení.',
    ],
    plannedExamples: [
      'Kontrolní součet vykazovaných příjmů proti mzdové rekapitulaci.',
    ],
    sourceTopics: ['PDF kapitola 13 - Jednotné měsíční hlášení zaměstnavatele'],
  }),
  module({
    id: 'monthly-payroll-capstone',
    title: 'Komplexní měsíční zpracování mzdy',
    description:
      'Ucelený pracovní postup od uzávěrky vstupů přes výpočet a kontrolu až po výstupy a archivaci.',
    difficulty: 'advanced',
    estimatedMinutes: 320,
    prerequisites: [
      'net-wage',
      'payroll-records-reporting',
      'unified-monthly-report',
    ],
    learningObjectives: [
      'Samostatně zpracovat běžnou měsíční mzdu z úplných podkladů.',
      'Odhalit nesoulad mezi docházkou, mzdou, odvody a výstupy.',
      'Zdokumentovat opravu a uzavřít mzdový měsíc kontrolovatelným postupem.',
    ],
    category: 'core',
    lessons: [
      lesson(
        'monthly-cutoff',
        'Uzávěrka a převzetí vstupů',
        'zkontrolovat úplnost vstupů a řídit pozdní změny',
        'process',
      ),
      lesson(
        'monthly-employee-changes',
        'Kontrola nástupů, změn a výstupů',
        'ověřit personální události ovlivňující zpracovaný měsíc',
        'process',
      ),
      lesson(
        'monthly-attendance',
        'Kontrola docházky a nepřítomností',
        'sladit rozvrh, odpracovanou dobu, dovolenou a překážky',
        'practice',
      ),
      lesson(
        'monthly-calculation',
        'Výpočet hrubé a čisté mzdy',
        'provést úplný výpočet s verzovanými parametry',
        'worked_example',
        true,
        true,
        60,
      ),
      lesson(
        'monthly-reconciliation',
        'Rekapitulace a kontrolní vazby',
        'ověřit součty mezd, daně, pojistného a částek k výplatě',
        'practice',
        true,
        true,
        45,
      ),
      lesson(
        'monthly-submissions',
        'Platby, hlášení a výstupy',
        'připravit kontrolní seznam před odesláním výstupů',
        'process',
      ),
      lesson(
        'monthly-correction',
        'Oprava chyby po uzávěrce',
        'zpracovat modelovou opravu se zachováním kontrolní stopy',
        'case_study',
        true,
        true,
        45,
      ),
      lesson(
        'monthly-final-case',
        'Samostatný případ běžné mzdy',
        'zpracovat celý modelový měsíc bez vedení krok za krokem',
        'case_study',
        true,
        true,
        75,
      ),
    ],
    practicalScenarios: [
      'Běžný zaměstnanec s dovolenou, přesčasem a daňovým zvýhodněním.',
      'Pozdní odměna doručená po uzávěrce vstupů.',
      'Rozdíl mezi bankovním souborem a mzdovou rekapitulací.',
    ],
    plannedExamples: [
      'Kompletní měsíční mzda od hrubých složek po částku k výplatě.',
      'Souhrnná kontrola daně a pojistného za malou modelovou firmu.',
      'Opravný výpočet po změně docházky.',
    ],
    sourceTopics: [
      'Průřez všemi jádrovými tématy PDF a praktickým mzdovým workflow',
    ],
  }),
  module({
    id: 'annual-tax-settlement',
    title: 'Roční zúčtování záloh na daň',
    description:
      'Specializovaný roční proces od žádosti zaměstnance po vypořádání výsledku ve mzdě.',
    difficulty: 'advanced',
    estimatedMinutes: 230,
    prerequisites: ['tax-calculation-benefits', 'payroll-records-reporting'],
    learningObjectives: [
      'Posoudit vstupní podmínky žádosti o roční zúčtování.',
      'Zkontrolovat doklady k nezdanitelným částem, slevám a zvýhodnění.',
      'Vypočítat výsledek ze zadaných ročních údajů a verzovaných parametrů.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'annual-settlement-eligibility',
        'Kdo může požádat o roční zúčtování',
        'posoudit modelovou žádost podle zadaných podmínek',
      ),
      lesson(
        'annual-settlement-documents',
        'Žádost a doložení nároků',
        'zkontrolovat úplnost ročních daňových podkladů',
        'process',
      ),
      lesson(
        'annual-tax-base',
        'Roční základ a nezdanitelné části',
        'sestavit roční základ z explicitně zadaných údajů',
        'worked_example',
        true,
      ),
      lesson(
        'annual-discounts-benefits',
        'Roční slevy a zvýhodnění',
        'aplikovat doložené roční nároky ve správném pořadí',
        'worked_example',
        true,
      ),
      lesson(
        'annual-settlement-result',
        'Výsledek ročního zúčtování',
        'porovnat roční povinnost se sraženými zálohami',
        'worked_example',
        true,
      ),
      lesson(
        'annual-settlement-payroll',
        'Promítnutí výsledku do mzdy',
        'zpracovat výsledek a kontrolní výstupy v mzdovém období',
        'case_study',
        true,
      ),
    ],
    practicalScenarios: [
      'Zaměstnanec s více potvrzeními o příjmech.',
      'Chybějící doklad k uplatňovanému ročnímu nároku.',
    ],
    plannedExamples: [
      'Roční zúčtování z explicitně zadaných příjmů, záloh a nároků.',
      'Kontrola přeplatku proti měsíčnímu daňovému výstupu.',
    ],
    sourceTopics: [
      'PDF kapitola 6 - Roční zúčtování záloh a daňového zvýhodnění',
    ],
  }),
  module({
    id: 'wage-deductions-enforcement',
    title: 'Srážky ze mzdy, exekuce a insolvence',
    description:
      'Pořadí srážek, postižitelný příjem a kontrolní postup u výkonu rozhodnutí a insolvence.',
    difficulty: 'advanced',
    estimatedMinutes: 270,
    prerequisites: ['net-wage'],
    learningObjectives: [
      'Rozlišit zákonné, dohodnuté a exekuční srážky.',
      'Určit pořadí pohledávek a příjmy relevantní pro srážky.',
      'Vypočítat modelovou srážku z verzovaných nezabavitelných částek.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'deduction-types',
        'Druhy srážek ze mzdy',
        'roztřídit srážky podle právního podkladu',
      ),
      lesson(
        'deduction-agreements',
        'Dohody o srážkách',
        'zkontrolovat rozsah a evidenci dohodnuté srážky',
      ),
      lesson(
        'enforcement-orders',
        'Exekuční příkazy a pořadí',
        'určit rozhodné datum a pořadí modelových pohledávek',
        'process',
      ),
      lesson(
        'protected-amount',
        'Nezabavitelná částka',
        'vypočítat chráněnou část příjmu ze zadaných parametrů',
        'worked_example',
        true,
      ),
      lesson(
        'priority-claims',
        'Přednostní a nepřednostní pohledávky',
        'rozdělit srazitelnou část podle druhu pohledávek',
        'worked_example',
        true,
      ),
      lesson(
        'insolvency-deductions',
        'Srážky v insolvenci',
        'rozpoznat specifika insolvenčního režimu',
      ),
      lesson(
        'multiple-enforcement-case',
        'Souběh více srážek',
        'zpracovat modelový souběh s kontrolou pořadí',
        'case_study',
        true,
        true,
        50,
      ),
    ],
    practicalScenarios: [
      'Doručení druhého exekučního příkazu v průběhu zaměstnání.',
      'Skončení zaměstnance s běžícími srážkami.',
    ],
    plannedExamples: [
      'Nezabavitelná částka podle explicitně zadaných rodinných poměrů a parametrů.',
      'Rozdělení srazitelné části mezi více pohledávek.',
    ],
    sourceTopics: ['PDF kapitola 2 - Srážky ze mzdy, exekuce a insolvence'],
  }),
  module({
    id: 'travel-reimbursements',
    title: 'Cestovní náhrady a náhrady výdajů',
    description:
      'Pracovní cesta, doložené výdaje a oddělení cestovních náhrad od mzdových plnění.',
    difficulty: 'advanced',
    estimatedMinutes: 220,
    prerequisites: ['remuneration-basics', 'gross-wage'],
    learningObjectives: [
      'Zkontrolovat podklady pracovní cesty před vyúčtováním.',
      'Vypočítat modelové náhrady z verzovaných sazeb a doložených údajů.',
      'Rozlišit cestovní náhradu, náhradu jiného výdaje a mzdové plnění.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'travel-order',
        'Pracovní cesta a cestovní příkaz',
        'zkontrolovat schválení, čas a místo pracovní cesty',
      ),
      lesson(
        'travel-meals',
        'Stravné',
        'určit vstupy pro výpočet tuzemského stravného',
        'worked_example',
        true,
      ),
      lesson(
        'travel-transport',
        'Jízdní výdaje a použití vozidla',
        'roztřídit doložené jízdní výdaje a vstupy pro náhradu',
        'worked_example',
        true,
      ),
      lesson(
        'travel-other-costs',
        'Ubytování a nutné vedlejší výdaje',
        'zkontrolovat účel a doklady dalších výdajů',
      ),
      lesson(
        'foreign-travel-basics',
        'Základ zahraniční pracovní cesty',
        'identifikovat měnu, časy přechodů a poskytnutá jídla',
      ),
      lesson(
        'travel-settlement',
        'Vyúčtování pracovní cesty',
        'sestavit kontrolní vyúčtování a vypořádat zálohu',
        'case_study',
        true,
        true,
        45,
      ),
    ],
    practicalScenarios: [
      'Tuzemská cesta s bezplatně poskytnutým jídlem.',
      'Vyúčtování cesty po poskytnuté záloze.',
    ],
    plannedExamples: [
      'Stravné podle zadané délky cesty, sazeb a krácení.',
      'Náhrada za použití soukromého vozidla podle explicitních parametrů.',
      'Vypořádání cestovní zálohy a doložených výdajů.',
    ],
    sourceTopics: ['PDF kapitola 2 - Cestovní náhrady a náhrady výdajů'],
  }),
  module({
    id: 'foreign-employees',
    title: 'Zaměstnávání cizinců a občanů EU',
    description:
      'Pracovní oprávnění, informační povinnosti a mzdové vstupy při zaměstnávání osob ze zahraničí.',
    difficulty: 'advanced',
    estimatedMinutes: 230,
    prerequisites: ['employee-onboarding', 'payroll-records-reporting'],
    learningObjectives: [
      'Rozlišit základní režimy občana EU a občana třetí země.',
      'Zkontrolovat oprávnění a informační podklady před nástupem.',
      'Identifikovat přeshraniční daňové a pojistné otázky vyžadující ověření.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'eu-worker',
        'Občan EU v českém zaměstnání',
        'určit základní evidenční a informační kroky',
      ),
      lesson(
        'third-country-worker',
        'Občan třetí země',
        'rozlišit běžné typy pracovních oprávnění a jejich kontrolu',
      ),
      lesson(
        'foreign-worker-notifications',
        'Informační a evidenční povinnosti',
        'sestavit postup oznámení nástupu, změny a skončení',
        'process',
      ),
      lesson(
        'foreign-tax-residence',
        'Daňová rezidence a prokazování nároků',
        'rozpoznat situaci vyžadující doložení daňového postavení',
      ),
      lesson(
        'cross-border-insurance',
        'Přeshraniční sociální a zdravotní pojištění',
        'identifikovat dokumenty rozhodné pro příslušnost k systému',
      ),
      lesson(
        'foreign-onboarding-case',
        'Nástup zahraničního zaměstnance',
        'provést kontrolu modelového nástupu bez domýšlení chybějících údajů',
        'case_study',
        false,
        true,
        45,
      ),
    ],
    practicalScenarios: [
      'Nástup občana EU s přeshraničním pojistným dokumentem.',
      'Blížící se konec platnosti pracovního oprávnění.',
    ],
    plannedExamples: [
      'Modelové posouzení daňového režimu při explicitně zadané rezidenci a příjmech.',
    ],
    sourceTopics: ['PDF kapitola 5 - Zaměstnávání cizinců a občanů EU'],
  }),
  module({
    id: 'pension-insurance-records',
    title: 'Důchodové pojištění a evidenční výstupy',
    description:
      'Doby pojištění, vykazování důchodových údajů přes JMHZ od roku 2026 a zachované případy použití ELDP.',
    difficulty: 'advanced',
    estimatedMinutes: 230,
    prerequisites: ['social-security', 'payroll-records-reporting'],
    learningObjectives: [
      'Rozlišit dobu pojištění a vyloučené či náhradní doby relevantní pro evidenci.',
      'Připravit důchodové údaje standardně vykazované prostřednictvím JMHZ od roku 2026.',
      'Rozpoznat starší, přechodný, opravný nebo vyžádaný případ použití ELDP.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'pension-insurance-periods',
        'Doby důchodového pojištění',
        'vybrat období účasti zaměstnance pro evidenci',
      ),
      lesson(
        'excluded-periods',
        'Vyloučené doby',
        'rozpoznat nepřítomnosti vykazované zvláštním způsobem',
      ),
      lesson(
        'eldp-purpose',
        'Důchodová evidence od roku 2026: JMHZ a případy ELDP',
        'rozlišit standardní vykazování důchodových údajů přes JMHZ a zachované použití ELDP',
      ),
      lesson(
        'eldp-fields',
        'Údaje důchodového pojištění v JMHZ',
        'propojit identifikační, pojistné a vyloučené doby s měsíčními daty vykazovanými od roku 2026',
      ),
      lesson(
        'eldp-transitional-cases',
        'Starší, přechodné a vyžádané případy ELDP',
        'rozlišit ELDP pro starší období, přechodné situace, opravy a podání na výzvu orgánu sociálního zabezpečení',
        'process',
      ),
      lesson(
        'eldp-validation',
        'Kontrola důchodových údajů v JMHZ a ELDP',
        'odhalit nesoulad dnů, příjmů a vyloučených dob podle typu evidenčního výstupu',
        'practice',
        true,
      ),
      lesson(
        'pension-request-cooperation',
        'Součinnost při žádosti o důchod',
        'připravit podklady požadované v modelové žádosti',
        'process',
      ),
    ],
    practicalScenarios: [
      'Oprava evidenčního výstupu po zjištění chybné vyloučené doby.',
      'Souběh dvou pojištěných činností u jednoho zaměstnavatele.',
    ],
    plannedExamples: [
      'Kontrola počtu evidovaných dnů proti explicitně zadanému kalendáři nepřítomností.',
    ],
    sourceTopics: ['PDF kapitola 10 - Důchodové pojištění a ELDP'],
  }),
  module({
    id: 'work-injuries-compensation',
    title: 'Pracovní úrazy a náhrady újmy',
    description:
      'Evidence pracovního úrazu, mzdové podklady pro náhrady a součinnost při odškodnění.',
    difficulty: 'advanced',
    estimatedMinutes: 230,
    prerequisites: ['average-earnings', 'sickness-wage-compensation'],
    learningObjectives: [
      'Rozpoznat mzdové a evidenční kroky po pracovním úrazu.',
      'Připravit údaje o průměrném výdělku a ztrátě na výdělku.',
      'Rozlišit jednotlivé náhrady bez překročení role mzdové účtárny.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'work-injury-record',
        'Evidence pracovního úrazu',
        'popsat návaznost záznamu úrazu na mzdové podklady',
      ),
      lesson(
        'employer-damage-liability',
        'Odpovědnost a druhy náhrad',
        'rozlišit základní kategorie majetkové a nemajetkové újmy',
      ),
      lesson(
        'earnings-loss-sickness',
        'Ztráta na výdělku během pracovní neschopnosti',
        'určit vstupy pro výpočet náhrady',
        'worked_example',
        true,
      ),
      lesson(
        'earnings-loss-after',
        'Ztráta na výdělku po pracovní neschopnosti',
        'rozpoznat dlouhodobý nárok a potřebná data',
      ),
      lesson(
        'injury-insurer-cooperation',
        'Součinnost s pojišťovnou',
        'připravit kontrolovatelný balíček mzdových podkladů',
        'process',
      ),
      lesson(
        'injury-payroll-case',
        'Mzdový případ pracovního úrazu',
        'sladit nemoc, náhradu mzdy a podklady pro odškodnění',
        'case_study',
        true,
        true,
        45,
      ),
    ],
    practicalScenarios: [
      'Pracovní úraz s pracovní neschopností přes dvě mzdová období.',
      'Dodání podkladů pojistiteli po uzavření měsíce.',
    ],
    plannedExamples: [
      'Ztráta na výdělku během pracovní neschopnosti z explicitně zadaných částek.',
      'Kontrola průměrného výdělku použitého pro odškodnění.',
    ],
    sourceTopics: ['PDF kapitoly 11 a 12 - Náhrada újmy a pracovní úrazy'],
  }),
  module({
    id: 'payroll-controls-corrections',
    title: 'Kontroly, sankce a opravy mzdových chyb',
    description:
      'Příprava na kontrolu, práce s nálezem a bezpečný opravný proces napříč mzdovými agendami.',
    difficulty: 'advanced',
    estimatedMinutes: 240,
    prerequisites: ['monthly-payroll-capstone'],
    learningObjectives: [
      'Rozlišit působnost hlavních kontrolních institucí.',
      'Připravit mzdové podklady a kontrolní stopu pro kontrolu.',
      'Navrhnout opravu chyby včetně dopadu do výstupů a komunikace.',
    ],
    category: 'advanced',
    lessons: [
      lesson(
        'inspection-bodies',
        'Kontrolní orgány v mzdové agendě',
        'přiřadit oblast kontroly příslušné instituci',
      ),
      lesson(
        'inspection-preparation',
        'Příprava podkladů ke kontrole',
        'sestavit úplný a omezený balíček požadovaných dokumentů',
        'process',
      ),
      lesson(
        'payroll-error-types',
        'Typologie mzdových chyb',
        'rozlišit vstupní, výpočtovou, evidenční a ohlašovací chybu',
      ),
      lesson(
        'correction-impact-map',
        'Mapa dopadů opravy',
        'určit dotčenou mzdu, daň, pojistné, hlášení a platbu',
        'process',
      ),
      lesson(
        'correction-communication',
        'Komunikace opravy',
        'připravit srozumitelné vysvětlení bez zpřístupnění nadbytečných údajů',
      ),
      lesson(
        'sanctions-prevention',
        'Sankční rizika a prevence',
        'přiřadit preventivní kontrolu k typickému pochybení',
      ),
      lesson(
        'audit-case',
        'Simulace kontroly a nápravy',
        'doložit původ výsledku a zpracovat modelový nález',
        'case_study',
        true,
        true,
        50,
      ),
    ],
    practicalScenarios: [
      'Kontrola zjistí rozdíl mezi docházkou a příplatkem.',
      'Chybný pojistný výstup vyžaduje opravu několika období.',
    ],
    plannedExamples: [
      'Vyčíslení rozdílu mzdy, pojistného a daně při explicitně zadaných parametrech.',
    ],
    sourceTopics: [
      'PDF kapitola 4 - Kontrolní orgány',
      'Sankční a opravné postupy napříč PDF',
    ],
  }),
]

const rawOutline: CourseOutline = {
  id: 'payroll-cz',
  title: 'České mzdové účetnictví od základů k měsíční uzávěrce',
  version: '2026.2-outline',
  targetOutcome:
    'Absolvent samostatně převezme podklady, zpracuje běžnou měsíční mzdu zaměstnance, provede kontrolu a připraví související evidenční a ohlašovací výstupy.',
  modules,
}

export const payrollOutline = courseOutlineSchema.parse(
  rawOutline,
) as CourseOutline
export const outlineLessons = payrollOutline.modules.flatMap(
  (item) => item.lessons,
)
