import { defineLessonContent } from '../define'

export const onboardingNotificationsContent = defineLessonContent({
  moduleId: 'employee-onboarding',
  skillIds: [
    'onboarding-notification-sequence',
    'regzec-onboarding',
    'health-notification-onboarding',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-07-01',
    verifiedAt: '2026-07-11',
    note: 'Ohlašovací proces při nástupu zaměstnance včetně povinnosti evidence před výkonem práce od 1. července 2026, REGZEC, JMHZ a zdravotního pojištění.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nástup není jen založení mzdové karty',
    },
    {
      type: 'paragraph',
      text: 'Nástup zaměstnance spouští interní i vnější kroky. Mzdová účetní musí rozlišit, co se provádí před prvním výkonem práce, co po skutečném nástupu a co se následně vykazuje v měsíčních procesech.',
    },
    {
      type: 'heading',
      text: 'Interní přednástupní kroky',
    },
    {
      type: 'list',
      items: [
        'ověření finální pracovněprávní dokumentace',
        'ověření identity a vstupních údajů',
        'založení konkrétního zaměstnání',
        'převzetí mzdového, daňového a pojistného podkladu',
        'předání údajů pro docházku a organizační zařazení',
        'zajištění pracovnělékařských a bezpečnostních kroků, jsou-li pro danou práci vyžadovány',
        'určení vlastníků jednotlivých oznámení',
      ],
    },
    {
      type: 'heading',
      text: 'Evidence zaměstnance od 1. července 2026',
    },
    {
      type: 'paragraph',
      text: 'Od 1. července 2026 musí zaměstnavatel přihlásit zaměstnance do evidence zaměstnanců nejpozději před okamžikem, kdy začne vykonávat práci. Přihlášení lze provést nejdříve osm kalendářních dnů před předpokládaným dnem nástupu.',
    },
    {
      type: 'definition',
      term: 'REGZEC',
      definition:
        'Elektronické podání Registrace zaměstnance používané k přihlášení, změně údajů a odhlášení zaměstnance v evidenci zaměstnanců pro systém JMHZ.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Nestačí přihlásit zaměstnance až při první mzdové uzávěrce. Od 1. července 2026 musí být povinnost splněna ještě před samotným zahájením výkonu práce.',
    },
    {
      type: 'heading',
      text: 'Částečné přihlášení',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance, který není zahraničním zaměstnancem, lze použít částečné přihlášení s předepsaným základním rozsahem údajů. Zbývající požadované údaje je nutné doplnit ve stanovené lhůtě po skutečném nástupu.',
    },
    {
      type: 'list',
      items: [
        'jméno a příjmení',
        'rodné příjmení',
        'rodné číslo',
        'místo narození',
        'státní občanství',
        'předpokládaný den nástupu',
        'variabilní symbol zaměstnavatele',
      ],
    },
    {
      type: 'paragraph',
      text: 'Při částečném přihlášení musí zaměstnavatel ostatní registrační údaje oznámit do osmi dnů ode dne, kdy zaměstnanec skutečně nastoupil k výkonu práce.',
    },
    {
      type: 'heading',
      text: 'Zahraniční zaměstnanec',
    },
    {
      type: 'paragraph',
      text: 'U zahraničního zaměstnance se uplatňuje přísnější přednástupní kontrola a nelze automaticky spoléhat na částečné přihlášení. Vedle evidence zaměstnanců mohou vznikat další povinnosti podle zaměstnanosti, pobytového postavení a přeshraničního pojištění.',
    },
    {
      type: 'heading',
      text: 'Nenastoupení zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Pokud byl zaměstnanec předem přihlášen, ale do práce nenastoupil, musí zaměstnavatel tuto skutečnost oznámit ČSSZ do osmi dnů od předpokládaného dne nástupu. Přihlášení se nesmí ponechat bez opravy.',
    },
    {
      type: 'example',
      title: 'Předem přihlášený zaměstnanec nenastoupí',
      situation:
        'Zaměstnanec byl částečně přihlášen před plánovaným nástupem 1. září, ale zaměstnavateli oznámí, že nenastoupí.',
      solution:
        'Odpovědná osoba zaznamená nenastoupení, zajistí oznámení ČSSZ ve stanovené lhůtě a zruší nebo opraví navazující interní kroky. Nevytvoří fiktivní odpracovanou dobu ani mzdu.',
    },
    {
      type: 'heading',
      text: 'Zdravotní pojišťovna',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel oznamuje příslušné zdravotní pojišťovně nástup zaměstnance v zákonné lhůtě. Pro běžný pracovní poměr jde o oznámení nejpozději do osmi dnů od vzniku oznamované skutečnosti. Od roku 2026 se příslušná oznámení podávají elektronicky.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Lhůta a konkrétní postup se mohou lišit podle typu vztahu nebo oznamované skutečnosti. Mzdová účetní používá aktuální pravidla příslušné zdravotní pojišťovny a zákona.',
    },
    {
      type: 'heading',
      text: 'JMHZ není totéž co registrace',
    },
    {
      type: 'paragraph',
      text: 'REGZEC řeší evidenci zaměstnance a její změny. Jednotné měsíční hlášení zaměstnavatele následně vykazuje údaje za příslušný měsíc. Registraci před nástupem nelze nahradit až pozdějším měsíčním hlášením.',
    },
    {
      type: 'heading',
      text: 'Nový zaměstnavatel',
    },
    {
      type: 'paragraph',
      text: 'Pokud jde o prvního zaměstnance nově vzniklého zaměstnavatele, může vzniknout také povinnost přihlásit zaměstnavatele a jeho mzdové účtárny do evidence zaměstnavatelů. Tato povinnost se kontroluje odděleně od registrace konkrétního zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Doporučená posloupnost',
    },
    {
      type: 'list',
      items: [
        'ověřit smlouvu a sjednaný den nástupu',
        'ověřit identitu a minimální registrační údaje',
        'zjistit, zda jde o zahraničního zaměstnance nebo zvláštní případ',
        'provést REGZEC v přípustném přednástupním období',
        'ověřit skutečný nástup k výkonu práce',
        'doplnit zbývající registrační údaje',
        'provést oznámení zdravotní pojišťovně',
        'zkontrolovat interní systémy a měsíční návaznosti',
        'uložit potvrzení podání a odstranit případné chyby',
      ],
    },
    {
      type: 'example',
      title: 'Běžný nástup 7. září 2026',
      situation:
        'Český zaměstnanec má nastoupit v pondělí 7. září. Zaměstnavatel má úplnou smlouvu a základní identifikační údaje.',
      solution:
        'REGZEC lze podat nejdříve osm dnů před předpokládaným nástupem a musí být podán před zahájením práce. Po skutečném nástupu se včas doplní zbývající údaje a provede se oznámení zdravotní pojišťovně. Potvrzení podání se porovná s mzdovou evidencí.',
    },
    {
      type: 'heading',
      text: 'Kontrola úspěšnosti podání',
    },
    {
      type: 'list',
      items: [
        'ověřit technické přijetí podání',
        'zkontrolovat věcné chyby nebo výzvy',
        'uložit identifikátor a potvrzení podání',
        'porovnat přijaté údaje s personální evidencí',
        'opravit chybu řízeným změnovým podáním',
        'nepovažovat samotné odeslání souboru za úspěšné dokončení',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'přihlásit zaměstnance až po prvním výkonu práce',
        'zaměnit REGZEC za JMHZ',
        'nechat částečné přihlášení bez doplnění údajů',
        'neopravit přihlášení osoby, která nenastoupila',
        'použít nesprávnou zdravotní pojišťovnu',
        'nezkontrolovat potvrzení a chyby podání',
        'smíchat zaměstnance a zaměstnavatele v jedné registrační povinnosti',
      ],
    },
    {
      type: 'summary',
      items: [
        'Od 1. července 2026 musí být zaměstnanec přihlášen před zahájením výkonu práce.',
        'Přihlášení lze provést nejdříve osm dnů před předpokládaným nástupem.',
        'Částečné přihlášení je nutné po nástupu včas doplnit.',
        'Nenastoupení předem přihlášeného zaměstnance se musí oznámit.',
        'REGZEC, zdravotní oznámení a JMHZ jsou rozdílné, navazující procesy.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'onboarding-notifications-card-01',
      front:
        'Kdy musí být zaměstnanec od 1. července 2026 přihlášen do evidence?',
      back: 'Nejpozději před okamžikem zahájení výkonu práce.',
      explanation:
        'Přednástupní registrace se nesmí odložit až na mzdovou uzávěrku.',
      skillIds: ['regzec-onboarding'],
    },
    {
      id: 'onboarding-notifications-card-02',
      front: 'Jak brzy lze běžně provést přednástupní přihlášení?',
      back: 'Nejdříve osm kalendářních dnů před předpokládaným dnem nástupu.',
      explanation: 'Příliš časné podání není v registračním procesu přípustné.',
      skillIds: ['regzec-onboarding'],
    },
    {
      id: 'onboarding-notifications-card-03',
      front: 'Co udělat, pokud předem přihlášený zaměstnanec nenastoupí?',
      back: 'Oznámit nenastoupení ČSSZ ve stanovené lhůtě a opravit navazující evidenci.',
      explanation: 'Původní přednástupní registrace nesmí zůstat bez reakce.',
      skillIds: ['onboarding-notification-sequence'],
    },
    {
      id: 'onboarding-notifications-card-04',
      front: 'Nahrazuje JMHZ přednástupní REGZEC?',
      back: 'Ne.',
      explanation:
        'REGZEC zakládá nebo mění evidenci zaměstnance; JMHZ je navazující měsíční hlášení.',
      skillIds: ['regzec-onboarding'],
    },
  ],
  exercises: [
    {
      id: 'onboarding-notifications-exercise-01',
      type: 'single_choice',
      prompt:
        'Kdy musí být od 1. července 2026 splněno přihlášení zaměstnance?',
      options: [
        {
          id: 'a',
          text: 'Nejpozději před zahájením výkonu práce.',
        },
        {
          id: 'b',
          text: 'Až při první výplatě.',
        },
        {
          id: 'c',
          text: 'Až na konci kalendářního roku.',
        },
        {
          id: 'd',
          text: 'Pouze pokud zaměstnanec požádá.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['regzec-onboarding'],
      explanation:
        'Aktuální pravidlo vyžaduje evidenci ještě před samotným výkonem práce.',
      commonMistake:
        'Použít starší lhůtu počítanou až od nástupu bez zohlednění změny od července 2026.',
    },
    {
      id: 'onboarding-notifications-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které kroky patří do bezpečného nástupního ohlašovacího procesu?',
      options: [
        {
          id: 'contract',
          text: 'Ověřit smlouvu a den nástupu.',
        },
        {
          id: 'ignore-result',
          text: 'Ignorovat potvrzení nebo odmítnutí podání.',
        },
        {
          id: 'regzec',
          text: 'Provést REGZEC v přípustné lhůtě.',
        },
        {
          id: 'actual',
          text: 'Ověřit skutečný nástup.',
        },
        {
          id: 'health',
          text: 'Provést oznámení zdravotní pojišťovně.',
        },
      ],
      correctOptionIds: ['contract', 'regzec', 'actual', 'health'],
      skillIds: [
        'onboarding-notification-sequence',
        'regzec-onboarding',
        'health-notification-onboarding',
      ],
      explanation:
        'Proces zahrnuje právní podklad, přednástupní registraci, ověření nástupu a pojistná oznámení.',
      commonMistake:
        'Považovat odeslání podání za dokončený proces bez kontroly výsledku.',
    },
    {
      id: 'onboarding-notifications-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Které kroky patří do kontrolovaného nástupního procesu po ověření pracovního vztahu?',
      options: [
        { id: 'a', text: 'Založit zaměstnance v mzdovém systému.' },
        { id: 'd', text: 'Změnit den nástupu podle data prvního zpracování.' },
        {
          id: 'b',
          text: 'Odeslat příslušná zákonná oznámení podle ověřených údajů.',
        },
        { id: 'e', text: 'Smazat vstupní dokumenty po odeslání hlášení.' },
        { id: 'c', text: 'Uchovat potvrzení o provedených krocích.' },
      ],
      correctOptionIds: ['a', 'b', 'c'],
      skillIds: ['onboarding-notification-sequence'],
      explanation:
        'Nástupní proces musí propojit založení, oznámení a kontrolní stopu.',
      commonMistake:
        'Považovat odeslání hlášení za důvod k odstranění podkladů.',
    },
    {
      id: 'onboarding-notifications-exercise-04',
      type: 'single_choice',
      prompt:
        'Předem přihlášený zaměstnanec nenastoupil. Jaký je správný postup?',
      options: [
        {
          id: 'a',
          text: 'Nevšímat si toho.',
        },
        {
          id: 'b',
          text: 'Oznámit nenastoupení a opravit navazující evidenci.',
        },
        {
          id: 'c',
          text: 'Vykázat mu jeden odpracovaný den.',
        },
        {
          id: 'd',
          text: 'Zpracovat mu nulovou mzdu bez dalšího.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['regzec-onboarding'],
      explanation:
        'Přednástupní evidence musí být opravena podle skutečného průběhu.',
      commonMistake: 'Ponechat nepravdivý aktivní záznam zaměstnání.',
    },
    {
      id: 'onboarding-notifications-exercise-05',
      type: 'short_text',
      prompt: 'Jaká zkratka označuje podání Registrace zaměstnance?',
      acceptedAnswers: ['REGZEC', 'regzec'],
      ignoreDiacritics: true,
      skillIds: ['regzec-onboarding'],
      explanation: 'REGZEC slouží k přihlášení, změně a odhlášení zaměstnance.',
      commonMistake: 'Uvést pouze JMHZ.',
    },
    {
      id: 'onboarding-notifications-exercise-06',
      type: 'single_choice',
      prompt: 'Které tvrzení o REGZEC a JMHZ je správné?',
      options: [
        {
          id: 'a',
          text: 'Jde o dva názvy stejného jednorázového formuláře.',
        },
        {
          id: 'b',
          text: 'REGZEC řeší evidenci zaměstnance, JMHZ navazující měsíční vykázání údajů.',
        },
        {
          id: 'c',
          text: 'REGZEC se používá pouze pro zdravotní pojišťovnu.',
        },
        {
          id: 'd',
          text: 'JMHZ vždy nahrazuje přednástupní registraci.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['regzec-onboarding'],
      explanation: 'Jde o rozdílné, i když propojené procesy.',
      commonMistake:
        'Odložit registraci zaměstnance až na podání měsíčního hlášení.',
    },
  ],
  sources: [
    {
      title: 'ČSSZ – Evidence zaměstnanců',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Nová povinnost evidovat zaměstnance před nástupem',
      url: 'https://www.cssz.cz/web/cz/-/nova-povinnost-evidovat-zamestnance-jeste-pred-nastupem-do-pra-1',
      kind: 'official',
    },
    {
      title: 'ePortál ČSSZ – Registrace zaměstnance',
      url: 'https://eportal.cssz.cz/web/portal/-/sluzby/registrace-zamestnance',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidence zaměstnavatelů',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnavatelu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'VZP – Oznamovací povinnost zaměstnavatele',
      url: 'https://www.vzp.cz/platci/informace/zamestnavatel/povinnosti-zamestnavatele/oznamovaci-povinnost',
      kind: 'official',
    },
    {
      title: 'MPSV – Jednotné měsíční hlášení zaměstnavatele',
      url: 'https://jmhz.mpsv.cz/',
      kind: 'official',
    },
  ],
})
