import { defineLessonContent } from '../define'

export const nonCashBenefitsContent = defineLessonContent({
  moduleId: 'employee-benefits-other-payments',
  skillIds: [
    'non-cash-benefit-identification',
    'non-cash-benefit-valuation',
    'non-cash-benefit-timing',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-12',
    note: 'Nepeněžní forma benefitů, ocenění nepeněžního příjmu a okamžik jeho poskytnutí ověřené podle zákona o daních z příjmů, zákona o oceňování majetku a metodiky Finanční správy pro rok 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Nepeněžní benefit není hotovost pro zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Nepeněžní benefit vzniká tehdy, když zaměstnavatel zaměstnanci nebo jeho rodinnému příslušníkovi poskytne konkrétní zboží, službu, právo nebo možnost využití, aniž by zaměstnanci vyplatil volně použitelné peníze.',
    },
    {
      type: 'definition',
      term: 'Nepeněžní plnění',
      definition:
        'Majetkový prospěch poskytnutý jinak než výplatou peněžních prostředků zaměstnanci, například přímou úhradou služby poskytovateli, předáním poukazu s omezeným použitím nebo bezplatným využitím zařízení.',
    },
    {
      type: 'heading',
      text: 'Forma se posuzuje podle skutečného uspořádání',
    },
    {
      type: 'paragraph',
      text: 'Samotný bezhotovostní převod ještě neznamená nepeněžní benefit. Pokud zaměstnavatel pošle zaměstnanci peníze na účet, jde o peněžní plnění. Naopak přímá úhrada konkrétní služby poskytovateli může být nepeněžním plněním.',
    },
    {
      type: 'example',
      title: 'Dvě varianty příspěvku na rekreaci',
      situation:
        'Varianta A: zaměstnavatel uhradí rekreačnímu zařízení konkrétní pobyt zaměstnance. Varianta B: zaměstnavatel zaměstnanci proplatí fakturu za již zaplacený pobyt.',
      solution:
        'Varianta A může splnit nepeněžní formu. Varianta B je peněžním plněním zaměstnanci a vyžaduje odlišné posouzení.',
    },
    {
      type: 'heading',
      text: 'Poukaz a benefitní karta',
    },
    {
      type: 'paragraph',
      text: 'Poukaz nebo benefitní karta může představovat nepeněžní formu, pokud je její použití skutečně omezeno na zákonem vymezené zboží a služby a zaměstnanec ji nemůže převést na hotovost nebo použít libovolně.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Označení benefitní karta samo o sobě neprokazuje osvobození. Rozhodující jsou smluvní podmínky provozovatele, okamžik vzniku nároku, omezení použití a skutečně čerpaná kategorie.',
    },
    {
      type: 'heading',
      text: 'Benefitní účet a okamžik příjmu',
    },
    {
      type: 'paragraph',
      text: 'U benefitních systémů může být rozhodující okamžik připsání bodů, jejich neodvolatelného zpřístupnění nebo až skutečného čerpání. Záleží na právním nastavení mezi zaměstnavatelem, zaměstnancem a provozovatelem systému.',
    },
    {
      type: 'paragraph',
      text: 'Mzdová účetní nesmí automaticky považovat datum nákupu benefitních bodů zaměstnavatelem za datum příjmu zaměstnance. Musí vycházet ze smluvních podmínek a z potvrzeného okamžiku, kdy zaměstnanec získal konkrétní majetkový prospěch.',
    },
    {
      type: 'heading',
      text: 'Ocenění nepeněžního příjmu',
    },
    {
      type: 'paragraph',
      text: 'Nepeněžní příjem se oceňuje podle zákona o daních z příjmů a zákona o oceňování majetku, není-li pro konkrétní plnění stanoveno zvláštní pravidlo. V praxi může jít o cenu obvyklou, standardní pořizovací cenu nebo jinou zákonem určenou hodnotu.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Cena zaplacená zaměstnavatelem je důležitým podkladem, ale nemusí být vždy konečnou hodnotou příjmu zaměstnance. Pokud zaměstnavatel plnění získal za nestandardních podmínek, může být rozhodná obvyklá cena.',
    },
    {
      type: 'heading',
      text: 'Spoluúčast zaměstnance',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnanec část hodnoty plnění uhradí, jeho nepeněžní příjem obvykle odpovídá rozdílu mezi správně určenou hodnotou plnění a částkou zaplacenou zaměstnancem.',
    },
    {
      type: 'example',
      title: 'Vstupenka se spoluúčastí',
      situation:
        'Hodnota vstupenky pro účely ocenění činí 900 Kč. Zaměstnanec zaměstnavateli uhradí 250 Kč.',
      solution:
        'Nepeněžní příjem zaměstnance činí 900 − 250 = 650 Kč. Tato hodnota se následně posoudí podle příslušného osvobození a ročního limitu.',
    },
    {
      type: 'heading',
      text: 'Bezplatné plnění',
    },
    {
      type: 'paragraph',
      text: 'Je-li zboží nebo služba poskytnuta bezplatně, nepeněžní příjem se rovná celé správně určené hodnotě. Nulová platba zaměstnance neznamená nulový příjem.',
    },
    {
      type: 'example',
      title: 'Bezplatná sportovní karta',
      situation:
        'Zaměstnavatel poskytne zaměstnanci sportovní kartu. Hodnota plnění pro účely ocenění byla určena na 12 000 Kč za rok a zaměstnanec nic nehradí.',
      solution:
        'Hodnota nepeněžního příjmu činí 12 000 Kč. Při splnění podmínek se započte do samostatného volnočasového limitu.',
    },
    {
      type: 'heading',
      text: 'Plnění získané se slevou',
    },
    {
      type: 'paragraph',
      text: 'Pokud zaměstnavatel pořídí benefit se standardní množstevní slevou dostupnou za běžných obchodních podmínek, může být relevantní skutečně zaplacená cena. Při barteru, mimořádné protihodnotě nebo nestandardní slevě je nutné posoudit cenu obvyklou.',
    },
    {
      type: 'example',
      title: 'Divadelní vstupenka',
      situation:
        'Zaměstnavatel pořídí vstupenku za standardní firemní cenu 400 Kč a poskytne ji zaměstnanci za 150 Kč.',
      solution:
        'Při předpokladu, že 400 Kč je správná hodnota plnění, vzniká zaměstnanci nepeněžní příjem 250 Kč.',
    },
    {
      type: 'heading',
      text: 'Majetek zaměstnavatele k soukromému užívání',
    },
    {
      type: 'paragraph',
      text: 'Soukromé užívání majetku zaměstnavatele může vytvářet nepeněžní příjem. U některých plnění, například služebního vozidla používaného i soukromě, stanoví zákon zvláštní způsob ocenění.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Zvláštní oceňovací pravidla pro vozidla, ubytování nebo jiné specifické příjmy nepřepisuj obecným pravidlem cena zaměstnavatele. Vždy použij aktuální znění zákona platné pro daný měsíc.',
    },
    {
      type: 'heading',
      text: 'Pracovní prostředek není automaticky benefit',
    },
    {
      type: 'paragraph',
      text: 'Věc poskytnutá výhradně pro výkon práce, například notebook, ochranný prostředek nebo pracovní telefon bez soukromého užívání, nevytváří zaměstnanci osobní majetkový prospěch jen tím, že ji používá.',
    },
    {
      type: 'example',
      title: 'Telefon pro práci a soukromé použití',
      situation:
        'Zaměstnavatel umožní zaměstnanci používat služební telefon i soukromě a hradí soukromou spotřebu bez vyúčtování.',
      solution:
        'Soukromá část může představovat nepeněžní příjem. Je nutné určit rozsah soukromého prospěchu a použít odpovídající ocenění.',
    },
    {
      type: 'heading',
      text: 'Naturální mzda versus benefit',
    },
    {
      type: 'paragraph',
      text: 'Nepeněžní plnění poskytnuté za práci je naturální mzdou nebo jinou nepeněžní odměnou. Nepeněžní plnění poskytnuté vedle odměny bez přímé vazby na výkon může být benefitem. Rozhoduje ekonomický a právní důvod.',
    },
    {
      type: 'example',
      title: 'Stejná věc, jiný právní důvod',
      situation:
        'Zaměstnavatel jednou předá poukaz za splnění výkonového cíle a podruhé stejný poukaz poskytne všem zaměstnancům bez vazby na výkon jako volnočasový benefit.',
      solution:
        'První plnění je odměnou za práci. Druhé může být benefitem, pokud splní všechny další podmínky osvobození.',
    },
    {
      type: 'heading',
      text: 'Benefit pro rodinného příslušníka',
    },
    {
      type: 'paragraph',
      text: 'Při poskytnutí benefitu rodinnému příslušníkovi se eviduje konkrétní zaměstnanec, přes kterého benefit vznikl. Ocenění a limit se vztahují k tomuto zaměstnanci.',
    },
    {
      type: 'heading',
      text: 'Roční permanentka',
    },
    {
      type: 'paragraph',
      text: 'U roční permanentky je nutné určit okamžik poskytnutí a celkovou hodnotu příjmu podle smluvního uspořádání. Nelze ji bez opory automaticky rozdělit do dvanácti měsíců jen kvůli pohodlnému mzdovému zpracování.',
    },
    {
      type: 'example',
      title: 'Roční sportovní členství',
      situation:
        'Zaměstnanec získá 1. února neodvolatelné právo využívat sportovní zařízení celý rok. Správně určená hodnota činí 10 800 Kč.',
      solution:
        'Pokud smluvní podmínky potvrzují vznik celého majetkového prospěchu 1. února, eviduje se v únoru hodnota 10 800 Kč. Časové rozlišení musí vycházet z právního nastavení, nikoli jen z délky služby.',
    },
    {
      type: 'heading',
      text: 'Oprava hodnoty benefitu',
    },
    {
      type: 'paragraph',
      text: 'Zjistí-li se později, že benefit byl oceněn nesprávně, oprava musí upravit původní měsíc nebo postupovat podle aktuálních pravidel oprav mzdových a daňových údajů. Nestačí rozdíl bez vysvětlení přidat do běžného měsíce.',
    },
    {
      type: 'heading',
      text: 'Podklady pro ocenění',
    },
    {
      type: 'list',
      items: [
        'smlouva s poskytovatelem',
        'faktura nebo ceník',
        'podmínky benefitního systému',
        'obvyklá cena srovnatelného plnění',
        'spoluúčast zaměstnance',
        'datum vzniku práva nebo čerpání',
        'omezení soukromého použití',
        'zvláštní zákonné oceňovací pravidlo',
      ],
    },
    {
      type: 'heading',
      text: 'Kontrolní postup',
    },
    {
      type: 'list',
      items: [
        'ověřit nepeněžní formu',
        'určit okamžik vzniku příjmu',
        'zvolit správnou oceňovací metodu',
        'odečíst skutečnou spoluúčast zaměstnance',
        'přiřadit kategorii benefitu',
        'zkontrolovat roční limit',
        'rozlišit osvobozenou a zdanitelnou část',
        'uložit podklady a výpočet',
      ],
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'považovat převod na účet zaměstnance za nepeněžní plnění',
        'považovat každou benefitní kartu za osvobozenou',
        'použít automaticky fakturu zaměstnavatele jako jedinou hodnotu',
        'ignorovat spoluúčast zaměstnance',
        'rozpočítat roční benefit bez smluvního důvodu',
        'zaměnit pracovní pomůcku a soukromý prospěch',
        'zaměnit naturální mzdu a benefit',
        'opravit ocenění bez auditní stopy',
      ],
    },
    {
      type: 'summary',
      items: [
        'Nepeněžní benefit je konkrétní zboží, služba nebo právo, nikoli volně použitelné peníze.',
        'Ocenění vychází ze zákona o daních z příjmů, zákona o oceňování majetku a případných zvláštních pravidel.',
        'Spoluúčast zaměstnance snižuje hodnotu jeho majetkového prospěchu.',
        'Okamžik příjmu závisí na smluvním a faktickém vzniku práva.',
        'Pracovní prostředek, naturální mzda a zaměstnanecký benefit jsou tři odlišné kategorie.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'non-cash-benefits-card-01',
      front:
        'Je proplacení zaměstnancovy faktury za rekreaci automaticky nepeněžním benefitem?',
      back: 'Ne.',
      explanation:
        'Proplacení peněz zaměstnanci je peněžní plnění; přímá úhrada poskytovateli může být nepeněžní.',
      skillIds: ['non-cash-benefit-identification'],
    },
    {
      id: 'non-cash-benefits-card-02',
      front: 'Jak se obecně určuje hodnota nepeněžního příjmu?',
      back: 'Podle zákona o daních z příjmů, zákona o oceňování majetku nebo zvláštního zákonného pravidla.',
      explanation:
        'Faktura zaměstnavatele nemusí být vždy jediným rozhodným údajem.',
      skillIds: ['non-cash-benefit-valuation'],
    },
    {
      id: 'non-cash-benefits-card-03',
      front:
        'Co se stane s hodnotou benefitu, když zaměstnanec zaplatí spoluúčast?',
      back: 'Nepeněžní příjem se zpravidla sníží o zaplacenou částku.',
      explanation: 'Příjmem je skutečný majetkový prospěch zaměstnance.',
      skillIds: ['non-cash-benefit-valuation'],
    },
    {
      id: 'non-cash-benefits-card-04',
      front: 'Je pracovní notebook určený výhradně pro práci benefitem?',
      back: 'Ne.',
      explanation:
        'Jde o pracovní prostředek bez osobního majetkového prospěchu.',
      skillIds: ['non-cash-benefit-identification'],
    },
  ],
  exercises: [
    {
      id: 'non-cash-benefits-exercise-01',
      type: 'single_choice',
      prompt:
        'Hodnota vstupenky činí 900 Kč a zaměstnanec uhradí 250 Kč. Jaký nepeněžní příjem vzniká?',
      options: [
        {
          id: 'a',
          text: '250 Kč.',
        },
        {
          id: 'b',
          text: '650 Kč.',
        },
        {
          id: 'c',
          text: '900 Kč.',
        },
        {
          id: 'd',
          text: '1 150 Kč.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['non-cash-benefit-valuation'],
      explanation: '900 − 250 = 650 Kč.',
      commonMistake: 'Ignorovat spoluúčast nebo ji přičíst.',
    },
    {
      id: 'non-cash-benefits-exercise-02',
      type: 'multiple_choice',
      prompt:
        'Které podklady mohou být potřebné pro ocenění nepeněžního benefitu?',
      options: [
        {
          id: 'contract',
          text: 'Smlouva s poskytovatelem.',
        },
        {
          id: 'invoice',
          text: 'Faktura nebo ceník.',
        },
        {
          id: 'usual',
          text: 'Obvyklá cena.',
        },
        {
          id: 'employee',
          text: 'Spoluúčast zaměstnance.',
        },
        {
          id: 'name',
          text: 'Pouze marketingový název benefitu.',
        },
      ],
      correctOptionIds: ['contract', 'invoice', 'usual', 'employee'],
      skillIds: ['non-cash-benefit-valuation'],
      explanation: 'Ocenění vyžaduje ekonomické a smluvní podklady.',
      commonMistake: 'Převzít jen název položky z HR systému.',
    },
    {
      id: 'non-cash-benefits-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď zpracování nepeněžního benefitu.',
      steps: [
        {
          id: 'form',
          text: 'Ověřit nepeněžní formu.',
        },
        {
          id: 'timing',
          text: 'Určit okamžik vzniku příjmu.',
        },
        {
          id: 'valuation',
          text: 'Použít správnou oceňovací metodu.',
        },
        {
          id: 'contribution',
          text: 'Odečíst spoluúčast zaměstnance.',
        },
        {
          id: 'classification',
          text: 'Posoudit osvobození a limit.',
        },
        {
          id: 'record',
          text: 'Uložit hodnotu a podklady do mzdové evidence.',
        },
      ],
      correctOrder: [
        'form',
        'timing',
        'valuation',
        'contribution',
        'classification',
        'record',
      ],
      skillIds: ['non-cash-benefit-identification', 'non-cash-benefit-timing'],
      explanation:
        'Daňové posouzení navazuje na správnou hodnotu a okamžik příjmu.',
      commonMistake: 'Kontrolovat limit před určením hodnoty.',
    },
    {
      id: 'non-cash-benefits-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnavatel pošle zaměstnanci 5 000 Kč na jeho bankovní účet s poznámkou rekreace. Jde o nepeněžní benefit?',
      options: [
        {
          id: 'a',
          text: 'Ano.',
        },
        {
          id: 'b',
          text: 'Ne, jde o peněžní plnění.',
        },
        {
          id: 'c',
          text: 'Ano, pokud je převod bezhotovostní.',
        },
        {
          id: 'd',
          text: 'Ano, pokud zaměstnanec předloží fotografii.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['non-cash-benefit-identification'],
      explanation: 'Bezhotovostní převod zaměstnanci je stále peněžní plnění.',
      commonMistake: 'Zaměnit bezhotovostní a nepeněžní formu.',
    },
    {
      id: 'non-cash-benefits-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá cena používaná při ocenění, pokud zaměstnavatel získal plnění za nestandardních podmínek a zákon neuvádí zvláštní hodnotu?',
      acceptedAnswers: [
        'cena obvyklá',
        'obvyklá cena',
        'cena obvykla',
        'obvykla cena',
      ],
      ignoreDiacritics: true,
      skillIds: ['non-cash-benefit-valuation'],
      explanation:
        'Použije se cena obvyklá podle zákona o oceňování majetku, pokud je pro danou situaci rozhodná.',
      commonMistake: 'Vždy použít nulovou nebo interní cenu.',
    },
    {
      id: 'non-cash-benefits-exercise-06',
      type: 'single_choice',
      prompt:
        'Zaměstnanec dostane stejný poukaz jednou za výkon a podruhé jako plošný volnočasový benefit. Co platí?',
      options: [
        {
          id: 'a',
          text: 'Obě plnění mají automaticky stejný režim.',
        },
        {
          id: 'b',
          text: 'První může být odměnou za práci, druhé benefitem.',
        },
        {
          id: 'c',
          text: 'Obě jsou mimo předmět daně.',
        },
        {
          id: 'd',
          text: 'Rozhoduje pouze hodnota poukazu.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['non-cash-benefit-identification'],
      explanation: 'Právní důvod plnění je důležitější než jeho fyzická forma.',
      commonMistake: 'Klasifikovat podle druhu věci místo účelu.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 586/1992 Sb., o daních z příjmů – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1992/586',
      kind: 'official',
    },
    {
      title: 'Zákon č. 151/1997 Sb., o oceňování majetku – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/1997/151',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Metodická informace ke zdaňování benefitů a jiných plnění',
      url: 'https://financnisprava.gov.cz/assets/cs/prilohy/f-novinky/Metodicka-informace-k-zamestnaneckym-benefitum-od-1-ledna-20.pdf',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Obecné informace pro zaměstnance a zaměstnavatele 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace',
      kind: 'official',
    },
    {
      title:
        'Finanční správa – Aktuální dotazy a odpovědi k dani ze závislé činnosti 2026',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/dotazy-a-odpovedi/2026/aktualni-dotazy-a-odpovedi-k-dani-z',
      kind: 'official',
    },
  ],
})
