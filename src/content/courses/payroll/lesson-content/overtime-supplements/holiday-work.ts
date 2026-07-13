import { defineLessonContent } from '../define'

export const holidayWorkContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'holiday-schedule-classification',
    'holiday-work-compensation',
    'holiday-time-splitting',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Neodpracovaný svátek, práce ve svátek, náhradní volno a sváteční příplatek ve mzdové, platové a dohodové sféře ověřené podle českého zákoníku práce pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nejprve zjisti, zda byla na svátek rozvržena směna',
    },
    {
      type: 'paragraph',
      text: 'Mzdový režim svátku závisí na konkrétním rozvrhu zaměstnance. Stejný kalendářní svátek může pro jednoho zaměstnance znamenat neodpracovanou plánovanou směnu, pro druhého skutečnou práci ve svátek a pro třetího běžný den bez směny.',
    },
    {
      type: 'heading',
      text: 'Tři základní situace',
    },
    {
      type: 'list',
      items: [
        'svátek připadl na obvyklý pracovní den a zaměstnanec nepracoval',
        'zaměstnanec ve svátek skutečně pracoval',
        'svátek připadl na den, na který zaměstnanec neměl rozvrženu směnu',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Svátek se nesmí zpracovat jen podle kalendáře firmy. Vždy se porovnává s individuálním rozvrhem konkrétního pracovního vztahu.',
    },
    {
      type: 'heading',
      text: 'Neodpracovaný svátek ve mzdové sféře',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci, který nepracoval proto, že svátek připadl na jeho obvyklý pracovní den, přísluší náhrada mzdy ve výši průměrného výdělku nebo jeho části za mzdu nebo část mzdy, která mu v důsledku svátku ušla.',
    },
    {
      type: 'paragraph',
      text: 'U měsíční mzdy může být mzda stanovena tak, že se kvůli svátku nekrátí. V takovém případě se musí ověřit, zda zaměstnanci vůbec nějaká mzda ušla; nelze automaticky přidat další náhradu nad nezkrácenou měsíční mzdu.',
    },
    {
      type: 'example',
      title: 'Hodinově odměňovaný zaměstnanec nepracuje ve svátek',
      situation:
        'Na pondělí je rozvržena osmihodinová směna, ale pondělí je svátek. Průměrný hodinový výdělek činí 300 Kč.',
      solution:
        'Zaměstnanec nepracoval kvůli svátku a ušla mu mzda za 8 hodin. Náhrada mzdy činí 8 × 300 = 2 400 Kč.',
    },
    {
      type: 'example',
      title: 'Svátek připadne na rozvrhové volno',
      situation:
        'Zaměstnanec v nerovnoměrném provozu nemá na sváteční pondělí rozvrženu směnu.',
      solution:
        'Nevznikla zameškaná směna ani práce ve svátek. Samotný kalendářní svátek nevytváří náhradu za neexistující rozvrženou pracovní dobu.',
    },
    {
      type: 'heading',
      text: 'Neodpracovaný svátek v platové sféře',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci odměňovanému platem, který nepracoval proto, že svátek připadl na jeho obvyklý pracovní den, se plat nekrátí. Nevytváří se vedle nezkráceného platu další samostatný sváteční příplatek.',
    },
    {
      type: 'heading',
      text: 'Práce ve svátek ve mzdové sféře',
    },
    {
      type: 'paragraph',
      text: 'Za dobu práce ve svátek přísluší zaměstnanci dosažená mzda a přednostně náhradní volno v rozsahu práce konané ve svátek. Za dobu čerpání náhradního volna přísluší náhrada mzdy ve výši průměrného výdělku.',
    },
    {
      type: 'definition',
      term: 'Náhradní volno za práci ve svátek',
      definition:
        'Placené pracovní volno ve stejném rozsahu, v jakém zaměstnanec skutečně pracoval ve svátek.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Náhradní volno za práci ve svátek je placené náhradou mzdy. Tím se liší od náhradního volna za přesčas ve mzdové sféře.',
    },
    {
      type: 'heading',
      text: 'Lhůta náhradního volna za svátek',
    },
    {
      type: 'paragraph',
      text: 'Náhradní volno se poskytne nejpozději do konce třetího kalendářního měsíce následujícího po výkonu práce ve svátek nebo v jiné době dohodnuté se zaměstnancem.',
    },
    {
      type: 'heading',
      text: 'Příplatek místo náhradního volna',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel se může se zaměstnancem dohodnout, že místo náhradního volna poskytne k dosažené mzdě příplatek nejméně ve výši průměrného výdělku. Jde tedy nejméně o 100 % průměrného hodinového výdělku za sváteční hodinu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Příplatek místo náhradního volna vyžaduje dohodu. Zaměstnavatel nemá jednostranně zaměnit přednostní náhradní volno za peněžní příplatek.',
    },
    {
      type: 'example',
      title: 'Práce ve svátek s náhradním volnem',
      situation:
        'Hodinová mzda činí 240 Kč, průměrný hodinový výdělek 300 Kč a zaměstnanec pracuje ve svátek 8 hodin.',
      solution:
        'Za práci náleží dosažená mzda 8 × 240 = 1 920 Kč. Zaměstnanec dále dostane 8 hodin náhradního volna a při jeho čerpání náhradu mzdy 8 × 300 = 2 400 Kč.',
    },
    {
      type: 'example',
      title: 'Práce ve svátek s příplatkem',
      situation:
        'Stejné vstupy, ale zaměstnavatel a zaměstnanec se dohodnou na příplatku místo náhradního volna.',
      solution:
        'Dosažená mzda činí 1 920 Kč a minimální sváteční příplatek 8 × 300 = 2 400 Kč. Celkové plnění za sváteční práci ze zadaných položek činí 4 320 Kč.',
    },
    {
      type: 'heading',
      text: 'Práce ve svátek v platové sféře',
    },
    {
      type: 'paragraph',
      text: 'Za práci ve svátek se zaměstnanci odměňovanému platem přednostně poskytne náhradní volno ve stejném rozsahu. Za dobu čerpání se plat nekrátí.',
    },
    {
      type: 'paragraph',
      text: 'Po dohodě lze místo náhradního volna poskytnout příplatek ve výši průměrného hodinového výdělku za každou hodinu práce ve svátek.',
    },
    {
      type: 'example',
      title: 'Platová sféra a peněžní varianta',
      situation:
        'Zaměstnanec odměňovaný platem pracuje ve svátek 5 hodin a průměrný hodinový výdělek činí 320 Kč. Strany se dohodnou na příplatku.',
      solution:
        'Sváteční příplatek činí 5 × 320 = 1 600 Kč. Vedle něj zaměstnanci náleží běžný plat podle platových pravidel.',
    },
    {
      type: 'heading',
      text: 'Kalendářní hranice svátku',
    },
    {
      type: 'paragraph',
      text: 'Svátek se posuzuje podle kalendářního času od 00:00 do 24:00. Směna přes půlnoc se rozdělí na část ve svátek a část mimo svátek.',
    },
    {
      type: 'example',
      title: 'Noční směna končící ve svátek',
      situation:
        'Směna začíná den před svátkem ve 22:00 a končí ve svátek v 6:00.',
      solution:
        'Práce ve svátek činí 6 hodin od 00:00 do 6:00. Celých 8 hodin je současně noční prací.',
    },
    {
      type: 'example',
      title: 'Noční směna začínající ve svátek',
      situation:
        'Směna začíná ve svátek ve 22:00 a končí následující den v 6:00.',
      solution:
        'Práce ve svátek činí 2 hodiny od 22:00 do 24:00. Celých 8 hodin je noční prací.',
    },
    {
      type: 'heading',
      text: 'Svátek a práce přesčas',
    },
    {
      type: 'paragraph',
      text: 'Práce ve svátek není automaticky prací přesčas. Pokud byla směna řádně rozvržena, jde o práci ve svátek v rámci rozvrhu. Přesčas vznikne jen při samostatném splnění přesčasových znaků.',
    },
    {
      type: 'example',
      title: 'Rozvržená sváteční směna',
      situation:
        'Zaměstnanec v nepřetržitém provozu má předem rozvrženu osmihodinovou směnu na svátek.',
      solution:
        'Jde o práci ve svátek, nikoli automaticky o přesčas. Zaměstnanec dostane sváteční vypořádání podle své sféry.',
    },
    {
      type: 'example',
      title: 'Sváteční směna prodloužená mimo rozvrh',
      situation:
        'Na svátek je rozvržena směna 6:00–14:00. Se souhlasem zaměstnavatele zaměstnanec pracuje do 17:00 a tři hodiny splní podmínky přesčasu.',
      solution:
        'Všech 11 hodin je prací ve svátek. Poslední 3 hodiny jsou zároveň prací přesčas, takže se posoudí obě zvýhodnění.',
    },
    {
      type: 'heading',
      text: 'Svátek v sobotu nebo v neděli',
    },
    {
      type: 'paragraph',
      text: 'Připadne-li svátek na sobotu nebo neděli a zaměstnanec skutečně pracuje, může stejná hodina zakládat sváteční i víkendové zvýhodnění. Obě kategorie se evidují samostatně.',
    },
    {
      type: 'heading',
      text: 'DPP a DPČ',
    },
    {
      type: 'paragraph',
      text: 'Právní úprava mzdy, náhradního volna nebo náhrady mzdy za svátek se používá obdobně také pro odměnu z DPP a DPČ. Odměna z dohody se pro tyto účely posuzuje jako mzda.',
    },
    {
      type: 'heading',
      text: 'Práce ve dnech pracovního klidu',
    },
    {
      type: 'paragraph',
      text: 'Možnost nařídit práci ve svátek je omezena zákoníkem práce. Mzdová účetní sice nerozhoduje o provozním oprávnění, ale má upozornit na situaci, kdy podklad neobsahuje důvod nebo schválení práce ve svátek.',
    },
    {
      type: 'heading',
      text: 'Podklad pro mzdové zpracování',
    },
    {
      type: 'list',
      items: [
        'konkrétní kalendářní svátek',
        'platný rozvrh směny',
        'skutečný čas práce rozdělený přes půlnoc',
        'mzdová, platová nebo dohodová sféra',
        'dosažená mzda nebo plat',
        'průměrný hodinový výdělek',
        'dohoda o příplatku místo náhradního volna',
        'termín a čerpání náhradního volna',
        'souběh přesčasu, noci a víkendu',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'přiznat náhradu zaměstnanci bez rozvržené směny',
        'zaměnit neodpracovaný svátek a práci ve svátek',
        'přidat náhradu k měsíční mzdě, která se již nekrátila',
        'vyplatit pouze příplatek bez dosažené mzdy',
        'považovat náhradní volno za svátek za neplacené',
        'zaměnit svátek za celý pracovní den směny přes půlnoc',
        'považovat každou sváteční směnu za přesčas',
        'nezachytit souběh svátku a víkendu',
        'nepoužít pravidla svátku u DPP nebo DPČ',
      ],
    },
    {
      type: 'summary',
      items: [
        'Svátek se vždy porovnává s individuálním rozvrhem zaměstnance.',
        'Při neodpracovaném svátku ve mzdové sféře se nahrazuje skutečně ušlá mzda; v platové sféře se plat nekrátí.',
        'Za práci ve svátek náleží dosažená odměna a přednostně placené náhradní volno.',
        'Po dohodě lze místo volna poskytnout příplatek nejméně 100 % průměrného výdělku.',
        'Sváteční, přesčasové, noční a víkendové zvýhodnění se mohou překrývat.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'holiday-work-card-01',
      front: 'Co je prvním krokem při zpracování svátku?',
      back: 'Ověřit individuální rozvrh zaměstnance.',
      explanation:
        'Bez rozvrhu nelze určit zameškanou ani odpracovanou sváteční dobu.',
      skillIds: ['holiday-schedule-classification'],
    },
    {
      id: 'holiday-work-card-02',
      front: 'Jaké je přednostní vypořádání práce ve svátek?',
      back: 'Náhradní volno v rozsahu práce ve svátek.',
      explanation:
        'Ve mzdové sféře je volno placeno náhradou mzdy, v platové sféře se plat nekrátí.',
      skillIds: ['holiday-work-compensation'],
    },
    {
      id: 'holiday-work-card-03',
      front: 'Jak vysoký je příplatek místo náhradního volna za svátek?',
      back: 'Nejméně 100 % průměrného hodinového výdělku.',
      explanation: 'Peněžní varianta vyžaduje dohodu.',
      skillIds: ['holiday-work-compensation'],
    },
    {
      id: 'holiday-work-card-04',
      front:
        'Kolik svátečních hodin má směna od 22:00 ve svátek do 6:00 následujícího dne?',
      back: '2 hodiny.',
      explanation: 'Svátek končí o půlnoci.',
      skillIds: ['holiday-time-splitting'],
    },
  ],
  exercises: [
    {
      id: 'holiday-work-exercise-01',
      type: 'single_choice',
      prompt:
        'Hodinově odměňovaný zaměstnanec měl na svátek rozvrženu směnu v délce 6,5 hodiny, ale kvůli svátku nepracoval. Průměrný hodinový výdělek činí 286 Kč a celá směna představuje ušlou mzdu. Jaká náhrada mzdy mu náleží?',
      options: [
        {
          id: 'a',
          text: '929,50 Kč.',
        },
        {
          id: 'b',
          text: '1 716 Kč.',
        },
        {
          id: 'c',
          text: '1 859 Kč.',
        },
        {
          id: 'd',
          text: '2 288 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['holiday-schedule-classification'],
      explanation:
        'Náhrada odpovídá zameškané rozvržené době: 6,5 × 286 = 1 859 Kč.',
      commonMistake:
        'Použít délku standardní osmihodinové směny místo skutečného rozvrhu.',
    },
    {
      id: 'holiday-work-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které položky náleží ve mzdové sféře při práci ve svátek s příplatkem místo volna?',
      options: [
        {
          id: 'wage',
          text: 'Dosažená mzda.',
        },
        {
          id: 'supplement',
          text: 'Příplatek nejméně 100 % průměrného výdělku.',
        },
        {
          id: 'leave',
          text: 'Současně ještě povinné náhradní volno.',
        },
        {
          id: 'other',
          text: 'Případná další souběžná zvýhodnění.',
        },
      ],
      correctOptionIds: ['wage', 'supplement', 'other'],
      skillIds: ['holiday-work-compensation'],
      explanation: 'Příplatek po dohodě nahrazuje sváteční náhradní volno.',
      commonMistake: 'Přiznat zároveň plný příplatek i stejné náhradní volno.',
    },
    {
      id: 'holiday-work-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování svátku.',
      steps: [
        {
          id: 'calendar',
          text: 'Určit kalendářní hranici svátku.',
        },
        {
          id: 'schedule',
          text: 'Ověřit rozvrženou směnu.',
        },
        {
          id: 'actual',
          text: 'Zjistit skutečně odpracované hodiny.',
        },
        {
          id: 'sphere',
          text: 'Určit mzdovou, platovou nebo dohodovou sféru.',
        },
        {
          id: 'settlement',
          text: 'Ověřit náhradní volno nebo dohodnutý příplatek.',
        },
        {
          id: 'overlap',
          text: 'Zachytit souběh dalších režimů.',
        },
      ],
      correctOrder: [
        'calendar',
        'schedule',
        'actual',
        'sphere',
        'settlement',
        'overlap',
      ],
      skillIds: ['holiday-schedule-classification', 'holiday-time-splitting'],
      explanation:
        'Výpočet vychází z kalendářního času, rozvrhu a skutečnosti.',
      commonMistake: 'Použít celý údaj směny bez rozdělení přes půlnoc.',
    },
    {
      id: 'holiday-work-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec pracuje ve svátek 5,5 hodiny. Průměrný hodinový výdělek činí 318 Kč a zaměstnanec se zaměstnavatelem se dohodli na příplatku místo náhradního volna. Kolik činí minimální sváteční příplatek?',
      options: [
        {
          id: 'a',
          text: '437,25 Kč.',
        },
        {
          id: 'b',
          text: '874,50 Kč.',
        },
        {
          id: 'c',
          text: '1 749 Kč.',
        },
        {
          id: 'd',
          text: '3 498 Kč.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['holiday-work-compensation'],
      explanation:
        'Příplatek činí nejméně 100 % průměrného výdělku: 5,5 × 318 = 1 749 Kč.',
      commonMistake:
        'Použít přesčasovou nebo noční sazbu místo 100% sváteční sazby.',
    },
    {
      id: 'holiday-work-exercise-05',
      type: 'short_text',
      prompt:
        'Kolik procent průměrného výdělku činí minimální příplatek za svátek místo náhradního volna?',
      acceptedAnswers: ['100 %', '100 procent', 'sto procent'],
      ignoreDiacritics: true,
      skillIds: ['holiday-work-compensation'],
      explanation:
        'Příplatek činí nejméně průměrný hodinový výdělek za každou sváteční hodinu.',
      commonMistake: 'Uvést 25 %.',
    },
    {
      id: 'holiday-work-exercise-06',
      type: 'single_choice',
      prompt:
        'Směna začíná ve svátek ve 20:30 a končí následující den ve 2:30. Běžná nezapočitatelná přestávka proběhne ve svátek od 23:30 do 24:00. Kolik hodin skutečné práce připadá na svátek?',
      options: [
        {
          id: 'a',
          text: '2,5 hodiny.',
        },
        {
          id: 'b',
          text: '3 hodiny.',
        },
        {
          id: 'c',
          text: '3,5 hodiny.',
        },
        {
          id: 'd',
          text: '6 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['holiday-time-splitting'],
      explanation:
        'Kalendářní úsek svátku od 20:30 do 24:00 má 3,5 hodiny. Po odečtení třicetiminutové přestávky zbývají 3 hodiny práce ve svátek.',
      commonMistake:
        'Započítat celou směnu nebo neodečíst nezapočitatelnou přestávku.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'Zákon č. 245/2000 Sb., o státních svátcích – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2000/245',
      kind: 'official',
    },
    {
      title: 'MPSV – Mzda, náhradní volno nebo náhrada mzdy za svátek',
      url: 'https://ppropo.mpsv.cz/xix4mzdanahradnivolnonebonahrada',
      kind: 'official',
    },
    {
      title: 'MPSV – Plat nebo náhradní volno za práci ve svátek',
      url: 'https://ppropo.mpsv.cz/XX811Platnebonahradnivolnozaprac',
      kind: 'official',
    },
    {
      title: 'MPSV – Obecná ustanovení o mzdě, platu a odměně z dohod',
      url: 'https://ppropo.mpsv.cz/XVIIIObecnaustanoveniomzdeplatua',
      kind: 'official',
    },
  ],
})
