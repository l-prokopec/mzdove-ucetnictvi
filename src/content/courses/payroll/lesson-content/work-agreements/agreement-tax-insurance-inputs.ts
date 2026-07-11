import { defineLessonContent } from '../define'

export const agreementTaxInsuranceInputsContent = defineLessonContent({
  moduleId: 'work-agreements',
  skillIds: [
    'agreement-tax-regime',
    'agreement-insurance-thresholds',
    'agreement-income-aggregation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Daňové a pojistné vstupy DPP a DPČ pro rok 2026, včetně rozhodných částek, souběhů, Prohlášení poplatníka a zdravotního pojištění.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nejdříve vztah a příjem, potom odvody',
    },
    {
      type: 'paragraph',
      text: 'Daňové a pojistné posouzení DPP a DPČ se neprovádí pouze podle názvu dohody. Mzdová účetní musí znát druh vztahu, měsíční zúčtovaný příjem, všechny dohody stejného druhu u téhož zaměstnavatele, stav Prohlášení poplatníka a údaje významné pro zdravotní pojištění.',
    },
    {
      type: 'definition',
      term: 'Rozhodný příjem',
      definition:
        'Měsíční výše započitatelného příjmu, při jejímž dosažení vzniká podle typu dohody účast na nemocenském, důchodovém a navazujícím zdravotním pojištění.',
    },
    {
      type: 'heading',
      text: 'Rozhodná částka DPP v roce 2026',
    },
    {
      type: 'paragraph',
      text: 'U DPP činí v roce 2026 rozhodný příjem pro účast na nemocenském a důchodovém pojištění 12 000 Kč za kalendářní měsíc u jednoho zaměstnavatele. Při dosažení částky 12 000 Kč nebo vyšší vzniká pojistná účast podle zákonných podmínek.',
    },
    {
      type: 'paragraph',
      text: 'Příjmy z více DPP stejného zaměstnance u jednoho zaměstnavatele se v daném měsíci sčítají. DPP u různých zaměstnavatelů se pro tuto hranici vzájemně nesčítají.',
    },
    {
      type: 'example',
      title: 'Dvě DPP u jednoho zaměstnavatele',
      situation:
        'Zaměstnanec má v jednom měsíci odměnu 7 000 Kč z první DPP a 5 500 Kč z druhé DPP u stejného zaměstnavatele.',
      solution:
        'Příjmy se sečtou na 12 500 Kč. Rozhodná částka 12 000 Kč je dosažena a mzdová účetní vztah posoudí jako pojištěný podle pravidel pro DPP.',
    },
    {
      type: 'heading',
      text: 'Rozhodná částka DPČ v roce 2026',
    },
    {
      type: 'paragraph',
      text: 'U DPČ a dalších zaměstnání posuzovaných podle obecné rozhodné částky činí v roce 2026 rozhodný příjem 4 500 Kč za kalendářní měsíc. U zaměstnání malého rozsahu vzniká pojistná účast v měsíci, ve kterém započitatelný příjem dosáhne alespoň této částky.',
    },
    {
      type: 'paragraph',
      text: 'Příjmy z více DPČ u téhož zaměstnavatele se pro příslušné pojistné posouzení v měsíci sčítají.',
    },
    {
      type: 'example',
      title: 'Dvě malé DPČ',
      situation:
        'Zaměstnanec má dvě DPČ u stejného zaměstnavatele. Z jedné je mu zúčtováno 2 600 Kč a z druhé 2 200 Kč.',
      solution:
        'Příjmy z DPČ se sečtou na 4 800 Kč. Rozhodná částka 4 500 Kč je dosažena.',
    },
    {
      type: 'heading',
      text: 'DPP a DPČ se vzájemně nesčítají',
    },
    {
      type: 'paragraph',
      text: 'Pro zdravotní pojištění a příslušné pojistné hranice se příjmy z DPP s příjmy z DPČ vzájemně nesčítají. Každý druh dohody se posoudí podle svého pravidla.',
    },
    {
      type: 'example',
      title: 'Souběh DPP a DPČ',
      situation:
        'U stejného zaměstnavatele má zaměstnanec DPP s příjmem 9 000 Kč a DPČ s příjmem 3 500 Kč.',
      solution:
        'Příjmy se pro pojistné hranice nesčtou na 12 500 Kč. DPP se porovná s hranicí 12 000 Kč a DPČ samostatně s hranicí 4 500 Kč. V tomto zadání nedosahuje hranice ani jeden druh dohody.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Nesčítání DPP a DPČ pro pojistnou hranici neznamená, že se příjmy nikdy neprojeví společně v jiných daňových, ročních nebo evidenčních procesech.',
    },
    {
      type: 'heading',
      text: 'Zdravotní pojištění',
    },
    {
      type: 'paragraph',
      text: 'Pro zdravotní pojištění se osoba na DPP považuje za zaměstnance při měsíčním příjmu alespoň 12 000 Kč a osoba na DPČ při příjmu alespoň 4 500 Kč, včetně součtu dohod stejného druhu u jednoho zaměstnavatele.',
    },
    {
      type: 'paragraph',
      text: 'Pokud dohoda pojistnou hranici nedosáhne, zaměstnavatel z ní zdravotní pojistné neodvede. To však samo o sobě neznamená, že je osoba zdravotně pojištěna jiným způsobem. Zaměstnanec může být státním pojištěncem, mít jiné pojištěné zaměstnání, nebo musí řešit vlastní pojistný status.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Status studenta, důchodce nebo jiné státní kategorie se nesmí používat jako náhrada za kontrolu příjmové hranice. Ovlivňuje zejména minimální vyměřovací základ a celkové pojistné postavení, nikoli samotné pojmenování dohody.',
    },
    {
      type: 'heading',
      text: 'Minimální vyměřovací základ zdravotního pojištění',
    },
    {
      type: 'paragraph',
      text: 'Vznikne-li zaměstnání pro účely zdravotního pojištění, je nutné samostatně posoudit minimální vyměřovací základ a případné výjimky. Pojistná hranice určuje vznik zaměstnaneckého postavení; minimální vyměřovací základ řeší, z jakého minima má být pojistné odvedeno.',
    },
    {
      type: 'heading',
      text: 'Prohlášení poplatníka',
    },
    {
      type: 'paragraph',
      text: 'Učiněné Prohlášení poplatníka ovlivňuje použití měsíčních daňových slev a zálohového režimu. Zaměstnanec může mít Prohlášení pro stejné období účinné pouze u jednoho plátce daně.',
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní musí ověřit zaměstnance, zdaňovací období, datum, uplatňované nároky a případný souběh u jiného plátce.',
    },
    {
      type: 'heading',
      text: 'DPP bez Prohlášení v roce 2026',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnanec nemá u plátce učiněné Prohlášení poplatníka a jsou splněny podmínky zákona o daních z příjmů, příjem z DPP, který u téhož plátce za měsíc nepřesáhne 11 999 Kč, podléhá dani vybírané srážkou podle zvláštní sazby.',
    },
    {
      type: 'paragraph',
      text: 'Při příjmu 12 000 Kč a vyšším se bez Prohlášení nepoužije tento nízkopříjmový srážkový režim DPP a příjem se zpracuje v zálohovém režimu.',
    },
    {
      type: 'example',
      title: 'DPP 11 999 Kč bez Prohlášení',
      situation:
        'Zaměstnanec nemá podepsané Prohlášení a jeho jediný měsíční příjem z DPP u zaměstnavatele činí 11 999 Kč.',
      solution:
        'Příjem nedosahuje pojistné hranice 12 000 Kč. Při splnění dalších podmínek podléhá srážkové dani. Mzdová účetní současně ověří zdravotní status zaměstnance.',
    },
    {
      type: 'heading',
      text: 'DPČ bez Prohlášení v roce 2026',
    },
    {
      type: 'paragraph',
      text: 'U příjmů bez DPP, které u téhož plátce za kalendářní měsíc nedosáhnou obecné rozhodné částky 4 500 Kč, se při nesplněném Prohlášení a splnění dalších zákonných podmínek použije srážková daň. Pro rok 2026 jde o příjmy do 4 499 Kč.',
    },
    {
      type: 'example',
      title: 'DPČ 4 499 Kč bez Prohlášení',
      situation:
        'Zaměstnanec má jednu DPČ, nemá u zaměstnavatele Prohlášení a v měsíci mu je zúčtováno 4 499 Kč.',
      solution:
        'Příjem nedosahuje rozhodné částky 4 500 Kč. Při splnění podmínek jde o srážkový daňový režim a nevzniká pojistná účast z této DPČ.',
    },
    {
      type: 'heading',
      text: 'Dosažení hranice',
    },
    {
      type: 'paragraph',
      text: 'Při dosažení 4 500 Kč u DPČ nebo 12 000 Kč u DPP se pojistná účast posuzuje za celý příslušný příjem v měsíci, nikoli pouze z částky nad hranicí.',
    },
    {
      type: 'heading',
      text: 'Odměna zúčtovaná po skončení',
    },
    {
      type: 'paragraph',
      text: 'Příjem zúčtovaný po skončení dohody se pro pojistné účely může přiřazovat do měsíce, ve kterém dohoda skončila. Mzdová účetní proto nesmí pozdní doplatek automaticky posoudit izolovaně jen podle měsíce výplaty.',
    },
    {
      type: 'heading',
      text: 'Souběh s pracovním poměrem',
    },
    {
      type: 'paragraph',
      text: 'Má-li zaměstnanec u stejného zaměstnavatele pracovní poměr a dohodu, vztahy zůstávají oddělené. Prohlášení poplatníka se však vztahuje k plátci daně, nikoli pouze k jedné mzdové kartě, a daňové zpracování musí respektovat souhrn příjmů u plátce podle zákona.',
    },
    {
      type: 'heading',
      text: 'Požadované vstupy',
    },
    {
      type: 'list',
      items: [
        'druh dohody',
        'všechny dohody stejného druhu u téhož zaměstnavatele',
        'zúčtovaný příjem za kalendářní měsíc',
        'datum vzniku a skončení dohody',
        'stav Prohlášení poplatníka',
        'uplatňované daňové nároky',
        'zdravotní pojišťovna',
        'státní nebo jiná kategorie významná pro minimální vyměřovací základ',
        'další zaměstnání a pojistný status v potřebném rozsahu',
        'pozdě zúčtované příjmy',
      ],
    },
    {
      type: 'heading',
      text: 'Rozhodovací postup',
    },
    {
      type: 'list',
      items: [
        'oddělit DPP, DPČ a pracovní poměr',
        'sečíst dohody stejného druhu u téhož zaměstnavatele',
        'porovnat DPP s 12 000 Kč',
        'porovnat DPČ s 4 500 Kč',
        'určit sociální a zdravotní pojistnou účast',
        'ověřit Prohlášení poplatníka',
        'určit srážkový nebo zálohový daňový režim',
        'posoudit minimální vyměřovací základ zdravotního pojištění',
        'zkontrolovat registraci a JMHZ',
      ],
    },
    {
      type: 'heading',
      text: 'Modelové porovnání',
    },
    {
      type: 'example',
      title: 'Tři explicitně zadané varianty',
      situation:
        'Varianta A: DPP 10 000 Kč bez Prohlášení. Varianta B: DPP 12 000 Kč bez Prohlášení. Varianta C: DPČ 4 500 Kč bez Prohlášení. Nejsou jiné dohody stejného druhu u zaměstnavatele.',
      solution:
        'A: příjem je pod 12 000 Kč, nevzniká pojistná účast z DPP a při splnění podmínek jde o srážkovou daň. B: hranice 12 000 Kč je dosažena, vzniká pojistná účast a daň se zpracuje zálohově. C: hranice 4 500 Kč je dosažena, vzniká pojistná účast a příjem se nezdaňuje nízkopříjmovou srážkovou daní podle limitu 4 499 Kč.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každou DPP za nepojištěnou',
        'považovat každou DPČ za pojištěnou bez kontroly příjmu',
        'nesčítat více DPP u stejného zaměstnavatele',
        'nesčítat více DPČ u stejného zaměstnavatele',
        'sčítat DPP a DPČ do jediné pojistné hranice',
        'zaměnit 11 999 Kč za pojistnou hranici namísto daňového limitu bez Prohlášení',
        'zaměnit 4 499 Kč za pojistnou hranici namísto daňového limitu bez Prohlášení',
        'ignorovat minimální vyměřovací základ zdravotního pojištění',
        'použít slevy bez platného Prohlášení',
      ],
    },
    {
      type: 'summary',
      items: [
        'V roce 2026 činí pojistná hranice DPP 12 000 Kč a DPČ 4 500 Kč.',
        'Více dohod stejného druhu u jednoho zaměstnavatele se sčítá.',
        'DPP a DPČ se pro své pojistné hranice vzájemně nesčítají.',
        'Bez Prohlášení se při splnění podmínek používá srážková daň do 11 999 Kč u DPP a do 4 499 Kč u ostatních malých příjmů včetně DPČ.',
        'Zdravotní minimum, registrace a pozdní doplatky se posuzují samostatně.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'agreement-tax-insurance-inputs-card-01',
      front: 'Jaká je pojistná hranice DPP pro rok 2026?',
      back: '12 000 Kč měsíčně u jednoho zaměstnavatele.',
      explanation: 'Příjmy z více DPP u téhož zaměstnavatele se sčítají.',
      skillIds: ['agreement-insurance-thresholds'],
    },
    {
      id: 'agreement-tax-insurance-inputs-card-02',
      front: 'Jaká je obecná rozhodná částka DPČ pro rok 2026?',
      back: '4 500 Kč měsíčně.',
      explanation:
        'Při dosažení hranice vzniká pojistná účast podle příslušných pravidel.',
      skillIds: ['agreement-insurance-thresholds'],
    },
    {
      id: 'agreement-tax-insurance-inputs-card-03',
      front: 'Sčítá se DPP s DPČ pro pojistnou hranici?',
      back: 'Ne. Každý druh se posuzuje samostatně.',
      explanation: 'Sčítají se dohody stejného druhu u jednoho zaměstnavatele.',
      skillIds: ['agreement-income-aggregation'],
    },
    {
      id: 'agreement-tax-insurance-inputs-card-04',
      front:
        'Jaký je daňový limit DPP bez Prohlášení pro srážkovou daň v roce 2026?',
      back: 'Nejvýše 11 999 Kč při splnění dalších podmínek.',
      explanation: 'Pojistná hranice začíná částkou 12 000 Kč.',
      skillIds: ['agreement-tax-regime'],
    },
  ],
  exercises: [
    {
      id: 'agreement-tax-insurance-inputs-exercise-01',
      type: 'single_choice',
      prompt:
        'Jedna DPP u zaměstnavatele činí 12 000 Kč. Je dosažena pojistná hranice pro rok 2026?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne, hranice je až 12 001 Kč.',
        },
        {
          id: 'c',
          text: 'Ne, DPP je vždy bez pojistného.',
        },
        {
          id: 'd',
          text: 'Záleží pouze na věku.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['agreement-insurance-thresholds'],
      explanation: 'Rozhodná částka je 12 000 Kč včetně.',
      commonMistake:
        'Zaměnit formulaci nedosáhne hranice za nepřesáhne hranici.',
    },
    {
      id: 'agreement-tax-insurance-inputs-exercise-02',
      type: 'single_choice',
      prompt:
        'DPČ činí 4 499 Kč a zaměstnanec nemá Prohlášení. Jaký je základní výsledek při splnění dalších podmínek?',
      options: [
        {
          id: 'a',
          text: 'Vznik pojistné účasti a zálohová daň.',
        },
        {
          id: 'b',
          text: 'Bez pojistné účasti a srážková daň.',
        },
        {
          id: 'c',
          text: 'Bez daně i bez evidence.',
        },
        {
          id: 'd',
          text: 'Automatická sleva na poplatníka.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-tax-regime', 'agreement-insurance-thresholds'],
      explanation:
        'Příjem je pod rozhodnou částkou 4 500 Kč a pod daňovým limitem bez Prohlášení.',
      commonMistake: 'Uplatnit slevu bez Prohlášení.',
    },
    {
      id: 'agreement-tax-insurance-inputs-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Které příjmy se pro pojistnou hranici u jednoho zaměstnavatele sčítají?',
      options: [
        {
          id: 'dpp-dpp',
          text: 'Více DPP mezi sebou.',
        },
        {
          id: 'dpc-dpc',
          text: 'Více DPČ mezi sebou.',
        },
        {
          id: 'dpp-dpc',
          text: 'DPP a DPČ vždy do jedné společné hranice.',
        },
        {
          id: 'different-employer',
          text: 'DPP od různých zaměstnavatelů do jedné hranice u prvního zaměstnavatele.',
        },
      ],
      correctOptionIds: ['dpp-dpp', 'dpc-dpc'],
      skillIds: ['agreement-income-aggregation'],
      explanation: 'Sčítá se stejný druh dohody u téhož zaměstnavatele.',
      commonMistake:
        'Sčítat všechny příjmy bez rozlišení zaměstnavatele a druhu vztahu.',
    },
    {
      id: 'agreement-tax-insurance-inputs-exercise-04',
      type: 'ordering',
      prompt: 'Seřaď daňové a pojistné posouzení dohody.',
      steps: [
        {
          id: 'type',
          text: 'Určit druh dohody a zaměstnavatele.',
        },
        {
          id: 'aggregate',
          text: 'Sečíst příjmy dohod stejného druhu.',
        },
        {
          id: 'insurance',
          text: 'Porovnat příjem s pojistnou hranicí.',
        },
        {
          id: 'declaration',
          text: 'Ověřit Prohlášení poplatníka.',
        },
        {
          id: 'tax',
          text: 'Určit srážkový nebo zálohový režim.',
        },
        {
          id: 'health',
          text: 'Posoudit zdravotní minimum, registraci a podání.',
        },
      ],
      correctOrder: [
        'type',
        'aggregate',
        'insurance',
        'declaration',
        'tax',
        'health',
      ],
      skillIds: [
        'agreement-tax-regime',
        'agreement-insurance-thresholds',
        'agreement-income-aggregation',
      ],
      explanation:
        'Správný režim vzniká až po identifikaci vztahu, součtu příjmů a kontrole podkladů.',
      commonMistake: 'Začít daní bez součtu více dohod.',
    },
    {
      id: 'agreement-tax-insurance-inputs-exercise-05',
      type: 'short_text',
      prompt: 'Jaká částka v roce 2026 zakládá pojistnou účast u DPP?',
      acceptedAnswers: ['12 000 Kč', '12000', '12 000'],
      ignoreDiacritics: true,
      skillIds: ['agreement-insurance-thresholds'],
      explanation: 'Pojistná hranice DPP je 12 000 Kč.',
      commonMistake:
        'Uvést 11 999 Kč, což je horní daňový limit srážkového režimu bez Prohlášení.',
    },
    {
      id: 'agreement-tax-insurance-inputs-exercise-06',
      type: 'single_choice',
      prompt:
        'DPP je 9 000 Kč a DPČ 3 500 Kč u stejného zaměstnavatele. Jak se posoudí pojistné hranice?',
      options: [
        {
          id: 'a',
          text: 'Příjmy se sečtou na 12 500 Kč a oba vztahy jsou pojištěné.',
        },
        {
          id: 'b',
          text: 'DPP a DPČ se posoudí odděleně a ani jedna hranici nedosáhne.',
        },
        {
          id: 'c',
          text: 'Pojištěná je automaticky DPČ.',
        },
        {
          id: 'd',
          text: 'Dohody se vůbec neevidují.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-income-aggregation'],
      explanation: 'DPP se porovnává s 12 000 Kč a DPČ s 4 500 Kč samostatně.',
      commonMistake: 'Vytvořit jednu společnou hranici pro oba druhy dohod.',
    },
  ],
  sources: [
    {
      title:
        'ČSSZ – Přehled nejdůležitějších údajů pro sociální zabezpečení v roce 2026',
      url: 'https://www.cssz.cz/-/prehled-nejdulezitejsich-udaju-pro-socialni-zabezpeceni-v-roce-2026',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Aktuální dotazy a odpovědi k dani z příjmů fyzických osob 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/dotazy-a-odpovedi/2026/aktualni-dotazy-a-odpovedi-k-dani-z',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Obecné informace pro zaměstnance a zaměstnavatele',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title: 'VZP – Změny u odvodů na zdravotním pojištění pro DPP a DPČ 2026',
      url: 'https://www.vzp.cz/o-nas/tiskove-centrum/otazky-tydne/zmeny-u-odvodu-na-zdravotnim-pojisteni-pro-dpp-a-dpc-2026',
      kind: 'official',
    },
    {
      title: 'VZP – Dohody o provedení práce',
      url: 'https://www.vzp.cz/platci/informace/zamestnavatel/dohody-o-provedeni-prace',
      kind: 'official',
    },
    {
      title: 'VZP – Dohody o pracovní činnosti',
      url: 'https://www.vzp.cz/platci/informace/zamestnavatel/dohody-o-pracovni-cinnosti',
      kind: 'official',
    },
  ],
})
