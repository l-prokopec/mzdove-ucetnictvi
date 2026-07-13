import { defineLessonContent } from '../define'

export const weekendWorkContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'weekend-time-classification',
    'weekend-supplement-calculation',
    'weekend-overlap-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Práce v kalendářní sobotu a neděli a příplatky ve mzdové, platové a dohodové sféře ověřené podle českého zákoníku práce pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Víkend se určuje podle kalendáře',
    },
    {
      type: 'paragraph',
      text: 'Prací v sobotu nebo v neděli je skutečný výkon práce v kalendářní sobotu od 00:00 do 24:00 nebo v kalendářní neděli od 00:00 do 24:00. Rozvrh zaměstnance nerozhoduje o tom, zda je den sobotou nebo nedělí.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Víkendový příplatek náleží i tehdy, je-li sobotní nebo nedělní směna běžnou předem rozvrženou směnou zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Rozvrhové volno není totéž co víkend',
    },
    {
      type: 'paragraph',
      text: 'Den nepřetržitého odpočinku může u směnného zaměstnance připadnout na jiný den než sobotu nebo neděli. Víkendový příplatek se přesto váže na kalendářní sobotu a neděli.',
    },
    {
      type: 'example',
      title: 'Běžná sobotní směna',
      situation:
        'Zaměstnanec v obchodě má předem rozvrženu směnu v sobotu 8:00–16:30 s třicetiminutovou nezapočitatelnou přestávkou.',
      solution:
        'Jde o 8 hodin práce v sobotu. Směna není automaticky přesčasem, ale náleží za ni víkendové zvýhodnění.',
    },
    {
      type: 'heading',
      text: 'Směna přes půlnoc',
    },
    {
      type: 'paragraph',
      text: 'Směna zasahující do soboty nebo neděle se rozdělí podle kalendářních hranic. Celá směna se nepřiřazuje pouze dni, ve kterém začala.',
    },
    {
      type: 'example',
      title: 'Pátek do soboty',
      situation:
        'Zaměstnanec pracuje v pátek 20:00 až sobotu 4:00 bez nezapočitatelné přestávky.',
      solution:
        'Čtyři hodiny od sobotní půlnoci do 4:00 jsou prací v sobotu. Úsek 20:00–24:00 v pátek není víkendovou prací.',
    },
    {
      type: 'example',
      title: 'Neděle do pondělí',
      situation: 'Směna trvá v neděli 22:00 až pondělí 6:00.',
      solution:
        'Dvě hodiny od 22:00 do půlnoci jsou prací v neděli. Zbývajících šest hodin v pondělí není víkendovou prací. Celá směna je současně noční prací.',
    },
    {
      type: 'heading',
      text: 'Mzdová sféra',
    },
    {
      type: 'paragraph',
      text: 'Za dobu práce v sobotu a v neděli přísluší zaměstnanci dosažená mzda a příplatek nejméně ve výši 10 % průměrného výdělku. Pro výpočet se používá průměrný hodinový výdělek.',
    },
    {
      type: 'paragraph',
      text: 'Je možné sjednat jinou minimální výši a způsob určení příplatku. Odchylné pravidlo musí být skutečně sjednáno; jednostranný mzdový výměr nemá bez dalšího nahradit zákonné minimum.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Bez platného odchylného ujednání použij nejméně 10 % průměrného hodinového výdělku.',
    },
    {
      type: 'example',
      title: 'Sobotní příplatek ve mzdové sféře',
      situation:
        'Zaměstnanec odpracuje v sobotu 8 hodin. Průměrný hodinový výdělek činí 300 Kč a není sjednáno jiné pravidlo.',
      solution:
        'Minimální příplatek činí 8 × 300 × 10 % = 240 Kč. Dosažená mzda za práci se zúčtuje samostatně.',
    },
    {
      type: 'heading',
      text: 'Platová sféra',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci odměňovanému platem přísluší za hodinu práce v sobotu nebo v neděli příplatek ve výši 25 % průměrného hodinového výdělku.',
    },
    {
      type: 'paragraph',
      text: 'Příplatek náleží bez ohledu na to, zda sobota nebo neděle byla podle harmonogramu pracovním dnem nebo dnem nepřetržitého odpočinku.',
    },
    {
      type: 'example',
      title: 'Nedělní příplatek v platové sféře',
      situation:
        'Zaměstnanec odpracuje v neděli 7,5 hodiny. Průměrný hodinový výdělek činí 320 Kč.',
      solution: 'Příplatek činí 7,5 × 320 × 25 % = 600 Kč.',
    },
    {
      type: 'heading',
      text: 'DPP a DPČ',
    },
    {
      type: 'paragraph',
      text: 'Pravidla mzdy za práci v sobotu a v neděli se používají obdobně také pro odměnu z DPP a DPČ. Odměna z dohody se pro tento účel posuzuje jako mzda.',
    },
    {
      type: 'paragraph',
      text: 'Odměnu z dohody lze sjednat již s přihlédnutím k práci v sobotu a neděli jen tehdy, je-li sjednán rozsah takové práce a výše příplatku, který by jinak náležel.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Neurčitá věta odměna zahrnuje víkendové příplatky není dostatečným podkladem bez sjednaného rozsahu a hodnoty.',
    },
    {
      type: 'heading',
      text: 'Sobota, neděle a přesčas',
    },
    {
      type: 'paragraph',
      text: 'Víkendová práce není automaticky přesčasem. Řádně rozvržená sobotní nebo nedělní směna je běžnou pracovní dobou s víkendovým příplatkem. Přesčas se posoudí samostatně.',
    },
    {
      type: 'example',
      title: 'Rozvržená nedělní směna',
      situation:
        'Zaměstnanec má v nepřetržitém provozu předem rozvrženu nedělní směnu 6:00–18:00.',
      solution:
        'Jde o práci v neděli, nikoli automaticky o přesčas. Za čistou odpracovanou dobu vzniká víkendové zvýhodnění.',
    },
    {
      type: 'example',
      title: 'Sobotní přesčas',
      situation:
        'Zaměstnanec s běžným rozvrhem pondělí až pátek na příkaz zaměstnavatele pracuje v sobotu 4 hodiny a hodiny splní definici přesčasu.',
      solution:
        'Čtyři hodiny jsou současně prací v sobotu a přesčasem. Zpracují se oba příplatky a dosažená mzda.',
    },
    {
      type: 'heading',
      text: 'Sobota, neděle a noční práce',
    },
    {
      type: 'paragraph',
      text: 'Noční směna často přechází přes kalendářní hranici víkendu. Každá hodina se označí podle skutečného data i nočního intervalu.',
    },
    {
      type: 'example',
      title: 'Páteční noc',
      situation: 'Práce probíhá v pátek 22:00 až sobotu 6:00.',
      solution:
        'Všech 8 hodin je noční prací a 6 hodin od půlnoci do 6:00 je současně prací v sobotu.',
    },
    {
      type: 'heading',
      text: 'Víkend a svátek',
    },
    {
      type: 'paragraph',
      text: 'Připadne-li svátek na sobotu nebo neděli, práce může současně zakládat víkendové i sváteční zvýhodnění. Sváteční režim nenahrazuje víkendový příplatek.',
    },
    {
      type: 'example',
      title: 'Práce v nedělní svátek',
      situation:
        'Zaměstnanec pracuje v neděli, která je současně státním svátkem, od 8:00 do 12:00.',
      solution:
        'Všechny 4 hodiny se označí jako práce v neděli i práce ve svátek. Případný přesčas se posoudí ještě samostatně.',
    },
    {
      type: 'heading',
      text: 'Den týdenního odpočinku v platové sféře',
    },
    {
      type: 'paragraph',
      text: 'U platového přesčasu se 50% přesčasová sazba váže na den nepřetržitého odpočinku zaměstnance, nikoli automaticky na sobotu nebo neděli. Víkendový příplatek 25 % se naopak váže na kalendářní sobotu a neděli.',
    },
    {
      type: 'example',
      title: 'Úterní den týdenního odpočinku',
      situation:
        'Směnný zaměstnanec odměňovaný platem má nepřetržitý odpočinek v úterý a vykoná v úterý potvrzený přesčas.',
      solution:
        'Přesčasový příplatek se posoudí sazbou 50 % jako práce v den týdenního odpočinku. Víkendový příplatek nevznikne, protože nejde o sobotu ani neděli.',
    },
    {
      type: 'heading',
      text: 'Zlomky hodin',
    },
    {
      type: 'paragraph',
      text: 'Příplatek náleží i za zlomky hodin. Evidence musí uchovat skutečný čas práce a přestávek.',
    },
    {
      type: 'example',
      title: 'Devadesát minut v neděli',
      situation:
        'Ve mzdové sféře zaměstnanec pracuje v neděli 1,5 hodiny a průměrný výdělek činí 280 Kč.',
      solution: 'Minimální příplatek činí 1,5 × 280 × 10 % = 42 Kč.',
    },
    {
      type: 'heading',
      text: 'Podklad pro zpracování',
    },
    {
      type: 'list',
      items: [
        'skutečné datum a čas práce',
        'rozdělení směny přes půlnoc',
        'započitatelné a nezapočitatelné přestávky',
        'mzdová, platová nebo dohodová sféra',
        'průměrný hodinový výdělek',
        'odchylné smluvní ujednání',
        'souběh s nocí, svátkem a přesčasem',
        'u platového přesčasu také den týdenního odpočinku',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'přiznat příplatek podle rozvrhového volna místo kalendáře',
        'nepřiznat příplatek za běžnou rozvrženou sobotní směnu',
        'přiřadit celou směnu dni jejího začátku',
        'zaměnit 10% mzdovou a 25% platovou sazbu',
        'považovat víkendovou práci automaticky za přesčas',
        'nezachytit souběh noci, svátku a přesčasu',
        'zaměnit den týdenního odpočinku a kalendářní víkend',
        'ignorovat zlomky hodin',
      ],
    },
    {
      type: 'summary',
      items: [
        'Práce v sobotu a neděli se určuje podle kalendářního času.',
        'Příplatek náleží i za běžnou rozvrženou víkendovou směnu.',
        'Ve mzdové sféře činí zákonné minimum 10 %, v platové sféře 25 % průměrného hodinového výdělku.',
        'Pravidla se obdobně používají i u DPP a DPČ.',
        'Víkendová práce se může překrývat s nocí, svátkem a přesčasem.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'weekend-work-card-01',
      front: 'Podle čeho se určuje práce v sobotu a neděli?',
      back: 'Podle kalendářního data a skutečného času práce.',
      explanation: 'Rozvrhové volno může připadnout na jiný den.',
      skillIds: ['weekend-time-classification'],
    },
    {
      id: 'weekend-work-card-02',
      front:
        'Jaký je minimální víkendový příplatek ve mzdové sféře bez jiné dohody?',
      back: '10 % průměrného hodinového výdělku.',
      explanation: 'Dosažená mzda náleží samostatně.',
      skillIds: ['weekend-supplement-calculation'],
    },
    {
      id: 'weekend-work-card-03',
      front: 'Jaký je víkendový příplatek v platové sféře?',
      back: '25 % průměrného hodinového výdělku.',
      explanation: 'Váže se na kalendářní sobotu a neděli.',
      skillIds: ['weekend-supplement-calculation'],
    },
    {
      id: 'weekend-work-card-04',
      front: 'Je rozvržená sobotní směna automaticky přesčasem?',
      back: 'Ne.',
      explanation: 'Přesčas vyžaduje samostatné splnění zákonných znaků.',
      skillIds: ['weekend-overlap-control'],
    },
  ],
  exercises: [
    {
      id: 'weekend-work-exercise-01',
      type: 'single_choice',
      prompt:
        'Směna trvá od soboty 21:30 do neděle 5:30. Běžná nezapočitatelná přestávka proběhne v neděli od 1:00 do 1:30. Kolik hodin skutečné práce připadá na neděli?',
      options: [
        {
          id: 'a',
          text: '4,5 hodiny.',
        },
        {
          id: 'b',
          text: '5 hodin.',
        },
        {
          id: 'c',
          text: '5,5 hodiny.',
        },
        {
          id: 'd',
          text: '8 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['weekend-time-classification'],
      explanation:
        'Nedělní interval od 00:00 do 5:30 má 5,5 hodiny. Po odečtení půlhodinové přestávky zbývá 5 hodin práce v neděli.',
      commonMistake: 'Neodečíst přestávku nebo přiřadit celou směnu sobotě.',
    },
    {
      id: 'weekend-work-exercise-02',
      type: 'multiple_choice',
      prompt: 'Která tvrzení jsou správná?',
      options: [
        {
          id: 'scheduled',
          text: 'Příplatek náleží i za rozvrženou sobotní směnu.',
        },
        {
          id: 'calendar',
          text: 'Rozhoduje kalendářní sobota a neděle.',
        },
        {
          id: 'overlap',
          text: 'Víkendový příplatek může souběžně vzniknout s nočním.',
        },
        {
          id: 'automatic-overtime',
          text: 'Každá víkendová práce je automaticky přesčas.',
        },
        {
          id: 'agreement',
          text: 'Ve mzdové sféře lze sjednat jinou minimální výši a způsob určení.',
        },
      ],
      correctOptionIds: ['scheduled', 'calendar', 'overlap', 'agreement'],
      skillIds: ['weekend-overlap-control'],
      explanation: 'Víkend a přesčas jsou samostatné kategorie.',
      commonMistake: 'Považovat každou práci mimo pondělí až pátek za přesčas.',
    },
    {
      id: 'weekend-work-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování víkendové směny.',
      steps: [
        {
          id: 'actual',
          text: 'Zjistit skutečný čas práce.',
        },
        {
          id: 'split',
          text: 'Rozdělit směnu podle kalendářních dnů.',
        },
        {
          id: 'break',
          text: 'Odečíst nezapočitatelné přestávky.',
        },
        {
          id: 'sphere',
          text: 'Určit odměňovací sféru.',
        },
        {
          id: 'calculate',
          text: 'Vypočítat víkendový příplatek.',
        },
        {
          id: 'overlap',
          text: 'Zachytit souběžné režimy.',
        },
      ],
      correctOrder: [
        'actual',
        'split',
        'break',
        'sphere',
        'calculate',
        'overlap',
      ],
      skillIds: ['weekend-time-classification', 'weekend-overlap-control'],
      explanation: 'Příplatek vychází ze skutečných hodin v sobotu a neděli.',
      commonMistake: 'Použít celý plánovaný čas bez kalendářního rozdělení.',
    },
    {
      id: 'weekend-work-exercise-04',
      type: 'single_choice',
      prompt:
        'Ve mzdové sféře zaměstnanec odpracuje v sobotu 6,5 hodiny. Průměrný hodinový výdělek činí 286 Kč a není sjednáno jiné pravidlo. Kolik činí minimální víkendový příplatek?',
      options: [
        {
          id: 'a',
          text: '92,95 Kč.',
        },
        {
          id: 'b',
          text: '185,90 Kč.',
        },
        {
          id: 'c',
          text: '464,75 Kč.',
        },
        {
          id: 'd',
          text: '1 859 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['weekend-supplement-calculation'],
      explanation: 'Výpočet je 6,5 × 286 × 10 % = 185,90 Kč.',
      commonMistake:
        'Použít platovou sazbu 25 % nebo počítat příplatek z jiné doby.',
    },
    {
      id: 'weekend-work-exercise-05',
      type: 'short_text',
      prompt:
        'Zaměstnanec odměňovaný platem odpracuje v neděli 7,25 hodiny. Jeho průměrný hodinový výdělek činí 344 Kč. Kolik činí nedělní příplatek?',
      acceptedAnswers: [
        '623,50 Kč',
        '623,5 Kč',
        '623,50',
        '623,5',
        '623.50',
        '623.5',
      ],
      ignoreDiacritics: true,
      skillIds: ['weekend-supplement-calculation'],
      explanation:
        'V platové sféře činí příplatek 25 %. Výpočet je 7,25 × 344 × 25 % = 623,50 Kč.',
      commonMistake:
        'Použít mzdovou sazbu 10 % nebo zaokrouhlit dobu na celé hodiny.',
    },
    {
      id: 'weekend-work-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec odpracuje 3 hodiny v kalendářní sobotu, která je současně svátkem. Směna byla předem rozvržena. Jaké časové režimy se musí pro tyto tři hodiny vyhodnotit?',
      options: [
        {
          id: 'a',
          text: 'Pouze práce v sobotu.',
        },
        {
          id: 'b',
          text: 'Pouze práce ve svátek.',
        },
        {
          id: 'c',
          text: 'Práce v sobotu i práce ve svátek; případný přesčas se posoudí ještě samostatně.',
        },
        {
          id: 'd',
          text: 'Automaticky práce přesčas bez dalších příplatků.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['weekend-overlap-control'],
      explanation:
        'Kalendářní sobota a svátek jsou samostatné právní režimy. Rozvržená směna není automaticky přesčasem.',
      commonMistake:
        'Ponechat pouze jedno zvýhodnění nebo považovat víkendovou směnu automaticky za přesčas.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Mzda za práci v sobotu a v neděli',
      url: 'https://ppropo.mpsv.cz/xix7mzdazapracivsobotuavnedeli',
      kind: 'official',
    },
    {
      title: 'MPSV – Příplatek za práci v sobotu a v neděli v platové sféře',
      url: 'https://ppropo.mpsv.cz/XX83Priplatekzapracivsobotuavned',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
    {
      title: 'MPSV – Průměrný výdělek',
      url: 'https://ppropo.mpsv.cz/XXI8Prumernyvydelek',
      kind: 'official',
    },
  ],
})
