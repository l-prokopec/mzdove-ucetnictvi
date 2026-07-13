import { defineLessonContent } from '../define'

export const employeeObstaclesContent = defineLessonContent({
  moduleId: 'work-obstacles',
  skillIds: [
    'employee-obstacle-classification',
    'personal-obstacle-paid-status',
    'employee-obstacle-schedule-link',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-13',
    note: 'Překážky na straně zaměstnance včetně aktuálního znění nařízení vlády č. 590/2006 Sb. po změnách účinných od 1. června 2025.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Překážka vzniká jen v době, kdy měla být práce',
    },
    {
      type: 'paragraph',
      text: 'Překážka v práci na straně zaměstnance je dočasná skutečnost, která zaměstnanci brání vykonat práci v jeho rozvržené pracovní době. Bez vazby na konkrétní směnu nelze určit rozsah omluvené nepřítomnosti ani případné náhrady mzdy nebo platu.',
    },
    {
      type: 'definition',
      term: 'Překážka v práci na straně zaměstnance',
      definition:
        'Zákonem uznaná dočasná skutečnost na straně zaměstnance, pro kterou zaměstnavatel omluví nepřítomnost v rozvržené pracovní době a podle konkrétního režimu poskytne pracovní volno s náhradou, bez náhrady nebo navazující dávkové plnění.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Omluvená nepřítomnost neznamená automaticky placenou nepřítomnost. Každý důvod má vlastní podmínky, rozsah a náhradový režim.',
    },
    {
      type: 'heading',
      text: 'Základní skupiny překážek zaměstnance',
    },
    {
      type: 'list',
      items: [
        'dočasná pracovní neschopnost a karanténa',
        'mateřská, otcovská a rodičovská dovolená',
        'ošetřování a dlouhodobá péče',
        'jiné důležité osobní překážky podle nařízení vlády',
        'překážky z důvodu obecného zájmu',
        'plnění branné povinnosti a další zvláštní zákonné důvody',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tato lekce podrobně rozebírá jiné důležité osobní překážky. Nemocenské dávky, náhrada mzdy při dočasné pracovní neschopnosti a rodičovské nepřítomnosti budou řešeny v samostatných modulech.',
    },
    {
      type: 'heading',
      text: 'Povinnost zaměstnance překážku oznámit',
    },
    {
      type: 'paragraph',
      text: 'Je-li překážka známa předem, zaměstnanec včas požádá zaměstnavatele o pracovní volno. Vznikne-li neočekávaně, oznámí překážku a předpokládanou dobu jejího trvání bez zbytečného průtahu.',
    },
    {
      type: 'paragraph',
      text: 'Zákon nestanoví jedinou povinnou komunikační formu. Zaměstnavatel však může upravit interní kontaktní postup, který nesmí fakticky znemožnit uplatnění zákonného práva.',
    },
    {
      type: 'heading',
      text: 'Povinnost překážku prokázat',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec je povinen existenci překážky a její rozhodné okolnosti zaměstnavateli prokázat. Doklad musí potvrdit zejména důvod, datum a rozsah, který zasáhl do rozvržené pracovní doby.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Zaměstnavatel má poskytovat potřebnou součinnost, ale mzdová účetní nemá bez podkladu domýšlet délku návštěvy, vztah doprovázené osoby ani placený režim.',
    },
    {
      type: 'heading',
      text: 'Vyšetření nebo ošetření zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno s náhradou mzdy nebo platu se poskytne na nezbytně nutnou dobu, pokud vyšetření nebo ošetření nebylo možné provést mimo pracovní dobu a proběhlo ve způsobilém zdravotnickém zařízení nejblíže bydlišti nebo pracovišti zaměstnance.',
    },
    {
      type: 'definition',
      term: 'Nezbytně nutná doba',
      definition:
        'Doba objektivně potřebná pro cestu do způsobilého zařízení, samotné vyšetření nebo ošetření a přiměřenou cestu zpět, pokud zasahuje do rozvržené pracovní doby.',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec má právo zvolit si i vzdálenější zařízení. Pracovní volno se poskytne na skutečně nezbytnou dobu, náhrada však přísluší nejvýše v rozsahu, který by odpovídal návštěvě nejbližšího způsobilého zařízení.',
    },
    {
      type: 'example',
      title: 'Návštěva nejbližšího zařízení',
      situation:
        'Směna trvá 7:00–15:30. Zaměstnanec doloží vyšetření v nejbližším způsobilém zařízení a nezbytná nepřítomnost včetně cesty trvá od 9:10 do 11:40.',
      solution:
        'Do evidence se zapíše 2,5 hodiny omluvené placené překážky. Zbytek směny zůstává odpracovanou dobou.',
    },
    {
      type: 'example',
      title: 'Vzdálenější zvolený lékař',
      situation:
        'Skutečná nepřítomnost kvůli vzdálenějšímu zařízení trvá pět hodin, ale cesta a vyšetření v nejbližším způsobilém zařízení by objektivně vyžadovaly tři hodiny.',
      solution:
        'Celých pět hodin může být omluveno. Náhrada mzdy nebo platu však náleží jen za tři hodiny; zbývající dvě hodiny jsou omluvené bez náhrady.',
    },
    {
      type: 'heading',
      text: 'Pracovnělékařská prohlídka a související úkony',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno na nezbytně nutnou dobu se poskytuje při pracovnělékařské prohlídce, vyšetření nebo očkování souvisejícím s výkonem práce. Náhrada mzdy nebo platu vyplývá z povinnosti zaměstnavatele nést náklady bezpečnosti a ochrany zdraví při práci.',
    },
    {
      type: 'heading',
      text: 'Přerušení nebo zpoždění veřejné dopravy',
    },
    {
      type: 'paragraph',
      text: 'Při nepředvídaném přerušení dopravního provozu nebo zpoždění hromadné dopravy se poskytne pracovní volno bez náhrady na nezbytně nutnou dobu, pokud zaměstnanec nemohl pracoviště dosáhnout jiným přiměřeným způsobem.',
    },
    {
      type: 'example',
      title: 'Mimořádně zrušený vlak',
      situation:
        'Vlak byl mimořádně zrušen, zaměstnanec předložil potvrzení dopravce a jiný přiměřený spoj nebyl dostupný. Na směnu přišel o 75 minut později.',
      solution:
        'Doba 75 minut se eviduje jako omluvená osobní překážka bez náhrady mzdy nebo platu, nikoli jako placená pracovní doba.',
    },
    {
      type: 'heading',
      text: 'Znemožnění cesty těžce zdravotně postiženého zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Těžce zdravotně postiženému zaměstnanci se při znemožnění cesty osobním dopravním prostředkem z důvodu nepříznivého počasí, živelní nebo jiné mimořádné události poskytne pracovní volno s náhradou na nezbytně nutnou dobu, nejvýše na jeden den.',
    },
    {
      type: 'heading',
      text: 'Vlastní svatba',
    },
    {
      type: 'paragraph',
      text: 'Při vlastní svatbě náleží pracovní volno v rozsahu dvou dnů, z toho jeden den k účasti na obřadu. Náhrada mzdy nebo platu přísluší vždy pouze za jeden den a při čerpání dvou dnů právě za den obřadu.',
    },
    {
      type: 'paragraph',
      text: 'Koná-li se obřad v den, který není pracovním dnem zaměstnance, vzniká pracovní volno jen v rozsahu jednoho dne.',
    },
    {
      type: 'example',
      title: 'Obřad v pracovní pátek',
      situation:
        'Zaměstnanec má směny pondělí až pátek a svatební obřad se koná v pátek. Čerpá čtvrtek i pátek.',
      solution:
        'Čtvrtek je pracovní volno bez náhrady a pátek, den obřadu, je pracovní volno s náhradou mzdy nebo platu.',
    },
    {
      type: 'paragraph',
      text: 'Při svatbě dítěte náleží jeden den pracovního volna s náhradou. Při svatbě rodiče náleží jeden den pracovního volna bez náhrady. Pro účely nařízení se manželstvím a manželem rozumí také zákonem vymezené partnerství a partner.',
    },
    {
      type: 'heading',
      text: 'Narození dítěte',
    },
    {
      type: 'list',
      items: [
        'převoz manželky nebo družky do zdravotnického zařízení a zpět – pracovní volno s náhradou',
        'účast při porodu manželky nebo družky – pracovní volno bez náhrady',
      ],
    },
    {
      type: 'heading',
      text: 'Úmrtí blízké osoby',
    },
    {
      type: 'paragraph',
      text: 'Při úmrtí manžela, druha nebo dítěte náleží dva dny placeného pracovního volna a další placený den k účasti na pohřbu.',
    },
    {
      type: 'paragraph',
      text: 'Při úmrtí rodiče, prarodiče, vnoučete, sourozence nebo dalších vymezených osob náleží placené volno k účasti na pohřbu a případně další den, obstarává-li zaměstnanec pohřeb.',
    },
    {
      type: 'paragraph',
      text: 'Od 1. června 2025 náleží při úmrtí manžela, druha, dítěte, vnoučete, rodiče, prarodiče nebo sourozence navíc až pět dalších dnů pracovního volna bez náhrady.',
    },
    {
      type: 'heading',
      text: 'Doprovod rodinného příslušníka',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno k doprovodu do zdravotnického zařízení se poskytne pouze jednomu rodinnému příslušníkovi na nezbytně nutnou dobu, nejvýše na jeden den, byl-li doprovod nezbytný a úkon nebylo možné provést mimo pracovní dobu.',
    },
    {
      type: 'paragraph',
      text: 'Náhrada přísluší při doprovodu manžela, druha, dítěte, rodiče nebo prarodiče zaměstnance či jeho manžela. U ostatních rodinných příslušníků jde o volno bez náhrady. Náhrada se neposkytne, má-li zaměstnanec za stejnou situaci nárok na ošetřovné.',
    },
    {
      type: 'example',
      title: 'Doprovod dítěte',
      situation:
        'Zaměstnanec doprovází dítě k předem stanovenému vyšetření. Doprovod je nezbytný, úkon nelze provést mimo směnu a zaměstnanec nemá nárok na ošetřovné. Nepřítomnost zasáhne do směny na 4 hodiny.',
      solution: 'Jde o 4 hodiny pracovního volna s náhradou mzdy nebo platu.',
    },
    {
      type: 'heading',
      text: 'Pohřeb spoluzaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno s náhradou na nezbytně nutnou dobu se poskytne zaměstnancům určeným zaměstnavatelem, případně v dohodě s odborovou organizací, k účasti na pohřbu spoluzaměstnance.',
    },
    {
      type: 'heading',
      text: 'Přestěhování',
    },
    {
      type: 'paragraph',
      text: 'Při přestěhování zaměstnance s vlastním bytovým zařízením náleží pracovní volno bez náhrady na nezbytně nutnou dobu, nejvýše na dva dny. Jde-li o přestěhování v zájmu zaměstnavatele, poskytne se náhrada mzdy nebo platu.',
    },
    {
      type: 'heading',
      text: 'Vyhledání nového zaměstnání',
    },
    {
      type: 'list',
      items: [
        'nejvýše 4 dny s náhradou při skončení z důvodů podle § 52 písm. a) až e) nebo dohodou z téhož důvodu',
        'nejvýše 2 dny bez náhrady při skončení z důvodů podle § 52 písm. f) až h) nebo dohodou z téhož důvodu',
        'nejvýše 4 dny bez náhrady při jiném způsobu skončení',
        'po vyčerpání základního volna další neplacené volno pro poradenské služby Úřadu práce v zákonném rozsahu',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Při čerpání jen části směny se pro účely limitu hledání zaměstnání považuje za vyčerpaný celý den pracovního volna.',
    },
    {
      type: 'heading',
      text: 'Rozvrh je rozhodující',
    },
    {
      type: 'paragraph',
      text: 'Pracovní volno se zapisuje pouze do doby, na kterou byla zaměstnanci rozvržena práce. Událost v den bez směny sama o sobě nevytváří náhradu za neexistující pracovní dobu.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každou omluvenou absenci za placenou',
        'evidovat celý den místo nezbytně nutné doby',
        'proplatit celou návštěvu vzdálenějšího lékaře',
        'přiznat náhradu při zpoždění dopravy',
        'zaměnit doprovod a ošetřovné',
        'přiznat dva placené dny při vlastní svatbě',
        'ignorovat rozvrženou směnu',
        'nevyžádat potřebný doklad',
        'považovat část směny při hledání zaměstnání za část dne limitu',
      ],
    },
    {
      type: 'summary',
      items: [
        'Každá překážka se posuzuje proti platnému rozvrhu.',
        'Omluvené volno může být placené, neplacené nebo navázané na jiný systém plnění.',
        'Vyšetření se hradí v rozsahu nezbytně nutné doby pro nejbližší způsobilé zařízení.',
        'Nařízení vlády přesně vymezuje svatbu, úmrtí, doprovod, stěhování a hledání zaměstnání.',
        'Zaměstnanec musí překážku včas oznámit a prokázat.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employee-obstacles-card-01',
      front: 'Je každá omluvená osobní překážka placená?',
      back: 'Ne.',
      explanation:
        'Placený režim musí vyplývat z konkrétního zákonného důvodu.',
      skillIds: ['personal-obstacle-paid-status'],
    },
    {
      id: 'employee-obstacles-card-02',
      front: 'Co určuje rozsah placené návštěvy lékaře?',
      back: 'Nezbytně nutná doba pro nejbližší způsobilé zařízení.',
      explanation:
        'Vzdálenější zařízení může prodloužit omluvenou, ale ne placenou dobu.',
      skillIds: ['employee-obstacle-classification'],
    },
    {
      id: 'employee-obstacles-card-03',
      front: 'Kolik dnů náhrady náleží při vlastní svatbě?',
      back: 'Jeden den.',
      explanation: 'Při čerpání dvou dnů je placen dnem obřadu.',
      skillIds: ['personal-obstacle-paid-status'],
    },
    {
      id: 'employee-obstacles-card-04',
      front: 'Co musí zaměstnanec udělat při nepředvídané překážce?',
      back: 'Oznámit ji a předpokládanou dobu trvání bez zbytečného průtahu a následně ji prokázat.',
      explanation: 'Interní postup nesmí zrušit zákonné právo.',
      skillIds: ['employee-obstacle-schedule-link'],
    },
  ],
  exercises: [
    {
      id: 'employee-obstacles-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec zvolí vzdálenější zdravotnické zařízení. Skutečná omluvená nepřítomnost trvá 4,5 hodiny, zatímco nejbližší způsobilé zařízení by vyžadovalo 2,75 hodiny. Jaký je základní režim?',
      options: [
        {
          id: 'a',
          text: '4,5 hodiny placené.',
        },
        {
          id: 'b',
          text: '2,75 hodiny placené a 1,75 hodiny omluvené bez náhrady.',
        },
        {
          id: 'c',
          text: 'Celá doba neomluvená.',
        },
        {
          id: 'd',
          text: 'Pouze 1,75 hodiny placené.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employee-obstacle-classification'],
      explanation:
        'Náhrada se omezuje na dobu nejbližšího způsobilého zařízení. Rozdíl 4,5 − 2,75 = 1,75 hodiny zůstává omluvený bez náhrady.',
      commonMistake:
        'Považovat právo zvolit si lékaře za nárok na úhradu celé delší cesty.',
    },
    {
      id: 'employee-obstacles-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které situace mohou zakládat pracovní volno s náhradou mzdy nebo platu?',
      options: [
        {
          id: 'own-wedding',
          text: 'Den vlastního svatebního obřadu.',
        },
        {
          id: 'child-wedding',
          text: 'Účast na svatbě dítěte.',
        },
        {
          id: 'parent-wedding',
          text: 'Účast na svatbě rodiče.',
        },
        {
          id: 'birth-transport',
          text: 'Převoz manželky nebo družky k porodu a zpět.',
        },
        {
          id: 'birth-attendance',
          text: 'Samotná účast při porodu manželky nebo družky.',
        },
      ],
      correctOptionIds: ['own-wedding', 'child-wedding', 'birth-transport'],
      skillIds: ['personal-obstacle-paid-status'],
      explanation:
        'Svatba rodiče a účast při porodu jsou podle tohoto režimu bez náhrady.',
      commonMistake: 'Zaměnit pracovní volno s nárokem na náhradu.',
    },
    {
      id: 'employee-obstacles-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování osobní překážky.',
      steps: [
        {
          id: 'schedule',
          text: 'Ověřit rozvrženou směnu.',
        },
        {
          id: 'reason',
          text: 'Určit právní důvod překážky.',
        },
        {
          id: 'notice',
          text: 'Ověřit oznámení nebo žádost.',
        },
        {
          id: 'document',
          text: 'Zkontrolovat doklad a rozsah.',
        },
        {
          id: 'paid-status',
          text: 'Určit placenou a neplacenou část.',
        },
        {
          id: 'record',
          text: 'Zapsat docházkový a mzdový kód.',
        },
      ],
      correctOrder: [
        'schedule',
        'reason',
        'notice',
        'document',
        'paid-status',
        'record',
      ],
      skillIds: ['employee-obstacle-schedule-link'],
      explanation:
        'Mzdový kód je až výsledkem právního a evidenčního posouzení.',
      commonMistake: 'Začít zadáním celodenní absence bez kontroly rozvrhu.',
    },
    {
      id: 'employee-obstacles-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec se stěhuje z vlastního rozhodnutí a splňuje podmínku vlastního bytového zařízení. Jaký je zákonný základní režim?',
      options: [
        {
          id: 'a',
          text: 'Až dva dny pracovního volna bez náhrady.',
        },
        {
          id: 'b',
          text: 'Až dva dny vždy s náhradou.',
        },
        {
          id: 'c',
          text: 'Jeden den dovolené.',
        },
        {
          id: 'd',
          text: 'Žádné omluvené volno.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['personal-obstacle-paid-status'],
      explanation: 'Náhrada náleží jen při stěhování v zájmu zaměstnavatele.',
      commonMistake: 'Považovat každý přesun bydliště za placenou překážku.',
    },
    {
      id: 'employee-obstacles-exercise-05',
      type: 'short_text',
      prompt:
        'Směna trvá 8:00–16:00. Zaměstnanec navštíví nejbližší způsobilé zdravotnické zařízení a doložená nezbytná nepřítomnost zasáhne do směny od 10:20 do 13:05. Kolik hodin placené překážky se zapíše?',
      acceptedAnswers: [
        '2,75 hodiny',
        '2,75 hodin',
        '2,75',
        '2.75',
        '2 hodiny 45 minut',
      ],
      ignoreDiacritics: true,
      skillIds: ['employee-obstacle-schedule-link'],
      explanation: 'Úsek 10:20–13:05 trvá 2 hodiny 45 minut, tedy 2,75 hodiny.',
      commonMistake: 'Zaokrouhlit na celé tři hodiny nebo zapsat celou směnu.',
    },
    {
      id: 'employee-obstacles-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec využije při hledání nového zaměstnání jen dvě hodiny z jedné směny. Jak se tato část směny započítá do denního limitu pracovního volna?',
      options: [
        {
          id: 'a',
          text: 'Jako čtvrt dne.',
        },
        {
          id: 'b',
          text: 'Jako půl dne.',
        },
        {
          id: 'c',
          text: 'Jako celý den pracovního volna.',
        },
        {
          id: 'd',
          text: 'Do limitu se nezapočte.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['employee-obstacle-classification'],
      explanation:
        'Část směny se pro tento limit považuje za vyčerpaný celý den.',
      commonMistake:
        'Přepočítat zákonný denní limit na hodiny podle délky čerpání.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'Nařízení vlády č. 590/2006 Sb. – aktuální znění MPSV',
      url: 'https://ppropo.mpsv.cz/narizeni_vlady_590_2006',
      kind: 'official',
    },
    {
      title: 'MPSV – Důležité osobní překážky v práci',
      url: 'https://ppropo.mpsv.cz/IX11Duleziteosobniprekazky',
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
  ],
})
