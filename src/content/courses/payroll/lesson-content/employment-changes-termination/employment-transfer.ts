import { defineLessonContent } from '../define'

export const employmentTransferContent = defineLessonContent({
  moduleId: 'employment-changes-termination',
  skillIds: [
    'transfer-classification',
    'business-trip-control',
    'transfer-payroll-impact',
  ],
  legalValidity: {
    jurisdiction: 'CZ',
    validFrom: '2026-01-01',
    verifiedAt: '2026-07-11',
    note: 'Převedení na jinou práci, přeložení a pracovní cesta ověřené podle českého zákoníku práce a metodiky MPSV účinné v roce 2026.',
  },
  blocks: [
    {
      type: 'heading',
      text: 'Tři odlišné instituty',
    },
    {
      type: 'paragraph',
      text: 'Převedení na jinou práci, přeložení a pracovní cesta mění odlišnou část výkonu práce. Pro mzdovou účetní je zásadní správně určit, zda se mění druh práce, místo výkonu práce nebo jen dočasné místo konkrétního pracovního úkolu.',
    },
    {
      type: 'definition',
      term: 'Převedení na jinou práci',
      definition:
        'Dočasná nebo jiná zákonem upravená změna vykonávané práce, při níž zaměstnanec koná jiný druh práce, než který byl původně sjednán.',
    },
    {
      type: 'definition',
      term: 'Přeložení',
      definition:
        'Dočasné konání práce v jiném místě, než bylo sjednáno jako místo výkonu práce, v rámci téhož zaměstnavatele a za zákonných podmínek.',
    },
    {
      type: 'definition',
      term: 'Pracovní cesta',
      definition:
        'Časově omezené vyslání zaměstnance k výkonu práce mimo sjednané místo výkonu práce na základě dohody se zaměstnancem.',
    },
    {
      type: 'heading',
      text: 'Převedení mění druh práce',
    },
    {
      type: 'paragraph',
      text: 'Při převedení zaměstnanec vykonává jinou práci. Zákoník práce rozlišuje případy, kdy zaměstnavatel zaměstnance převést musí, a případy, kdy jej převést může. Mzdová účetní sama neposuzuje zdravotní nebo provozní důvod; vychází z doloženého rozhodnutí a podkladů oprávněné osoby.',
    },
    {
      type: 'heading',
      text: 'Povinné převedení',
    },
    {
      type: 'paragraph',
      text: 'Povinnost převést zaměstnance může vzniknout zejména tehdy, když zaměstnanec podle lékařského posudku nesmí dále konat dosavadní práci nebo když tak stanoví jiná zákonná okolnost. Konkrétní důvod musí být doložen a musí z něj být zřejmé, od kdy a na jakou práci se zaměstnanec převádí.',
    },
    {
      type: 'notice',
      tone: 'warning',
      text: 'Mzdová účetní nesmí sama dovozovat zdravotní důvod z diagnózy, pracovní neschopnosti nebo ústního sdělení. Potřebuje pracovněprávně použitelný podklad.',
    },
    {
      type: 'heading',
      text: 'Převedení a odměňování',
    },
    {
      type: 'paragraph',
      text: 'Převedení může změnit vykonávanou práci, mzdové podmínky, příplatky nebo náhrady. Mzdová účetní musí zjistit, zda zaměstnanci náleží mzda podle nové práce, zda vzniká nárok na doplatek do průměrného výdělku nebo zda se použije jiné zvláštní pravidlo.',
    },
    {
      type: 'example',
      title: 'Dočasné převedení z důvodu ochrany zdraví',
      situation:
        'Zaměstnanec je na základě pracovnělékařského podkladu dočasně převeden z noční práce na jinou denní práci.',
      solution:
        'Mzdová účetní eviduje dobu a důvod převedení, novou práci a její mzdové podmínky. Současně zkontroluje, zda právní důvod zakládá zvláštní nárok na doplatek nebo jinou náhradu.',
    },
    {
      type: 'heading',
      text: 'Přeložení mění místo výkonu práce',
    },
    {
      type: 'paragraph',
      text: 'Přeložení se týká výkonu práce v jiném místě, než bylo sjednáno v pracovní smlouvě. Je možné jen se souhlasem zaměstnance a v rámci téhož zaměstnavatele, pokud to nezbytně vyžaduje jeho provozní potřeba.',
    },
    {
      type: 'paragraph',
      text: 'Přeloženého zaměstnance zpravidla řídí vedoucí zaměstnanec organizační jednotky na novém místě, pokud není dohodnuto jinak. Právním zaměstnavatelem se však nestává jiná provozovna ani organizační útvar.',
    },
    {
      type: 'example',
      title: 'Dočasné přeložení do jiné pobočky',
      situation:
        'Zaměstnanec má sjednáno místo výkonu práce Praha a souhlasí s tříměsíčním přeložením do pobočky v Brně.',
      solution:
        'Jde o změnu místa výkonu práce mimo sjednaný rozsah. Musí být doložen souhlas, doba a místo přeložení. Mzdová účetní ověří dopad do cestovních náhrad, organizační evidence, docházky a nákladového střediska.',
    },
    {
      type: 'heading',
      text: 'Pracovní cesta je časově omezená',
    },
    {
      type: 'paragraph',
      text: 'Pracovní cesta je dočasné vyslání k určitému pracovnímu úkolu mimo sjednané místo výkonu práce. Zaměstnavatel může zaměstnance vyslat jen na základě dohody; souhlas může být obsažen už v pracovní smlouvě nebo udělen pro konkrétní cestu.',
    },
    {
      type: 'heading',
      text: 'Pracovní cesta a cestovní náhrady',
    },
    {
      type: 'paragraph',
      text: 'Pracovní cesta vyvolává potřebu evidovat místo, dobu, dopravní prostředek, případné zálohy a vyúčtování. Cestovní náhrady nejsou běžnou mzdovou složkou a jejich výpočet patří do samostatného procesu. Mzdová účetní musí zachovat vazbu mezi cestovním příkazem, vyúčtováním a výplatou.',
    },
    {
      type: 'notice',
      tone: 'info',
      text: 'Pravidelné pracoviště pro účely cestovních náhrad není automaticky totéž co místo výkonu práce. Oba údaje musí být v evidenci rozlišeny.',
    },
    {
      type: 'heading',
      text: 'Ochrana vybraných zaměstnanců',
    },
    {
      type: 'paragraph',
      text: 'U některých zaměstnanců, zejména těhotných zaměstnankyň a osob pečujících o malé děti, se při pracovních cestách a přeložení uplatňují zvláštní podmínky souhlasu. Mzdová účetní nehodnotí rodinnou situaci bez potřeby, ale musí respektovat doložené omezení a předaný pracovněprávní výsledek.',
    },
    {
      type: 'heading',
      text: 'Dočasné přidělení není přeložení',
    },
    {
      type: 'paragraph',
      text: 'Dočasné přidělení k jinému zaměstnavateli je samostatný institut. Při přeložení zůstává zaměstnanec uvnitř stejného zaměstnavatele. Pokud práci organizuje jiný právní subjekt, je nutné ověřit, zda nejde o dočasné přidělení, agenturní zaměstnávání nebo jiný vztah.',
    },
    {
      type: 'heading',
      text: 'Kontrolní otázky',
    },
    {
      type: 'list',
      items: [
        'Mění se druh práce, místo práce, nebo jde jen o konkrétní cestu?',
        'Je změna dočasná, nebo trvalá?',
        'Existuje potřebný souhlas nebo zákonný důvod?',
        'Jaké je datum začátku a konce?',
        'Mění se mzda, příplatky nebo nárok na doplatek?',
        'Vznikají cestovní náhrady?',
        'Které systémy a střediska je nutné aktualizovat?',
      ],
    },
    {
      type: 'example',
      title: 'Chybně označená pracovní cesta',
      situation:
        'Zaměstnanec má místo výkonu práce pouze Ostrava, ale po dobu šesti měsíců má pravidelně pracovat každý pracovní den v Praze. Dokument je označen jako pracovní cesta.',
      solution:
        'Délka a pravidelnost samy o sobě nejsou jediným kritériem, ale případ vyžaduje pracovněprávní kontrolu skutečného obsahu. Mzdová účetní nemá označení bez dalšího převzít a musí ověřit, zda nejde o přeložení nebo změnu pracovní smlouvy.',
    },
    {
      type: 'heading',
      text: 'Časté chyby',
    },
    {
      type: 'list',
      items: [
        'zaměnit převedení za přeložení',
        'považovat jinou pobočku za jiného zaměstnavatele',
        'vyslat zaměstnance na pracovní cestu bez potřebné dohody',
        'nezohlednit změnu příplatků a cestovních náhrad',
        'zaměnit pravidelné pracoviště za místo výkonu práce',
        'použít diagnózu místo pracovnělékařského podkladu',
        'neukončit dočasnou změnu ve správném datu',
      ],
    },
    {
      type: 'summary',
      items: [
        'Převedení mění druh práce, přeložení místo výkonu práce a pracovní cesta je dočasné vyslání mimo sjednané místo.',
        'Převedení musí mít konkrétní zákonný nebo dohodnutý podklad.',
        'Přeložení vyžaduje souhlas zaměstnance a probíhá u téhož zaměstnavatele.',
        'Pracovní cesta se váže na dohodu a cestovní náhrady.',
        'Mzdová účetní kontroluje dobu, právní titul, odměňování a návazné evidence.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'employment-transfer-card-01',
      front: 'Co se mění při převedení na jinou práci?',
      back: 'Druh vykonávané práce.',
      explanation: 'Zaměstnanec dočasně nebo jinak zákonně koná jinou práci.',
      skillIds: ['transfer-classification'],
    },
    {
      id: 'employment-transfer-card-02',
      front: 'Co se mění při přeložení?',
      back: 'Místo výkonu práce v rámci téhož zaměstnavatele.',
      explanation: 'Přeložení není změna zaměstnavatele.',
      skillIds: ['transfer-classification'],
    },
    {
      id: 'employment-transfer-card-03',
      front: 'Co je pracovní cesta?',
      back: 'Časově omezené vyslání mimo sjednané místo výkonu práce na základě dohody.',
      explanation: 'Je spojena s evidencí a cestovními náhradami.',
      skillIds: ['business-trip-control'],
    },
    {
      id: 'employment-transfer-card-04',
      front: 'Proč je důvod převedení důležitý pro mzdu?',
      back: 'Může ovlivnit mzdu podle nové práce nebo nárok na doplatek.',
      explanation:
        'Mzdové posouzení se odvíjí od právního důvodu a skutečně vykonávané práce.',
      skillIds: ['transfer-payroll-impact'],
    },
  ],
  exercises: [
    {
      id: 'employment-transfer-exercise-01',
      type: 'single_choice',
      prompt:
        'Zaměstnanec dočasně vykonává jiný sjednaný druh práce. O jaký institut typicky jde?',
      options: [
        {
          id: 'a',
          text: 'Převedení.',
        },
        {
          id: 'b',
          text: 'Přeložení.',
        },
        {
          id: 'c',
          text: 'Pracovní cesta.',
        },
        {
          id: 'd',
          text: 'Skončení pracovního poměru.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['transfer-classification'],
      explanation: 'Převedení se týká změny druhu vykonávané práce.',
      commonMistake: 'Zaměnit změnu druhu práce za změnu místa práce.',
    },
    {
      id: 'employment-transfer-exercise-02',
      type: 'multiple_choice',
      prompt: 'Které údaje se mají ověřit před zpracováním přeložení?',
      options: [
        {
          id: 'consent',
          text: 'Souhlas zaměstnance.',
        },
        {
          id: 'place',
          text: 'Nové místo výkonu práce.',
        },
        {
          id: 'duration',
          text: 'Doba přeložení.',
        },
        {
          id: 'employer',
          text: 'Zda jde stále o stejného zaměstnavatele.',
        },
        {
          id: 'guess',
          text: 'Odhad mzdové účetní bez dokumentu.',
        },
      ],
      correctOptionIds: ['consent', 'place', 'duration', 'employer'],
      skillIds: ['transfer-classification', 'transfer-payroll-impact'],
      explanation: 'Přeložení musí být právně i evidenčně jednoznačné.',
      commonMistake:
        'Považovat přesun do jiné provozovny automaticky za běžný interní pokyn.',
    },
    {
      id: 'employment-transfer-exercise-03',
      type: 'ordering',
      prompt: 'Seřaď kontrolu dočasné změny výkonu práce.',
      steps: [
        {
          id: 'classify',
          text: 'Určit, zda jde o převedení, přeložení nebo pracovní cestu.',
        },
        {
          id: 'basis',
          text: 'Ověřit zákonný důvod, dohodu nebo souhlas.',
        },
        {
          id: 'dates',
          text: 'Určit začátek a konec změny.',
        },
        {
          id: 'pay',
          text: 'Vyhodnotit mzdu, příplatky, doplatek a cestovní náhrady.',
        },
        {
          id: 'systems',
          text: 'Aktualizovat dotčené evidence a střediska.',
        },
        {
          id: 'close',
          text: 'Po skončení vrátit evidenci do správného stavu.',
        },
      ],
      correctOrder: ['classify', 'basis', 'dates', 'pay', 'systems', 'close'],
      skillIds: ['transfer-classification', 'transfer-payroll-impact'],
      explanation:
        'Nejprve se určí právní institut a teprve potom jeho mzdové dopady.',
      commonMistake:
        'Zadat novou práci nebo místo bez určení, o jakou změnu jde.',
    },
    {
      id: 'employment-transfer-exercise-04',
      type: 'single_choice',
      prompt:
        'Zaměstnanec jede na dva dny plnit úkol mimo sjednané místo práce. Jaký institut je nejpravděpodobnější?',
      options: [
        {
          id: 'a',
          text: 'Pracovní cesta.',
        },
        {
          id: 'b',
          text: 'Skončení poměru.',
        },
        {
          id: 'c',
          text: 'Trvalé přeložení k jinému zaměstnavateli.',
        },
        {
          id: 'd',
          text: 'Dovolená.',
        },
      ],
      correctOptionId: 'a',
      skillIds: ['business-trip-control'],
      explanation:
        'Krátkodobé vyslání k úkolu mimo sjednané místo typicky odpovídá pracovní cestě.',
      commonMistake:
        'Každý výkon práce mimo běžnou kancelář označit za přeložení.',
    },
    {
      id: 'employment-transfer-exercise-05',
      type: 'short_text',
      prompt:
        'Jak se nazývá dočasné vyslání zaměstnance mimo sjednané místo výkonu práce?',
      acceptedAnswers: ['pracovní cesta', 'pracovni cesta'],
      ignoreDiacritics: true,
      skillIds: ['business-trip-control'],
      explanation: 'Jde o pracovní cestu.',
      commonMistake: 'Uvést přeložení.',
    },
    {
      id: 'employment-transfer-exercise-06',
      type: 'single_choice',
      prompt:
        'Může mzdová účetní sama určit, že zdravotní stav vyžaduje převedení?',
      options: [
        {
          id: 'a',
          text: 'Ano, podle diagnózy v e-mailu.',
        },
        {
          id: 'b',
          text: 'Ne, musí vycházet z pracovněprávně použitelného podkladu.',
        },
        {
          id: 'c',
          text: 'Ano, pokud zaměstnanec souhlasí ústně.',
        },
        {
          id: 'd',
          text: 'Ano, podle docházky.',
        },
      ],
      correctOptionId: 'b',
      skillIds: ['transfer-classification'],
      explanation:
        'Zdravotní a právní důvod musí být doložen oprávněným podkladem.',
      commonMistake: 'Nahrazovat pracovnělékařské posouzení vlastní úvahou.',
    },
  ],
  sources: [
    {
      title: 'Zákon č. 262/2006 Sb., zákoník práce – e-Sbírka',
      url: 'https://www.e-sbirka.cz/sb/2006/262',
      kind: 'official',
    },
    {
      title: 'MPSV – Změny pracovního poměru',
      url: 'https://ppropo.mpsv.cz/VZmenapracovnihopomeru',
      kind: 'official',
    },
    {
      title: 'MPSV – Zákoník práce v aktuálním znění',
      url: 'https://ppropo.mpsv.cz/zakon_262_2006',
      kind: 'official',
    },
    {
      title: 'MPSV – Cestovní náhrady',
      url: 'https://ppropo.mpsv.cz/VIIICestovninahrady',
      kind: 'official',
    },
  ],
})
