import { defineLessonContent } from '../define'

export const paydayPaymentContent = defineLessonContent({
  moduleId: 'remuneration-basics',
  skillIds: [
    'payday-due-date-control',
    'payroll-payment-process',
    'payslip-reconciliation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2025-06-01',
    verifiedAt: '2026-07-12',
    note: 'Splatnost a výplata mzdy, platu a odměny z dohody včetně prioritního bezhotovostního způsobu účinného od června 2025, výplatního dokladu a kontrolního procesu.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Splatnost a výplatní termín nejsou totéž',
    },
    {
      type: 'paragraph',
      text: 'Splatnost vymezuje nejzazší období, ve kterém musí zaměstnavatel mzdu nebo plat uspokojit. Pravidelný výplatní termín je konkrétní den, kdy zaměstnavatel běžně výplatu provádí. Záměna obou pojmů vede k chybnému posouzení prodlení.',
    },
    {
      type: 'definition',
      term: 'Období splatnosti',
      definition:
        'Období po vykonání práce, které končí nejpozději posledním dnem následujícího kalendářního měsíce.',
    },
    {
      type: 'definition',
      term: 'Pravidelný výplatní termín',
      definition:
        'Konkrétní den v rámci období splatnosti, ve kterém zaměstnavatel pravidelně vyplácí mzdu nebo plat.',
    },
    {
      type: 'heading',
      text: 'Mzda a plat jsou splatné po vykonání práce',
    },
    {
      type: 'paragraph',
      text: 'Mzda nebo plat jsou splatné po vykonání práce, nejpozději v kalendářním měsíci následujícím po měsíci, ve kterém zaměstnanci právo vzniklo. Mzda za leden tedy musí být uspokojena nejpozději do konce února, pokud nebyla splatnost mzdy platně zkrácena.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'U mzdy lze dohodou období splatnosti zkrátit, nikoli prodloužit. U platu se zákonné období splatnosti smluvně nemění.',
    },
    {
      type: 'example',
      title: 'Lednová mzda a výplatní termín',
      situation:
        'Pravidelný výplatní termín je 15. den následujícího měsíce. Zaměstnanec vykonal práci v lednu.',
      solution:
        'Výplatní termín připadá na 15. února. Zákonné období splatnosti končí 28. nebo 29. února. Nevyplacení 15. února je porušením pravidelného termínu, ale patnáctidenní lhůta pro okamžité zrušení pracovního poměru se nepočítá od 15. února.',
    },
    {
      type: 'heading',
      text: 'Právo na okamžité zrušení při nevyplacení',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanec může za zákonných podmínek okamžitě zrušit pracovní poměr, pokud mu zaměstnavatel nevyplatí mzdu, plat, náhradu nebo jejich část ani do 15 dnů po uplynutí zákonného období splatnosti. Rozhodující není pouhých 15 dnů od běžného výplatního termínu.',
    },
    {
      type: 'heading',
      text: 'Pravidelný termín musí být určen',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel v rámci období splatnosti sjedná, stanoví nebo určí pravidelný termín výplaty. Termín má být znám zaměstnanci a musí být shodný s mzdovým výměrem, platovým výměrem, smlouvou nebo vnitřním předpisem.',
    },
    {
      type: 'heading',
      text: 'Prioritní bezhotovostní výplata od 1. června 2025',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel vyplácí mzdu nebo plat po provedení příslušných srážek na svůj náklad a nebezpečí bezhotovostním převodem na platební účet určený zaměstnancem tak, aby měl zaměstnanec peníze k dispozici nejpozději v pravidelném výplatním termínu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Nestačí odeslat bankovní soubor v den výplaty, pokud zaměstnanec obdrží peníze později. Rozhodující je disponibilita částky zaměstnanci nejpozději ve výplatním termínu.',
    },
    {
      type: 'heading',
      text: 'Účet pro výplatu v českých korunách',
    },
    {
      type: 'paragraph',
      text: 'Je-li mzda nebo plat vyplácen v českých korunách, může zaměstnanec určit platební účet vedený v českých korunách u banky, spořitelního nebo úvěrního družstva se sídlem v České republice nebo u tuzemské pobočky zahraniční banky.',
    },
    {
      type: 'heading',
      text: 'Hotovostní výplata',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel se může se zaměstnancem dohodnout na jiném způsobu. Pokud zaměstnanec s bezhotovostní výplatou písemně nesouhlasí, neposkytne potřebnou součinnost nebo nemá platební účet, vyplácí zaměstnavatel mzdu nebo plat v hotovosti na pracovišti a v pracovní době, není-li dohodnuto jiné místo nebo čas.',
    },
    {
      type: 'heading',
      text: 'Ověření bankovního účtu',
    },
    {
      type: 'paragraph',
      text: 'Změna platebního účtu je rizikový výplatní vstup. Mzdová účetní má použít řízený způsob ověření identity a požadavku, zejména pokud změna přišla z nového e-mailu nebo krátce před výplatou.',
    },
    {
      type: 'example',
      title: 'Změna účtu den před výplatou',
      situation:
        'Z neznámé soukromé adresy přijde žádost o změnu účtu zaměstnance jeden den před generováním bankovního souboru.',
      solution:
        'Účet se bez ověření nepoužije. Mzdová účetní ověří požadavek stanoveným bezpečným kanálem a zachová kontrolní stopu. Neověřená změna nesmí přesměrovat mzdu.',
    },
    {
      type: 'heading',
      text: 'Výplata v české nebo cizí měně',
    },
    {
      type: 'paragraph',
      text: 'Mzda nebo plat se standardně vyplácí v českých korunách a zaokrouhluje se na celé koruny směrem nahoru. Výplata v dohodnuté cizí měně je možná se souhlasem zaměstnance jen u zákonem vymezených kategorií zaměstnanců a podle stanoveného přepočtu.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Výplata cizí měny není obecnou volbou pro každého zaměstnance. Mzdová účetní musí ověřit zákonnou kategorii, souhlas, měnu a kurz.',
    },
    {
      type: 'heading',
      text: 'Mzda za zlomky hodin',
    },
    {
      type: 'paragraph',
      text: 'Je-li mzda nebo její složka stanovena za hodinu, náleží i za odpracované zlomky hodin. Zaměstnavatel nesmí pracovní dobu pro odměňování automaticky zaokrouhlovat na celé hodiny, půlhodiny nebo čtvrthodiny v neprospěch zaměstnance.',
    },
    {
      type: 'example',
      title: 'Hodinová mzda za 7 hodin a 20 minut',
      situation:
        'Hodinová sazba činí 240 Kč a zaměstnanec odpracuje 7 hodin a 20 minut.',
      solution:
        'Odpracovaná doba činí 7 + 20/60 hodiny. Mzda činí 7,3333… × 240 Kč = 1 760 Kč. Čas se nesmí bez právního důvodu zaokrouhlit na 7 hodin.',
    },
    {
      type: 'heading',
      text: 'Výplatní páska',
    },
    {
      type: 'paragraph',
      text: 'Při měsíčním zúčtování musí zaměstnavatel vydat zaměstnanci písemný doklad s údaji o jednotlivých složkách mzdy nebo platu a o provedených srážkách. Elektronická forma musí splnit požadavky na dostupnost, obsah a ochranu údajů.',
    },
    {
      type: 'list',
      items: [
        'jednotlivé složky mzdy nebo platu',
        'náhrady a další oddělené položky',
        'zákonné a jiné srážky',
        'výsledná částka k výplatě',
        'identifikace období a zaměstnance',
      ],
    },
    {
      type: 'paragraph',
      text: 'Na žádost zaměstnance musí zaměstnavatel předložit k nahlédnutí doklady, na jejichž základě byla mzda nebo plat vypočtena. Výplatní páska proto musí být navázána na dohledatelné podklady.',
    },
    {
      type: 'heading',
      text: 'Odměna z dohody',
    },
    {
      type: 'paragraph',
      text: 'Pro splatnost a výplatu odměny z DPP nebo DPČ se obdobně použijí pravidla mzdy a platu, pokud se zaměstnanec a zaměstnavatel nedohodnou jinak. Odlišná dohoda musí být konkrétní a nesmí porušit povinné ochranné limity.',
    },
    {
      type: 'paragraph',
      text: 'Je-li odměna sjednána jednorázově za dokončení a odevzdání úkolu, vyplatí se celá v nejbližším výplatním termínu po dokončení a odevzdání práce.',
    },
    {
      type: 'example',
      title: 'Jednorázová DPP',
      situation:
        'DPP sjednává jednorázovou odměnu po dokončení překladu. Zaměstnanec dílo dokončí a předá 22. dubna. Nejbližší pravidelný výplatní termín je 15. května.',
      solution:
        'Není-li sjednáno jinak, odměna se vyplatí v nejbližším výplatním termínu 15. května.',
    },
    {
      type: 'heading',
      text: 'Výplata před dovolenou',
    },
    {
      type: 'paragraph',
      text: 'Pokud pravidelný výplatní termín připadne do doby dovolené zaměstnance, zaměstnavatel vyplatí splatnou mzdu nebo plat před nástupem dovolené, pokud se strany nedohodnou jinak. Pokud výpočet není technicky možný, poskytne přiměřenou zálohu a zbytek v nejbližším termínu po dovolené.',
    },
    {
      type: 'heading',
      text: 'Výplata při skončení pracovního poměru',
    },
    {
      type: 'paragraph',
      text: 'Na žádost zaměstnance má být mzda nebo plat za příslušné měsíční období vyplacen v den skončení pracovního poměru. Neumožňuje-li to technika výpočtu, vyplatí se nejpozději v nejbližším pravidelném výplatním termínu po skončení.',
    },
    {
      type: 'heading',
      text: 'Vrácená nebo neprovedená platba',
    },
    {
      type: 'paragraph',
      text: 'Bankovní soubor není konec procesu. Mzdová účetní kontroluje přijetí bankou, zamítnuté účty, vrácené platby a celkovou shodu částek. Neprovedenou platbu musí řešit bez zbytečného odkladu a se zachováním správného příjemce.',
    },
    {
      type: 'example',
      title: 'Platba vrácená bankou',
      situation: 'Mzda byla odeslána na zrušený účet a banka ji vrátila.',
      solution:
        'Mzdová účetní ověří aktuální účet zaměstnance bezpečným postupem, znovu provede platbu a zaznamená důvod, datum a návaznost. Vrácená částka se nesmí považovat za řádně vyplacenou.',
    },
    {
      type: 'heading',
      text: 'Kontrola částky k výplatě',
    },
    {
      type: 'list',
      items: [
        'hrubá mzda, plat nebo odměna',
        'náhrady a nemzdová plnění',
        'daň a pojistné',
        'srážky a jejich omezení',
        'zálohy a již vyplacené částky',
        'zaokrouhlení',
        'čistá částka k výplatě',
        'platební účet nebo hotovostní režim',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrola bankovního souboru',
    },
    {
      type: 'list',
      items: [
        'součet bankovního souboru proti mzdové rekapitulaci',
        'počet plateb proti počtu zaměstnanců',
        'duplicitní nebo nulové platby',
        'nezvykle vysoké nebo záporné částky',
        'nově změněné účty',
        'správný den splatnosti příkazu',
        'schválení podle principu čtyř očí',
        'potvrzení banky a vrácené transakce',
      ],
    },
    {
      type: 'heading',
      text: 'Oddělení přípravy a schválení',
    },
    {
      type: 'paragraph',
      text: 'Je vhodné, aby osoba, která připravuje mzdy nebo bankovní soubor, nebyla jedinou osobou, která schvaluje jeho odeslání. Kontrola součtu, účtů a mimořádných částek snižuje riziko chyby i podvodu.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit výplatní termín za konec zákonné splatnosti',
        'počítat patnáctidenní lhůtu od běžného výplatního dne',
        'odeslat mzdu až v den výplaty bez jistoty připsání',
        'použít neověřenou změnu bankovního účtu',
        'nevydat výplatní pásku',
        'zaokrouhlit odpracovaný čas na celé čtvrthodiny v neprospěch zaměstnance',
        'považovat odeslaný bankovní soubor za dokončenou výplatu',
        'neřešit vrácenou platbu',
        'sloučit přípravu a schválení bez kontroly',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzda a plat jsou splatné nejpozději do konce následujícího kalendářního měsíce.',
        'Pravidelný výplatní termín je konkrétní den uvnitř období splatnosti.',
        'Od června 2025 je prioritní bezhotovostní výplata tak, aby měl zaměstnanec peníze k dispozici nejpozději ve výplatní den.',
        'Zaměstnanec musí obdržet výplatní doklad s jednotlivými složkami a srážkami.',
        'Výplata končí až kontrolou připsání, vrácených plateb a shody s mzdovou rekapitulací.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'payday-payment-card-01',
      front: 'Kdy je mzda za leden nejpozději splatná?',
      back: 'Do konce února.',
      explanation:
        'Pravidelný výplatní termín může být dříve, například 15. února.',
      skillIds: ['payday-due-date-control'],
    },
    {
      id: 'payday-payment-card-02',
      front:
        'Od kterého okamžiku se počítá patnáctidenní lhůta pro okamžité zrušení při nevyplacení mzdy?',
      back: 'Od uplynutí zákonného období splatnosti, nikoli od běžného výplatního termínu.',
      explanation: 'Jde o zásadní rozdíl mezi splatností a výplatním dnem.',
      skillIds: ['payday-due-date-control'],
    },
    {
      id: 'payday-payment-card-03',
      front: 'Jaký je od června 2025 prioritní způsob výplaty mzdy?',
      back: 'Bezhotovostní převod na účet určený zaměstnancem.',
      explanation: 'Peníze musí být k dispozici nejpozději ve výplatní termín.',
      skillIds: ['payroll-payment-process'],
    },
    {
      id: 'payday-payment-card-04',
      front: 'Co musí obsahovat výplatní páska?',
      back: 'Údaje o jednotlivých složkách mzdy nebo platu a provedených srážkách.',
      explanation: 'Musí být navázána na dohledatelné výpočtové podklady.',
      skillIds: ['payslip-reconciliation'],
    },
  ],
  exercises: [
    {
      id: 'payday-payment-exercise-01',
      type: 'single_choice',
      prompt:
        'Výplatní termín lednové mzdy je 15. února. Kdy končí zákonné období splatnosti?',
      options: [
        {
          id: 'a',
          text: '15. února.',
        },
        {
          id: 'b',
          text: 'Posledním dnem února.',
        },
        {
          id: 'c',
          text: '15. ledna.',
        },
        {
          id: 'd',
          text: 'Posledním dnem ledna.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payday-due-date-control'],
      explanation:
        'Mzda je nejpozději splatná do konce následujícího kalendářního měsíce.',
      commonMistake:
        'Zaměnit pravidelný výplatní termín za zákonnou splatnost.',
    },
    {
      id: 'payday-payment-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které kroky patří do bezpečné kontroly bankovního souboru?',
      options: [
        {
          id: 'sum',
          text: 'Porovnat součet s mzdovou rekapitulací.',
        },
        {
          id: 'accounts',
          text: 'Prověřit nové nebo změněné účty.',
        },
        {
          id: 'duplicates',
          text: 'Vyhledat duplicitní platby.',
        },
        {
          id: 'approval',
          text: 'Provést nezávislé schválení.',
        },
        {
          id: 'send-only',
          text: 'Po odeslání už nekontrolovat výsledek.',
        },
      ],
      correctOptionIds: ['sum', 'accounts', 'duplicates', 'approval'],
      skillIds: ['payroll-payment-process'],
      explanation:
        'Proces pokračuje kontrolou banky a případných vrácených transakcí.',
      commonMistake: 'Považovat vytvoření souboru za dokončenou výplatu.',
    },
    {
      id: 'payday-payment-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď výplatní proces.',
      steps: [
        {
          id: 'close',
          text: 'Uzavřít a zkontrolovat mzdové vstupy.',
        },
        {
          id: 'calculate',
          text: 'Vypočítat hrubé položky, srážky a částku k výplatě.',
        },
        {
          id: 'payslip',
          text: 'Vytvořit výplatní doklad a rekapitulaci.',
        },
        {
          id: 'bank',
          text: 'Vytvořit a nezávisle zkontrolovat bankovní soubor.',
        },
        {
          id: 'send',
          text: 'Odeslat platby s včasným datem.',
        },
        {
          id: 'reconcile',
          text: 'Zkontrolovat přijetí a vrácené platby.',
        },
      ],
      correctOrder: [
        'close',
        'calculate',
        'payslip',
        'bank',
        'send',
        'reconcile',
      ],
      skillIds: ['payroll-payment-process', 'payslip-reconciliation'],
      explanation: 'Výplata je dokončena až po následné bankovní kontrole.',
      commonMistake: 'Generovat platby před uzavřením vstupů.',
    },
    {
      id: 'payday-payment-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel odešle mzdu v pravidelný výplatní den, ale zaměstnanec ji dostane až následující den. Je to v souladu s prioritní bezhotovostní výplatou?',
      options: [
        {
          id: 'a',
          text: 'Ano vždy.',
        },
        {
          id: 'b',
          text: 'Ne, zaměstnanec ji má mít k dispozici nejpozději ve výplatní termín.',
        },
        {
          id: 'c',
          text: 'Ano, pokud je částka vysoká.',
        },
        {
          id: 'd',
          text: 'Ano, pokud zaměstnavatel soubor vytvořil ráno.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-payment-process'],
      explanation:
        'Rozhoduje disponibilita peněz zaměstnanci, ne pouze čas odeslání.',
      commonMistake: 'Považovat bankovní příkaz za samotnou výplatu.',
    },
    {
      id: 'payday-payment-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se běžně nazývá písemný doklad s jednotlivými složkami mzdy a srážkami?',
      acceptedAnswers: [
        'výplatní páska',
        'vyplatni paska',
        'výplatní doklad',
        'vyplatni doklad',
      ],
      ignoreDiacritics: true,
      skillIds: ['payslip-reconciliation'],
      explanation: 'Jde o výplatní pásku neboli výplatní doklad.',
      commonMistake: 'Uvést bankovní výpis.',
    },
    {
      id: 'payday-payment-exercise-06',
      type: 'single_choice',
      prompt:
        'Hodinová sazba je 240 Kč a zaměstnanec odpracuje 7 hodin 20 minut. Jaká mzda odpovídá tomuto času?',
      options: [
        {
          id: 'a',
          text: '1 680 Kč.',
        },
        {
          id: 'b',
          text: '1 760 Kč.',
        },
        {
          id: 'c',
          text: '1 800 Kč.',
        },
        {
          id: 'd',
          text: '1 920 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['payslip-reconciliation'],
      explanation:
        '7 hodin 20 minut je 7,3333… hodiny; násobek 240 Kč činí 1 760 Kč.',
      commonMistake: 'Zaokrouhlit čas dolů na sedm hodin.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Splatnost mzdy nebo platu a jejich výplata',
      url: 'https://ppropo.mpsv.cz/XXI3Splatnostmzdyneboplatuavypla',
      kind: 'official',
    },
    {
      title: 'MPSV – Odměna z dohody, její splatnost a výplata',
      url: 'https://ppropo.mpsv.cz/XXI4Odmenazdohodyjejispla',
      kind: 'official',
    },
    {
      title: 'MPSV – Sjednání, stanovení nebo určení mzdy',
      url: 'https://ppropo.mpsv.cz/XIXOdmenovanizamestnancumzdou',
      kind: 'official',
    },
    {
      title: 'MPSV – Platový výměr',
      url: 'https://ppropo.mpsv.cz/XX10Platovyvymer',
      kind: 'official',
    },
    {
      title: 'MPSV – Zvláštní zákazy a omezení na ochranu odměny zaměstnance',
      url: 'https://ppropo.mpsv.cz/XXI5Nekterezvlastnizakazya',
      kind: 'official',
    },
  ],
})
