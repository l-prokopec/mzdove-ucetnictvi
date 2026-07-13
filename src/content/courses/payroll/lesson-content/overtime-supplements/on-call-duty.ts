import { defineLessonContent } from '../define'

export const onCallDutyContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'standby-work-distinction',
    'standby-remuneration-calculation',
    'standby-callout-overlap',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Pracovní pohotovost, místo jejího držení, odměna a oddělení skutečného výkonu práce ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Pohotovost je připravenost, nikoli výkon práce',
    },
    {
      type: 'paragraph',
      text: 'Pracovní pohotovost umožňuje zaměstnavateli požadovat, aby byl zaměstnanec mimo rozvrženou pracovní dobu připraven k případnému výkonu práce. Dokud k výkonu nedojde, nejde o pracovní dobu.',
    },
    {
      type: 'definition',
      term: 'Pracovní pohotovost',
      definition:
        'Doba, v níž je zaměstnanec připraven k případnému výkonu práce podle pracovní smlouvy na jiném se zaměstnancem dohodnutém místě, než jsou pracoviště zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Pohotovost musí být dohodnuta',
    },
    {
      type: 'paragraph',
      text: 'Pracovní pohotovost může zaměstnavatel požadovat jen po dohodě se zaměstnancem. Dohoda má vymezit alespoň místo, způsob dosažitelnosti, časový rozsah a pravidla povolání k práci.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Jednostranný pokyn buď večer na telefonu bez existující dohody není bezpečným podkladem pro pracovní pohotovost.',
    },
    {
      type: 'heading',
      text: 'Místo mimo pracoviště zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Pohotovost se drží na jiném dohodnutém místě než na pracovišti zaměstnavatele. Zaměstnanec může mít omezenou volnost, ale nesmí být po celou dobu nucen fyzicky setrvávat na pracovišti.',
    },
    {
      type: 'example',
      title: 'Telefonická pohotovost z domova',
      situation:
        'Zaměstnanec se dohodne, že bude v sobotu 8:00–16:00 dosažitelný z domova a v případě incidentu se vzdáleně připojí.',
      solution:
        'Čas bez výkonu může být pracovní pohotovostí. Skutečné vzdálené řešení incidentu se z pohotovosti vyjme a eviduje jako pracovní doba.',
    },
    {
      type: 'heading',
      text: 'Čekání na pracovišti',
    },
    {
      type: 'paragraph',
      text: 'Jestliže zaměstnavatel vyžaduje přítomnost zaměstnance na pracovišti a připravenost okamžitě pracovat, nejde o pracovní pohotovost mimo pracovní dobu, ale o pracovní dobu nebo jiný režim, který musí být podle skutečného obsahu posouzen.',
    },
    {
      type: 'example',
      title: 'Technik čeká v serverovně',
      situation:
        'Technik musí od 18:00 do 22:00 sedět v serverovně zaměstnavatele a okamžitě zasáhnout.',
      solution:
        'Nelze celý interval označit pouze jako pohotovost s 10% odměnou. Povinná přítomnost na pracovišti odpovídá pracovní době.',
    },
    {
      type: 'heading',
      text: 'Odměna za pracovní pohotovost',
    },
    {
      type: 'paragraph',
      text: 'Za dobu pracovní pohotovosti přísluší zaměstnanci odměna nejméně ve výši 10 % průměrného výdělku. Používá se průměrný hodinový výdělek a skutečná doba pohotovosti bez úseků výkonu práce.',
    },
    {
      type: 'definition',
      term: 'Odměna za pracovní pohotovost',
      definition:
        'Samostatné plnění za připravenost k výkonu práce, nikoli mzda nebo plat za vykonanou práci.',
    },
    {
      type: 'paragraph',
      text: 'Odměna za pohotovost není mzdou ani platem a nezahrnuje se do základu pro výpočet průměrného výdělku. Musí být vedena odděleně od odměny za skutečný výkon.',
    },
    {
      type: 'example',
      title: 'Osm hodin bez zásahu',
      situation:
        'Zaměstnanec drží 8 hodin pohotovosti bez výkonu práce. Průměrný hodinový výdělek činí 300 Kč.',
      solution: 'Minimální odměna činí 8 × 300 × 10 % = 240 Kč.',
    },
    {
      type: 'heading',
      text: 'Výkon práce během pohotovosti',
    },
    {
      type: 'paragraph',
      text: 'Dojde-li během pohotovosti k výkonu práce, příslušný čas je pracovní dobou. Za tento úsek nenáleží odměna za pohotovost, ale mzda nebo plat a všechna zvýhodnění, jejichž podmínky jsou splněny.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Stejný čas nelze současně zaplatit jako neaktivní pohotovost a jako výkon práce.',
    },
    {
      type: 'example',
      title: 'Dvě hodiny zásahu',
      situation:
        'Pohotovost je sjednána od 18:00 do 24:00. Zaměstnanec pracuje na incidentu od 20:00 do 22:00. Průměrný výdělek činí 300 Kč.',
      solution:
        'Odměna za pohotovost se počítá za 4 neodpracované hodiny: 4 × 300 × 10 % = 120 Kč. Dvě hodiny zásahu se zpracují jako práce podle mzdy nebo platu a dalších režimů.',
    },
    {
      type: 'heading',
      text: 'Výkon při pohotovosti a přesčas',
    },
    {
      type: 'paragraph',
      text: 'Výkon práce během pohotovosti nad stanovenou týdenní pracovní dobu je prací přesčas, pokud splňuje ostatní zákonné znaky. Samotná doba neaktivní pohotovosti se do pracovní doby ani přesčasu nezapočítává.',
    },
    {
      type: 'example',
      title: 'Zásah po odpracovaném týdnu',
      situation:
        'Zaměstnanec již naplnil stanovenou týdenní pracovní dobu a během večerní pohotovosti vykoná 2 hodiny práce na příkaz zaměstnavatele.',
      solution:
        'Dvě hodiny jsou pracovní dobou a mohou být přesčasem. Za tento úsek nenáleží odměna za pohotovost, ale dosažená mzda nebo plat, přesčasové vypořádání a případné další příplatky.',
    },
    {
      type: 'heading',
      text: 'Noční zásah',
    },
    {
      type: 'paragraph',
      text: 'Práce vykonaná mezi 22:00 a 6:00 je noční prací. Neaktivní pohotovost ve stejném intervalu však sama o sobě noční prací není.',
    },
    {
      type: 'example',
      title: 'Pohotovost 20:00–6:00 s nočním zásahem',
      situation:
        'Zaměstnanec drží pohotovost 10 hodin a pracuje od 23:30 do 1:00.',
      solution:
        'Neaktivní pohotovost činí 8,5 hodiny. Výkon práce činí 1,5 hodiny a celý je noční prací. Přesčas se ověří samostatně.',
    },
    {
      type: 'heading',
      text: 'Víkendový zásah',
    },
    {
      type: 'paragraph',
      text: 'Odměna za pohotovost drženou v sobotu nebo neděli se automaticky nezvyšuje víkendovým příplatkem. Víkendový příplatek náleží za skutečně vykonanou práci v kalendářní sobotu nebo neděli.',
    },
    {
      type: 'example',
      title: 'Sobotní pohotovost bez práce',
      situation:
        'Zaměstnanec drží v sobotu 12 hodin pohotovosti, ale k výkonu práce nedojde.',
      solution:
        'Náleží odměna za pohotovost nejméně 10 % průměrného výdělku. Víkendový příplatek nevzniká, protože nebyla vykonána práce.',
    },
    {
      type: 'heading',
      text: 'Sváteční pohotovost',
    },
    {
      type: 'paragraph',
      text: 'Ani pohotovost ve svátek není sama o sobě prací ve svátek. Sváteční zvýhodnění se vztahuje až na skutečný výkon práce v kalendářním svátku.',
    },
    {
      type: 'heading',
      text: 'Komplexní časová osa',
    },
    {
      type: 'example',
      title: 'Pátek až sobota',
      situation:
        'Pohotovost trvá v pátek 18:00 až sobotu 6:00. Zaměstnanec pracuje od pátku 23:00 do soboty 1:00. Průměrný hodinový výdělek činí 300 Kč.',
      solution:
        'Celkový interval má 12 hodin. Výkon práce činí 2 hodiny, takže neaktivní pohotovost činí 10 hodin a minimální odměna 10 × 300 × 10 % = 300 Kč. Obě pracovní hodiny jsou noční. Hodina 00:00–1:00 je současně sobotní. Přesčas se posoudí samostatně.',
    },
    {
      type: 'heading',
      text: 'Čas cesty k zásahu',
    },
    {
      type: 'paragraph',
      text: 'Čas cesty z místa pohotovosti na pracoviště se neposuzuje automaticky jako výkon práce. Je nutné vycházet z konkrétního pracovněprávního režimu, místa výkonu práce a skutečných úkolů během cesty.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Nevytvářej univerzální pravidlo, že každá cesta při pohotovosti je pracovní dobou nebo že nikdy pracovní dobou není. Nejasný podklad eskaluj k pracovněprávnímu posouzení.',
    },
    {
      type: 'heading',
      text: 'Evidence pohotovosti',
    },
    {
      type: 'list',
      items: [
        'dohoda o pracovní pohotovosti',
        'místo držení pohotovosti',
        'začátek a konec pohotovosti',
        'jednotlivé začátky a konce výkonu práce',
        'způsob povolání k práci',
        'skutečný obsah zásahu',
        'průměrný hodinový výdělek',
        'souběh noci, víkendu, svátku a přesčasu',
      ],
    },
    {
      type: 'heading',
      text: 'Měsíční kontrola',
    },
    {
      type: 'list',
      items: [
        'součet neaktivní pohotovosti',
        'součet výkonu práce při pohotovosti',
        'vyloučení překryvu obou součtů',
        'kontrola stanovené pracovní doby a přesčasu',
        'kontrola odpočinku mezi směnami',
        'kontrola zákonných příplatků za výkon',
        'vazba na mzdovou rekapitulaci',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'nařídit pohotovost bez dohody',
        'vykázat povinné čekání na pracovišti jako pohotovost',
        'zaplatit pouze 10% odměnu i za výkon práce',
        'současně zaplatit stejný čas jako pohotovost i práci',
        'zahrnout neaktivní pohotovost do přesčasu',
        'přiznat noční nebo víkendový příplatek za pouhou připravenost',
        'nezachytit čas zásahu přes půlnoc',
        'ignorovat odpočinek po zásahu',
      ],
    },
    {
      type: 'summary',
      items: [
        'Pracovní pohotovost je dohodnutá připravenost na jiném místě než na pracovišti zaměstnavatele.',
        'Za neaktivní pohotovost náleží nejméně 10 % průměrného hodinového výdělku.',
        'Skutečný výkon během pohotovosti je pracovní dobou a neplatí se současně jako pohotovost.',
        'Výkon může být přesčasem, noční, víkendovou nebo sváteční prací.',
        'Evidence musí přesně oddělit připravenost, výkon a jednotlivé časové režimy.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'on-call-duty-card-01',
      front: 'Kde se drží pracovní pohotovost?',
      back: 'Na jiném dohodnutém místě než na pracovišti zaměstnavatele.',
      explanation: 'Povinná přítomnost na pracovišti může být pracovní dobou.',
      skillIds: ['standby-work-distinction'],
    },
    {
      id: 'on-call-duty-card-02',
      front: 'Jaká je minimální odměna za neaktivní pohotovost?',
      back: '10 % průměrného hodinového výdělku.',
      explanation: 'Počítá se jen za dobu bez výkonu práce.',
      skillIds: ['standby-remuneration-calculation'],
    },
    {
      id: 'on-call-duty-card-03',
      front: 'Co se stane s časem skutečného zásahu?',
      back: 'Stává se pracovní dobou a odměňuje se mzdou nebo platem.',
      explanation: 'Za stejný úsek nenáleží odměna za pohotovost.',
      skillIds: ['standby-work-distinction'],
    },
    {
      id: 'on-call-duty-card-04',
      front: 'Je sobotní neaktivní pohotovost sama o sobě prací v sobotu?',
      back: 'Ne.',
      explanation: 'Víkendový příplatek náleží až za skutečný výkon práce.',
      skillIds: ['standby-callout-overlap'],
    },
  ],
  exercises: [
    {
      id: 'on-call-duty-exercise-01',
      type: 'single_choice',
      prompt:
        'Pracovní pohotovost trvá 9 hodin. Během ní zaměstnanec vykoná dva zásahy: první v délce 1,25 hodiny a druhý v délce 0,75 hodiny. Průměrný hodinový výdělek činí 315 Kč. Kolik činí minimální odměna za neaktivní část pohotovosti?',
      options: [
        {
          id: 'a',
          text: '189 Kč.',
        },
        {
          id: 'b',
          text: '220,50 Kč.',
        },
        {
          id: 'c',
          text: '283,50 Kč.',
        },
        {
          id: 'd',
          text: '315 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['standby-remuneration-calculation'],
      explanation:
        'Výkon práce trvá celkem 2 hodiny, takže neaktivní pohotovost činí 7 hodin. Výpočet je 7 × 315 × 10 % = 220,50 Kč.',
      commonMistake:
        'Počítat odměnu z celých devíti hodin nebo neodečíst oba zásahy.',
    },
    {
      id: 'on-call-duty-exercise-02',
      type: 'multiple_choice',
      prompt: 'Co platí pro výkon práce během pohotovosti?',
      options: [
        {
          id: 'work',
          text: 'Jde o pracovní dobu.',
        },
        {
          id: 'wage',
          text: 'Náleží mzda nebo plat.',
        },
        {
          id: 'supplements',
          text: 'Mohou vzniknout další zákonné příplatky.',
        },
        {
          id: 'standby',
          text: 'Za stejný čas současně náleží odměna za pohotovost.',
        },
        {
          id: 'overtime',
          text: 'Při splnění podmínek může jít o přesčas.',
        },
      ],
      correctOptionIds: ['work', 'wage', 'supplements', 'overtime'],
      skillIds: ['standby-work-distinction', 'standby-callout-overlap'],
      explanation: 'Výkon práce se z neaktivní pohotovosti vyjme.',
      commonMistake: 'Dvojitě zaplatit stejný interval.',
    },
    {
      id: 'on-call-duty-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování pracovní pohotovosti.',
      steps: [
        {
          id: 'agreement',
          text: 'Ověřit dohodu a místo pohotovosti.',
        },
        {
          id: 'interval',
          text: 'Zjistit celkový interval pohotovosti.',
        },
        {
          id: 'work',
          text: 'Vyjmout úseky skutečného výkonu práce.',
        },
        {
          id: 'standby-pay',
          text: 'Vypočítat odměnu za neaktivní dobu.',
        },
        {
          id: 'work-pay',
          text: 'Zpracovat mzdu nebo plat za zásahy.',
        },
        {
          id: 'overlap',
          text: 'Přidat přesčasové a časové příznaky.',
        },
      ],
      correctOrder: [
        'agreement',
        'interval',
        'work',
        'standby-pay',
        'work-pay',
        'overlap',
      ],
      skillIds: ['standby-work-distinction', 'standby-callout-overlap'],
      explanation: 'Neaktivní doba a výkon se musí nejprve časově oddělit.',
      commonMistake: 'Vypočítat 10 % z celého intervalu bez odečtení zásahů.',
    },
    {
      id: 'on-call-duty-exercise-04',
      type: 'single_choice',
      prompt:
        'Pohotovost trvá 11,5 hodiny. První výkon práce trvá 1,25 hodiny a druhý 2 hodiny. Za kolik hodin se počítá odměna za neaktivní pohotovost?',
      options: [
        {
          id: 'a',
          text: '7,25 hodiny.',
        },
        {
          id: 'b',
          text: '8,25 hodiny.',
        },
        {
          id: 'c',
          text: '9,5 hodiny.',
        },
        {
          id: 'd',
          text: '11,5 hodiny.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['standby-remuneration-calculation'],
      explanation:
        'Celkový výkon práce činí 1,25 + 2 = 3,25 hodiny. Neaktivní pohotovost je 11,5 − 3,25 = 8,25 hodiny.',
      commonMistake:
        'Odečíst jen jeden zásah nebo zaokrouhlit jednotlivé zásahy na celé hodiny.',
    },
    {
      id: 'on-call-duty-exercise-05',
      type: 'short_text',
      prompt:
        'Neaktivní pracovní pohotovost trvala 6,75 hodiny a průměrný hodinový výdělek činí 308 Kč. Kolik činí minimální odměna za pohotovost?',
      acceptedAnswers: [
        '207,90 Kč',
        '207,9 Kč',
        '207,90',
        '207,9',
        '207.90',
        '207.9',
      ],
      ignoreDiacritics: true,
      skillIds: ['standby-remuneration-calculation'],
      explanation: 'Výpočet je 6,75 × 308 × 10 % = 207,90 Kč.',
      commonMistake:
        'Použít celou průměrnou hodinovou sazbu nebo zaokrouhlit pohotovost na celé hodiny.',
    },
    {
      id: 'on-call-duty-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec musí od 18:00 do 22:00 fyzicky setrvat v dispečerské místnosti zaměstnavatele a být připraven okamžitě zasáhnout. Lze celý interval automaticky odměnit pouze jako pracovní pohotovost?',
      options: [
        {
          id: 'a',
          text: 'Ano, protože většinu času aktivně nepracuje.',
        },
        {
          id: 'b',
          text: 'Ne. Povinná přítomnost na pracovišti odpovídá pracovní době nebo jinému režimu, který je nutné posoudit podle skutečného obsahu.',
        },
        {
          id: 'c',
          text: 'Ano, pokud je interval kratší než jedna směna.',
        },
        {
          id: 'd',
          text: 'Ano, pokud zaměstnanec může používat telefon.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['standby-work-distinction'],
      explanation:
        'Pracovní pohotovost se drží na jiném dohodnutém místě než na pracovišti zaměstnavatele.',
      commonMistake:
        'Posuzovat pouze intenzitu činnosti a ignorovat povinné místo pobytu.',
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
      title: 'MPSV – Pracovní pohotovost',
      url: 'https://ppropo.mpsv.cz/VIII6Pracovnipohotovost',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna za pracovní pohotovost',
      url: 'https://ppropo.mpsv.cz/XXI2Odmenazapracovnipohotovost',
      kind: 'official',
    },
    {
      title: 'MPSV – Evidence pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII9Evidencepracovnidoby',
      kind: 'official',
    },
  ],
})
