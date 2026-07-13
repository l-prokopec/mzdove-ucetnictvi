import { defineLessonContent } from '../define'

export const severanceBasicsContent = defineLessonContent({
  moduleId: 'employment-changes-termination',
  skillIds: [
    'severance-entitlement',
    'severance-amount',
    'termination-payment-classification',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-11',
    note: 'Odstupné, jednorázová náhrada při skončení pracovního poměru a související plnění ověřené podle zákoníku práce účinného v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Ne každé skončení zakládá odstupné',
    },
    {
      type: 'paragraph',
      text: 'Odstupné nevzniká automaticky při každém skončení pracovního poměru. Rozhoduje skutečný způsob a důvod skončení, délka pracovního poměru a případná kolektivní smlouva, vnitřní předpis nebo individuální dohoda.',
    },
    {
      type: 'definition',
      term: 'Odstupné',
      definition:
        'Jednorázové peněžité plnění poskytované při skončení pracovního poměru v zákonem stanovených nebo zaměstnavatelem rozšířených případech.',
    },
    {
      type: 'heading',
      text: 'Organizační důvody',
    },
    {
      type: 'paragraph',
      text: 'Zákonné odstupné náleží zejména tehdy, když pracovní poměr skončí výpovědí zaměstnavatele z organizačních důvodů podle § 52 písm. a) až c) zákoníku práce nebo dohodou z týchž důvodů.',
    },
    {
      type: 'list',
      items: [
        'ruší se zaměstnavatel nebo jeho část',
        'přemísťuje se zaměstnavatel nebo jeho část',
        'zaměstnanec se stane nadbytečným v důsledku organizační změny',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'U dohody musí být důvod pro mzdové posouzení spolehlivě doložen. Pouhé označení dokumentu jako dohoda neprokazuje nárok na odstupné.',
    },
    {
      type: 'heading',
      text: 'Základní minimální výše',
    },
    {
      type: 'list',
      items: [
        'méně než 1 rok trvání pracovního poměru – nejméně jednonásobek průměrného měsíčního výdělku',
        'alespoň 1 rok a méně než 2 roky – nejméně dvojnásobek průměrného měsíčního výdělku',
        'alespoň 2 roky – nejméně trojnásobek průměrného měsíčního výdělku',
      ],
    },
    {
      type: 'paragraph',
      text: 'Do délky pracovního poměru se pro účely zákonného odstupného započítává také předchozí pracovní poměr u stejného zaměstnavatele, pokud mezi jeho skončením a vznikem dalšího pracovního poměru nebyla doba delší než šest měsíců.',
    },
    {
      type: 'definition',
      term: 'Průměrný měsíční výdělek',
      definition:
        'Průměrný výdělek převedený pro účely odstupného na měsíční hodnotu podle pravidel zákoníku práce.',
    },
    {
      type: 'heading',
      text: 'Modelový výpočet násobku',
    },
    {
      type: 'example',
      title: 'Organizační skončení po třech letech',
      situation:
        'Pracovní poměr trval tři roky a skončil výpovědí zaměstnavatele pro nadbytečnost. Průměrný měsíční výdělek pro pracovněprávní účely činí 42 000 Kč.',
      solution:
        'Minimální zákonné odstupné činí trojnásobek průměrného měsíčního výdělku: 3 × 42 000 Kč = 126 000 Kč. V této lekci se neposuzuje samotný výpočet daně ani odvody; nejprve se správně klasifikuje právní titul plnění.',
    },
    {
      type: 'heading',
      text: 'Dosažení nejvyšší přípustné expozice',
    },
    {
      type: 'paragraph',
      text: 'Při skončení výpovědí zaměstnavatele z důvodu dosažení nejvyšší přípustné expozice nebo dohodou z téhož důvodu náleží zákonné odstupné nejméně ve výši dvanáctinásobku průměrného měsíčního výdělku.',
    },
    {
      type: 'heading',
      text: 'Zdravotní důvod po 1. červnu 2025',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnanec dlouhodobě pozbyl způsobilost konat dosavadní práci pro pracovní úraz, nemoc z povolání nebo ohrožení nemocí z povolání a pracovní poměr je z tohoto důvodu rozvázán výpovědí zaměstnavatele nebo dohodou, nejde od 1. června 2025 o odstupné, ale o samostatnou jednorázovou náhradu při skončení pracovního poměru.',
    },
    {
      type: 'definition',
      term: 'Jednorázová náhrada při skončení pracovního poměru',
      definition:
        'Zvláštní plnění ve výši dvanáctinásobku průměrného měsíčního výdělku při skončení z pracovně podmíněného zdravotního důvodu vymezeného zákoníkem práce.',
    },
    {
      type: 'paragraph',
      text: 'Jednorázová náhrada je hrazena v zákonném rozsahu ze zákonného pojištění odpovědnosti zaměstnavatele. Mzdová účetní ji musí vést odděleně od běžného odstupného a zachovat podklad k pracovnímu úrazu, nemoci z povolání nebo ohrožení touto nemocí.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Dlouhodobé pozbytí zdravotní způsobilosti z obecného onemocnění samo o sobě nezakládá tuto jednorázovou náhradu. Rozhodující je doložená příčina a právní důvod skončení.',
    },
    {
      type: 'heading',
      text: 'Vyšší a dobrovolné odstupné',
    },
    {
      type: 'paragraph',
      text: 'Kolektivní smlouva, vnitřní předpis nebo individuální dohoda může zákonné odstupné zvýšit nebo stanovit další případy. Mzdová účetní musí rozlišit zákonné minimum, zvýšenou část a plnění poskytnuté z jiného právního důvodu.',
    },
    {
      type: 'heading',
      text: 'Kdy nárok skutečně vzniká',
    },
    {
      type: 'paragraph',
      text: 'Nárok na odstupné nevzniká samotným doručením výpovědi. Vzniká až při skutečném skončení pracovního poměru z důvodu, který odstupné zakládá. Pokud pracovní poměr před původně očekávaným koncem skončí jiným způsobem, musí se nárok znovu posoudit.',
    },
    {
      type: 'example',
      title: 'Jiný konec během výpovědní doby',
      situation:
        'Zaměstnavatel dal výpověď pro nadbytečnost, ale před uplynutím výpovědní doby byl pracovní poměr platně okamžitě zrušen z jiného důvodu.',
      solution:
        'Původní výpověď sama nestačí. Protože pracovní poměr neskončil organizační výpovědí, nárok na organizační odstupné nemusí vzniknout. Případ musí být pracovněprávně potvrzen před zúčtováním.',
    },
    {
      type: 'heading',
      text: 'Termín výplaty',
    },
    {
      type: 'paragraph',
      text: 'Odstupné i jednorázová náhrada se běžně vyplácejí po skončení pracovního poměru v nejbližším pravidelném výplatním termínu, pokud se strany písemně nedohodnou na výplatě v den skončení nebo na pozdějším termínu.',
    },
    {
      type: 'heading',
      text: 'Daňové a pojistné rozlišení',
    },
    {
      type: 'paragraph',
      text: 'Odstupné poskytnuté z důvodů podle zákoníku práce podléhá dani z příjmů ze závislé činnosti. Zákonné odstupné a jeho zvýšení v režimu pracovněprávního odstupného se nezahrnují do vyměřovacího základu sociálního ani zdravotního pojištění. Jinak pojmenované mimořádné plnění však nelze automaticky posoudit stejně.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Název položky v systému nerozhoduje. Pro daňové a pojistné posouzení je nutný skutečný právní důvod plnění.',
    },
    {
      type: 'heading',
      text: 'Návrat k témuž zaměstnavateli',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnanec před uplynutím doby odpovídající vyplacenému násobku začne znovu pracovat u stejného zaměstnavatele v pracovním poměru nebo na DPČ, může být povinen vrátit odstupné nebo jeho poměrnou část. Práce na DPP tuto povinnost podle zákonného pravidla sama o sobě nevyvolává.',
    },
    {
      type: 'heading',
      text: 'Další plnění při skončení',
    },
    {
      type: 'list',
      items: [
        'mzda nebo plat za poslední období',
        'náhrada za nevyčerpanou dovolenou',
        'doplatek odměny nebo prémie',
        'náhrada mzdy při okamžitém zrušení zaměstnancem',
        'jednorázová náhrada podle § 271ca',
        'odstupné',
        'cestovní náhrady a jiné nevyúčtované nároky',
      ],
    },
    {
      type: 'paragraph',
      text: 'Každé plnění musí mít samostatný právní titul, období, způsob zdanění a pojistné posouzení. Nelze je sloučit do jedné položky „vyrovnání při odchodu“.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit skutečný způsob a důvod skončení',
        'ověřit délku pracovního poměru a započitatelnou předchozí dobu',
        'určit typ plnění: odstupné, jednorázová náhrada nebo jiný nárok',
        'zjistit použitelný násobek průměrného měsíčního výdělku',
        'ověřit kolektivní smlouvu, vnitřní předpis nebo dohodu',
        'zkontrolovat průměrný výdělek',
        'oddělit daňové a pojistné posouzení jednotlivých položek',
        'určit termín výplaty',
        'uchovat výpočet a schválení',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'vyplatit odstupné při každé dohodě',
        'neuvedený nebo nedoložený organizační důvod',
        'zaměnit jednorázovou náhradu za odstupné',
        'použít násobek bez kontroly délky zaměstnání',
        'nezapočítat relevantní předchozí pracovní poměr',
        'zahrnout zákonné odstupné do pojistného základu',
        'označit libovolný bonus jako odstupné',
        'neposoudit povinnost vrácení při rychlém návratu',
      ],
    },
    {
      type: 'summary',
      items: [
        'Odstupné náleží jen při stanoveném nebo rozšířeném právním důvodu.',
        'U organizačních důvodů činí zákonné minimum podle délky zaměstnání jeden, dva nebo tři průměrné měsíční výdělky.',
        'Dosažení nejvyšší přípustné expozice zakládá nejméně dvanáctinásobek.',
        'Pracovně podmíněný zdravotní důvod zakládá od června 2025 samostatnou jednorázovou náhradu, nikoli odstupné.',
        'Každé výstupní plnění se klasifikuje a zpracovává odděleně.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'severance-basics-card-01',
      front: 'Vzniká odstupné při každém skončení pracovního poměru?',
      back: 'Ne. Musí existovat odpovídající právní důvod.',
      explanation:
        'Rozhoduje způsob a důvod skončení, nikoli jen název dokumentu.',
      skillIds: ['severance-entitlement'],
    },
    {
      id: 'severance-basics-card-02',
      front:
        'Jaké je běžné minimum při organizačním důvodu po alespoň dvou letech?',
      back: 'Trojnásobek průměrného měsíčního výdělku.',
      explanation: 'Kratší pracovní poměr má nižší zákonné minimum.',
      skillIds: ['severance-amount'],
    },
    {
      id: 'severance-basics-card-03',
      front:
        'Co od června 2025 nahradilo odstupné při pracovně podmíněném dlouhodobém pozbytí způsobilosti?',
      back: 'Jednorázová náhrada při skončení pracovního poměru.',
      explanation:
        'Její zákonná výše činí dvanáctinásobek průměrného měsíčního výdělku.',
      skillIds: ['termination-payment-classification'],
    },
    {
      id: 'severance-basics-card-04',
      front: 'Podléhá zákonné odstupné sociálnímu a zdravotnímu pojištění?',
      back: 'Ne, pokud jde skutečně o odstupné poskytnuté v pracovněprávním režimu.',
      explanation: 'Podléhá však dani z příjmů.',
      skillIds: ['termination-payment-classification'],
    },
  ],
  exercises: [
    {
      id: 'severance-basics-exercise-01',
      type: 'single_choice',
      prompt:
        'Pracovní poměr trval tři roky a skončil pro nadbytečnost. Jaké je minimální zákonné odstupné?',
      options: [
        {
          id: 'a',
          text: 'Jednonásobek.',
        },
        {
          id: 'b',
          text: 'Dvojnásobek.',
        },
        {
          id: 'c',
          text: 'Trojnásobek.',
        },
        {
          id: 'd',
          text: 'Dvanáctinásobek.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['severance-amount'],
      explanation:
        'Při trvání alespoň dva roky činí minimum trojnásobek průměrného měsíčního výdělku.',
      commonMistake: 'Použít jeden násobek bez kontroly délky zaměstnání.',
    },
    {
      id: 'severance-basics-exercise-02',
      type: 'multiple_choice',
      prompt: 'Co musí být ověřeno před zúčtováním odstupného?',
      options: [
        {
          id: 'reason',
          text: 'Skutečný důvod skončení.',
        },
        {
          id: 'label',
          text: 'Pouze název položky v systému.',
        },
        {
          id: 'duration',
          text: 'Délka pracovního poměru.',
        },
        {
          id: 'average',
          text: 'Průměrný měsíční výdělek.',
        },
        {
          id: 'rules',
          text: 'Kolektivní smlouva nebo vnitřní pravidla.',
        },
      ],
      correctOptionIds: ['reason', 'duration', 'average', 'rules'],
      skillIds: ['severance-entitlement', 'severance-amount'],
      explanation: 'Název položky nenahrazuje právní a výpočtový podklad.',
      commonMistake:
        'Vyplatit částku podle personální tabulky bez kontroly důvodu.',
    },
    {
      id: 'severance-basics-exercise-03',
      type: 'single_choice',
      prompt: 'Jak má být odstupné v poslední mzdě základně zachyceno?',
      options: [
        {
          id: 'a',
          text: 'Jako samostatně doložené plnění navázané na právní důvod skončení.',
        },
        { id: 'b', text: 'Jako cestovní náhrada.' },
        { id: 'c', text: 'Jako odpracované přesčasové hodiny.' },
        { id: 'd', text: 'Bez vazby na dokument o skončení.' },
      ],
      correctOptionId: 'a',
      skillIds: ['severance-entitlement', 'termination-payment-classification'],
      explanation:
        'Odstupné vyžaduje samostatný právní titul, výpočet a kontrolní stopu.',
      commonMistake: 'Sloučit odstupné s běžnou mzdou bez identifikace.',
    },
    {
      id: 'severance-basics-exercise-04',
      type: 'single_choice',
      prompt:
        'Pracovní poměr končí pro pracovní úraz způsobující dlouhodobou nezpůsobilost. Jak se od června 2025 označuje zákonné dvanáctinásobné plnění?',
      options: [
        {
          id: 'a',
          text: 'Běžné organizační odstupné.',
        },
        {
          id: 'b',
          text: 'Jednorázová náhrada při skončení pracovního poměru.',
        },
        {
          id: 'c',
          text: 'Cestovní náhrada.',
        },
        {
          id: 'd',
          text: 'Dovolená.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['termination-payment-classification'],
      explanation:
        'Toto plnění nahradilo dřívější odstupné v uvedených zdravotních případech.',
      commonMistake: 'Použít staré označení odstupné.',
    },
    {
      id: 'severance-basics-exercise-05',
      type: 'short_text',
      prompt:
        'Kolikanásobek průměrného měsíčního výdělku náleží při dosažení nejvyšší přípustné expozice?',
      acceptedAnswers: ['dvanáctinásobek', '12', 'dvanactinasobek'],
      ignoreDiacritics: true,
      skillIds: ['severance-amount'],
      explanation: 'Zákonné minimum je dvanáctinásobek.',
      commonMistake: 'Použít běžný organizační trojnásobek.',
    },
    {
      id: 'severance-basics-exercise-06',
      type: 'single_choice',
      prompt:
        'Dohoda neuvádí ani jinak nedokládá důvod. Lze automaticky vyplatit organizační odstupné?',
      options: [
        {
          id: 'a',
          text: 'Ano, každá dohoda zakládá odstupné.',
        },
        {
          id: 'b',
          text: 'Ne, organizační důvod musí být pro nárok doložen.',
        },
        {
          id: 'c',
          text: 'Ano, pokud zaměstnanec požádá ústně.',
        },
        {
          id: 'd',
          text: 'Ano, pokud je poslední mzda nízká.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['severance-entitlement'],
      explanation: 'Odstupné se odvíjí od skutečného právního důvodu skončení.',
      commonMistake: 'Zaměnit způsob skončení za důvod vzniku nároku.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Odstupné',
      url: 'https://ppropo.mpsv.cz/VI223Odstupne',
      kind: 'official',
    },
    {
      title: 'MPSV – Jednorázová náhrada při skončení pracovního poměru',
      url: 'https://ppropo.mpsv.cz/xii344jednorazovanahradapriskonc',
      kind: 'official',
    },
    {
      title: 'MPSV – Průměrný výdělek',
      url: 'https://ppropo.mpsv.cz/XXI8Prumernyvydelek',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákonné pojištění odpovědnosti zaměstnavatele',
      url: 'https://ppropo.mpsv.cz/XII35Zakonnepojisteniodpovednost',
      kind: 'official',
    },
  ],
})
