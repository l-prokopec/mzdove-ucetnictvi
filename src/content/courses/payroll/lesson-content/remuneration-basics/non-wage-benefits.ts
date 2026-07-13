import { defineLessonContent } from '../define'

export const nonWageBenefitsContent = defineLessonContent({
  moduleId: 'remuneration-basics',
  skillIds: [
    'non-wage-payment-classification',
    'benefit-document-control',
    'payment-purpose-substance',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Rozlišení mzdy a plnění nemzdové povahy, náhrad výdajů, benefitů, naturální mzdy a náhrad nákladů při práci na dálku ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Ne všechno na výplatní pásce je mzda',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může v jednom mzdovém období obdržet vedle mzdy nebo platu také náhrady výdajů, náhrady příjmu, odstupné, benefity, sociální plnění nebo jiné částky. Společná výplata ani zaúčtování ve mzdovém systému z nich automaticky nedělají mzdu.',
    },
    {
      type: 'definition',
      term: 'Plnění nemzdové povahy',
      definition:
        'Plnění poskytované zaměstnanci z jiného právního důvodu než jako odměna za vykonanou práci.',
    },
    {
      type: 'heading',
      text: 'Rozhoduje skutečný důvod plnění',
    },
    {
      type: 'paragraph',
      text: 'Název položky je pouze technický údaj. Pro právní, daňové, pojistné a účetní posouzení je rozhodující, proč zaměstnanec částku nebo věc dostává, jaké podmínky jsou splněny a který dokument nárok zakládá.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Položka nazvaná cestovné není cestovní náhradou, pokud ve skutečnosti pouze pravidelně odměňuje práci a není navázána na pracovní cestu a skutečné výdaje.',
    },
    {
      type: 'heading',
      text: 'Náhrada mzdy nebo platu',
    },
    {
      type: 'paragraph',
      text: 'Náhrada mzdy nebo platu není odměnou za vykonanou práci. Nahrazuje příjem například při dovolené, překážce v práci nebo v jiném zákonem stanoveném případě. Může se vypočítávat z průměrného výdělku, ale tím se nestává mzdou.',
    },
    {
      type: 'example',
      title: 'Dovolená a odpracovaná směna',
      situation:
        'Zaměstnanec v měsíci odpracuje část fondu a část čerpá dovolenou.',
      solution:
        'Za práci mu náleží mzda a za dovolenou náhrada mzdy. Položky se vedou odděleně, i když obě vstupují do celkové částky vyplacené zaměstnanci.',
    },
    {
      type: 'heading',
      text: 'Cestovní náhrady',
    },
    {
      type: 'paragraph',
      text: 'Cestovní náhrady nahrazují zaměstnanci výdaje vzniklé v souvislosti s pracovní cestou nebo jinou zákonem vymezenou cestou. Nejsou odměnou za práci a nesmí sloužit k nahrazení části mzdy.',
    },
    {
      type: 'list',
      items: [
        'náhrada jízdních výdajů',
        'náhrada výdajů za ubytování',
        'stravné',
        'náhrada nutných vedlejších výdajů',
        'další zákonem stanovené cestovní náhrady',
      ],
    },
    {
      type: 'example',
      title: 'Mzda a stravné při pracovní cestě',
      situation:
        'Zaměstnanec odpracuje pracovní směnu na pracovní cestě a současně splní podmínky pro stravné.',
      solution:
        'Za práci obdrží mzdu nebo plat. Stravné je samostatná cestovní náhrada. Jedno plnění nemůže bez právního důvodu nahradit druhé.',
    },
    {
      type: 'heading',
      text: 'Náhrada nákladů při práci na dálku',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci mohou být nahrazovány prokázané náklady spojené s prací na dálku nebo paušální částka, pokud je její poskytování písemně sjednáno nebo stanoveno vnitřním předpisem. Jde o náhradu nákladů, nikoli o mzdu za práci.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Pro rok 2026 činí zákonná paušální částka náhrady nákladů při práci na dálku 4,70 Kč za každou započatou hodinu práce na dálku. Jde o roční parametr, který se pro další období musí znovu ověřit.',
    },
    {
      type: 'example',
      title: 'Paušál za práci na dálku',
      situation:
        'Zaměstnanec odpracuje 40 započatých hodin na dálku a zaměstnavatel má paušální náhradu písemně stanovenu.',
      solution:
        'Náhrada činí 40 × 4,70 Kč = 188 Kč. Jde o náhradu nákladů, nikoli o součást mzdy.',
    },
    {
      type: 'heading',
      text: 'Náhrada za používání vlastního vybavení',
    },
    {
      type: 'paragraph',
      text: 'Používá-li zaměstnanec se souhlasem zaměstnavatele vlastní nářadí, zařízení nebo jiné předměty potřebné pro práci, může mu náležet náhrada opotřebení nebo souvisejících výdajů. Právní titul a způsob výpočtu musí být doložen.',
    },
    {
      type: 'heading',
      text: 'Odstupné',
    },
    {
      type: 'paragraph',
      text: 'Odstupné je zvláštní plnění při skončení pracovního poměru z vymezeného důvodu. Není odměnou za práci v posledním měsíci a nesmí být zahrnuto do základní mzdy nebo použito pro kontrolu minimální mzdy.',
    },
    {
      type: 'heading',
      text: 'Náhrada škody a újmy',
    },
    {
      type: 'paragraph',
      text: 'Náhrada škody, ztráty na výdělku, bolestného nebo jiné újmy má kompenzační právní důvod. Přestože může být technicky zpracována mzdovou účtárnou, nejde o mzdovou složku.',
    },
    {
      type: 'heading',
      text: 'Sociální a osobní plnění',
    },
    {
      type: 'list',
      items: [
        'odměna při životním nebo pracovním výročí neposkytovaná za výkon práce',
        'sociální výpomoc',
        'příspěvek na penzijní nebo jiné zaměstnanecké zabezpečení',
        'příspěvek na kulturní, sportovní nebo zdravotní aktivitu',
        'příspěvek na stravování',
        'jiný benefit poskytovaný podle zaměstnaneckého programu',
      ],
    },
    {
      type: 'paragraph',
      text: 'U těchto položek se musí samostatně posoudit podmínky nároku, daňový režim, pojistné a případné limity. Označení benefit neznamená automatické osvobození ani automatické zahrnutí do mzdy.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Nemzdová povaha a daňové osvobození nejsou totéž. Plnění může být nemzdové, ale zdanitelné nebo pojistně relevantní.',
    },
    {
      type: 'heading',
      text: 'Příspěvek na stravování',
    },
    {
      type: 'paragraph',
      text: 'Příspěvek zaměstnavatele na stravování je zaměstnaneckým plněním poskytovaným v souvislosti se zaměstnáním, nikoli odměnou za konkrétní pracovní výkon. Musí být veden odděleně od základní mzdy a zákonných příplatků.',
    },
    {
      type: 'heading',
      text: 'Pracovní pomůcky a ochranné prostředky',
    },
    {
      type: 'paragraph',
      text: 'Poskytnutí pracovního nástroje, ochranného prostředku nebo jiného vybavení nezbytného pro práci není mzdou ani benefitem pro osobní spotřebu. Zaměstnavatel tím plní svou provozní nebo bezpečnostní povinnost.',
    },
    {
      type: 'example',
      title: 'Notebook pro výkon práce',
      situation:
        'Zaměstnavatel předá zaměstnanci notebook určený výhradně k výkonu práce.',
      solution:
        'Nejde o naturální mzdu ani automaticky o benefit. Jde o pracovní prostředek zaměstnavatele, který zaměstnanec používá pro plnění pracovních úkolů.',
    },
    {
      type: 'heading',
      text: 'Naturální mzda je výjimkou z nemzdového zařazení',
    },
    {
      type: 'paragraph',
      text: 'Výrobek, služba nebo jiné plnění peněžité hodnoty může být naturální mzdou, pokud je poskytováno za práci, zaměstnanec s tím souhlasí a jsou splněny zákonné podmínky. Ne každé nepeněžní plnění je tedy benefitem.',
    },
    {
      type: 'list',
      items: [
        'souhlas zaměstnance',
        'dohodnuté podmínky',
        'přiměřený rozsah',
        'peněžní ocenění',
        'výplata nejméně minimální mzdy v penězích',
        'zákaz poskytovat jako naturální mzdu lihoviny, tabákové výrobky a jiné návykové látky',
      ],
    },
    {
      type: 'example',
      title: 'Výrobek jako část mzdy',
      situation:
        'Zaměstnavatel se zaměstnancem dohodne, že nad peněžní mzdu převyšující minimum poskytne část mzdy ve vlastních výrobcích oceněných obvyklou cenou.',
      solution:
        'Při splnění všech zákonných podmínek může jít o naturální mzdu. V systému musí být vedena jako mzdová složka peněžité hodnoty, nikoli jako běžný benefit.',
    },
    {
      type: 'heading',
      text: 'Formální název nemůže změnit obsah',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnavatel označí část pravidelné odměny za práci jako náhradu výdajů, ale žádný výdaj ani zákonný nárok neexistuje, může jít podle skutečného obsahu o mzdu. Mzdová účetní musí upozornit na nesoulad a nemá vytvářet formální kód, který zakrývá pravou povahu plnění.',
    },
    {
      type: 'example',
      title: 'Paušální cestovné bez cest',
      situation:
        'Zaměstnanec každý měsíc dostává 5 000 Kč označených jako cestovné, přestože nejezdí na pracovní cesty a nevznikají mu související výdaje.',
      solution:
        'Název cestovné nestačí. Plnění vyžaduje právní přezkoumání a podle skutečného důvodu může být odměnou za práci se všemi navazujícími dopady.',
    },
    {
      type: 'heading',
      text: 'Oddělené parametry položky',
    },
    {
      type: 'list',
      items: [
        'právní titul',
        'zda jde o odměnu za práci',
        'zda nahrazuje výdaj nebo příjem',
        'období nebo událost vzniku',
        'zdrojový dokument',
        'daňový režim',
        'pojistný režim',
        'vstup do průměrného výdělku',
        'vstup do minimální mzdy',
        'účetní zaúčtování',
      ],
    },
    {
      type: 'heading',
      text: 'Stejná bankovní platba, různé právní položky',
    },
    {
      type: 'paragraph',
      text: 'Mzda, cestovní náhrada, náhrada nákladů a benefit mohou být zaměstnanci odeslány jedním bankovním převodem. Mzdová sestava a výplatní doklad však musí umožnit jednotlivé položky rozlišit a doložit.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'zjistit skutečný účel plnění',
        'dohledat právní a interní podklad',
        'určit, zda jde o odměnu za práci',
        'odlišit mzdu, náhradu a benefit',
        'ověřit částku a období',
        'samostatně posoudit daň a pojistné',
        'ověřit vstup do minima a průměrného výdělku',
        'použít správný mzdový a účetní kód',
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
        'zahrnout každou částku na pásce do hrubé mzdy',
        'považovat každé nepeněžní plnění za benefit',
        'považovat každý benefit za daňově osvobozený',
        'použít cestovní náhradu bez pracovní cesty',
        'zaměnit náhradu mzdy za mzdu',
        'zahrnout odstupné do kontroly minimální mzdy',
        'považovat pracovní notebook za naturální mzdu',
        'neoddělit právní titul od způsobu bankovní výplaty',
      ],
    },
    {
      type: 'summary',
      items: [
        'Plnění nemzdové povahy není odměnou za vykonanou práci.',
        'Náhrady mzdy, cestovní náhrady, odstupné a náhrady nákladů se vedou odděleně od mzdy.',
        'Benefit nemusí být automaticky daňově osvobozený.',
        'Naturální mzda je nepeněžní plnění za práci, nikoli běžný benefit.',
        'Rozhoduje skutečný obsah a právní důvod, nikoli technický název položky.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'non-wage-benefits-card-01',
      front: 'Je náhrada mzdy za dovolenou mzdou za práci?',
      back: 'Ne.',
      explanation: 'Nahrazuje příjem za dobu, kdy zaměstnanec nepracoval.',
      skillIds: ['non-wage-payment-classification'],
    },
    {
      id: 'non-wage-benefits-card-02',
      front: 'Je cestovní náhrada součástí mzdy?',
      back: 'Ne, pokud skutečně nahrazuje výdaje podle zákonných podmínek.',
      explanation: 'Musí být oddělena od odměny za práci.',
      skillIds: ['non-wage-payment-classification'],
    },
    {
      id: 'non-wage-benefits-card-03',
      front: 'Je každé nepeněžní plnění zaměstnanci benefitem?',
      back: 'Ne. Může jít o pracovní prostředek nebo naturální mzdu.',
      explanation: 'Rozhoduje účel a právní titul.',
      skillIds: ['payment-purpose-substance'],
    },
    {
      id: 'non-wage-benefits-card-04',
      front:
        'Kolik činí zákonný paušál náhrady nákladů při práci na dálku v roce 2026?',
      back: '4,70 Kč za každou započatou hodinu, pokud je poskytování platně sjednáno nebo stanoveno.',
      explanation: 'Jde o náhradu nákladů, nikoli mzdu.',
      skillIds: ['benefit-document-control'],
    },
  ],
  exercises: [
    {
      id: 'non-wage-benefits-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec dostane 42 000 Kč mzdy a 1 800 Kč prokázané cestovní náhrady. Kolik z uvedeného je mzda?',
      options: [
        {
          id: 'a',
          text: '42 000 Kč.',
        },
        {
          id: 'b',
          text: '43 800 Kč.',
        },
        {
          id: 'c',
          text: '1 800 Kč.',
        },
        {
          id: 'd',
          text: '0 Kč.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['non-wage-payment-classification'],
      explanation: 'Cestovní náhrada není odměnou za práci.',
      commonMistake: 'Sečíst všechny vyplacené částky jako mzdu.',
    },
    {
      id: 'non-wage-benefits-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které položky jsou typicky plněními nemzdové povahy?',
      options: [
        {
          id: 'travel',
          text: 'Cestovní náhrada.',
        },
        {
          id: 'commission',
          text: 'Provize za dosažený pracovní výsledek.',
        },
        {
          id: 'remote',
          text: 'Náhrada nákladů při práci na dálku.',
        },
        {
          id: 'severance',
          text: 'Odstupné.',
        },
        {
          id: 'damage',
          text: 'Náhrada škody.',
        },
      ],
      correctOptionIds: ['travel', 'remote', 'severance', 'damage'],
      skillIds: ['non-wage-payment-classification'],
      explanation: 'Provize je obvykle mzdovou složkou za práci.',
      commonMistake: 'Zařadit provizi mezi náhrady výdajů.',
    },
    {
      id: 'non-wage-benefits-exercise-03',
      type: 'multiple_choice',
      prompt: 'Která plnění se nemají automaticky zařadit jako mzda za práci?',
      options: [
        { id: 'a', text: 'Výkonový bonus.' },
        { id: 'b', text: 'Náhrada prokázaných cestovních výdajů.' },
        { id: 'c', text: 'Příplatek za přesčas.' },
        { id: 'd', text: 'Náhrada nákladů při práci na dálku.' },
        { id: 'e', text: 'Mimořádná odměna za pracovní výsledek.' },
      ],
      correctOptionIds: ['b', 'd'],
      skillIds: ['payment-purpose-substance', 'benefit-document-control'],
      explanation:
        'Náhrady výdajů nejsou odměnou za práci jen proto, že jsou vyplaceny zaměstnavatelem.',
      commonMistake: 'Klasifikovat plnění pouze podle toho, že je peněžní.',
    },
    {
      id: 'non-wage-benefits-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel poskytne notebook výhradně pro výkon práce. Co jde nejspíše za plnění?',
      options: [
        {
          id: 'a',
          text: 'Pracovní prostředek, nikoli automaticky mzda nebo benefit.',
        },
        {
          id: 'b',
          text: 'Vždy naturální mzda.',
        },
        {
          id: 'c',
          text: 'Vždy cestovní náhrada.',
        },
        {
          id: 'd',
          text: 'Vždy čistá mzda.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['payment-purpose-substance'],
      explanation: 'Účelem je umožnit výkon práce, ne odměnit zaměstnance.',
      commonMistake: 'Považovat každou věc předanou zaměstnanci za odměnu.',
    },
    {
      id: 'non-wage-benefits-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá nepeněžní plnění poskytované zaměstnanci za práci za podmínek § 119 zákoníku práce?',
      acceptedAnswers: ['naturální mzda', 'naturalni mzda'],
      ignoreDiacritics: true,
      skillIds: ['payment-purpose-substance'],
      explanation: 'Jde o naturální mzdu.',
      commonMistake: 'Uvést pracovní pomůcka nebo benefit bez posouzení účelu.',
    },
    {
      id: 'non-wage-benefits-exercise-06',
      type: 'single_choice',
      prompt:
        'Každý měsíc se vyplácí 5 000 Kč pod názvem cestovné, ale zaměstnanci nevznikají cestovní výdaje. Co je správně?',
      options: [
        {
          id: 'a',
          text: 'Název položky postačuje.',
        },
        {
          id: 'b',
          text: 'Je nutné přezkoumat skutečný právní důvod a případně ji klasifikovat jako mzdu.',
        },
        {
          id: 'c',
          text: 'Částka se nikdy nedaní.',
        },
        {
          id: 'd',
          text: 'Částka se nemusí evidovat.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payment-purpose-substance'],
      explanation: 'Formální označení nemůže zakrýt skutečnou odměnu za práci.',
      commonMistake: 'Převzít název bez kontroly podkladů.',
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
      title: 'MPSV – Cestovní náhrady',
      url: 'https://ppropo.mpsv.cz/XXIICestovninahrady',
      kind: 'official',
    },
    {
      title: 'MPSV – Náhrady nákladů při výkonu práce na dálku',
      url: 'https://ppropo.mpsv.cz/XXIIINahradynakladuprivykonuprac',
      kind: 'official',
    },
    {
      title:
        'Vyhláška č. 572/2025 Sb. – paušální náhrada práce na dálku pro rok 2026',
      url: 'https://ppropo.mpsv.cz/vyhlaska_572_2025',
      kind: 'official',
    },
    {
      title: 'MPSV – Naturální mzda',
      url: 'https://ppropo.mpsv.cz/xix8naturalnimzda',
      kind: 'official',
    },
  ],
})
