import { defineLessonContent } from '../define'

export const employmentDataChangesContent = defineLessonContent({
  moduleId: 'employment-changes-termination',
  skillIds: [
    'employment-change-effective-date',
    'employment-change-documentation',
    'payroll-change-reconciliation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Změny obsahu pracovního poměru, mzdových podmínek a navazujících evidencí ověřené podle českého zákoníku práce a pravidel evidence zaměstnanců účinných v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Změna musí mít právní a mzdový podklad',
    },
    {
      type: 'paragraph',
      text: 'Pracovní a mzdové údaje se během zaměstnání mění. Může jít o druh práce, místo výkonu práce, pracovní dobu, mzdu, organizační zařazení, osobní údaje nebo pojistný status. Mzdová účetní nesmí změnu provést jen podle neformální zprávy; musí určit její právní titul, datum účinnosti a všechny evidence, kterých se týká.',
    },
    {
      type: 'definition',
      term: 'Změna obsahu pracovního poměru',
      definition:
        'Změna sjednaných práv a povinností zaměstnavatele a zaměstnance, která se zpravidla provádí jejich dohodou, nestanoví-li zákon jiný postup.',
    },
    {
      type: 'heading',
      text: 'Dohoda jako základ změny',
    },
    {
      type: 'paragraph',
      text: 'Obsah pracovního poměru lze obecně změnit jen dohodou zaměstnavatele a zaměstnance. Týká se to zejména změny sjednaného druhu práce, místa výkonu práce, kratší pracovní doby nebo jiného ujednání pracovní smlouvy. Jednostranný pokyn vedoucího nemůže bez zákonného důvodu nahradit dohodu o změně smlouvy.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Mzdová účetní nesmí zaměnit provozní požadavek vedoucího za účinnou změnu pracovního poměru. Nejprve musí existovat odpovídající právní podklad.',
    },
    {
      type: 'heading',
      text: 'Změna sjednaného údaje a změna evidenčního údaje',
    },
    {
      type: 'paragraph',
      text: 'Ne každá změna vyžaduje dodatek pracovní smlouvy. Změna sjednaného druhu práce nebo místa výkonu práce zasahuje do obsahu pracovního poměru. Naproti tomu změna interního střediska, nadřízeného nebo technického identifikátoru může být pouze organizační či evidenční změnou, pokud neodporuje smlouvě.',
    },
    {
      type: 'definition',
      term: 'Datum účinnosti',
      definition:
        'Den, od kterého změna vyvolává pracovněprávní, mzdové nebo evidenční účinky.',
    },
    {
      type: 'heading',
      text: 'Datum podpisu není vždy datum účinnosti',
    },
    {
      type: 'paragraph',
      text: 'Dodatek může být podepsán předem a stanovit pozdější účinnost. Může také zachycovat změnu, která se promítne jen do části měsíce. Pro mzdové zpracování je rozhodné datum účinnosti, nikoli automaticky datum vytvoření dokumentu nebo jeho doručení mzdové účtárně.',
    },
    {
      type: 'example',
      title: 'Zvýšení mzdy od poloviny měsíce',
      situation:
        'Dodatek je podepsán 28. srpna a stanoví zvýšení základní mzdy od 15. září.',
      solution:
        'Mzdová účetní eviduje novou částku s účinností od 15. září. Způsob poměrného zpracování se řídí mzdovým podkladem, pracovním režimem a pravidly systému. Změna se nesmí použít už od data podpisu ani až od dalšího celého měsíce bez kontroly.',
    },
    {
      type: 'heading',
      text: 'Změna mzdy',
    },
    {
      type: 'paragraph',
      text: 'Mzda může být sjednána ve smlouvě, stanovena vnitřním předpisem nebo určena mzdovým výměrem. Způsob její změny závisí na právním základu. Sjednanou mzdu nelze jednostranně změnit jako údaj určený mzdovým výměrem.',
    },
    {
      type: 'list',
      items: [
        'ověřit, z jakého dokumentu současná mzda vyplývá',
        'ověřit osobu oprávněnou změnu učinit',
        'zkontrolovat novou částku nebo sazbu',
        'určit datum účinnosti',
        'ověřit dopad na příplatky, prémie nebo další navázané složky',
        'uchovat předchozí a nový stav',
      ],
    },
    {
      type: 'example',
      title: 'Neoprávněný požadavek na snížení mzdy',
      situation:
        'Vedoucí pošle tabulku s nižší základní mzdou od začátku měsíce, ale současná mzda je sjednána v pracovní smlouvě a zaměstnanec žádný dodatek nepodepsal.',
      solution:
        'Mzdová účetní změnu neprovede. Vyžádá odpovídající pracovněprávní dokument a ověří datum účinnosti. Vedoucí tabulka je pouze neúplný vstup.',
    },
    {
      type: 'heading',
      text: 'Změna pracovní doby',
    },
    {
      type: 'paragraph',
      text: 'Změna stanovené týdenní pracovní doby, kratší pracovní doby, rozvržení směn nebo pracovního režimu může mít rozdílný právní základ. Mzdová účetní musí rozlišit změnu sjednaného rozsahu práce od pouhé změny rozvrhu směn v mezích platného pracovního vztahu.',
    },
    {
      type: 'heading',
      text: 'Změna osobních a výplatních údajů',
    },
    {
      type: 'list',
      items: [
        'jméno nebo příjmení',
        'adresa',
        'zdravotní pojišťovna',
        'daňové údaje a uplatňované nároky',
        'bankovní účet',
        'kontaktní údaje',
        'další identifikační údaj požadovaný evidencí',
      ],
    },
    {
      type: 'paragraph',
      text: 'Každá změna se zpracuje podle jejího účelu a potřebného dokladu. Zvláštní pozornost vyžaduje bankovní účet, pojišťovna, daňový stav a údaje používané ve vnějších hlášeních.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Změna bankovního účtu zaslaná z neověřeného kontaktu se nesmí automaticky použít pro výplatu. Musí projít řízeným ověřením.',
    },
    {
      type: 'heading',
      text: 'Změny hlášené ČSSZ a dalším institucím',
    },
    {
      type: 'paragraph',
      text: 'Pokud se změní údaj vedený v evidenci zaměstnanců, zaměstnavatel změnu oznámí příslušným postupem ve stanovené lhůtě. Mzdová účetní musí odlišit interní údaj od údaje, který se promítá také do REGZEC, zdravotní pojišťovny, daňové evidence nebo jiného veřejnoprávního procesu.',
    },
    {
      type: 'heading',
      text: 'Kontrolní mapa dopadů',
    },
    {
      type: 'list',
      items: [
        'pracovní smlouva nebo jiný pracovněprávní dokument',
        'mzdový systém',
        'personální systém',
        'docházkový systém',
        'účetní a nákladová evidence',
        'evidence zaměstnanců a JMHZ',
        'zdravotní pojišťovna',
        'daňová evidence',
        'přístupová a organizační oprávnění',
      ],
    },
    {
      type: 'example',
      title: 'Změna pojišťovny a adresy',
      situation:
        'Zaměstnanec oznámí od stejného dne změnu zdravotní pojišťovny a korespondenční adresy.',
      solution:
        'Mzdová účetní ověří oba údaje samostatně. Změna pojišťovny vyvolává pojistné oznámení a změnu mzdové evidence. Změna adresy se promítne pouze do evidencí a procesů, které tento údaj skutečně používají.',
    },
    {
      type: 'heading',
      text: 'Pozdně doručená změna',
    },
    {
      type: 'paragraph',
      text: 'Pokud je změna doručena po uzávěrce nebo až po výplatě, nejprve se ověří její skutečná účinnost. Poté se určí, zda lze opravit ještě otevřené období, zda je nutná oprava minulého období a která hlášení nebo platby musí být opravena.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'identifikovat zaměstnance a pracovní vztah',
        'určit typ změny',
        'ověřit právní nebo evidenční podklad',
        'ověřit oprávnění autora nebo schvalující osoby',
        'určit datum účinnosti',
        'vyhodnotit všechny dotčené evidence',
        'provést změnu bez přepsání historie',
        'zkontrolovat výsledek a případná hlášení',
        'uchovat kontrolní stopu',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'použít datum doručení místo data účinnosti',
        'změnit sjednanou mzdu bez dohody',
        'zaměnit změnu pracovní smlouvy za běžnou organizační změnu',
        'aktualizovat pouze mzdový systém a zapomenout na další evidence',
        'přepsat historický údaj bez zachování předchozího stavu',
        'neopravit hlášení po pozdně doručené změně',
        'použít neověřený bankovní účet',
      ],
    },
    {
      type: 'summary',
      items: [
        'Každá změna musí mít určený právní nebo evidenční podklad.',
        'Sjednaný obsah pracovního poměru se obecně mění dohodou.',
        'Pro zpracování je rozhodné datum účinnosti, nikoli automaticky datum podpisu nebo doručení.',
        'Změna může zasáhnout několik interních i vnějších evidencí současně.',
        'Mzdová účetní zachovává historii, kontrolní stopu a řeší i pozdně doručené změny.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employment-data-changes-card-01',
      front: 'Co je rozhodné pro zařazení změny do mzdového období?',
      back: 'Datum účinnosti změny.',
      explanation: 'Datum podpisu nebo doručení může být jiné.',
      skillIds: ['employment-change-effective-date'],
    },
    {
      id: 'employment-data-changes-card-02',
      front: 'Lze sjednanou mzdu změnit pouze novým mzdovým výměrem?',
      back: 'Ne. Sjednaná mzda vyžaduje dohodu stran.',
      explanation: 'Způsob změny závisí na tom, jak byla mzda právně založena.',
      skillIds: ['employment-change-documentation'],
    },
    {
      id: 'employment-data-changes-card-03',
      front: 'Proč se nesmí historický údaj jen přepsat?',
      back: 'Musí zůstat dohledatelné, co platilo v jednotlivých obdobích.',
      explanation: 'Historie je nutná pro opravy, kontroly a správné výstupy.',
      skillIds: ['payroll-change-reconciliation'],
    },
    {
      id: 'employment-data-changes-card-04',
      front: 'Co udělat s neověřenou změnou bankovního účtu?',
      back: 'Nepoužít ji pro výplatu a ověřit ji řízeným postupem.',
      explanation: 'Jde o rizikovou výplatní instrukci.',
      skillIds: ['employment-change-documentation'],
    },
  ],
  exercises: [
    {
      id: 'employment-data-changes-exercise-01',
      type: 'single_choice',
      prompt:
        'Dodatek je podepsán 28. srpna a účinný od 15. září. Kdy se změna použije?',
      options: [
        {
          id: 'a',
          text: 'Od 28. srpna.',
        },
        {
          id: 'b',
          text: 'Od 1. září.',
        },
        {
          id: 'c',
          text: 'Od 15. září.',
        },
        {
          id: 'd',
          text: 'Až od října.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['employment-change-effective-date'],
      explanation: 'Rozhodující je výslovné datum účinnosti.',
      commonMistake: 'Použít automaticky datum podpisu nebo první den měsíce.',
    },
    {
      id: 'employment-data-changes-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které systémy může ovlivnit změna základní mzdy a pracovního zařazení?',
      options: [
        {
          id: 'payroll',
          text: 'Mzdový systém.',
        },
        {
          id: 'none',
          text: 'Žádný další systém kromě e-mailu vedoucího.',
        },
        {
          id: 'hr',
          text: 'Personální systém.',
        },
        {
          id: 'accounting',
          text: 'Účetní nebo nákladová evidence.',
        },
        {
          id: 'attendance',
          text: 'Docházkový systém, pokud používá pracovní režim nebo středisko.',
        },
      ],
      correctOptionIds: ['payroll', 'hr', 'accounting', 'attendance'],
      skillIds: ['payroll-change-reconciliation'],
      explanation: 'Jedna změna může mít více navazujících evidenčních dopadů.',
      commonMistake:
        'Aktualizovat pouze mzdovou částku a nezkontrolovat návaznosti.',
    },
    {
      id: 'employment-data-changes-exercise-03',
      type: 'single_choice',
      prompt:
        'Podepsaný dodatek byl doručen 18. dne měsíce, ale účinnost změny mzdy je výslovně sjednána od 1. dne téhož měsíce. Který údaj řídí mzdový dopad?',
      options: [
        { id: 'a', text: 'Datum účinnosti změny.' },
        { id: 'b', text: 'Datum otevření e-mailu.' },
        { id: 'c', text: 'Datum nejbližší výplaty.' },
        { id: 'd', text: 'Datum archivace dokumentu.' },
      ],
      correctOptionId: 'a',
      skillIds: [
        'employment-change-documentation',
        'payroll-change-reconciliation',
      ],
      explanation:
        'Mzdový dopad se řídí platně stanovenou účinností; pozdní doručení může vyvolat opravu.',
      commonMistake: 'Automaticky použít datum doručení jako datum účinnosti.',
    },
    {
      id: 'employment-data-changes-exercise-04',
      type: 'single_choice',
      prompt:
        'Vedoucí požaduje snížit mzdu sjednanou v pracovní smlouvě, ale chybí dodatek. Co je správně?',
      options: [
        {
          id: 'a',
          text: 'Mzdu ihned snížit.',
        },
        {
          id: 'b',
          text: 'Požadovat odpovídající dohodu o změně a do té doby změnu neprovést.',
        },
        {
          id: 'c',
          text: 'Snížit mzdu zpětně podle tabulky.',
        },
        {
          id: 'd',
          text: 'Použít průměrnou mzdu týmu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employment-change-documentation'],
      explanation:
        'Sjednaný údaj nelze jednostranně změnit pouhou interní tabulkou.',
      commonMistake:
        'Považovat vedoucí pozici za neomezené oprávnění měnit smlouvu.',
    },
    {
      id: 'employment-data-changes-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá den, od kterého změna vyvolává právní nebo mzdové účinky?',
      acceptedAnswers: ['datum účinnosti', 'ucinnost', 'účinnost'],
      ignoreDiacritics: true,
      skillIds: ['employment-change-effective-date'],
      explanation: 'Jde o datum účinnosti změny.',
      commonMistake: 'Uvést datum podpisu bez kontroly dokumentu.',
    },
    {
      id: 'employment-data-changes-exercise-06',
      type: 'single_choice',
      prompt:
        'Změna byla doručena po výplatě, ale je účinná zpětně pro již uzavřené období. Co má následovat?',
      options: [
        {
          id: 'a',
          text: 'Změnu ignorovat.',
        },
        {
          id: 'b',
          text: 'Vyhodnotit opravu minulého období a navazujících hlášení.',
        },
        {
          id: 'c',
          text: 'Přepsat historii bez záznamu.',
        },
        {
          id: 'd',
          text: 'Použít ji až od dalšího roku.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-change-reconciliation'],
      explanation:
        'Pozdní podklad se řeší řízenou opravou podle skutečné účinnosti.',
      commonMistake: 'Posunout účinnost jen proto, že období je již uzavřené.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Změny pracovního poměru',
      url: 'https://ppropo.mpsv.cz/VZmenapracovnihopomeru',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákoník práce v aktuálním znění',
      url: 'https://ppropo.mpsv.cz/zakon_262_2006',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Evidence zaměstnanců',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatelé',
      url: 'https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/zamestnavatele',
      kind: 'official',
    },
  ],
})
