import { defineLessonContent } from '../define'

export const workingTimeConceptsContent = defineLessonContent({
  moduleId: 'working-time',
  skillIds: [
    'working-time-terminology',
    'shift-classification',
    'working-time-boundaries',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Základní pojmy pracovní doby, směny, doby odpočinku, práce přesčas, noční práce a pracovní pohotovosti ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Pracovní doba jako základ mzdového vstupu',
    },
    {
      type: 'paragraph',
      text: 'Pracovní doba určuje, kdy je zaměstnanec povinen pracovat nebo být na pracovišti připraven k výkonu práce podle pokynů zaměstnavatele. Pro mzdovou účetní je základním časovým vstupem pro mzdu, příplatky, překážky, dovolenou, přesčas a další plnění.',
    },
    {
      type: 'definition',
      term: 'Pracovní doba',
      definition:
        'Doba, v níž je zaměstnanec povinen vykonávat pro zaměstnavatele práci, a doba, v níž je na pracovišti připraven k výkonu práce podle pokynů zaměstnavatele.',
    },
    {
      type: 'definition',
      term: 'Doba odpočinku',
      definition: 'Doba, která není pracovní dobou.',
    },
    {
      type: 'heading',
      text: 'Přítomnost na pracovišti není vždy totéž co pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'Evidence vstupu do budovy může zachytit dobu mezi příchodem a odchodem, ale sama neříká, kolik času bylo pracovní dobou. Zaměstnanec může přijít dříve, odejít později nebo během přítomnosti čerpat nezapočitatelnou přestávku.',
    },
    {
      type: 'example',
      title: 'Přítomnost delší než pracovní doba',
      situation:
        'Zaměstnanec vstoupí do budovy v 7:45, směnu má od 8:00 do 16:30 a čerpá třicetiminutovou přestávku na jídlo a oddech. Odchází v 16:40.',
      solution:
        'Doba přítomnosti činí 8 hodin a 55 minut. Podle rozvrhu však běžná pracovní doba činí 8 hodin, protože třicetiminutová přestávka se nezapočítává a čas před začátkem a po konci směny není bez dalšího výkonem práce.',
    },
    {
      type: 'heading',
      text: 'Směna',
    },
    {
      type: 'definition',
      term: 'Směna',
      definition:
        'Část stanovené týdenní pracovní doby bez práce přesčas, kterou je zaměstnanec povinen odpracovat na základě předem stanoveného rozvrhu pracovních směn.',
    },
    {
      type: 'paragraph',
      text: 'Směna je plánovaná část pracovní doby. Práce vykonaná mimo rozvrh není automaticky součástí směny a může vyžadovat posouzení jako přesčas, napracování volna, změna rozvrhu nebo neoprávněná práce.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Dlouhá přítomnost sama o sobě neprokazuje práci přesčas. Musí jít o práci vykonanou na příkaz zaměstnavatele nebo s jeho souhlasem a současně musí být splněny další zákonné podmínky.',
    },
    {
      type: 'heading',
      text: 'Práce přesčas',
    },
    {
      type: 'definition',
      term: 'Práce přesčas',
      definition:
        'Práce konaná na příkaz zaměstnavatele nebo s jeho souhlasem nad stanovenou týdenní pracovní dobu vyplývající z předem stanoveného rozvržení a mimo rámec rozvrhu směn.',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance se sjednanou kratší pracovní dobou není každá práce nad sjednaný rozsah přesčasem. Přesčasem je až práce nad stanovenou týdenní pracovní dobu; zaměstnanci s kratší pracovní dobou navíc nelze práci přesčas nařídit.',
    },
    {
      type: 'example',
      title: 'Práce nad kratší úvazek',
      situation:
        'Zaměstnanec má sjednáno 30 hodin týdně a v jednom týdnu se souhlasem zaměstnavatele odpracuje 34 hodin. Stanovená týdenní pracovní doba je 40 hodin.',
      solution:
        'Čtyři hodiny jsou prací nad sjednanou kratší pracovní dobu, ale nejsou ještě prací přesčas. Pro mzdové zpracování se musí vykázat odděleně a nesmí se automaticky přidat přesčasový příplatek.',
    },
    {
      type: 'heading',
      text: 'Noční doba a noční práce',
    },
    {
      type: 'definition',
      term: 'Noční doba',
      definition: 'Doba mezi 22:00 a 6:00.',
    },
    {
      type: 'definition',
      term: 'Noční práce',
      definition: 'Práce skutečně vykonaná v noční době.',
    },
    {
      type: 'paragraph',
      text: 'Noční práce se sleduje podle skutečného časového průběhu, nikoli podle názvu směny. Část směny před 22:00 nebo po 6:00 není noční prací, i když zaměstnavatel celou směnu interně označuje jako noční.',
    },
    {
      type: 'example',
      title: 'Směna přes hranici noční doby',
      situation: 'Směna trvá od 20:00 do 4:00 bez nezapočitatelné přestávky.',
      solution:
        'Noční prací je úsek od 22:00 do 4:00, tedy 6 hodin. Úsek 20:00 až 22:00 je běžnou pracovní dobou mimo noční dobu.',
    },
    {
      type: 'heading',
      text: 'Pracovní pohotovost',
    },
    {
      type: 'definition',
      term: 'Pracovní pohotovost',
      definition:
        'Doba, v níž je zaměstnanec připraven k případnému výkonu práce nad rámec rozvrhu směn na jiném dohodnutém místě, než jsou pracoviště zaměstnavatele.',
    },
    {
      type: 'paragraph',
      text: 'Samotná pracovní pohotovost není pracovní dobou. Pokud však zaměstnanec během pohotovosti skutečně začne pracovat, doba výkonu práce pracovní dobou je a může být současně prací přesčas.',
    },
    {
      type: 'example',
      title: 'Pohotovost z domova',
      situation:
        'Zaměstnanec drží pohotovost doma od 18:00 do 22:00. Od 20:15 do 21:00 řeší na dálku havárii.',
      solution:
        'Pohotovost bez výkonu práce činí 3 hodiny a 15 minut. Skutečný výkon práce činí 45 minut a musí být vykázán jako pracovní doba; následně se posoudí jeho vztah k přesčasu a noční práci.',
    },
    {
      type: 'heading',
      text: 'Pracovní režim',
    },
    {
      type: 'definition',
      term: 'Pracovní režim',
      definition:
        'Organizace práce podle toho, jak se zaměstnanci pravidelně střídají ve směnách a zda provoz vyžaduje práci nepřetržitě.',
    },
    {
      type: 'paragraph',
      text: 'Jednosměnný, dvousměnný, vícesměnný a nepřetržitý režim popisují organizaci provozu. Neříkají samy o sobě, zda je pracovní doba rozvržena rovnoměrně, nerovnoměrně nebo pružně.',
    },
    {
      type: 'heading',
      text: 'Způsob rozvržení je jiná otázka než režim',
    },
    {
      type: 'list',
      items: [
        'pracovní režim – kolik směn a jaké střídání provoz používá',
        'rovnoměrné rozvržení – v jednotlivých týdnech se rozvrhuje stejný týdenní rozsah',
        'nerovnoměrné rozvržení – týdny se liší a průměr se vyrovná ve vyrovnávacím období',
        'pružná pracovní doba – zaměstnanec volí začátek nebo konec v určených volitelných úsecích',
        'samorozvrhování – zaměstnanec si směny rozvrhuje na základě písemné dohody',
      ],
    },
    {
      type: 'example',
      title: 'Jednosměnný, ale nerovnoměrný rozvrh',
      situation:
        'Provoz funguje jen v jedné denní směně. Zaměstnanec má v jednom týdnu čtyři desetihodinové směny a v dalším týdnu čtyři šestihodinové směny.',
      solution:
        'Provoz může být jednosměnný a současně může být pracovní doba rozvržena nerovnoměrně. Počet směn v provozu a rovnoměrnost týdenního rozvrhu jsou dvě různá kritéria.',
    },
    {
      type: 'heading',
      text: 'Směna nepřekračuje běžně 12 hodin',
    },
    {
      type: 'paragraph',
      text: 'Délka směny nesmí běžně přesáhnout 12 hodin. Zvláštní výjimka pro vybrané zaměstnance ve zdravotnictví není obecným pravidlem a mzdová účetní ji nesmí použít bez odpovídajícího pracovněprávního režimu.',
    },
    {
      type: 'heading',
      text: 'Rozvrh předchází skutečné práci',
    },
    {
      type: 'paragraph',
      text: 'Začátek a konec směn stanoví zaměstnavatel v písemném rozvrhu. Zaměstnanec musí být s rozvrhem nebo jeho změnou seznámen předem v zákonné nebo dohodnuté době. Skutečnost se následně porovnává s tímto rozvrhem.',
    },
    {
      type: 'heading',
      text: 'Co je pro mzdu potřeba rozlišit',
    },
    {
      type: 'list',
      items: [
        'plánovanou směnu',
        'skutečně odpracovanou dobu',
        'práci mimo rozvrh',
        'noční práci',
        'práci o víkendu a ve svátek',
        'pracovní pohotovost',
        'výkon práce během pohotovosti',
        'nezapočitatelnou přestávku',
        'překážku, dovolenou nebo jinou omluvenou nepřítomnost',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit evidenci vstupu do budovy za pracovní dobu',
        'považovat každou práci nad kratší úvazek za přesčas',
        'označit celou směnu jako noční, i když část probíhá mimo noční dobu',
        'započítat celou pohotovost jako pracovní dobu',
        'zaměnit směnný režim za rovnoměrné nebo nerovnoměrné rozvržení',
        'považovat neplánovanou přítomnost za automaticky schválenou práci',
      ],
    },
    {
      type: 'summary',
      items: [
        'Pracovní doba zahrnuje výkon práce a připravenost k práci na pracovišti podle pokynů zaměstnavatele.',
        'Směna je plánovaná část stanovené týdenní pracovní doby bez přesčasu.',
        'Přítomnost, pracovní doba, pohotovost a práce přesčas jsou odlišné kategorie.',
        'Noční práce se určuje podle skutečné práce mezi 22:00 a 6:00.',
        'Pracovní režim a způsob rozvržení pracovní doby se posuzují odděleně.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'working-time-concepts-card-01',
      front: 'Co je směna?',
      back: 'Předem rozvržená část stanovené týdenní pracovní doby bez práce přesčas.',
      explanation:
        'Směna vychází z rozvrhu, nikoli pouze ze skutečného příchodu zaměstnance.',
      skillIds: ['working-time-terminology'],
    },
    {
      id: 'working-time-concepts-card-02',
      front: 'Je pracovní pohotovost automaticky pracovní dobou?',
      back: 'Ne. Pracovní dobou je až skutečný výkon práce během pohotovosti.',
      explanation:
        'Pohotovost a výkon práce v jejím průběhu se evidují odděleně.',
      skillIds: ['working-time-boundaries'],
    },
    {
      id: 'working-time-concepts-card-03',
      front: 'Kdy probíhá noční doba?',
      back: 'Od 22:00 do 6:00.',
      explanation:
        'Noční prací je jen skutečně odpracovaná část v tomto intervalu.',
      skillIds: ['working-time-terminology'],
    },
    {
      id: 'working-time-concepts-card-04',
      front: 'Je práce nad sjednaných 30 hodin týdně automaticky přesčas?',
      back: 'Ne. Přesčas vzniká až nad stanovenou týdenní pracovní dobu a při splnění dalších podmínek.',
      explanation:
        'U kratší pracovní doby je nutné rozlišit práci nad úvazek a skutečný přesčas.',
      skillIds: ['working-time-boundaries'],
    },
  ],
  exercises: [
    {
      id: 'working-time-concepts-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec je v budově od 7:45 do 16:40, směnu má 8:00–16:30 a čerpá 30 minut nezapočitatelné přestávky. Kolik činí plánovaná pracovní doba?',
      options: [
        {
          id: 'a',
          text: '8 hodin.',
        },
        {
          id: 'b',
          text: '8 hodin 55 minut.',
        },
        {
          id: 'c',
          text: '8 hodin 30 minut.',
        },
        {
          id: 'd',
          text: '7 hodin 30 minut.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['working-time-boundaries'],
      explanation: 'Rozvržená směna po odečtení přestávky činí 8 hodin.',
      commonMistake: 'Použít dobu přítomnosti v budově.',
    },
    {
      id: 'working-time-concepts-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které kategorie je potřeba rozlišovat samostatně?',
      options: [
        {
          id: 'shift',
          text: 'Plánovanou směnu.',
        },
        {
          id: 'actual',
          text: 'Skutečně odpracovanou dobu.',
        },
        {
          id: 'standby',
          text: 'Pracovní pohotovost.',
        },
        {
          id: 'standby-work',
          text: 'Výkon práce během pohotovosti.',
        },
        {
          id: 'same',
          text: 'Všechny uvedené údaje sloučit do jednoho času přítomnosti.',
        },
      ],
      correctOptionIds: ['shift', 'actual', 'standby', 'standby-work'],
      skillIds: ['working-time-terminology', 'working-time-boundaries'],
      explanation: 'Každá kategorie má jiný pracovněprávní a mzdový význam.',
      commonMistake: 'Použít jediný souhrnný čas bez klasifikace.',
    },
    {
      id: 'working-time-concepts-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď základní posouzení časového záznamu.',
      steps: [
        {
          id: 'schedule',
          text: 'Zjistit platný rozvrh směny.',
        },
        {
          id: 'actual',
          text: 'Zjistit skutečný začátek a konec práce.',
        },
        {
          id: 'breaks',
          text: 'Oddělit nezapočitatelné přestávky.',
        },
        {
          id: 'categories',
          text: 'Určit noční, víkendové a jiné časové kategorie.',
        },
        {
          id: 'outside',
          text: 'Posoudit práci mimo rozvrh.',
        },
        {
          id: 'payroll',
          text: 'Předat klasifikované údaje do mzdy.',
        },
      ],
      correctOrder: [
        'schedule',
        'actual',
        'breaks',
        'categories',
        'outside',
        'payroll',
      ],
      skillIds: ['shift-classification'],
      explanation:
        'Klasifikace vychází nejprve z rozvrhu a skutečného průběhu.',
      commonMistake: 'Začít mzdovým výpočtem bez časové klasifikace.',
    },
    {
      id: 'working-time-concepts-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec s úvazkem 30 hodin odpracoval 34 hodin, stanovená týdenní pracovní doba je 40 hodin. Jde o přesčas?',
      options: [
        {
          id: 'a',
          text: 'Ano, všechny 4 hodiny.',
        },
        {
          id: 'b',
          text: 'Ne, jde o práci nad kratší úvazek, ale pod stanovenou týdenní dobu.',
        },
        {
          id: 'c',
          text: 'Ano, ale jen 2 hodiny.',
        },
        {
          id: 'd',
          text: 'Nelze ji evidovat.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['working-time-boundaries'],
      explanation:
        'Přesčas u kratší pracovní doby vzniká až nad stanovenou týdenní pracovní dobu.',
      commonMistake: 'Považovat sjednaný úvazek za hranici přesčasu.',
    },
    {
      id: 'working-time-concepts-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá plánovaná část stanovené týdenní pracovní doby bez přesčasu?',
      acceptedAnswers: ['směna', 'smena'],
      ignoreDiacritics: true,
      skillIds: ['working-time-terminology'],
      explanation: 'Jde o směnu.',
      commonMistake: 'Uvést pracovní pohotovost.',
    },
    {
      id: 'working-time-concepts-exercise-06',
      type: 'single_choice',
      prompt: 'Směna trvá 20:00–4:00. Kolik hodin je noční prací?',
      options: [
        {
          id: 'a',
          text: '4 hodiny.',
        },
        {
          id: 'b',
          text: '6 hodin.',
        },
        {
          id: 'c',
          text: '8 hodin.',
        },
        {
          id: 'd',
          text: '2 hodiny.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['shift-classification'],
      explanation: 'Noční doba v této směně probíhá od 22:00 do 4:00.',
      commonMistake: 'Označit celou směnu za noční jen podle jejího názvu.',
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
      title: 'MPSV – Rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII3Rozvrzenipracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Práce přesčas',
      url: 'https://ppropo.mpsv.cz/VIII5Praceprescas',
      kind: 'official',
    },
    {
      title: 'MPSV – Pracovní pohotovost',
      url: 'https://ppropo.mpsv.cz/VIII7Pracovnipohotovost',
      kind: 'official',
    },
  ],
})
