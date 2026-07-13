import { defineLessonContent } from '../define'

export const obstacleCompensationContent = defineLessonContent({
  moduleId: 'work-obstacles',
  skillIds: [
    'obstacle-compensation-inputs',
    'obstacle-compensation-calculation',
    'obstacle-compensation-reconciliation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-13',
    note: 'Výpočet náhrad při osobních, veřejně prospěšných a zaměstnavatelských překážkách s explicitním průměrným hodinovým výdělkem a pravidly pro DPP a DPČ.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Výpočet začíná právní klasifikací',
    },
    {
      type: 'paragraph',
      text: 'Náhradu mzdy nebo platu nelze určit jen z počtu hodin. Nejdříve se potvrdí důvod překážky, placený režim, rozvržená doba, správný průměrný výdělek a případná zákonná procentní sazba.',
    },
    {
      type: 'heading',
      text: 'Povinné vstupy',
    },
    {
      type: 'list',
      items: [
        'pracovněprávní vztah',
        'platný rozvrh směny',
        'skutečný zásah překážky do směny',
        'právní důvod',
        'placená a neplacená část',
        'průměrný hodinový výdělek',
        'procentní sazba nebo hodinový strop',
        'interní nebo kolektivní podklad',
        'refundace a vykazovací režim',
      ],
    },
    {
      type: 'definition',
      term: 'Náhrada mzdy nebo platu při překážce',
      definition:
        'Peněžité plnění za zákonem nebo dohodou vymezenou dobu, kdy zaměstnanec nepracuje, vypočtené z průměrného výdělku nebo jiného zvláštního základu.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Náhrada není mzdou za vykonanou práci. Stejná hodina nesmí být současně zaplacena jako práce a jako překážka.',
    },
    {
      type: 'heading',
      text: 'Průměrný hodinový výdělek',
    },
    {
      type: 'paragraph',
      text: 'Pro většinu překážek se používá průměrný hodinový výdělek platný v období, kdy náhrada náleží. V této lekci je vždy zadán přímo; jeho vlastní konstrukce bude vyložena v samostatném modulu.',
    },
    {
      type: 'heading',
      text: 'Základní výpočet',
    },
    {
      type: 'paragraph',
      text: 'Náhrada se obvykle vypočte jako počet placených hodin × průměrný hodinový výdělek × příslušná sazba. U 100% náhrady je sazba rovna jedné.',
    },
    {
      type: 'heading',
      text: 'Placená osobní překážka',
    },
    {
      type: 'example',
      title: 'Vyšetření v nejbližším zařízení',
      situation:
        'Placená část návštěvy lékaře činí 3,25 hodiny a průměrný hodinový výdělek 294 Kč.',
      solution: 'Náhrada činí 3,25 × 294 = 955,50 Kč.',
    },
    {
      type: 'heading',
      text: 'Placená a neplacená část jedné události',
    },
    {
      type: 'example',
      title: 'Vzdálenější lékař',
      situation:
        'Celková omluvená nepřítomnost činí 5 hodin, placený rozsah pro nejbližší zařízení 2,5 hodiny a průměrný hodinový výdělek 310 Kč.',
      solution:
        'Náhrada činí 2,5 × 310 = 775 Kč. Zbývajících 2,5 hodiny jsou omluvené bez náhrady.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Neplacená část se ve mzdě nevynuluje smazáním. Musí zůstat jako omluvená neplacená doba s vlastním kódem.',
    },
    {
      type: 'heading',
      text: 'Prostoj',
    },
    {
      type: 'example',
      title: 'Prostoj se zákonným minimem',
      situation:
        'Prostoj trvá 5,5 hodiny, průměrný hodinový výdělek je 305 Kč a zaměstnavatel poskytuje 80 %.',
      solution: 'Náhrada činí 5,5 × 305 × 80 % = 1 342 Kč.',
    },
    {
      type: 'heading',
      text: 'Přerušení práce kvůli počasí',
    },
    {
      type: 'example',
      title: 'Povětrnostní překážka',
      situation:
        'Překážka trvá 7 hodin, průměrný hodinový výdělek činí 290 Kč a použije se zákonné minimum 60 %.',
      solution: 'Náhrada činí 7 × 290 × 60 % = 1 218 Kč.',
    },
    {
      type: 'heading',
      text: 'Jiná překážka zaměstnavatele',
    },
    {
      type: 'example',
      title: 'Plná náhrada podle § 208',
      situation:
        'Jiná překážka zaměstnavatele trvá 2,75 hodiny a průměrný hodinový výdělek činí 330 Kč.',
      solution: 'Náhrada činí 2,75 × 330 = 907,50 Kč.',
    },
    {
      type: 'heading',
      text: 'Částečná nezaměstnanost',
    },
    {
      type: 'example',
      title: 'Sazba podle vnitřního předpisu',
      situation:
        'Platný vnitřní předpis stanoví náhradu 65 %. Překážka trvá 24 hodin a průměrný hodinový výdělek činí 315 Kč.',
      solution: 'Náhrada činí 24 × 315 × 65 % = 4 914 Kč.',
    },
    {
      type: 'heading',
      text: 'Zákonné minimum není vždy konečná sazba',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel může v mezích zákona, kolektivní smlouvy, pracovní smlouvy nebo vnitřního předpisu poskytovat vyšší náhradu než zákonné minimum. Použitá sazba musí být doložená a aplikovaná rovně.',
    },
    {
      type: 'example',
      title: 'Vyšší náhrada při prostoji',
      situation:
        'Vnitřní předpis stanoví při prostoji 90 %. Překážka trvá 4 hodiny a průměrný hodinový výdělek činí 280 Kč.',
      solution:
        'Použije se vyšší interní sazba. Náhrada činí 4 × 280 × 90 % = 1 008 Kč.',
    },
    {
      type: 'heading',
      text: 'Část směny',
    },
    {
      type: 'paragraph',
      text: 'Překážka se počítá za skutečný počet placených hodin nebo jejich zlomků. Zaokrouhlení musí odpovídat mzdovým pravidlům a nesmí systematicky krátit zaměstnance.',
    },
    {
      type: 'example',
      title: 'Dvě hodiny a dvacet minut',
      situation:
        'Placená osobní překážka trvá 2 hodiny 20 minut a průměrný hodinový výdělek činí 300 Kč.',
      solution:
        'Doba odpovídá 2,3333 hodiny. Před konečným zaokrouhlením činí náhrada přibližně 700 Kč. Výpočet proveď přesně podle peněžního zaokrouhlení projektu.',
    },
    {
      type: 'heading',
      text: 'Směna přes půlnoc',
    },
    {
      type: 'paragraph',
      text: 'U překážky přes půlnoc se doba rozdělí podle skutečných směn a mzdových období. Není-li důvod členit právní režim, součet hodin zůstává zachován, ale evidence musí odpovídat jednotlivým dnům.',
    },
    {
      type: 'heading',
      text: 'Náhrada a další složky mzdy',
    },
    {
      type: 'paragraph',
      text: 'Náhrada z průměrného výdělku se nesčítá automaticky s pevnou nebo výkonovou mzdou za stejnou neodpracovanou hodinu. U měsíční mzdy musí systém zabránit dvojímu plnění nebo neoprávněnému krácení.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Při měsíční mzdě nekontroluj jen přidanou náhradu. Ověř také, zda základní mzda nebyla za stejnou dobu ponechána nebo krácena v rozporu s nastaveným režimem.',
    },
    {
      type: 'heading',
      text: 'DPP a DPČ',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnanci pracujícímu na DPP nebo DPČ standardně nepřísluší náhrada odměny po dobu jiných důležitých osobních překážek podle § 199 ani překážek z důvodu obecného zájmu podle § 200 až 205, není-li dohodnuto nebo vnitřním předpisem stanoveno jinak.',
    },
    {
      type: 'paragraph',
      text: 'Omluvení a rozvrhový dopad se proto nesmí automaticky zaměnit s placenou náhradou odměny. Zvláštní režimy, například dočasná pracovní neschopnost, se posuzují podle vlastních ustanovení.',
    },
    {
      type: 'example',
      title: 'Dohodář bez sjednané náhrady',
      situation:
        'Zaměstnanec na DPČ má rozvrženou směnu a doloží osobní překážku podle § 199. Dohoda ani vnitřní předpis náhradu odměny nestanoví.',
      solution:
        'Nepřítomnost se omluví v zákonném rozsahu, ale náhrada odměny z dohody za tuto překážku standardně nepřísluší.',
    },
    {
      type: 'heading',
      text: 'Akce pro děti a mládež',
    },
    {
      type: 'paragraph',
      text: 'Při placeném volnu pro akci dětí a mládeže se použije nižší z průměrného hodinového výdělku a ročního hodinového stropu. Současně se sleduje roční počet placených hodin.',
    },
    {
      type: 'example',
      title: 'Průměr pod hodinovým stropem',
      situation:
        'Zaměstnanec čerpá 18 placených hodin, jeho průměrný hodinový výdělek činí 250 Kč a strop roku 2026 je 276,90 Kč.',
      solution: 'Použije se 250 Kč. Náhrada činí 18 × 250 = 4 500 Kč.',
    },
    {
      type: 'heading',
      text: 'Refundace není součástí čisté náhrady',
    },
    {
      type: 'paragraph',
      text: 'Refundace od třetí osoby nebo státu je účetní pohledávkou zaměstnavatele. Zaměstnanci se náhrada poskytne podle jeho právního nároku a refundace se vede samostatně.',
    },
    {
      type: 'heading',
      text: 'Daň a pojistné',
    },
    {
      type: 'paragraph',
      text: 'Daňový a pojistný režim náhrady se určí podle konkrétního právního titulu a aktuálních předpisů. Tento modul vytváří správnou hrubou mzdovou položku; konečný výpočet daně a pojistného patří do navazujících modulů.',
    },
    {
      type: 'heading',
      text: 'Měsíční rekapitulace',
    },
    {
      type: 'list',
      items: [
        'placené hodiny podle kategorie',
        'neplacené omluvené hodiny',
        'průměrný hodinový výdělek',
        'použitá sazba',
        'hrubá náhrada',
        'případná interní část nad zákonné minimum',
        'refundovatelná část',
        'opravy minulých období',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit pracovní vztah a rozvrh',
        'ověřit právní titul a doklad',
        'rozdělit placené a neplacené hodiny',
        'načíst platný průměrný výdělek',
        'načíst zákonnou nebo interní sazbu',
        'vypočítat každou kategorii samostatně',
        'zkontrolovat dvojí plnění',
        'zaúčtovat refundaci odděleně',
        'provést měsíční rekapitulaci',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'počítat náhradu před právní klasifikací',
        'použít celý omluvený čas jako placený',
        'zaměnit 80 %, 60 % a 100 %',
        'použít zákonné minimum místo vyšší platné interní sazby',
        'zaokrouhlit zlomky hodin v neprospěch zaměstnance',
        'dvojitě zaplatit měsíční mzdu a náhradu',
        'poskytnout dohodáři náhradu bez dohody nebo vnitřního předpisu',
        'zahrnout refundaci do zaměstnancovy náhrady podruhé',
      ],
    },
    {
      type: 'summary',
      items: [
        'Výpočet vychází z placených hodin, průměrného hodinového výdělku a správné sazby.',
        'Prostoj má minimum 80 %, počasí nebo živelní událost 60 % a jiná překážka zaměstnavatele 100 %.',
        'Osobní překážka může obsahovat placenou i neplacenou část.',
        'U DPP a DPČ není náhrada za § 199 a § 200 až 205 automatická.',
        'Modelové příklady a testová cvičení musí používat odlišné hodnoty a výsledky.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'obstacle-compensation-card-01',
      front: 'Jaký je obecný vzorec náhrady při překážce?',
      back: 'Placené hodiny × průměrný hodinový výdělek × sazba.',
      explanation: 'Nejdříve musí být potvrzen právní důvod a placený rozsah.',
      skillIds: ['obstacle-compensation-inputs'],
    },
    {
      id: 'obstacle-compensation-card-02',
      front:
        'Jaká sazba se používá u jiné překážky zaměstnavatele podle § 208?',
      back: '100 % průměrného výdělku.',
      explanation:
        'Není-li použit zvláštní režim, například konto pracovní doby.',
      skillIds: ['obstacle-compensation-calculation'],
    },
    {
      id: 'obstacle-compensation-card-03',
      front:
        'Má zaměstnanec na DPP nebo DPČ automaticky náhradu za osobní překážku podle § 199?',
      back: 'Ne.',
      explanation:
        'Náhrada musí být dohodnuta nebo stanovena vnitřním předpisem.',
      skillIds: ['obstacle-compensation-inputs'],
    },
    {
      id: 'obstacle-compensation-card-04',
      front:
        'Započítává se refundace zaměstnavateli znovu do náhrady zaměstnance?',
      back: 'Ne.',
      explanation: 'Jde o samostatnou pohledávku zaměstnavatele.',
      skillIds: ['obstacle-compensation-reconciliation'],
    },
  ],
  exercises: [
    {
      id: 'obstacle-compensation-exercise-01',
      type: 'single_choice',
      prompt:
        'Omluvená návštěva vzdálenějšího lékaře trvá 4 hodiny, ale placený rozsah odpovídající nejbližšímu zařízení činí 2,5 hodiny. Z jakého počtu hodin se vypočítá náhrada?',
      options: [
        {
          id: 'a',
          text: '1,5 hodiny.',
        },
        {
          id: 'b',
          text: '2,5 hodiny.',
        },
        {
          id: 'c',
          text: '4 hodiny.',
        },
        {
          id: 'd',
          text: 'Celá směna.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-compensation-inputs'],
      explanation: 'Náhrada se počítá jen z placeného zákonného rozsahu.',
      commonMistake: 'Použít celý omluvený čas.',
    },
    {
      id: 'obstacle-compensation-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které vstupy musí být potvrzeny před výpočtem náhrady?',
      options: [
        {
          id: 'hours',
          text: 'Placené hodiny.',
        },
        {
          id: 'average',
          text: 'Průměrný hodinový výdělek.',
        },
        {
          id: 'rate',
          text: 'Právní nebo interní sazba.',
        },
        {
          id: 'relationship',
          text: 'Druh pracovněprávního vztahu.',
        },
        {
          id: 'guess',
          text: 'Odhad mzdové účetní bez dokladu.',
        },
      ],
      correctOptionIds: ['hours', 'average', 'rate', 'relationship'],
      skillIds: ['obstacle-compensation-inputs'],
      explanation:
        'Každý vstup musí být doložen nebo odvozen z platného systému.',
      commonMistake: 'Použít jen počet hodin a univerzální sazbu.',
    },
    {
      id: 'obstacle-compensation-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď výpočet měsíční náhrady.',
      steps: [
        {
          id: 'classify',
          text: 'Klasifikovat právní důvod.',
        },
        {
          id: 'hours',
          text: 'Rozdělit placené a neplacené hodiny.',
        },
        {
          id: 'average',
          text: 'Načíst platný průměrný výdělek.',
        },
        {
          id: 'rate',
          text: 'Určit sazbu nebo strop.',
        },
        {
          id: 'calculate',
          text: 'Vypočítat jednotlivé náhrady.',
        },
        {
          id: 'reconcile',
          text: 'Zkontrolovat dvojí plnění a refundaci.',
        },
      ],
      correctOrder: [
        'classify',
        'hours',
        'average',
        'rate',
        'calculate',
        'reconcile',
      ],
      skillIds: ['obstacle-compensation-reconciliation'],
      explanation:
        'Výpočet bez klasifikace a rozdělení hodin není kontrolovatelný.',
      commonMistake: 'Začít násobením celé nepřítomnosti.',
    },
    {
      id: 'obstacle-compensation-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec na DPČ čerpá jinou důležitou osobní překážku. Dohoda ani vnitřní předpis náhradu odměny nestanoví. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Náhrada odměny automaticky činí 100 %.',
        },
        {
          id: 'b',
          text: 'Nepřítomnost může být omluvená, ale náhrada odměny automaticky nepřísluší.',
        },
        {
          id: 'c',
          text: 'Jde vždy o neomluvenou absenci.',
        },
        {
          id: 'd',
          text: 'Automaticky se použije 60 %.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-compensation-inputs'],
      explanation:
        '§ 77 odst. 3 vyžaduje pro tuto náhradu dohodu nebo vnitřní předpis.',
      commonMistake: 'Přenést režim pracovního poměru na dohodu bez kontroly.',
    },
    {
      id: 'obstacle-compensation-exercise-05',
      type: 'short_text',
      prompt:
        'V jednom měsíci má zaměstnanec při stejném průměrném hodinovém výdělku 304 Kč tyto placené překážky: 2,25 hodiny osobní překážky se 100% náhradou, 6,5 hodiny prostoje s náhradou 80 % a 4 hodiny jiné překážky zaměstnavatele se 100% náhradou. Kolik činí celková náhrada?',
      acceptedAnswers: [
        '3 480,80 Kč',
        '3480,80 Kč',
        '3 480,8 Kč',
        '3480,8 Kč',
        '3 480.80',
        '3480.80',
      ],
      ignoreDiacritics: true,
      skillIds: ['obstacle-compensation-calculation'],
      explanation:
        'Osobní překážka: 2,25 × 304 = 684 Kč. Prostoj: 6,5 × 304 × 80 % = 1 580,80 Kč. Jiná překážka: 4 × 304 = 1 216 Kč. Celkem 684 + 1 580,80 + 1 216 = 3 480,80 Kč.',
      commonMistake:
        'Použít 100 % také u prostoje nebo sečíst hodiny před použitím různých sazeb.',
    },
    {
      id: 'obstacle-compensation-exercise-06',
      type: 'single_choice',
      prompt:
        'Vnitřní předpis platně stanoví při prostoji náhradu 92 %. Má mzdová účetní použít pouze zákonné minimum 80 %?',
      options: [
        {
          id: 'a',
          text: 'Ano, vyšší sazba je zakázána.',
        },
        {
          id: 'b',
          text: 'Ne, použije se platná vyšší interní sazba 92 %.',
        },
        {
          id: 'c',
          text: 'Použije se 60 %.',
        },
        {
          id: 'd',
          text: 'Použije se 100 % bez ohledu na předpis.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['obstacle-compensation-reconciliation'],
      explanation:
        'Zákon stanoví minimum; platný interní nebo smluvní nárok může být vyšší.',
      commonMistake: 'Považovat zákonné minimum za povinnou jedinou sazbu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Průměrný výdělek',
      url: 'https://ppropo.mpsv.cz/XXI8Prumernyvydelek',
      kind: 'official',
    },
    {
      title: 'MPSV – Jiné důležité osobní překážky v práci',
      url: 'https://ppropo.mpsv.cz/IX113Jineduleziteosobniprekazkyv',
      kind: 'official',
    },
    {
      title: 'MPSV – Prostoj',
      url: 'https://ppropo.mpsv.cz/IX21Prostoj',
      kind: 'official',
    },
    {
      title: 'MPSV – Jiné překážky na straně zaměstnavatele',
      url: 'https://ppropo.mpsv.cz/IX23Jineprekazkyvpracinastraneza',
      kind: 'official',
    },
    {
      title: 'MPSV – Překážky z důvodu obecného zájmu',
      url: 'https://ppropo.mpsv.cz/IX12Prekazkyvpracizduvoduobecneh',
      kind: 'official',
    },
  ],
})
