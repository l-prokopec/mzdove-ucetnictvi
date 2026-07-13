import { defineLessonContent } from '../define'

export const agreementComparisonContent = defineLessonContent({
  moduleId: 'work-agreements',
  skillIds: [
    'agreement-type-selection',
    'parallel-relations-control',
    'agreement-risk-identification',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Srovnání pracovního poměru, DPP a DPČ včetně rozsahu práce, evidence, pracovněprávních práv a souběžných vztahů ověřené podle českého zákoníku práce a pravidel účinných v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Tři základní pracovněprávní vztahy',
    },
    {
      type: 'paragraph',
      text: 'Pracovní poměr, DPP a DPČ jsou základní pracovněprávní vztahy, ve kterých lze vykonávat závislou práci. Liší se zejména rozsahem práce, stabilitou vztahu, způsobem evidence a některými pravidly skončení. Volba vztahu se nesmí řídit jen snahou o nižší odvody.',
    },
    {
      type: 'definition',
      term: 'Pracovní poměr',
      definition:
        'Základní pracovněprávní vztah bez zvláštního hodinového omezení typického pro dohody, určený pro soustavný výkon práce podle pracovní smlouvy.',
    },
    {
      type: 'definition',
      term: 'DPP',
      definition:
        'Dohoda s maximálním souhrnným rozsahem 300 hodin práce za kalendářní rok u jednoho zaměstnavatele.',
    },
    {
      type: 'definition',
      term: 'DPČ',
      definition:
        'Dohoda pro práci v průměru nejvýše do poloviny stanovené týdenní pracovní doby, posuzované nejdéle za 52 týdnů.',
    },
    {
      type: 'heading',
      text: 'Rozsah práce jako první rozhodovací kritérium',
    },
    {
      type: 'list',
      items: [
        'DPP – nejvýše 300 hodin za kalendářní rok u jednoho zaměstnavatele',
        'DPČ – v průměru nejvýše polovina stanovené týdenní pracovní doby',
        'pracovní poměr – práce podle sjednané a rozvržené týdenní pracovní doby bez těchto dvou zvláštních limitů',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pokud plánovaný rozsah práce zjevně překračuje limit DPP, nelze problém řešit uzavřením několika DPP u stejného zaměstnavatele. Stejně tak nelze DPČ používat pro dlouhodobý plný pracovní rozsah.',
    },
    {
      type: 'example',
      title: 'Pravidelná práce 30 hodin týdně',
      situation:
        'Zaměstnavatel potřebuje, aby zaměstnanec dlouhodobě pracoval přibližně 30 hodin týdně při stanovené týdenní pracovní době 40 hodin.',
      solution:
        'DPP by pravděpodobně rychle překročila 300 hodin a DPČ by překročila průměrnou polovinu stanovené týdenní pracovní doby. Vhodným pracovněprávním základem je zpravidla pracovní poměr s kratší pracovní dobou.',
    },
    {
      type: 'heading',
      text: 'Forma dokumentu',
    },
    {
      type: 'paragraph',
      text: 'Pracovní smlouva, DPP i DPČ musí být písemné. Každý vztah musí mít vlastní jednoznačný dokument, datum vzniku, dobu trvání, odměňování a evidenci. Technické označení v systému nesmí nahrazovat skutečný právní podklad.',
    },
    {
      type: 'heading',
      text: 'Odměňování',
    },
    {
      type: 'paragraph',
      text: 'V pracovním poměru zaměstnanci náleží mzda nebo plat. U DPP a DPČ náleží odměna z dohody. Ve všech třech vztazích se uplatňuje minimální mzda a podle konkrétní práce také zákonná pravidla příplatků.',
    },
    {
      type: 'heading',
      text: 'Rozvrh a evidence pracovní doby',
    },
    {
      type: 'paragraph',
      text: 'Také u DPP a DPČ musí zaměstnavatel předem rozvrhovat pracovní dobu, pokud není uzavřena písemná dohoda o samorozvrhování. Skutečně odpracovaná doba se eviduje odděleně pro každý vztah.',
    },
    {
      type: 'heading',
      text: 'Dovolená',
    },
    {
      type: 'paragraph',
      text: 'Právo na dovolenou může vzniknout ve všech třech vztazích. U dohod se pro výpočet používá fiktivní týdenní pracovní doba 20 hodin a nárok vyžaduje alespoň čtyřtýdenní trvání vztahu a alespoň 80 hodin započitatelné doby.',
    },
    {
      type: 'heading',
      text: 'Překážky a náhrady',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci na dohody mají právo na pracovní volno při zákonných překážkách, ale náhrada odměny u některých osobních překážek a překážek z důvodu obecného zájmu nevzniká automaticky. V pracovním poměru může být režim náhrad širší.',
    },
    {
      type: 'heading',
      text: 'Skončení vztahu',
    },
    {
      type: 'list',
      items: [
        'pracovní poměr – dohoda, výpověď, okamžité zrušení, zrušení ve zkušební době a další zákonné způsoby',
        'DPP a DPČ – podle sjednaného způsobu, jinak dohoda, patnáctidenní výpověď nebo sjednané okamžité zrušení v zákonném rozsahu',
        'doba určitá – skončení uplynutím sjednané doby',
      ],
    },
    {
      type: 'paragraph',
      text: 'Výpovědní režim dohod je obvykle jednodušší než u pracovního poměru, ale stále vyžaduje písemnou formu a správné doručení.',
    },
    {
      type: 'heading',
      text: 'Daň a pojištění nejsou vlastností názvu vztahu',
    },
    {
      type: 'paragraph',
      text: 'Daňové a pojistné posouzení závisí na druhu vztahu, měsíčním příjmu, souběhu příjmů, podepsaném Prohlášení poplatníka a dalších údajích. Nelze říci, že každá DPP nebo DPČ je automaticky bez pojistného či vždy zdaněná srážkovou daní.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Volba vztahu jen podle očekávané hranice odvodů je riziková. Nejdříve musí vztah odpovídat skutečnému rozsahu a způsobu práce.',
    },
    {
      type: 'heading',
      text: 'Souběh více vztahů',
    },
    {
      type: 'paragraph',
      text: 'Jedna osoba může mít u stejného zaměstnavatele více pracovněprávních vztahů. Každý musí být veden samostatně a práce, odměna, docházka, dovolená a podání musí být přiřazeny ke správnému vztahu.',
    },
    {
      type: 'paragraph',
      text: 'Obecně nesmí zaměstnanec v dalším základním pracovněprávním vztahu u stejného zaměstnavatele vykonávat stejně druhově vymezenou práci. Od června 2025 existuje zvláštní výjimka pro práci na DPP nebo DPČ během rodičovské dovolené u téhož zaměstnavatele.',
    },
    {
      type: 'example',
      title: 'Pracovní poměr a DPP na odlišnou práci',
      situation:
        'Zaměstnanec pracuje v pracovním poměru jako účetní a současně má u stejného zaměstnavatele DPP na jednorázové fotografování firemní akce.',
      solution:
        'Vztahy mohou být vedeny souběžně, pokud jde skutečně o odlišnou práci. Docházka, odměna, daňové a pojistné podklady se přiřadí samostatně.',
    },
    {
      type: 'example',
      title: 'DPP na stejnou práci bez výjimky',
      situation:
        'Zaměstnanec pracuje v pracovním poměru jako skladník a zaměstnavatel mu chce na stejné směny a stejnou práci založit další DPP.',
      solution:
        'Takové uspořádání je rizikové a zpravidla neodpovídá pravidlu oddělení druhu práce. Mzdová účetní změnu sama neprovede a předá ji k pracovněprávnímu posouzení.',
    },
    {
      type: 'heading',
      text: 'Přechod mezi vztahy',
    },
    {
      type: 'paragraph',
      text: 'Přechod z DPP nebo DPČ do pracovního poměru se neprovádí pouhým přepnutím typu v systému. Musí být doloženo skončení nebo změna původního vztahu, vznik nového vztahu, přesná data a navazující registrační kroky.',
    },
    {
      type: 'heading',
      text: 'Kdy je DPP typicky vhodná',
    },
    {
      type: 'list',
      items: [
        'jednorázový nebo omezený pracovní úkol',
        'krátkodobý rozsah bezpečně pod 300 hodinami za rok',
        'sezónní nebo příležitostná práce',
        'samostatně evidovatelná práce odlišná od jiného vztahu',
      ],
    },
    {
      type: 'heading',
      text: 'Kdy je DPČ typicky vhodná',
    },
    {
      type: 'list',
      items: [
        'pravidelnější práce menšího rozsahu',
        'dlouhodobější spolupráce do průměrné poloviny týdenní pracovní doby',
        'rozsah, který by překročil roční limit DPP, ale nepřesahuje limit DPČ',
      ],
    },
    {
      type: 'heading',
      text: 'Kdy je vhodnější pracovní poměr',
    },
    {
      type: 'list',
      items: [
        'soustavná práce ve vyšším rozsahu',
        'dlouhodobá potřeba pravidelného výkonu práce',
        'rozsah nad průměrnou polovinu stanovené týdenní pracovní doby',
        'situace, kdy skutečný obsah odpovídá stabilnímu pracovnímu místu',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní otázky mzdové účetní',
    },
    {
      type: 'list',
      items: [
        'Jaký druh práce bude zaměstnanec skutečně vykonávat?',
        'Jaký je očekávaný rozsah a doba trvání?',
        'Existuje jiný vztah stejné osoby u zaměstnavatele?',
        'Je práce v souběžných vztazích skutečně odlišná?',
        'Je zvolený vztah slučitelný se zákonným limitem?',
        'Jsou jednotlivé vztahy odděleny v docházce a mzdách?',
        'Byly provedeny správné registrační kroky?',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'vybrat DPP jen kvůli očekávanému neplacení pojistného',
        'rozdělit 600 hodin do dvou DPP u stejného zaměstnavatele',
        'použít DPČ pro dlouhodobých 40 hodin týdně',
        'sloučit docházku více vztahů',
        'vykonávat bez výjimky stejnou práci ve dvou vztazích',
        'změnit typ vztahu bez nového pracovněprávního podkladu',
        'považovat dohodáře za osobu bez zaměstnaneckých práv',
      ],
    },
    {
      type: 'summary',
      items: [
        'Pracovní poměr, DPP a DPČ jsou zaměstnanecké pracovněprávní vztahy.',
        'DPP se omezuje 300 hodinami ročně, DPČ průměrnou polovinou týdenní pracovní doby.',
        'Také u dohod se řeší rozvrh, evidence, dovolená, příplatky a písemné skončení.',
        'Daň a pojištění závisí na konkrétním příjmu a podkladech, nikoli jen na názvu vztahu.',
        'Souběžné vztahy musí být právně, časově a mzdově oddělené.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'agreement-comparison-card-01',
      front: 'Jaký hlavní limit odlišuje DPP?',
      back: 'Nejvýše 300 hodin práce za rok u jednoho zaměstnavatele.',
      explanation: 'Všechny DPP u téhož zaměstnavatele se pro limit sčítají.',
      skillIds: ['agreement-type-selection'],
    },
    {
      id: 'agreement-comparison-card-02',
      front: 'Jaký hlavní limit odlišuje DPČ?',
      back: 'Průměrně nejvýše polovina stanovené týdenní pracovní doby.',
      explanation: 'Posuzuje se nejdéle za 52 týdnů.',
      skillIds: ['agreement-type-selection'],
    },
    {
      id: 'agreement-comparison-card-03',
      front: 'Je každá DPP automaticky bez pojistného?',
      back: 'Ne.',
      explanation: 'Pojistné závisí na měsíčním příjmu a souběhu dohod.',
      skillIds: ['agreement-risk-identification'],
    },
    {
      id: 'agreement-comparison-card-04',
      front: 'Jak se evidují souběžné vztahy jedné osoby?',
      back: 'Každý samostatně, včetně práce, odměny, dovolené a podání.',
      explanation:
        'Společná identita osoby neznamená společnou mzdovou kartu všech vztahů.',
      skillIds: ['parallel-relations-control'],
    },
  ],
  exercises: [
    {
      id: 'agreement-comparison-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel potřebuje dlouhodobě 30 hodin práce týdně. Který vztah je při běžné 40hodinové týdenní době nejvhodnější?',
      options: [
        {
          id: 'a',
          text: 'DPP.',
        },
        {
          id: 'b',
          text: 'DPČ.',
        },
        {
          id: 'c',
          text: 'Pracovní poměr s kratší pracovní dobou.',
        },
        {
          id: 'd',
          text: 'Faktura bez dalšího posouzení.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['agreement-type-selection'],
      explanation:
        'Rozsah překračuje limit DPČ a DPP by rychle vyčerpala roční hodiny.',
      commonMistake: 'Rozhodnout pouze podle očekávaných odvodů.',
    },
    {
      id: 'agreement-comparison-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Která práva a povinnosti se mohou týkat zaměstnanců na DPP i DPČ?',
      options: [
        {
          id: 'schedule',
          text: 'Písemný rozvrh pracovní doby.',
        },
        {
          id: 'no-rights',
          text: 'Úplná absence pracovněprávní ochrany.',
        },
        {
          id: 'records',
          text: 'Evidence skutečně odpracované doby.',
        },
        {
          id: 'vacation',
          text: 'Právo na dovolenou při splnění podmínek.',
        },
        {
          id: 'supplements',
          text: 'Příplatky podle povahy práce.',
        },
      ],
      correctOptionIds: ['schedule', 'records', 'vacation', 'supplements'],
      skillIds: ['agreement-risk-identification'],
      explanation:
        'Dohodáři jsou zaměstnanci a vztahuje se na ně významná část zákoníku práce.',
      commonMistake: 'Považovat dohody za čistě občanskoprávní smlouvy.',
    },
    {
      id: 'agreement-comparison-exercise-03',
      type: 'multiple_choice',
      prompt:
        'Která tvrzení správně popisují rozdíly mezi pracovním poměrem, DPP a DPČ?',
      options: [
        { id: 'a', text: 'Všechny tři vztahy mají vždy totožný rozsah práce.' },
        {
          id: 'b',
          text: 'Pracovní poměr má pracovní dobu sjednanou nebo stanovenou v jeho režimu.',
        },
        { id: 'c', text: 'DPP má vlastní zákonný limit rozsahu práce.' },
        { id: 'd', text: 'DPČ se posuzuje podle průměrného rozsahu práce.' },
        { id: 'e', text: 'U dohod se nikdy nepoužívají pravidla odpočinku.' },
        {
          id: 'f',
          text: 'Název vztahu ruší povinnost evidovat skutečnou práci.',
        },
      ],
      correctOptionIds: ['b', 'c', 'd'],
      skillIds: ['agreement-type-selection', 'parallel-relations-control'],
      explanation:
        'Každý vztah má vlastní rozsahová pravidla, ale skutečná práce se eviduje.',
      commonMistake: 'Považovat dohody za vztahy bez pracovněprávních limitů.',
    },
    {
      id: 'agreement-comparison-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má pracovní poměr jako účetní a DPP na fotografování akce. Jak se postupuje?',
      options: [
        {
          id: 'a',
          text: 'Vztahy lze vést odděleně, protože jde o odlišnou práci.',
        },
        {
          id: 'b',
          text: 'DPP se automaticky sloučí s pracovní smlouvou.',
        },
        {
          id: 'c',
          text: 'Všechny hodiny se vykážou v pracovním poměru.',
        },
        {
          id: 'd',
          text: 'DPP je vždy zakázaná.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['parallel-relations-control'],
      explanation:
        'Odlišné práce mohou být při splnění podmínek v samostatných vztazích.',
      commonMistake: 'Sloučit odměny a docházku bez vazby na konkrétní vztah.',
    },
    {
      id: 'agreement-comparison-exercise-05',
      type: 'short_text',
      prompt: 'Který vztah má limit 300 hodin za kalendářní rok?',
      acceptedAnswers: ['DPP', 'dohoda o provedení práce'],
      ignoreDiacritics: true,
      skillIds: ['agreement-type-selection'],
      explanation: 'Roční hodinový limit patří DPP.',
      commonMistake: 'Uvést DPČ.',
    },
    {
      id: 'agreement-comparison-exercise-06',
      type: 'single_choice',
      prompt:
        'Lze změnit DPČ na pracovní poměr pouze přepnutím typu v systému?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne, musí existovat odpovídající právní dokumenty a data.',
        },
        {
          id: 'c',
          text: 'Ano, pokud zůstane stejná mzda.',
        },
        {
          id: 'd',
          text: 'Ano, bez registrace.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['agreement-risk-identification'],
      explanation:
        'Technická evidence musí následovat po právním vzniku a skončení vztahů.',
      commonMistake:
        'Považovat typ pracovního vztahu za pouhou systémovou volbu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohody o pracích konaných mimo pracovní poměr',
      url: 'https://ppropo.mpsv.cz/VIIDohodyopracichkonanychmimopra',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohoda o provedení práce',
      url: 'https://ppropo.mpsv.cz/VII2Dohodaoprovedeniprace',
      kind: 'official',
    },
    {
      title: 'MPSV – Dohoda o pracovní činnosti',
      url: 'https://ppropo.mpsv.cz/VII1Dohodaopracovnicinnosti',
      kind: 'official',
    },
    {
      title: 'MPSV – Přehled změn týkajících se dohodářů',
      url: 'https://www.mpsv.cz/prehledne-zmeny-tykajici-se-dohodaru-',
      kind: 'official',
    },
  ],
})
