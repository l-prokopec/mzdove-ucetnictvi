import { defineLessonContent } from '../define'

export const onboardingChecklistContent = defineLessonContent({
  moduleId: 'employee-onboarding',
  skillIds: [
    'onboarding-file-review',
    'onboarding-readiness-decision',
    'onboarding-reconciliation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-07-01',
    verifiedAt: '2026-07-11',
    note: 'Komplexní kontrola nástupu zaměstnance propojující pracovní smlouvu, osobní údaje, daňové a pojistné podklady a registrační pravidla účinná od července 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Cíl závěrečné kontroly nástupu',
    },
    {
      type: 'paragraph',
      text: 'Kontrola nástupu má potvrdit, že pracovní vztah může být bezpečně založen, zaměstnanec může nastoupit k výkonu práce, registrace jsou připravené nebo provedené a první mzda bude vycházet z úplných a vzájemně shodných podkladů.',
    },
    {
      type: 'definition',
      term: 'Nástupní spis',
      definition:
        'Soubor pracovněprávních, osobních, mzdových, daňových, pojistných a registračních podkladů vztahujících se ke konkrétnímu nástupu zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Kontrola pracovněprávního základu',
    },
    {
      type: 'list',
      items: [
        'správný zaměstnavatel a zaměstnanec',
        'finální písemná pracovní smlouva',
        'druh práce',
        'místo výkonu práce',
        'den nástupu',
        'doba trvání pracovního poměru',
        'zkušební doba a její zákonné limity',
        'samostatný mzdový dokument, není-li mzda sjednána ve smlouvě',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrola osobních a mzdových údajů',
    },
    {
      type: 'list',
      items: [
        'ověřená identita',
        'shoda jména, data narození a identifikátorů',
        'adresa a kontakt v potřebném rozsahu',
        'jednoznačný identifikátor zaměstnání',
        'pracovní doba a organizační zařazení',
        'mzdová částka nebo sazba z oprávněného podkladu',
        'ověřený způsob výplaty',
        'omezený přístup k údajům',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrola daně a pojištění',
    },
    {
      type: 'list',
      items: [
        'stav Prohlášení poplatníka',
        'doklady k uplatňovaným daňovým nárokům',
        'zdravotní pojišťovna',
        'případná kategorie nebo přeshraniční pojistný dokument',
        'údaje pro evidenci zaměstnance a REGZEC',
        'shoda data nástupu ve všech podkladech',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrola před zahájením práce',
    },
    {
      type: 'list',
      items: [
        'REGZEC byl podán v přípustném přednástupním období',
        'podání bylo technicky přijato',
        'zaměstnanec je oprávněn k výkonu práce',
        'byly splněny potřebné pracovnělékařské a bezpečnostní kroky',
        'docházkový a personální systém používají stejné datum nástupu',
        'je určeno, kdo ověří skutečný nástup',
      ],
    },
    {
      type: 'heading',
      text: 'Modelový nástup',
    },
    {
      type: 'example',
      title: 'Zadání případu',
      situation:
        'Společnost přijímá od 1. září 2026 účetní na pracovní poměr na dobu určitou 12 měsíců. Sjednána je tříměsíční zkušební doba. Smlouva obsahuje druh práce, místo výkonu práce a den nástupu. Mzda je určena samostatným mzdovým výměrem. Zaměstnanec předložil daňové Prohlášení a uvedl zdravotní pojišťovnu. Číslo účtu přišlo z nové soukromé e-mailové adresy. Přednástupní REGZEC byl podán částečně.',
      solution:
        'Pracovněprávní část je použitelná a tříměsíční zkušební doba nepřesahuje polovinu dvanáctiměsíční doby určité. Mzdový výměr se naváže na smlouvu. Daňové a zdravotní podklady se ověří. Bankovní účet se nesmí použít bez řízeného ověření. Před zahájením práce se ověří přijetí REGZEC a po skutečném nástupu se včas doplní zbývající registrační údaje.',
    },
    {
      type: 'heading',
      text: 'Krok 1: kontrola smlouvy',
    },
    {
      type: 'paragraph',
      text: 'Smlouva obsahuje povinné náležitosti a jednoznačný den nástupu. Doba určitá je písemně vymezena. Zkušební doba tři měsíce je kratší než obecný limit i polovina dvanáctiměsíčního vztahu.',
    },
    {
      type: 'heading',
      text: 'Krok 2: kontrola mzdového podkladu',
    },
    {
      type: 'paragraph',
      text: 'Mzdový výměr musí patřit stejnému zaměstnanci a vztahu, být vydán oprávněnou osobou a být účinný nejpozději pro první zpracovávané období. Částka se nesmí převzít z neformálního náborového e-mailu.',
    },
    {
      type: 'heading',
      text: 'Krok 3: kontrola osobních údajů',
    },
    {
      type: 'paragraph',
      text: 'Identifikační údaje se porovnají mezi smlouvou, nástupním formulářem a registračním podáním. Bankovní účet z nového e-mailu zůstává neověřeným vstupem a musí projít stanovenou kontrolou.',
    },
    {
      type: 'heading',
      text: 'Krok 4: kontrola daně a pojištění',
    },
    {
      type: 'paragraph',
      text: 'Prohlášení poplatníka se zkontroluje z hlediska osoby, období, data a uplatňovaných nároků. Zdravotní pojišťovna se porovná s podkladem zaměstnance. Případné výjimky nebo zvláštní kategorie se nepředpokládají bez dokladu.',
    },
    {
      type: 'heading',
      text: 'Krok 5: přednástupní registrace',
    },
    {
      type: 'paragraph',
      text: 'Částečný REGZEC musí být podán nejpozději před zahájením práce a ne dříve než osm dnů před předpokládaným nástupem. Po nástupu se doplní zbývající údaje a uloží se potvrzení o přijetí.',
    },
    {
      type: 'heading',
      text: 'Rozhodnutí připraveno / nepřipraveno',
    },
    {
      type: 'definition',
      term: 'Blokující nedostatek',
      definition:
        'Chybějící nebo rozporný podklad, který brání bezpečnému založení pracovního vztahu, splnění přednástupní povinnosti nebo správnému mzdovému zpracování.',
    },
    {
      type: 'paragraph',
      text: 'Ne každý nedostatek blokuje všechny kroky. Neověřený bankovní účet například nemusí bránit vzniku pracovního poměru, ale blokuje bezpečné nastavení bezhotovostní výplaty. Chybějící den nástupu nebo neprovedená přednástupní registrace může být zásadním blokujícím problémem.',
    },
    {
      type: 'heading',
      text: 'Matice nedostatků',
    },
    {
      type: 'list',
      items: [
        'chybějící povinná náležitost smlouvy – vrátit k pracovněprávní nápravě',
        'neověřená identita – nezakládat finální osobní záznam',
        'chybějící mzdový podklad – nepočítat mzdu odhadem',
        'chybějící Prohlášení – neuplatnit měsíční daňové nároky',
        'chybějící zdravotní pojišťovna – vyžádat údaj a dokončit oznámení',
        'neprovedený REGZEC před výkonem práce – okamžitě eskalovat před nástupem',
        'neověřený bankovní účet – nepoužít pro výplatu',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrola skutečného nástupu',
    },
    {
      type: 'paragraph',
      text: 'V den nástupu musí odpovědná osoba potvrdit, zda zaměstnanec skutečně začal vykonávat práci. Pokud nenastoupil, musí se upravit registrace, docházka, interní přístupy a navazující mzdové procesy.',
    },
    {
      type: 'heading',
      text: 'Kontrola před první mzdou',
    },
    {
      type: 'list',
      items: [
        'pracovní vztah je aktivní ve správném období',
        'docházka začíná správným dnem',
        'mzda odpovídá účinnému podkladu',
        'daňový stav odpovídá předloženým dokumentům',
        'zdravotní a sociální evidence odpovídají skutečnému nástupu',
        'bankovní účet je ověřen nebo je určen jiný přípustný způsob výplaty',
        'nejsou založené duplicitní pracovní vztahy',
      ],
    },
    {
      type: 'example',
      title: 'Rozpor odhalený před uzávěrkou',
      situation:
        'Docházka ukazuje nástup 2. září, ale smlouva a REGZEC uvádějí 1. září.',
      solution:
        'Mzdová účetní nezvolí datum podle toho, které je v systému častěji. Vyžádá potvrzení skutečného průběhu a zkontroluje, zda 1. září nebyl nepracovní den, plánovaná směna, překážka nebo chyba evidence. Následně opraví pouze nesprávný zdroj.',
    },
    {
      type: 'heading',
      text: 'Kontrolní stopa nástupu',
    },
    {
      type: 'list',
      items: [
        'verze a datum pracovněprávních dokumentů',
        'zdroj a ověření osobních údajů',
        'mzdový a daňový podklad',
        'pojistné údaje',
        'identifikátor a výsledek podání REGZEC',
        'potvrzení skutečného nástupu',
        'provedené opravy a jejich schválení',
        'výsledek kontroly před první mzdou',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'označit spis za úplný jen proto, že obsahuje pracovní smlouvu',
        'neporovnat datum nástupu mezi systémy',
        'použít neověřený bankovní účet',
        'zaměnit částečné REGZEC za plně dokončenou registraci',
        'neověřit skutečný nástup',
        'považovat chybějící Prohlášení za překážku vzniku pracovního poměru',
        'neodlišit blokující a neblokující nedostatek',
      ],
    },
    {
      type: 'summary',
      items: [
        'Úplný nástup propojuje pracovní smlouvu, osobní a mzdové údaje, daň, pojištění a registrace.',
        'Každý údaj musí patřit správnému zaměstnanci, pracovnímu vztahu a období.',
        'Před výkonem práce musí být splněna přednástupní registrační povinnost.',
        'Neověřený údaj se nepoužívá jen proto, aby byl spis administrativně uzavřen.',
        'Po skutečném nástupu následuje doplnění evidence a kontrola před první mzdou.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'onboarding-checklist-card-01',
      front: 'Co obsahuje úplná kontrola nástupu?',
      back: 'Pracovněprávní, osobní, mzdové, daňové, pojistné a registrační podklady.',
      explanation:
        'Samotná pracovní smlouva nepokrývá všechny povinnosti nástupu.',
      skillIds: ['onboarding-file-review'],
    },
    {
      id: 'onboarding-checklist-card-02',
      front:
        'Je chybějící Prohlášení poplatníka překážkou vzniku pracovního poměru?',
      back: 'Ne. Ovlivní daňové zpracování, nikoli samotný vznik pracovního poměru.',
      explanation:
        'Nedostatky se rozlišují podle toho, kterou část procesu blokují.',
      skillIds: ['onboarding-readiness-decision'],
    },
    {
      id: 'onboarding-checklist-card-03',
      front: 'Co blokuje neověřený bankovní účet?',
      back: 'Bezpečné nastavení bezhotovostní výplaty.',
      explanation:
        'Nemusí blokovat vznik pracovního poměru, ale účet nesmí být použit bez ověření.',
      skillIds: ['onboarding-readiness-decision'],
    },
    {
      id: 'onboarding-checklist-card-04',
      front: 'Co se kontroluje po skutečném nástupu?',
      back: 'Doplnění registrace, shoda systémů, docházka a připravenost první mzdy.',
      explanation: 'Přednástupní kontrola nekončí samotným prvním dnem.',
      skillIds: ['onboarding-reconciliation'],
    },
  ],
  exercises: [
    {
      id: 'onboarding-checklist-exercise-01',
      type: 'multiple_choice',
      prompt: 'Které oblasti patří do úplné kontroly nástupního spisu?',
      options: [
        {
          id: 'contract',
          text: 'Pracovněprávní dokumentace.',
        },
        {
          id: 'private-hobby',
          text: 'Soukromé zájmy bez vztahu k zaměstnání.',
        },
        {
          id: 'personal',
          text: 'Osobní a mzdové údaje.',
        },
        {
          id: 'tax',
          text: 'Daňové podklady.',
        },
        {
          id: 'insurance',
          text: 'Pojistné a registrační údaje.',
        },
      ],
      correctOptionIds: ['contract', 'personal', 'tax', 'insurance'],
      skillIds: ['onboarding-file-review'],
      explanation:
        'Úplný spis propojuje všechny oblasti potřebné pro vztah, evidenci a mzdu.',
      commonMistake: 'Považovat pracovní smlouvu za jediný nástupní dokument.',
    },
    {
      id: 'onboarding-checklist-exercise-02',
      type: 'single_choice',
      prompt:
        'Číslo účtu přišlo z neověřené adresy. Co tento nedostatek bezprostředně blokuje?',
      options: [
        {
          id: 'a',
          text: 'Samotný vznik pracovního poměru.',
        },
        {
          id: 'b',
          text: 'Bezpečné použití účtu pro výplatu.',
        },
        {
          id: 'c',
          text: 'Písemnou formu pracovní smlouvy.',
        },
        {
          id: 'd',
          text: 'Určení druhu práce.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['onboarding-readiness-decision'],
      explanation:
        'Účet nelze použít bez ověření, ale jeho absence sama o sobě neruší pracovní smlouvu.',
      commonMistake:
        'Nerozlišit, kterou konkrétní část nástupu nedostatek ovlivňuje.',
    },
    {
      id: 'onboarding-checklist-exercise-03',
      type: 'single_choice',
      prompt:
        'Nástupní spis obsahuje pracovní smlouvu a osobní údaje, ale chybí ověřený pojistný podklad. Co je správné?',
      options: [
        { id: 'a', text: 'Označit spis jako úplný.' },
        {
          id: 'b',
          text: 'Doplnit chybějící podklad nebo evidovat řízenou výjimku před navazujícím hlášením.',
        },
        { id: 'c', text: 'Zkopírovat údaj od jiného zaměstnance.' },
        { id: 'd', text: 'Odstranit kontrolní bod z checklistu.' },
      ],
      correctOptionId: 'b',
      skillIds: ['onboarding-file-review', 'onboarding-reconciliation'],
      explanation: 'Checklist má odhalit a řízeně uzavřít chybějící podklady.',
      commonMistake: 'Formálně odškrtnout krok bez skutečného vyřešení.',
    },
    {
      id: 'onboarding-checklist-exercise-04',
      type: 'single_choice',
      prompt: 'Částečný REGZEC byl přijat před nástupem. Co musí následovat?',
      options: [
        {
          id: 'a',
          text: 'Nic dalšího.',
        },
        {
          id: 'b',
          text: 'Ověření skutečného nástupu a včasné doplnění zbývajících údajů.',
        },
        {
          id: 'c',
          text: 'Smazání pracovní smlouvy.',
        },
        {
          id: 'd',
          text: 'Automatické dokončení bez kontroly.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['onboarding-reconciliation'],
      explanation:
        'Částečné přihlášení je pouze první část registračního procesu.',
      commonMistake:
        'Považovat technicky přijaté částečné podání za plně dokončenou evidenci.',
    },
    {
      id: 'onboarding-checklist-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá nedostatek, který brání bezpečnému pokračování konkrétní části nástupu?',
      acceptedAnswers: ['blokující nedostatek', 'blokujici nedostatek'],
      ignoreDiacritics: true,
      skillIds: ['onboarding-readiness-decision'],
      explanation:
        'Blokující nedostatek musí být odstraněn před pokračováním dotčené části procesu.',
      commonMistake:
        'Považovat každý nedostatek za stejně závažný nebo naopak žádný za blokující.',
    },
    {
      id: 'onboarding-checklist-exercise-06',
      type: 'single_choice',
      prompt:
        'Docházka uvádí jiné datum nástupu než smlouva a REGZEC. Co je správně?',
      options: [
        {
          id: 'a',
          text: 'Použít datum z docházky bez ověření.',
        },
        {
          id: 'b',
          text: 'Zjistit skutečný průběh, určit chybný zdroj a provést řízenou opravu.',
        },
        {
          id: 'c',
          text: 'Ponechat v každém systému jiné datum.',
        },
        {
          id: 'd',
          text: 'Vybrat průměr obou dat.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['onboarding-reconciliation'],
      explanation:
        'Rozpor se řeší podle právního podkladu a skutečnosti, nikoli náhodným výběrem systému.',
      commonMistake:
        'Automaticky považovat jeden systém za správný bez kontroly skutečného průběhu.',
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
      title: 'ČSSZ – Evidence zaměstnanců',
      url: 'https://www.cssz.cz/web/cz/evidence-zamestnancu-prihlaseni-zmena-odhlaseni-',
      kind: 'official',
    },
    {
      title: 'Finanční správa – Zaměstnanci a zaměstnavatelé',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title: 'VZP – Oznamovací povinnost zaměstnavatele',
      url: 'https://www.vzp.cz/platci/informace/zamestnavatel/povinnosti-zamestnavatele/oznamovaci-povinnost',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatelé',
      url: 'https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/zamestnavatele',
      kind: 'official',
    },
  ],
})
