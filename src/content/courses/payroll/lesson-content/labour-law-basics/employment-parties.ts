import { defineLessonContent } from '../define'

export const employmentPartiesContent = defineLessonContent({
  moduleId: 'labour-law-basics',
  skillIds: [
    'employment-party-identification',
    'employment-rights-duties',
    'manager-role-recognition',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-10',
    note: 'Základní vymezení zaměstnance, zaměstnavatele a vedoucího zaměstnance a jejich význam pro mzdovou agendu ověřené pro české právní prostředí roku 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Kdo vstupuje do pracovněprávního vztahu',
    },
    {
      type: 'paragraph',
      text: 'Pracovněprávní vztah spojuje zaměstnance a zaměstnavatele. Pro mzdovou agendu nestačí znát jejich jména. Je nutné správně určit právní subjekt, konkrétní pracovní vztah, oprávněné zástupce a osoby, které smějí rozhodovat nebo předávat mzdové podklady.',
    },
    {
      type: 'definition',
      term: 'Zaměstnanec',
      definition:
        'Fyzická osoba, která se zavázala k výkonu závislé práce v základním pracovněprávním vztahu.',
    },
    {
      type: 'definition',
      term: 'Zaměstnavatel',
      definition:
        'Osoba, pro kterou se fyzická osoba zavázala k výkonu závislé práce v základním pracovněprávním vztahu.',
    },
    {
      type: 'heading',
      text: 'Zaměstnanec je vždy fyzická osoba',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnancem nemůže být obchodní společnost ani jiná právnická osoba. Mzdová evidence se vede ke konkrétní fyzické osobě a jejímu konkrétnímu pracovnímu vztahu. Jedna osoba může mít u stejného zaměstnavatele více souběžných vztahů, které se musí správně rozlišovat.',
    },
    {
      type: 'heading',
      text: 'Zaměstnavatel jako právní subjekt',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatelem může být právnická nebo fyzická osoba. Pro mzdové zpracování je důležité, který subjekt je skutečným zaměstnavatelem, pod jakými identifikátory vystupuje a která organizační část nebo mzdová účtárna za něj proces zajišťuje.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Obchodní značka, provozovna, oddělení nebo externí mzdová kancelář nemusí být samostatným zaměstnavatelem. Rozhodující je právní subjekt uvedený v pracovněprávní dokumentaci.',
    },
    {
      type: 'heading',
      text: 'Základní povinnosti zaměstnance',
    },
    {
      type: 'list',
      items: [
        'vykonávat sjednanou práci osobně',
        'řídit se oprávněnými pokyny zaměstnavatele',
        'dodržovat povinnosti vztahující se k vykonávané práci',
        'poskytovat a oznamovat údaje, které jsou pro pracovněprávní nebo mzdové zpracování právně relevantní',
        'chránit majetek a oprávněné zájmy zaměstnavatele',
      ],
    },
    {
      type: 'heading',
      text: 'Základní povinnosti zaměstnavatele',
    },
    {
      type: 'list',
      items: [
        'přidělovat zaměstnanci práci podle pracovněprávního vztahu',
        'vytvářet zákonné pracovní podmínky',
        'poskytovat mzdu, plat nebo odměnu za vykonanou práci',
        'vést potřebné evidence a plnit oznamovací povinnosti',
        'zajišťovat rovné zacházení a ochranu osobních údajů',
        'vydávat zaměstnanci předepsané doklady a informace',
      ],
    },
    {
      type: 'heading',
      text: 'Vedoucí zaměstnanec',
    },
    {
      type: 'definition',
      term: 'Vedoucí zaměstnanec',
      definition:
        'Zaměstnanec oprávněný ukládat podřízeným pracovní úkoly, organizovat, řídit a kontrolovat jejich práci a dávat jim závazné pokyny.',
    },
    {
      type: 'paragraph',
      text: 'Označení pracovní pozice slovem vedoucí nebo manažer samo o sobě nemusí být rozhodující. Podstatný je skutečný rozsah řídicího oprávnění. Pro mzdovou účetní je důležité vědět, zda konkrétní vedoucí smí schvalovat docházku, přesčas, odměnu nebo jiný mzdový vstup.',
    },
    {
      type: 'heading',
      text: 'Statutární orgán, zástupce a pověřená osoba',
    },
    {
      type: 'paragraph',
      text: 'Za zaměstnavatele mohou jednat osoby oprávněné podle právních předpisů, vnitřního uspořádání nebo uděleného pověření. Mzdová účetní musí rozlišit, kdo smí podepsat pracovněprávní dokument, kdo smí schválit mzdovou položku a kdo pouze technicky předává data.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Samotná nadřízená pozice neznamená automaticky oprávnění ke každému pracovněprávnímu nebo mzdovému rozhodnutí. Rozsah pravomoci musí být doložitelný.',
    },
    {
      type: 'heading',
      text: 'Externí mzdová účetní není zaměstnavatelem',
    },
    {
      type: 'paragraph',
      text: 'Externí zpracovatel může provádět mzdové výpočty, připravovat výstupy a komunikovat podle uděleného oprávnění. Tím se však nestává zaměstnavatelem. Právní vztah zaměstnance zůstává vůči skutečnému zaměstnavateli.',
    },
    {
      type: 'example',
      title: 'Dva pracovní vztahy jednoho zaměstnance',
      situation:
        'Zaměstnanec má u stejné společnosti pracovní poměr a současně samostatnou DPP na odlišnou činnost.',
      solution:
        'Mzdová evidence musí oba vztahy jednoznačně rozlišit, správně přiřadit podklady a současně posoudit jejich vzájemné dopady. Nestačí vést pouze jednu neurčitou kartu osoby bez vazby na konkrétní zaměstnání.',
    },
    {
      type: 'example',
      title: 'Vedoucí požaduje změnu mzdy',
      situation:
        'Týmový vedoucí pošle mzdové účetní požadavek na zvýšení základní mzdy zaměstnance, ale jeho oprávnění takovou změnu schválit není doloženo.',
      solution:
        'Mzdová účetní ověří rozsah pravomoci a vyžádá podklad od oprávněné osoby. Změnu nesmí provést pouze proto, že požadavek přišel od nadřízeného zaměstnance.',
    },
    {
      type: 'heading',
      text: 'Kontrolní otázky pro mzdovou agendu',
    },
    {
      type: 'list',
      items: [
        'Kdo je právním zaměstnavatelem?',
        'Ke kterému pracovnímu vztahu podklad patří?',
        'Kdo je zaměstnancem a jak je jednoznačně identifikován?',
        'Má předávající nebo schvalující osoba potřebnou pravomoc?',
        'Je změna účinná pro správné období?',
        'Je výsledek dohledatelný v personální a mzdové evidenci?',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit provozovnu nebo obchodní značku za zaměstnavatele',
        'smíchat více pracovních vztahů jedné osoby',
        'považovat každého manažera za osobu oprávněnou měnit mzdu',
        'považovat externí mzdovou kancelář za zaměstnavatele',
        'zpracovat podklad bez ověření jeho autora a pravomoci',
        'přenést údaj na jiný pracovní vztah stejného zaměstnance',
      ],
    },
    {
      type: 'summary',
      items: [
        'Zaměstnanec je fyzická osoba vykonávající závislou práci.',
        'Zaměstnavatelem je právní subjekt, pro který se práce vykonává.',
        'Jedna osoba může mít více pracovních vztahů, které musí být v evidenci odděleny.',
        'Vedoucí zaměstnanec řídí práci, ale rozsah jeho mzdových a pracovněprávních pravomocí se musí ověřit.',
        'Externí zpracovatel mezd ani správce systému se nestávají zaměstnavatelem.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employment-parties-card-01',
      front: 'Kdo může být zaměstnancem?',
      back: 'Pouze fyzická osoba.',
      explanation:
        'Zaměstnanec osobně vykonává závislou práci v pracovněprávním vztahu.',
      skillIds: ['employment-party-identification'],
    },
    {
      id: 'employment-parties-card-02',
      front: 'Kdo je zaměstnavatelem?',
      back: 'Právnická nebo fyzická osoba, pro kterou zaměstnanec vykonává závislou práci.',
      explanation:
        'Provozovna nebo externí mzdová kancelář nemusí být samostatným zaměstnavatelem.',
      skillIds: ['employment-party-identification'],
    },
    {
      id: 'employment-parties-card-03',
      front: 'Jak se pozná vedoucí zaměstnanec?',
      back: 'Má oprávnění ukládat úkoly, organizovat, řídit a kontrolovat práci a dávat závazné pokyny.',
      explanation:
        'Rozhoduje skutečná řídicí pravomoc, nikoli pouze název pracovní pozice.',
      skillIds: ['manager-role-recognition'],
    },
    {
      id: 'employment-parties-card-04',
      front: 'Je externí mzdová kancelář zaměstnavatelem?',
      back: 'Ne. Je zpracovatelem sjednaných činností; zaměstnavatelem zůstává právní subjekt pracovního vztahu.',
      explanation:
        'Outsourcing mění způsob zpracování, ne totožnost účastníků pracovněprávního vztahu.',
      skillIds: ['employment-party-identification'],
    },
  ],
  exercises: [
    {
      id: 'employment-parties-exercise-01',
      type: 'single_choice',
      prompt: 'Kdo může být zaměstnancem podle zákoníku práce?',
      options: [
        { id: 'a', text: 'Pouze fyzická osoba.' },
        { id: 'b', text: 'Pouze obchodní společnost.' },
        { id: 'c', text: 'Libovolná organizační složka.' },
        { id: 'd', text: 'Mzdový software.' },
      ],
      correctOptionId: 'a',
      skillIds: ['employment-party-identification'],
      explanation:
        'Zaměstnanec je fyzická osoba zavázaná k osobnímu výkonu závislé práce.',
      commonMistake:
        'Zaměnit zaměstnance za dodavatelskou společnost, která poskytuje služby.',
    },
    {
      id: 'employment-parties-exercise-02',
      type: 'multiple_choice',
      prompt: 'Která oprávnění jsou typická pro vedoucího zaměstnance?',
      options: [
        { id: 'tasks', text: 'Ukládat podřízeným pracovní úkoly.' },
        { id: 'organize', text: 'Organizovat jejich práci.' },
        { id: 'control', text: 'Kontrolovat jejich práci.' },
        { id: 'instructions', text: 'Dávat závazné pracovní pokyny.' },
        {
          id: 'all-payroll',
          text: 'Automaticky schválit libovolnou změnu mzdy bez omezení.',
        },
      ],
      correctOptionIds: ['tasks', 'organize', 'control', 'instructions'],
      skillIds: ['manager-role-recognition'],
      explanation:
        'Vedoucí postavení vychází z řídicí pravomoci; konkrétní mzdová oprávnění mohou být dále omezena.',
      commonMistake:
        'Odvodit neomezenou mzdovou pravomoc pouze z vedoucího postavení.',
    },
    {
      id: 'employment-parties-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kontrolu požadavku vedoucího na změnu základní mzdy.',
      steps: [
        {
          id: 'identify',
          text: 'Identifikovat zaměstnance a pracovní vztah.',
        },
        {
          id: 'authority',
          text: 'Ověřit pravomoc osoby, která změnu požaduje.',
        },
        {
          id: 'document',
          text: 'Zkontrolovat písemný podklad a datum účinnosti.',
        },
        {
          id: 'process',
          text: 'Změnu zadat do správného mzdového období.',
        },
        {
          id: 'retain',
          text: 'Uchovat podklad a záznam provedené kontroly.',
        },
      ],
      correctOrder: ['identify', 'authority', 'document', 'process', 'retain'],
      skillIds: ['employment-rights-duties'],
      explanation:
        'Nejprve se ověřuje vztah, pravomoc a dokument; teprve potom se údaj zpracuje.',
      commonMistake:
        'Provést změnu jen podle funkce odesílatele bez ověření oprávnění.',
    },
    {
      id: 'employment-parties-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má u stejné firmy pracovní poměr i DPP. Jak má být vedena mzdová evidence?',
      options: [
        {
          id: 'a',
          text: 'Oba vztahy sloučit bez možnosti rozlišení.',
        },
        {
          id: 'b',
          text: 'Vést osobu jednotně, ale každý pracovní vztah a jeho podklady jednoznačně rozlišit.',
        },
        {
          id: 'c',
          text: 'DPP neevidovat.',
        },
        {
          id: 'd',
          text: 'Každý měsíc náhodně vybrat jeden vztah.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employment-party-identification'],
      explanation:
        'Údaje osoby mohou být propojené, ale právní vztahy musí být samostatně identifikovatelné.',
      commonMistake:
        'Přiřadit docházku nebo odměnu k nesprávnému vztahu stejného zaměstnance.',
    },
    {
      id: 'employment-parties-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá zaměstnanec oprávněný řídit a kontrolovat práci podřízených?',
      acceptedAnswers: ['vedoucí zaměstnanec', 'vedouci zamestnanec'],
      ignoreDiacritics: true,
      skillIds: ['manager-role-recognition'],
      explanation: 'Zákoník práce používá pojem vedoucí zaměstnanec.',
      commonMistake:
        'Použít pouze neformální název manažer bez ověření skutečných pravomocí.',
    },
    {
      id: 'employment-parties-exercise-06',
      type: 'single_choice',
      prompt: 'Které tvrzení o externí mzdové kanceláři je správné?',
      options: [
        {
          id: 'a',
          text: 'Automaticky se stává zaměstnavatelem všech zpracovaných osob.',
        },
        {
          id: 'b',
          text: 'Zpracovává sjednané úkoly, ale zaměstnavatelem zůstává subjekt pracovního vztahu.',
        },
        {
          id: 'c',
          text: 'Může bez pověření měnit pracovněprávní vztahy.',
        },
        {
          id: 'd',
          text: 'Nemusí chránit předané osobní údaje.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employment-party-identification'],
      explanation:
        'Technické nebo odborné zpracování mezd nemění účastníky pracovněprávního vztahu.',
      commonMistake:
        'Zaměnit pověřeného dodavatele služby za právního zaměstnavatele.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Zaměstnanec a vedoucí zaměstnanec',
      url: 'https://ppropo.mpsv.cz/III2Zamestnanec',
      kind: 'official',
    },
    {
      title: 'MPSV – Základní pracovněprávní vztahy',
      url: 'https://ppropo.mpsv.cz/IVZakladnipracovnepravnivztahy',
      kind: 'official',
    },
    {
      title: 'MPSV – Základní zásady pracovněprávních vztahů',
      url: 'https://ppropo.mpsv.cz/I2Zakladnizasadypracovnepravnich',
      kind: 'official',
    },
  ],
})
