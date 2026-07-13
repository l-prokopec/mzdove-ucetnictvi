import { defineLessonContent } from '../define'

export const dpcPurposeContent = defineLessonContent({
  moduleId: 'work-agreements',
  skillIds: [
    'dpc-document-review',
    'dpc-average-hours-limit',
    'dpc-payroll-setup',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Dohoda o pracovní činnosti, její písemná forma, průměrný rozsah práce, rozvrhování, dovolená a mzdové podklady ověřené podle českého zákoníku práce a pravidel účinných v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'DPČ pro práci menšího, ale pravidelnějšího rozsahu',
    },
    {
      type: 'paragraph',
      text: 'Dohoda o pracovní činnosti je základní pracovněprávní vztah určený pro práci, jejíž rozsah nepřekračuje v průměru polovinu stanovené týdenní pracovní doby. Oproti DPP není omezena pevným ročním počtem 300 hodin, ale průměrným týdenním rozsahem.',
    },
    {
      type: 'definition',
      term: 'Dohoda o pracovní činnosti',
      definition:
        'Písemný pracovněprávní vztah, v němž sjednaný rozsah práce nesmí v průměru překročit polovinu stanovené týdenní pracovní doby.',
    },
    {
      type: 'heading',
      text: 'Písemná forma',
    },
    {
      type: 'paragraph',
      text: 'DPČ musí být uzavřena písemně a jedno vyhotovení obdrží zaměstnanec. Mzdová účetní před založením ověří finální dokument, totožnost stran, sjednanou práci, rozsah, dobu trvání a odměnu.',
    },
    {
      type: 'heading',
      text: 'Obsah dohody',
    },
    {
      type: 'list',
      items: [
        'sjednaný druh práce',
        'sjednaný rozsah pracovní doby',
        'doba, na kterou se dohoda uzavírá',
        'výše odměny a podmínky jejího poskytování',
        'místo výkonu práce, pokud je obsaženo přímo v dohodě',
        'další ujednání potřebná pro konkrétní výkon práce',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pokud dohoda neobsahuje všechny zákonem požadované informace o pracovních podmínkách, zaměstnavatel je zaměstnanci poskytne samostatně v zákonné lhůtě. Mzdová účetní musí zachovat vazbu mezi dohodou a informačním dokumentem.',
    },
    {
      type: 'heading',
      text: 'Průměrný rozsah práce',
    },
    {
      type: 'paragraph',
      text: 'Na DPČ lze pracovat nejvýše v průměru polovinu stanovené týdenní pracovní doby. Při běžné stanovené týdenní pracovní době 40 hodin jde zpravidla o průměr nejvýše 20 hodin týdně.',
    },
    {
      type: 'paragraph',
      text: 'Dodržení průměru se posuzuje za celou dobu, na kterou byla dohoda uzavřena, nejdéle však za období 52 týdnů. V jednotlivém týdnu může být práce rozvržena nad nebo pod průměr, pokud je celkový průměr ve vyrovnávacím období dodržen a nejsou porušeny ostatní limity pracovní doby.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Limit DPČ není pevný zákaz odpracovat v kterémkoli týdnu více než 20 hodin. Rozhoduje průměr za správně určené období, nejdéle 52 týdnů.',
    },
    {
      type: 'example',
      title: 'Nerovnoměrný rozsah práce',
      situation:
        'DPČ je uzavřena na osm týdnů. Zaměstnanec pracuje první čtyři týdny 24 hodin týdně a další čtyři týdny 16 hodin týdně. Stanovená týdenní pracovní doba je 40 hodin.',
      solution:
        'Celkem odpracuje 160 hodin za osm týdnů, tedy průměrně 20 hodin týdně. Limit poloviny stanovené týdenní pracovní doby je dodržen, pokud jsou splněny i ostatní podmínky pracovní doby.',
    },
    {
      type: 'heading',
      text: 'Doba trvání',
    },
    {
      type: 'paragraph',
      text: 'DPČ může být uzavřena na dobu určitou i neurčitou. U dlouhodobé dohody se pro kontrolu průměrného rozsahu použije nejvýše 52týdenní období. Evidence musí umožnit průběžně zjistit, zda se průměr neblíží překročení.',
    },
    {
      type: 'heading',
      text: 'Odměna z DPČ',
    },
    {
      type: 'paragraph',
      text: 'Odměna a podmínky jejího poskytování se sjednávají v dohodě. Odměna musí respektovat minimální mzdu a obdobné použití pravidel pro příplatky za práci v noci, ve svátek, v sobotu a neděli nebo ve ztíženém prostředí.',
    },
    {
      type: 'example',
      title: 'Odměna podle hodin',
      situation:
        'DPČ stanoví hodinovou odměnu 210 Kč. Zaměstnanec podle evidence odpracoval 72 hodin v měsíci.',
      solution:
        'Základní hrubá odměna činí 72 × 210 Kč = 15 120 Kč. Před výplatou se samostatně posoudí příplatky, dovolená, daň a pojistné.',
    },
    {
      type: 'heading',
      text: 'Rozvrh pracovní doby',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí zaměstnanci na DPČ předem písemně rozvrhnout pracovní dobu a seznámit jej s rozvrhem nebo změnou nejpozději tři dny před začátkem směny nebo období, pokud se nedohodnou na jiné době.',
    },
    {
      type: 'paragraph',
      text: 'Délka směny nesmí běžně přesáhnout 12 hodin a platí pravidla přestávek, odpočinku, noční práce a evidence pracovní doby. Rozsah sjednaný v dohodě nenahrazuje konkrétní rozvrh směn.',
    },
    {
      type: 'heading',
      text: 'Samorozvrhování',
    },
    {
      type: 'paragraph',
      text: 'Také zaměstnanec na DPČ si může na základě písemné dohody rozvrhovat směny sám. Zaměstnavatel ale dál odpovídá za zákonné limity, evidenci a mzdové podklady.',
    },
    {
      type: 'heading',
      text: 'Dovolená u DPČ',
    },
    {
      type: 'paragraph',
      text: 'Právo na dovolenou může vzniknout také u DPČ. Základními podmínkami jsou nepřetržité trvání vztahu alespoň čtyři týdny a alespoň 80 hodin započitatelné doby pro účely dovolené v daném roce.',
    },
    {
      type: 'paragraph',
      text: 'Pro výpočet dovolené se stejně jako u DPP používá fiktivní týdenní pracovní doba 20 hodin. Tento údaj slouží pouze pro dovolenou a nesmí být zaměněn s limitem průměrného rozsahu DPČ.',
    },
    {
      type: 'heading',
      text: 'Překážky v práci',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec na DPČ má právo na pracovní volno při zákonem stanovených překážkách. Náhrada odměny u jiných důležitých osobních překážek a překážek z důvodu obecného zájmu ale nepřísluší automaticky, není-li dohodnuta nebo stanovena vnitřním předpisem.',
    },
    {
      type: 'heading',
      text: 'Více DPČ u stejného zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Každá DPČ musí být právně a evidenčně rozlišena. Pro pojistné a daňové posouzení se některé příjmy z více DPČ u stejného zaměstnavatele v jednom měsíci sčítají. Pracovní rozsah se kontroluje podle konkrétních dohod a skutečného uspořádání vztahů.',
    },
    {
      type: 'heading',
      text: 'DPČ a další pracovní vztah',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může mít u stejného zaměstnavatele DPČ a pracovní poměr nebo jinou dohodu, pokud jsou splněny zákonné podmínky. Obecně se nesmí bez zvláštní výjimky překrývat stejně druhově vymezená práce v souběžných základních pracovněprávních vztazích.',
    },
    {
      type: 'heading',
      text: 'Mzdové podklady',
    },
    {
      type: 'list',
      items: [
        'finální písemná DPČ',
        'sjednaná práce, rozsah a doba trvání',
        'odměna a podmínky jejího poskytování',
        'písemný rozvrh nebo dohoda o samorozvrhování',
        'evidence skutečně odpracovaných hodin',
        'průběžná kontrola průměrného rozsahu',
        'daňové a pojistné podklady',
        'dovolená, překážky a příplatky',
        'oddělení od dalších vztahů stejné osoby',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit písemnou a finální dohodu',
        'zkontrolovat sjednaný rozsah a dobu trvání',
        'určit období pro kontrolu průměru',
        'nastavit rozvrh a evidenci pracovní doby',
        'průběžně počítat průměrný týdenní rozsah',
        'vypočítat odměnu a příplatky',
        'vyhodnotit dovolenou, daň a pojistné',
        'porovnat DPČ s dalšími vztahy stejné osoby',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'použít u DPČ roční limit 300 hodin',
        'považovat 20 hodin za pevný limit každého týdne',
        'neurčit správné vyrovnávací období',
        'překročit průměr kvůli pozdní kontrole',
        'zaměnit fiktivních 20 hodin pro dovolenou za sjednaný rozsah',
        'neexistující písemný rozvrh',
        'sloučit více pracovních vztahů',
        'ignorovat příplatky a dovolenou',
      ],
    },
    {
      type: 'summary',
      items: [
        'DPČ je písemný pracovněprávní vztah pro práci v průměru do poloviny stanovené týdenní pracovní doby.',
        'Průměr se posuzuje za dobu trvání dohody, nejdéle za 52 týdnů.',
        'DPČ nemá roční limit 300 hodin.',
        'Zaměstnavatel musí rozvrhnout směny a vést evidenci skutečné práce.',
        'Také u DPČ vznikají práva na dovolenou, příplatky a další pracovněprávní ochranu.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'dpc-purpose-card-01',
      front: 'Jaký je základní rozsah práce na DPČ?',
      back: 'V průměru nejvýše polovina stanovené týdenní pracovní doby.',
      explanation:
        'Při běžných 40 hodinách jde zpravidla o průměr 20 hodin týdně.',
      skillIds: ['dpc-average-hours-limit'],
    },
    {
      id: 'dpc-purpose-card-02',
      front: 'Má DPČ limit 300 hodin ročně?',
      back: 'Ne.',
      explanation:
        'Tento limit patří DPP; DPČ se kontroluje průměrným týdenním rozsahem.',
      skillIds: ['dpc-average-hours-limit'],
    },
    {
      id: 'dpc-purpose-card-03',
      front: 'Jak dlouhé může být období pro kontrolu průměrného rozsahu DPČ?',
      back: 'Nejvýše 52 týdnů.',
      explanation: 'U kratší dohody se průměr posuzuje za její skutečnou dobu.',
      skillIds: ['dpc-average-hours-limit'],
    },
    {
      id: 'dpc-purpose-card-04',
      front: 'Může vzniknout dovolená i na DPČ?',
      back: 'Ano, při splnění zákonných podmínek.',
      explanation:
        'Pro výpočet se používá fiktivní týdenní pracovní doba 20 hodin.',
      skillIds: ['dpc-payroll-setup'],
    },
  ],
  exercises: [
    {
      id: 'dpc-purpose-exercise-01',
      type: 'single_choice',
      prompt:
        'Stanovená týdenní pracovní doba je 40 hodin. Jaký je základní maximální průměr na DPČ?',
      options: [
        {
          id: 'a',
          text: '10 hodin týdně.',
        },
        {
          id: 'b',
          text: '20 hodin týdně.',
        },
        {
          id: 'c',
          text: '30 hodin týdně.',
        },
        {
          id: 'd',
          text: '40 hodin týdně.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dpc-average-hours-limit'],
      explanation: 'Polovina ze 40 hodin je 20 hodin.',
      commonMistake: 'Použít roční limit DPP.',
    },
    {
      id: 'dpc-purpose-exercise-02',
      type: 'single_choice',
      prompt:
        'Může zaměstnanec v jednom týdnu odpracovat na DPČ 24 hodin, pokud dlouhodobý průměr zůstane 20 hodin?',
      options: [
        {
          id: 'a',
          text: 'Nikdy.',
        },
        {
          id: 'b',
          text: 'Ano, pokud je dodržen průměr a ostatní limity.',
        },
        {
          id: 'c',
          text: 'Ano, bez evidence.',
        },
        {
          id: 'd',
          text: 'Pouze na základě DPP.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dpc-average-hours-limit'],
      explanation:
        'Rozhoduje průměr za kontrolované období, nikoli izolovaně každý týden.',
      commonMistake: 'Považovat průměrný limit za pevný týdenní strop.',
    },
    {
      id: 'dpc-purpose-exercise-03',
      type: 'multiple_choice',
      prompt: 'Které údaje musí mzdová účetní sledovat u DPČ?',
      options: [
        {
          id: 'duration',
          text: 'Dobu trvání dohody.',
        },
        {
          id: 'dpp-limit',
          text: 'Samostatný roční limit 300 hodin jako hlavní limit DPČ.',
        },
        {
          id: 'hours',
          text: 'Skutečně odpracované hodiny.',
        },
        {
          id: 'average',
          text: 'Průměrný týdenní rozsah.',
        },
        {
          id: 'reward',
          text: 'Odměnu a příplatky.',
        },
      ],
      correctOptionIds: ['duration', 'hours', 'average', 'reward'],
      skillIds: [
        'dpc-document-review',
        'dpc-average-hours-limit',
        'dpc-payroll-setup',
      ],
      explanation:
        'DPČ vyžaduje průběžnou kontrolu rozsahu, odměny a doby trvání.',
      commonMistake: 'Přenést pravidlo 300 hodin z DPP.',
    },
    {
      id: 'dpc-purpose-exercise-04',
      type: 'single_choice',
      prompt: 'Který údaj je klíčový pro kontrolu rozsahu práce na DPČ?',
      options: [
        { id: 'a', text: 'Průměrný rozsah práce ve vyrovnávacím období.' },
        { id: 'b', text: 'Pouze nejdelší jednotlivá směna.' },
        { id: 'c', text: 'Počet vystavených výplatních pásek.' },
        { id: 'd', text: 'Soukromý rozvrh zaměstnance mimo vztah.' },
      ],
      correctOptionId: 'a',
      skillIds: ['dpc-document-review', 'dpc-payroll-setup'],
      explanation:
        'DPČ se kontroluje podle zákonného průměrného rozsahu v příslušném období.',
      commonMistake:
        'Posoudit DPČ jen podle jednoho týdne bez vyrovnávacího období.',
    },
    {
      id: 'dpc-purpose-exercise-05',
      type: 'short_text',
      prompt:
        'Kolik týdnů může nejvýše zahrnovat období pro kontrolu průměrného rozsahu DPČ?',
      acceptedAnswers: ['52 týdnů', '52', 'padesát dva týdnů'],
      ignoreDiacritics: true,
      skillIds: ['dpc-average-hours-limit'],
      explanation: 'Zákonným maximem je 52 týdnů.',
      commonMistake: 'Uvést kalendářní rok bez ohledu na délku dohody.',
    },
    {
      id: 'dpc-purpose-exercise-06',
      type: 'single_choice',
      prompt:
        'DPČ trvá čtyři týdny a zaměstnanec odpracoval celkem 80 hodin. Jaký je průměr?',
      options: [
        {
          id: 'a',
          text: '10 hodin týdně.',
        },
        {
          id: 'b',
          text: '20 hodin týdně.',
        },
        {
          id: 'c',
          text: '40 hodin týdně.',
        },
        {
          id: 'd',
          text: '80 hodin týdně.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dpc-average-hours-limit'],
      explanation: '80 hodin děleno čtyřmi týdny je 20 hodin týdně.',
      commonMistake: 'Použít celkový počet jako týdenní průměr.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohoda o pracovní činnosti',
      url: 'https://ppropo.mpsv.cz/VII1Dohodaopracovnicinnosti',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohody o pracích konaných mimo pracovní poměr',
      url: 'https://ppropo.mpsv.cz/VIIDohodyopracichkonanychmimopra',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
    {
      title: 'MPSV – Dovolená za kalendářní rok a její poměrná část',
      url: 'https://ppropo.mpsv.cz/X1Dovolenazakalendarnirokajejipo',
      kind: 'official',
    },
  ],
})
