import { defineLessonContent } from '../define'

export const employerObstaclesContent = defineLessonContent({
  moduleId: 'work-obstacles',
  skillIds: [
    'employer-obstacle-classification',
    'employer-obstacle-rate-control',
    'partial-unemployment-control',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Prostoj, přerušení práce vlivem počasí nebo živelní události, jiné překážky zaměstnavatele, částečná nezaměstnanost a doba cesty podle § 207 až 210 zákoníku práce.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Překážka zaměstnavatele vzniká, když zaměstnavatel nepřiděluje práci',
    },
    {
      type: 'paragraph',
      text: 'Základní povinností zaměstnavatele je přidělovat zaměstnanci práci podle pracovní smlouvy a rozvrhu. Nemůže-li nebo nesmí-li ji dočasně přidělit a zaměstnanec je připraven, ochoten a schopen pracovat, může vzniknout překážka na straně zaměstnavatele.',
    },
    {
      type: 'definition',
      term: 'Překážka v práci na straně zaměstnavatele',
      definition:
        'Dočasná situace, kdy zaměstnavatel nepřiděluje zaměstnanci práci podle pracovního závazku, přestože zaměstnanec není v osobní překážce a je připraven práci konat.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Ne každé neodpracování směny je překážkou zaměstnavatele. Nejprve se musí vyloučit osobní překážka, dovolená, neomluvená absence, změna rozvrhu nebo platné převedení na jinou práci.',
    },
    {
      type: 'heading',
      text: 'Čtyři hlavní režimy',
    },
    {
      type: 'list',
      items: [
        'prostoj',
        'přerušení práce způsobené nepříznivým počasím nebo živelní událostí',
        'jiná překážka na straně zaměstnavatele',
        'částečná nezaměstnanost',
      ],
    },
    {
      type: 'heading',
      text: 'Prostoj',
    },
    {
      type: 'paragraph',
      text: 'Prostoj je přechodná krátkodobá závada způsobená poruchou stroje, výpadkem dodávky surovin nebo pohonné síly, chybnými pracovními podklady nebo jinou provozní příčinou, kterou zaměstnanec nezavinil.',
    },
    {
      type: 'list',
      items: [
        'porucha stroje nebo zařízení',
        'výpadek surovin',
        'výpadek energie nebo jiné pohonné síly',
        'chybné pracovní podklady',
        'jiná přechodná provozní závada',
      ],
    },
    {
      type: 'paragraph',
      text: 'Nebyl-li zaměstnanec se svým souhlasem převeden na jinou práci, přísluší mu při prostoji náhrada mzdy nebo platu nejméně ve výši 80 % průměrného výdělku.',
    },
    {
      type: 'example',
      title: 'Čtyřhodinový prostoj',
      situation:
        'Výrobní linka se porouchá a zaměstnanec nemůže čtyři hodiny pracovat. Není převeden na jinou práci. Průměrný hodinový výdělek činí 300 Kč.',
      solution: 'Minimální náhrada činí 4 × 300 × 80 % = 960 Kč.',
    },
    {
      type: 'heading',
      text: 'Převedení na jinou práci při prostoji',
    },
    {
      type: 'paragraph',
      text: 'Při prostoji nebo povětrnostní překážce může zaměstnavatel převést zaměstnance na jinou práci mimo sjednaný druh práce jen s jeho souhlasem. Pokud zaměstnanec tuto jinou práci skutečně vykonává, dostává za ni mzdu nebo plat a stejný čas se neeviduje jako překážka.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Souhlas s převedením a skutečně odpracovaná doba musí být dohledatelné. Nelze současně vykázat plnou práci i náhradu za překážku za tentýž čas.',
    },
    {
      type: 'heading',
      text: 'Nepříznivé povětrnostní vlivy a živelní událost',
    },
    {
      type: 'paragraph',
      text: 'Nemůže-li zaměstnanec konat práci kvůli přerušení způsobenému nepříznivým počasím nebo živelní událostí a není převeden na jinou práci, přísluší mu náhrada nejméně 60 % průměrného výdělku.',
    },
    {
      type: 'example',
      title: 'Přerušení práce kvůli povodni',
      situation:
        'Povodeň znemožní práci v jedné budově na šest hodin. Zaměstnanec nemůže pracovat jinde a jeho průměrný hodinový výdělek činí 280 Kč.',
      solution: 'Minimální náhrada činí 6 × 280 × 60 % = 1 008 Kč.',
    },
    {
      type: 'paragraph',
      text: 'Jedna mimořádná událost může u různých zaměstnanců vyvolat různé režimy. Zatopená budova může být živelní překážkou, navazující výpadek elektrické energie pro jiné oddělení prostoji a další oddělení může pokračovat v práci.',
    },
    {
      type: 'heading',
      text: 'Jiná překážka na straně zaměstnavatele',
    },
    {
      type: 'paragraph',
      text: 'Jestliže zaměstnavatel nepřiděluje práci z jiného důvodu než prostoj nebo povětrnostní či živelná událost, přísluší zaměstnanci náhrada ve výši průměrného výdělku.',
    },
    {
      type: 'list',
      items: [
        'zaměstnavatel nemá připravené pracoviště',
        'zaměstnavatel nemůže zaměstnanci přidělovat sjednaný druh práce',
        'neplatné nebo neoprávněné preventivní nepřidělování práce',
        'organizační důvod, který nesplňuje znaky částečné nezaměstnanosti',
        'jiná dočasná nemožnost splnit povinnost přidělovat práci',
      ],
    },
    {
      type: 'example',
      title: 'Nepřipravené pracoviště',
      situation:
        'Zaměstnanec nastoupí podle rozvrhu, ale zaměstnavatel mu tři a půl hodiny nemůže přidělit práci, protože pracoviště nebylo připraveno. Průměrný hodinový výdělek činí 320 Kč.',
      solution:
        'Jde o jinou překážku zaměstnavatele. Náhrada činí 3,5 × 320 = 1 120 Kč.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'U jiné překážky podle § 208 není rozhodující zavinění zaměstnavatele. Rozhodující je, že nepřiděluje práci podle pracovního závazku a nejde o zvláštní režim § 207 nebo § 209.',
    },
    {
      type: 'heading',
      text: 'Konto pracovní doby',
    },
    {
      type: 'paragraph',
      text: 'Při uplatnění konta pracovní doby se některé režimy jiných překážek zaměstnavatele posuzují odlišně. Mzdová účetní nesmí použít § 208 bez ověření, zda je u zaměstnance platně uplatněno konto pracovní doby.',
    },
    {
      type: 'heading',
      text: 'Částečná nezaměstnanost',
    },
    {
      type: 'paragraph',
      text: 'Částečná nezaměstnanost vzniká u zaměstnavatele mimo platovou sféru, který nemůže dočasně přidělovat práci v rozsahu týdenní pracovní doby kvůli omezení odbytu výrobků nebo poklesu poptávky po poskytovaných službách.',
    },
    {
      type: 'paragraph',
      text: 'Nejde o poruchu stroje ani jednorázový provozní výpadek. Důvodem je dočasná ekonomická situace na trhu na straně poptávky nebo odbytu.',
    },
    {
      type: 'heading',
      text: 'Podmínka dohody nebo vnitřního předpisu',
    },
    {
      type: 'paragraph',
      text: 'Působí-li u zaměstnavatele odborová organizace, sníženou náhradu upraví dohoda s odborovou organizací. Nepůsobí-li odborová organizace, může ji zaměstnavatel stanovit vnitřním předpisem.',
    },
    {
      type: 'paragraph',
      text: 'Takto určená náhrada musí činit nejméně 60 % průměrného výdělku. Bez platného podkladu nelze náhradu jednostranně snížit na 60 %.',
    },
    {
      type: 'example',
      title: 'Částečná nezaměstnanost s vnitřním předpisem',
      situation:
        'U zaměstnavatele nepůsobí odborová organizace. Platný vnitřní předpis stanoví náhradu 65 %. Zaměstnanec neodpracuje z tohoto důvodu 20 hodin a jeho průměrný hodinový výdělek činí 300 Kč.',
      solution: 'Náhrada činí 20 × 300 × 65 % = 3 900 Kč.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Částečnou nezaměstnanost nelze použít u zaměstnavatelů odměňujících platem podle § 109 odst. 3 zákoníku práce.',
    },
    {
      type: 'heading',
      text: 'Rozdíl mezi prostojem a částečnou nezaměstnaností',
    },
    {
      type: 'list',
      items: [
        'prostoj – provozní závada, například porucha stroje nebo výpadek surovin',
        'částečná nezaměstnanost – dočasné omezení odbytu nebo poptávky',
        'prostoj – zákonné minimum 80 %',
        'částečná nezaměstnanost – nejméně 60 % při platném kolektivním nebo interním podkladu',
      ],
    },
    {
      type: 'heading',
      text: 'Doba cesty v pracovní době',
    },
    {
      type: 'paragraph',
      text: 'Doba strávená na pracovní cestě nebo cestě mimo pravidelné pracoviště jinak než plněním pracovních úkolů, která spadá do pracovní doby, se považuje za překážku na straně zaměstnavatele. Zaměstnanci se mzda nebo plat nekrátí; ujde-li mu kvůli způsobu odměňování část mzdy nebo platu, přísluší náhrada ve výši průměrného výdělku.',
    },
    {
      type: 'example',
      title: 'Cesta mezi pracovišti',
      situation:
        'Zaměstnanec se podle pokynu přesouvá vlakem během své rozvržené směny, ale během jízdy neplní pracovní úkoly.',
      solution:
        'Čas se posoudí podle § 210 jako překážka zaměstnavatele. Zaměstnanci se odměna nesmí krátit; případná ušlá výkonová složka se řeší náhradou.',
    },
    {
      type: 'heading',
      text: 'Práce na dálku se samorozvrhováním',
    },
    {
      type: 'paragraph',
      text: 'U zaměstnance, který si při práci na dálku podle dohody sám rozvrhuje pracovní dobu, se některá pravidla prostojů a povětrnostních překážek nepoužijí. Před použitím kódu překážky ověř právní režim rozvrhování.',
    },
    {
      type: 'heading',
      text: 'Připravenost zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Nárok na náhradu za překážku zaměstnavatele předpokládá, že zaměstnanec je připraven a schopen práci konat. Je-li současně v dočasné pracovní neschopnosti, na dovolené nebo v jiné osobní překážce, nelze stejný čas automaticky vykázat jako překážku zaměstnavatele.',
    },
    {
      type: 'heading',
      text: 'Podklad pro mzdové zpracování',
    },
    {
      type: 'list',
      items: [
        'platný rozvrh směny',
        'čas začátku a konce překážky',
        'provozní nebo organizační důvod',
        'rozhodnutí o převedení a souhlas zaměstnance',
        'skutečně odpracovaný čas na jiné práci',
        'průměrný hodinový výdělek',
        'použitá procentní sazba',
        'kolektivní dohoda nebo vnitřní předpis pro částečnou nezaměstnanost',
        'schválení odpovědné osoby',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'použít 80 % na každou poruchu bez ověření prostoje',
        'zaměnit výpadek poptávky za prostoj',
        'použít 60 % bez platného podkladu',
        'použít částečnou nezaměstnanost v platové sféře',
        'vykázat překážku současně s prací na jiném místě',
        'ignorovat konto pracovní doby',
        'použít 60 % u jiné překážky podle § 208',
        'neověřit připravenost zaměstnance pracovat',
        'zaměnit pracovní cestu a osobní dojíždění',
      ],
    },
    {
      type: 'summary',
      items: [
        'Prostoj je krátkodobá provozní závada s náhradou nejméně 80 %.',
        'Počasí nebo živelní událost zakládá náhradu nejméně 60 %.',
        'Jiná překážka zaměstnavatele se hradí ve výši průměrného výdělku.',
        'Částečná nezaměstnanost vyžaduje ekonomický důvod a platnou dohodu nebo vnitřní předpis.',
        'Stejný čas nelze současně vykázat jako práci a překážku.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employer-obstacles-card-01',
      front: 'Jaká je minimální náhrada při prostoji?',
      back: '80 % průměrného výdělku.',
      explanation: 'Jde o provozní závadu podle § 207.',
      skillIds: ['employer-obstacle-rate-control'],
    },
    {
      id: 'employer-obstacles-card-02',
      front:
        'Jaká je minimální náhrada při přerušení práce kvůli počasí nebo živelní události?',
      back: '60 % průměrného výdělku.',
      explanation: 'Zaměstnanec nesmí být současně převeden na jinou práci.',
      skillIds: ['employer-obstacle-rate-control'],
    },
    {
      id: 'employer-obstacles-card-03',
      front:
        'Jaká náhrada náleží při jiné překážce zaměstnavatele podle § 208?',
      back: 'Průměrný výdělek, tedy 100 %.',
      explanation: 'Nejde-li o konto pracovní doby nebo jiný zvláštní režim.',
      skillIds: ['employer-obstacle-classification'],
    },
    {
      id: 'employer-obstacles-card-04',
      front:
        'Co musí existovat pro sníženou náhradu při částečné nezaměstnanosti?',
      back: 'Dohoda s odborovou organizací, nebo vnitřní předpis, pokud odbory nepůsobí.',
      explanation: 'Náhrada musí činit nejméně 60 %.',
      skillIds: ['partial-unemployment-control'],
    },
  ],
  exercises: [
    {
      id: 'employer-obstacles-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec nemůže pracovat kvůli krátkodobé poruše stroje, kterou nezavinil, a není převeden na jinou práci. Jaký režim se použije?',
      options: [
        {
          id: 'a',
          text: 'Prostoj, nejméně 80 % průměrného výdělku.',
        },
        {
          id: 'b',
          text: 'Jiná překážka, vždy 100 %.',
        },
        {
          id: 'c',
          text: 'Částečná nezaměstnanost, 60 %.',
        },
        {
          id: 'd',
          text: 'Neomluvená absence.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['employer-obstacle-classification'],
      explanation: 'Porucha stroje je typickým prostoji podle § 207.',
      commonMistake: 'Použít ekonomický režim částečné nezaměstnanosti.',
    },
    {
      id: 'employer-obstacles-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které podmínky jsou nutné pro použití snížené náhrady při částečné nezaměstnanosti?',
      options: [
        {
          id: 'demand',
          text: 'Dočasné omezení odbytu nebo poptávky.',
        },
        {
          id: 'private',
          text: 'Zaměstnavatel není zaměstnavatelem odměňujícím platem podle § 109 odst. 3.',
        },
        {
          id: 'document',
          text: 'Dohoda s odbory nebo vnitřní předpis bez odborů.',
        },
        {
          id: 'minimum',
          text: 'Náhrada nejméně 60 % průměrného výdělku.',
        },
        {
          id: 'machine',
          text: 'Vždy musí jít o poruchu stroje.',
        },
      ],
      correctOptionIds: ['demand', 'private', 'document', 'minimum'],
      skillIds: ['partial-unemployment-control'],
      explanation:
        'Porucha stroje patří do prostoje, nikoli částečné nezaměstnanosti.',
      commonMistake: 'Zaměnit provozní a ekonomický důvod.',
    },
    {
      id: 'employer-obstacles-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování překážky zaměstnavatele.',
      steps: [
        {
          id: 'readiness',
          text: 'Ověřit připravenost zaměstnance pracovat.',
        },
        {
          id: 'schedule',
          text: 'Ověřit rozvrženou pracovní dobu.',
        },
        {
          id: 'cause',
          text: 'Určit skutečnou příčinu nepřidělování práce.',
        },
        {
          id: 'transfer',
          text: 'Ověřit případné převedení na jinou práci.',
        },
        {
          id: 'rate',
          text: 'Přiřadit právní režim a sazbu.',
        },
        {
          id: 'record',
          text: 'Zapsat dobu, výpočet a schvalovací podklad.',
        },
      ],
      correctOrder: [
        'readiness',
        'schedule',
        'cause',
        'transfer',
        'rate',
        'record',
      ],
      skillIds: ['employer-obstacle-classification'],
      explanation:
        'Sazba se určuje až po ověření příčiny a skutečného výkonu jiné práce.',
      commonMistake: 'Vybrat sazbu podle interního názvu absence.',
    },
    {
      id: 'employer-obstacles-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel nepřiděluje práci kvůli dočasnému poklesu poptávky. Nepůsobí u něj odbory a neexistuje vnitřní předpis. Může automaticky použít náhradu 60 %?',
      options: [
        {
          id: 'a',
          text: 'Ano, pokles poptávky vždy stačí.',
        },
        {
          id: 'b',
          text: 'Ne, bez platného vnitřního předpisu nelze sníženou sazbu takto použít.',
        },
        {
          id: 'c',
          text: 'Ano, ale jen u vedoucích zaměstnanců.',
        },
        {
          id: 'd',
          text: 'Ano, pokud překážka trvá méně než týden.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['partial-unemployment-control'],
      explanation:
        'Bez odborové dohody nebo náhradního vnitřního předpisu se snížená sazba neuplatní.',
      commonMistake:
        'Považovat zákonné minimum 60 % za automatickou sazbu bez dokumentu.',
    },
    {
      id: 'employer-obstacles-exercise-05',
      type: 'short_text',
      prompt:
        'Prostoj trvá 7,25 hodiny a průměrný hodinový výdělek zaměstnance činí 310 Kč. Zaměstnavatel poskytuje zákonné minimum. Kolik činí náhrada?',
      acceptedAnswers: ['1 798 Kč', '1798 Kč', '1 798', '1798', '1798,00'],
      ignoreDiacritics: true,
      skillIds: ['employer-obstacle-rate-control'],
      explanation: 'Výpočet je 7,25 × 310 × 80 % = 1 798 Kč.',
      commonMistake: 'Použít 60% sazbu nebo zaokrouhlit dobu na celé hodiny.',
    },
    {
      id: 'employer-obstacles-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec se během rozvržené směny přesouvá na pracovní cestě, během přepravy neplní pracovní úkoly a kvůli hodinovému odměňování by mu odměna ušla. Jaký je základní režim?',
      options: [
        {
          id: 'a',
          text: 'Osobní překážka bez náhrady.',
        },
        {
          id: 'b',
          text: 'Překážka na straně zaměstnavatele s náhradou ušlé odměny ve výši průměrného výdělku.',
        },
        {
          id: 'c',
          text: 'Dovolená.',
        },
        {
          id: 'd',
          text: 'Pracovní pohotovost.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employer-obstacle-classification'],
      explanation:
        'Doba cesty v pracovní době podle § 210 nesmí zaměstnance připravit o odměnu.',
      commonMistake: 'Zaměnit služební cestu a běžné osobní dojíždění.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Prostoj',
      url: 'https://ppropo.mpsv.cz/IX21Prostoj',
      kind: 'official',
    },
    {
      title: 'MPSV – Přerušení práce způsobené počasím nebo živelní událostí',
      url: 'https://ppropo.mpsv.cz/IX22Prerusenipracezpusobenenepri',
      kind: 'official',
    },
    {
      title: 'MPSV – Jiné překážky na straně zaměstnavatele',
      url: 'https://ppropo.mpsv.cz/IX23Jineprekazkyvpracinastraneza',
      kind: 'official',
    },
    {
      title: 'MPSV – Překážky v práci',
      url: 'https://ppropo.mpsv.cz/IXPrekazkyvpraci',
      kind: 'official',
    },
  ],
})
