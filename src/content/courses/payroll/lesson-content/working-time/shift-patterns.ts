import { defineLessonContent } from '../define'

export const shiftPatternsContent = defineLessonContent({
  moduleId: 'working-time',
  skillIds: [
    'shift-regime-classification',
    'schedule-reading',
    'schedule-change-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Jednosměnný, dvousměnný, vícesměnný a nepřetržitý režim, rovnoměrné a nerovnoměrné rozvržení a změny rozvrhu ověřené podle českého zákoníku práce pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Počet směn v provozu ovlivňuje zákonný týdenní rozsah',
    },
    {
      type: 'paragraph',
      text: 'Směnný režim popisuje, jak se zaměstnanci pravidelně střídají ve směnách během provozu. Správná klasifikace je důležitá pro určení stanovené týdenní pracovní doby, tvorbu rozvrhu a kontrolu docházky.',
    },
    {
      type: 'heading',
      text: 'Jednosměnný režim',
    },
    {
      type: 'definition',
      term: 'Jednosměnný pracovní režim',
      definition:
        'Provozní uspořádání, ve kterém se zaměstnanci pravidelně nestřídají ve dvou nebo více navazujících směnách podle zákonných definic směnných režimů.',
    },
    {
      type: 'paragraph',
      text: 'Jednosměnný režim bývá typický pro běžnou denní práci. Stanovená týdenní pracovní doba zde zpravidla činí 40 hodin, pokud se neuplatní jiné zákonné nebo kolektivní zkrácení.',
    },
    {
      type: 'example',
      title: 'Běžná kancelářská směna',
      situation:
        'Všichni zaměstnanci pracují pondělí až pátek od 8:00 do 16:30 s třicetiminutovou nezapočitatelnou přestávkou.',
      solution:
        'Jde o jednosměnný režim. Každá směna obsahuje 8 hodin pracovní doby a týdenní rozsah činí 40 hodin.',
    },
    {
      type: 'heading',
      text: 'Dvousměnný režim',
    },
    {
      type: 'definition',
      term: 'Dvousměnný pracovní režim',
      definition:
        'Režim, v němž se zaměstnanci vzájemně pravidelně střídají ve dvou směnách v rámci 24 hodin po sobě jdoucích.',
    },
    {
      type: 'paragraph',
      text: 'Krátký souběh navazujících směn nejvýše jednu hodinu nebrání klasifikaci jako dvousměnný režim. Rozhodující je pravidelné střídání zaměstnanců, nikoli pouze to, že provozovna má dlouhou otevírací dobu.',
    },
    {
      type: 'paragraph',
      text: 'Stanovená týdenní pracovní doba v dvousměnném režimu činí 38,75 hodiny.',
    },
    {
      type: 'example',
      title: 'Ranní a odpolední směna',
      situation:
        'Skupina A pracuje jeden týden 6:00–14:00 a další týden 14:00–22:00. Skupina B se střídá opačně.',
      solution:
        'Zaměstnanci se pravidelně střídají ve dvou směnách v rámci 24 hodin, takže jde o dvousměnný režim. Pro plný týdenní rozsah se použije 38,75 hodiny.',
    },
    {
      type: 'heading',
      text: 'Vícesměnný režim',
    },
    {
      type: 'definition',
      term: 'Vícesměnný pracovní režim',
      definition:
        'Režim, v němž se zaměstnanci vzájemně pravidelně střídají ve třech nebo více směnách v rámci 24 hodin po sobě jdoucích.',
    },
    {
      type: 'paragraph',
      text: 'Také zde může dojít k nejvýše hodinovému souběhu navazujících směn. Stanovená týdenní pracovní doba činí 37,5 hodiny.',
    },
    {
      type: 'example',
      title: 'Tři osmihodinové směny',
      situation:
        'Provoz používá ranní směnu 6:00–14:00, odpolední 14:00–22:00 a noční 22:00–6:00. Zaměstnanci mezi nimi pravidelně rotují.',
      solution:
        'Jde o vícesměnný pracovní režim. Plný zákonný týdenní rozsah činí 37,5 hodiny. Jednotlivé konkrétní směny a jejich přestávky se stále posuzují podle rozvrhu.',
    },
    {
      type: 'heading',
      text: 'Nepřetržitý provoz a nepřetržitý pracovní režim',
    },
    {
      type: 'definition',
      term: 'Nepřetržitý provoz',
      definition:
        'Provoz, který vyžaduje výkon práce 24 hodin denně po sedm dnů v týdnu.',
    },
    {
      type: 'definition',
      term: 'Nepřetržitý pracovní režim',
      definition:
        'Režim, v němž se zaměstnanci pravidelně střídají ve směnách v nepřetržitém provozu během 24 hodin po sobě jdoucích.',
    },
    {
      type: 'paragraph',
      text: 'Nepřetržitý provoz popisuje potřebu provozu zaměstnavatele. Nepřetržitý pracovní režim popisuje střídání konkrétních zaměstnanců v tomto provozu. Stanovená týdenní pracovní doba zaměstnance v nepřetržitém režimu činí 37,5 hodiny.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Provoz otevřený sedm dní v týdnu nemusí být nepřetržitý, pokud nevyžaduje práci 24 hodin denně. Stejně tak zaměstnanec pracující občas v noci nemusí být zaměstnancem v nepřetržitém režimu.',
    },
    {
      type: 'example',
      title: 'Prodejna otevřená každý den',
      situation:
        'Prodejna je otevřena každý den od 7:00 do 22:00, ale v noci je uzavřena. Zaměstnanci se střídají v ranní a odpolední směně.',
      solution:
        'Nejde o nepřetržitý provoz, protože provoz nevyžaduje práci 24 hodin denně. Při pravidelném střídání ve dvou směnách může jít o dvousměnný režim.',
    },
    {
      type: 'heading',
      text: 'Režim se určuje podle skutečného střídání',
    },
    {
      type: 'paragraph',
      text: 'Interní označení „třísměnný provoz“ samo nestačí. Je nutné ověřit, zda se zaměstnanci skutečně pravidelně střídají ve třech nebo více směnách v rámci 24 hodin.',
    },
    {
      type: 'heading',
      text: 'Směnný režim a rozvržení jsou dvě osy',
    },
    {
      type: 'list',
      items: [
        'jednosměnný nebo směnný režim – organizace střídání zaměstnanců',
        'rovnoměrné rozvržení – stejný týdenní rozsah v jednotlivých týdnech',
        'nerovnoměrné rozvržení – různé týdenní rozsahy vyrovnané v období',
        'pružná pracovní doba – základní a volitelné úseky',
        'konto pracovní doby – zvláštní způsob nerovnoměrného rozvržení',
        'samorozvrhování – písemně dohodnuté rozvrhování směn zaměstnancem',
      ],
    },
    {
      type: 'example',
      title: 'Nepřetržitý režim s nerovnoměrným rozvrhem',
      situation:
        'Zaměstnanec v nepřetržitém provozu pracuje podle cyklu krátkého a dlouhého týdne ve dvanáctihodinových časových úsecích.',
      solution:
        'Pracovní režim je nepřetržitý a způsob rozvržení je nerovnoměrný. Průměrná pracovní doba se musí ve vyrovnávacím období vyrovnat na příslušný týdenní rozsah 37,5 hodiny.',
    },
    {
      type: 'heading',
      text: 'Rovnoměrný rozvrh',
    },
    {
      type: 'paragraph',
      text: 'Při rovnoměrném rozvrhu se na každý týden rozvrhuje stejný týdenní rozsah. Nemusí však být každý den stejně dlouhý, pokud součet v každém týdnu odpovídá příslušné týdenní pracovní době a jsou dodrženy ostatní limity.',
    },
    {
      type: 'heading',
      text: 'Nerovnoměrný rozvrh',
    },
    {
      type: 'paragraph',
      text: 'Při nerovnoměrném rozvrhu mohou být některé týdny delší a jiné kratší. Průměr za vyrovnávací období nesmí přesáhnout příslušnou stanovenou, zkrácenou stanovenou nebo kratší pracovní dobu.',
    },
    {
      type: 'example',
      title: 'Čtyřtýdenní model',
      situation:
        'Zaměstnanec se sjednanou kratší pracovní dobou 30 hodin má v jednotlivých týdnech rozvrženo 36, 36, 24 a 24 hodin.',
      solution:
        'Celkem jde o 120 hodin za čtyři týdny, tedy průměr 30 hodin týdně. Nerovnoměrný rozvrh odpovídá sjednanému rozsahu, pokud je vyrovnávací období platně určeno.',
    },
    {
      type: 'heading',
      text: 'Písemný rozvrh a seznámení zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel vypracuje písemný rozvrh týdenní pracovní doby a seznámí s ním nebo s jeho změnou zaměstnance nejpozději dva týdny před začátkem období, na které je pracovní doba rozvržena. U konta pracovní doby činí výchozí lhůta jeden týden. Strany se mohou dohodnout na jiné době seznámení.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Rozvrh nelze měnit zpětně tak, aby pouze dodatečně odpovídal již vykázané docházce. Zpětná změna by odstranila základ pro posouzení překážek, přesčasu a neomluvené absence.',
    },
    {
      type: 'heading',
      text: 'Změna rozvrhu',
    },
    {
      type: 'list',
      items: [
        'musí existovat nová nebo změněná písemná verze',
        'zaměstnanec musí být včas seznámen',
        'musí být zřejmé datum účinnosti',
        'původní rozvrh musí zůstat dohledatelný',
        'změna nesmí porušit směnu, přestávky a odpočinek',
        'návazné docházkové a mzdové systémy musí používat stejnou verzi',
      ],
    },
    {
      type: 'example',
      title: 'Pozdní změna směny',
      situation:
        'Zaměstnavatel chce v pátek přesunout pondělní směnu z 6:00 na 14:00, ale se zaměstnancem nemá dohodnutou kratší dobu seznámení.',
      solution:
        'Výchozí dvoutýdenní lhůta není splněna. Mzdová účetní nemá zpětně přepsat rozvrh a musí požadovat pracovněprávní řešení a doložení výsledku.',
    },
    {
      type: 'heading',
      text: 'Samorozvrhování od roku 2025',
    },
    {
      type: 'paragraph',
      text: 'Na základě písemné dohody si může zaměstnanec pracovní dobu do směn rozvrhovat sám. Dohoda musí určit pravidla a zaměstnavatel stále odpovídá za zákonné limity a evidenci.',
    },
    {
      type: 'heading',
      text: 'Modelový rozvrh pro čtení',
    },
    {
      type: 'example',
      title: 'Týden ranních a odpoledních směn',
      situation:
        'Pondělí 6:00–14:00, úterý 6:00–14:00, středa volno, čtvrtek 14:00–22:00, pátek 14:00–22:00. Každá směna obsahuje třicetiminutovou nezapočitatelnou přestávku.',
      solution:
        'Každá směna obsahuje 7,5 hodiny pracovní doby. Týdenní fond podle tohoto rozvrhu činí 4 × 7,5 = 30 hodin. Čtvrteční a páteční směna obsahují noční práci od 22:00 pouze tehdy, pokud práce skutečně pokračuje po 22:00; v tomto rozvrhu končí přesně ve 22:00, takže noční práce nevzniká.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit provozní potřebu a skutečné střídání',
        'určit jednosměnný, dvousměnný, vícesměnný nebo nepřetržitý režim',
        'přiřadit správnou stanovenou týdenní pracovní dobu',
        'určit rovnoměrný, nerovnoměrný nebo jiný způsob rozvržení',
        'ověřit vyrovnávací období',
        'zkontrolovat písemný rozvrh a včasné seznámení',
        'zkontrolovat délku směn, přestávky a odpočinek',
        'porovnat rozvrh s docházkou',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat dlouhou otevírací dobu za nepřetržitý provoz',
        'určit směnný režim jen podle názvu v systému',
        'zaměnit dvousměnný režim za nerovnoměrný rozvrh',
        'použít nesprávnou týdenní pracovní dobu',
        'přepsat rozvrh zpětně podle docházky',
        'neuchovat předchozí verzi rozvrhu',
        'považovat konec směny ve 22:00 automaticky za noční práci',
      ],
    },
    {
      type: 'summary',
      items: [
        'Dvousměnný režim znamená pravidelné střídání ve dvou směnách, vícesměnný ve třech nebo více.',
        'Nepřetržitý provoz vyžaduje práci 24 hodin denně sedm dní v týdnu.',
        'Směnný režim určuje zákonný týdenní rozsah, ale neříká sám o sobě, zda je rozvrh rovnoměrný.',
        'Rozvrh musí být písemný a zaměstnanec s ním musí být včas seznámen.',
        'Každá změna rozvrhu musí být účinná do budoucna a dohledatelná.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'shift-patterns-card-01',
      front: 'Co je dvousměnný pracovní režim?',
      back: 'Pravidelné střídání zaměstnanců ve dvou směnách v rámci 24 hodin.',
      explanation: 'Stanovená týdenní pracovní doba zde činí 38,75 hodiny.',
      skillIds: ['shift-regime-classification'],
    },
    {
      id: 'shift-patterns-card-02',
      front: 'Co je nepřetržitý provoz?',
      back: 'Provoz vyžadující práci 24 hodin denně sedm dní v týdnu.',
      explanation: 'Dlouhá otevírací doba bez nočního provozu nestačí.',
      skillIds: ['shift-regime-classification'],
    },
    {
      id: 'shift-patterns-card-03',
      front:
        'Jaký je výchozí předstih seznámení s rozvrhem v pracovním poměru?',
      back: 'Dva týdny, pokud se strany nedohodnou jinak.',
      explanation: 'U konta pracovní doby je výchozí lhůta jeden týden.',
      skillIds: ['schedule-change-control'],
    },
    {
      id: 'shift-patterns-card-04',
      front: 'Je nerovnoměrné rozvržení totéž co vícesměnný režim?',
      back: 'Ne.',
      explanation:
        'Jedno popisuje rozložení hodin mezi týdny, druhé střídání zaměstnanců ve směnách.',
      skillIds: ['schedule-reading'],
    },
  ],
  exercises: [
    {
      id: 'shift-patterns-exercise-01',
      type: 'single_choice',
      prompt:
        'Provoz funguje každý den od 7:00 do 22:00 ve dvou pravidelně se střídajících směnách. Jaký režim je nejpravděpodobnější?',
      options: [
        {
          id: 'a',
          text: 'Nepřetržitý.',
        },
        {
          id: 'b',
          text: 'Dvousměnný.',
        },
        {
          id: 'c',
          text: 'Vícesměnný.',
        },
        {
          id: 'd',
          text: 'Bez směnného režimu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['shift-regime-classification'],
      explanation:
        'Provoz není 24hodinový, ale zaměstnanci se střídají ve dvou směnách.',
      commonMistake: 'Považovat každý sedmidenní provoz za nepřetržitý.',
    },
    {
      id: 'shift-patterns-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které údaje jsou nutné pro kontrolu změny rozvrhu?',
      options: [
        {
          id: 'written',
          text: 'Písemná verze změny.',
        },
        {
          id: 'retroactive',
          text: 'Zpětné přepsání bez záznamu.',
        },
        {
          id: 'effective',
          text: 'Datum účinnosti.',
        },
        {
          id: 'notice',
          text: 'Včasné seznámení zaměstnance.',
        },
        {
          id: 'history',
          text: 'Zachování původního rozvrhu.',
        },
      ],
      correctOptionIds: ['written', 'effective', 'notice', 'history'],
      skillIds: ['schedule-change-control'],
      explanation: 'Rozvrh musí být účinný, známý a auditovatelný.',
      commonMistake: 'Upravit plán až po vykázání docházky.',
    },
    {
      id: 'shift-patterns-exercise-03',
      type: 'multiple_choice',
      prompt: 'Která tvrzení platí pro nerovnoměrné rozvržení pracovní doby?',
      options: [
        { id: 'a', text: 'Každý týden musí mít přesně stejný počet hodin.' },
        {
          id: 'b',
          text: 'Délka týdnů se může lišit podle předem stanoveného rozvrhu.',
        },
        {
          id: 'c',
          text: 'Průměr musí v zákonném vyrovnávacím období odpovídat příslušné týdenní pracovní době.',
        },
        { id: 'd', text: 'Dlouhý týden je vždy celý přesčas.' },
        {
          id: 'e',
          text: 'Rozvrh lze zpětně přepsat podle docházky bez auditní stopy.',
        },
      ],
      correctOptionIds: ['b', 'c'],
      skillIds: ['shift-regime-classification', 'schedule-reading'],
      explanation:
        'Nerovnoměrnost se vyrovnává v období a sama nevytváří přesčas.',
      commonMistake: 'Považovat každý týden nad průměrem za přesčas.',
    },
    {
      id: 'shift-patterns-exercise-04',
      type: 'single_choice',
      prompt:
        'Ve čtyřech týdnech je rozvrženo 36, 36, 24 a 24 hodin při úvazku 30 hodin. Jaký je průměr?',
      options: [
        {
          id: 'a',
          text: '24 hodin.',
        },
        {
          id: 'b',
          text: '30 hodin.',
        },
        {
          id: 'c',
          text: '36 hodin.',
        },
        {
          id: 'd',
          text: '120 hodin týdně.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['schedule-reading'],
      explanation: 'Celkem 120 hodin děleno čtyřmi týdny je 30 hodin týdně.',
      commonMistake: 'Použít nejdelší týden jako průměr.',
    },
    {
      id: 'shift-patterns-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá provoz vyžadující práci 24 hodin denně sedm dní v týdnu?',
      acceptedAnswers: ['nepřetržitý provoz', 'nepretrzity provoz'],
      ignoreDiacritics: true,
      skillIds: ['shift-regime-classification'],
      explanation: 'Jde o nepřetržitý provoz.',
      commonMistake: 'Uvést vícesměnný provoz bez podmínky 24/7.',
    },
    {
      id: 'shift-patterns-exercise-06',
      type: 'single_choice',
      prompt:
        'Může zaměstnavatel zpětně změnit rozvrh jen proto, aby odpovídal docházce?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, rozvrh musí být stanoven a oznámen předem.',
        },
        {
          id: 'c',
          text: 'Ano bez uchování historie.',
        },
        {
          id: 'd',
          text: 'Ano pouze po výplatě.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['schedule-change-control'],
      explanation:
        'Zpětná změna by odstranila právní základ pro posouzení rozdílů.',
      commonMistake:
        'Považovat rozvrh za administrativní výstup vytvořený až po směně.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Vymezení pojmů pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII1Vymezenipojmu',
      kind: 'official',
    },
    {
      title: 'MPSV – Délka pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII2Delkapracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII3Rozvrzenipracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Nerovnoměrné rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII32Nerovnomernerozvrzenipraco',
      kind: 'official',
    },
    {
      title: 'MPSV – Rozvržení pracovní doby zaměstnancem',
      url: 'https://ppropo.mpsv.cz/viii35rozvrzenipracovnidobyzames',
      kind: 'official',
    },
  ],
})
