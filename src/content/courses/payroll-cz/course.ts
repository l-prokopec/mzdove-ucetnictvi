import type { Course, Exercise, Lesson } from '../../../types/course'
import { courseSchema } from '../../schema'

type LessonSeed = {
  id: string
  title: string
  summary: string
  objectives: string[]
  terms: [string, string][]
  example: [string, string]
  checks: [string, string, string, string]
  task: string
  model: string
}

const lessonSeeds: LessonSeed[] = [
  {
    id: 'what-is-payroll',
    title: 'Co je mzdové účetnictví',
    summary:
      'Mzdové účetnictví propojuje pracovní podklady, výpočet odměny, povinné odvody, evidenci a předání výstupů. Dobrá praxe stojí na úplnosti, správnosti, včasnosti a dohledatelnosti.',
    objectives: [
      'Popsat účel mzdové agendy',
      'Rozlišit vstupy, zpracování a výstupy',
      'Vysvětlit význam kontrolní stopy',
    ],
    terms: [
      [
        'Mzdová agenda',
        'Soubor opakovaných činností od převzetí podkladů po archivaci výstupů.',
      ],
      ['Mzdový podklad', 'Ověřitelná informace potřebná pro zpracování mzdy.'],
      ['Kontrolní stopa', 'Dohledatelný záznam, z čeho a jak výsledek vznikl.'],
    ],
    example: [
      'Vedoucí předá docházku a schválenou odměnu. Účetní zkontroluje úplnost, zpracuje podklady a uloží výstupy.',
      'Nejdříve se ověřují vstupy, poté se provede zpracování a kontrola; až následně se předají výstupy.',
    ],
    checks: [
      'Co nejlépe vystihuje mzdovou agendu?',
      'Soubor navazujících evidenčních a výpočtových činností',
      'Pouze odeslání výplaty',
      'Pouze evidence docházky',
    ],
    task: 'Sepište pět vstupů, které byste očekávali před zpracováním měsíční mzdy.',
    model:
      'Například docházka, změny pracovních vztahů, schválené odměny, překážky v práci a podklady ke srážkám.',
  },
  {
    id: 'payroll-role',
    title: 'Role a odpovědnost mzdové účetní',
    summary:
      'Mzdová účetní přebírá a kontroluje podklady, zpracovává agendu, chrání osobní údaje, dodržuje termíny a předává srozumitelné výstupy. Za věcný podklad obvykle odpovídá jeho původce; účetní má nesrovnalost zachytit a vyjasnit.',
    objectives: [
      'Vymezit odpovědnosti mzdové účetní',
      'Rozpoznat potřebu eskalace nesrovnalosti',
      'Popsat zásadu minimálního přístupu k údajům',
    ],
    terms: [
      [
        'Odpovědnost',
        'Povinnost vykonat svěřenou činnost správně a doložitelně.',
      ],
      ['Eskalace', 'Předání nejasnosti oprávněné osobě k rozhodnutí.'],
      ['Důvěrnost', 'Ochrana údajů před neoprávněným zpřístupněním.'],
    ],
    example: [
      'V docházce chybí schválení přesčasu, ale v e-mailu je uvedena odměna.',
      'Účetní nesmí údaj domyslet. Vyžádá si schválení podle interního postupu a zachová záznam o vyjasnění.',
    ],
    checks: [
      'Jak reagovat na neúplný podklad?',
      'Vyžádat doplnění od oprávněné osoby',
      'Doplnit pravděpodobnou hodnotu',
      'Podklad bez záznamu ignorovat',
    ],
    task: 'Navrhněte krátký kontrolní postup pro převzetí citlivého mzdového podkladu.',
    model:
      'Ověřit odesílatele a oprávnění, úplnost, období, schválení, bezpečné uložení a zaznamenat případnou nesrovnalost.',
  },
  {
    id: 'payroll-month',
    title: 'Průběh typického mzdového měsíce',
    summary:
      'Mzdový měsíc má rytmus: uzavření vstupů, kontrolu změn a docházky, zpracování, nezávislou kontrolu, předání výstupů, hlášení a archivaci. Konkrétní termíny se řídí aktuálními předpisy a interním kalendářem.',
    objectives: [
      'Seřadit fáze mzdového měsíce',
      'Popsat význam uzávěrky vstupů',
      'Navrhnout kontrolní bod',
    ],
    terms: [
      [
        'Uzávěrka vstupů',
        'Dohodnutý okamžik, ke kterému mají být podklady kompletní.',
      ],
      ['Rekapitulace', 'Souhrnný kontrolní výstup za zpracované období.'],
      ['Archivace', 'Řízené uložení podkladů a výstupů po stanovenou dobu.'],
    ],
    example: [
      'Po uzávěrce dorazí oprava docházky.',
      'Účetní posoudí dopad, použije schválený opravný postup a změnu zdokumentuje; nepřepíše tiše původní vstup.',
    ],
    checks: [
      'Který krok patří před finální předání výstupů?',
      'Kontrola rekapitulace',
      'Likvidace podkladů',
      'Odhad chybějících změn',
    ],
    task: 'Sestavte jednoduchý kalendář mzdového měsíce bez konkrétních zákonných lhůt.',
    model:
      'Převzetí a uzávěrka vstupů → kontrola → zpracování → rekapitulace → schválení → předání výstupů → archivace.',
  },
  {
    id: 'employee-employer-work',
    title: 'Zaměstnanec, zaměstnavatel a závislá práce',
    summary:
      'Závislá práce je osobní výkon práce zaměstnance pro zaměstnavatele v organizačním vztahu a podle jeho pokynů. Pro výuku rozlišujeme role stran a pracovní podklad; konkrétní právní posouzení vždy vyžaduje aktuální znění předpisů.',
    objectives: [
      'Rozlišit zaměstnance a zaměstnavatele',
      'Popsat základní znaky závislé práce',
      'Odlišit roli od typu odměny',
    ],
    terms: [
      [
        'Zaměstnanec',
        'Fyzická osoba vykonávající práci v pracovněprávním vztahu.',
      ],
      ['Zaměstnavatel', 'Osoba nebo organizace, pro kterou se práce vykonává.'],
      [
        'Závislá práce',
        'Práce vykonávaná osobně ve vztahu nadřízenosti a podřízenosti podle pokynů.',
      ],
    ],
    example: [
      'Pracovník osobně vykonává pravidelnou práci podle rozvrhu a pokynů firmy.',
      'Situace vykazuje typické znaky závislé práce; přesné právní zařazení se ověřuje podle všech okolností a aktuální úpravy.',
    ],
    checks: [
      'Kdo je zaměstnancem?',
      'Fyzická osoba vykonávající práci v pracovněprávním vztahu',
      'Každý dodavatel firmy',
      'Pouze vedoucí pracovník',
    ],
    task: 'U modelové situace vyznačte, kdo dává pokyny, kdo práci osobně vykonává a kdo nese organizační odpovědnost.',
    model:
      'Zaměstnavatel organizuje práci a dává pokyny; zaměstnanec práci osobně vykonává v rámci sjednaného vztahu.',
  },
  {
    id: 'wage-salary-agreement',
    title: 'Mzda, plat a odměna z dohody',
    summary:
      'Pojmy mzda, plat a odměna z dohody nejsou zaměnitelné. Rozlišení vychází z povahy zaměstnavatele a pracovněprávního vztahu, nikoli z toho, zda je částka poslána na účet nebo vyplacena hotově.',
    objectives: [
      'Rozlišit tři základní pojmy odměňování',
      'Nespojovat formu výplaty s názvem odměny',
      'Určit potřebné vstupní informace',
    ],
    terms: [
      [
        'Mzda',
        'Peněžité plnění za práci v zaměstnaneckém vztahu, pro který se používá mzdové odměňování.',
      ],
      [
        'Plat',
        'Plnění za práci v případech vymezených právní úpravou pro platovou sféru.',
      ],
      [
        'Odměna z dohody',
        'Odměna za práci konanou na základě dohody mimo pracovní poměr.',
      ],
    ],
    example: [
      'Dvě osoby dostanou stejnou částku, jedna v pracovním poměru a druhá na dohodu.',
      'Stejná výše neznamená stejný právní druh odměny; rozhoduje vztah a režim zaměstnavatele.',
    ],
    checks: [
      'Co rozhoduje o označení plnění?',
      'Právní režim vztahu a zaměstnavatele',
      'Barva výplatní pásky',
      'Den odeslání platby',
    ],
    task: 'Sepište otázky, které musíte položit před určením, zda jde o mzdu, plat, nebo odměnu z dohody.',
    model:
      'Kdo je zaměstnavatel? Jaký pracovněprávní vztah byl uzavřen? Za jakou práci a období se plnění poskytuje?',
  },
  {
    id: 'gross-wage-components',
    title: 'Základní složky hrubé mzdy',
    summary:
      'Hrubou mzdu lze pro kontrolu rozložit na předem určenou základní složku a další složky navázané na výkon, podmínky nebo rozhodnutí zaměstnavatele. Ne každé peněžní plnění zaměstnanci je automaticky složkou mzdy.',
    objectives: [
      'Popsat běžné kategorie složek',
      'Rozlišit mzdovou složku od jiného plnění',
      'Zkontrolovat úplnost mzdového podkladu',
    ],
    terms: [
      [
        'Základní mzda',
        'Předem sjednaná, stanovená nebo určená základní složka odměny.',
      ],
      [
        'Pohyblivá složka',
        'Složka navázaná na splnění podmínek nebo rozhodnutí.',
      ],
      [
        'Hrubá mzda',
        'Souhrn mzdových složek před povinnými srážkami a odvody.',
      ],
    ],
    example: [
      'Podklad uvádí základní mzdu 32 000 Kč a schválenou odměnu 2 000 Kč.',
      'Didaktický součet těchto dvou zadaných složek je 34 000 Kč. Nejde o výpočet čisté mzdy.',
    ],
    checks: [
      'Co je vhodné před součtem složek ověřit?',
      'Jejich období, důvod a schválení',
      'Pouze počet znaků v názvu',
      'Číslo bankovního účtu',
    ],
    task: 'Rozdělte modelový seznam plnění na mzdové složky a položky vyžadující další posouzení.',
    model:
      'U každé položky ověřit účel, vazbu na práci, období a právní či interní podklad; nejasnou položku nezařazovat odhadem.',
  },
  {
    id: 'gross-wage-example',
    title: 'Jednoduchý modelový příklad sestavení hrubé mzdy',
    summary:
      'Při sestavení hrubé mzdy pracujeme jen s ověřenými položkami stejného období, zaznamenáme zdroj každé položky a použijeme přesnou peněžní aritmetiku. Příklad je didaktický a neobsahuje výpočet čisté mzdy.',
    objectives: [
      'Sečíst zadané složky hrubé mzdy',
      'Vytvořit kontrolní rekapitulaci',
      'Vysvětlit omezení modelového výpočtu',
    ],
    terms: [
      [
        'Rozhodné období',
        'Období, ke kterému se vstup nebo výsledek vztahuje.',
      ],
      ['Rekapitulace složek', 'Seznam položek, částek a jejich zdrojů.'],
      [
        'Zaokrouhlení',
        'Předem určený způsob převodu výsledku na požadovanou přesnost.',
      ],
    ],
    example: [
      'Základní mzda 30 000 Kč, osobní ohodnocení 2 500 Kč a schválená odměna 1 200 Kč.',
      'Didaktický součet je 33 700 Kč. Každá složka musí mít doložený podklad; výsledek není čistou mzdou.',
    ],
    checks: [
      'Kolik činí součet 30 000 Kč, 2 500 Kč a 1 200 Kč?',
      '33 700 Kč',
      '32 500 Kč',
      '34 700 Kč',
    ],
    task: 'Vytvořte rekapitulaci tří složek z příkladu včetně názvu, částky, období a zdroje.',
    model:
      'Tři řádky pro základní mzdu 30 000 Kč, osobní ohodnocení 2 500 Kč a odměnu 1 200 Kč; doplnit shodné období a odkaz na schválený podklad.',
  },
]

const makeExercises = (seed: LessonSeed, lessonIndex: number): Exercise[] => {
  const id = seed.id
  const exercises: Exercise[] = [
    {
      id: `${id}-q1`,
      type: 'single_choice',
      prompt: seed.checks[0],
      options: [
        { id: 'a', text: seed.checks[1] },
        { id: 'b', text: seed.checks[2] },
        { id: 'c', text: seed.checks[3] },
      ],
      correctOptionId: 'a',
      skillIds: [`skill-${id}`],
      explanation: seed.summary,
      commonMistake:
        'Rozhodnutí podle povrchního znaku místo ověření podkladu.',
    },
    {
      id: `${id}-q2`,
      type: 'multiple_choice',
      prompt: 'Které kroky podporují správný a dohledatelný postup?',
      options: [
        { id: 'verify', text: 'Ověřit úplnost podkladu' },
        { id: 'record', text: 'Zachovat kontrolní stopu' },
        { id: 'guess', text: 'Chybějící údaj odhadnout' },
      ],
      correctOptionIds: ['verify', 'record'],
      skillIds: [`skill-${id}`],
      explanation: 'Správný postup stojí na ověření a dohledatelnosti.',
      commonMistake: 'Odhad nenahrazuje schválený podklad.',
    },
    {
      id: `${id}-q3`,
      type: 'short_text',
      prompt: `Doplňte klíčový pojem: ${seed.terms[0][1]}`,
      acceptedAnswers: [seed.terms[0][0]],
      ignoreDiacritics: true,
      skillIds: [`skill-${id}`],
      explanation: `Správný pojem je ${seed.terms[0][0]}.`,
      commonMistake: 'Záměna s příbuzným, ale významově odlišným pojmem.',
    },
    {
      id: `${id}-q4`,
      type: 'ordering',
      prompt: 'Seřaďte obecný kontrolní postup.',
      steps: [
        { id: 'receive', text: 'Převzít podklad' },
        { id: 'verify', text: 'Ověřit úplnost a oprávnění' },
        { id: 'process', text: 'Zpracovat' },
        { id: 'check', text: 'Zkontrolovat výsledek' },
      ],
      correctOrder: ['receive', 'verify', 'process', 'check'],
      skillIds: [`skill-${id}`],
      explanation:
        'Zpracování následuje až po kontrole vstupů a končí kontrolou výsledku.',
      commonMistake: 'Zpracování neověřeného vstupu.',
    },
    {
      id: `${id}-task`,
      type: 'self_assessed',
      prompt: seed.task,
      modelSolution: seed.model,
      skillIds: [`skill-${id}`],
      explanation:
        'Porovnejte vlastní postup s modelovým řešením a ohodnoťte se poctivě.',
      commonMistake:
        'Aplikace otevřenou odpověď automaticky odborně nehodnotí.',
    },
  ]
  if (lessonIndex === 6)
    exercises.splice(3, 0, {
      id: `${id}-q-numeric`,
      type: 'numeric',
      prompt: 'Sečtěte 30 000 Kč, 2 500 Kč a 1 200 Kč.',
      expected: '33700',
      tolerance: '0',
      unit: 'Kč',
      rounding: 'whole_half_up',
      solutionSteps: ['30 000 + 2 500 + 1 200 = 33 700'],
      skillIds: [`skill-${id}`],
      explanation: 'Součet zadaných složek je 33 700 Kč.',
      commonMistake: 'Vynechání jedné ze tří položek.',
    })
  return exercises
}

const introductionLessons: Lesson[] = lessonSeeds.map((seed, index) => ({
  id: seed.id,
  moduleId: 'introduction',
  title: seed.title,
  order: index + 1,
  status: 'available',
  objectives: seed.objectives,
  skillIds: [`skill-${seed.id}`],
  legalValidity: {
    year: 2026,
    note: 'Obecný didaktický obsah; konkrétní pravidla vždy ověřte v aktuálních předpisech.',
  },
  blocks: [
    { type: 'paragraph', text: seed.summary },
    { type: 'heading', text: 'Klíčové pojmy' },
    ...seed.terms.map(([term, definition]) => ({
      type: 'definition' as const,
      term,
      definition,
    })),
    {
      type: 'example',
      title: 'Praktická situace',
      situation: seed.example[0],
      solution: seed.example[1],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Studijní pomůcka nenahrazuje aktuální právní, daňové ani mzdové poradenství.',
    },
    { type: 'summary', items: seed.objectives },
  ],
  flashcards: seed.terms.map(([term, definition], termIndex) => ({
    id: `${seed.id}-card-${termIndex + 1}`,
    front: term,
    back: definition,
    explanation: `Pojem patří k tématu „${seed.title}“.`,
    skillIds: [`skill-${seed.id}`],
  })),
  exercises: makeExercises(seed, index),
  sources: [
    { title: 'Původní obecný didaktický obsah aplikace', kind: 'didactic' },
  ],
}))

const plannedTitles = [
  'Pracovněprávní základy',
  'Pracovní poměr',
  'DPP a DPČ',
  'Pracovní doba a doba odpočinku',
  'Překážky v práci',
  'Dovolená',
  'Základy odměňování',
  'Mzda, plat a odměna z dohody',
  'Mzdová zvýhodnění a příplatky',
  'Splatnost a výplata mzdy',
  'Srážky ze mzdy',
  'Exekuce a insolvence',
  'Cestovní náhrady',
  'Průměrný a pravděpodobný výdělek',
  'Osobní spis a ochrana osobních údajů',
  'Kontrolní orgány',
  'Zaměstnavatel a Úřad práce',
  'Zaměstnávání osob se zdravotním postižením',
  'Zaměstnávání cizinců a občanů EU',
  'Daň z příjmů ze závislé činnosti',
  'Zálohová a srážková daň',
  'Prohlášení poplatníka',
  'Slevy na dani',
  'Daňové zvýhodnění',
  'Roční zúčtování',
  'Zdravotní pojištění',
  'Sociální zabezpečení',
  'Nemocenské pojištění',
  'Náhrada mzdy při pracovní neschopnosti',
  'Nemocenské dávky',
  'Důchodové pojištění a ELDP',
  'Náhrada škody',
  'Pracovní úrazy a nemoci z povolání',
  'Jednotné měsíční hlášení zaměstnavatele',
  'Měsíční a roční uzávěrka mzdové agendy',
  'Princip práce v programech POHODA, HELIOS a PAMICA',
  'Závěrečná zkouška',
  'Simulace práce ve fiktivní firmě',
]

const slug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const pdfChapterByPlannedIndex = (index: number) => {
  if (index <= 5) return 'PDF kapitola 1 – Pracovněprávní základy'
  if (index <= 13) return 'PDF kapitola 2 – Základy odměňování'
  if (index === 14)
    return 'PDF kapitola 3 – Ochrana osobních údajů a vedení osobního spisu'
  if (index === 15) return 'PDF kapitola 4 – Kontrolní orgány'
  if (index <= 18) return 'PDF kapitola 5 – Zaměstnavatelé a Úřad práce'
  if (index <= 24)
    return 'PDF kapitola 6 – Daň z příjmů fyzických osob ze závislé činnosti'
  if (index === 25) return 'PDF kapitola 7 – Zdravotní pojištění'
  if (index === 26) return 'PDF kapitola 8 – Sociální zabezpečení'
  if (index <= 29) return 'PDF kapitola 9 – Nemocenské pojištění'
  if (index === 30) return 'PDF kapitola 10 – Důchodové pojištění'
  if (index === 31) return 'PDF kapitola 11 – Náhrada újmy'
  if (index === 32)
    return 'PDF kapitola 12 – Pracovní úrazy a nemoci z povolání'
  if (index === 33)
    return 'PDF kapitola 13 – Jednotné měsíční hlášení zaměstnavatele'
  return 'Didaktické završení napříč kapitolami PDF'
}

const rawCourse: Course = {
  id: 'payroll-cz',
  title: 'České mzdové účetnictví',
  description:
    'Systematická cesta od základních pojmů k práci juniorní mzdové účetní.',
  version: '2026.1',
  defaultLegalYear: 2026,
  modules: [
    {
      id: 'introduction',
      sourceReference: 'Didaktický úvod před kapitolou 1',
      title: 'Úvod do mzdového účetnictví',
      description: 'Role, pracovní postup a základní pojmy mzdové agendy.',
      order: 1,
      status: 'available',
      lessons: introductionLessons,
    },
    ...plannedTitles.map((title, index) => ({
      id: slug(title),
      sourceReference: pdfChapterByPlannedIndex(index),
      title,
      description:
        'Připravená osnova pro následné odborné zpracování a ověření.',
      order: index + 2,
      status: 'planned' as const,
      lessons: [],
    })),
  ],
}

export const payrollCourse = courseSchema.parse(rawCourse) as Course
export const availableLessons = payrollCourse.modules
  .flatMap((module) => module.lessons)
  .filter((lesson) => lesson.status === 'available')
export const findLesson = (lessonId: string) =>
  availableLessons.find((lesson) => lesson.id === lessonId)
