import { defineLessonContent } from '../define'

export const dependentWorkContent = defineLessonContent({
  moduleId: 'labour-law-basics',
  skillIds: [
    'dependent-work-signs',
    'dependent-work-classification',
    'illegal-work-risk',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-10',
    note: 'Vymezení závislé práce, základních pracovněprávních vztahů a rizika zastřeného výkonu závislé práce ověřené pro české právní prostředí roku 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Proč je závislá práce základním pojmem',
    },
    {
      type: 'paragraph',
      text: 'Než mzdová účetní začne řešit mzdu, daň nebo pojistné, musí být správně určeno, v jakém právním vztahu člověk práci vykonává. Závislá práce má být vykonávána v pracovněprávním vztahu. Chybné označení vztahu může ovlivnit pracovněprávní ochranu, evidenci, odvody i povinná hlášení.',
    },
    {
      type: 'definition',
      term: 'Závislá práce',
      definition:
        'Práce vykonávaná ve vztahu nadřízenosti zaměstnavatele a podřízenosti zaměstnance, jménem zaměstnavatele, podle jeho pokynů a osobně zaměstnancem.',
    },
    {
      type: 'heading',
      text: 'Znaky závislé práce',
    },
    {
      type: 'list',
      items: [
        'zaměstnavatel organizuje práci a určuje její rámec',
        'pracovník je při výkonu práce v podřízeném postavení',
        'práce je vykonávána jménem zaměstnavatele',
        'pracovník se řídí pokyny zaměstnavatele',
        'pracovník vykonává práci osobně a nemůže se bez dalšího nechat nahradit libovolnou osobou',
      ],
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'O povaze vztahu nerozhoduje pouze název smlouvy. Posuzuje se zejména skutečný způsob, jakým je práce organizována a vykonávána.',
    },
    {
      type: 'heading',
      text: 'Podmínky výkonu závislé práce',
    },
    {
      type: 'paragraph',
      text: 'Závislá práce se vykonává za odměnu, na náklady a odpovědnost zaměstnavatele, v pracovní době a na pracovišti zaměstnavatele nebo na jiném dohodnutém místě. Tyto okolnosti pomáhají popsat reálné fungování vztahu a musí se hodnotit společně s hlavními znaky závislé práce.',
    },
    {
      type: 'definition',
      term: 'Osobní výkon práce',
      definition:
        'Povinnost pracovníka vykonávat sjednanou práci vlastní činností, nikoli ji bez souhlasu zaměstnavatele libovolně převést na jinou osobu.',
    },
    {
      type: 'heading',
      text: 'Základní pracovněprávní vztahy',
    },
    {
      type: 'list',
      items: [
        'pracovní poměr',
        'dohoda o provedení práce',
        'dohoda o pracovní činnosti',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pokud práce naplňuje znaky závislé práce, má být zařazena do odpovídajícího základního pracovněprávního vztahu, nestanoví-li zvláštní právní úprava jinak. Volba mezi pracovním poměrem, DPP a DPČ se neprovádí pouze podle přání stran, ale také podle skutečného rozsahu a režimu práce.',
    },
    {
      type: 'heading',
      text: 'Samostatná činnost není totéž co závislá práce',
    },
    {
      type: 'paragraph',
      text: 'Samostatný dodavatel obvykle organizuje činnost vlastním jménem, nese podnikatelské riziko, rozhoduje o způsobu provedení a odpovídá za výsledek. Jednotlivý znak sám o sobě nemusí rozhodnout. Podstatný je celkový obraz spolupráce.',
    },
    {
      type: 'example',
      title: 'Externí grafik s vlastní organizací práce',
      situation:
        'Grafik přijímá zakázky od více klientů, používá vlastní vybavení, sám si volí čas a postup práce a odpovídá za dodání výsledného návrhu.',
      solution:
        'Takové okolnosti mohou odpovídat samostatné dodavatelské činnosti. Posouzení se však musí opírat o skutečný obsah spolupráce, nikoli pouze o vystavenou fakturu nebo označení smlouvy.',
    },
    {
      type: 'heading',
      text: 'Zastřený výkon závislé práce',
    },
    {
      type: 'definition',
      term: 'Švarcsystém',
      definition:
        'Označení pro situaci, kdy je faktický výkon závislé práce zastřen jiným smluvním vztahem, typicky obchodní smlouvou s osobou formálně vystupující jako podnikatel.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Faktura, živnostenské oprávnění ani označení osoby jako dodavatele samy o sobě nevylučují, že je ve skutečnosti vykonávána závislá práce.',
    },
    {
      type: 'example',
      title: 'Dodavatel pracující jako běžný člen týmu',
      situation:
        'Osoba fakturuje každý měsíc stejnou částku, pracuje osobně v určených směnách, používá vybavení firmy, řídí se každodenními pokyny vedoucího a nevykonává práci pro jiné klienty.',
      solution:
        'Soubor okolností vykazuje více znaků závislé práce. Případ nelze vyřešit pouze kontrolou názvu smlouvy. Musí být předán k pracovněprávnímu posouzení a případné nápravě vztahu.',
    },
    {
      type: 'heading',
      text: 'Význam pro mzdovou účetní',
    },
    {
      type: 'list',
      items: [
        'ověřit, že osoba má doložený pracovněprávní titul',
        'nezakládat zaměstnance pouze podle neúplné nebo neurčité informace',
        'upozornit na nesoulad mezi smlouvou a skutečným režimem práce',
        'nepřevádět sama obchodní vztah na zaměstnání bez rozhodnutí oprávněné osoby',
        'po nápravě zajistit správné datum účinnosti, evidenci a navazující mzdové vstupy',
        'zachovat podklady a kontrolní stopu posouzení',
      ],
    },
    {
      type: 'heading',
      text: 'Rozhodovací postup',
    },
    {
      type: 'list',
      items: [
        'zjistit, jak je práce ve skutečnosti vykonávána',
        'porovnat skutečnost se znaky závislé práce',
        'ověřit existující smluvní a evidenční dokumentaci',
        'zaznamenat nesoulad nebo chybějící údaje',
        'eskalovat případ HR, právníkovi nebo jiné oprávněné osobě',
        'mzdově zpracovat vztah až podle doloženého výsledku posouzení',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat každého držitele živnostenského oprávnění automaticky za nezávislého dodavatele',
        'posuzovat vztah pouze podle názvu smlouvy',
        'zaměnit jednorázový pokyn k výsledku za soustavné řízení práce',
        'ignorovat osobní výkon práce a pevné směny',
        'nechat mzdovou účetní samotnou rozhodnout složitou právní otázku',
        'opravit evidenci bez určení účinnosti a dopadů do předchozích období',
      ],
    },
    {
      type: 'summary',
      items: [
        'Závislá práce se poznává podle skutečného způsobu výkonu, ne jen podle názvu smlouvy.',
        'Mezi klíčové znaky patří nadřízenost a podřízenost, pokyny, práce jménem zaměstnavatele a osobní výkon.',
        'Závislá práce má být vykonávána v pracovním poměru, na DPP nebo na DPČ, není-li stanovena zvláštní výjimka.',
        'Zastření závislé práce obchodní smlouvou představuje významné právní a mzdové riziko.',
        'Mzdová účetní nesoulad identifikuje a eskaluje, ale nenahrazuje právní rozhodnutí zaměstnavatele.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'dependent-work-card-01',
      front: 'Rozhoduje o závislé práci název smlouvy?',
      back: 'Ne. Rozhodující je skutečný obsah a způsob výkonu práce.',
      explanation:
        'Obchodní smlouva může zakrývat vztah, který podle reality vykazuje znaky závislé práce.',
      skillIds: ['dependent-work-classification'],
    },
    {
      id: 'dependent-work-card-02',
      front: 'Jaké jsou hlavní znaky závislé práce?',
      back: 'Nadřízenost a podřízenost, práce jménem zaměstnavatele, podle jeho pokynů a osobně zaměstnancem.',
      explanation:
        'Znaky se neposuzují izolovaně, ale podle celkového fungování vztahu.',
      skillIds: ['dependent-work-signs'],
    },
    {
      id: 'dependent-work-card-03',
      front:
        'Ve kterých základních vztazích může být závislá práce vykonávána?',
      back: 'V pracovním poměru, na DPP nebo na DPČ.',
      explanation: 'Jde o základní pracovněprávní vztahy podle zákoníku práce.',
      skillIds: ['dependent-work-classification'],
    },
    {
      id: 'dependent-work-card-04',
      front: 'Co je švarcsystém?',
      back: 'Zastření faktického výkonu závislé práce jiným smluvním vztahem.',
      explanation:
        'Typicky jde o formální dodavatelský vztah, který ve skutečnosti funguje jako zaměstnání.',
      skillIds: ['illegal-work-risk'],
    },
  ],
  exercises: [
    {
      id: 'dependent-work-exercise-01',
      type: 'single_choice',
      prompt: 'Co je při posouzení závislé práce nejdůležitější?',
      options: [
        { id: 'a', text: 'Pouze název uzavřené smlouvy.' },
        { id: 'b', text: 'Skutečný způsob organizace a výkonu práce.' },
        { id: 'c', text: 'Pouze to, zda pracovník vystavil fakturu.' },
        { id: 'd', text: 'Pouze délka spolupráce.' },
      ],
      correctOptionId: 'b',
      skillIds: ['dependent-work-classification'],
      explanation:
        'Právní posouzení vychází z reálného obsahu vztahu a souboru jeho znaků.',
      commonMistake:
        'Považovat formální označení smlouvy za rozhodující bez kontroly reality.',
    },
    {
      id: 'dependent-work-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které okolnosti jsou typickými znaky závislé práce?',
      options: [
        { id: 'instructions', text: 'Práce podle pokynů zaměstnavatele.' },
        { id: 'personal', text: 'Osobní výkon práce.' },
        { id: 'employer-name', text: 'Práce jménem zaměstnavatele.' },
        {
          id: 'subordination',
          text: 'Vztah nadřízenosti a podřízenosti.',
        },
        {
          id: 'free-substitution',
          text: 'Neomezená možnost poslat místo sebe libovolnou osobu.',
        },
      ],
      correctOptionIds: [
        'instructions',
        'personal',
        'employer-name',
        'subordination',
      ],
      skillIds: ['dependent-work-signs'],
      explanation:
        'Uvedené čtyři okolnosti patří k hlavním znakům závislé práce.',
      commonMistake:
        'Zaměnit osobní výkon práce za neomezenou možnost zastoupení.',
    },
    {
      id: 'dependent-work-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď postup při podezření na zastřenou závislou práci.',
      steps: [
        {
          id: 'reality',
          text: 'Zjistit skutečný způsob výkonu a organizace práce.',
        },
        {
          id: 'compare',
          text: 'Porovnat zjištění se znaky závislé práce.',
        },
        {
          id: 'documents',
          text: 'Ověřit smluvní a evidenční dokumentaci.',
        },
        {
          id: 'escalate',
          text: 'Zaznamenat nesoulad a předat jej oprávněné osobě.',
        },
        {
          id: 'process',
          text: 'Mzdově zpracovat vztah podle doloženého rozhodnutí.',
        },
      ],
      correctOrder: ['reality', 'compare', 'documents', 'escalate', 'process'],
      skillIds: ['dependent-work-classification', 'illegal-work-risk'],
      explanation:
        'Nejprve se zjišťuje skutečnost, poté se právně posoudí a až následně mzdově zpracuje.',
      commonMistake:
        'Změnit evidenci dříve, než je vztah řádně posouzen a rozhodnut.',
    },
    {
      id: 'dependent-work-exercise-04',
      type: 'single_choice',
      prompt:
        'Osoba fakturuje, ale pracuje osobně v pevných směnách podle každodenních pokynů vedoucího. Jaký je správný závěr?',
      options: [
        {
          id: 'a',
          text: 'Faktura automaticky vylučuje závislou práci.',
        },
        {
          id: 'b',
          text: 'Okolnosti vyžadují posouzení, zda nejde o faktický výkon závislé práce.',
        },
        {
          id: 'c',
          text: 'Jde vždy o DPP bez ohledu na dokumentaci.',
        },
        {
          id: 'd',
          text: 'Mzdová účetní má sama zpětně vytvořit pracovní smlouvu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dependent-work-classification', 'illegal-work-risk'],
      explanation:
        'Pevné směny, osobní výkon a soustavné pokyny jsou významné okolnosti pro posouzení vztahu.',
      commonMistake:
        'Považovat fakturaci za automatický důkaz nezávislé podnikatelské činnosti.',
    },
    {
      id: 'dependent-work-exercise-05',
      type: 'short_text',
      prompt: 'Jak se běžně označuje zastření závislé práce obchodním vztahem?',
      acceptedAnswers: ['švarcsystém', 'svarcsystem'],
      ignoreDiacritics: true,
      skillIds: ['illegal-work-risk'],
      explanation:
        'V praxi se pro tento způsob zastření používá označení švarcsystém.',
      commonMistake:
        'Zaměnit švarcsystém za každou běžnou a skutečně samostatnou dodavatelskou činnost.',
    },
    {
      id: 'dependent-work-exercise-06',
      type: 'single_choice',
      prompt: 'Který úkol patří mzdové účetní při zjištění nesouladu vztahu?',
      options: [
        {
          id: 'a',
          text: 'Sama definitivně rozhodnout právní klasifikaci vztahu.',
        },
        {
          id: 'b',
          text: 'Nesoulad zaznamenat, vyžádat posouzení a zpracovat doložený výsledek.',
        },
        {
          id: 'c',
          text: 'Nesoulad ignorovat, pokud systém umožní výplatu.',
        },
        {
          id: 'd',
          text: 'Automaticky odstranit osobu z evidence.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['dependent-work-classification'],
      explanation:
        'Mzdová účetní identifikuje a eskaluje problém, ale nenahrazuje právní rozhodnutí.',
      commonMistake:
        'Překročit odbornou roli a bez podkladů provést nevratnou změnu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Základní pracovněprávní vztahy',
      url: 'https://ppropo.mpsv.cz/IVZakladnipracovnepravnivztahy',
      kind: 'official',
    },
    {
      title: 'SÚIP – Jedná se o tzv. švarcsystém?',
      url: 'https://suip.gov.cz/vsechny-clanky/-/asset_publisher/BwIpyjT9IXe0/content/jedna-se-o-tzv-svarcsyste-1',
      kind: 'official',
    },
    {
      title: 'Zákon č. 435/2004 Sb., o zaměstnanosti – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2004/435',
      kind: 'official',
    },
  ],
})
