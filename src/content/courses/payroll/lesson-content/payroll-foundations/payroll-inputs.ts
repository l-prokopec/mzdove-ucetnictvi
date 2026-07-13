import { defineLessonContent } from '../define'

export const payrollInputsContent = defineLessonContent({
  moduleId: 'payroll-foundations',
  skillIds: [
    'payroll-input-classification',
    'payroll-input-validation',
    'payroll-input-cutoff',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-04-01',
    verifiedAt: '2026-07-10',
    note: 'Obecné členění a kontrola vstupních podkladů české mzdové agendy po zavedení registračních a ohlašovacích procesů JMHZ.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Co je mzdový vstup',
    },
    {
      type: 'paragraph',
      text: 'Mzdový vstup je ověřitelný údaj nebo dokument, který může ovlivnit mzdu, daň, pojistné, srážku, evidenci nebo povinné podání. Nestačí, že informace existuje. Musí být přiřaditelná ke správnému zaměstnanci, pracovnímu vztahu, období a oprávněnému zdroji.',
    },
    {
      type: 'definition',
      term: 'Zdrojový podklad',
      definition:
        'Dokument, záznam nebo elektronická informace, z níž je možné doložit původ, obsah, účinnost a případné schválení mzdového vstupu.',
    },
    {
      type: 'heading',
      text: 'Hlavní skupiny podkladů',
    },
    {
      type: 'list',
      items: [
        'personální a pracovněprávní podklady',
        'mzdové podmínky, odměny a další mzdové složky',
        'docházka, směny a pracovní doba',
        'dovolená, nemoc a jiné nepřítomnosti',
        'daňové prohlášení a doklady k nárokům',
        'údaje pro zdravotní pojištění',
        'údaje pro sociální zabezpečení a JMHZ',
        'srážky, exekuce a jiná externí rozhodnutí',
        'benefity a nepeněžní plnění',
        'opravy vztahující se k minulým obdobím',
      ],
    },
    {
      type: 'heading',
      text: 'Pravidelný, mimořádný, trvalý a jednorázový vstup',
    },
    {
      type: 'paragraph',
      text: 'Pravidelný vstup se opakuje v každém období, například základní měsíční mzda. Mimořádný vstup vzniká jen při určité události, například jednorázová odměna. Trvalý vstup platí od určitého data do další změny. Jednorázový vstup se použije pouze pro jedno určené období nebo událost.',
    },
    {
      type: 'heading',
      text: 'Datum dokumentu, účinnost a mzdové období',
    },
    {
      type: 'paragraph',
      text: 'Datum vytvoření dokumentu nemusí být totožné s datem účinnosti ani s obdobím, do kterého se má údaj promítnout. Mzdová účetní musí vždy rozlišit, kdy byl podklad vytvořen, od kdy právně nebo interně působí a do kterého mzdového období má být zpracován.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Podklad doručený v aktuálním měsíci nemusí patřit do aktuální mzdy. Stejně tak pozdě doručený údaj se nesmí automaticky ignorovat.',
    },
    {
      type: 'heading',
      text: 'Kontrola úplnosti podkladu',
    },
    {
      type: 'list',
      items: [
        'správný zaměstnanec a pracovní vztah',
        'jednoznačný druh vstupu',
        'datum účinnosti a mzdové období',
        'oprávněný původ a potřebné schválení',
        'úplná částka, rozsah hodin nebo jiná rozhodná hodnota',
        'soulad s docházkou a personální evidencí',
        'dohledatelný způsob doručení a změny',
        'přiměřený rozsah osobních údajů a oprávněný přístup',
      ],
    },
    {
      type: 'heading',
      text: 'Úplný, neúplný a rozporný podklad',
    },
    {
      type: 'paragraph',
      text: 'Úplný podklad obsahuje všechny údaje potřebné pro zpracování. Neúplnému podkladu některý rozhodný údaj chybí. Rozporný podklad se neshoduje s jinou evidencí nebo dokumentem. Neúplný ani rozporný vstup se nesmí bez vysvětlení převést do mzdy.',
    },
    {
      type: 'heading',
      text: 'Zdrojový dokument a systémový údaj',
    },
    {
      type: 'paragraph',
      text: 'Údaj zadaný do mzdového systému je pouze technickým záznamem. Musí být možné dohledat, z jakého zdrojového podkladu vznikl, kdo jej zadal, kdy byl změněn a proč. Samotná hodnota v systému není náhradou za chybějící oprávněný podklad.',
    },
    {
      type: 'example',
      title: 'Změna mzdy od poloviny měsíce',
      situation:
        'Dodatek ke mzdovým podmínkám je podepsán 20. dne měsíce, ale uvádí účinnost od 15. dne stejného měsíce.',
      solution:
        'Mzdová účetní rozliší datum podpisu, datum účinnosti a dotčené mzdové období. Ověří přesný způsob výpočtu za část období a zpracuje změnu podle doloženého účinného data, nikoli pouze podle data doručení.',
    },
    {
      type: 'example',
      title: 'Nemoc pouze v docházce',
      situation:
        'Docházka obsahuje označení nemoci, ale chybí návazný ověřitelný podklad nebo elektronická informace potřebná pro zpracování.',
      solution:
        'Mzdová účetní eviduje nesoulad a vyžádá doplnění. Nemá nemoc sama potvrdit ani ji automaticky změnit na jiný typ nepřítomnosti.',
    },
    {
      type: 'heading',
      text: 'Pozdní vstup po uzávěrce',
    },
    {
      type: 'list',
      items: [
        'zjistit, kterého zaměstnance a období se týká',
        'ověřit úplnost a oprávněnost',
        'určit fázi mzdového procesu',
        'posoudit, zda lze bezpečně znovu otevřít běžné zpracování',
        'pokud ne, použít řízený opravný postup',
        'aktualizovat všechny dotčené výstupy',
        'zaznamenat důvod a datum opravy',
      ],
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Ne každý e-mail nebo ústní sdělení je automaticky dostatečný mzdový podklad. Rozhodující je ověřitelný původ, obsah, pravomoc odesílatele a vazba na interní proces.',
    },
    {
      type: 'heading',
      text: 'Časté chyby při práci se vstupy',
    },
    {
      type: 'list',
      items: [
        'zpracování údaje pro nesprávný pracovní vztah',
        'záměna data doručení za datum účinnosti',
        'převzetí částky bez schválení',
        'ignorování rozporu mezi docházkou a personální evidencí',
        'přepis systémové hodnoty bez uchování zdroje',
        'zařazení opravy minulého období mezi běžné vstupy',
        'přijetí změny osobního údaje neověřeným kanálem',
      ],
    },
    {
      type: 'summary',
      items: [
        'Mzdový vstup musí být ověřitelný, úplný a přiřazený ke správnému zaměstnanci a období.',
        'Je nutné rozlišovat pravidelné, mimořádné, trvalé a jednorázové vstupy.',
        'Datum dokumentu, datum účinnosti a mzdové období nejsou totéž.',
        'Systémový údaj musí mít dohledatelný zdroj.',
        'Pozdní nebo rozporný vstup se řeší řízeným procesem, nikoli odhadem.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'payroll-inputs-card-01',
      front: 'Co musí být možné u každého mzdového vstupu doložit?',
      back: 'Původ, obsah, zaměstnance a pracovní vztah, období, účinnost a případné schválení.',
      explanation:
        'Tyto údaje umožňují rozhodnout, zda a jak lze vstup bezpečně zpracovat.',
      skillIds: ['payroll-input-validation'],
    },
    {
      id: 'payroll-inputs-card-02',
      front: 'Je datum doručení podkladu vždy datem jeho účinnosti?',
      back: 'Ne. Datum vytvoření, doručení, účinnosti a mzdové období se mohou lišit.',
      explanation:
        'Zpracování se řídí obsahem a účinností podkladu, nikoli pouze okamžikem doručení.',
      skillIds: ['payroll-input-classification'],
    },
    {
      id: 'payroll-inputs-card-03',
      front: 'Co je rozporný podklad?',
      back: 'Podklad, který se neshoduje s jinou evidencí, dokumentem nebo rozhodnou skutečností.',
      explanation: 'Rozpor se musí vysvětlit před tím, než údaj ovlivní mzdu.',
      skillIds: ['payroll-input-validation'],
    },
    {
      id: 'payroll-inputs-card-04',
      front: 'Jak se řeší správný podklad doručený po uzávěrce?',
      back: 'Ověří se, posoudí se fáze procesu a zpracuje se standardním nebo řízeným opravným postupem.',
      explanation:
        'Pozdní vstup se neignoruje, ale jeho dopady musí být kontrolované a dohledatelné.',
      skillIds: ['payroll-input-cutoff'],
    },
  ],
  exercises: [
    {
      id: 'payroll-inputs-exercise-01',
      type: 'single_choice',
      prompt:
        'Dodatek ke mzdě byl doručen 20. května, ale je účinný od 15. května. Které datum je rozhodné pro promítnutí změny?',
      options: [
        { id: 'a', text: 'Vždy pouze datum doručení.' },
        { id: 'b', text: 'Datum účinnosti uvedené v platném podkladu.' },
        { id: 'c', text: 'První den následujícího roku.' },
        { id: 'd', text: 'Datum, které si zvolí mzdová účetní.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-input-classification'],
      explanation:
        'Je nutné rozlišit doručení dokumentu a okamžik, od kterého má změna působit.',
      commonMistake:
        'Automaticky použít datum doručení bez kontroly účinnosti.',
    },
    {
      id: 'payroll-inputs-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které údaje patří do kontroly mzdového vstupu?',
      options: [
        { id: 'employee', text: 'Správný zaměstnanec a pracovní vztah.' },
        { id: 'guess', text: 'Osobní odhad mzdové účetní.' },
        { id: 'period', text: 'Mzdové období a datum účinnosti.' },
        { id: 'approval', text: 'Oprávněný původ a schválení.' },
        { id: 'consistency', text: 'Soulad s dalšími evidencemi.' },
      ],
      correctOptionIds: ['employee', 'period', 'approval', 'consistency'],
      skillIds: ['payroll-input-validation'],
      explanation:
        'Kontrola vstupu ověřuje identitu, období, oprávnění, úplnost a vazbu na jiné podklady.',
      commonMistake: 'Nahradit chybějící údaj odhadem.',
    },
    {
      id: 'payroll-inputs-exercise-03',
      type: 'single_choice',
      prompt:
        'Po uzávěrce dorazí podepsaný dokument s účinností v již zpracovaném období. Co má mzdová účetní udělat jako první?',
      options: [
        { id: 'a', text: 'Dokument ignorovat, protože přišel po uzávěrce.' },
        { id: 'b', text: 'Změnit datum účinnosti na den doručení.' },
        {
          id: 'c',
          text: 'Zaevidovat podklad, ověřit jeho účinnost a určit řízený opravný postup.',
        },
        { id: 'd', text: 'Přepsat mzdu bez schválení a bez auditní stopy.' },
      ],
      correctOptionId: 'c',
      skillIds: ['payroll-input-cutoff'],
      explanation:
        'Pozdní vstup se nejdříve identifikuje a právně i časově ověří; následná oprava musí být dohledatelná.',
      commonMistake: 'Považovat datum doručení automaticky za datum účinnosti.',
    },
    {
      id: 'payroll-inputs-exercise-04',
      type: 'single_choice',
      prompt:
        'V docházce je uvedena nemoc, ale chybí potřebný návazný podklad. Jak postupovat?',
      options: [
        { id: 'a', text: 'Nemoc automaticky zpracovat bez ověření.' },
        { id: 'b', text: 'Změnit ji na dovolenou.' },
        {
          id: 'c',
          text: 'Zaznamenat nesoulad a vyžádat doplnění podkladu.',
        },
        { id: 'd', text: 'Celý záznam zaměstnance odstranit.' },
      ],
      correctOptionId: 'c',
      skillIds: ['payroll-input-validation'],
      explanation:
        'Rozporná nebo neúplná informace se musí ověřit před mzdovým zpracováním.',
      commonMistake:
        'Považovat jeden systémový záznam za dostatečný bez kontroly potřebného zdroje.',
    },
    {
      id: 'payroll-inputs-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá datum, od kterého má změna podle podkladu působit?',
      acceptedAnswers: [
        'datum účinnosti',
        'účinnost',
        'datum ucinnosti',
        'ucinnost',
      ],
      ignoreDiacritics: true,
      skillIds: ['payroll-input-classification'],
      explanation: 'Datum účinnosti určuje, od kdy se má změna uplatnit.',
      commonMistake:
        'Zaměnit účinnost za datum vytvoření nebo doručení dokumentu.',
    },
    {
      id: 'payroll-inputs-exercise-06',
      type: 'single_choice',
      prompt: 'Který z následujících vstupů je typicky jednorázový?',
      options: [
        { id: 'a', text: 'Základní měsíční mzda platná do další změny.' },
        { id: 'b', text: 'Jednorázová mimořádná odměna za konkrétní měsíc.' },
        { id: 'c', text: 'Trvalé číslo zdravotní pojišťovny.' },
        { id: 'd', text: 'Dlouhodobě sjednaný pracovní úvazek.' },
      ],
      correctOptionId: 'b',
      skillIds: ['payroll-input-classification'],
      explanation:
        'Jednorázová odměna se vztahuje ke konkrétnímu období a neopakuje se bez nového podkladu.',
      commonMistake:
        'Považovat každý nově doručený podklad za jednorázový bez ohledu na jeho další platnost.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Jednotné měsíční hlášení zaměstnavatele',
      url: 'https://jmhz.mpsv.cz/',
      kind: 'official',
    },
    {
      title: 'ČSSZ – Registrace zaměstnance',
      url: 'https://eportal.cssz.cz/web/portal/-/sluzby/registrace-zamestnance',
      kind: 'official',
    },
    {
      title: 'Finanční správa – Zaměstnanci a zaměstnavatelé',
      url: 'https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele',
      kind: 'official',
    },
    {
      title: 'ÚOOÚ – Zaměstnavatelé',
      url: 'https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/zamestnavatele',
      kind: 'official',
    },
  ],
})
