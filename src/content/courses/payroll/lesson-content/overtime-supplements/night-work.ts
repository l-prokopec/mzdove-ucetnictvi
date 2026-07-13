import { defineLessonContent } from '../define'

export const nightWorkContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'night-time-classification',
    'night-supplement-calculation',
    'night-work-overlap-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Noční doba, noční práce a příplatky ve mzdové, platové a dohodové sféře ověřené podle českého zákoníku práce pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Noční práce se určuje podle hodin',
    },
    {
      type: 'paragraph',
      text: 'Pro mzdové zvýhodnění se sleduje každá skutečně odpracovaná část v zákonné noční době. Název směny jako noční, večerní nebo odpolední není rozhodující.',
    },
    {
      type: 'definition',
      term: 'Noční doba',
      definition: 'Doba mezi 22:00 a 6:00.',
    },
    {
      type: 'definition',
      term: 'Noční práce',
      definition:
        'Práce skutečně vykonaná v noční době, tedy v kalendářním časovém úseku 22:00–6:00.',
    },
    {
      type: 'heading',
      text: 'Zaměstnanec pracující v noci je jiný pojem',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnancem pracujícím v noci je zaměstnanec, který v noční době pravidelně odpracuje nejméně tři hodiny ze své pracovní doby během 24 hodin po sobě jdoucích v průměru alespoň jednou týdně v příslušném období. Tento status souvisí také s ochranou zdraví a organizací práce.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Pro vznik příplatku není nutné, aby zaměstnanec splnil definici zaměstnance pracujícího v noci. Příplatek náleží i za jednotlivé hodiny nebo zlomky noční práce.',
    },
    {
      type: 'heading',
      text: 'Rozdělení směny přes 22:00',
    },
    {
      type: 'example',
      title: 'Směna 18:00–2:00',
      situation:
        'Zaměstnanec pracuje od 18:00 do 2:00 bez nezapočitatelné přestávky.',
      solution:
        'Noční práce trvá od 22:00 do 2:00, tedy 4 hodiny. Úsek 18:00–22:00 není noční prací.',
    },
    {
      type: 'example',
      title: 'Směna 23:30–6:30',
      situation:
        'Zaměstnanec pracuje od 23:30 do 6:30 bez nezapočitatelné přestávky.',
      solution:
        'Noční práce trvá od 23:30 do 6:00, tedy 6,5 hodiny. Posledních 30 minut od 6:00 do 6:30 není noční prací.',
    },
    {
      type: 'heading',
      text: 'Přestávka uvnitř noční doby',
    },
    {
      type: 'paragraph',
      text: 'Běžná nezapočitatelná přestávka není pracovní dobou, a proto se do hodin noční práce nezahrne. Bezpečnostní přestávka nebo přiměřená doba na jídlo při nepřerušitelné práci se posoudí podle svého režimu.',
    },
    {
      type: 'example',
      title: 'Noční směna s přestávkou',
      situation:
        'Směna trvá 22:00–6:30. Běžná nezapočitatelná přestávka je od 2:00 do 2:30.',
      solution:
        'Kalendářní noční interval 22:00–6:00 má 8 hodin. Po odečtení třicetiminutové přestávky činí noční práce 7,5 hodiny.',
    },
    {
      type: 'heading',
      text: 'Mzdová sféra',
    },
    {
      type: 'paragraph',
      text: 'Za dobu noční práce přísluší zaměstnanci dosažená mzda a příplatek nejméně ve výši 10 % průměrného výdělku. Pro výpočet se používá průměrný hodinový výdělek.',
    },
    {
      type: 'paragraph',
      text: 'Zákon umožňuje sjednat jinou minimální výši a způsob určení nočního příplatku. Odchylné ujednání musí být skutečně sjednáno a nesmí vzniknout pouhým jednostranným přepsáním mzdového kódu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Bez platného odchylného ujednání použij zákonné minimum 10 % průměrného hodinového výdělku.',
    },
    {
      type: 'example',
      title: 'Noční příplatek ve mzdové sféře',
      situation:
        'Zaměstnanec vykoná 6 hodin noční práce. Průměrný hodinový výdělek činí 300 Kč a není sjednáno jiné pravidlo.',
      solution:
        'Minimální noční příplatek činí 6 × 300 × 10 % = 180 Kč. Dosažená mzda za odpracovaný čas náleží samostatně.',
    },
    {
      type: 'heading',
      text: 'Platová sféra',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci odměňovanému platem přísluší za hodinu noční práce příplatek ve výši 20 % průměrného hodinového výdělku. Jde o pevně stanovený nárok, který nelze vyloučit ani snížit.',
    },
    {
      type: 'example',
      title: 'Noční příplatek v platové sféře',
      situation:
        'Zaměstnanec vykoná 6,5 hodiny noční práce a jeho průměrný hodinový výdělek činí 320 Kč.',
      solution: 'Příplatek činí 6,5 × 320 × 20 % = 416 Kč.',
    },
    {
      type: 'heading',
      text: 'DPP a DPČ',
    },
    {
      type: 'paragraph',
      text: 'Pravidla mzdy za noční práci se použijí obdobně také pro odměnu z DPP a DPČ. Odměna z dohody se pro tento účel posuzuje jako mzda.',
    },
    {
      type: 'paragraph',
      text: 'Odměnu z dohody lze sjednat již s přihlédnutím k noční práci pouze tehdy, je-li současně sjednán rozsah noční práce a výše příplatku, který by jinak náležel.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Obecná formulace odměna zahrnuje všechny příplatky nestačí k bezpečnému zpracování noční práce na dohodu.',
    },
    {
      type: 'heading',
      text: 'Noční práce a přesčas',
    },
    {
      type: 'paragraph',
      text: 'Noční práce není automaticky přesčasem. Rozvržená noční směna je běžnou pracovní dobou se samostatným nočním příplatkem. Pokud jsou noční hodiny současně právním přesčasem, náleží obě zvýhodnění.',
    },
    {
      type: 'example',
      title: 'Rozvržená noční směna',
      situation: 'Zaměstnanec má předem rozvrženu směnu 22:00–6:00.',
      solution:
        'Jde o 8 hodin noční práce, nikoli automaticky o přesčas. Přesčas se posoudí jen při splnění samostatných znaků.',
    },
    {
      type: 'example',
      title: 'Noční přesčas',
      situation:
        'Rozvržená směna končí ve 22:00. Na příkaz zaměstnavatele zaměstnanec pracuje do 1:00 a tři hodiny splňují definici přesčasu.',
      solution:
        'Všechny 3 hodiny jsou současně noční prací a prací přesčas. Ve mzdové evidenci se zachytí oba příznaky.',
    },
    {
      type: 'heading',
      text: 'Noční práce a víkend',
    },
    {
      type: 'paragraph',
      text: 'U směny přes půlnoc se sobota a neděle určují podle kalendářního dne. Hodina může být současně noční a víkendová.',
    },
    {
      type: 'example',
      title: 'Páteční noční směna',
      situation: 'Zaměstnanec pracuje v pátek od 22:00 do soboty 6:00.',
      solution:
        'Všech 8 hodin je noční prací. Šest hodin od sobotní půlnoci do 6:00 je současně prací v sobotu.',
    },
    {
      type: 'heading',
      text: 'Noční práce a svátek',
    },
    {
      type: 'paragraph',
      text: 'Pokud noční interval zasahuje do svátku, část v kalendářním svátku se označí také jako práce ve svátek. Není správné přiřadit celou směnu pouze dni jejího začátku.',
    },
    {
      type: 'example',
      title: 'Směna před svátkem',
      situation:
        'Zaměstnanec pracuje od 22:00 dne před svátkem do 6:00 ve svátek.',
      solution:
        'Všech 8 hodin je noční prací a 6 hodin od půlnoci je současně prací ve svátek.',
    },
    {
      type: 'heading',
      text: 'Zlomky hodin',
    },
    {
      type: 'paragraph',
      text: 'Noční příplatek náleží i za zlomky hodin. Evidence musí zachovat skutečné minuty a nesmí je automaticky zaokrouhlit dolů.',
    },
    {
      type: 'example',
      title: 'Čtyřicet pět minut noční práce',
      situation:
        'Práce končí ve 22:45 a průměrný výdělek činí 280 Kč. Ve mzdové sféře není sjednáno jiné pravidlo.',
      solution:
        'Noční doba činí 0,75 hodiny. Příplatek činí 0,75 × 280 × 10 % = 21 Kč.',
    },
    {
      type: 'heading',
      text: 'Ochrana zdraví',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance pracujícího v noci se kontrolují také pracovnělékařské prohlídky, délka směny a bezpečnostní podmínky. Mzdová účetní nerozhoduje o zdravotní způsobilosti, ale má upozornit na chybějící status nebo nesoulad v evidenci.',
    },
    {
      type: 'heading',
      text: 'Podklad pro zpracování',
    },
    {
      type: 'list',
      items: [
        'skutečný začátek a konec práce',
        'kalendářní rozdělení přes půlnoc',
        'přestávky a jejich započitatelnost',
        'mzdová, platová nebo dohodová sféra',
        'průměrný hodinový výdělek',
        'odchylné smluvní ujednání ve mzdové nebo dohodové sféře',
        'souběh s přesčasem, svátkem a víkendem',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat celou večerní směnu za noční',
        'použít název směny místo skutečného času',
        'zahrnout nezapočitatelnou přestávku',
        'vyžadovat tři noční hodiny pro každý příplatek',
        'zaměnit 10% mzdovou a 20% platovou sazbu',
        'ignorovat zlomky hodin',
        'nezachytit souběh soboty, svátku nebo přesčasu',
        'považovat noční směnu automaticky za přesčas',
        'použít neurčité zahrnutí příplatků u dohody',
      ],
    },
    {
      type: 'summary',
      items: [
        'Noční doba je vždy 22:00–6:00.',
        'Příplatek náleží za každou skutečně odpracovanou noční hodinu nebo její zlomek.',
        'Ve mzdové sféře činí zákonné minimum 10 %, v platové sféře 20 % průměrného hodinového výdělku.',
        'Pravidla noční práce se obdobně používají i u DPP a DPČ.',
        'Noční práce se může současně překrývat s přesčasem, víkendem nebo svátkem.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'night-work-card-01',
      front: 'Jaký časový interval je noční dobou?',
      back: '22:00–6:00.',
      explanation: 'Posuzuje se podle skutečného kalendářního času.',
      skillIds: ['night-time-classification'],
    },
    {
      id: 'night-work-card-02',
      front:
        'Jaký je zákonný minimální noční příplatek ve mzdové sféře bez jiného ujednání?',
      back: '10 % průměrného hodinového výdělku.',
      explanation: 'Dosažená mzda náleží samostatně.',
      skillIds: ['night-supplement-calculation'],
    },
    {
      id: 'night-work-card-03',
      front: 'Jaký je noční příplatek v platové sféře?',
      back: '20 % průměrného hodinového výdělku.',
      explanation: 'Jde o pevný zákonný nárok.',
      skillIds: ['night-supplement-calculation'],
    },
    {
      id: 'night-work-card-04',
      front: 'Je rozvržená noční směna automaticky přesčasem?',
      back: 'Ne.',
      explanation: 'Noční práce a přesčas jsou samostatné kategorie.',
      skillIds: ['night-work-overlap-control'],
    },
  ],
  exercises: [
    {
      id: 'night-work-exercise-01',
      type: 'single_choice',
      prompt:
        'Směna trvá od 19:15 do 3:45. Běžná nezapočitatelná přestávka proběhne od 23:30 do 24:00. Kolik hodin skutečné práce je noční prací?',
      options: [
        {
          id: 'a',
          text: '4,75 hodiny.',
        },
        {
          id: 'b',
          text: '5,25 hodiny.',
        },
        {
          id: 'c',
          text: '5,75 hodiny.',
        },
        {
          id: 'd',
          text: '8 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['night-time-classification'],
      explanation:
        'Noční interval 22:00–3:45 trvá 5,75 hodiny. Po odečtení půlhodinové přestávky zbývá 5,25 hodiny noční práce.',
      commonMistake: 'Započítat celou dobu od 19:15 nebo neodečíst přestávku.',
    },
    {
      id: 'night-work-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které příznaky může současně nést jedna hodina práce?',
      options: [
        {
          id: 'night',
          text: 'Noční práce.',
        },
        {
          id: 'exclusive',
          text: 'Vždy pouze jeden příznak.',
        },
        {
          id: 'weekend',
          text: 'Práce v sobotu nebo neděli.',
        },
        {
          id: 'holiday',
          text: 'Práce ve svátek.',
        },
        {
          id: 'overtime',
          text: 'Práce přesčas.',
        },
      ],
      correctOptionIds: ['night', 'weekend', 'holiday', 'overtime'],
      skillIds: ['night-work-overlap-control'],
      explanation: 'Zákonné režimy se mohou překrývat.',
      commonMistake: 'Ponechat pouze příplatek s nejvyšší sazbou.',
    },
    {
      id: 'night-work-exercise-03',
      type: 'single_choice',
      prompt:
        'Zaměstnanec pracuje od 21:30 do 23:15. Která část je noční prací?',
      options: [
        { id: 'a', text: 'Celých 1,75 hodiny.' },
        { id: 'b', text: 'Úsek 22:00–23:15, tedy 1,25 hodiny.' },
        { id: 'c', text: 'Jen 21:30–22:00.' },
        { id: 'd', text: 'Žádná část.' },
      ],
      correctOptionId: 'b',
      skillIds: ['night-time-classification', 'night-work-overlap-control'],
      explanation: 'Noční doba začíná ve 22:00.',
      commonMistake: 'Považovat celou večerní směnu za noční.',
    },
    {
      id: 'night-work-exercise-04',
      type: 'single_choice',
      prompt:
        'Ve mzdové sféře zaměstnanec odpracuje 5,25 hodiny noční práce. Průměrný hodinový výdělek činí 296 Kč a není sjednáno jiné pravidlo. Kolik činí minimální noční příplatek?',
      options: [
        {
          id: 'a',
          text: '77,70 Kč.',
        },
        {
          id: 'b',
          text: '155,40 Kč.',
        },
        {
          id: 'c',
          text: '310,80 Kč.',
        },
        {
          id: 'd',
          text: '1 554 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['night-supplement-calculation'],
      explanation: 'Výpočet je 5,25 × 296 × 10 % = 155,40 Kč.',
      commonMistake:
        'Použít 20% platovou sazbu nebo počítat příplatek z celé odměny.',
    },
    {
      id: 'night-work-exercise-05',
      type: 'short_text',
      prompt:
        'Zaměstnanec odměňovaný platem vykoná 4,75 hodiny noční práce. Jeho průměrný hodinový výdělek činí 328 Kč. Kolik činí noční příplatek?',
      acceptedAnswers: [
        '311,60 Kč',
        '311,6 Kč',
        '311,60',
        '311,6',
        '311.60',
        '311.6',
      ],
      ignoreDiacritics: true,
      skillIds: ['night-supplement-calculation'],
      explanation:
        'V platové sféře činí příplatek 20 %. Výpočet je 4,75 × 328 × 20 % = 311,60 Kč.',
      commonMistake:
        'Použít mzdové minimum 10 % nebo zaokrouhlit dobu na celé hodiny.',
    },
    {
      id: 'night-work-exercise-06',
      type: 'single_choice',
      prompt:
        'Směna trvá v neděli od 23:15 do pondělí 5:45. Kolik hodin je současně noční prací a prací v neděli?',
      options: [
        {
          id: 'a',
          text: '0,75 hodiny.',
        },
        {
          id: 'b',
          text: '5,75 hodiny.',
        },
        {
          id: 'c',
          text: '6,5 hodiny.',
        },
        {
          id: 'd',
          text: '0 hodin.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['night-work-overlap-control'],
      explanation:
        'Současně noční a nedělní je pouze úsek od 23:15 do nedělní půlnoci, tedy 45 minut neboli 0,75 hodiny.',
      commonMistake: 'Přiřadit celou směnu neděli podle dne jejího začátku.',
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
      title: 'MPSV – Mzda za noční práci',
      url: 'https://ppropo.mpsv.cz/xix5mzdazanocnipraci',
      kind: 'official',
    },
    {
      title: 'MPSV – Příplatek za noční práci v platové sféře',
      url: 'https://ppropo.mpsv.cz/XX82Priplatekzanocnipraci',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
  ],
})
