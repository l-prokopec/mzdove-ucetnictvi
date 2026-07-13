import { defineLessonContent } from '../define'

export const terminationMethodsContent = defineLessonContent({
  moduleId: 'employment-changes-termination',
  skillIds: [
    'termination-method-classification',
    'termination-document-review',
    'protected-period-risk',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-11',
    note: 'Způsoby skončení pracovního poměru, výpovědní důvody, ochranná doba a forma právních jednání ověřené podle zákoníku práce účinného v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Skončení a rozvázání pracovního poměru',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr může skončit právním jednáním účastníků, uplynutím sjednané doby, zvláštní právní událostí nebo smrtí. Pro mzdovou účetní je rozhodující přesně určit způsob, právní důvod, den skončení a navazující mzdové nároky.',
    },
    {
      type: 'definition',
      term: 'Rozvázání pracovního poměru',
      definition:
        'Skončení pracovního poměru dohodou, výpovědí, okamžitým zrušením nebo zrušením ve zkušební době.',
    },
    {
      type: 'heading',
      text: 'Hlavní způsoby',
    },
    {
      type: 'list',
      items: [
        'dohoda o rozvázání pracovního poměru',
        'výpověď zaměstnance nebo zaměstnavatele',
        'okamžité zrušení pracovního poměru',
        'zrušení pracovního poměru ve zkušební době',
        'uplynutí sjednané doby',
        'další zákonné způsoby a právní události',
      ],
    },
    {
      type: 'heading',
      text: 'Dohoda o rozvázání',
    },
    {
      type: 'paragraph',
      text: 'Dohoda je dvoustranné právní jednání. Zaměstnavatel a zaměstnanec se musí shodnout na skončení a na dni, kdy pracovní poměr skončí. Dohoda musí být písemná a každá strana obdrží své vyhotovení.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Dohoda není totéž co výpověď. Neexistuje jednostranná „výpověď dohodou“. Buď se obě strany dohodnou, nebo jedna strana učiní jiné zákonné jednostranné jednání.',
    },
    {
      type: 'paragraph',
      text: 'Důvod skončení nemusí být v dohodě uveden vždy, ale pro vznik odstupného nebo jiného nároku je jeho přesné zachycení zásadní. Mzdová účetní musí mít doložen právní důvod, pokud podle něj posuzuje zvláštní plnění.',
    },
    {
      type: 'heading',
      text: 'Výpověď zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může dát výpověď z jakéhokoli důvodu nebo bez uvedení důvodu. Výpověď musí být písemná a musí být zaměstnavateli doručena. Pracovní poměr nekončí okamžitě, ale uplynutím výpovědní doby.',
    },
    {
      type: 'heading',
      text: 'Výpověď zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel může dát výpověď pouze z důvodu výslovně uvedeného v zákoníku práce. Důvod musí být ve výpovědi skutkově vymezen tak, aby jej nebylo možné zaměnit s jiným, a nesmí být později měněn.',
    },
    {
      type: 'list',
      items: [
        'zrušení zaměstnavatele nebo jeho části',
        'přemístění zaměstnavatele nebo jeho části',
        'nadbytečnost v důsledku organizační změny',
        'dlouhodobé pozbytí zdravotní způsobilosti k dosavadní práci',
        'dosažení nejvyšší přípustné expozice',
        'nesplnění zákonných předpokladů nebo požadavků pro práci',
        'závažné nebo soustavné porušování pracovních povinností za zákonných podmínek',
        'zvlášť hrubé porušení povinnosti podle zvláštního ustanovení zákoníku práce',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Mzdová účetní nesmí sama určit výpovědní důvod ani jej doplňovat do dokumentu. Musí vycházet z finálního právního jednání a podkladu oprávněné osoby.',
    },
    {
      type: 'heading',
      text: 'Ochranná doba',
    },
    {
      type: 'paragraph',
      text: 'V některých situacích zákon zaměstnavateli zakazuje dát zaměstnanci výpověď, například během vybraných překážek nebo chráněných období. Rozhodný je stav v době doručení výpovědi. Zákon současně stanoví výjimky podle konkrétního výpovědního důvodu.',
    },
    {
      type: 'paragraph',
      text: 'Pokud ochranná doba začne až po doručení výpovědi a výpovědní doba by v ní měla skončit, může se její běh prodloužit o chráněnou dobu, ledaže zaměstnanec sdělí, že na prodloužení netrvá. Přesný konec musí určit oprávněná pracovněprávní osoba.',
    },
    {
      type: 'example',
      title: 'Pracovní neschopnost během výpovědní doby',
      situation:
        'Zaměstnanci byla doručena výpověď a v průběhu výpovědní doby vznikla dočasná pracovní neschopnost.',
      solution:
        'Mzdová účetní nesmí automaticky ponechat původně vypočtené datum skončení. Vyžádá pracovněprávní posouzení ochranné doby, výjimky a případného prodloužení a teprve podle výsledku upraví evidenci.',
    },
    {
      type: 'heading',
      text: 'Okamžité zrušení',
    },
    {
      type: 'paragraph',
      text: 'Okamžité zrušení je výjimečný způsob skončení pracovního poměru. Zaměstnavatel i zaměstnanec jej mohou použít pouze ze zákonem vymezených důvodů a v předepsaných lhůtách. Musí být písemné, důvod musí být nezaměnitelně vymezen a pracovní poměr končí doručením.',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může okamžitě zrušit pracovní poměr zejména při splnění zákonných podmínek souvisejících se zdravotní způsobilostí nebo při nevyplacení mzdy či její části ani v dodatečné zákonné lhůtě. V takovém případě mu může vzniknout nárok na náhradu mzdy odpovídající délce výpovědní doby.',
    },
    {
      type: 'heading',
      text: 'Zrušení ve zkušební době',
    },
    {
      type: 'paragraph',
      text: 'Ve zkušební době může zaměstnavatel i zaměstnanec pracovní poměr písemně zrušit z jakéhokoli důvodu nebo bez uvedení důvodu. Zaměstnavatel však nesmí pracovní poměr zrušit v prvních čtrnácti kalendářních dnech dočasné pracovní neschopnosti nebo karantény zaměstnance.',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr končí dnem doručení zrušení, není-li v písemnosti uveden den pozdější. Mzdová účetní musí zkontrolovat, zda zkušební doba v daný den skutečně ještě trvala.',
    },
    {
      type: 'heading',
      text: 'Ukončení doby určité',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr na dobu určitou končí uplynutím sjednané doby. Před jejím uplynutím jej lze rozvázat také ostatními zákonnými způsoby. Pokud zaměstnanec po uplynutí doby pokračuje s vědomím zaměstnavatele v práci, může se právní režim změnit; mzdová účetní musí případ ihned eskalovat.',
    },
    {
      type: 'heading',
      text: 'Smrt a zvláštní právní události',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr zaniká smrtí zaměstnance. U některých cizinců může skončit také právní událostí spojenou s oprávněním k pobytu nebo zaměstnání. Tyto případy vyžadují individuální právní a mzdové posouzení.',
    },
    {
      type: 'heading',
      text: 'Forma a doručení',
    },
    {
      type: 'list',
      items: [
        'ověřit písemnou formu',
        'ověřit oprávnění jednající osoby',
        'ověřit konkrétní způsob skončení',
        'ověřit důvod, pokud je zákonem požadován nebo ovlivňuje nároky',
        'ověřit datum a výsledek doručení',
        'ověřit případnou ochrannou dobu',
        'uchovat konečnou verzi dokumentu',
      ],
    },
    {
      type: 'example',
      title: 'Ústní oznámení o výpovědi',
      situation:
        'Vedoucí telefonicky oznámí mzdové účtárně, že zaměstnance „propustil s okamžitou platností“.',
      solution:
        'Mzdová účetní zaměstnání neukončí. Vyžádá písemný právní dokument, ověření způsobu, důvodu a doručení. Ústní provozní informace není dostatečným podkladem.',
    },
    {
      type: 'heading',
      text: 'Neplatné rozvázání',
    },
    {
      type: 'paragraph',
      text: 'Platnost rozvázání může být mezi stranami sporná. O neplatnosti rozhoduje soud, nikoli mzdová účetní. Pokud jedna strana tvrdí, že pracovní poměr trvá, mzdová účetní musí postupovat podle právního stanoviska zaměstnavatele a zachovat podklady pro případné náhrady a opravy.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit dohodu za výpověď',
        'ukončit vztah podle nepodepsaného návrhu',
        'neověřit doručení',
        'doplnit výpovědní důvod až dodatečně',
        'ignorovat ochrannou dobu',
        'použít okamžité zrušení jako běžný způsob',
        'nezkontrolovat, zda zkušební doba ještě trvá',
        'ukončit dobu určitou jiným datem než podle dokumentace',
      ],
    },
    {
      type: 'summary',
      items: [
        'Dohoda, výpověď, okamžité zrušení a zrušení ve zkušební době jsou odlišné způsoby rozvázání.',
        'Zaměstnanec může dát výpověď bez důvodu, zaměstnavatel pouze ze zákonného důvodu.',
        'Ochranná doba může ovlivnit možnost výpovědi i konečný den.',
        'Okamžité zrušení je výjimečné a vyžaduje přesný zákonný důvod.',
        'Mzdová účetní zpracovává finální právní výsledek, nikoli neformální pokyn.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'termination-methods-card-01',
      front: 'Může zaměstnanec dát výpověď bez uvedení důvodu?',
      back: 'Ano.',
      explanation:
        'Zaměstnavatel je naopak omezen zákonnými výpovědními důvody.',
      skillIds: ['termination-method-classification'],
    },
    {
      id: 'termination-methods-card-02',
      front: 'Je dohoda o rozvázání jednostranná?',
      back: 'Ne. Vyžaduje souhlas zaměstnavatele i zaměstnance.',
      explanation: 'Dohoda končí sjednaným dnem.',
      skillIds: ['termination-method-classification'],
    },
    {
      id: 'termination-methods-card-03',
      front: 'Kdy končí pracovní poměr při okamžitém zrušení?',
      back: 'Doručením platného okamžitého zrušení.',
      explanation: 'Neprobíhá běžná výpovědní doba.',
      skillIds: ['termination-document-review'],
    },
    {
      id: 'termination-methods-card-04',
      front: 'Kdo rozhoduje o neplatnosti rozvázání pracovního poměru?',
      back: 'Soud.',
      explanation:
        'Mzdová účetní nesmí sama definitivně posoudit spornou platnost.',
      skillIds: ['protected-period-risk'],
    },
  ],
  exercises: [
    {
      id: 'termination-methods-exercise-01',
      type: 'single_choice',
      prompt:
        'Který způsob vyžaduje shodnou vůli zaměstnance a zaměstnavatele?',
      options: [
        {
          id: 'a',
          text: 'Dohoda.',
        },
        {
          id: 'b',
          text: 'Výpověď zaměstnance.',
        },
        {
          id: 'c',
          text: 'Okamžité zrušení.',
        },
        {
          id: 'd',
          text: 'Uplynutí doby určité.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['termination-method-classification'],
      explanation: 'Dohoda je dvoustranné právní jednání.',
      commonMistake: 'Používat výraz „výpověď dohodou“.',
    },
    {
      id: 'termination-methods-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které podmínky má mzdová účetní ověřit u výpovědi zaměstnavatele?',
      options: [
        {
          id: 'written',
          text: 'Písemnou formu.',
        },
        {
          id: 'oral',
          text: 'Pouze ústní souhlas vedoucího.',
        },
        {
          id: 'reason',
          text: 'Zákonný a nezaměnitelně popsaný důvod.',
        },
        {
          id: 'delivery',
          text: 'Doručení zaměstnanci.',
        },
        {
          id: 'protection',
          text: 'Případnou ochrannou dobu.',
        },
      ],
      correctOptionIds: ['written', 'reason', 'delivery', 'protection'],
      skillIds: ['termination-document-review', 'protected-period-risk'],
      explanation:
        'Forma, důvod, doručení a ochranný režim ovlivňují právní účinky.',
      commonMistake:
        'Zpracovat skončení jen podle data uvedeného v personální tabulce.',
    },
    {
      id: 'termination-methods-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Které způsoby mohou podle zákoníku práce vést ke skončení pracovního poměru?',
      options: [
        { id: 'a', text: 'Dohoda stran.' },
        { id: 'd', text: 'Pouhé neformální sdělení kolegovi.' },
        { id: 'b', text: 'Výpověď.' },
        {
          id: 'e',
          text: 'Automatické skončení kvůli jedné absenci bez právního jednání.',
        },
        { id: 'c', text: 'Okamžité zrušení při splnění podmínek.' },
      ],
      correctOptionIds: ['a', 'b', 'c'],
      skillIds: ['termination-document-review'],
      explanation:
        'Způsob skončení musí odpovídat zákonnému institutu a jeho podmínkám.',
      commonMistake: 'Považovat faktické ukončení docházky za právní skončení.',
    },
    {
      id: 'termination-methods-exercise-04',
      type: 'single_choice',
      prompt: 'Může zaměstnavatel dát výpověď bez uvedení zákonného důvodu?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne.',
        },
        {
          id: 'c',
          text: 'Ano, pokud to chce vedoucí.',
        },
        {
          id: 'd',
          text: 'Ano, pokud zaměstnanec nepodepíše dohodu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['termination-method-classification'],
      explanation: 'Zaměstnavatel je vázán důvody uvedenými v zákoníku práce.',
      commonMistake:
        'Přenést pravidlo pro výpověď zaměstnance na zaměstnavatele.',
    },
    {
      id: 'termination-methods-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá období, během kterého zákon v některých případech zakazuje zaměstnavateli dát výpověď?',
      acceptedAnswers: ['ochranná doba', 'ochranna doba'],
      ignoreDiacritics: true,
      skillIds: ['protected-period-risk'],
      explanation: 'Jde o ochrannou dobu.',
      commonMistake: 'Uvést výpovědní dobu.',
    },
    {
      id: 'termination-methods-exercise-06',
      type: 'single_choice',
      prompt:
        'Vedoucí pouze telefonicky oznámil okamžité propuštění. Co má mzdová účetní udělat?',
      options: [
        {
          id: 'a',
          text: 'Ihned zaměstnance odhlásit.',
        },
        {
          id: 'b',
          text: 'Vyžádat písemný dokument a ověřit právní účinky a doručení.',
        },
        {
          id: 'c',
          text: 'Uzavřít docházku ke dni telefonátu.',
        },
        {
          id: 'd',
          text: 'Vyplatit automaticky odstupné.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['termination-document-review'],
      explanation:
        'Ústní informace není dostatečný podklad pro skončení pracovního poměru.',
      commonMistake: 'Zaměnit manažerský pokyn za právní jednání.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Skončení pracovního poměru',
      url: 'https://ppropo.mpsv.cz/VISkoncenipracovnihopomeru',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohoda o rozvázání pracovního poměru',
      url: 'https://ppropo.mpsv.cz/VI1Dohodaorozvazanipracovnihopom',
      kind: 'official',
    },
    {
      title: 'MPSV – Obecné podmínky výpovědi a výpovědní doba',
      url: 'https://ppropo.mpsv.cz/VI21Obecnepodminkyplatnostivypov',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákaz výpovědi',
      url: 'https://ppropo.mpsv.cz/VI222Zakazvypovedi',
      kind: 'official',
    },
  ],
})
