import { defineLessonContent } from '../define'

export const benefitClassificationContent = defineLessonContent({
  moduleId: 'employee-benefits-other-payments',
  skillIds: [
    'benefit-tax-classification',
    'benefit-remuneration-distinction',
    'benefit-rule-versioning',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Klasifikace zaměstnaneckých benefitů, nepeněžních plnění, osvobozených příjmů a příjmů mimo předmět daně ověřená podle českého zákona o daních z příjmů a metodiky Finanční správy pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Benefit není jen název mzdové položky',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanecký benefit je plnění poskytované nad rámec běžné mzdy, platu nebo odměny z dohody, jehož hlavním důvodem není odměna za konkrétní pracovní výkon. Pro mzdové posouzení nerozhoduje marketingový název, ale skutečný obsah, forma, účel, podmínky a právní titul plnění.',
    },
    {
      type: 'definition',
      term: 'Zaměstnanecký benefit',
      definition:
        'Plnění poskytované zaměstnavatelem zaměstnanci nebo za zákonných podmínek jeho rodinnému příslušníkovi v souvislosti s existencí zaměstnání, typicky nad rámec odměny za práci a bez přímé vazby na individuální pracovní výkon.',
    },
    {
      type: 'heading',
      text: 'První otázka: je plnění odměnou za práci?',
    },
    {
      type: 'paragraph',
      text: 'Plnění přímo vázané na pracovní výkon, splnění pracovního cíle, produktivitu, obrat nebo jiný pracovní výsledek je odměnou za práci, i když je poskytnuto nepeněžně nebo je označeno jako benefit. Takové plnění nelze osvobodit jen tím, že zaměstnanec dostane poukaz, věc nebo službu namísto peněz.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Od roku 2026 je v § 6 odst. 9 písm. d) zákona o daních z příjmů výslovně zdůrazněno, že osvobození se nevztahuje na plnění, která jsou mzdou, platem, odměnou ani náhradou za ušlý příjem.',
    },
    {
      type: 'example',
      title: 'Telefon za splnění prodejního cíle',
      situation:
        'Zaměstnanec dostane mobilní telefon do osobního vlastnictví za překročení individuálního prodejního plánu.',
      solution:
        'Plnění je přímo spojeno s pracovním výkonem. Jde o nepeněžní odměnu za práci, nikoli o osvobozený volnočasový benefit. Hodnota se zpracuje jako zdanitelný příjem podle pravidel pro nepeněžní odměnu.',
    },
    {
      type: 'heading',
      text: 'Tři základní daňové kategorie',
    },
    {
      type: 'list',
      items: [
        'zdanitelný příjem ze závislé činnosti',
        'příjem osvobozený od daně při splnění zákonných podmínek',
        'plnění, které není předmětem daně',
      ],
    },
    {
      type: 'definition',
      term: 'Zdanitelný příjem',
      definition:
        'Peněžní nebo nepeněžní majetkový prospěch ze závislé činnosti, který není ze zákona vyňat z předmětu daně ani osvobozen.',
    },
    {
      type: 'definition',
      term: 'Osvobozený příjem',
      definition:
        'Příjem, který do předmětu daně patří, ale zákon jej při splnění přesných podmínek od daně osvobozuje.',
    },
    {
      type: 'definition',
      term: 'Příjem, který není předmětem daně',
      definition:
        'Plnění, které zákon nepovažuje za zdanitelný příjem zaměstnance, například proto, že pouze nahrazuje prokázaný výdaj nebo vytváří pracovní podmínky bez osobního obohacení zaměstnance.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Osvobození a vynětí z předmětu daně jsou odlišné právní výsledky. Ve mzdové evidenci musí mít samostatné kódy a důvod, i když v obou případech nevznikne zdanitelná částka.',
    },
    {
      type: 'heading',
      text: 'Příklady plnění mimo předmět daně',
    },
    {
      type: 'list',
      items: [
        'cestovní náhrada poskytnutá v zákonném režimu',
        'hodnota osobních ochranných pracovních prostředků a pracovního oblečení určeného pro výkon práce',
        'náhrada za opotřebení vlastního nářadí nebo zařízení při splnění zákonných podmínek',
        'částka poskytnutá zaměstnanci jako vyúčtovatelná záloha na výdaj zaměstnavatele',
        'plnění vytvářející pracovní podmínky bez převahy osobního prospěchu zaměstnance',
      ],
    },
    {
      type: 'paragraph',
      text: 'U každé položky je nutné ověřit, zda skutečně splňuje příslušnou zákonnou definici. Formální označení pracovní pomůcka nebo cestovné nestačí, jestliže zaměstnanec věc získává pro soukromou spotřebu nebo žádný pracovní výdaj nevznikl.',
    },
    {
      type: 'example',
      title: 'Notebook pouze pro práci',
      situation:
        'Zaměstnavatel předá zaměstnanci notebook ve vlastnictví zaměstnavatele výhradně pro plnění pracovních úkolů.',
      solution:
        'Jde o pracovní prostředek, nikoli o benefit pro osobní spotřebu. Samotné poskytnutí pracovního zařízení nevytváří zdanitelný příjem zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Příklady typických osvobozených benefitů',
    },
    {
      type: 'paragraph',
      text: 'Zákon osvobozuje jen vymezené druhy plnění a pouze při splnění jejich formy, účelu, zdroje a limitu. V roce 2026 se u nepeněžních benefitů podle § 6 odst. 9 písm. d) odděleně sleduje oblast zdraví a ostatní vyjmenované volnočasové oblasti.',
    },
    {
      type: 'heading',
      text: 'Zdravotní benefity v roce 2026',
    },
    {
      type: 'list',
      items: [
        'zboží nebo služby zdravotního, léčebného, hygienického a obdobného charakteru pořízené od zdravotnických zařízení',
        'zdravotnické prostředky na lékařský předpis',
        'samostatný roční limit 48 967 Kč na zaměstnance u jednoho zaměstnavatele',
      ],
    },
    {
      type: 'paragraph',
      text: 'Osvobození zdravotních benefitů se v roce 2026 sleduje samostatně do výše průměrné mzdy 48 967 Kč. Nadlimitní část je zdanitelným příjmem zaměstnance v období, kdy dojde k překročení.',
    },
    {
      type: 'heading',
      text: 'Ostatní volnočasové benefity v roce 2026',
    },
    {
      type: 'list',
      items: [
        'vzdělávací nebo rekreační zařízení',
        'rekreace a zájezdy',
        'zařízení péče o děti předškolního věku včetně mateřské školy',
        'knihovna zaměstnavatele',
        'tělovýchovná a sportovní zařízení',
        'kulturní a sportovní akce',
        'tištěné knihy splňující zákonné podmínky',
        'samostatný roční limit 24 483,50 Kč na zaměstnance u jednoho zaměstnavatele',
      ],
    },
    {
      type: 'paragraph',
      text: 'Osvobození této skupiny se v roce 2026 sleduje samostatně do poloviny průměrné mzdy, tedy do 24 483,50 Kč. Zdravotní limit a volnočasový limit se neslučují do jedné společné částky.',
    },
    {
      type: 'example',
      title: 'Dva oddělené limity',
      situation:
        'Zaměstnanec v roce 2026 využije nepeněžní zdravotní benefit 30 000 Kč a sportovní a kulturní benefity 20 000 Kč. Všechny ostatní podmínky osvobození jsou splněny.',
      solution:
        'Zdravotní benefit je pod samostatným limitem 48 967 Kč a ostatní benefity jsou pod samostatným limitem 24 483,50 Kč. Obě částky mohou být osvobozeny; nesčítají se do jednoho limitu 73 450,50 Kč pro libovolné použití.',
    },
    {
      type: 'heading',
      text: 'Nepeněžní forma je zásadní',
    },
    {
      type: 'paragraph',
      text: 'U benefitů podle § 6 odst. 9 písm. d) je podmínkou nepeněžní forma. Zaměstnavatel obvykle hradí konkrétní službu nebo zajišťuje přístup prostřednictvím poukazu, karty či smluvního zařízení. Přímé vyplacení peněz zaměstnanci nebo prosté proplacení jeho výdaje tuto podmínku zpravidla nesplňuje.',
    },
    {
      type: 'example',
      title: 'Sportovní karta versus peněžní příspěvek',
      situation:
        'Varianta A: zaměstnavatel poskytne zaměstnanci omezenou sportovní kartu použitelnou jen ve sportovních zařízeních. Varianta B: zaměstnavatel pošle zaměstnanci 3 000 Kč na sport.',
      solution:
        'Varianta A může při splnění dalších podmínek představovat nepeněžní osvobozený benefit. Varianta B je peněžním příjmem a nelze ji osvobodit podle pravidla určeného pro nepeněžní sportovní benefit.',
    },
    {
      type: 'heading',
      text: 'Zdroj financování',
    },
    {
      type: 'paragraph',
      text: 'U osvobození podle § 6 odst. 9 písm. d) se sleduje také zákonný zdroj, například fond kulturních a sociálních potřeb, sociální fond, zisk po zdanění nebo náklad, který není u zaměstnavatele daňově uznatelný. Mzdová účetní nesmí posoudit osvobození bez potvrzení odpovídajícího účetního a interního podkladu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Daňové osvobození zaměstnance neznamená automaticky daňově uznatelný náklad zaměstnavatele. Tyto dvě otázky se posuzují odděleně.',
    },
    {
      type: 'heading',
      text: 'Benefit pro rodinného příslušníka',
    },
    {
      type: 'paragraph',
      text: 'Je-li benefit podle zákona poskytnut rodinnému příslušníkovi zaměstnance, považuje se pro daňové účely za příjem zaměstnance. Jeho hodnota se započítává do ročního limitu konkrétního zaměstnance.',
    },
    {
      type: 'example',
      title: 'Příspěvek na dětský tábor',
      situation:
        'Zaměstnavatel nepeněžně uhradí oprávněnou rekreační službu pro dítě zaměstnance v hodnotě 6 000 Kč.',
      solution:
        'Při splnění dalších podmínek jde o benefit zaměstnance, nikoli dítěte jako samostatného poplatníka. Částka 6 000 Kč se započte do zaměstnancova volnočasového limitu.',
    },
    {
      type: 'heading',
      text: 'Peněžní benefit',
    },
    {
      type: 'paragraph',
      text: 'Peněžní příspěvek může být zaměstnaneckým benefitem v personálním smyslu, ale z daňového hlediska je zpravidla zdanitelným příjmem, pokud pro něj zákon nestanoví zvláštní osvobození. Peněžní forma proto musí mít vlastní právní a daňové posouzení.',
    },
    {
      type: 'heading',
      text: 'Benefit nesmí nahrazovat mzdu',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel nesmí jen přejmenovat část mzdy na benefit, aby se vyhnul zdanění a pojistnému. Pokud plnění nahrazuje sjednanou mzdu, pravidelnou odměnu nebo náhradu za ušlý příjem, jde podle skutečného obsahu o zdanitelnou odměnu.',
    },
    {
      type: 'example',
      title: 'Volba mezi mzdou a poukazem',
      situation:
        'Zaměstnanec si může za splnění cíle vybrat buď 5 000 Kč ve mzdě, nebo poukaz stejné hodnoty na rekreaci.',
      solution:
        'Plnění je vázáno na pracovní výkon a nahrazuje peněžní odměnu. Nepeněžní varianta není automaticky osvobozeným benefitem.',
    },
    {
      type: 'heading',
      text: 'Roční a měsíční evidence',
    },
    {
      type: 'list',
      items: [
        'zaměstnanec a zaměstnavatel',
        'datum poskytnutí nebo vznik nepeněžního příjmu',
        'kategorie benefitu',
        'peněžní nebo nepeněžní forma',
        'hodnota plnění',
        'zdroj financování',
        'část osvobozená',
        'část zdanitelná',
        'kumulace od začátku kalendářního roku',
        'podklad k rodinnému příslušníkovi',
      ],
    },
    {
      type: 'heading',
      text: 'Pravidla musí být verzovaná',
    },
    {
      type: 'paragraph',
      text: 'Limity a podmínky benefitů se mohou měnit mezi kalendářními roky. Mzdový systém i vzdělávací obsah musí uchovávat rok účinnosti, použitou právní verzi a zdroj. Hodnotu roku 2026 nelze bez ověření použít pro rok 2027.',
    },
    {
      type: 'heading',
      text: 'Rozhodovací postup',
    },
    {
      type: 'list',
      items: [
        'zjistit skutečný účel plnění',
        'ověřit vazbu nebo nevazbu na pracovní výkon',
        'určit peněžní nebo nepeněžní formu',
        'určit, zda jde o příjem, osvobození nebo plnění mimo předmět daně',
        'dohledat přesné zákonné ustanovení',
        'ověřit podmínky, zdroj a roční limit',
        'ocenit benefit',
        'rozdělit osvobozenou a zdanitelnou část',
        'uložit použitou právní verzi a kontrolní stopu',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každý benefit za osvobozený',
        'považovat každý nepeněžní příjem za benefit',
        'zaměnit osvobození a vynětí z předmětu daně',
        'spojit zdravotní a volnočasový limit',
        'osvobodit peněžní příspěvek podle pravidla pro nepeněžní plnění',
        'ignorovat benefit poskytnutý rodinnému příslušníkovi',
        'použít limit nesprávného kalendářního roku',
        'zaměnit osvobození zaměstnance za daňovou uznatelnost zaměstnavatele',
      ],
    },
    {
      type: 'summary',
      items: [
        'Benefit se klasifikuje podle skutečného obsahu, nikoli názvu.',
        'Plnění vázané na pracovní výkon je odměnou, i když je nepeněžní.',
        'Je nutné odlišit zdanitelný příjem, osvobozený příjem a plnění mimo předmět daně.',
        'V roce 2026 činí zdravotní limit 48 967 Kč a ostatní volnočasový limit 24 483,50 Kč.',
        'Osvobození vyžaduje splnění formy, účelu, zdroje, ocenění a evidenčních podmínek.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'benefit-classification-card-01',
      front:
        'Je nepeněžní odměna za splnění pracovního cíle automaticky osvobozeným benefitem?',
      back: 'Ne.',
      explanation:
        'Přímá vazba na výkon znamená odměnu za práci bez ohledu na formu.',
      skillIds: ['benefit-remuneration-distinction'],
    },
    {
      id: 'benefit-classification-card-02',
      front: 'Jaký je samostatný limit zdravotních benefitů pro rok 2026?',
      back: '48 967 Kč za kalendářní rok u jednoho zaměstnavatele.',
      explanation: 'Jde o výši průměrné mzdy pro rok 2026.',
      skillIds: ['benefit-tax-classification'],
    },
    {
      id: 'benefit-classification-card-03',
      front:
        'Jaký je samostatný limit ostatních volnočasových benefitů pro rok 2026?',
      back: '24 483,50 Kč.',
      explanation: 'Jde o polovinu průměrné mzdy pro rok 2026.',
      skillIds: ['benefit-tax-classification'],
    },
    {
      id: 'benefit-classification-card-04',
      front: 'Do čího limitu se započte benefit poskytnutý dítěti zaměstnance?',
      back: 'Do limitu zaměstnance.',
      explanation:
        'Příjem rodinného příslušníka se pro tato pravidla považuje za příjem zaměstnance.',
      skillIds: ['benefit-rule-versioning'],
    },
  ],
  exercises: [
    {
      id: 'benefit-classification-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec obdrží poukaz za splnění individuálního výkonového cíle. Jak se plnění základně klasifikuje?',
      options: [
        {
          id: 'a',
          text: 'Jako odměna za práci.',
        },
        {
          id: 'b',
          text: 'Vždy jako osvobozený benefit.',
        },
        {
          id: 'c',
          text: 'Jako cestovní náhrada.',
        },
        {
          id: 'd',
          text: 'Jako plnění mimo předmět daně bez další kontroly.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['benefit-remuneration-distinction'],
      explanation: 'Vazba na pracovní výkon převáží nad nepeněžní formou.',
      commonMistake:
        'Rozhodnout pouze podle toho, že zaměstnanec nedostal peníze.',
    },
    {
      id: 'benefit-classification-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které údaje jsou nutné pro posouzení osvobození nepeněžního benefitu?',
      options: [
        {
          id: 'purpose',
          text: 'Účel plnění.',
        },
        {
          id: 'form',
          text: 'Peněžní nebo nepeněžní forma.',
        },
        {
          id: 'source',
          text: 'Zdroj financování.',
        },
        {
          id: 'limit',
          text: 'Roční kumulace a limit.',
        },
        {
          id: 'marketing',
          text: 'Pouze obchodní název balíčku.',
        },
      ],
      correctOptionIds: ['purpose', 'form', 'source', 'limit'],
      skillIds: ['benefit-tax-classification'],
      explanation:
        'Osvobození je podmíněno více zákonnými znaky, nikoli názvem.',
      commonMistake: 'Kontrolovat pouze kategorii v cafeterii.',
    },
    {
      id: 'benefit-classification-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď klasifikaci nového zaměstnaneckého plnění.',
      steps: [
        {
          id: 'purpose',
          text: 'Zjistit skutečný účel a vazbu na výkon.',
        },
        {
          id: 'form',
          text: 'Určit peněžní nebo nepeněžní formu.',
        },
        {
          id: 'category',
          text: 'Přiřadit daňovou kategorii.',
        },
        {
          id: 'conditions',
          text: 'Ověřit zákonné podmínky a zdroj.',
        },
        {
          id: 'limit',
          text: 'Zkontrolovat roční kumulaci.',
        },
        {
          id: 'record',
          text: 'Zapsat osvobozenou a zdanitelnou část s právní verzí.',
        },
      ],
      correctOrder: [
        'purpose',
        'form',
        'category',
        'conditions',
        'limit',
        'record',
      ],
      skillIds: ['benefit-tax-classification', 'benefit-rule-versioning'],
      explanation: 'Limit se kontroluje až po určení správné právní kategorie.',
      commonMistake:
        'Nejprve použít číselný limit a až potom zjišťovat druh plnění.',
    },
    {
      id: 'benefit-classification-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel vyplatí zaměstnanci 3 000 Kč v hotovosti na sport. Lze částku osvobodit jako nepeněžní sportovní benefit?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, peněžní forma nesplňuje toto osvobození.',
        },
        {
          id: 'c',
          text: 'Ano, pokud zaměstnanec sportuje.',
        },
        {
          id: 'd',
          text: 'Ano, pokud částka nepřesáhne zdravotní limit.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['benefit-tax-classification'],
      explanation: 'Pravidlo pro sportovní benefity vyžaduje nepeněžní plnění.',
      commonMistake: 'Považovat účel sport za jedinou podmínku.',
    },
    {
      id: 'benefit-classification-exercise-05',
      type: 'short_text',
      prompt: 'Jaký je volnočasový limit nepeněžních benefitů pro rok 2026?',
      acceptedAnswers: ['24 483,50 Kč', '24483,50', '24 483.50', '24483.5'],
      ignoreDiacritics: true,
      skillIds: ['benefit-rule-versioning'],
      explanation: 'Jde o polovinu průměrné mzdy 48 967 Kč.',
      commonMistake: 'Uvést zdravotní limit 48 967 Kč.',
    },
    {
      id: 'benefit-classification-exercise-06',
      type: 'single_choice',
      prompt:
        'Nepeněžní rekreační benefit pro dítě zaměstnance se započítá komu?',
      options: [
        {
          id: 'a',
          text: 'Dítěti jako samostatnému zaměstnanci.',
        },
        {
          id: 'b',
          text: 'Zaměstnanci, jehož rodinnému příslušníkovi byl poskytnut.',
        },
        {
          id: 'c',
          text: 'Nikomu.',
        },
        {
          id: 'd',
          text: 'Všem zaměstnancům poměrně.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['benefit-tax-classification'],
      explanation: 'Hodnota plnění se přičítá konkrétnímu zaměstnanci.',
      commonMistake: 'Benefit rodinného příslušníka z evidence vynechat.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 586/1992 Sb., o daních z příjmů – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1992/586',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Obecné informace pro zaměstnance a zaměstnavatele 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Odlišení benefitů od naturální mzdy od roku 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/informace-stanoviska-sdeleni/2025/informace-k-upravenemu-zneni-6-odst-9',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Aktuální dotazy a odpovědi k dani ze závislé činnosti 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/dotazy-a-odpovedi/2026/aktualni-dotazy-a-odpovedi-k-dani-z',
      kind: 'official',
    },
    {
      title: 'Zákon č. 151/1997 Sb., o oceňování majetku – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1997/151',
      kind: 'official',
    },
  ],
})
