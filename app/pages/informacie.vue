<script setup lang="ts">
useSeoMeta({
  title: "Informácie o biorezonancii",
  description:
    "Zistite viac o biorezonancii, jej princípe, priebehu stretnutia a prístrojovom prístupe. Prehľadné informácie v zrozumiteľnej slovenčine.",
  ogTitle: "Informácie o biorezonancii",
  ogDescription:
    "Zistite viac o biorezonancii, jej princípe, priebehu stretnutia a prístrojovom prístupe. Prehľadné informácie v zrozumiteľnej slovenčine.",
});

const forWhoBullets = [
  "pre ľudí, ktorí majú záujem o neinvazívny prístup",
  "pre tých, ktorí preferujú individuálnu konzultáciu",
  "pre ľudí, ktorí chcú lepšie porozumieť reakciám svojho tela",
  "pre tých, ktorí hľadajú doplnkový pohľad popri bežnej starostlivosti",
  "pre ľudí, ktorým vyhovuje celostný a pokojný prístup",
] as const;

const faqItems = [
  {
    q: "Čo je biorezonancia?",
    a: "Biorezonancia je neinvazívna metóda, ktorá je opisovaná ako práca s frekvenčnými vzormi organizmu a s individuálnym, celostným prístupom. Je prezentovaná ako doplnkový prístup, ktorý sa snaží podporiť prirodzenú rovnováhu organizmu.",
  },
  {
    q: "Na akom princípe funguje?",
    a: "Referenčné materiály ju opisujú cez biofyzikálny princíp a prácu s elektromagnetickými frekvenčnými vzormi. Biorezonančný prístroj sleduje reakciu organizmu na určité frekvenčné podnety a podľa toho sa nastavuje ďalší postup.",
  },
  {
    q: "Ako prebieha prvá návšteva?",
    a: "Prvá návšteva zvyčajne zahŕňa úvodný rozhovor, vysvetlenie priebehu, samotné sedenie a následné odporúčanie ďalšieho postupu. Dôležitou súčasťou je priestor na otázky a pokojné vysvetlenie celej metódy.",
  },
  {
    q: "Je stretnutie bolestivé?",
    a: "Biorezonancia sa bežne opisuje ako neinvazívny prístup. Samotné stretnutie býva vedené pokojne a bez invazívnych zásahov.",
  },
  {
    q: "Ako dlho trvá jedno stretnutie?",
    a: "Dĺžka stretnutia sa môže líšiť podľa konkrétneho postupu a vašej situácie. Presnejšie informácie je najlepšie dohodnúť pri objednaní konzultácie.",
  },
  {
    q: "Je tento prístup vhodný pre každého?",
    a: "Vhodnosť je vždy individuálna. Najlepšie je posúdiť ju osobne podľa vašej konkrétnej situácie, očakávaní a priebehu úvodnej konzultácie.",
  },
  {
    q: "Existujú k biorezonancii aj štúdie?",
    a: "Na referenčných stránkach sú uvedené viaceré odborné podklady a publikované materiály. Medzi nimi je napríklad aj pilotná štúdia o odvykaní od fajčenia, ktorá uvádza pozitívne výsledky a absenciu klinicky pozorovaných vedľajších účinkov počas sledovania.",
  },
] as const;
</script>

<template>
  <div>
    <!-- SEKCIA 1 — HERO -->
    <section class="relative overflow-hidden py-16 sm:py-20">
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-full max-w-xl bg-gradient-to-l from-primary/[0.08] to-transparent rounded-l-[3rem] sm:rounded-l-[4rem]"
        aria-hidden="true"
      />
      <SectionContainer class="relative">
        <p
          class="text-sm font-semibold tracking-wide text-primary-dark/85 uppercase"
        >
          Viac o metóde
        </p>
        <h1
          class="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-text leading-[1.08]"
        >
          Informácie o biorezonancii
        </h1>
        <p
          class="mt-6 max-w-3xl text-lg sm:text-xl text-text/80 leading-relaxed"
        >
          Biorezonancia je neinvazívna metóda s individuálnym a celostným
          prístupom. Mnohí ľudia sa o ňu začnú zaujímať vo chvíli, keď hľadajú
          jemnejší, doplnkový pohľad na svoj organizmus a chcú lepšie porozumieť
          tomu, ako ich telo reaguje.
        </p>
        <p class="mt-5 max-w-3xl text-base text-text/70 leading-relaxed">
          Na tejto stránke nájdete prehľadné vysvetlenie toho, ako je
          biorezonancia popisovaná, na akom princípe pracuje, ako môže vyzerať
          prvé stretnutie a čo môžete od tejto metódy očakávať. Cieľom nie je
          zahltiť vás zložitou teóriou, ale podať informácie pokojne,
          zrozumiteľne a v širšom kontexte.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
          <BaseButton to="/kontakt" variant="primary" size="lg">
            Dohodnúť si konzultáciu
          </BaseButton>
          <BaseButton
            to="/kontakt#kontakt-form"
            variant="ghost"
            size="lg"
            rounded="xl"
          >
            Kontaktovať nás
          </BaseButton>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 2 -->
    <section class="py-14 sm:py-18 border-t border-primary-light/15">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Čo je biorezonancia?
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            Biorezonancia je opisovaná ako neinvazívna metóda, ktorá pristupuje
            k človeku komplexne. V odborných materiáloch býva zaraďovaná do
            oblasti regulačnej a informačnej medicíny a prezentuje sa ako
            doplnok ku klasickej medicíne. Referenčné texty ju vysvetľujú cez
            spojenie troch rovín života — hmoty, energie a informácie — pričom
            pri biorezonancii kladú najväčší dôraz práve na informačnú rovinu a
            tok informácií v organizme.
          </p>
          <p>
            Zjednodušene povedané, tento prístup pracuje s predstavou, že
            organizmus reaguje nielen na hmotné podnety, ale aj na špecifické
            elektromagnetické frekvenčné vzory. Biorezonancia sa preto snaží
            sledovať a využívať tieto reakcie tak, aby podporila harmonickejšie
            fungovanie organizmu a jeho prirodzenú regulačnú schopnosť.
          </p>
          <p>
            Pre bežného návštevníka je dôležité najmä to, že ide o jemný,
            prístrojový a individuálne nastavovaný prístup. Nejde o invazívny
            zákrok, ale o metódu, pri ktorej sa hľadí na človeka v širších
            súvislostiach a nie iba cez jeden izolovaný problém.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 3 -->
    <section
      class="py-14 sm:py-18 bg-gradient-to-b from-primary/[0.04] to-transparent"
    >
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Ako sa biorezonancia popisuje
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            Podľa referenčných materiálov je základom biorezonancie práca s
            elektromagnetickými interakciami a frekvenčnými vzormi, ktoré sú
            spájané s biologickými procesmi v organizme. Tieto materiály
            opisujú, že špecifické vlnové vzory môžu niesť určitú informáciu a
            že biorezonančný prístroj s nimi dokáže pracovať, modulovať ich a
            spätne ich využívať v prospech harmonizácie regulačných procesov.
          </p>
          <p>
            V praxi sa tento prístup prezentuje ako snaha podporiť prirodzenú
            sebareguláciu organizmu. V textoch sa opakovane objavuje myšlienka,
            že cieľom je napomôcť obnove rovnováhy, plynulejšej komunikácie v
            organizme a lepšiemu prístupu tela k vlastným regulačným
            mechanizmom.
          </p>
          <p>
            Zároveň sa biorezonancia opisuje ako vysoko individuálna metóda.
            Dôraz sa kladie na to, že reakcia každého človeka môže byť odlišná a
            že postup sa prispôsobuje konkrétnej situácii, aktuálnemu stavu a
            tomu, ako organizmus reaguje na testované frekvenčné vzory.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 4 -->
    <section class="py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Na akom princípe pracuje biorezonančný prístroj
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            Biorezonančný prístroj je v odborných podkladoch opisovaný ako
            zariadenie, ktoré komunikuje s organizmom prostredníctvom
            frekvenčných informácií. Pracuje s elektromagnetickými vzormi, ktoré
            sú buď získavané priamo z pacienta, alebo sa využívajú zo
            špecifických testovacích látok, ampúl či digitalizovaných databáz.
          </p>
          <p>
            Pri niektorých postupoch sa používajú elektródy priložené na koncové
            body energetických dráh. Referenčné materiály uvádzajú, že týmto
            spôsobom je možné sledovať reakciu organizmu na konkrétne testované
            podnety a vyhodnocovať, ktoré frekvenčné vzory s ním rezonujú. Ak sa
            frekvenčné vzory zhodujú, hovorí sa o rezonancii, ktorá sa následne
            využíva na nastavenie ďalšieho postupu.
          </p>
          <p>
            Z pohľadu klienta je podstatné najmä to, že ide o prístrojový a
            neinvazívny prístup. Na pozadí síce stojí pomerne komplexná teória,
            no samotné stretnutie býva vedené pokojne, zrozumiteľne a s dôrazom
            na individuálny priebeh.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 5 -->
    <section
      class="py-14 sm:py-18 border-t border-primary-light/15 bg-white/30"
    >
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Prístroje a používané postupy
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            Biorezonančná metóda je úzko spätá s používaním špecializovaných
            prístrojov. Referenčné materiály opisujú viaceré spôsoby práce — od
            testovania cez elektródy až po využívanie rôznych nosičov
            informácií, ako sú testovacie ampuly, nativné látky alebo digitálne
            uložené frekvenčné informácie.
          </p>
          <p>
            Tieto postupy majú podľa zdrojov umožniť individuálnejšie
            vyhodnotenie reakcie organizmu a následné nastavenie terapie alebo
            harmonizačného postupu. V materiáloch sa spomína aj možnosť
            kombinovať vstupné informácie z organizmu s elektronickou moduláciou
            v prístroji a ich spätným odovzdaním prostredníctvom výstupných
            prvkov, ako sú modulačné podložky alebo aplikátory.
          </p>
          <p>
            Pre návštevníka webu je dôležité vedieť, že nejde o „jedno tlačidlo
            pre všetkých“. Naopak, celý prístup je prezentovaný ako individuálne
            nastavovaný podľa aktuálnej reakcie organizmu a konkrétneho cieľa
            stretnutia.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 6 -->
    <section class="py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Ako môže prebiehať prvé stretnutie
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            Prvé stretnutie býva spravidla zamerané na úvodný rozhovor. Cieľom
            je lepšie pochopiť vašu situáciu, zodpovedať základné otázky a
            vysvetliť, ako samotné sedenie prebieha. Tento úvod je dôležitý
            najmä preto, aby ste presne vedeli, čo môžete očakávať a cítili sa
            počas celej návštevy komfortne.
          </p>
          <p>
            Nasleduje samotná práca s biorezonančným prístrojom. Presný priebeh
            môže byť individuálny podľa zvoleného postupu, typu testovania a
            toho, s čím človek prichádza. Vždy je však dôležité, aby bol celý
            proces vedený pokojne, zrozumiteľne a s priestorom na otázky.
          </p>
          <p>
            Na záver sa zvyčajne preberá ďalší postup. Môže ísť o odporúčanie
            pokračovania, vysvetlenie ďalších krokov alebo jednoduché zhrnutie
            toho, čo bolo počas stretnutia riešené. Pre mnohých ľudí je práve
            táto zrozumiteľnosť a individuálny prístup jedným z dôvodov, prečo
            ich biorezonancia osloví.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 7 -->
    <section
      class="py-14 sm:py-18 bg-gradient-to-b from-primary-light/12 to-transparent"
    >
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Pre koho môže byť biorezonancia zaujímavá
        </h2>
        <p class="mt-6 max-w-3xl text-base text-text/75 leading-relaxed">
          Biorezonancia môže byť zaujímavá najmä pre ľudí, ktorí hľadajú jemný a
          individuálny prístup a chcú sa na svoj organizmus pozrieť
          komplexnejšie.
        </p>
        <ul
          class="mt-8 max-w-3xl space-y-3 text-base text-text/80 leading-relaxed list-disc pl-6 marker:text-primary"
        >
          <li v-for="item in forWhoBullets" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="mt-8 max-w-3xl text-base text-text/75 leading-relaxed">
          Každý človek je však individuálny. Preto má najväčší zmysel posudzovať
          vhodnosť tejto metódy osobne, podľa konkrétnej situácie, očakávaní a
          priebehu úvodnej konzultácie.
        </p>
      </SectionContainer>
    </section>

    <!-- SEKCIA 8 -->
    <section class="py-14 sm:py-18 border-t border-primary-light/15">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Odborné podklady a dostupné štúdie
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            S biorezonanciou sa často spája aj otázka odborných podkladov,
            klinických pozorovaní a dostupných štúdií. Na referenčných stránkach
            sú zhromaždené viaceré odborné texty, opisné materiály a prehľady k
            rôznym oblastiam použitia, vrátane odvykania od fajčenia.
          </p>
          <p>
            Ako jeden z príkladov je uvádzaná pilotná štúdia zameraná na
            odvykanie od fajčenia. Podľa zhrnutia na referenčnej stránke autori
            dospeli k záveru, že biorezonančná terapia môže byť účinnou metódou
            odvykania od fajčenia a zároveň počas sledovania neboli klinicky
            pozorované vedľajšie účinky. Keďže však išlo o pilotnú štúdiu, je
            vhodné tieto výsledky vnímať ako jeden z odborných podkladov, nie
            ako jediný definitívny dôkaz.
          </p>
          <p>
            Pre človeka, ktorý sa o metódu zaujíma, je podstatné najmä to, že
            biorezonancia sa neprezentuje iba ako izolovaná idea, ale ako
            prístup, ku ktorému existujú odborné opisy, prístrojové metodiky a
            konkrétne publikované podklady. Ak vás zaujímajú detailnejšie
            informácie, je vhodné prejsť si ich osobne a zaradiť do širšieho
            kontextu.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 9 -->
    <section class="py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Prečo ľudia vyhľadávajú biorezonanciu
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-base text-text/75 leading-relaxed"
        >
          <p>
            Ľudia sa o biorezonanciu zaujímajú z rôznych dôvodov. Niekto hľadá
            doplnkový pohľad na svoj organizmus, iný chce pokojnejší a
            individuálnejší prístup, ďalší si potrebuje ujasniť, či existuje
            cesta, ktorá by lepšie zohľadnila širšie súvislosti jeho stavu.
          </p>
          <p>
            Pre mnohých je dôležitý aj samotný spôsob komunikácie. Biorezonancia
            býva vnímaná ako priestor, kde má človek možnosť pokojne sa
            porozprávať, dostať vysvetlenie, pýtať sa a nevnímať svoj problém
            iba cez jeden úzky pohľad.
          </p>
          <p>
            Práve preto tento prístup oslovuje ľudí, ktorí nechcú zostať iba pri
            povrchnom vysvetlení, ale hľadajú jemnejší, zrozumiteľný a
            individuálne vedený proces.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- SEKCIA 10 -->
    <CtaSection
      title="Máte otázky alebo si chcete dohodnúť konzultáciu?"
      subtitle="Radi vám vysvetlíme priebeh prvého stretnutia, odpovieme na vaše otázky a pomôžeme vám zistiť, či je tento prístup vhodný práve pre vás. Ak hľadáte pokojný, individuálny a zrozumiteľný prístup, prvá konzultácia môže byť dobrým začiatkom."
      primaryCta="Dohodnúť si konzultáciu"
      primaryTo="/kontakt"
      secondaryCta="Prejsť na kontakt"
      secondaryTo="/kontakt"
    />
  </div>
</template>
