import { defineLessonContent } from '../define'

export const weeklyHoursContent = defineLessonContent({
  moduleId: 'working-time',
  skillIds: [
    'weekly-hours-classification',
    'shorter-hours-control',
    'work-fund-calculation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Stanovená, zkrácená stanovená a kratší pracovní doba včetně zákonných týdenních rozsahů a dopadu do mzdového fondu ověřené podle českého zákoníku práce pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Týdenní pracovní doba není vždy 40 hodin',
    },
    {
      type: 'paragraph',
      text: 'Základní stanovená týdenní pracovní doba činí 40 hodin, ale zákon stanoví kratší rozsah pro vybrané pracovní režimy a práce. Mzdová účetní musí nejprve určit správný zákonný nebo sjednaný týdenní rozsah a teprve podle konkrétního rozvrhu vytvořit mzdový fond.',
    },
    {
      type: 'definition',
      term: 'Stanovená týdenní pracovní doba',
      definition:
        'Zákonem vymezený nejvyšší běžný rozsah pracovní doby zaměstnance za týden podle druhu práce a pracovního režimu.',
    },
    {
      type: 'heading',
      text: 'Základní zákonné rozsahy',
    },
    {
      type: 'list',
      items: [
        '40 hodin týdně – běžný jednosměnný režim a ostatní případy bez zvláštního zkrácení',
        '38,75 hodiny týdně – dvousměnný pracovní režim',
        '37,5 hodiny týdně – vícesměnný pracovní režim',
        '37,5 hodiny týdně – nepřetržitý pracovní režim',
        '37,5 hodiny týdně – vybrané práce v podzemí podle zákoníku práce',
      ],
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Hodnota 38,75 nebo 37,5 hodiny se nepoužije jen proto, že zaměstnanec někdy pracuje odpoledne nebo v noci. Musí skutečně pracovat v zákonem definovaném směnném režimu.',
    },
    {
      type: 'heading',
      text: 'Stanovená doba je čistá pracovní doba',
    },
    {
      type: 'paragraph',
      text: 'Přestávka na jídlo a oddech se do pracovní doby nezapočítává. Osmihodinová směna proto často znamená přítomnost například od 8:00 do 16:30, pokud je během ní třicetiminutová nezapočitatelná přestávka.',
    },
    {
      type: 'example',
      title: 'Běžná pětidenní pracovní doba',
      situation:
        'Zaměstnanec pracuje od pondělí do pátku vždy od 8:00 do 16:30 a čerpá 30 minut nezapočitatelné přestávky.',
      solution:
        'Čistá pracovní doba činí 8 hodin denně a 40 hodin týdně. Přítomnost činí 8,5 hodiny denně.',
    },
    {
      type: 'heading',
      text: 'Zkrácená stanovená týdenní pracovní doba',
    },
    {
      type: 'definition',
      term: 'Zkrácená stanovená týdenní pracovní doba',
      definition:
        'Pracovní doba zkrácená pod zákonný rozsah kolektivní smlouvou nebo vnitřním předpisem bez snížení mzdy u zaměstnavatele odměňujícího mzdou.',
    },
    {
      type: 'paragraph',
      text: 'Toto zkrácení se týká zaměstnavatelů odměňujících mzdou. Nelze je stejným způsobem zavést u zaměstnavatelů poskytujících plat podle § 109 odst. 3 zákoníku práce. Pro další pracovněprávní instituty se takto zkrácená doba považuje za stanovenou týdenní pracovní dobu.',
    },
    {
      type: 'example',
      title: 'Firemní zkrácení bez snížení mzdy',
      situation:
        'Soukromý zaměstnavatel stanoví ve vnitřním předpisu stanovenou týdenní pracovní dobu 37,5 hodiny namísto běžných 40 hodin bez snížení mzdy.',
      solution:
        'Pro dotčené zaměstnance jde o zkrácenou stanovenou týdenní pracovní dobu. Pro posouzení přesčasu se vychází z hranice 37,5 hodiny, nikoli z původních 40 hodin.',
    },
    {
      type: 'heading',
      text: 'Kratší pracovní doba',
    },
    {
      type: 'definition',
      term: 'Kratší pracovní doba',
      definition:
        'Individuálně písemně sjednaný rozsah pracovní doby nižší než stanovená nebo zkrácená stanovená týdenní pracovní doba.',
    },
    {
      type: 'paragraph',
      text: 'Kratší pracovní doba vzniká dohodou zaměstnance a zaměstnavatele. Zaměstnanci náleží mzda nebo plat odpovídající sjednanému kratšímu rozsahu, pokud není sjednáno výhodnější odměňování.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Pojmy kratší pracovní doba a zkrácená stanovená týdenní pracovní doba nejsou zaměnitelné. U kratší doby se obvykle poměrně snižuje mzda nebo plat; u zkrácené stanovené doby se mzda nesnižuje.',
    },
    {
      type: 'example',
      title: 'Úvazek 30 hodin',
      situation:
        'Zaměstnanec v běžném čtyřicetihodinovém režimu sjedná kratší pracovní dobu 30 hodin týdně.',
      solution:
        'Jeho úvazek činí 30/40 = 0,75. Rozvrh musí odpovídat 30 hodinám týdně v průměru podle použitého způsobu rozvržení. Odměňování se řídí sjednanou kratší dobou a mzdovým podkladem.',
    },
    {
      type: 'heading',
      text: 'Kratší pracovní doba nemusí znamenat kratší směnu každý den',
    },
    {
      type: 'paragraph',
      text: 'Třicet hodin týdně lze rozvrhnout například do pěti šestihodinových směn, tří desetihodinových směn nebo jinak v mezích zákona. Rozhodující je platný rozvrh, délka směny, odpočinek a průměrný sjednaný rozsah.',
    },
    {
      type: 'example',
      title: 'Dvě varianty stejného úvazku',
      situation:
        'Dva zaměstnanci mají oba sjednáno 30 hodin týdně. První pracuje pondělí až pátek po 6 hodinách. Druhý pracuje pondělí až středu po 10 hodinách.',
      solution:
        'Oba mají stejnou kratší týdenní pracovní dobu, ale odlišný rozvrh směn. Měsíční fond a náhrady se proto musí odvozovat z individuálního rozvrhu, nikoli jen z hodnoty úvazku.',
    },
    {
      type: 'heading',
      text: 'Rovnoměrné rozvržení',
    },
    {
      type: 'paragraph',
      text: 'Při rovnoměrném rozvržení zaměstnavatel rozvrhuje na jednotlivé týdny stejný rozsah stanovené, zkrácené stanovené nebo kratší pracovní doby. Konkrétní počet směn v kalendářním měsíci se přesto může lišit podle pracovních dnů a svátků.',
    },
    {
      type: 'heading',
      text: 'Nerovnoměrné rozvržení',
    },
    {
      type: 'paragraph',
      text: 'Při nerovnoměrném rozvržení může být v některých týdnech rozvrženo více a v jiných méně hodin. Průměr za vyrovnávací období nesmí přesáhnout příslušnou týdenní pracovní dobu. Vyrovnávací období může běžně činit nejvýše 26 týdnů a kolektivní smlouva jej může prodloužit nejvýše na 52 týdnů.',
    },
    {
      type: 'example',
      title: 'Vyrovnání dvou týdnů',
      situation:
        'Zaměstnanec s kratší pracovní dobou 30 hodin má v prvním týdnu rozvrženo 36 hodin a ve druhém 24 hodin.',
      solution:
        'Průměr za dva týdny činí (36 + 24) ÷ 2 = 30 hodin. Pokud jsou dva týdny součástí řádně určeného vyrovnávacího období a jsou dodrženy ostatní limity, sjednaný rozsah je naplněn.',
    },
    {
      type: 'heading',
      text: 'Mzdový fond vzniká z rozvrhu',
    },
    {
      type: 'definition',
      term: 'Fond pracovní doby',
      definition:
        'Součet pracovní doby rozvržené zaměstnanci do směn v konkrétním období, obvykle kalendářním měsíci.',
    },
    {
      type: 'paragraph',
      text: 'Fond se neurčuje pouze násobením týdenní pracovní doby průměrným počtem týdnů v měsíci. Pro měsíční zpracování se vychází z konkrétního kalendáře a platného rozvrhu směn zaměstnance.',
    },
    {
      type: 'example',
      title: 'Měsíční fond v jednosměnném režimu',
      situation: 'Modelový měsíc obsahuje 20 rozvržených osmihodinových směn.',
      solution:
        'Fond pracovní doby činí 20 × 8 = 160 hodin. Nezapočitatelné přestávky už v osmihodinové čisté směně zahrnuty nejsou.',
    },
    {
      type: 'example',
      title: 'Měsíční fond kratšího úvazku',
      situation:
        'Zaměstnanec má v modelovém měsíci rozvrženo 20 šestihodinových směn.',
      solution:
        'Jeho individuální fond činí 20 × 6 = 120 hodin. Nelze použít fond kolegy s osmihodinovými směnami.',
    },
    {
      type: 'heading',
      text: 'Svátek a fond',
    },
    {
      type: 'paragraph',
      text: 'Dopad svátku závisí na tom, zda podle rozvrhu připadl zaměstnanci na směnu. U rovnoměrného pondělního až pátečního rozvrhu může svátek snížit počet plánovaných pracovních hodin. U nerovnoměrného nebo směnného provozu se posuzuje individuální rozvrh.',
    },
    {
      type: 'heading',
      text: 'Práce nad kratší dobu',
    },
    {
      type: 'paragraph',
      text: 'Práce nad sjednanou kratší pracovní dobu, ale do stanovené týdenní pracovní doby, není prací přesčas. Zaměstnanci za ni náleží mzda nebo plat za odpracovanou dobu, ale bez automatického přesčasového příplatku.',
    },
    {
      type: 'paragraph',
      text: 'Přesčasem je až práce nad příslušnou stanovenou nebo zkrácenou stanovenou týdenní pracovní dobu a mimo rozvrh, nařízená nebo schválená zaměstnavatelem.',
    },
    {
      type: 'heading',
      text: 'Změna úvazku v průběhu měsíce',
    },
    {
      type: 'paragraph',
      text: 'Při změně kratší pracovní doby se musí určit přesné datum účinnosti. Fond před změnou a po změně se vypočítá podle rozvrhu platného pro příslušné části měsíce. Historický rozvrh se nesmí zpětně přepsat.',
    },
    {
      type: 'example',
      title: 'Změna z 40 na 30 hodin',
      situation:
        'Zaměstnanec má do 14. dne měsíce rozvrženo 10 osmihodinových směn a od 15. dne po účinné dohodě 10 šestihodinových směn.',
      solution:
        'Fond činí 10 × 8 + 10 × 6 = 140 hodin. Nelze celý měsíc zpětně přepočítat jedním úvazkem.',
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'určit pracovněprávní vztah',
        'určit pracovní režim',
        'zjistit zákonnou stanovenou týdenní pracovní dobu',
        'ověřit případné zkrácení stanovené doby',
        'ověřit individuálně sjednanou kratší pracovní dobu',
        'určit způsob rozvržení a vyrovnávací období',
        'načíst konkrétní měsíční rozvrh',
        'sečíst čisté rozvržené hodiny',
        'oddělit změny účinné uprostřed období',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'použít 40 hodin pro dvousměnný nebo nepřetržitý režim',
        'zaměnit kratší pracovní dobu a zkrácenou stanovenou dobu',
        'považovat práci nad kratší úvazek automaticky za přesčas',
        'vytvořit fond pouze z obecného měsíčního průměru',
        'ignorovat individuální rozvrh při svátku',
        'zpětně přepsat celý měsíc novým úvazkem',
        'započítat nezapočitatelnou přestávku do čisté pracovní doby',
      ],
    },
    {
      type: 'summary',
      items: [
        'Základní stanovená týdenní pracovní doba činí 40 hodin, ve vybraných směnných režimech 38,75 nebo 37,5 hodiny.',
        'Zkrácená stanovená pracovní doba se zavádí bez snížení mzdy; kratší pracovní doba se sjednává individuálně.',
        'Kratší úvazek lze rozvrhnout různými způsoby.',
        'Fond pracovní doby se určuje z konkrétního platného rozvrhu.',
        'Práce nad kratší dobu není přesčasem, dokud nepřesáhne stanovenou týdenní pracovní dobu.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'weekly-hours-card-01',
      front: 'Jaká je stanovená týdenní pracovní doba v běžném režimu?',
      back: '40 hodin týdně.',
      explanation: 'Zvláštní režimy mají zákonem stanovený nižší rozsah.',
      skillIds: ['weekly-hours-classification'],
    },
    {
      id: 'weekly-hours-card-02',
      front:
        'Kolik činí stanovená týdenní pracovní doba ve dvousměnném režimu?',
      back: '38,75 hodiny týdně.',
      explanation: 'Ve vícesměnném a nepřetržitém režimu činí 37,5 hodiny.',
      skillIds: ['weekly-hours-classification'],
    },
    {
      id: 'weekly-hours-card-03',
      front:
        'Jaký je rozdíl mezi zkrácenou stanovenou a kratší pracovní dobou?',
      back: 'Zkrácená stanovená doba nesnižuje mzdu; kratší doba je individuální úvazek s odpovídajícím odměňováním.',
      explanation: 'Jde o dva odlišné právní instituty.',
      skillIds: ['shorter-hours-control'],
    },
    {
      id: 'weekly-hours-card-04',
      front: 'Z čeho se určuje měsíční fond pracovní doby?',
      back: 'Z konkrétního platného rozvrhu směn zaměstnance.',
      explanation: 'Samotná hodnota týdenního úvazku nestačí.',
      skillIds: ['work-fund-calculation'],
    },
  ],
  exercises: [
    {
      id: 'weekly-hours-exercise-01',
      type: 'single_choice',
      prompt: 'Jaká je stanovená týdenní pracovní doba ve vícesměnném režimu?',
      options: [
        {
          id: 'a',
          text: '40 hodin.',
        },
        {
          id: 'b',
          text: '38,75 hodiny.',
        },
        {
          id: 'c',
          text: '37,5 hodiny.',
        },
        {
          id: 'd',
          text: '30 hodin.',
        },
      ],
      correctOptionId: 'c',
      skillIds: ['weekly-hours-classification'],
      explanation: 'Vícesměnný a nepřetržitý režim mají 37,5 hodiny týdně.',
      commonMistake: 'Použít hodnotu dvousměnného režimu.',
    },
    {
      id: 'weekly-hours-exercise-02',
      type: 'multiple_choice',
      prompt: 'Která tvrzení o kratší pracovní době jsou správná?',
      options: [
        {
          id: 'agreement',
          text: 'Vzniká individuální písemnou dohodou.',
        },
        {
          id: 'lower',
          text: 'Je nižší než stanovená nebo zkrácená stanovená doba.',
        },
        {
          id: 'pay',
          text: 'Mzda nebo plat zpravidla odpovídá kratšímu rozsahu.',
        },
        {
          id: 'overtime',
          text: 'Každá hodina nad kratší dobu je automaticky přesčas.',
        },
        {
          id: 'schedule',
          text: 'Musí mít konkrétní rozvrh směn.',
        },
      ],
      correctOptionIds: ['agreement', 'lower', 'pay', 'schedule'],
      skillIds: ['shorter-hours-control'],
      explanation: 'Přesčas vzniká až nad stanovenou týdenní pracovní dobu.',
      commonMistake: 'Zaměnit kratší pracovní dobu za hranici přesčasu.',
    },
    {
      id: 'weekly-hours-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď určení měsíčního fondu pracovní doby.',
      steps: [
        {
          id: 'regime',
          text: 'Určit pracovní režim a zákonnou týdenní dobu.',
        },
        {
          id: 'shortening',
          text: 'Ověřit zkrácenou nebo kratší pracovní dobu.',
        },
        {
          id: 'distribution',
          text: 'Určit způsob rozvržení a vyrovnávací období.',
        },
        {
          id: 'schedule',
          text: 'Načíst platný měsíční rozvrh.',
        },
        {
          id: 'sum',
          text: 'Sečíst čisté rozvržené hodiny.',
        },
        {
          id: 'changes',
          text: 'Oddělit změny účinné v průběhu měsíce.',
        },
      ],
      correctOrder: [
        'regime',
        'shortening',
        'distribution',
        'schedule',
        'sum',
        'changes',
      ],
      skillIds: ['work-fund-calculation'],
      explanation: 'Fond vychází z právního rozsahu i konkrétního rozvrhu.',
      commonMistake: 'Použít univerzální fond bez kontroly zaměstnance.',
    },
    {
      id: 'weekly-hours-exercise-04',
      type: 'single_choice',
      prompt:
        'Modelový měsíc má 20 šestihodinových směn. Jaký je fond zaměstnance?',
      options: [
        {
          id: 'a',
          text: '100 hodin.',
        },
        {
          id: 'b',
          text: '120 hodin.',
        },
        {
          id: 'c',
          text: '150 hodin.',
        },
        {
          id: 'd',
          text: '160 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['work-fund-calculation'],
      explanation: '20 × 6 = 120 hodin.',
      commonMistake: 'Použít osmihodinový fond kolegy.',
    },
    {
      id: 'weekly-hours-exercise-05',
      type: 'short_text',
      prompt:
        'Kolik hodin týdně činí stanovená pracovní doba ve dvousměnném režimu?',
      acceptedAnswers: ['38,75 hodiny', '38,75', '38.75'],
      ignoreDiacritics: true,
      skillIds: ['weekly-hours-classification'],
      explanation: 'Dvousměnný pracovní režim má 38,75 hodiny týdně.',
      commonMistake: 'Uvést 37,5 hodiny.',
    },
    {
      id: 'weekly-hours-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec má 30hodinový úvazek a odpracuje 34 hodin při stanovené době 40 hodin. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Čtyři hodiny jsou automaticky přesčas.',
        },
        {
          id: 'b',
          text: 'Jde o práci nad kratší dobu, ale zatím ne o přesčas.',
        },
        {
          id: 'c',
          text: 'Hodiny se neplatí.',
        },
        {
          id: 'd',
          text: 'Úvazek se automaticky mění na 40 hodin.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['shorter-hours-control'],
      explanation: 'Hranicí přesčasu je stanovená týdenní pracovní doba.',
      commonMistake: 'Použít sjednaný úvazek jako zákonnou hranici přesčasu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Délka pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII2Delkapracovnidoby',
      kind: 'official',
    },
    {
      title: 'MPSV – Vymezení pojmů pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII1Vymezenipojmu',
      kind: 'official',
    },
    {
      title: 'MPSV – Nerovnoměrné rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII32Nerovnomernerozvrzenipraco',
      kind: 'official',
    },
    {
      title: 'MPSV – Rozvržení pracovní doby',
      url: 'https://ppropo.mpsv.cz/VIII3Rozvrzenipracovnidoby',
      kind: 'official',
    },
  ],
})
