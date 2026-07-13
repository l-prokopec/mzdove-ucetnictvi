import { defineLessonContent } from '../define'

export const remunerationSettingContent = defineLessonContent({
  moduleId: 'remuneration-basics',
  skillIds: [
    'wage-setting-method',
    'remuneration-effective-date',
    'remuneration-document-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Sjednání, stanovení a určení mzdy, určení platu, sjednání odměny z dohody a účinnost mzdových dokumentů ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nárok musí mít konkrétní právní zdroj',
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní musí u každé složky odměny vědět, z jakého dokumentu nebo právního pravidla vzniká, kdo jej mohl vytvořit a od kterého dne je účinný. Samotná částka v tabulce, rozpočtu nebo e-mailu není automaticky nárokem zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Tři způsoby založení mzdy',
    },
    {
      type: 'list',
      items: [
        'sjednání mzdy ve smlouvě',
        'stanovení mzdy vnitřním předpisem',
        'určení mzdy mzdovým výměrem',
      ],
    },
    {
      type: 'definition',
      term: 'Sjednaná mzda',
      definition:
        'Mzda založená shodnou vůlí zaměstnance a zaměstnavatele ve smlouvě, například v pracovní smlouvě, samostatné mzdové dohodě nebo kolektivní smlouvě.',
    },
    {
      type: 'definition',
      term: 'Stanovená mzda',
      definition:
        'Mzda založená jednostranným vnitřním předpisem zaměstnavatele, který vymezuje podmínky a pravidla odměňování pro určený okruh zaměstnanců.',
    },
    {
      type: 'definition',
      term: 'Určená mzda',
      definition:
        'Mzda jednostranně určená zaměstnavatelem v písemném mzdovém výměru, pokud mzda nevyplývá ze smlouvy nebo vnitřního předpisu.',
    },
    {
      type: 'heading',
      text: 'Sjednanou mzdu nelze jednostranně změnit',
    },
    {
      type: 'paragraph',
      text: 'Je-li výše mzdy nebo konkrétní mzdová složka sjednána ve smlouvě, lze ji změnit dohodou stran. Zaměstnavatel ji nemůže jednostranně snížit novým mzdovým výměrem ani interní tabulkou.',
    },
    {
      type: 'example',
      title: 'Základní mzda v pracovní smlouvě',
      situation:
        'Pracovní smlouva obsahuje základní měsíční mzdu 42 000 Kč. Vedoucí požaduje od dalšího měsíce změnu na 39 000 Kč a zašle pouze nový mzdový výměr.',
      solution:
        'Nový mzdový výměr nemůže jednostranně změnit částku sjednanou ve smlouvě. Mzdová účetní vyžádá platnou dohodu o změně a do té doby zachová sjednanou mzdu.',
    },
    {
      type: 'heading',
      text: 'Vnitřní předpis',
    },
    {
      type: 'paragraph',
      text: 'Vnitřní předpis může stanovit mzdové sazby, podmínky prémií, osobního ohodnocení nebo jiné mzdové mechanismy. Musí být vydán oprávněným zaměstnavatelem, být určitý, účinný a dostupný zaměstnancům způsobem stanoveným zákonem.',
    },
    {
      type: 'paragraph',
      text: 'Vnitřní předpis nesmí zkrátit práva zaměstnance pod zákonné minimum a nesmí zpětně odejmout již vzniklý nárok. Mzdová účetní musí uchovat verzi účinnou pro zpracovávané období.',
    },
    {
      type: 'heading',
      text: 'Mzdový výměr',
    },
    {
      type: 'paragraph',
      text: 'Mzdový výměr je písemný jednostranný dokument zaměstnavatele. Obsahuje údaje o způsobu odměňování, mzdových sazbách, ukazatelích, období poskytování složek a případně o termínu a místu výplaty, nejsou-li tyto údaje upraveny jinde.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Mzdový výměr není univerzální nástroj pro změnu všeho, co se týká mzdy. Nemůže změnit ujednání, které bylo platně sjednáno ve smlouvě.',
    },
    {
      type: 'heading',
      text: 'Před začátkem výkonu práce',
    },
    {
      type: 'paragraph',
      text: 'Mzda musí být sjednána, stanovena nebo určena před začátkem výkonu práce, za kterou má příslušet. Zaměstnanec musí předem vědět, podle jakých pravidel bude jeho práce odměněna.',
    },
    {
      type: 'paragraph',
      text: 'Písemný mzdový výměr musí zaměstnavatel předat zaměstnanci před začátkem výkonu práce, pokud potřebné údaje nejsou obsaženy ve smlouvě nebo vnitřním předpisu.',
    },
    {
      type: 'example',
      title: 'Pozdě vydaný mzdový výměr',
      situation:
        'Zaměstnanec nastoupí 1. září a první mzdový výměr obdrží 12. září.',
      solution:
        'Proces je vadný, protože způsob odměňování měl být určen a dokument předán před začátkem práce. Mzdová účetní nesmí vytvářet zpětnou účinnost bez právního podkladu a musí případ eskalovat.',
    },
    {
      type: 'heading',
      text: 'Změna mzdového výměru',
    },
    {
      type: 'paragraph',
      text: 'Při změně údajů uvedených ve mzdovém výměru musí zaměstnavatel předat nový mzdový výměr nejpozději před začátkem výkonu práce v den, kdy změna nabývá účinnosti.',
    },
    {
      type: 'example',
      title: 'Zvýšení od prvního dne měsíce',
      situation:
        'Nová základní mzda má být účinná od 1. října. Zaměstnanec dostane nový mzdový výměr 30. září.',
      solution:
        'Dokument je předán před začátkem práce v den účinnosti. Mzdová účetní nastaví novou částku od 1. října a zachová předchozí stav do 30. září.',
    },
    {
      type: 'heading',
      text: 'Datum podpisu, předání a účinnosti',
    },
    {
      type: 'list',
      items: [
        'datum vytvoření dokumentu',
        'datum podpisu nebo schválení',
        'datum předání zaměstnanci',
        'datum účinnosti',
        'období, za které složka náleží',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tyto údaje se mohou lišit. Pro mzdové zpracování je rozhodné, zda dokument vznikl a byl předán včas a od kterého dne zakládá nebo mění nárok.',
    },
    {
      type: 'heading',
      text: 'Plat se určuje, nikoli libovolně sjednává',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnanců odměňovaných platem určuje plat zaměstnavatel podle zákoníku práce, prováděcích právních předpisů a pravidel vydaných v jejich mezích. Plat nelze individuálně sestavit jinak, než právní předpisy dovolují.',
    },
    {
      type: 'paragraph',
      text: 'Platový systém vychází zejména z platové třídy, platového stupně, platového tarifu a zákonem upravených příplatků, odměn a doplatků. Podrobné výpočty platových složek patří do navazujícího odborného zpracování.',
    },
    {
      type: 'heading',
      text: 'Platový výměr',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel předá zaměstnanci před začátkem práce písemný platový výměr. Uvede v něm platovou třídu, platový stupeň, platový tarif, ostatní pravidelně měsíčně poskytované složky a případně termín a místo výplaty.',
    },
    {
      type: 'paragraph',
      text: 'Při změně uvedených skutečností se vydá nový platový výměr s důvodem změny nejpozději před začátkem práce v den účinnosti. Pravidelnou platovou složku nelze přiznat nebo odejmout zpětně.',
    },
    {
      type: 'heading',
      text: 'Odměna z dohody se sjednává v dohodě',
    },
    {
      type: 'paragraph',
      text: 'Výše odměny z DPP nebo DPČ a podmínky jejího poskytování se sjednávají v příslušné dohodě. Mzdová účetní nesmí vytvořit odměnu jen podle externí objednávky nebo nepodepsané kalkulace.',
    },
    {
      type: 'example',
      title: 'DPČ s hodinovou odměnou',
      situation:
        'DPČ sjednává odměnu 240 Kč za hodinu. Vedoucí chce za minulý měsíc použít 260 Kč na základě ústního příslibu.',
      solution:
        'Bez platného písemného podkladu nelze změnu bezpečně použít. Mzdová účetní vyžádá odpovídající dohodu nebo jiný přípustný dokument s jasnou účinností.',
    },
    {
      type: 'heading',
      text: 'Nároková a nenároková složka',
    },
    {
      type: 'paragraph',
      text: 'Pohyblivá složka může být nároková, pokud jsou předem určeny podmínky a zaměstnanec je splní. Jiná odměna může být nenároková až do rozhodnutí zaměstnavatele. O klasifikaci nerozhoduje název bonus nebo prémie, ale konkrétní právní pravidla.',
    },
    {
      type: 'example',
      title: 'Prémie s měřitelnými podmínkami',
      situation:
        'Vnitřní předpis stanoví prémii 4 000 Kč při splnění tří přesně měřitelných podmínek. Zaměstnanec všechny doloženě splnil.',
      solution:
        'Pokud předpis skutečně zakládá nárok, nelze prémii bez dalšího považovat za libovolnou. Mzdová účetní ověří splnění, období a účinnou verzi předpisu.',
    },
    {
      type: 'heading',
      text: 'Oprávněná osoba',
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní musí ověřit, kdo je oprávněn mzdu sjednat, stanovit, určit nebo schválit pohyblivou složku. Podpis osoby bez příslušného oprávnění je rizikový podklad a vyžaduje nápravu.',
    },
    {
      type: 'heading',
      text: 'Kontrola rovného odměňování',
    },
    {
      type: 'paragraph',
      text: 'Sjednání nebo určení odměny musí respektovat stejnou odměnu za stejnou práci nebo práci stejné hodnoty. Mzdová účetní nemusí sama provádět komplexní právní srovnání, ale má upozornit na zjevné a nevysvětlené rozdíly.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'identifikovat zaměstnance a vztah',
        'určit, zda jde o mzdu, plat nebo odměnu z dohody',
        'najít právní zdroj každé složky',
        'ověřit oprávněnou osobu',
        'ověřit datum předání a účinnosti',
        'rozlišit sjednanou a jednostranně určenou složku',
        'ověřit podmínky nároku',
        'zachovat historickou verzi',
        'zkontrolovat návaznost na mzdové období',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'snížit sjednanou mzdu mzdovým výměrem',
        'vydat mzdový výměr až po začátku práce',
        'použít neúčinnou nebo budoucí verzi vnitřního předpisu',
        'zaměnit datum podpisu za datum účinnosti',
        'individuálně sjednat plat mimo zákonný systém',
        'určit odměnu z dohody mimo samotnou DPP nebo DPČ',
        'považovat každou pohyblivou složku za nenárokovou',
        'přepsat původní mzdový údaj bez historie',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzda se sjednává ve smlouvě, stanoví vnitřním předpisem nebo určuje mzdovým výměrem.',
        'Sjednanou mzdu nelze jednostranně změnit.',
        'Mzda a její změna musí být založeny před výkonem práce, za kterou náleží.',
        'Plat se určuje pouze v mezích zákona a prováděcích předpisů.',
        'Odměna z DPP nebo DPČ se sjednává v příslušné dohodě.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'remuneration-setting-card-01',
      front: 'Jaké jsou tři základní způsoby založení mzdy?',
      back: 'Sjednání ve smlouvě, stanovení vnitřním předpisem a určení mzdovým výměrem.',
      explanation: 'Každý způsob má jiný právní režim změny.',
      skillIds: ['wage-setting-method'],
    },
    {
      id: 'remuneration-setting-card-02',
      front: 'Lze sjednanou mzdu jednostranně snížit mzdovým výměrem?',
      back: 'Ne.',
      explanation: 'Smluvní ujednání se mění dohodou stran.',
      skillIds: ['wage-setting-method'],
    },
    {
      id: 'remuneration-setting-card-03',
      front: 'Kdy musí být mzda sjednána, stanovena nebo určena?',
      back: 'Před začátkem výkonu práce, za kterou má náležet.',
      explanation: 'Zaměstnanec musí znát pravidla odměny předem.',
      skillIds: ['remuneration-effective-date'],
    },
    {
      id: 'remuneration-setting-card-04',
      front: 'Kde se sjednává odměna z DPP nebo DPČ?',
      back: 'V příslušné dohodě.',
      explanation:
        'Neformální tabulka ani ústní příslib nejsou bezpečným právním podkladem.',
      skillIds: ['remuneration-document-control'],
    },
  ],
  exercises: [
    {
      id: 'remuneration-setting-exercise-01',
      type: 'single_choice',
      prompt: 'Mzda je uvedena v pracovní smlouvě. Jak ji lze snížit?',
      options: [
        {
          id: 'a',
          text: 'Novým mzdovým výměrem.',
        },
        {
          id: 'b',
          text: 'Dohodou zaměstnance a zaměstnavatele.',
        },
        {
          id: 'c',
          text: 'Ústním pokynem vedoucího.',
        },
        {
          id: 'd',
          text: 'Přepsáním mzdové karty.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['wage-setting-method'],
      explanation: 'Sjednanou mzdu lze změnit jen změnou smluvního ujednání.',
      commonMistake: 'Považovat mzdový výměr za nadřazený pracovní smlouvě.',
    },
    {
      id: 'remuneration-setting-exercise-02',
      type: 'multiple_choice',
      prompt: 'Co je potřeba ověřit u nového mzdového dokumentu?',
      options: [
        {
          id: 'source',
          text: 'Právní zdroj a typ dokumentu.',
        },
        {
          id: 'overwrite',
          text: 'Možnost bez záznamu přepsat historii.',
        },
        {
          id: 'authority',
          text: 'Oprávnění autora.',
        },
        {
          id: 'delivery',
          text: 'Předání zaměstnanci.',
        },
        {
          id: 'effective',
          text: 'Datum účinnosti.',
        },
      ],
      correctOptionIds: ['source', 'authority', 'delivery', 'effective'],
      skillIds: [
        'remuneration-document-control',
        'remuneration-effective-date',
      ],
      explanation: 'Dokument musí být právně platný, účinný a auditovatelný.',
      commonMistake: 'Kontrolovat pouze výslednou částku.',
    },
    {
      id: 'remuneration-setting-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Které způsoby mohou založit výši odměny za práci podle použitého režimu?',
      options: [
        { id: 'a', text: 'Sjednání ve smlouvě.' },
        { id: 'd', text: 'Neformální odhad mzdové účetní.' },
        { id: 'b', text: 'Stanovení vnitřním předpisem v přípustném režimu.' },
        { id: 'e', text: 'Automatické převzetí částky jiného zaměstnance.' },
        {
          id: 'c',
          text: 'Určení mzdovým nebo platovým výměrem podle zákonných pravidel.',
        },
      ],
      correctOptionIds: ['a', 'b', 'c'],
      skillIds: ['remuneration-document-control'],
      explanation:
        'Způsob založení odměny musí odpovídat mzdové nebo platové sféře a dokumentaci.',
      commonMistake: 'Považovat technický údaj v systému za právní titul.',
    },
    {
      id: 'remuneration-setting-exercise-04',
      type: 'single_choice',
      prompt:
        'Nový mzdový výměr je účinný od 1. října. Kdy jej musí zaměstnanec nejpozději obdržet?',
      options: [
        {
          id: 'a',
          text: 'Do konce října.',
        },
        {
          id: 'b',
          text: 'Před začátkem výkonu práce dne 1. října.',
        },
        {
          id: 'c',
          text: 'Až s výplatní páskou.',
        },
        {
          id: 'd',
          text: 'Kdykoli do konce roku.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['remuneration-effective-date'],
      explanation:
        'Zaměstnanec musí mít nový výměr před výkonem práce v den účinnosti.',
      commonMistake: 'Považovat mzdovou uzávěrku za rozhodný termín předání.',
    },
    {
      id: 'remuneration-setting-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá jednostranný písemný dokument zaměstnavatele, kterým může být určena mzda?',
      acceptedAnswers: ['mzdový výměr', 'mzdovy vymer'],
      ignoreDiacritics: true,
      skillIds: ['wage-setting-method'],
      explanation: 'Jde o mzdový výměr.',
      commonMistake: 'Uvést platový výměr, který patří do platové sféry.',
    },
    {
      id: 'remuneration-setting-exercise-06',
      type: 'single_choice',
      prompt:
        'Vnitřní předpis stanoví měřitelnou prémii a zaměstnanec podmínky splnil. Co je správně?',
      options: [
        {
          id: 'a',
          text: 'Prémie je vždy nenároková.',
        },
        {
          id: 'b',
          text: 'Je nutné posoudit znění předpisu a vznik nároku.',
        },
        {
          id: 'c',
          text: 'Prémie se nesmí vyplatit.',
        },
        {
          id: 'd',
          text: 'Rozhoduje pouze název bonus.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['remuneration-document-control'],
      explanation:
        'Nárokovost vyplývá z konkrétních pravidel, nikoli z názvu složky.',
      commonMistake: 'Označit všechny pohyblivé složky za zcela libovolné.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Sjednání, stanovení nebo určení mzdy',
      url: 'https://ppropo.mpsv.cz/XIXOdmenovanizamestnancumzdou',
      kind: 'official',
    },
    {
      title: 'MPSV – Principy platového systému',
      url: 'https://ppropo.mpsv.cz/XX4Principyplatovehosystemu',
      kind: 'official',
    },
    {
      title: 'MPSV – Platový výměr',
      url: 'https://ppropo.mpsv.cz/XX10Platovyvymer',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
  ],
})
