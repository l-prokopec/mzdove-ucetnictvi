import { defineLessonContent } from '../define'

export const wageComponentsContent = defineLessonContent({
  moduleId: 'remuneration-basics',
  skillIds: [
    'wage-component-classification',
    'variable-component-entitlement',
    'gross-remuneration-assembly',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Pevné, pohyblivé, pravidelné a mimořádné složky mzdy, jejich právní podklady a sestavení hrubé odměny ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Mzda může mít více složek',
    },
    {
      type: 'paragraph',
      text: 'Mzda je souhrnem všech plnění poskytovaných za práci. V praxi se skládá z pevné části, pohyblivých výkonových složek, mimořádných odměn a zákonných zvýhodnění za zvláštní režimy práce. Mzdová účetní musí každou složku vést samostatně podle jejího právního podkladu a období.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Rozdělení na pevné a pohyblivé složky je praktická klasifikace, nikoli úplný zákonný seznam. O právním režimu vždy rozhoduje konkrétní dokument a účel plnění.',
    },
    {
      type: 'definition',
      term: 'Pevná složka mzdy',
      definition:
        'Pravidelná část mzdy určená předem konkrétní částkou nebo sazbou, jejíž výše se při splnění základních podmínek v jednotlivých obdobích nemění.',
    },
    {
      type: 'definition',
      term: 'Pohyblivá složka mzdy',
      definition:
        'Část mzdy, jejíž vznik nebo výše závisí na výkonu, výsledku, splnění ukazatele, rozhodnutí zaměstnavatele nebo jiné předem vymezené skutečnosti.',
    },
    {
      type: 'heading',
      text: 'Základní pevná mzda',
    },
    {
      type: 'paragraph',
      text: 'Pevná mzda může být sjednána nebo určena jako měsíční, hodinová, úkolová, podílová nebo jinak jednoznačně vypočitatelná. Pevná neznamená vždy měsíční částku; pevná může být i hodinová sazba, pokud je předem určena.',
    },
    {
      type: 'example',
      title: 'Pevná hodinová sazba',
      situation:
        'Zaměstnanec má určenu hodinovou mzdu 220 Kč a v měsíci odpracuje 152 hodin.',
      solution:
        'Základní mzda za odpracovanou dobu činí 152 × 220 Kč = 33 440 Kč. Další složky a zákonná zvýhodnění se posuzují samostatně.',
    },
    {
      type: 'heading',
      text: 'Měsíční mzda',
    },
    {
      type: 'paragraph',
      text: 'Měsíční mzda je určena za celý sjednaný nebo stanovený měsíční fond. Pokud zaměstnanec neodpracuje celý fond, zpracování se řídí konkrétními pravidly mzdy, rozvrhem, překážkami a příslušnými náhradami. Detailní krácení měsíční mzdy patří do modulu výpočtu hrubé mzdy.',
    },
    {
      type: 'heading',
      text: 'Osobní složka',
    },
    {
      type: 'paragraph',
      text: 'Osobní ohodnocení, osobní příplatek ve mzdové sféře nebo jiná pravidelná osobní složka může být pevná, podmíněná nebo pohyblivá podle dokumentu, který ji zakládá. Název osobní ohodnocení sám neříká, zda jej lze jednostranně měnit a za jakých podmínek.',
    },
    {
      type: 'example',
      title: 'Pravidelná osobní složka',
      situation:
        'Mzdový výměr určuje základní mzdu 36 000 Kč a osobní ohodnocení 3 000 Kč měsíčně bez dalších podmínek.',
      solution:
        'Pro zpracovávané období jde o dvě pravidelné mzdové složky v souhrnu 39 000 Kč, pokud je výměr účinný a zaměstnanec splnil podmínky pro celý měsíční nárok.',
    },
    {
      type: 'heading',
      text: 'Výkonová prémie',
    },
    {
      type: 'paragraph',
      text: 'Prémie může záviset na množství, kvalitě, obratu, produktivitě, chybovosti nebo jiném ukazateli. Podmínky musí být dostatečně určité, měřitelné a účinné pro hodnocené období.',
    },
    {
      type: 'list',
      items: [
        'název a právní zdroj prémie',
        'hodnocené období',
        'měřitelný ukazatel',
        'zdroj výsledných dat',
        'výpočtový vzorec nebo pásmo',
        'oprávněná schvalující osoba',
        'datum uzavření výsledku',
      ],
    },
    {
      type: 'example',
      title: 'Prémie podle splnění cíle',
      situation:
        'Vnitřní předpis stanoví prémii 5 000 Kč při splnění cíle alespoň na 100 %. Potvrzený výsledek je 103 %.',
      solution:
        'Pokud předpis neobsahuje další podmínky a je účinný, zaměstnanci vzniká podle uvedeného pravidla prémie 5 000 Kč. Mzdová účetní uchová výsledek a schválení.',
    },
    {
      type: 'heading',
      text: 'Provize',
    },
    {
      type: 'paragraph',
      text: 'Provize je obvykle pohyblivá složka odvozená například od uzavřených obchodů, tržeb nebo inkasa. Je nutné přesně určit okamžik vzniku nároku, stornování, vrácení zboží, měnu a období, do kterého se provize zúčtuje.',
    },
    {
      type: 'heading',
      text: 'Úkolová a podílová mzda',
    },
    {
      type: 'paragraph',
      text: 'Úkolová mzda se odvíjí od splnění měřitelné jednotky práce. Podílová mzda se odvíjí od podílu na výsledku, například tržbě. Ani jedna forma nezbavuje zaměstnavatele povinnosti dodržet minimální mzdu a rovné odměňování.',
    },
    {
      type: 'heading',
      text: 'Mimořádná odměna',
    },
    {
      type: 'paragraph',
      text: 'Mimořádná odměna oceňuje jednorázový výsledek, zvláštní úkol nebo mimořádný přínos. Může být nenároková do rozhodnutí zaměstnavatele, ale po platném přiznání a vzniku práva ji mzdová účetní nemůže bez podkladu ignorovat.',
    },
    {
      type: 'example',
      title: 'Schválená mimořádná odměna',
      situation:
        'Oprávněný ředitel písemně přizná zaměstnanci odměnu 8 000 Kč za dokončení mimořádného projektu v listopadu.',
      solution:
        'Odměna se zúčtuje podle dokumentu do určeného období. Musí zůstat oddělena od základní mzdy a od případných zákonných příplatků.',
    },
    {
      type: 'heading',
      text: 'Cílová nebo dlouhodobá odměna',
    },
    {
      type: 'paragraph',
      text: 'Složka může být navázána na víceměsíční nebo roční ukazatel. Dokument musí určit podmínky, rozhodné období, okamžik vyhodnocení a pravidla při nástupu, změně úvazku nebo skončení pracovního vztahu.',
    },
    {
      type: 'heading',
      text: 'Nárokovost není totéž co pravidelnost',
    },
    {
      type: 'paragraph',
      text: 'Pravidelně vyplácená složka nemusí být automaticky nároková a jednorázová složka může být nároková po splnění předem stanovených podmínek. Rozhoduje právní zdroj, nikoli četnost výplaty.',
    },
    {
      type: 'heading',
      text: 'Zákonná mzdová zvýhodnění',
    },
    {
      type: 'list',
      items: [
        'mzda a příplatek nebo náhradní volno za práci přesčas',
        'mzda, náhradní volno nebo náhrada mzdy za svátek',
        'příplatek za noční práci',
        'příplatek za práci ve ztíženém pracovním prostředí',
        'příplatek za práci v sobotu a v neděli',
        'další zvláštní zákonné složky',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tyto složky patří do mzdy za práci, ale jejich konkrétní výpočet vyžaduje časové vstupy, průměrný výdělek a další pravidla. V tomto modulu se vedou jako samostatné kategorie a nerozpouštějí se bez podkladu do základní mzdy.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Příplatek nebo mzda za zvláštní režim práce se nesmí zaměnit za dobrovolný bonus. Vzniká-li zákonný nárok, musí být samostatně rozpoznán a vypočten podle příslušného pravidla.',
    },
    {
      type: 'heading',
      text: 'Hrubá mzda',
    },
    {
      type: 'definition',
      term: 'Hrubá mzda',
      definition:
        'Součet mzdových složek zúčtovaných zaměstnanci za dané období před zákonnými a dalšími srážkami.',
    },
    {
      type: 'paragraph',
      text: 'Hrubá mzda není částka odeslaná zaměstnanci. Teprve z hrubých a dalších rozhodných plnění se v navazujících procesech vypočítají daň, pojistné, srážky a čistá mzda.',
    },
    {
      type: 'example',
      title: 'Součet pevné a pohyblivé složky',
      situation:
        'Zaměstnanec má základní mzdu 38 000 Kč, pravidelné osobní ohodnocení 3 000 Kč a schválenou výkonovou prémii 4 500 Kč. Nejsou zadány další složky.',
      solution:
        'Hrubá mzda ze zadaných složek činí 38 000 + 3 000 + 4 500 = 45 500 Kč. Daň, pojistné a čistá mzda nejsou součástí tohoto příkladu.',
    },
    {
      type: 'heading',
      text: 'Co není složkou mzdy',
    },
    {
      type: 'list',
      items: [
        'náhrada mzdy za překážku',
        'cestovní náhrada',
        'náhrada nákladů při práci na dálku',
        'odstupné',
        'náhrada škody',
        'sociální výpomoc nebo benefit neposkytovaný za práci',
        'srážka ze mzdy',
      ],
    },
    {
      type: 'paragraph',
      text: 'Některé nemzdové položky se mohou objevit na stejné výplatní pásce nebo ve stejném bankovním převodu. To z nich však nedělá mzdové složky.',
    },
    {
      type: 'heading',
      text: 'Záporná pohyblivá složka',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel nesmí libovolně vytvořit záporný bonus jako náhradu za srážku nebo sankci. Pokud podmínky pohyblivé složky vedou k nulovému nároku, složka může být nulová. Odečtení již vzniklé mzdy nebo uložení peněžitého postihu vyžaduje samostatný zákonný titul.',
    },
    {
      type: 'heading',
      text: 'Časové přiřazení složky',
    },
    {
      type: 'paragraph',
      text: 'Každá složka musí mít období, za které náleží. Datum schválení nebo výplaty nemusí být totožné s hodnoceným obdobím. Tato vazba je důležitá pro opravy, průměrný výdělek, pojistné a hlášení.',
    },
    {
      type: 'example',
      title: 'Roční bonus vyplacený v březnu',
      situation: 'V březnu 2027 je schválen bonus za výsledky roku 2026.',
      solution:
        'Mzdová evidence musí zachytit právní zdroj, hodnocené období roku 2026 a měsíc zúčtování březen 2027. Další dopady se posoudí podle pravidel navazujících modulů.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'dohledat právní zdroj složky',
        'určit pevnou nebo pohyblivou povahu',
        'určit nárokové podmínky',
        'ověřit hodnocené období',
        'ověřit vstupní data a schválení',
        'oddělit zákonné příplatky',
        'oddělit nemzdová plnění',
        'sečíst hrubé mzdové složky',
        'uchovat výpočtovou a schvalovací stopu',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každou pevnou složku za měsíční mzdu',
        'považovat každou pohyblivou složku za nenárokovou',
        'zahrnout cestovní náhradu do hrubé mzdy',
        'rozpustit zákonný příplatek do obecného bonusu bez podkladu',
        'zúčtovat prémii bez doloženého výsledku',
        'přiřadit složku k nesprávnému období',
        'použít záporný bonus jako peněžitý postih',
        'zaměnit hrubou mzdu za čistou částku k výplatě',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzda může obsahovat pevné, pohyblivé, pravidelné, mimořádné a zákonné složky.',
        'Nárokovost se posuzuje podle právního zdroje a splnění podmínek.',
        'Zákonné příplatky se vedou odděleně od dobrovolných bonusů.',
        'Hrubá mzda je součet mzdových složek před srážkami.',
        'Nemzdová plnění se do hrubé mzdy nezařazují jen proto, že jsou vyplacena současně.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'wage-components-card-01',
      front: 'Je pevná složka mzdy vždy měsíční částka?',
      back: 'Ne. Může jít také o předem určenou hodinovou nebo jinou sazbu.',
      explanation:
        'Pevnost znamená předem známé pravidlo, nikoli jedinou formu výpočtu.',
      skillIds: ['wage-component-classification'],
    },
    {
      id: 'wage-components-card-02',
      front: 'Je každá pohyblivá složka automaticky nenároková?',
      back: 'Ne. Po splnění předem určených podmínek může být nároková.',
      explanation: 'Rozhoduje konkrétní právní zdroj.',
      skillIds: ['variable-component-entitlement'],
    },
    {
      id: 'wage-components-card-03',
      front: 'Co je hrubá mzda?',
      back: 'Součet mzdových složek před daní, pojistným a dalšími srážkami.',
      explanation: 'Není totožná s částkou odeslanou zaměstnanci.',
      skillIds: ['gross-remuneration-assembly'],
    },
    {
      id: 'wage-components-card-04',
      front: 'Patří cestovní náhrada do hrubé mzdy?',
      back: 'Ne, pokud jde skutečně o náhradu výdajů.',
      explanation: 'Jde o samostatné nemzdové plnění.',
      skillIds: ['wage-component-classification'],
    },
  ],
  exercises: [
    {
      id: 'wage-components-exercise-01',
      type: 'single_choice',
      prompt:
        'Základní mzda je 38 000 Kč, osobní složka 3 000 Kč a prémie 4 500 Kč. Jaká je hrubá mzda ze zadaných složek?',
      options: [
        {
          id: 'a',
          text: '41 000 Kč.',
        },
        {
          id: 'b',
          text: '42 500 Kč.',
        },
        {
          id: 'c',
          text: '45 500 Kč.',
        },
        {
          id: 'd',
          text: '38 000 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['gross-remuneration-assembly'],
      explanation: '38 000 + 3 000 + 4 500 = 45 500 Kč.',
      commonMistake: 'Vynechat pohyblivou nebo osobní složku.',
    },
    {
      id: 'wage-components-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které položky jsou typicky mzdovými složkami za práci?',
      options: [
        {
          id: 'base',
          text: 'Základní mzda.',
        },
        {
          id: 'commission',
          text: 'Provize.',
        },
        {
          id: 'bonus',
          text: 'Výkonová prémie.',
        },
        {
          id: 'weekend',
          text: 'Příplatek za práci v sobotu a v neděli.',
        },
        {
          id: 'travel',
          text: 'Náhrada cestovních výdajů.',
        },
      ],
      correctOptionIds: ['base', 'commission', 'bonus', 'weekend'],
      skillIds: ['wage-component-classification'],
      explanation: 'Cestovní náhrada nahrazuje výdaj a není odměnou za práci.',
      commonMistake: 'Zařadit každou vyplacenou částku do mzdy.',
    },
    {
      id: 'wage-components-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování pohyblivé mzdové složky.',
      steps: [
        {
          id: 'source',
          text: 'Dohledat účinný právní zdroj.',
        },
        {
          id: 'period',
          text: 'Určit hodnocené období.',
        },
        {
          id: 'data',
          text: 'Načíst měřitelné výsledky.',
        },
        {
          id: 'conditions',
          text: 'Vyhodnotit splnění podmínek.',
        },
        {
          id: 'approval',
          text: 'Ověřit potřebné schválení.',
        },
        {
          id: 'payroll',
          text: 'Zúčtovat složku a uložit kontrolní stopu.',
        },
      ],
      correctOrder: [
        'source',
        'period',
        'data',
        'conditions',
        'approval',
        'payroll',
      ],
      skillIds: ['variable-component-entitlement'],
      explanation: 'Výplata navazuje na pravidla, data a schválení.',
      commonMistake: 'Zadávat částku podle neověřené tabulky.',
    },
    {
      id: 'wage-components-exercise-04',
      type: 'single_choice',
      prompt:
        'Vnitřní předpis stanoví prémii při splnění přesného cíle a zaměstnanec cíl splní. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Prémie je vždy libovolná.',
        },
        {
          id: 'b',
          text: 'Je nutné respektovat pravidla vzniku nároku v předpisu.',
        },
        {
          id: 'c',
          text: 'Prémie nesmí být součástí mzdy.',
        },
        {
          id: 'd',
          text: 'Prémie se automaticky mění na cestovní náhradu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['variable-component-entitlement'],
      explanation: 'Pohyblivá složka může být po splnění podmínek nároková.',
      commonMistake: 'Považovat název prémie za důkaz nenárokovosti.',
    },
    {
      id: 'wage-components-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá součet mzdových složek před daní, pojistným a srážkami?',
      acceptedAnswers: ['hrubá mzda', 'hruba mzda'],
      ignoreDiacritics: true,
      skillIds: ['gross-remuneration-assembly'],
      explanation: 'Jde o hrubou mzdu.',
      commonMistake: 'Uvést čistá mzda.',
    },
    {
      id: 'wage-components-exercise-06',
      type: 'single_choice',
      prompt:
        'Může zaměstnavatel použít záporný bonus jako libovolnou pokutu za chybu?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, odečtení mzdy nebo sankce vyžaduje samostatný zákonný titul.',
        },
        {
          id: 'c',
          text: 'Ano bez dokumentu.',
        },
        {
          id: 'd',
          text: 'Ano jen u měsíční mzdy.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['wage-component-classification'],
      explanation: 'Nulový nárok a srážka již vzniklé mzdy jsou odlišné věci.',
      commonMistake: 'Skrýt peněžitý postih do záporné mzdové složky.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Obecná ustanovení o mzdě, platu a odměně z dohod',
      url: 'https://ppropo.mpsv.cz/XVIIIObecnaustanoveniomzdeplatua',
      kind: 'official',
    },
    {
      title: 'MPSV – Sjednání, stanovení nebo určení mzdy',
      url: 'https://ppropo.mpsv.cz/XIXOdmenovanizamestnancumzdou',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna a cílová odměna',
      url: 'https://ppropo.mpsv.cz/XX9Odmenaacilovaodmena',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
  ],
})
