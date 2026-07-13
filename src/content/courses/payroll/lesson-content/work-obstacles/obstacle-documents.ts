import { defineLessonContent } from '../define'

export const obstacleDocumentsContent = defineLessonContent({
  moduleId: 'work-obstacles',
  skillIds: [
    'obstacle-document-validation',
    'obstacle-attendance-link',
    'obstacle-audit-trail',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Oznamování, prokazování, evidence a ochrana osobních údajů při překážkách v práci podle § 206 a § 96 zákoníku práce a zásady minimalizace údajů.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Doklad není jen příloha ke mzdě',
    },
    {
      type: 'paragraph',
      text: 'Doklad k překážce propojuje právní důvod, konkrétní rozvrženou směnu, skutečný rozsah nepřítomnosti a mzdový režim. Bez této vazby nelze spolehlivě určit, zda má jít o placené volno, neplacené volno, dávkovou nepřítomnost nebo jiný kód.',
    },
    {
      type: 'definition',
      term: 'Kontrolní stopa překážky',
      definition:
        'Dohledatelný soubor údajů a dokumentů, ze kterého je patrné, kdo překážku oznámil, jaký měla právní důvod, do jaké směny zasáhla, čím byla prokázána, kdo ji schválil a jak byla mzdově zpracována.',
    },
    {
      type: 'heading',
      text: 'Dva kroky zaměstnance',
    },
    {
      type: 'list',
      items: [
        'překážku oznámit nebo o volno včas požádat',
        'existenci a rozhodné okolnosti překážky prokázat',
      ],
    },
    {
      type: 'paragraph',
      text: 'Je-li překážka předem známa, zaměstnanec včas žádá o pracovní volno. Neočekávanou překážku a předpokládanou dobu jejího trvání oznamuje bez zbytečného průtahu.',
    },
    {
      type: 'paragraph',
      text: 'Doklad může být předložen současně, později nebo doplněn po návratu. Opožděné prokázání samo o sobě neznamená, že skutečně existující zákonná překážka přestala být omluvitelná; případné porušení oznamovací povinnosti se hodnotí odděleně.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Mzdová účetní nesmí zaměnit pozdní doklad za automatickou neomluvenou absenci, ani přijmout nedoložený kód bez následné kontroly.',
    },
    {
      type: 'heading',
      text: 'Povinná součinnost třetích osob',
    },
    {
      type: 'paragraph',
      text: 'Právnické a fyzické osoby jsou povinny poskytnout zaměstnanci potřebnou součinnost k prokázání překážky. V praxi jde například o potvrzení zdravotnického zařízení, soudu, dopravce, pořadatele nebo pohřební služby.',
    },
    {
      type: 'heading',
      text: 'Co musí doklad prokázat',
    },
    {
      type: 'list',
      items: [
        'identitu zaměstnance nebo jednoznačnou vazbu na něj',
        'druh události v rozsahu nutném pro pracovněprávní posouzení',
        'datum',
        'čas nebo rozsah',
        'místo nebo poskytovatele, pokud je právně rozhodné',
        'potvrzení oprávněného subjektu',
        'případně nezbytnost doprovodu, obstarávání pohřbu nebo jinou zvláštní podmínku',
      ],
    },
    {
      type: 'heading',
      text: 'Doklad k návštěvě lékaře',
    },
    {
      type: 'paragraph',
      text: 'Pro mzdové zpracování je rozhodující potvrzení času a skutečnosti návštěvy, případně informace nutná k určení nejbližšího způsobilého zařízení. Diagnóza zpravidla není pro rozhodnutí o rozsahu běžné osobní překážky potřebná.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Shromažďuj jen údaje potřebné pro konkrétní pracovněprávní účel. Zdravotní údaje jsou zvláštní kategorií osobních údajů a nemají se kopírovat nebo zpřístupňovat v širším rozsahu, než je nezbytné.',
    },
    {
      type: 'example',
      title: 'Potvrzení bez diagnózy',
      situation:
        'Zdravotnické zařízení potvrdí datum návštěvy a čas 10:05–11:20. Doklad neobsahuje diagnózu.',
      solution:
        'Pro základní prokázání návštěvy je takový doklad použitelný. Mzdová účetní doplní rozvrh, cestovní čas a ověření podmínek, nikoli diagnózu.',
    },
    {
      type: 'heading',
      text: 'Doklad k doprovodu',
    },
    {
      type: 'list',
      items: [
        'doprovázená osoba a vztah v nezbytném rozsahu',
        'datum a čas zdravotního úkonu',
        'potvrzení, že doprovod byl nezbytný, pokud to z dokladu nevyplývá jinak',
        'potvrzení, že volno čerpá jen jeden rodinný příslušník',
        'informace o případném nároku na ošetřovné',
      ],
    },
    {
      type: 'heading',
      text: 'Doklad k úmrtí a pohřbu',
    },
    {
      type: 'paragraph',
      text: 'Úmrtí se obvykle dokládá úmrtním oznámením nebo obdobným podkladem. Obstarávání pohřbu lze doložit potvrzením pohřební služby. Mzdová účetní potřebuje určit vztah, den pohřbu a případné obstarávání, nikoli soukromé detaily úmrtí.',
    },
    {
      type: 'heading',
      text: 'Doklad k veřejné funkci nebo občanské povinnosti',
    },
    {
      type: 'list',
      items: [
        'předvolání, jmenování nebo potvrzení o funkci',
        'datum a čas účasti',
        'označení orgánu',
        'zvláštní právní režim náhrady',
        'podklad pro případnou refundaci',
      ],
    },
    {
      type: 'heading',
      text: 'Doklad k překážce zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Překážku na straně zaměstnavatele nedokládá zaměstnanec. Podklad vytváří zaměstnavatel a musí z něj být patrná skutečná příčina, dotčení zaměstnanci, časový rozsah, případné převedení na jinou práci a použitá sazba.',
    },
    {
      type: 'list',
      items: [
        'protokol o poruše nebo výpadku',
        'záznam o počasí nebo živelní události',
        'organizační rozhodnutí',
        'dohoda s odbory nebo vnitřní předpis',
        'souhlas s převedením na jinou práci',
        'seznam dotčených směn a zaměstnanců',
      ],
    },
    {
      type: 'heading',
      text: 'Rozvrh a docházka',
    },
    {
      type: 'paragraph',
      text: 'Docházkový záznam se porovnává s historicky platným rozvrhem. Překážkou je jen část, která zasáhla do doby, kdy měl zaměstnanec pracovat, není-li zvláštním předpisem stanoveno jinak.',
    },
    {
      type: 'example',
      title: 'Doklad přesahuje směnu',
      situation:
        'Směna trvá 8:00–16:00. Potvrzení uvádí nezbytnou nepřítomnost 6:30–10:45.',
      solution:
        'Do docházky se jako překážka zapíše jen úsek 8:00–10:45, tedy 2 hodiny 45 minut. Čas před začátkem směny není zameškanou pracovní dobou.',
    },
    {
      type: 'heading',
      text: 'Docházkový a mzdový kód',
    },
    {
      type: 'paragraph',
      text: 'Jedna událost může vyžadovat více kódů. Například návštěva vzdálenějšího lékaře může mít placenou část a navazující omluvenou neplacenou část. Kód musí odpovídat právnímu výsledku, nikoli jen názvu dokladu.',
    },
    {
      type: 'example',
      title: 'Rozdělená lékařská překážka',
      situation:
        'Celková omluvená nepřítomnost činí 4 hodiny. Placený rozsah odpovídající nejbližšímu zařízení činí 2,5 hodiny.',
      solution:
        'Docházka musí obsahovat 2,5 hodiny placené osobní překážky a 1,5 hodiny omluveného neplaceného volna.',
    },
    {
      type: 'heading',
      text: 'Korekce chyby',
    },
    {
      type: 'paragraph',
      text: 'Zjistí-li se po uzávěrce, že byl použit nesprávný kód nebo rozsah, oprava musí zachovat původní stav, důvod změny, novou hodnotu, schvalující osobu a návaznost na opravu mzdy.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Doklad nepřepisuj ani nemaž tak, aby zmizela historie. Oprava docházky a mzdy musí být auditovatelná.',
    },
    {
      type: 'heading',
      text: 'Dočasný stav bez dokladu',
    },
    {
      type: 'paragraph',
      text: 'Při včas oznámené, ale dosud nedoložené překážce lze použít dočasný čekající stav. Po uplynutí přiměřené lhůty se případ eskaluje, nikoli potichu uzavře náhodným mzdovým kódem.',
    },
    {
      type: 'heading',
      text: 'Rozdělení odpovědností',
    },
    {
      type: 'list',
      items: [
        'zaměstnanec – oznámení a doložení',
        'vedoucí – potvrzení provozních skutečností a skutečné nepřítomnosti',
        'HR – právní klasifikace a kontrola dokumentů',
        'mzdová účetní – výpočet a mzdový kód',
        'správce systému – technická integrita a přístupová oprávnění',
      ],
    },
    {
      type: 'heading',
      text: 'Minimalizace osobních údajů',
    },
    {
      type: 'paragraph',
      text: 'Ukládej pouze údaje potřebné pro splnění pracovněprávní povinnosti, mzdový výpočet, kontrolu a obhajobu právních nároků. Nadbytečné zdravotní, rodinné nebo jiné citlivé detaily nemají být součástí běžné mzdové poznámky.',
    },
    {
      type: 'list',
      items: [
        'omezit přístup podle pracovní role',
        'neuvádět diagnózu do docházkového kódu',
        'neposílat citlivý doklad široké distribuční skupině',
        'stanovit retenční pravidla podle právního titulu',
        'evidovat přístupy a změny',
      ],
    },
    {
      type: 'heading',
      text: 'Elektronický doklad',
    },
    {
      type: 'paragraph',
      text: 'Elektronický doklad může být použitelný, pokud je čitelný, věrohodný a obsahuje rozhodné údaje. Prostý obrázek bez možnosti ověřit původ není automaticky neplatný, ale může vyžadovat doplnění nebo potvrzení.',
    },
    {
      type: 'heading',
      text: 'Součty a uzávěrka',
    },
    {
      type: 'list',
      items: [
        'součet hodin překážky odpovídá zásahu do směn',
        'placená a neplacená část jsou oddělené',
        'použitý průměrný výdělek odpovídá období',
        'sazba odpovídá právnímu důvodu',
        'refundovatelné položky mají samostatný podklad',
        'žádná hodina není současně prací a překážkou',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'požadovat diagnózu bez potřeby',
        'zadávat celý doklad do volného textu docházky',
        'ignorovat rozvrh směny',
        'použít jeden kód pro placenou i neplacenou část',
        'považovat pozdní doklad automaticky za neomluvenou absenci',
        'přepsat původní docházku bez auditní stopy',
        'neoddělit refundaci od nároku zaměstnance',
        'vykázat stejnou hodinu jako práci i překážku',
      ],
    },
    {
      type: 'summary',
      items: [
        'Doklad musí propojit právní důvod, rozvrh, skutečný rozsah a mzdový režim.',
        'Zaměstnanec oznamuje a prokazuje osobní překážku; zaměstnavatel dokládá vlastní překážky.',
        'Docházka se posuzuje proti historicky platnému rozvrhu.',
        'Citlivé údaje se zpracovávají jen v nezbytném rozsahu.',
        'Každá oprava musí zachovat auditní stopu.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'obstacle-documents-card-01',
      front: 'Jaké dvě základní povinnosti má zaměstnanec u překážky?',
      back: 'Oznámit ji nebo o volno požádat a následně ji prokázat.',
      explanation: 'Oznamovací a důkazní povinnost jsou samostatné.',
      skillIds: ['obstacle-document-validation'],
    },
    {
      id: 'obstacle-documents-card-02',
      front: 'Je pro běžné potvrzení návštěvy lékaře nutná diagnóza?',
      back: 'Zpravidla ne.',
      explanation: 'Rozhodný je čas, návštěva a podmínky právního nároku.',
      skillIds: ['obstacle-document-validation'],
    },
    {
      id: 'obstacle-documents-card-03',
      front: 'Proti čemu se porovnává čas na dokladu?',
      back: 'Proti historicky platnému rozvrhu směny.',
      explanation: 'Jen zásah do pracovní doby tvoří zameškanou směnu.',
      skillIds: ['obstacle-attendance-link'],
    },
    {
      id: 'obstacle-documents-card-04',
      front: 'Co musí obsahovat oprava docházky?',
      back: 'Původní stav, důvod, novou hodnotu, schválení a návaznost na mzdu.',
      explanation: 'Oprava nesmí zničit auditní stopu.',
      skillIds: ['obstacle-audit-trail'],
    },
  ],
  exercises: [
    {
      id: 'obstacle-documents-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec doloží návštěvu lékaře potvrzením s datem a časem, ale bez diagnózy. Lze doklad automaticky odmítnout jen kvůli chybějící diagnóze?',
      options: [
        {
          id: 'a',
          text: 'Ano, diagnóza je vždy povinná.',
        },
        {
          id: 'b',
          text: 'Ne, pro základní prokázání bývá rozhodný čas a skutečnost návštěvy.',
        },
        {
          id: 'c',
          text: 'Ano, pokud návštěva trvala déle než hodinu.',
        },
        {
          id: 'd',
          text: 'Ano, pokud jde o soukromého lékaře.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-document-validation'],
      explanation:
        'Zaměstnavatel má zpracovat jen údaje nezbytné pro posouzení nároku.',
      commonMistake: 'Požadovat citlivý zdravotní údaj bez právní potřeby.',
    },
    {
      id: 'obstacle-documents-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které údaje patří do kontrolní stopy překážky?',
      options: [
        {
          id: 'schedule',
          text: 'Rozvržená směna.',
        },
        {
          id: 'diagnosis',
          text: 'Vždy úplná diagnóza zaměstnance.',
        },
        {
          id: 'reason',
          text: 'Právní důvod.',
        },
        {
          id: 'duration',
          text: 'Schválený rozsah.',
        },
        {
          id: 'approval',
          text: 'Schvalující osoba.',
        },
      ],
      correctOptionIds: ['schedule', 'reason', 'duration', 'approval'],
      skillIds: ['obstacle-audit-trail'],
      explanation:
        'Úplná diagnóza není standardní součástí mzdové auditní stopy.',
      commonMistake: 'Zaměnit důkaz návštěvy s potřebou znát zdravotní stav.',
    },
    {
      id: 'obstacle-documents-exercise-03',
      type: 'single_choice',
      prompt:
        'Potvrzení o návštěvě lékaře obsahuje datum a čas, ale nikoli diagnózu. Jaký je správný základní postup?',
      options: [
        { id: 'a', text: 'Automaticky doklad odmítnout.' },
        {
          id: 'b',
          text: 'Použít potřebné údaje k posouzení času a nároku; diagnózu bez potřeby nevyžadovat.',
        },
        { id: 'c', text: 'Zapsat diagnózu odhadem.' },
        { id: 'd', text: 'Rozeslat doklad všem vedoucím.' },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-attendance-link', 'obstacle-audit-trail'],
      explanation: 'Pro mzdové posouzení se zpracovávají jen nezbytné údaje.',
      commonMistake: 'Požadovat citlivý zdravotní údaj bez právního účelu.',
    },
    {
      id: 'obstacle-documents-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec oznámil neočekávanou překážku včas, ale potvrzení dodal až po uzávěrce. Co je správný základní postup?',
      options: [
        {
          id: 'a',
          text: 'Automaticky označit celou dobu jako neomluvenou.',
        },
        {
          id: 'b',
          text: 'Doklad ověřit, případně dodatečně opravit docházku a mzdu s auditní stopou.',
        },
        {
          id: 'c',
          text: 'Doklad zničit jako opožděný.',
        },
        {
          id: 'd',
          text: 'Přepsat docházku bez záznamu o změně.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-audit-trail'],
      explanation:
        'Skutečná překážka může být prokázána i dodatečně; oprava musí být dohledatelná.',
      commonMistake: 'Smíchat opožděné doložení a neexistenci překážky.',
    },
    {
      id: 'obstacle-documents-exercise-05',
      type: 'short_text',
      prompt:
        'Směna trvá 9:00–17:30. Doklad prokazuje nezbytnou nepřítomnost od 7:45 do 12:20. Kolik hodin překážky zasáhlo do rozvržené směny?',
      acceptedAnswers: [
        '3,33 hodiny',
        '3,333 hodiny',
        '3 hodiny 20 minut',
        '3:20',
      ],
      ignoreDiacritics: true,
      skillIds: ['obstacle-attendance-link'],
      explanation:
        'Do směny zasahuje pouze úsek 9:00–12:20, tedy 3 hodiny 20 minut.',
      commonMistake: 'Započítat čas před začátkem směny.',
    },
    {
      id: 'obstacle-documents-exercise-06',
      type: 'single_choice',
      prompt:
        'Celková omluvená nepřítomnost činí 5 hodin, ale zákonný placený rozsah pouze 3,25 hodiny. Jak má docházka vypadat?',
      options: [
        {
          id: 'a',
          text: 'Pět hodin placené překážky.',
        },
        {
          id: 'b',
          text: '3,25 hodiny placené a 1,75 hodiny omluvené bez náhrady.',
        },
        {
          id: 'c',
          text: 'Celá doba neomluvená.',
        },
        {
          id: 'd',
          text: 'Pouze 3,25 hodiny evidence a zbytek smazat.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-attendance-link'],
      explanation: 'Právně odlišné části musí mít samostatné kódy.',
      commonMistake: 'Použít jediný kód pro celou nepřítomnost.',
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
      title: 'MPSV – Jiné důležité osobní překážky v práci',
      url: 'https://ppropo.mpsv.cz/IX113Jineduleziteosobniprekazkyv',
      kind: 'official',
    },
    {
      title: 'MPSV – Překážky v práci',
      url: 'https://ppropo.mpsv.cz/IXPrekazkyvpraci',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Základní příručka k ochraně osobních údajů',
      url: 'https://uoou.gov.cz/verejnost/zakladni-prirucka-k-ochrane-udaju',
      kind: 'official',
    },
  ],
})
