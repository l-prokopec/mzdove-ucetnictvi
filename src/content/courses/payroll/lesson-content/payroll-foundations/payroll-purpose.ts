import { defineLessonContent } from '../define'

export const payrollPurposeContent = defineLessonContent({
  moduleId: 'payroll-foundations',
  skillIds: ['payroll-scope', 'payroll-input-output', 'payroll-control-trail'],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-04-01',
    verifiedAt: '2026-07-10',
    note: 'Obecné principy české mzdové agendy. Registrační a ohlašovací proces reflektuje stav po zavedení JMHZ od 1. 4. 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Co je mzdové účetnictví',
    },
    {
      type: 'paragraph',
      text: 'Mzdové účetnictví není jen samotný výpočet čisté mzdy. Jde o soubor navazujících evidenčních, výpočtových, kontrolních a ohlašovacích činností, kterými zaměstnavatel převádí doložené informace o pracovním vztahu, odpracované době, nepřítomnostech a nárocích zaměstnance do správně zpracované mzdy a souvisejících výstupů.',
    },
    {
      type: 'definition',
      term: 'Mzdová agenda',
      definition:
        'Soubor procesů, podkladů, výpočtů, evidencí, kontrol a výstupů souvisejících s odměňováním zaměstnanců a s plněním daňových, pojistných, pracovněprávních a ohlašovacích povinností zaměstnavatele.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Správný mzdový výsledek nevzniká pouze správným vzorcem. Závisí také na úplných vstupních podkladech, správném právním posouzení, použití pravidel platných pro dané období a na následné kontrole.',
    },
    {
      type: 'heading',
      text: 'Vstupy do mzdové agendy',
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní nevytváří většinu vstupních skutečností sama. Převádí do mzdového zpracování informace a rozhodnutí, které vznikly v personální agendě, docházkovém systému, u vedoucích zaměstnanců, u zaměstnance nebo u příslušných institucí.',
    },
    {
      type: 'list',
      items: [
        'údaje o zaměstnanci a pracovněprávním vztahu',
        'sjednané nebo stanovené mzdové podmínky',
        'rozvrh pracovní doby a evidence skutečně odpracované doby',
        'schválené přesčasy, příplatky, odměny a další mzdové složky',
        'dovolená, překážky v práci, nemoc a jiné nepřítomnosti',
        'daňové prohlášení a doklady k uplatňovaným nárokům',
        'údaje rozhodné pro zdravotní a sociální pojištění',
        'podklady pro zákonné, exekuční nebo dohodnuté srážky',
        'opravy a změny vztahující se k běžnému nebo předchozím obdobím',
      ],
    },
    {
      type: 'heading',
      text: 'Co se při mzdovém zpracování děje',
    },
    {
      type: 'list',
      items: [
        'přiřazení podkladu ke správnému zaměstnanci a období',
        'kontrola úplnosti a vzájemné konzistence vstupů',
        'zařazení jednotlivých údajů do správného mzdového režimu',
        'výpočet mzdy, náhrad, daně, pojistného a dalších položek',
        'provedení srážek a stanovení částky k výplatě',
        'kontrola výsledků proti vstupům a souhrnným rekapitulacím',
        'příprava platebních, evidenčních a ohlašovacích výstupů',
        'uložení podkladů a zachování kontrolní stopy',
      ],
    },
    {
      type: 'heading',
      text: 'Výstupy mzdové agendy',
    },
    {
      type: 'paragraph',
      text: 'Výsledkem mzdového zpracování není pouze částka odeslaná zaměstnanci. Jeden mzdový měsíc vytváří několik skupin vzájemně propojených výstupů.',
    },
    {
      type: 'list',
      items: [
        'hrubá mzda, jednotlivé mzdové složky a náhrady mzdy',
        'daň, pojistné, srážky a čistá mzda',
        'částka skutečně určená k výplatě zaměstnanci',
        'výplatní doklad zaměstnance',
        'podklady pro bankovní platby a zaúčtování',
        'údaje pro zdravotní pojišťovny, ČSSZ, finanční správu a další instituce',
        'registrační a měsíční údaje vykazované prostřednictvím JMHZ',
        'mzdové listy, rekapitulace a další povinné evidence',
        'archivované podklady umožňující pozdější kontrolu nebo opravu',
      ],
    },
    {
      type: 'example',
      title: 'Jeden údaj, více dopadů',
      situation:
        'Vedoucí zaměstnanec dodatečně oznámí osm hodin schválené práce přesčas. Údaj byl předán až po původní uzávěrce docházky.',
      solution:
        'Nestačí pouze zvýšit částku k výplatě. Je nutné ověřit období a schválení přesčasu, správně určit mzdu a případné mzdové zvýhodnění, posoudit dopad do hrubé mzdy, daně a pojistného, aktualizovat související výstupy a zachovat informaci o tom, proč a na základě jakého podkladu byla mzda změněna.',
    },
    {
      type: 'heading',
      text: 'Hranice role mzdové účetní',
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní odpovídá za odborné a kontrolovatelné zpracování převzatých podkladů. Neznamená to však, že sama rozhoduje o všech pracovněprávních nebo personálních skutečnostech.',
    },
    {
      type: 'list',
      items: [
        'ověřuje, zda podklad obsahuje údaje potřebné pro mzdové zpracování',
        'upozorňuje na nesoulad, neúplnost nebo neobvyklý výsledek',
        'používá pravidla a parametry platné pro zpracovávané období',
        'nepřiznává bez podkladu odměnu, příplatek ani jiný nárok',
        'nevymýšlí chybějící docházku nebo jiné rozhodné údaje',
        'neprovádí nezdokumentovanou změnu pouze na základě neověřeného ústního sdělení',
        'předává spornou nebo nejasnou situaci osobě odpovědné za její rozhodnutí',
        'chrání osobní a mzdové údaje před neoprávněným přístupem',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Chybějící nebo rozporný podklad se nemá nahrazovat odhadem. Správným postupem je problém zaznamenat, vyžádat doplnění nebo rozhodnutí oprávněné osoby a teprve poté výsledek zpracovat.',
    },
    {
      type: 'heading',
      text: 'Základní měsíční cyklus',
    },
    {
      type: 'list',
      items: [
        'převzít podklady a personální změny',
        'zkontrolovat jejich úplnost a návaznost',
        'zpracovat docházku, mzdu, náhrady a další položky',
        'vypočítat daň, pojistné, srážky a částku k výplatě',
        'provést individuální a souhrnné kontroly',
        'připravit výplaty, odvody, hlášení a evidenční výstupy',
        'uzavřít období, uložit podklady a řešit případné následné opravy',
      ],
    },
    {
      type: 'definition',
      term: 'Kontrolní stopa',
      definition:
        'Doložitelná vazba mezi výsledkem mzdového zpracování, použitým pravidlem, zdrojovým podkladem, provedenou kontrolou a osobou nebo procesem, který změnu schválil.',
    },
    {
      type: 'paragraph',
      text: 'Kontrolní stopa umožňuje později vysvětlit, z čeho konkrétní částka vznikla. Je důležitá při interní kontrole, reklamaci zaměstnance, opravě starší mzdy i při kontrole ze strany veřejné instituce.',
    },
    {
      type: 'summary',
      items: [
        'Mzdové účetnictví je proces, nikoli pouze matematický výpočet.',
        'Kvalita výsledku závisí na správných a úplných vstupních podkladech.',
        'Jeden mzdový údaj může ovlivnit mzdu, daň, pojistné, platbu, evidenci i hlášení.',
        'Mzdová účetní podklady kontroluje a zpracovává, ale chybějící skutečnosti si nesmí domýšlet.',
        'Každý výsledek musí být zpětně dohledatelný prostřednictvím kontrolní stopy.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'payroll-purpose-card-01',
      front: 'Je mzdové účetnictví pouze výpočet čisté mzdy?',
      back: 'Ne. Zahrnuje převzetí a kontrolu podkladů, právní a mzdové zařazení údajů, výpočty, kontroly, platby, evidence, hlášení a archivaci.',
      explanation:
        'Samotný aritmetický výpočet je pouze jednou částí celého mzdového procesu.',
      skillIds: ['payroll-scope'],
    },
    {
      id: 'payroll-purpose-card-02',
      front: 'Jaké tři základní vrstvy má mzdový proces?',
      back: 'Vstupy, zpracování a výstupy.',
      explanation:
        'Nejprve se převezmou a ověří podklady, poté se zpracují a nakonec se vytvoří kontrolované výstupy.',
      skillIds: ['payroll-input-output'],
    },
    {
      id: 'payroll-purpose-card-03',
      front: 'Co má mzdová účetní udělat s chybějícím rozhodným údajem?',
      back: 'Zaznamenat problém a vyžádat doplnění nebo rozhodnutí oprávněné osoby. Údaj nemá sama odhadovat.',
      explanation:
        'Domyšlený vstup by mohl ovlivnit mzdu, odvody i navazující výstupy.',
      skillIds: ['payroll-scope', 'payroll-control-trail'],
    },
    {
      id: 'payroll-purpose-card-04',
      front: 'Co je kontrolní stopa?',
      back: 'Doložitelná vazba mezi výsledkem, zdrojovým podkladem, použitým pravidlem, kontrolou a schválením.',
      explanation:
        'Umožňuje zpětně vysvětlit a ověřit vznik konkrétní mzdové položky.',
      skillIds: ['payroll-control-trail'],
    },
  ],
  exercises: [
    {
      id: 'payroll-purpose-exercise-01',
      type: 'single_choice',
      prompt: 'Které tvrzení nejlépe vystihuje účel mzdové agendy?',
      options: [
        {
          id: 'a',
          text: 'Pouze převést sjednanou hrubou mzdu na čistou mzdu.',
        },
        {
          id: 'b',
          text: 'Převést doložené pracovněprávní a mzdové skutečnosti do správné mzdy, odvodů, evidencí a navazujících výstupů.',
        },
        {
          id: 'c',
          text: 'Rozhodovat místo vedoucích zaměstnanců o všech odměnách.',
        },
        {
          id: 'd',
          text: 'Pouze vytvořit bankovní příkaz pro zaměstnance.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-scope'],
      explanation:
        'Mzdová agenda propojuje podklady, výpočty, kontroly, výplatu, evidence a zákonné výstupy.',
      commonMistake: 'Zaměnit mzdové účetnictví pouze za výpočet čisté mzdy.',
    },
    {
      id: 'payroll-purpose-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které položky mohou být vstupem do běžného mzdového zpracování?',
      options: [
        {
          id: 'contract',
          text: 'Údaje z pracovního vztahu a mzdových podmínek.',
        },
        {
          id: 'attendance',
          text: 'Evidence odpracované doby a nepřítomností.',
        },
        {
          id: 'tax',
          text: 'Daňové prohlášení a doložené nároky zaměstnance.',
        },
        {
          id: 'overtime',
          text: 'Schválený podklad k práci přesčas.',
        },
        {
          id: 'lunch',
          text: 'Neformální informace o tom, co měl zaměstnanec k obědu.',
        },
      ],
      correctOptionIds: ['contract', 'attendance', 'tax', 'overtime'],
      skillIds: ['payroll-input-output'],
      explanation:
        'Vstupem je informace, která má prokazatelný dopad na pracovněprávní, mzdové, daňové, pojistné nebo evidenční zpracování.',
      commonMistake:
        'Považovat za mzdový vstup každou informaci, kterou zaměstnavatel o zaměstnanci zná.',
    },
    {
      id: 'payroll-purpose-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď základní kroky mzdového zpracování.',
      steps: [
        {
          id: 'collect',
          text: 'Převzít vstupní podklady.',
        },
        {
          id: 'validate',
          text: 'Zkontrolovat úplnost a správnost vstupů.',
        },
        {
          id: 'calculate',
          text: 'Provést mzdové a odvodové výpočty.',
        },
        {
          id: 'reconcile',
          text: 'Zkontrolovat výsledky a souhrnné vazby.',
        },
        {
          id: 'output',
          text: 'Připravit výplaty, evidence, hlášení a archivaci.',
        },
      ],
      correctOrder: ['collect', 'validate', 'calculate', 'reconcile', 'output'],
      skillIds: ['payroll-input-output'],
      explanation:
        'Výpočet má následovat až po převzetí a kontrole vstupů. Před odesláním výstupů musí být výsledek zkontrolován.',
      commonMistake:
        'Začít počítat dříve, než jsou vstupy úplné a vzájemně konzistentní.',
    },
    {
      id: 'payroll-purpose-exercise-04',
      type: 'single_choice',
      prompt:
        'Docházka zaměstnance obsahuje osm hodin přesčasu, ale chybí informace o jeho schválení. Jaký je správný postup mzdové účetní?',
      options: [
        {
          id: 'a',
          text: 'Přesčas automaticky proplatit.',
        },
        {
          id: 'b',
          text: 'Přesčas automaticky odstranit.',
        },
        {
          id: 'c',
          text: 'Zaznamenat nesoulad a vyžádat doplnění nebo rozhodnutí oprávněné osoby.',
        },
        {
          id: 'd',
          text: 'Rozdělit osm hodin mezi ostatní zaměstnance.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['payroll-scope', 'payroll-control-trail'],
      explanation:
        'Mzdová účetní nemá chybějící rozhodnou skutečnost sama domýšlet. Musí si vyžádat ověřitelný podklad.',
      commonMistake:
        'Považovat neúplný docházkový záznam automaticky za dostatečný podklad pro výplatu.',
    },
    {
      id: 'payroll-purpose-exercise-05',
      type: 'multiple_choice',
      prompt: 'Které položky jsou výstupem mzdového zpracování?',
      options: [
        {
          id: 'payable',
          text: 'Částka určená k výplatě zaměstnanci.',
        },
        {
          id: 'payslip',
          text: 'Výplatní doklad.',
        },
        {
          id: 'reports',
          text: 'Údaje pro povinné evidence a hlášení.',
        },
        {
          id: 'audit',
          text: 'Kontrolní záznamy a dohledatelné podklady.',
        },
        {
          id: 'future-estimate',
          text: 'Nezávazný odhad mzdy zaměstnance na příštích deset let.',
        },
      ],
      correctOptionIds: ['payable', 'payslip', 'reports', 'audit'],
      skillIds: ['payroll-input-output', 'payroll-control-trail'],
      explanation:
        'Mzdový proces vytváří výplatní, informační, evidenční, ohlašovací a kontrolní výstupy.',
      commonMistake: 'Považovat za jediný výstup částku odeslanou zaměstnanci.',
    },
    {
      id: 'payroll-purpose-exercise-06',
      type: 'single_choice',
      prompt: 'Co nejlépe popisuje kontrolní stopu?',
      options: [
        {
          id: 'a',
          text: 'Seznam všech zaměstnanců seřazený podle příjmení.',
        },
        {
          id: 'b',
          text: 'Možnost dohledat výsledek k podkladu, pravidlu a kontrole.',
        },
        {
          id: 'c',
          text: 'Automatické zaokrouhlení všech částek na tisíce korun.',
        },
        {
          id: 'd',
          text: 'Ústní potvrzení, že výpočet pravděpodobně souhlasí.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-control-trail'],
      explanation:
        'Kontrolní stopa umožňuje zpětně prokázat, jak a proč konkrétní výsledek vznikl.',
      commonMistake:
        'Zaměnit kontrolní stopu za pouhý výsledný součet bez doložení jeho původu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidence zaměstnanců: přihlášení, změna a odhlášení',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'MPSV – Jednotné měsíční hlášení zaměstnavatele',
      url: 'https://jmhz.mpsv.cz/',
      kind: 'official',
    },
    {
      title: 'Finanční správa – Daň z příjmů: zaměstnanci a zaměstnavatelé',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zpracování údajů zaměstnanců a vyžadování souhlasu',
      url: 'https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/vyzadovani-souhlasu',
      kind: 'official',
    },
  ],
})
