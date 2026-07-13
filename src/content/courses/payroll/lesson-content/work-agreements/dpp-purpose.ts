import { defineLessonContent } from '../define'

export const dppPurposeContent = defineLessonContent({
  moduleId: 'work-agreements',
  skillIds: ['dpp-document-review', 'dpp-hours-limit', 'dpp-payroll-setup'],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Dohoda o provedení práce, její písemná forma, rozsah práce, rozvrhování, dovolená a mzdové podklady ověřené podle českého zákoníku práce a pravidel účinných v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'DPP je pracovněprávní vztah',
    },
    {
      type: 'paragraph',
      text: 'Dohoda o provedení práce je vedle pracovního poměru a dohody o pracovní činnosti základním pracovněprávním vztahem. Zaměstnanec na DPP vykonává závislou práci jménem zaměstnavatele, podle jeho pokynů a za odměnu. Nejde o fakturaci ani o běžnou obchodní smlouvu.',
    },
    {
      type: 'definition',
      term: 'Dohoda o provedení práce',
      definition:
        'Písemný pracovněprávní vztah určený pro práci v omezeném ročním rozsahu, který nesmí u jednoho zaměstnavatele překročit 300 hodin v kalendářním roce.',
    },
    {
      type: 'heading',
      text: 'Písemná forma',
    },
    {
      type: 'paragraph',
      text: 'DPP musí být uzavřena písemně a zaměstnavatel vydá zaměstnanci jedno vyhotovení. Mzdová účetní před založením vztahu ověří, že jde o finální dokument, správného zaměstnance a zaměstnavatele a že dokument obsahuje údaje potřebné pro pracovní a mzdové zpracování.',
    },
    {
      type: 'heading',
      text: 'Obsah dohody',
    },
    {
      type: 'list',
      items: [
        'sjednaná práce',
        'doba, na kterou se dohoda uzavírá',
        'výše odměny a podmínky jejího poskytování',
        'místo výkonu práce, pokud je uvedeno přímo v dohodě',
        'rozsah nebo předpokládaný rozsah práce',
        'další ujednání potřebná pro konkrétní výkon práce',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pokud některé zákonem požadované informace nejsou přímo v dohodě, zaměstnavatel je poskytne zaměstnanci samostatně v zákonné lhůtě. Informační dokument však nenahrazuje chybějící základní obsah samotné DPP.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Návrh dohody, neodsouhlasená objednávka nebo e-mail s počtem hodin nejsou dostatečným podkladem pro založení pracovněprávního vztahu.',
    },
    {
      type: 'heading',
      text: 'Roční limit 300 hodin',
    },
    {
      type: 'paragraph',
      text: 'Rozsah práce vykonávané na DPP nesmí u jednoho zaměstnavatele překročit 300 hodin v jednom kalendářním roce. Limit se sleduje za zaměstnavatele, nikoli za jednotlivý dokument nebo organizační útvar.',
    },
    {
      type: 'paragraph',
      text: 'Má-li zaměstnanec u stejného zaměstnavatele více DPP v témže roce, odpracované hodiny se pro tento limit sčítají. Uzavřením nové dohody nevzniká nový samostatný limit 300 hodin.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Do limitu se sleduje práce vykonaná na DPP. Doby, které zákon považuje za výkon práce jen pro jiné účely, se do ročního limitu nezapočítávají automaticky jako skutečně odpracované hodiny.',
    },
    {
      type: 'example',
      title: 'Dvě DPP u stejného zaměstnavatele',
      situation:
        'Zaměstnanec odpracoval od ledna do června 180 hodin na jedné DPP. Od července má uzavřít druhou DPP u stejného zaměstnavatele.',
      solution:
        'Pro zbytek kalendářního roku zbývá nejvýše 120 hodin práce na DPP u tohoto zaměstnavatele. Druhá dohoda nevytváří nový třísethodinový limit.',
    },
    {
      type: 'heading',
      text: 'Kalendářní rok a doba trvání dohody',
    },
    {
      type: 'paragraph',
      text: 'DPP může být uzavřena na dobu určitou i neurčitou. Roční limit se však vždy sleduje samostatně za každý kalendářní rok. Dohoda trvající přes přelom roku proto může pokračovat, ale evidence musí oddělit hodiny jednotlivých let.',
    },
    {
      type: 'heading',
      text: 'Odměna z dohody',
    },
    {
      type: 'paragraph',
      text: 'Výše odměny a podmínky jejího poskytování se sjednávají v dohodě. Odměna může být určena hodinovou sazbou, částkou za výsledek nebo jiným jednoznačným způsobem. Musí respektovat minimální mzdu a pravidla pro příplatky, která se na odměnu z dohody použijí obdobně.',
    },
    {
      type: 'example',
      title: 'Odměna podle hodinové sazby',
      situation:
        'DPP stanoví odměnu 230 Kč za hodinu. Zaměstnanec v měsíci podle schválené evidence odpracoval 36 hodin.',
      solution:
        'Základní hrubá odměna činí 36 × 230 Kč = 8 280 Kč. Před výplatou se samostatně zkontrolují případné příplatky, dovolená, daňové podklady a pojistný režim.',
    },
    {
      type: 'heading',
      text: 'Rozvrh pracovní doby',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí pracovní dobu zaměstnance na DPP předem písemně rozvrhnout a seznámit jej s rozvrhem nebo jeho změnou nejpozději tři dny před začátkem směny nebo rozvrhovaného období, pokud se strany nedohodnou na jiné době seznámení.',
    },
    {
      type: 'paragraph',
      text: 'Délka směny nesmí běžně přesáhnout 12 hodin. Na zaměstnance se vztahují pravidla přestávek, denního a týdenního odpočinku, noční práce a evidence pracovní doby v rozsahu stanoveném zákonem.',
    },
    {
      type: 'heading',
      text: 'Samorozvrhování',
    },
    {
      type: 'paragraph',
      text: 'Na základě samostatné písemné dohody si může zaměstnanec rozvrhovat pracovní dobu do směn sám. Ani v takovém režimu nezaniká povinnost zaměstnavatele kontrolovat zákonné limity, evidenci a skutečně odpracovanou dobu.',
    },
    {
      type: 'heading',
      text: 'Dovolená u DPP',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci na DPP může vzniknout právo na dovolenou. Základními podmínkami jsou nepřetržité trvání vztahu alespoň čtyři týdny a odpracování alespoň 80 hodin pro účely dovolené v daném kalendářním roce.',
    },
    {
      type: 'paragraph',
      text: 'Pro výpočet dovolené se u DPP používá zákonná fiktivní týdenní pracovní doba 20 hodin bez ohledu na skutečně sjednaný rozsah. Nárok se tedy neposuzuje pouze podle ročního limitu 300 hodin.',
    },
    {
      type: 'heading',
      text: 'Překážky v práci',
    },
    {
      type: 'paragraph',
      text: 'Na zaměstnance pracujícího na DPP se vztahují pravidla omluvené nepřítomnosti a vybraných překážek. Náhrada odměny u jiných důležitých osobních překážek a překážek z důvodu obecného zájmu však nepřísluší automaticky, není-li sjednána nebo stanovena vnitřním předpisem.',
    },
    {
      type: 'heading',
      text: 'DPP a rodičovská dovolená',
    },
    {
      type: 'paragraph',
      text: 'Od června 2025 může zaměstnanec čerpající rodičovskou dovolenou u stejného zaměstnavatele vykonávat na DPP také stejně druhově vymezenou práci. Jde o zvláštní zákonnou výjimku; oba vztahy musí zůstat samostatně dokumentované a evidované.',
    },
    {
      type: 'heading',
      text: 'Mzdové podklady',
    },
    {
      type: 'list',
      items: [
        'finální DPP',
        'identifikační a registrační údaje zaměstnance',
        'sjednaná práce a doba trvání',
        'odměna a podmínky jejího poskytování',
        'písemný rozvrh nebo dohoda o samorozvrhování',
        'evidence skutečně odpracovaných hodin',
        'součet hodin všech DPP u zaměstnavatele za kalendářní rok',
        'daňové prohlášení a pojistné údaje',
        'podklady k dovolené, překážkám a příplatkům',
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
        'zkontrolovat sjednanou práci, dobu a odměnu',
        'zjistit všechny další DPP stejného zaměstnance u téhož zaměstnavatele',
        'zkontrolovat zbývající roční hodinový limit',
        'nastavit rozvrh a evidenci pracovní doby',
        'sledovat dovolenou a další pracovněprávní nároky',
        'před každou mzdou vyhodnotit příjem, daň a pojištění',
        'zachovat oddělenou evidenci každé dohody',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat DPP za vztah mimo zákoník práce',
        'počítat 300 hodin pro každou dohodu zvlášť',
        'nesčítat více DPP u stejného zaměstnavatele',
        'neexistující nebo pozdě vytvořený rozvrh směn',
        'přehlédnout nárok na dovolenou',
        'zaměnit limit 300 hodin za pojistnou hranici',
        'vypočítat odměnu bez schválené evidence práce',
        'sloučit DPP s jiným pracovním vztahem stejné osoby',
      ],
    },
    {
      type: 'summary',
      items: [
        'DPP je písemný pracovněprávní vztah, nikoli obchodní fakturace.',
        'U jednoho zaměstnavatele lze na všechny DPP dohromady odpracovat nejvýše 300 hodin za kalendářní rok.',
        'Odměna musí vycházet z dohody, evidence práce a pracovněprávních pravidel.',
        'Zaměstnavatel musí předem rozvrhnout pracovní dobu, pokud není sjednáno samorozvrhování.',
        'Také u DPP může vzniknout dovolená a další zaměstnanecká práva.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'dpp-purpose-card-01',
      front:
        'Jaký je maximální rozsah práce na DPP u jednoho zaměstnavatele za kalendářní rok?',
      back: '300 hodin.',
      explanation:
        'Hodiny ze všech DPP stejného zaměstnance u téhož zaměstnavatele se sčítají.',
      skillIds: ['dpp-hours-limit'],
    },
    {
      id: 'dpp-purpose-card-02',
      front: 'Musí být DPP písemná?',
      back: 'Ano a zaměstnanec musí obdržet jedno vyhotovení.',
      explanation: 'Neformální zadání práce nenahrazuje uzavřenou dohodu.',
      skillIds: ['dpp-document-review'],
    },
    {
      id: 'dpp-purpose-card-03',
      front: 'Vzniká na DPP právo na dovolenou?',
      back: 'Ano, při splnění zákonných podmínek trvání vztahu a odpracované doby.',
      explanation:
        'Pro účely dovolené se používá fiktivní týdenní pracovní doba 20 hodin.',
      skillIds: ['dpp-payroll-setup'],
    },
    {
      id: 'dpp-purpose-card-04',
      front:
        'Vytvoří druhá DPP u stejného zaměstnavatele nový limit 300 hodin?',
      back: 'Ne.',
      explanation:
        'Roční limit se sleduje za všechny DPP u téhož zaměstnavatele dohromady.',
      skillIds: ['dpp-hours-limit'],
    },
  ],
  exercises: [
    {
      id: 'dpp-purpose-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec už letos u stejného zaměstnavatele odpracoval na DPP 220 hodin. Kolik hodin mu nejvýše zbývá?',
      options: [
        {
          id: 'a',
          text: '80 hodin.',
        },
        {
          id: 'b',
          text: '220 hodin.',
        },
        {
          id: 'c',
          text: '300 hodin.',
        },
        {
          id: 'd',
          text: 'Bez omezení.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['dpp-hours-limit'],
      explanation:
        'Roční limit 300 hodin se snižuje o již odpracovaných 220 hodin.',
      commonMistake: 'Začít při nové dohodě počítat limit znovu.',
    },
    {
      id: 'dpp-purpose-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které podklady jsou potřebné pro mzdové založení DPP?',
      options: [
        {
          id: 'agreement',
          text: 'Finální písemná dohoda.',
        },
        {
          id: 'invoice',
          text: 'Faktura zaměstnance jako jediný podklad.',
        },
        {
          id: 'reward',
          text: 'Ujednání o odměně.',
        },
        {
          id: 'schedule',
          text: 'Rozvrh pracovní doby nebo dohoda o samorozvrhování.',
        },
        {
          id: 'hours',
          text: 'Evidence skutečně odpracovaných hodin.',
        },
      ],
      correctOptionIds: ['agreement', 'reward', 'schedule', 'hours'],
      skillIds: ['dpp-document-review', 'dpp-payroll-setup'],
      explanation:
        'DPP je zaměstnanecký vztah a vyžaduje pracovněprávní a mzdové podklady.',
      commonMistake: 'Zpracovat DPP jako dodavatelskou fakturu.',
    },
    {
      id: 'dpp-purpose-exercise-03',
      type: 'single_choice',
      prompt: 'Kterou kontrolu je nutné u DPP průběžně provádět?',
      options: [
        {
          id: 'a',
          text: 'Sledovat zákonný rozsah práce u daného zaměstnavatele.',
        },
        { id: 'b', text: 'Považovat každý měsíc za nový vztah bez kumulace.' },
        { id: 'c', text: 'Neevidovat odpracovaný čas.' },
        {
          id: 'd',
          text: 'Automaticky převést DPP na pracovní poměr po první směně.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['dpp-document-review', 'dpp-payroll-setup'],
      explanation:
        'DPP vyžaduje průběžnou evidenci skutečně odpracovaného rozsahu.',
      commonMistake: 'Sledovat pouze vyplacenou odměnu a ignorovat dobu práce.',
    },
    {
      id: 'dpp-purpose-exercise-04',
      type: 'single_choice',
      prompt:
        'Dvě DPP u stejného zaměstnavatele obsahují každá limit 300 hodin. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Zaměstnanec může odpracovat 600 hodin.',
        },
        {
          id: 'b',
          text: 'Celkem může odpracovat nejvýše 300 hodin za rok.',
        },
        {
          id: 'c',
          text: 'Limit se nepoužije.',
        },
        {
          id: 'd',
          text: 'Rozhoduje pouze vyšší odměna.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dpp-hours-limit'],
      explanation:
        'Zákonný limit se sčítá přes všechny DPP u téhož zaměstnavatele.',
      commonMistake: 'Považovat každý dokument za samostatný limit.',
    },
    {
      id: 'dpp-purpose-exercise-05',
      type: 'short_text',
      prompt:
        'Kolik hodin činí fiktivní týdenní pracovní doba u DPP pro účely dovolené?',
      acceptedAnswers: ['20 hodin', '20', 'dvacet hodin'],
      ignoreDiacritics: true,
      skillIds: ['dpp-payroll-setup'],
      explanation: 'Pro dovolenou se u dohod používá 20 hodin týdně.',
      commonMistake: 'Použít skutečně sjednaný počet hodin týdně.',
    },
    {
      id: 'dpp-purpose-exercise-06',
      type: 'single_choice',
      prompt: 'Je neformální e-mail vedoucího dostatečný k založení DPP?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne, je nutná finální písemná dohoda.',
        },
        {
          id: 'c',
          text: 'Ano, pokud obsahuje částku.',
        },
        {
          id: 'd',
          text: 'Ano, pokud práce trvá jeden den.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dpp-document-review'],
      explanation: 'Pracovněprávní vztah musí být založen písemnou dohodou.',
      commonMistake: 'Zaměnit provozní pokyn za pracovněprávní dokument.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohoda o provedení práce',
      url: 'https://ppropo.mpsv.cz/VII2Dohodaoprovedeniprace',
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
