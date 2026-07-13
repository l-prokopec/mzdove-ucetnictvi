import { defineLessonContent } from '../define'

export const employmentContractContent = defineLessonContent({
  moduleId: 'employee-onboarding',
  skillIds: [
    'employment-contract-essentials',
    'employment-contract-review',
    'employment-start-date',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-11',
    note: 'Povinné náležitosti, forma a praktická kontrola pracovní smlouvy ověřené podle českého zákoníku práce a metodiky MPSV účinné v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Pracovní smlouva jako základ pracovního poměru',
    },
    {
      type: 'paragraph',
      text: 'Pracovní smlouva je nejběžnějším právním jednáním, kterým se zakládá pracovní poměr. Pro mzdovou účetní představuje hlavní zdroj údajů o tom, jaká práce se vykonává, kde se vykonává a kdy pracovní poměr vzniká. Mzdová evidence nesmí být založena pouze podle neúplné ústní informace nebo návrhu dokumentu.',
    },
    {
      type: 'definition',
      term: 'Pracovní smlouva',
      definition:
        'Písemná dohoda zaměstnavatele a zaměstnance, kterou se zakládá pracovní poměr a v níž musí být sjednán alespoň druh práce, místo nebo místa výkonu práce a den nástupu do práce.',
    },
    {
      type: 'heading',
      text: 'Písemná forma',
    },
    {
      type: 'paragraph',
      text: 'Pracovní smlouva musí být uzavřena písemně. Zaměstnavatel a zaměstnanec mají obdržet své vyhotovení. Před založením zaměstnance v mzdovém systému je nutné ověřit, že jde o finální dokument a že jej učinily oprávněné osoby.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Návrh smlouvy, nepodepsaná příloha nebo e-mail s příslibem nástupu nejsou samy o sobě dostatečným podkladem pro převzetí všech pracovních a mzdových údajů.',
    },
    {
      type: 'heading',
      text: 'Tři povinné náležitosti',
    },
    {
      type: 'list',
      items: [
        'druh práce',
        'místo nebo místa výkonu práce',
        'den nástupu do práce',
      ],
    },
    {
      type: 'paragraph',
      text: 'Chybí-li některá z těchto tří náležitostí nebo ji nelze určit bez pochybností, mzdová účetní nemá chybějící údaj domýšlet. Dokument vrátí k doplnění osobě odpovědné za pracovněprávní agendu.',
    },
    {
      type: 'heading',
      text: 'Druh práce',
    },
    {
      type: 'paragraph',
      text: 'Druh práce vymezuje, jakou práci se zaměstnanec zavazuje vykonávat. Může obsahovat jeden nebo více druhů práce, ale nemá být formulován tak neurčitě, aby umožňoval požadovat prakticky jakoukoli činnost. Druh práce se v evidenci nesmí zaměňovat s interním názvem pozice, pokud jejich význam není stejný.',
    },
    {
      type: 'heading',
      text: 'Místo výkonu práce',
    },
    {
      type: 'paragraph',
      text: 'Místo výkonu práce vymezuje územní rozsah, ve kterém má zaměstnanec sjednanou práci vykonávat. Může být sjednáno jedno místo nebo více míst. Mzdová účetní přebírá údaj přesně podle smlouvy a upozorní na nesoulad s personálním nebo docházkovým systémem.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Místo výkonu práce a pravidelné pracoviště pro účely cestovních náhrad nejsou automaticky totožné pojmy. Pokud se oba údaje evidují, musí zůstat rozlišeny.',
    },
    {
      type: 'heading',
      text: 'Den nástupu do práce',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr vzniká dnem sjednaným jako den nástupu do práce. Tento den je rozhodný pro založení pracovního vztahu, registrační kroky, evidenci a první mzdové období. Nemusí být totožný s datem podpisu smlouvy.',
    },
    {
      type: 'example',
      title: 'Smlouva podepsaná předem',
      situation:
        'Pracovní smlouva je podepsána 10. srpna a jako den nástupu uvádí 1. září.',
      solution:
        'Pracovní poměr vzniká 1. září. Datum podpisu dokládá uzavření smlouvy, ale zaměstnanec se v mzdové evidenci a registračních procesech zpracuje podle sjednaného dne nástupu.',
    },
    {
      type: 'heading',
      text: 'Další prakticky důležitá ujednání',
    },
    {
      type: 'list',
      items: [
        'doba trvání pracovního poměru',
        'zkušební doba',
        'sjednaná kratší pracovní doba nebo jiný rozsah práce',
        'pravidelné pracoviště pro cestovní náhrady',
        'způsob odměňování, pokud je součástí smlouvy',
        'další podmínky, na kterých se strany dohodly',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tyto údaje nemusí být vždy povinnou náležitostí pracovní smlouvy, mohou však mít přímý vliv na mzdové zpracování. Pokud jsou sjednány, musí být přeneseny přesně a s odpovídajícím datem účinnosti.',
    },
    {
      type: 'heading',
      text: 'Mzda nemusí být vždy součástí pracovní smlouvy',
    },
    {
      type: 'paragraph',
      text: 'Způsob založení nároku na mzdu závisí na konkrétním pracovním režimu. Mzda může být sjednána ve smlouvě, stanovena vnitřním předpisem nebo určena mzdovým výměrem. Mzdová účetní proto nesmí chybějící částku ve smlouvě automaticky považovat za chybu; musí ověřit navazující mzdový podklad.',
    },
    {
      type: 'example',
      title: 'Smlouva bez částky mzdy',
      situation:
        'Pracovní smlouva obsahuje všechny tři povinné náležitosti, ale neobsahuje konkrétní částku mzdy. HR současně předalo platný mzdový výměr účinný ode dne nástupu.',
      solution:
        'Pracovní smlouva může být pro založení pracovního poměru úplná. Mzdová účetní použije pro mzdové nastavení samostatný mzdový výměr a uchová vazbu mezi oběma dokumenty.',
    },
    {
      type: 'heading',
      text: 'Informační povinnosti zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Vedle samotné pracovní smlouvy poskytuje zaměstnavatel zaměstnanci zákonem požadované informace o pracovních podmínkách, pokud nejsou obsaženy přímo ve smlouvě. Mzdová účetní může připravovat část těchto údajů, ale nesmí zaměňovat informační dokument za chybějící povinnou náležitost pracovní smlouvy.',
    },
    {
      type: 'heading',
      text: 'Elektronické uzavření',
    },
    {
      type: 'paragraph',
      text: 'Pracovní smlouva může být za splnění zákonných podmínek uzavřena elektronicky. Před použitím elektronického dokumentu je nutné ověřit identitu jednajících osob, konečnou verzi, použitý způsob potvrzení a splnění pravidel předání dokumentu zaměstnanci.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup mzdové účetní',
    },
    {
      type: 'list',
      items: [
        'ověřit totožnost zaměstnavatele a zaměstnance',
        'ověřit, že jde o finální písemný dokument',
        'zkontrolovat druh práce',
        'zkontrolovat místo nebo místa výkonu práce',
        'zkontrolovat den nástupu',
        'ověřit dobu trvání a zkušební dobu, jsou-li sjednány',
        'dohledat samostatný mzdový podklad',
        'porovnat údaje s personálním a registračním zadáním',
        'zaznamenat a eskalovat každý nesoulad',
      ],
    },
    {
      type: 'example',
      title: 'Chybějící místo výkonu práce',
      situation:
        'Podepsaná smlouva uvádí druh práce a den nástupu, ale neobsahuje místo výkonu práce.',
      solution:
        'Mzdová účetní místo sama nedoplní podle adresy kanceláře. Dokument vrátí HR nebo jiné oprávněné osobě k pracovněprávní nápravě a před zpracováním si vyžádá úplný podklad.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit návrh smlouvy za finální dokument',
        'přehlédnout chybějící povinnou náležitost',
        'zaměnit datum podpisu za den vzniku pracovního poměru',
        'přenést interní název pozice místo sjednaného druhu práce',
        'domyslet místo výkonu práce podle pracoviště',
        'považovat absenci mzdy ve smlouvě automaticky za neplatnost smlouvy',
        'nezachovat vazbu mezi smlouvou a samostatným mzdovým dokumentem',
      ],
    },
    {
      type: 'summary',
      items: [
        'Pracovní smlouva musí být písemná a musí obsahovat druh práce, místo výkonu práce a den nástupu.',
        'Pracovní poměr vzniká sjednaným dnem nástupu, nikoli automaticky dnem podpisu.',
        'Další ujednání mohou zásadně ovlivnit mzdové zpracování, i když nejsou vždy povinnou náležitostí.',
        'Mzda může vyplývat ze samostatného mzdového dokumentu.',
        'Mzdová účetní kontroluje úplnost a návaznost, ale chybějící pracovněprávní údaje sama nevytváří.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employment-contract-card-01',
      front: 'Jaké jsou tři povinné náležitosti pracovní smlouvy?',
      back: 'Druh práce, místo nebo místa výkonu práce a den nástupu do práce.',
      explanation:
        'Bez jednoznačného sjednání těchto náležitostí nelze pracovní smlouvu bezpečně převzít do mzdové evidence.',
      skillIds: ['employment-contract-essentials'],
    },
    {
      id: 'employment-contract-card-02',
      front: 'Kdy vzniká pracovní poměr?',
      back: 'Dnem sjednaným v pracovní smlouvě jako den nástupu do práce.',
      explanation:
        'Datum podpisu může být dřívější než den vzniku pracovního poměru.',
      skillIds: ['employment-start-date'],
    },
    {
      id: 'employment-contract-card-03',
      front: 'Musí být konkrétní částka mzdy vždy v pracovní smlouvě?',
      back: 'Ne. Mzda může vyplývat také ze samostatného mzdového výměru nebo jiného přípustného podkladu.',
      explanation:
        'Mzdová účetní musí dohledat právní a mzdový titul, nikoli hodnotit smlouvu pouze podle přítomnosti částky.',
      skillIds: ['employment-contract-review'],
    },
    {
      id: 'employment-contract-card-04',
      front: 'Co udělat, když ve smlouvě chybí místo výkonu práce?',
      back: 'Vrátit dokument k doplnění oprávněné osobě a údaj nedoplňovat odhadem.',
      explanation: 'Místo výkonu práce patří mezi povinné náležitosti smlouvy.',
      skillIds: ['employment-contract-review'],
    },
  ],
  exercises: [
    {
      id: 'employment-contract-exercise-01',
      type: 'multiple_choice',
      prompt: 'Které údaje jsou povinnými náležitostmi pracovní smlouvy?',
      options: [
        {
          id: 'work',
          text: 'Druh práce.',
        },
        {
          id: 'bank',
          text: 'Číslo bankovního účtu.',
        },
        {
          id: 'place',
          text: 'Místo nebo místa výkonu práce.',
        },
        {
          id: 'salary',
          text: 'Vždy konkrétní částka mzdy.',
        },
        {
          id: 'start',
          text: 'Den nástupu do práce.',
        },
      ],
      correctOptionIds: ['work', 'place', 'start'],
      skillIds: ['employment-contract-essentials'],
      explanation:
        'Povinnými náležitostmi jsou druh práce, místo výkonu práce a den nástupu.',
      commonMistake:
        'Zařadit mezi povinné náležitosti údaje, které mohou být vedeny v jiném dokumentu.',
    },
    {
      id: 'employment-contract-exercise-02',
      type: 'single_choice',
      prompt:
        'Smlouva je podepsána 12. srpna a den nástupu je sjednán na 1. září. Kdy vzniká pracovní poměr?',
      options: [
        {
          id: 'a',
          text: '12. srpna.',
        },
        {
          id: 'b',
          text: '1. září.',
        },
        {
          id: 'c',
          text: 'Dnem první výplaty.',
        },
        {
          id: 'd',
          text: 'Dnem založení v mzdovém systému.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employment-start-date'],
      explanation: 'Pracovní poměr vzniká sjednaným dnem nástupu do práce.',
      commonMistake: 'Zaměnit datum podpisu za datum vzniku pracovního poměru.',
    },
    {
      id: 'employment-contract-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Které údaje patří mezi povinné obsahové náležitosti pracovní smlouvy?',
      options: [
        { id: 'a', text: 'Rodné číslo vedoucího.' },
        { id: 'b', text: 'Druh práce.' },
        { id: 'c', text: 'Místo nebo místa výkonu práce.' },
        { id: 'd', text: 'Den nástupu do práce.' },
        { id: 'e', text: 'Číslo bankovního účtu zaměstnance.' },
      ],
      correctOptionIds: ['b', 'c', 'd'],
      skillIds: ['employment-contract-review'],
      explanation:
        'Pracovní smlouva musí obsahovat druh práce, místo výkonu práce a den nástupu.',
      commonMistake:
        'Zaměnit praktické mzdové údaje za povinné náležitosti smlouvy.',
    },
    {
      id: 'employment-contract-exercise-04',
      type: 'single_choice',
      prompt:
        'Ve smlouvě není uvedena částka mzdy, ale existuje platný mzdový výměr. Jaký je správný postup?',
      options: [
        {
          id: 'a',
          text: 'Smlouvu automaticky označit za neplatnou.',
        },
        {
          id: 'b',
          text: 'Ověřit povinné náležitosti smlouvy a mzdu nastavit podle mzdového výměru.',
        },
        {
          id: 'c',
          text: 'Částku mzdy odhadnout podle podobné pozice.',
        },
        {
          id: 'd',
          text: 'Zaměstnance nezaložit ani po ověření mzdového výměru.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employment-contract-review'],
      explanation: 'Mzda může být určena samostatným přípustným dokumentem.',
      commonMistake:
        'Považovat konkrétní částku mzdy za povinnou náležitost každé pracovní smlouvy.',
    },
    {
      id: 'employment-contract-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá údaj, kterým pracovní smlouva určuje den vzniku pracovního poměru?',
      acceptedAnswers: ['den nástupu do práce', 'den nastupu do prace'],
      ignoreDiacritics: true,
      skillIds: ['employment-start-date'],
      explanation: 'Pracovní poměr vzniká sjednaným dnem nástupu do práce.',
      commonMistake: 'Uvést datum podpisu smlouvy.',
    },
    {
      id: 'employment-contract-exercise-06',
      type: 'single_choice',
      prompt:
        'Podepsaná smlouva neobsahuje místo výkonu práce. Co má mzdová účetní udělat?',
      options: [
        {
          id: 'a',
          text: 'Doplnit sídlo zaměstnavatele podle obchodního rejstříku.',
        },
        {
          id: 'b',
          text: 'Vrátit dokument oprávněné osobě k doplnění.',
        },
        {
          id: 'c',
          text: 'Použít adresu zaměstnance.',
        },
        {
          id: 'd',
          text: 'Místo výkonu práce v evidenci vůbec neuvádět.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employment-contract-review'],
      explanation:
        'Chybějící povinnou náležitost nesmí mzdová účetní nahradit vlastním odhadem.',
      commonMistake:
        'Převzít místo z jiného systému bez pracovněprávního podkladu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Pracovní smlouva a její obsah',
      url: 'https://ppropo.mpsv.cz/IV12Pracovnismlouvaajejiobsah',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákoník práce v aktuálním znění',
      url: 'https://ppropo.mpsv.cz/zakon_262_2006',
      kind: 'official',
    },
  ],
})
