import { defineLessonContent } from '../define'

export const employeePersonalDataContent = defineLessonContent({
  moduleId: 'employee-onboarding',
  skillIds: [
    'employee-data-classification',
    'employee-data-minimisation',
    'employee-data-validation',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Rozsah, účel, minimalizace a kontrola osobních a mzdových údajů při nástupu zaměstnance ověřené podle GDPR, české úpravy ochrany údajů a pracovněprávních povinností.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Proč se při nástupu shromažďují osobní údaje',
    },
    {
      type: 'paragraph',
      text: 'Zaměstnavatel potřebuje při nástupu identifikovat zaměstnance, založit pracovní vztah, vypočítat mzdu, splnit daňové a pojistné povinnosti, provádět platby a vést předepsanou evidenci. To však neznamená, že může shromažďovat jakékoli údaje bez jasného účelu.',
    },
    {
      type: 'definition',
      term: 'Osobní údaj',
      definition:
        'Informace vztahující se k identifikované nebo identifikovatelné fyzické osobě.',
    },
    {
      type: 'definition',
      term: 'Minimalizace údajů',
      definition:
        'Zásada, podle níž se zpracovávají pouze údaje přiměřené, relevantní a nezbytné pro stanovený účel.',
    },
    {
      type: 'heading',
      text: 'Základní identifikační údaje',
    },
    {
      type: 'list',
      items: [
        'jméno a příjmení',
        'rodné příjmení, je-li potřebné pro konkrétní evidenci',
        'datum a místo narození',
        'rodné číslo nebo jiný používaný identifikátor',
        'státní občanství',
        'adresa pobytu v rozsahu potřebném pro pracovněprávní a veřejnoprávní povinnosti',
      ],
    },
    {
      type: 'paragraph',
      text: 'Konkrétní rozsah se řídí účelem a právní povinností. Údaj nesmí být převzat pouze proto, že byl historicky součástí interního formuláře.',
    },
    {
      type: 'heading',
      text: 'Kontaktní údaje',
    },
    {
      type: 'paragraph',
      text: 'Telefonní číslo a soukromý e-mail mohou být potřebné pro přednástupní komunikaci nebo doručení určitých informací. Zaměstnavatel musí určit účel, omezit přístup a po vzniku služebních kontaktů znovu posoudit potřebnost soukromých údajů.',
    },
    {
      type: 'heading',
      text: 'Pracovní a mzdové údaje',
    },
    {
      type: 'list',
      items: [
        'identifikace pracovního vztahu',
        'organizační zařazení',
        'druh práce a místo výkonu práce',
        'datum nástupu a doba trvání',
        'sjednaný rozsah pracovní doby',
        'mzdový nebo platový podklad',
        'středisko, zakázka nebo jiný oprávněný účetní údaj',
        'způsob výplaty a ověřený bankovní účet, používá-li se bezhotovostní výplata',
      ],
    },
    {
      type: 'heading',
      text: 'Daňové a pojistné údaje',
    },
    {
      type: 'paragraph',
      text: 'Údaje pro daň, zdravotní a sociální pojištění se shromažďují odděleně podle příslušného účelu. Patří sem například daňové prohlášení, údaje k uplatňovaným nárokům, zdravotní pojišťovna, kategorie pojištěnce nebo údaje vyžadované evidencí zaměstnanců.',
    },
    {
      type: 'heading',
      text: 'Rodinné údaje pouze při konkrétním účelu',
    },
    {
      type: 'paragraph',
      text: 'Údaje o dětech, manželovi, partnerovi nebo jiných osobách se nepřebírají automaticky. Zpracovávají se pouze tehdy, pokud zaměstnanec uplatňuje konkrétní nárok nebo pokud je údaj nutný pro zákonnou evidenci.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Citlivý nebo soukromý údaj nesmí být vyžadován jen „pro jistotu“. Každý údaj musí mít doložitelný účel a odpovídající právní titul.',
    },
    {
      type: 'heading',
      text: 'Souhlas zaměstnance není univerzální řešení',
    },
    {
      type: 'paragraph',
      text: 'Mnoho údajů zaměstnavatel zpracovává kvůli pracovní smlouvě nebo zákonné povinnosti. V takových případech se zpracování nemá formálně opírat o souhlas, který by neodpovídal skutečnému právnímu důvodu. Souhlas se používá jen tam, kde je skutečně dobrovolný a lze jej odmítnout bez nepříznivého následku.',
    },
    {
      type: 'heading',
      text: 'Ověření správnosti',
    },
    {
      type: 'list',
      items: [
        'porovnat údaje s důvěryhodným dokladem nebo úředním zdrojem, je-li to oprávněné',
        'zkontrolovat shodu jména, data narození a identifikátorů',
        'ověřit vazbu na správný pracovní vztah',
        'zkontrolovat formát bankovního účtu a řízený způsob jeho oznámení',
        'porovnat daňové a pojistné údaje s předloženými dokumenty',
        'zaznamenat zdroj a datum ověření',
      ],
    },
    {
      type: 'example',
      title: 'Bankovní účet zaslaný z neověřeného e-mailu',
      situation:
        'Před nástupem přijde z nové neznámé adresy e-mail s číslem účtu a jménem budoucího zaměstnance.',
      solution:
        'Mzdová účetní účet nepřevezme pouze podle tohoto e-mailu. Použije stanovený ověřovací postup, například zabezpečený formulář, potvrzení přes známý kontakt nebo kontrolu oprávněnou osobou.',
    },
    {
      type: 'heading',
      text: 'Změny osobních údajů',
    },
    {
      type: 'paragraph',
      text: 'Údaje musí být přesné a aktuální. Změna jména, adresy, pojišťovny, bankovního účtu nebo jiného údaje se zpracuje až po ověření původu, účinnosti a potřebného dokladu. Původní stav a změna mají zůstat dohledatelné.',
    },
    {
      type: 'heading',
      text: 'Přístupová oprávnění',
    },
    {
      type: 'paragraph',
      text: 'K údajům mají přistupovat pouze osoby, které je potřebují pro svou pracovní roli. Vedoucí zaměstnanec nemusí mít přístup ke všem daňovým, zdravotním nebo rodinným údajům. Správce systému nemá automaticky potřebovat plný obsah osobního spisu.',
    },
    {
      type: 'heading',
      text: 'Bezpečné předávání',
    },
    {
      type: 'list',
      items: [
        'používat schválený bezpečný kanál',
        'neposílat kompletní nástupní spis širšímu okruhu osob',
        'chránit dokumenty při přenosu a ukládání',
        'ověřit příjemce před odesláním',
        'neukládat údaje do neřízených osobních složek',
        'zamezit duplicitním a nekontrolovaným kopiím',
      ],
    },
    {
      type: 'example',
      title: 'Nadbytečný údaj v nástupním formuláři',
      situation:
        'Interní formulář vyžaduje rodinný stav každého zaměstnance, i když zaměstnanec neuplatňuje žádný související nárok a údaj není potřebný pro evidenci.',
      solution:
        'Zaměstnavatel má ověřit účel a potřebnost pole. Pokud pro údaj neexistuje konkrétní právní nebo provozní důvod, nemá být povinně shromažďován.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'přebírat celý obsah starého formuláře bez kontroly účelu',
        'zaměnit souhlas za právní titul pro povinné zpracování',
        'ukládat kopie dokladů bez posouzení potřebnosti',
        'zadávat neověřený bankovní účet',
        'zpřístupnit údaje většímu počtu osob, než je nutné',
        'smíchat údaje více pracovních vztahů stejné osoby',
        'nezaznamenat účinnost změny',
      ],
    },
    {
      type: 'summary',
      items: [
        'Při nástupu se zpracovávají pouze údaje potřebné pro konkrétní pracovněprávní, mzdový, daňový nebo pojistný účel.',
        'Rozsah údajů se řídí minimalizací, přesností a omezením účelu.',
        'Souhlas není náhradou za správné určení právního důvodu.',
        'Bankovní, daňové a pojistné údaje musí mít ověřitelný původ.',
        'Přístup a předávání údajů se omezují podle pracovních rolí a bezpečných procesů.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employee-personal-data-card-01',
      front: 'Co znamená minimalizace osobních údajů?',
      back: 'Zpracovávat pouze údaje přiměřené, relevantní a nezbytné pro konkrétní účel.',
      explanation:
        'Údaj se nesbírá jen proto, že jej obsahuje historický formulář.',
      skillIds: ['employee-data-minimisation'],
    },
    {
      id: 'employee-personal-data-card-02',
      front:
        'Je souhlas zaměstnance hlavním titulem pro povinnou mzdovou evidenci?',
      back: 'Obvykle ne. Povinné zpracování se zpravidla opírá o smlouvu nebo zákonnou povinnost.',
      explanation:
        'Souhlas musí být skutečně dobrovolný a nesmí zastírat jiný právní důvod.',
      skillIds: ['employee-data-minimisation'],
    },
    {
      id: 'employee-personal-data-card-03',
      front: 'Jak se má ověřit změna bankovního účtu?',
      back: 'Řízeným a dohledatelným způsobem, nikoli pouze podle neověřeného e-mailu.',
      explanation:
        'Změna účtu je významná výplatní instrukce s rizikem podvodu.',
      skillIds: ['employee-data-validation'],
    },
    {
      id: 'employee-personal-data-card-04',
      front: 'Mají všichni vedoucí přístup ke všem osobním údajům zaměstnance?',
      back: 'Ne. Přístup se omezuje na údaje nezbytné pro konkrétní pracovní roli.',
      explanation:
        'Mzdové, daňové, zdravotní a rodinné údaje vyžadují odpovídající omezení.',
      skillIds: ['employee-data-classification'],
    },
  ],
  exercises: [
    {
      id: 'employee-personal-data-exercise-01',
      type: 'multiple_choice',
      prompt:
        'Které zásady jsou důležité při získávání nástupních osobních údajů?',
      options: [
        {
          id: 'purpose',
          text: 'Omezení účelu.',
        },
        {
          id: 'minimum',
          text: 'Minimalizace údajů.',
        },
        {
          id: 'accuracy',
          text: 'Přesnost údajů.',
        },
        {
          id: 'access',
          text: 'Omezení přístupu.',
        },
        {
          id: 'collect-all',
          text: 'Shromáždit všechny možné údaje pro případ budoucí potřeby.',
        },
      ],
      correctOptionIds: ['purpose', 'minimum', 'accuracy', 'access'],
      skillIds: ['employee-data-classification', 'employee-data-minimisation'],
      explanation:
        'Zaměstnavatel zpracovává pouze potřebné a přesné údaje s omezeným přístupem.',
      commonMistake: 'Sbírat údaje bez konkrétního účelu pouze preventivně.',
    },
    {
      id: 'employee-personal-data-exercise-02',
      type: 'single_choice',
      prompt:
        'Číslo účtu přišlo z neznámé e-mailové adresy. Jaký je správný postup?',
      options: [
        {
          id: 'a',
          text: 'Okamžitě účet zadat.',
        },
        {
          id: 'b',
          text: 'Ověřit účet stanoveným bezpečným postupem.',
        },
        {
          id: 'c',
          text: 'Použít účet kolegy zaměstnance.',
        },
        {
          id: 'd',
          text: 'Účet náhodně upravit.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employee-data-validation'],
      explanation: 'Výplatní instrukce musí mít ověřitelný původ.',
      commonMistake:
        'Považovat shodu jména v e-mailu za dostatečné ověření identity.',
    },
    {
      id: 'employee-personal-data-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď postup převzetí nástupního údaje.',
      steps: [
        {
          id: 'purpose',
          text: 'Určit účel a potřebnost údaje.',
        },
        {
          id: 'source',
          text: 'Získat údaj z oprávněného zdroje.',
        },
        {
          id: 'verify',
          text: 'Ověřit správnost a vazbu na osobu.',
        },
        {
          id: 'record',
          text: 'Zapsat údaj do správné evidence.',
        },
        {
          id: 'protect',
          text: 'Omezit přístup a zachovat kontrolní stopu.',
        },
      ],
      correctOrder: ['purpose', 'source', 'verify', 'record', 'protect'],
      skillIds: ['employee-data-minimisation', 'employee-data-validation'],
      explanation:
        'Zpracování začíná účelem a končí bezpečným uložením a dohledatelností.',
      commonMistake:
        'Nejprve údaj uložit a teprve potom zjišťovat, zda je potřebný.',
    },
    {
      id: 'employee-personal-data-exercise-04',
      type: 'single_choice',
      prompt: 'Kdy je vhodné automaticky vyžadovat údaje o dětech zaměstnance?',
      options: [
        {
          id: 'a',
          text: 'Vždy u každého zaměstnance bez ohledu na účel.',
        },
        {
          id: 'b',
          text: 'Pouze pokud jsou potřebné pro konkrétní uplatněný nárok nebo zákonnou evidenci.',
        },
        {
          id: 'c',
          text: 'Pouze pro interní statistiku bez vysvětlení.',
        },
        {
          id: 'd',
          text: 'Nikdy, ani když zaměstnanec uplatňuje daňové zvýhodnění.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employee-data-minimisation'],
      explanation:
        'Rodinné údaje se zpracovávají pouze pro doložitelný konkrétní účel.',
      commonMistake:
        'Vyžadovat rodinné údaje preventivně od všech zaměstnanců.',
    },
    {
      id: 'employee-personal-data-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá zásada, podle níž se mají zpracovávat jen nezbytné údaje?',
      acceptedAnswers: [
        'minimalizace údajů',
        'minimalizace udaju',
        'minimalizace',
      ],
      ignoreDiacritics: true,
      skillIds: ['employee-data-minimisation'],
      explanation: 'Jde o zásadu minimalizace osobních údajů.',
      commonMistake:
        'Uvést souhlas, který je právním titulem, nikoli zásadou rozsahu.',
    },
    {
      id: 'employee-personal-data-exercise-06',
      type: 'single_choice',
      prompt:
        'Kdo má mít přístup k úplným daňovým a zdravotním údajům zaměstnance?',
      options: [
        {
          id: 'a',
          text: 'Každý vedoucí bez omezení.',
        },
        {
          id: 'b',
          text: 'Pouze osoby, které je potřebují pro svou oprávněnou pracovní roli.',
        },
        {
          id: 'c',
          text: 'Všichni zaměstnanci stejného týmu.',
        },
        {
          id: 'd',
          text: 'Každý externí dodavatel.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['employee-data-classification'],
      explanation: 'Přístup se řídí účelem a nezbytností pro konkrétní roli.',
      commonMistake:
        'Odvozovat přístup k citlivým údajům pouze z obecné vedoucí funkce.',
    },
  ],
  sources: [
    {
      title: 'Nařízení Evropského parlamentu a Rady (EU) 2016/679 – GDPR',
      url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
      kind: 'official',
    },
    {
      title: 'Zákon č. 110/2019 Sb., o zpracování osobních údajů – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2019/110',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatelé',
      url: 'https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/zamestnavatele',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatel jako správce osobních údajů',
      url: 'https://uoou.gov.cz/cinnost/ochrana-osobnich-udaju/ukoncene-kontroly/kontroly-za-rok-2007/zamestnavatel-jako-spravce-osobnich-udaju',
      kind: 'official',
    },
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
  ],
})
