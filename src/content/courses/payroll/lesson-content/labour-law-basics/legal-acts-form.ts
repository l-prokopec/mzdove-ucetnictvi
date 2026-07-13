import { defineLessonContent } from '../define'

export const legalActsFormContent = defineLessonContent({
  moduleId: 'labour-law-basics',
  skillIds: [
    'legal-act-form',
    'effective-date-control',
    'document-delivery-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-10',
    note: 'Základní pravidla formy pracovněprávního jednání, účinnosti, času a doručování ověřená pro české právní prostředí roku 2026; konkrétní zvláštní režimy se vždy ověřují podle typu dokumentu.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Pracovněprávní jednání',
    },
    {
      type: 'paragraph',
      text: 'Práva a povinnosti v pracovním vztahu vznikají, mění se nebo zanikají prostřednictvím právních jednání a dalších právních skutečností. Mzdová účetní musí vědět, zda má dokument správnou formu, kdo jej učinil, kdy byl účinný a zda byl potřebným způsobem doručen.',
    },
    {
      type: 'definition',
      term: 'Pracovněprávní jednání',
      definition:
        'Projev vůle směřující ke vzniku, změně nebo zániku práv a povinností v pracovněprávním vztahu.',
    },
    {
      type: 'heading',
      text: 'Jednostranné a dvoustranné jednání',
    },
    {
      type: 'list',
      items: [
        'jednostranné jednání činí jedna strana, například výpověď',
        'dvoustranné jednání vzniká shodnou vůlí obou stran, například pracovní smlouva nebo dohoda o změně',
        'některá rozhodnutí zaměstnavatele musí být zaměstnanci oznámena nebo doručena',
        'mzdová účetní musí rozlišit návrh, schválení, podepsaný dokument a účinné jednání',
      ],
    },
    {
      type: 'heading',
      text: 'Písemná, ústní a jiná forma',
    },
    {
      type: 'paragraph',
      text: 'Právní jednání může být učiněno různými způsoby, avšak zákon nebo dohoda stran u řady pracovněprávních dokumentů vyžaduje písemnou formu. Písemnost musí zachytit obsah a umožnit určit jednající osobu. U elektronického jednání je nutné ověřit také požadavky na podpis, dostupnost dokumentu a případný zvláštní režim doručení.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Běžný e-mail může v některých situacích zachytit písemné jednání, ale nelze automaticky předpokládat, že splňuje všechny požadavky na podpis a doručení každého pracovněprávního dokumentu.',
    },
    {
      type: 'heading',
      text: 'Dokumenty, u nichž je forma zásadní',
    },
    {
      type: 'list',
      items: [
        'pracovní smlouva',
        'DPP a DPČ',
        'dohody o změně pracovního vztahu',
        'výpověď a další způsoby rozvázání pracovního poměru',
        'mzdové a platové dokumenty, vyžaduje-li to zákon nebo povaha úkonu',
        'další dokumenty, pro které písemnou formu stanoví právní předpis nebo dohoda',
      ],
    },
    {
      type: 'heading',
      text: 'Podpis a oprávnění',
    },
    {
      type: 'paragraph',
      text: 'Nestačí, že dokument fyzicky existuje. Musí být možné ověřit, kdo jej učinil a zda měl oprávnění jednat za zaměstnavatele nebo za zaměstnance. U elektronických dokumentů se posuzuje použitý způsob podpisu a konkrétní právní požadavek.',
    },
    {
      type: 'heading',
      text: 'Datum podpisu, účinnost a mzdové období',
    },
    {
      type: 'paragraph',
      text: 'Datum vytvoření nebo podpisu dokumentu nemusí být totožné s datem, od kterého se mění práva a povinnosti. Mzdová účetní musí z dokumentu zjistit datum účinnosti a přiřadit změnu do správného mzdového období.',
    },
    {
      type: 'example',
      title: 'Změna mzdy podepsaná předem',
      situation:
        'Dodatek je podepsán 20. června, ale výslovně stanoví změnu základní mzdy od 1. července.',
      solution:
        'Pro mzdové zpracování je rozhodné datum účinnosti 1. července. Datum podpisu dokládá, kdy byl dokument uzavřen, ale samo neurčuje období změny.',
    },
    {
      type: 'heading',
      text: 'Lhůta a doba',
    },
    {
      type: 'paragraph',
      text: 'Pracovní právo používá různé časové konstrukce. Lhůta zpravidla vymezuje čas pro provedení úkonu, zatímco doba vymezuje trvání určitého právního stavu nebo vztahu. Konkrétní počítání se musí vždy ověřit podle použitého ustanovení.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Mzdová účetní nemá složité sporné počítání času odhadovat. U výpovědí, doručování, zkušební doby nebo jiných citlivých situací má pracovat s doloženým stanoviskem oprávněné osoby.',
    },
    {
      type: 'heading',
      text: 'Doručení',
    },
    {
      type: 'definition',
      term: 'Doručení',
      definition:
        'Proces, kterým se písemnost dostane adresátovi způsobem vyžadovaným pro daný typ dokumentu a může vyvolat zamýšlené právní účinky.',
    },
    {
      type: 'paragraph',
      text: 'U vybraných pracovněprávních písemností stanoví zákoník práce zvláštní pravidla doručování. Ne každá běžná provozní zpráva podléhá stejnému režimu. Před použitím e-mailu, datové schránky, pošty nebo osobního předání je nutné určit typ dokumentu a požadavky, které se na něj vztahují.',
    },
    {
      type: 'heading',
      text: 'Důkaz o předání',
    },
    {
      type: 'list',
      items: [
        'identita odesílatele a adresáta',
        'obsah a verze dokumentu',
        'datum a způsob odeslání',
        'datum převzetí nebo jiný výsledek doručování',
        'podpis, potvrzení nebo systémový záznam podle použitého způsobu',
        'vazba na zaměstnance a konkrétní pracovní vztah',
      ],
    },
    {
      type: 'example',
      title: 'Výpověď uložená pouze ve sdílené složce',
      situation:
        'Vedoucí nahraje podepsanou výpověď do interní složky a požádá mzdovou účetní, aby podle ní ukončila zaměstnance.',
      solution:
        'Samotné uložení dokumentu neprokazuje jeho doručení zaměstnanci ani datum právních účinků. Mzdová účetní musí vyžádat ověření řádného doručení a doložené datum, podle kterého se zpracuje skončení.',
    },
    {
      type: 'heading',
      text: 'Elektronické dokumenty',
    },
    {
      type: 'paragraph',
      text: 'Elektronická forma může být přípustná, ale musí splnit požadavky konkrétního jednání. Je nutné zajistit identifikaci jednající osoby, neměnnost nebo dohledatelnost verze, dostupnost dokumentu a správný způsob doručení.',
    },
    {
      type: 'heading',
      text: 'Kontrolní checklist pro mzdovou účetní',
    },
    {
      type: 'list',
      items: [
        'Je dokument úplný a čitelný?',
        'Je zřejmé, kdo jej učinil a podepsal?',
        'Má jednající osoba potřebné oprávnění?',
        'Je dodržena vyžadovaná forma?',
        'Jaké je datum podpisu a jaké datum účinnosti?',
        'Byl dokument potřebným způsobem doručen?',
        'Ke kterému zaměstnanci a vztahu patří?',
        'Je dokument uložen s kontrolní stopou?',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit návrh dokumentu za podepsané právní jednání',
        'použít datum podpisu místo výslovného data účinnosti',
        'považovat odeslání e-mailu automaticky za řádné doručení',
        'neověřit oprávnění podepisující osoby',
        'zpracovat skončení bez důkazu o rozhodném datu',
        'uložit dokument bez vazby na konkrétní pracovní vztah',
      ],
    },
    {
      type: 'summary',
      items: [
        'Pracovněprávní jednání může zakládat, měnit nebo ukončovat práva a povinnosti.',
        'U mnoha důležitých dokumentů je nezbytná písemná forma a ověřitelné oprávnění jednající osoby.',
        'Datum podpisu, datum účinnosti a mzdové období mohou být rozdílné.',
        'U vybraných písemností je nutné dodržet zvláštní pravidla doručování.',
        'Mzdová účetní zpracovává pouze doložený právní výsledek a spornou formu nebo doručení eskaluje.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'legal-acts-form-card-01',
      front: 'Co je pracovněprávní jednání?',
      back: 'Projev vůle směřující ke vzniku, změně nebo zániku pracovněprávních práv a povinností.',
      explanation:
        'Může být jednostranné nebo dvoustranné a zákon může vyžadovat konkrétní formu.',
      skillIds: ['legal-act-form'],
    },
    {
      id: 'legal-acts-form-card-02',
      front: 'Je datum podpisu vždy datem účinnosti?',
      back: 'Ne. Dokument může stanovit jiné datum, od kterého změna působí.',
      explanation:
        'Mzdové zpracování se řídí právně rozhodným datem účinnosti.',
      skillIds: ['effective-date-control'],
    },
    {
      id: 'legal-acts-form-card-03',
      front: 'Je odeslaný e-mail vždy dostatečným doručením?',
      back: 'Ne. Záleží na typu dokumentu a požadavcích právní úpravy pro jeho formu a doručení.',
      explanation:
        'Vybrané pracovněprávní písemnosti podléhají zvláštním pravidlům.',
      skillIds: ['document-delivery-control'],
    },
    {
      id: 'legal-acts-form-card-04',
      front: 'Co musí mzdová účetní ověřit před zpracováním dokumentu?',
      back: 'Úplnost, autora a jeho oprávnění, formu, účinnost, doručení a vazbu na správný vztah.',
      explanation:
        'Teprve úplný a účinný podklad lze bezpečně převést do mzdové evidence.',
      skillIds: [
        'legal-act-form',
        'effective-date-control',
        'document-delivery-control',
      ],
    },
  ],
  exercises: [
    {
      id: 'legal-acts-form-exercise-01',
      type: 'single_choice',
      prompt:
        'Dodatek byl podepsán 20. června a stanoví změnu mzdy od 1. července. Kdy se změna použije?',
      options: [
        { id: 'a', text: 'Od 20. června.' },
        { id: 'b', text: 'Od 1. července.' },
        { id: 'c', text: 'Od data vložení do mzdového systému.' },
        { id: 'd', text: 'Až od dalšího kalendářního roku.' },
      ],
      correctOptionId: 'b',
      skillIds: ['effective-date-control'],
      explanation: 'Dokument výslovně stanoví účinnost od 1. července.',
      commonMistake:
        'Zaměnit datum podpisu za datum, od kterého má změna právní a mzdové účinky.',
    },
    {
      id: 'legal-acts-form-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které položky má mzdová účetní ověřit u pracovněprávního dokumentu?',
      options: [
        { id: 'author', text: 'Kdo dokument učinil nebo podepsal.' },
        {
          id: 'font',
          text: 'Zda je dokument napsán oblíbeným fontem zaměstnance.',
        },
        { id: 'authority', text: 'Oprávnění jednající osoby.' },
        { id: 'effective', text: 'Datum účinnosti.' },
        { id: 'delivery', text: 'Potřebný způsob a výsledek doručení.' },
      ],
      correctOptionIds: ['author', 'authority', 'effective', 'delivery'],
      skillIds: [
        'legal-act-form',
        'effective-date-control',
        'document-delivery-control',
      ],
      explanation:
        'Tyto údaje rozhodují o použitelnosti dokumentu pro mzdové a personální zpracování.',
      commonMistake:
        'Kontrolovat pouze existenci souboru bez ověření jeho právního významu.',
    },
    {
      id: 'legal-acts-form-exercise-03',
      type: 'multiple_choice',
      prompt: 'Které kontroly jsou důležité u pracovněprávní písemnosti?',
      options: [
        { id: 'a', text: 'Zda byla zachována požadovaná forma.' },
        { id: 'd', text: 'Zda má vždy barevné firemní logo.' },
        { id: 'b', text: 'Zda ji podepsala nebo učinila oprávněná osoba.' },
        {
          id: 'e',
          text: 'Zda byla účinnost automaticky posunuta na datum archivace.',
        },
        {
          id: 'c',
          text: 'Zda byla doručena způsobem odpovídajícím jejímu typu.',
        },
      ],
      correctOptionIds: ['a', 'b', 'c'],
      skillIds: [
        'legal-act-form',
        'effective-date-control',
        'document-delivery-control',
      ],
      explanation:
        'Forma, oprávnění, doručení a účinnost jsou samostatné kontrolní otázky.',
      commonMistake:
        'Kontrolovat jen vzhled dokumentu a přehlédnout jeho právní účinky.',
    },
    {
      id: 'legal-acts-form-exercise-04',
      type: 'single_choice',
      prompt:
        'Podepsaná výpověď je pouze uložena ve sdílené složce. Co ještě chybí pro bezpečné mzdové zpracování skončení?',
      options: [
        {
          id: 'a',
          text: 'Doložení potřebného doručení a rozhodného data.',
        },
        {
          id: 'b',
          text: 'Změna barvy názvu souboru.',
        },
        {
          id: 'c',
          text: 'Ústní odhad mzdové účetní.',
        },
        {
          id: 'd',
          text: 'Automatické vymazání zaměstnance.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['document-delivery-control'],
      explanation:
        'Uložení souboru neprokazuje, že dokument vyvolal zamýšlené právní účinky vůči zaměstnanci.',
      commonMistake:
        'Považovat interní dostupnost dokumentu za jeho doručení adresátovi.',
    },
    {
      id: 'legal-acts-form-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá datum, od kterého dokument vyvolává zamýšlené právní účinky?',
      acceptedAnswers: ['datum účinnosti', 'ucinnost', 'účinnost'],
      ignoreDiacritics: true,
      skillIds: ['effective-date-control'],
      explanation:
        'Pro mzdové období je rozhodné datum účinnosti, nikoli vždy datum podpisu.',
      commonMistake:
        'Uvést automaticky datum podpisu bez kontroly textu dokumentu.',
    },
    {
      id: 'legal-acts-form-exercise-06',
      type: 'single_choice',
      prompt:
        'Které tvrzení o elektronickém pracovněprávním dokumentu je správné?',
      options: [
        {
          id: 'a',
          text: 'Elektronická forma je vždy zakázaná.',
        },
        {
          id: 'b',
          text: 'Musí splnit požadavky konkrétního jednání na identifikaci, podpis, obsah a případné doručení.',
        },
        {
          id: 'c',
          text: 'Každý nepodepsaný e-mail vždy nahrazuje pracovní smlouvu.',
        },
        {
          id: 'd',
          text: 'Elektronický dokument nemusí být zaměstnanci dostupný.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['legal-act-form', 'document-delivery-control'],
      explanation:
        'Přípustnost a účinky elektronické formy závisí na konkrétním dokumentu a splnění zákonných požadavků.',
      commonMistake:
        'Použít jedno obecné pravidlo pro všechny druhy pracovněprávních písemností.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Právní jednání v pracovněprávních vztazích',
      url: 'https://ppropo.mpsv.cz/I4Pravnijednanivpracovnepravnich',
      kind: 'official',
    },
    {
      title: 'MPSV – Doručování písemností',
      url: 'https://ppropo.mpsv.cz/XVIIDorucovanipisemnosti',
      kind: 'official',
    },
    {
      title: 'MPSV – Zvláštní pravidla počítání času',
      url: 'https://ppropo.mpsv.cz/18Zvlastnipravidlapocitanicasuvp',
      kind: 'official',
    },
  ],
})
