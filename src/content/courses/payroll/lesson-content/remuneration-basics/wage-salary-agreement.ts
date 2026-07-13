import { defineLessonContent } from '../define'

export const wageSalaryAgreementContent = defineLessonContent({
  moduleId: 'remuneration-basics',
  skillIds: [
    'remuneration-type-classification',
    'equal-pay-principle',
    'work-payment-boundaries',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Rozlišení mzdy, platu a odměny z dohody, zásada stejné odměny a hranice plnění za práci ověřené podle českého zákoníku práce a metodiky MPSV pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Tři názvy pro plnění za práci',
    },
    {
      type: 'paragraph',
      text: 'Zákoník práce rozlišuje mzdu, plat a odměnu z dohody. Všechny představují odměnu za práci, ale používají se podle druhu pracovněprávního vztahu a podle toho, který zaměstnavatel zaměstnance odměňuje. Správné pojmenování je důležité pro použití správných právních pravidel i mzdových položek.',
    },
    {
      type: 'definition',
      term: 'Mzda',
      definition:
        'Peněžité plnění a plnění peněžité hodnoty poskytované za práci zaměstnanci v pracovním poměru u zaměstnavatele, který není zaměstnavatelem odměňujícím platem podle § 109 odst. 3 zákoníku práce.',
    },
    {
      type: 'definition',
      term: 'Plat',
      definition:
        'Peněžité plnění poskytované za práci zaměstnanci v pracovním poměru u zaměstnavatele uvedeného v § 109 odst. 3 zákoníku práce.',
    },
    {
      type: 'definition',
      term: 'Odměna z dohody',
      definition:
        'Peněžité plnění poskytované za práci vykonanou na základě dohody o provedení práce nebo dohody o pracovní činnosti.',
    },
    {
      type: 'heading',
      text: 'Mzda v takzvané mzdové sféře',
    },
    {
      type: 'paragraph',
      text: 'Mzdou se odměňuje zaměstnanec v pracovním poměru například u obchodní společnosti, podnikající fyzické osoby, spolku nebo jiné právnické osoby, která nepatří mezi zaměstnavatele uvedené v § 109 odst. 3 zákoníku práce. Rozhodující není běžné označení organizace jako soukromá nebo nezisková, ale její právní postavení.',
    },
    {
      type: 'example',
      title: 'Spolek odměňuje zaměstnance',
      situation:
        'Neziskový spolek zaměstnává koordinátora v pracovním poměru. Spolek není zaměstnavatelem uvedeným v § 109 odst. 3 zákoníku práce.',
      solution:
        'Koordinátorovi náleží mzda, nikoli plat. Skutečnost, že spolek není založen primárně za účelem podnikání, sama o sobě nevede k odměňování platem.',
    },
    {
      type: 'heading',
      text: 'Plat ve veřejných službách a správě',
    },
    {
      type: 'paragraph',
      text: 'Platem se odměňují zaměstnanci v pracovním poměru u taxativně vymezených zaměstnavatelů, kteří na odměňování využívají zcela nebo převážně veřejné zdroje. Patří sem zejména stát, územní samosprávné celky, státní fondy a další zaměstnavatelé splňující zákonné podmínky.',
    },
    {
      type: 'list',
      items: [
        'stát',
        'obec, kraj nebo hlavní město Praha',
        'státní fond',
        'příspěvková organizace splňující zákonné podmínky financování',
        'vybraná školská právnická osoba',
        'veřejná kulturní instituce',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Ne každý subjekt vlastněný nebo podporovaný veřejným sektorem automaticky odměňuje platem. Vždy ověř konkrétní právní formu a podmínky § 109 odst. 3 zákoníku práce.',
    },
    {
      type: 'example',
      title: 'Zaměstnanec obce',
      situation: 'Obec zaměstnává referenta v pracovním poměru.',
      solution:
        'Obec je územní samosprávný celek uvedený v § 109 odst. 3 zákoníku práce. Referentovi náleží plat.',
    },
    {
      type: 'heading',
      text: 'Dohodář dostává odměnu z dohody',
    },
    {
      type: 'paragraph',
      text: 'Pracuje-li osoba na DPP nebo DPČ, náleží jí odměna z dohody bez ohledu na to, zda zaměstnavatel své zaměstnance v pracovním poměru odměňuje mzdou nebo platem. Druh zaměstnavatele tedy nezmění odměnu z dohody na plat.',
    },
    {
      type: 'example',
      title: 'DPP u města',
      situation: 'Město uzavře se studentem DPP na pomoc při kulturní akci.',
      solution:
        'Studentovi náleží odměna z dohody. Zaměstnanci města v pracovním poměru mohou dostávat plat, ale práce na DPP se odměňuje odměnou z dohody.',
    },
    {
      type: 'heading',
      text: 'Rozhodovací pravidlo',
    },
    {
      type: 'list',
      items: [
        'pracovní poměr + zaměstnavatel mimo § 109 odst. 3 = mzda',
        'pracovní poměr + zaměstnavatel podle § 109 odst. 3 = plat',
        'DPP nebo DPČ u jakéhokoli zaměstnavatele = odměna z dohody',
      ],
    },
    {
      type: 'heading',
      text: 'Mzda může být peněžní i naturální',
    },
    {
      type: 'paragraph',
      text: 'Mzda může vedle peněžní části obsahovat také naturální mzdu, tedy plnění peněžité hodnoty poskytované za práci. Naturální mzda však podléhá zvláštním podmínkám a nejméně minimální mzda musí být zaměstnanci vyplacena v penězích.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Naturální mzda je stále mzdou. Není automaticky zaměstnaneckým benefitem jen proto, že zaměstnanec neobdrží peníze. Rozhoduje, zda je plnění poskytováno za práci.',
    },
    {
      type: 'heading',
      text: 'Plat je regulovanější než mzda',
    },
    {
      type: 'paragraph',
      text: 'Plat nelze individuálně sestavit libovolným způsobem. Zaměstnavatel jej určuje jen ve složení a výši, které umožňuje zákoník práce, prováděcí právní předpisy a pravidla vydaná v jejich mezích. Mzdová sféra má při tvorbě mzdového systému širší smluvní a vnitřní prostor, stále však musí respektovat zákonné limity.',
    },
    {
      type: 'heading',
      text: 'Odměna za práci a plnění v souvislosti se zaměstnáním',
    },
    {
      type: 'paragraph',
      text: 'Do mzdy nebo platu patří složky poskytované za vykonanou práci. Naproti tomu náhrada mzdy za překážku, cestovní náhrada, odstupné, náhrada škody nebo sociální benefit nejsou mzdou ani platem jen proto, že je zaměstnavatel vyplácí zaměstnanci.',
    },
    {
      type: 'definition',
      term: 'Plnění za práci',
      definition:
        'Plnění, jehož právním a ekonomickým důvodem je výkon práce zaměstnance.',
    },
    {
      type: 'definition',
      term: 'Plnění v souvislosti se zaměstnáním',
      definition:
        'Plnění poskytované zaměstnanci z jiného důvodu než jako odměna za vykonanou práci, například jako náhrada výdajů, náhrada příjmu nebo benefit.',
    },
    {
      type: 'example',
      title: 'Mzda a cestovní náhrada',
      situation:
        'Zaměstnanec obdrží 42 000 Kč základní mzdy a 1 800 Kč náhrady prokázaných cestovních výdajů.',
      solution:
        'Částka 42 000 Kč je mzdou za práci. Částka 1 800 Kč je náhradou výdajů a není mzdou. Obě částky mohou být vyplaceny společně, ale musí zůstat právně a mzdově oddělené.',
    },
    {
      type: 'heading',
      text: 'Náhrada mzdy není mzda',
    },
    {
      type: 'paragraph',
      text: 'Náhrada mzdy nahrazuje příjem v době, kdy zaměstnanec nepracoval z právně uznaného důvodu, nebo vyrovnává jiný zákonem stanovený dopad. Přestože se její výše může odvozovat od mzdy nebo průměrného výdělku, nejde o mzdu za práci.',
    },
    {
      type: 'heading',
      text: 'Stejná odměna za stejnou práci',
    },
    {
      type: 'paragraph',
      text: 'Za stejnou práci nebo práci stejné hodnoty přísluší všem zaměstnancům u téhož zaměstnavatele stejná mzda, plat nebo odměna z dohody. Pravidlo platí napříč pracovním poměrem, dobou určitou, dobou neurčitou i dohodami.',
    },
    {
      type: 'list',
      items: [
        'složitost, odpovědnost a namáhavost práce',
        'obtížnost pracovních podmínek',
        'pracovní výkonnost',
        'dosahované pracovní výsledky',
      ],
    },
    {
      type: 'paragraph',
      text: 'Rozdílná odměna může být odůvodněna rozdílem v některém zákonném kritériu. Nestačí však obecné tvrzení, že jeden zaměstnanec je důležitější. Zaměstnavatel musí být schopen rozdíl vysvětlit objektivními a doložitelnými hledisky.',
    },
    {
      type: 'example',
      title: 'Pracovní poměr a DPČ na srovnatelné práci',
      situation:
        'Dva zaměstnanci u stejného zaměstnavatele vykonávají srovnatelnou administrativní práci za srovnatelných podmínek. Jeden pracuje v pracovním poměru, druhý na DPČ.',
      solution:
        'Samotný typ pracovněprávního vztahu neospravedlňuje libovolně nižší odměnu. Je nutné posoudit hodnotu práce, výkon a výsledky podle stejných kritérií.',
    },
    {
      type: 'heading',
      text: 'Rovnost se posuzuje uvnitř zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Právo na stejnou odměnu se porovnává mezi zaměstnanci téhož zaměstnavatele. Samotný rozdíl proti jiné společnosti v koncernu nebo jiné obci automaticky neprokazuje porušení zásady stejné odměny.',
    },
    {
      type: 'heading',
      text: 'Mzdová klasifikace v systému',
    },
    {
      type: 'list',
      items: [
        'právní titul plnění',
        'pracovněprávní vztah',
        'typ zaměstnavatele',
        'období, za které plnění náleží',
        'zda jde o odměnu za práci nebo jiné plnění',
        'pravidla pro daň, pojistné a průměrný výdělek',
        'zdrojový dokument a schválení',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'používat slovo plat jako obecné označení každé výplaty',
        'označit odměnu z DPP u obce jako plat',
        'považovat každý neziskový subjekt za platovou sféru',
        'zahrnout cestovní náhradu do mzdy',
        'zaměnit náhradu mzdy za mzdu za práci',
        'považovat naturální mzdu automaticky za benefit',
        'odůvodnit rozdílnou odměnu pouze druhem smlouvy',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzda náleží zaměstnanci v pracovním poměru v mzdové sféře.',
        'Plat náleží zaměstnanci v pracovním poměru u zaměstnavatele podle § 109 odst. 3 zákoníku práce.',
        'Za práci na DPP nebo DPČ náleží odměna z dohody.',
        'Mzda, plat a odměna z dohody jsou plnění za práci, nikoli všechna plnění zaměstnanci.',
        'Za stejnou práci nebo práci stejné hodnoty náleží u téhož zaměstnavatele stejná odměna.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'wage-salary-agreement-card-01',
      front:
        'Co náleží zaměstnanci v pracovním poměru u běžné obchodní společnosti?',
      back: 'Mzda.',
      explanation:
        'Obchodní společnost zpravidla není zaměstnavatelem odměňujícím platem podle § 109 odst. 3.',
      skillIds: ['remuneration-type-classification'],
    },
    {
      id: 'wage-salary-agreement-card-02',
      front: 'Co náleží zaměstnanci obce v pracovním poměru?',
      back: 'Plat.',
      explanation:
        'Obec je územní samosprávný celek uvedený v § 109 odst. 3 zákoníku práce.',
      skillIds: ['remuneration-type-classification'],
    },
    {
      id: 'wage-salary-agreement-card-03',
      front: 'Jak se nazývá plnění za práci na DPP nebo DPČ?',
      back: 'Odměna z dohody.',
      explanation:
        'Platí bez ohledu na to, zda zaměstnavatel jinak odměňuje mzdou nebo platem.',
      skillIds: ['remuneration-type-classification'],
    },
    {
      id: 'wage-salary-agreement-card-04',
      front: 'Je cestovní náhrada součástí mzdy?',
      back: 'Ne, pokud skutečně nahrazuje výdaje podle příslušného právního titulu.',
      explanation:
        'Je plněním v souvislosti se zaměstnáním, nikoli odměnou za práci.',
      skillIds: ['work-payment-boundaries'],
    },
  ],
  exercises: [
    {
      id: 'wage-salary-agreement-exercise-01',
      type: 'single_choice',
      prompt:
        'Soukromá společnost zaměstnává účetní v pracovním poměru. Jak se nazývá její odměna za práci?',
      options: [
        {
          id: 'a',
          text: 'Mzda.',
        },
        {
          id: 'b',
          text: 'Plat.',
        },
        {
          id: 'c',
          text: 'Odměna z dohody.',
        },
        {
          id: 'd',
          text: 'Cestovní náhrada.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['remuneration-type-classification'],
      explanation:
        'V pracovním poměru u zaměstnavatele mimo § 109 odst. 3 jde o mzdu.',
      commonMistake: 'Použít plat jako obecné slovo pro každou odměnu.',
    },
    {
      id: 'wage-salary-agreement-exercise-02',
      type: 'multiple_choice',
      prompt: 'Která plnění jsou typicky poskytována za práci?',
      options: [
        {
          id: 'wage',
          text: 'Mzda.',
        },
        {
          id: 'travel',
          text: 'Náhrada prokázaných cestovních výdajů.',
        },
        {
          id: 'salary',
          text: 'Plat.',
        },
        {
          id: 'severance',
          text: 'Odstupné.',
        },
        {
          id: 'agreement',
          text: 'Odměna z dohody.',
        },
      ],
      correctOptionIds: ['wage', 'salary', 'agreement'],
      skillIds: ['work-payment-boundaries'],
      explanation:
        'Cestovní náhrada a odstupné mají jiný právní důvod než výkon práce.',
      commonMistake: 'Zařadit každou částku od zaměstnavatele do mzdy.',
    },
    {
      id: 'wage-salary-agreement-exercise-03',
      type: 'single_choice',
      prompt:
        'Zaměstnanec pracuje pro soukromou obchodní společnost v pracovním poměru. Jak se základně označuje jeho odměna za práci?',
      options: [
        { id: 'a', text: 'Mzda.' },
        { id: 'b', text: 'Plat.' },
        { id: 'c', text: 'Cestovní náhrada.' },
        { id: 'd', text: 'Odměna z DPP bez ohledu na smlouvu.' },
      ],
      correctOptionId: 'a',
      skillIds: ['remuneration-type-classification', 'work-payment-boundaries'],
      explanation:
        'Soukromý zaměstnavatel mimo platovou sféru odměňuje zaměstnance mzdou.',
      commonMistake: 'Určovat název plnění jen podle pracovní pozice.',
    },
    {
      id: 'wage-salary-agreement-exercise-04',
      type: 'single_choice',
      prompt:
        'Město uzavřelo se studentem DPP. Jak se nazývá jeho plnění za práci?',
      options: [
        {
          id: 'a',
          text: 'Plat.',
        },
        {
          id: 'b',
          text: 'Mzda.',
        },
        {
          id: 'c',
          text: 'Odměna z dohody.',
        },
        {
          id: 'd',
          text: 'Náhrada platu.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['remuneration-type-classification'],
      explanation: 'U DPP se vždy jedná o odměnu z dohody.',
      commonMistake: 'Použít plat jen proto, že zaměstnavatelem je město.',
    },
    {
      id: 'wage-salary-agreement-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá zásada, podle níž mají zaměstnanci u téhož zaměstnavatele za stejnou práci nebo práci stejné hodnoty dostat stejnou odměnu?',
      acceptedAnswers: [
        'stejná odměna za stejnou práci',
        'stejna odmena za stejnou praci',
        'rovné odměňování',
        'rovne odmenovani',
      ],
      ignoreDiacritics: true,
      skillIds: ['equal-pay-principle'],
      explanation:
        'Jde o zásadu stejné odměny za stejnou práci nebo práci stejné hodnoty.',
      commonMistake: 'Uvést minimální mzdu, která řeší jiný ochranný limit.',
    },
    {
      id: 'wage-salary-agreement-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec dostane základní mzdu a náhradu výdajů za pracovní cestu. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Obě částky jsou vždy mzdou.',
        },
        {
          id: 'b',
          text: 'Mzda je odměnou za práci, cestovní náhrada je samostatné nemzdové plnění.',
        },
        {
          id: 'c',
          text: 'Cestovní náhrada nahrazuje základní mzdu.',
        },
        {
          id: 'd',
          text: 'Ani jedna částka nesouvisí se zaměstnáním.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['work-payment-boundaries'],
      explanation: 'Položky musí zůstat oddělené podle svého právního důvodu.',
      commonMistake: 'Sloučit všechny vyplacené částky do mzdy.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Obecná ustanovení o mzdě, platu a odměně z dohod',
      url: 'https://ppropo.mpsv.cz/XVIIIObecnaustanoveniomzdeplatua',
      kind: 'official',
    },
    {
      title: 'MPSV – Principy platového systému',
      url: 'https://ppropo.mpsv.cz/XX4Principyplatovehosystemu',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
    {
      title: 'MPSV – Naturální mzda',
      url: 'https://ppropo.mpsv.cz/xix8naturalnimzda',
      kind: 'official',
    },
  ],
})
