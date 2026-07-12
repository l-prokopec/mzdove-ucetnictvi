import { defineLessonContent } from '../define'

export const workTimeRecordsContent = defineLessonContent({
  moduleId: 'working-time',
  skillIds: [
    'work-time-records-required-data',
    'work-time-records-responsibility',
    'work-time-records-audit-trail',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Povinný rozsah evidence pracovní doby, odpovědnost zaměstnavatele, právo zaměstnance na přístup a kontrolní stopa ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Evidence pracovní doby je zákonná povinnost zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel musí vést průkaznou evidenci pracovní doby tak, aby bylo možné zkontrolovat směny, přesčas, noční práci, pracovní pohotovost a dodržení odpočinku. Odpovědnost nelze přenést na zaměstnance ani na dodavatele docházkového systému.',
    },
    {
      type: 'definition',
      term: 'Evidence pracovní doby',
      definition:
        'Záznamy vedené zaměstnavatelem, ze kterých je patrný začátek a konec zákonem sledovaných úseků pracovní doby a pracovní pohotovosti.',
    },
    {
      type: 'heading',
      text: 'Minimální zákonný rozsah',
    },
    {
      type: 'list',
      items: [
        'začátek a konec odpracované směny',
        'začátek a konec práce přesčas',
        'začátek a konec noční práce',
        'začátek a konec práce vykonané v době pracovní pohotovosti',
        'začátek a konec pracovní pohotovosti, kterou zaměstnanec držel',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pouhý měsíční součet hodin neumožní ověřit časové umístění práce, noční dobu, odpočinek ani překryvy. Evidence proto musí obsahovat konkrétní časové údaje.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Záznam „odpracováno 160 hodin“ není sám o sobě úplnou evidencí pracovní doby podle § 96 zákoníku práce.',
    },
    {
      type: 'heading',
      text: 'Docházkový systém není automaticky zákonnou evidencí',
    },
    {
      type: 'paragraph',
      text: 'Systém příchodů a odchodů může být jedním ze zdrojů, ale evidence přítomnosti na pracovišti není bez dalšího evidencí pracovní doby. Musí být zřejmé, která část přítomnosti byla směnou, přestávkou, přesčasem nebo jinou kategorií.',
    },
    {
      type: 'example',
      title: 'Karta u turniketu',
      situation:
        'Turniket zaznamená vstup 7:42 a odchod 16:48. Rozvrh směny je 8:00–16:30 s třicetiminutovou přestávkou.',
      solution:
        'Turniket dokládá přítomnost, nikoli automaticky 9 hodin a 6 minut práce. Evidence pracovní doby musí určit skutečný výkon práce a nezapočitatelnou přestávku podle schválených podkladů.',
    },
    {
      type: 'heading',
      text: 'Součinnost zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel může zaměstnanci uložit, aby zaznamenával příchody, odchody, začátky práce nebo další údaje potřebné pro tvorbu evidence. Konečnou odpovědnost za úplnost a správnost však nese zaměstnavatel.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Tvrzení „zaměstnanec si hodiny nevyplnil, proto je neevidujeme“ nezbavuje zaměstnavatele zákonné odpovědnosti.',
    },
    {
      type: 'heading',
      text: 'Rozvrh a evidence skutečnosti',
    },
    {
      type: 'paragraph',
      text: 'Rozvrh zachycuje plán. Evidence pracovní doby zachycuje skutečnost. Oba dokumenty musí být uchovány tak, aby bylo možné vysvětlit každý rozdíl.',
    },
    {
      type: 'list',
      items: [
        'plánovaná směna',
        'skutečný výkon práce',
        'schválená změna rozvrhu',
        'práce mimo rozvrh',
        'překážka, dovolená nebo absence',
        'oprava a její schválení',
      ],
    },
    {
      type: 'heading',
      text: 'Přestávky a odpočinek',
    },
    {
      type: 'paragraph',
      text: 'Zákon nevyžaduje evidovat přestávky a doby odpočinku ve stejném minimálním výčtu jako směny a přesčas. Zaměstnavatel však musí být schopen doložit, že je skutečně poskytl. Praktický systém proto zpravidla uchovává údaje potřebné k této kontrole.',
    },
    {
      type: 'heading',
      text: 'Údaje potřebné pro mzdu nad zákonné minimum',
    },
    {
      type: 'paragraph',
      text: 'Pro správné mzdové zpracování je vhodné rozlišit také práci ve svátek, v sobotu a neděli, ve ztíženém prostředí, dovolenou, překážky, neomluvenou absenci a další časové kategorie, i když nejsou všechny samostatně vyjmenovány v minimálním rozsahu § 96.',
    },
    {
      type: 'list',
      items: [
        'běžná pracovní doba',
        'práce přesčas',
        'noční práce',
        'práce v sobotu a neděli',
        'práce ve svátek',
        'pracovní pohotovost',
        'výkon práce při pohotovosti',
        'dovolená',
        'překážky na straně zaměstnance a zaměstnavatele',
        'neomluvená absence',
        'náhradní volno',
      ],
    },
    {
      type: 'heading',
      text: 'Každý vztah samostatně',
    },
    {
      type: 'paragraph',
      text: 'Má-li jedna osoba více pracovních vztahů, pracovní doba se vede pro každý z nich odděleně. Společný měsíční součet neumožní určit, ke které smlouvě patří práce, mzda, dovolená nebo přesčas.',
    },
    {
      type: 'example',
      title: 'Pracovní poměr a DPP',
      situation:
        'Zaměstnanec pracuje 8:00–16:30 v pracovním poměru a ve stejný den vykáže na DPP práci 15:00–18:00.',
      solution:
        'Evidence obsahuje překryv 1,5 hodiny. Každý vztah musí být veden samostatně a překryv musí být před výplatou vysvětlen nebo opraven.',
    },
    {
      type: 'heading',
      text: 'Práce na dálku',
    },
    {
      type: 'paragraph',
      text: 'Také při práci na dálku platí povinnost evidence pracovní doby. Skutečnost, že zaměstnanec neprochází turniketem, neodstraňuje potřebu doložit začátek a konec práce a zákonné časové kategorie.',
    },
    {
      type: 'heading',
      text: 'Pružná pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'Při pružné pracovní době se eviduje skutečný začátek a konec práce. Zároveň musí být možné zkontrolovat základní pracovní dobu, volitelné úseky a naplnění průměrného rozsahu ve vyrovnávacím období.',
    },
    {
      type: 'heading',
      text: 'Samorozvrhování',
    },
    {
      type: 'paragraph',
      text: 'Pokud si zaměstnanec rozvrhuje směny sám na základě písemné dohody, evidence stále musí zachytit skutečně odpracovanou dobu a umožnit kontrolu směn, odpočinku a přesčasu. Samorozvrhování není samoevidence bez kontroly.',
    },
    {
      type: 'heading',
      text: 'Práce přesčas musí být identifikovatelná',
    },
    {
      type: 'paragraph',
      text: 'Evidence musí odlišit práci mimo rozvrh a potvrdit, zda byla nařízena nebo schválena. Samotný pozdější odchod ze systému nesmí automaticky vytvořit přesčasovou položku.',
    },
    {
      type: 'example',
      title: 'Pozdní odchod bez schválení',
      situation:
        'Rozvrh končí v 16:00, turniket ukazuje odchod v 17:00, ale není doloženo, zda zaměstnanec pracoval.',
      solution:
        'Záznam je odchylkou k prověření. Přesčas lze vykázat až po ověření skutečného výkonu práce a souhlasu nebo příkazu zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Opravy evidence',
    },
    {
      type: 'list',
      items: [
        'původní záznam',
        'nová hodnota',
        'důvod změny',
        'datum opravy',
        'osoba, která opravu provedla',
        'osoba, která ji schválila',
        'dopad na mzdu a hlášení',
      ],
    },
    {
      type: 'paragraph',
      text: 'Oprava nesmí původní údaj nenávratně přepsat. Musí zůstat dohledatelné, co bylo změněno, proč a kdo změnu schválil.',
    },
    {
      type: 'heading',
      text: 'Právo zaměstnance na přístup',
    },
    {
      type: 'paragraph',
      text: 'Na žádost zaměstnance musí zaměstnavatel umožnit nahlédnutí do evidence pracovní doby a do účtu mzdy a umožnit pořízení výpisů nebo stejnopisů na náklady zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Kontrolní vazby',
    },
    {
      type: 'list',
      items: [
        'rozvrh směn',
        'docházková data',
        'schválené změny rozvrhu',
        'žádosti o dovolenou',
        'doklady překážek',
        'schválení přesčasu',
        'pracovní pohotovost',
        'mzdové výstupy',
        'opravy minulých období',
      ],
    },
    {
      type: 'heading',
      text: 'Měsíční uzávěrka evidence',
    },
    {
      type: 'list',
      items: [
        'načíst platný rozvrh',
        'načíst skutečnou evidenci',
        'vyhledat chybějící a překrývající se záznamy',
        'klasifikovat rozdíly',
        'ověřit schválení',
        'zkontrolovat přestávky a odpočinek',
        'zkontrolovat přesčas, noc, víkend a svátek',
        'uzavřít období proti dalším neřízeným změnám',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'evidovat pouze příchod a odchod',
        'evidovat pouze měsíční součet',
        'přenést odpovědnost na zaměstnance',
        'sloučit více pracovních vztahů',
        'automaticky vytvářet přesčas z pozdního odchodu',
        'neuchovat historii oprav',
        'neumožnit zaměstnanci přístup k jeho evidenci',
        'uzavřít mzdu bez porovnání s rozvrhem',
      ],
    },
    {
      type: 'summary',
      items: [
        'Evidence pracovní doby je odpovědností zaměstnavatele.',
        'Musí obsahovat konkrétní začátky a konce zákonem sledovaných časů.',
        'Evidence přítomnosti není bez dalšího evidencí pracovní doby.',
        'Každý pracovněprávní vztah se eviduje samostatně.',
        'Opravy musí zachovat historii, důvod a schválení.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'work-time-records-card-01',
      front: 'Kdo odpovídá za evidenci pracovní doby?',
      back: 'Zaměstnavatel.',
      explanation:
        'Zaměstnanec může poskytovat součinnost, odpovědnost se na něj nepřenáší.',
      skillIds: ['work-time-records-responsibility'],
    },
    {
      id: 'work-time-records-card-02',
      front:
        'Je evidence příchodů a odchodů automaticky evidencí pracovní doby?',
      back: 'Ne.',
      explanation:
        'Musí být odlišena skutečná práce, přestávky a další kategorie.',
      skillIds: ['work-time-records-required-data'],
    },
    {
      id: 'work-time-records-card-03',
      front: 'Co musí být patrné u práce přesčas?',
      back: 'Začátek a konec a vazba na práci nařízenou nebo schválenou zaměstnavatelem.',
      explanation: 'Pozdní odchod sám o sobě nestačí.',
      skillIds: ['work-time-records-required-data'],
    },
    {
      id: 'work-time-records-card-04',
      front: 'Co musí obsahovat oprava evidence?',
      back: 'Původní a nový údaj, důvod, datum, autora a schválení.',
      explanation: 'Původní historie nesmí zmizet.',
      skillIds: ['work-time-records-audit-trail'],
    },
  ],
  exercises: [
    {
      id: 'work-time-records-exercise-01',
      type: 'multiple_choice',
      prompt: 'Které údaje patří do minimální zákonné evidence pracovní doby?',
      options: [
        {
          id: 'shift',
          text: 'Začátek a konec odpracované směny.',
        },
        {
          id: 'overtime',
          text: 'Začátek a konec práce přesčas.',
        },
        {
          id: 'night',
          text: 'Začátek a konec noční práce.',
        },
        {
          id: 'standby',
          text: 'Začátek a konec pracovní pohotovosti.',
        },
        {
          id: 'salary-only',
          text: 'Pouze výsledná čistá mzda.',
        },
      ],
      correctOptionIds: ['shift', 'overtime', 'night', 'standby'],
      skillIds: ['work-time-records-required-data'],
      explanation:
        'Evidence musí umožnit časovou kontrolu zákonných kategorií.',
      commonMistake: 'Vést jen měsíční součet nebo mzdový výsledek.',
    },
    {
      id: 'work-time-records-exercise-02',
      type: 'single_choice',
      prompt:
        'Turniket ukazuje přítomnost 7:42–16:48. Lze celý interval automaticky označit za práci?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne, je nutné určit skutečnou práci a přestávky.',
        },
        {
          id: 'c',
          text: 'Ano, pokud je zaměstnanec na plný úvazek.',
        },
        {
          id: 'd',
          text: 'Ano, pokud systém nic jiného neobsahuje.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['work-time-records-required-data'],
      explanation: 'Evidence přítomnosti a pracovní doby nejsou totožné.',
      commonMistake: 'Převzít bez kontroly celý interval mezi turnikety.',
    },
    {
      id: 'work-time-records-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď měsíční uzávěrku evidence pracovní doby.',
      steps: [
        {
          id: 'schedule',
          text: 'Načíst platný rozvrh.',
        },
        {
          id: 'actual',
          text: 'Načíst skutečné časové záznamy.',
        },
        {
          id: 'differences',
          text: 'Vyhledat rozdíly, mezery a překryvy.',
        },
        {
          id: 'classify',
          text: 'Klasifikovat jednotlivé odchylky.',
        },
        {
          id: 'approve',
          text: 'Ověřit podklady a schválení.',
        },
        {
          id: 'close',
          text: 'Uzavřít období a předat mzdové vstupy.',
        },
      ],
      correctOrder: [
        'schedule',
        'actual',
        'differences',
        'classify',
        'approve',
        'close',
      ],
      skillIds: ['work-time-records-audit-trail'],
      explanation: 'Evidence se uzavírá až po porovnání a schválení rozdílů.',
      commonMistake: 'Předat do mzdy syrové záznamy bez klasifikace.',
    },
    {
      id: 'work-time-records-exercise-04',
      type: 'single_choice',
      prompt:
        'Kdo nese konečnou odpovědnost, když si zaměstnanec zapomněl vyplnit docházku?',
      options: [
        {
          id: 'a',
          text: 'Zaměstnanec.',
        },
        {
          id: 'b',
          text: 'Zaměstnavatel.',
        },
        {
          id: 'c',
          text: 'Dodavatel softwaru.',
        },
        {
          id: 'd',
          text: 'Nikdo.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['work-time-records-responsibility'],
      explanation:
        'Zaměstnavatel může požadovat součinnost, ale odpovědnost zůstává na něm.',
      commonMistake:
        'Považovat samoobslužnou evidenci za přenesení zákonné povinnosti.',
    },
    {
      id: 'work-time-records-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá záznam skutečné pracovní doby, který je odlišný od pouhé evidence přítomnosti?',
      acceptedAnswers: ['evidence pracovní doby', 'evidence pracovni doby'],
      ignoreDiacritics: true,
      skillIds: ['work-time-records-required-data'],
      explanation: 'Jde o evidenci pracovní doby.',
      commonMistake: 'Uvést pouze docházka bez rozlišení obsahu.',
    },
    {
      id: 'work-time-records-exercise-06',
      type: 'single_choice',
      prompt:
        'Rozvrh končí v 16:00 a turniket ukazuje odchod v 17:00. Co je správně?',
      options: [
        {
          id: 'a',
          text: 'Automaticky vykázat hodinu přesčasu.',
        },
        {
          id: 'b',
          text: 'Prověřit skutečný výkon práce a schválení zaměstnavatele.',
        },
        {
          id: 'c',
          text: 'Automaticky zkrátit další směnu.',
        },
        {
          id: 'd',
          text: 'Záznam smazat.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['work-time-records-audit-trail'],
      explanation: 'Pozdní odchod je odchylka, nikoli automaticky přesčas.',
      commonMistake: 'Převést fyzickou přítomnost přímo na mzdovou kategorii.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Evidence pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII9Evidencepracovnidoby',
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
      title: 'MPSV – Přestávka v práci a bezpečnostní přestávka',
      url: 'https://ppropo.mpsv.cz/VIII4Prestavkavpraciabezpecnostn',
      kind: 'official',
    },
  ],
})
