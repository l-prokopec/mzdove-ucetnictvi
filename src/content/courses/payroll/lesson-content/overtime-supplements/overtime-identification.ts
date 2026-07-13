import { defineLessonContent } from '../define'

export const overtimeIdentificationContent = defineLessonContent({
  moduleId: 'overtime-supplements',
  skillIds: [
    'overtime-definition-control',
    'overtime-limit-control',
    'overtime-evidence-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Identifikace práce přesčas, limity nařízené a celkové přesčasové práce, kratší pracovní doba a chráněné skupiny ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Přesčas není každá práce navíc',
    },
    {
      type: 'paragraph',
      text: 'Práce přesčas vzniká jen při současném splnění zákonných znaků. Mzdová účetní nesmí převzít označení přesčas jen z docházkového kódu, e-mailu nebo rozdílu mezi příchodem a odchodem.',
    },
    {
      type: 'definition',
      term: 'Práce přesčas',
      definition:
        'Práce konaná na příkaz zaměstnavatele nebo s jeho souhlasem nad stanovenou týdenní pracovní dobu vyplývající z předem stanoveného rozvržení pracovní doby a mimo rámec rozvrhu pracovních směn.',
    },
    {
      type: 'heading',
      text: 'Tři podmínky přesčasu',
    },
    {
      type: 'list',
      items: [
        'práce byla nařízena zaměstnavatelem nebo vykonána s jeho souhlasem',
        'práce je nad stanovenou týdenní pracovní dobu',
        'práce je vykonána mimo rámec předem stanoveného rozvrhu směn',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Chybí-li některá podmínka, nemusí jít o práci přesčas, i když zaměstnanec pracoval déle než obvykle.',
    },
    {
      type: 'heading',
      text: 'Příkaz nebo souhlas zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Příkaz může být písemný nebo ústní a musí pocházet od oprávněné osoby. Souhlas může být udělen předem, během práce nebo za určitých okolností i dodatečně, jestliže zaměstnavatel práci vědomě přijal.',
    },
    {
      type: 'example',
      title: 'Vedoucí výslovně prodlouží směnu',
      situation:
        'Rozvržená směna končí v 16:00. Vedoucí v 15:30 uloží zaměstnanci dokončit havarijní opravu do 18:00.',
      solution:
        'Dvě hodiny byly nařízeny oprávněným vedoucím mimo rozvrh. Je nutné dále ověřit překročení stanovené týdenní pracovní doby a zákonné limity.',
    },
    {
      type: 'heading',
      text: 'Pozdní odchod není automaticky přesčas',
    },
    {
      type: 'paragraph',
      text: 'Záznam turniketu nebo přihlášení do systému pouze dokládá přítomnost. Bez prokázaného výkonu práce a příkazu nebo souhlasu zaměstnavatele nelze čas automaticky zpracovat jako přesčas.',
    },
    {
      type: 'example',
      title: 'Zaměstnanec zůstane v kanceláři',
      situation:
        'Směna končí v 16:00, turniket ukazuje odchod v 17:15, ale zaměstnanec po směně řešil soukromé záležitosti.',
      solution:
        'Nevznikla práce přesčas. Samotná přítomnost na pracovišti neprokazuje výkon práce.',
    },
    {
      type: 'heading',
      text: 'Stanovená týdenní pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'Hranicí přesčasu je příslušná stanovená nebo zkrácená stanovená týdenní pracovní doba, například 40, 38,75 nebo 37,5 hodiny podle pracovního režimu.',
    },
    {
      type: 'heading',
      text: 'Kratší pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance s individuálně sjednanou kratší pracovní dobou není práce nad sjednaný úvazek automaticky přesčasem. Přesčas vzniká až nad příslušnou stanovenou nebo zkrácenou stanovenou týdenní pracovní dobu.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Zaměstnanci s kratší pracovní dobou nelze práci přesčas nařídit. Na práci přesčas se s ním lze dohodnout.',
    },
    {
      type: 'example',
      title: 'Úvazek 30 hodin',
      situation:
        'Zaměstnanec má sjednáno 30 hodin týdně, stanovená týdenní pracovní doba činí 40 hodin a se souhlasem zaměstnavatele odpracuje 36 hodin.',
      solution:
        'Šest hodin je prací nad kratší pracovní dobu, ale nejde ještě o přesčas. Zaměstnanci náleží odměna za odpracovaný čas bez automatického přesčasového příplatku.',
    },
    {
      type: 'example',
      title: 'Překročení hranice 40 hodin',
      situation: 'Tentýž zaměstnanec odpracuje 43 hodin.',
      solution:
        'Hodiny 31 až 40 jsou prací nad kratší pracovní dobu. Tři hodiny nad 40 mohou být prací přesčas, pokud byly vykonány mimo rozvrh a s příkazem nebo souhlasem zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Nerovnoměrné rozvržení',
    },
    {
      type: 'paragraph',
      text: 'Dlouhý týden v nerovnoměrném rozvržení není sám o sobě přesčasem. Je-li vyšší počet hodin předem rozvržen a průměr se vyrovnává v platném vyrovnávacím období, jde o běžně rozvrženou pracovní dobu.',
    },
    {
      type: 'example',
      title: 'Dlouhý a krátký týden',
      situation:
        'V nepřetržitém režimu je zaměstnanci předem rozvrženo 48 hodin v prvním týdnu a 27 hodin ve druhém týdnu. Stanovená pracovní doba činí 37,5 hodiny.',
      solution:
        'Průměr za dva týdny činí 37,5 hodiny. Rozvržených 48 hodin v prvním týdnu není automaticky přesčasem.',
    },
    {
      type: 'heading',
      text: 'Práce mimo rozvrh v dlouhém týdnu',
    },
    {
      type: 'paragraph',
      text: 'Také u nerovnoměrného rozvržení může vzniknout přesčas, pokud zaměstnanec pracuje mimo předem stanovené směny a jsou splněny ostatní zákonné znaky. Rozvrh a jeho historická verze musí zůstat dohledatelné.',
    },
    {
      type: 'heading',
      text: 'Napracování volna',
    },
    {
      type: 'paragraph',
      text: 'Prací přesčas není práce, kterou zaměstnanec nad stanovenou týdenní pracovní dobu napracovává pracovní volno poskytnuté na jeho žádost, pokud bylo napracování předem dohodnuto.',
    },
    {
      type: 'example',
      title: 'Napracování osobního volna',
      situation:
        'Zaměstnanec požádá o volné páteční odpoledne a se zaměstnavatelem předem dohodne, že čtyři hodiny napracuje v pondělí a úterý.',
      solution:
        'Dohodnuté napracování tohoto volna není prací přesčas. Musí však respektovat limity směny a odpočinku.',
    },
    {
      type: 'heading',
      text: 'Přesčas lze konat jen výjimečně',
    },
    {
      type: 'paragraph',
      text: 'Práce přesčas nemá být běžnou a trvale plánovanou součástí provozu. Zaměstnavatel ji může nařídit jen z vážných provozních důvodů a za dodržení zákonných limitů.',
    },
    {
      type: 'heading',
      text: 'Limit nařízené práce přesčas',
    },
    {
      type: 'list',
      items: [
        'nejvýše 8 hodin v jednotlivých týdnech',
        'nejvýše 150 hodin v kalendářním roce',
      ],
    },
    {
      type: 'paragraph',
      text: 'Oba limity musí být splněny současně. Roční limit 150 hodin neopravňuje zaměstnavatele nařídit v jednom týdnu více než osm hodin.',
    },
    {
      type: 'example',
      title: 'Nařízených deset hodin v jednom týdnu',
      situation:
        'Zaměstnavatel chce jednomu zaměstnanci nařídit 10 hodin přesčasu v jednom týdnu.',
      solution:
        'Nařízený rozsah překračuje týdenní limit 8 hodin. Část nad tento limit nelze jednostranně nařídit; případná další práce vyžaduje dohodu a dodržení celkového limitu.',
    },
    {
      type: 'heading',
      text: 'Další dohodnutá práce přesčas',
    },
    {
      type: 'paragraph',
      text: 'Nad rozsah nařízené práce lze další práci přesčas konat jen na základě dohody zaměstnance se zaměstnavatelem. Součet nařízené a dohodnuté práce přesčas nesmí v průměru překročit osm hodin týdně ve vyrovnávacím období.',
    },
    {
      type: 'heading',
      text: 'Vyrovnávací období přesčasu',
    },
    {
      type: 'list',
      items: [
        'nejvýše 26 týdnů po sobě jdoucích',
        'nejvýše 52 týdnů po sobě jdoucích pouze podle kolektivní smlouvy',
      ],
    },
    {
      type: 'paragraph',
      text: 'Do zákonného posouzení celkového průměru se postupuje podle aktuálního § 93 zákoníku práce, včetně pravidla pro přesčas, za který bylo poskytnuto náhradní volno.',
    },
    {
      type: 'heading',
      text: 'Těhotná zaměstnankyně',
    },
    {
      type: 'paragraph',
      text: 'Těhotnou zaměstnankyni je zakázáno zaměstnávat prací přesčas. Zákaz platí i tehdy, pokud by s přesčasem sama souhlasila.',
    },
    {
      type: 'heading',
      text: 'Péče o dítě mladší než jeden rok',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnankyni nebo zaměstnanci pečujícímu o dítě mladší než jeden rok nelze práci přesčas nařídit. Na výkonu se lze dohodnout, pokud tomu nebrání jiné omezení.',
    },
    {
      type: 'heading',
      text: 'Mladiství zaměstnanci',
    },
    {
      type: 'paragraph',
      text: 'Mladistvé zaměstnance nelze zaměstnávat prací přesčas. Mzdová účetní má při kontrole přesčasových vstupů ověřit věk a případnou zvláštní ochranu zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Evidence práce přesčas',
    },
    {
      type: 'list',
      items: [
        'platný rozvrh směn',
        'skutečný začátek a konec práce',
        'délka nezapočitatelných přestávek',
        'příkaz nebo souhlas oprávněné osoby',
        'důvod přesčasu',
        'týdenní a roční kumulace',
        'případné náhradní volno',
        'vazba na mzdové nebo platové vypořádání',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'označit každý pozdní odchod za přesčas',
        'považovat práci nad kratší úvazek za přesčas',
        'považovat dlouhý týden za přesčas',
        'zpětně přepsat rozvrh podle docházky',
        'nezachytit souhlas zaměstnavatele',
        'překročit limit 8 hodin nařízeného přesčasu týdně',
        'ignorovat roční limit 150 hodin',
        'nařídit přesčas zaměstnanci s kratší pracovní dobou',
        'zadat přesčas těhotné nebo mladistvému zaměstnanci',
      ],
    },
    {
      type: 'summary',
      items: [
        'Práce přesčas musí být mimo rozvrh, nad stanovenou týdenní pracovní dobu a na příkaz nebo se souhlasem zaměstnavatele.',
        'Práce nad individuální kratší úvazek není přesčasem až do dosažení stanovené týdenní pracovní doby.',
        'Nařízený přesčas je omezen osmi hodinami týdně a 150 hodinami ročně.',
        'Celkový přesčas nesmí v průměru překročit osm hodin týdně ve vyrovnávacím období.',
        'Přesčas se musí opírat o historický rozvrh, skutečnou evidenci a doložené schválení.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'overtime-identification-card-01',
      front: 'Jaké tři znaky musí práce přesčas současně splnit?',
      back: 'Být na příkaz nebo se souhlasem zaměstnavatele, nad stanovenou týdenní pracovní dobu a mimo rozvrh směn.',
      explanation: 'Pouhá práce déle než plánovaný den nestačí.',
      skillIds: ['overtime-definition-control'],
    },
    {
      id: 'overtime-identification-card-02',
      front: 'Je práce nad kratší pracovní dobu automaticky přesčasem?',
      back: 'Ne.',
      explanation:
        'Přesčas vzniká až nad příslušnou stanovenou týdenní pracovní dobu.',
      skillIds: ['overtime-definition-control'],
    },
    {
      id: 'overtime-identification-card-03',
      front: 'Jaký je roční limit nařízené práce přesčas?',
      back: '150 hodin.',
      explanation: 'Současně platí nejvýše osm hodin v jednotlivých týdnech.',
      skillIds: ['overtime-limit-control'],
    },
    {
      id: 'overtime-identification-card-04',
      front: 'Je dlouhý týden v nerovnoměrném rozvrhu automaticky přesčasem?',
      back: 'Ne.',
      explanation:
        'Předem rozvržené hodiny se posuzují v rámci vyrovnávacího období.',
      skillIds: ['overtime-evidence-control'],
    },
  ],
  exercises: [
    {
      id: 'overtime-identification-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má úvazek 30 hodin, stanovenou dobu 40 hodin a odpracuje 36 hodin. Kolik hodin je přesčas?',
      options: [
        {
          id: 'a',
          text: '0 hodin.',
        },
        {
          id: 'b',
          text: '6 hodin.',
        },
        {
          id: 'c',
          text: '30 hodin.',
        },
        {
          id: 'd',
          text: '36 hodin.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['overtime-definition-control'],
      explanation: 'Šest hodin je nad kratší úvazek, ale pod hranicí 40 hodin.',
      commonMistake: 'Použít individuální úvazek jako hranici přesčasu.',
    },
    {
      id: 'overtime-identification-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které podklady jsou potřeba pro uznání práce přesčas?',
      options: [
        {
          id: 'schedule',
          text: 'Platný rozvrh směn.',
        },
        {
          id: 'actual',
          text: 'Skutečný výkon práce.',
        },
        {
          id: 'approval',
          text: 'Příkaz nebo souhlas zaměstnavatele.',
        },
        {
          id: 'limits',
          text: 'Kontrola zákonných limitů.',
        },
        {
          id: 'turnstile',
          text: 'Pouze pozdní odchod z turniketu.',
        },
      ],
      correctOptionIds: ['schedule', 'actual', 'approval', 'limits'],
      skillIds: ['overtime-evidence-control'],
      explanation: 'Turniket sám neprokazuje přesčas.',
      commonMistake: 'Převzít fyzickou přítomnost jako schválenou práci.',
    },
    {
      id: 'overtime-identification-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kontrolu přesčasové odchylky.',
      steps: [
        {
          id: 'schedule',
          text: 'Načíst platný rozvrh.',
        },
        {
          id: 'actual',
          text: 'Zjistit skutečný čas výkonu práce.',
        },
        {
          id: 'weekly',
          text: 'Ověřit stanovenou týdenní pracovní dobu.',
        },
        {
          id: 'approval',
          text: 'Dohledat příkaz nebo souhlas.',
        },
        {
          id: 'limits',
          text: 'Zkontrolovat týdenní a roční limity.',
        },
        {
          id: 'record',
          text: 'Zapsat uznaný přesčas do evidence.',
        },
      ],
      correctOrder: [
        'schedule',
        'actual',
        'weekly',
        'approval',
        'limits',
        'record',
      ],
      skillIds: ['overtime-evidence-control'],
      explanation:
        'Klasifikace vzniká porovnáním plánu, skutečnosti, hranice a schválení.',
      commonMistake: 'Začít mzdovým příplatkem bez ověření právního přesčasu.',
    },
    {
      id: 'overtime-identification-exercise-04',
      type: 'single_choice',
      prompt:
        'Kolik hodin přesčasu může zaměstnavatel nejvýše nařídit v jednom týdnu?',
      options: [
        {
          id: 'a',
          text: '4 hodiny.',
        },
        {
          id: 'b',
          text: '8 hodin.',
        },
        {
          id: 'c',
          text: '12 hodin.',
        },
        {
          id: 'd',
          text: '150 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['overtime-limit-control'],
      explanation:
        'Nařízená práce přesčas je omezena osmi hodinami v jednotlivém týdnu.',
      commonMistake: 'Zaměnit týdenní a roční limit.',
    },
    {
      id: 'overtime-identification-exercise-05',
      type: 'short_text',
      prompt: 'Jaký je roční limit nařízené práce přesčas?',
      acceptedAnswers: ['150 hodin', '150', 'sto padesát hodin'],
      ignoreDiacritics: true,
      skillIds: ['overtime-limit-control'],
      explanation:
        'Nařízený přesčas nesmí překročit 150 hodin za kalendářní rok.',
      commonMistake: 'Uvést průměr osm hodin týdně jako roční počet.',
    },
    {
      id: 'overtime-identification-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec napracovává předem dohodnuté volno poskytnuté na svou žádost. Jde o přesčas?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, zákon takové napracování z přesčasu vylučuje.',
        },
        {
          id: 'c',
          text: 'Ano, pokud jde o více než hodinu.',
        },
        {
          id: 'd',
          text: 'Ano, pokud pracuje večer.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['overtime-definition-control'],
      explanation:
        'Předem dohodnuté napracování zaměstnancova volna není prací přesčas.',
      commonMistake: 'Posuzovat pouze překročení týdenního součtu.',
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
      title: 'MPSV – Práce přesčas',
      url: 'https://ppropo.mpsv.cz/VIII5Praceprescas',
      kind: 'official',
    },
    {
      title: 'MPSV – Úprava pracovní doby a ochrana zaměstnanců',
      url: 'https://ppropo.mpsv.cz/XI423Upravapracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Evidence pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII9Evidencepracovnidoby',
      kind: 'official',
    },
  ],
})
