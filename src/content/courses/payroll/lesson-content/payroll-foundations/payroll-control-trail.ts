import { defineLessonContent } from '../define'

export const payrollControlTrailContent = defineLessonContent({
  moduleId: 'payroll-foundations',
  skillIds: [
    'payroll-control-trail',
    'payroll-four-eyes',
    'payroll-exception-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-04-01',
    verifiedAt: '2026-07-10',
    note: 'Obecné kontrolní principy mzdové agendy, ochrany osobních údajů a dohledatelnosti zpracování v českém prostředí.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Proč musí být mzdový výsledek dohledatelný',
    },
    {
      type: 'paragraph',
      text: 'Mzda ovlivňuje zaměstnance, odvody, účetnictví i povinné evidence. Nestačí, že výsledná částka vypadá správně. Musí být možné prokázat, z jakých podkladů vznikla, kdo ji zpracoval, jak byla zkontrolována a co se stalo při případné opravě.',
    },
    {
      type: 'definition',
      term: 'Kontrolní stopa',
      definition:
        'Doložitelná vazba mezi zdrojovým podkladem, zaměstnancem, obdobím, použitým pravidlem, zpracováním, kontrolou, výsledkem a případnou opravou.',
    },
    {
      type: 'heading',
      text: 'Co má kontrolní stopa propojit',
    },
    {
      type: 'list',
      items: [
        'zdrojový podklad a jeho původ',
        'zaměstnance a konkrétní pracovní vztah',
        'mzdové období a datum účinnosti',
        'zpracovanou mzdovou položku',
        'použité pravidlo nebo parametr',
        'osobu nebo proces, který údaj zadal',
        'kontrolora nebo schvalující osobu',
        'výslednou částku a navazující výstupy',
        'pozdější změnu nebo opravu',
      ],
    },
    {
      type: 'definition',
      term: 'Kontrolní bod',
      definition:
        'Předem určené místo v procesu, ve kterém se ověřuje konkrétní riziko před pokračováním do další fáze.',
    },
    {
      type: 'definition',
      term: 'Rekonciliace',
      definition:
        'Porovnání dvou souvisejících evidencí nebo souhrnů s cílem potvrdit jejich shodu nebo vysvětlit rozdíl.',
    },
    {
      type: 'heading',
      text: 'Druhy kontrol',
    },
    {
      type: 'list',
      items: [
        'Formální kontrola ověřuje povinné údaje, identifikaci, období a schválení.',
        'Věcná kontrola posuzuje, zda podklad a výsledek odpovídají skutečné situaci.',
        'Aritmetická kontrola ověřuje výpočty, součty a zaokrouhlení.',
        'Vazební kontrola porovnává výsledek s jinou evidencí nebo výstupem.',
        'Individuální kontrola se zaměřuje na jednoho zaměstnance.',
        'Souhrnná kontrola ověřuje výsledky za celou organizaci.',
        'Kontrola výjimek vyhledává neobvyklé, nulové, záporné nebo mimořádně vysoké hodnoty.',
      ],
    },
    {
      type: 'heading',
      text: 'Princip čtyř očí',
    },
    {
      type: 'paragraph',
      text: 'Princip čtyř očí znamená, že vybraný výsledek, změnu nebo rizikovou operaci ověří další oprávněná osoba. Nemusí znovu mechanicky přepočítat vše. Kontrola má být zaměřená na významná rizika, výjimky a vazbu na podklady.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Princip čtyř očí je interní kontrolní mechanismus. Samotné kliknutí na tlačítko „schválit“ bez skutečného ověření podkladů není účinnou druhou kontrolou.',
    },
    {
      type: 'heading',
      text: 'Kontrola v malé organizaci',
    },
    {
      type: 'paragraph',
      text: 'V malé organizaci nemusí být možné oddělit každou činnost mezi různé zaměstnance. I tehdy lze nastavit přiměřenou kontrolu: schválení mimořádných položek oprávněnou osobou, kontrolu bankovního souboru proti rekapitulaci, přehled změn a samostatné ověření rizikových případů.',
    },
    {
      type: 'heading',
      text: 'Výjimky, které vyžadují pozornost',
    },
    {
      type: 'list',
      items: [
        'mimořádně vysoká nebo nízká čistá mzda',
        'záporná částka k výplatě',
        'zaměstnanec bez docházky nebo bez očekávané mzdy',
        'výplata po skončení pracovního vztahu',
        'nová nebo změněná bankovní instrukce těsně před výplatou',
        'mimořádná odměna bez jasného schválení',
        'oprava přesčasu po uzavření období',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Změna bankovního účtu, osobních údajů nebo výplatní instrukce má být ověřena řízeným způsobem. Neformální ústní sdělení nebo neověřený e-mail samy o sobě nevytvářejí dostatečnou kontrolní stopu.',
    },
    {
      type: 'heading',
      text: 'Změnový záznam a oprava',
    },
    {
      type: 'list',
      items: [
        'popsat původní stav a zjištěnou chybu',
        'identifikovat zdroj správného údaje',
        'určit dotčené období a výstupy',
        'provést opravu oprávněným postupem',
        'znovu provést relevantní kontroly',
        'zaznamenat zpracovatele, kontrolora a datum',
        'uchovat vazbu mezi původní a opravenou verzí',
      ],
    },
    {
      type: 'example',
      title: 'Neobvykle vysoká částka k výplatě',
      situation:
        'Částka k výplatě je výrazně vyšší než obvykle. Současně byla zadána mimořádná odměna, oprava přesčasu a nový bankovní účet.',
      solution:
        'Výplatní výstup zaměstnance se pozastaví. Zkontrolují se podklady k odměně a přesčasu, provede se věcná i aritmetická kontrola a řízeně se ověří bankovní účet. Druhá oprávněná osoba ověří rizikové body. Teprve po zaznamenání výsledku a odstranění výjimky lze platbu uvolnit.',
    },
    {
      type: 'heading',
      text: 'Časté chyby kontroly',
    },
    {
      type: 'list',
      items: [
        'kontrolor vidí pouze výslednou částku bez podkladů',
        'schválení není spojeno s konkrétní verzí výstupu',
        'bankovní soubor se neporovná s rekapitulací',
        'oprava přepíše původní údaj bez změnového záznamu',
        'kontrolují se jen souhrny a přehlédne se chyba jednotlivce',
        'výjimka se vysvětlí ústně, ale není zdokumentována',
      ],
    },
    {
      type: 'summary',
      items: [
        'Kontrolní stopa propojuje podklad, pravidlo, zpracování, kontrolu a výsledek.',
        'Různé druhy kontrol ověřují formu, věcný obsah, výpočty i vazby mezi výstupy.',
        'Princip čtyř očí má být skutečnou a doložitelnou kontrolou rizikových bodů.',
        'Výjimka se nejprve vysvětlí a teprve poté se uvolní další krok procesu.',
        'Každá oprava musí zachovat vazbu na původní stav a aktualizovat dotčené výstupy.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'payroll-control-trail-card-01',
      front: 'Co je kontrolní stopa?',
      back: 'Doložitelná vazba mezi podkladem, zaměstnancem, obdobím, pravidlem, zpracováním, kontrolou a výsledkem.',
      explanation:
        'Díky kontrolní stopě lze zpětně vysvětlit vznik konkrétní položky.',
      skillIds: ['payroll-control-trail'],
    },
    {
      id: 'payroll-control-trail-card-02',
      front: 'Co je rekonciliace?',
      back: 'Porovnání souvisejících evidencí nebo souhrnů za účelem potvrzení shody nebo vysvětlení rozdílu.',
      explanation:
        'Příkladem je porovnání bankovního souboru s rekapitulací částek k výplatě.',
      skillIds: ['payroll-control-trail'],
    },
    {
      id: 'payroll-control-trail-card-03',
      front: 'Musí druhá osoba v principu čtyř očí přepočítat úplně vše?',
      back: 'Ne. Kontrola může být zaměřená na rizikové položky, výjimky a klíčové vazby.',
      explanation:
        'Důležité je, aby byla kontrola věcná, doložitelná a přiměřená riziku.',
      skillIds: ['payroll-four-eyes'],
    },
    {
      id: 'payroll-control-trail-card-04',
      front: 'Co udělat s neobvyklou částkou k výplatě?',
      back: 'Pozastavit dotčený výstup, dohledat podklady, provést relevantní kontroly a výsledek zdokumentovat.',
      explanation:
        'Výjimka se nesmí automaticky uvolnit pouze proto, že systém výpočet dokončil.',
      skillIds: ['payroll-exception-control'],
    },
  ],
  exercises: [
    {
      id: 'payroll-control-trail-exercise-01',
      type: 'single_choice',
      prompt: 'Která kontrola ověřuje správnost součtů a výpočtů?',
      options: [
        { id: 'a', text: 'Aritmetická kontrola.' },
        { id: 'b', text: 'Pouze formální kontrola názvu zaměstnance.' },
        { id: 'c', text: 'Archivace.' },
        { id: 'd', text: 'Eskalace.' },
      ],
      correctOptionId: 'a',
      skillIds: ['payroll-control-trail'],
      explanation:
        'Aritmetická kontrola se zaměřuje na výpočty, součty a zaokrouhlení.',
      commonMistake:
        'Zaměnit kontrolu matematické správnosti s kontrolou úplnosti dokumentu.',
    },
    {
      id: 'payroll-control-trail-exercise-02',
      type: 'multiple_choice',
      prompt: 'Co má obsahovat dostatečná kontrolní stopa?',
      options: [
        { id: 'source', text: 'Zdrojový podklad.' },
        { id: 'rumour', text: 'Neověřenou ústní informaci bez záznamu.' },
        { id: 'period', text: 'Zaměstnance a období.' },
        { id: 'processor', text: 'Zpracovatele a kontrolu.' },
        { id: 'result', text: 'Výsledek a případnou opravu.' },
      ],
      correctOptionIds: ['source', 'period', 'processor', 'result'],
      skillIds: ['payroll-control-trail'],
      explanation:
        'Kontrolní stopa musí umožnit dohledat celý původ a životní cyklus výsledku.',
      commonMistake:
        'Uchovat jen konečnou částku bez vazby na podklad a kontrolu.',
    },
    {
      id: 'payroll-control-trail-exercise-03',
      type: 'single_choice',
      prompt:
        'Kontrola odhalí neobvykle vysokou čistou mzdu. Který postup nejlépe zachová princip čtyř očí a auditní stopu?',
      options: [
        { id: 'a', text: 'Částku ručně snížit bez záznamu.' },
        { id: 'b', text: 'Výplatu ihned odeslat a kontrolu dokončit později.' },
        {
          id: 'c',
          text: 'Pozastavit dotčený výstup, dohledat vstupy, zdokumentovat opravu a nechat ji nezávisle ověřit.',
        },
        {
          id: 'd',
          text: 'Smazat původní výpočet a vytvořit nový bez historie.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['payroll-exception-control', 'payroll-four-eyes'],
      explanation:
        'Kontrolovaná oprava musí být dohledatelná a odděleně ověřená.',
      commonMistake:
        'Opravit částku bez zachování původního stavu a schválení.',
    },
    {
      id: 'payroll-control-trail-exercise-04',
      type: 'single_choice',
      prompt: 'Které tvrzení nejlépe popisuje princip čtyř očí?',
      options: [
        {
          id: 'a',
          text: 'Druhá osoba pouze klikne na schválení bez otevření podkladů.',
        },
        {
          id: 'b',
          text: 'Další oprávněná osoba ověří vybrané výsledky, rizika a vazbu na podklady.',
        },
        {
          id: 'c',
          text: 'Jeden člověk práci zpracuje i sám schválí bez záznamu.',
        },
        { id: 'd', text: 'Kontrola se provádí pouze jednou ročně.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-four-eyes'],
      explanation:
        'Druhá kontrola má být skutečná, přiměřená riziku a doložitelná.',
      commonMistake: 'Zaměnit formální schválení za obsahovou kontrolu.',
    },
    {
      id: 'payroll-control-trail-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá porovnání dvou souvisejících evidencí nebo souhrnů?',
      acceptedAnswers: ['rekonciliace', 'reconciliation'],
      ignoreDiacritics: true,
      skillIds: ['payroll-control-trail'],
      explanation:
        'Rekonciliace potvrzuje shodu nebo pomáhá vysvětlit rozdíl mezi dvěma výstupy.',
      commonMistake:
        'Považovat pouhé uložení souboru za kontrolu jeho shody s jiným výstupem.',
    },
    {
      id: 'payroll-control-trail-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec pošle těsně před výplatou nový bankovní účet z neověřené adresy. Jaký je správný postup?',
      options: [
        { id: 'a', text: 'Účet ihned změnit bez další kontroly.' },
        { id: 'b', text: 'Požadavek ignorovat navždy.' },
        {
          id: 'c',
          text: 'Změnu pozastavit, ověřit řízeným způsobem a teprve poté ji zpracovat.',
        },
        { id: 'd', text: 'Odeslat mzdu na oba účty.' },
      ],
      correctOptionId: 'c',
      skillIds: ['payroll-exception-control'],
      explanation:
        'Změna výplatní instrukce je riziková operace a musí mít ověřitelný původ a kontrolní stopu.',
      commonMistake:
        'Považovat jakýkoli e-mail za dostatečné ověření změny bankovního účtu.',
    },
  ],
  sources: [
    {
      title: 'ÚOOÚ – Základní příručka k ochraně údajů',
      url: 'https://uoou.gov.cz/verejnost/zakladni-prirucka-k-ochrane-udaju',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatelé',
      url: 'https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/zamestnavatele',
      kind: 'official',
    },
    {
      title: 'MPSV – Jednotné měsíční hlášení zaměstnavatele',
      url: 'https://jmhz.mpsv.cz/',
      kind: 'official',
    },
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
  ],
})
