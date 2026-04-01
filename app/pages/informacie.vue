<script setup lang="ts">
useSeoMeta({
  title: "Informácie o biorezonancii",
  description:
    "Zistite viac o biorezonancii, jej princípe, priebehu stretnutia a prístrojovom prístupe. Prehľadné informácie v zrozumiteľnej slovenčine.",
  ogTitle: "Informácie o biorezonancii",
  ogDescription:
    "Zistite viac o biorezonancii, jej princípe, priebehu stretnutia a prístrojovom prístupe. Prehľadné informácie v zrozumiteľnej slovenčine.",
});

/** Sekcia „Pre koho je biorezonancia“ — zoznam tém. */
const biorezonanciaProblems = [
  "Eliminácia geopatogénnych zón a elektrosmogu, ochrana pred radiačnou záťažou (mobilné telefóny, WiFi, 5G siete, röntgenové žiarenie)",
  "Poruchy imunitného systému – oslabená imunita",
  "Alergie",
  "Únava, chronický únavový syndróm",
  "Bolesti svalov, kĺbov, hlavy",
  "Psychická nerovnováha, úzkosť, depresia, strachy",
  "Stavy spojené s menopauzou, menštruačné problémy – bolestivá menštruácia, PMS",
  "Hormonálne rozvrátenie, návaly tepla, studené končatiny",
  "Poruchy metabolizmu – cukrovka, vysoký cholesterol, zvýšená hladina kyseliny močovej",
  "Zaťaženie vnútorných orgánov – pečeň, žlčník, obličky, pankreas, žalúdok, pľúca, srdce, lymfa, črevá",
  "Eliminácia patogénov – vírusov (vrátane herpetických, EBV), baktérií (vrátane borélií, mykoplazmy, chlamídií), kvasiniek, plesní, parazitov",
  "Detoxikácia a harmonizácia organizmu",
  "Prevencia a rekonvalescencia po chorobe, operáciách",
  "Vyvedenie záťaží toxických metabolitov pre lepšiu znášanlivosť chemoterapie a rádioterapie",
  "Závislosť na cigaretách, tabakových výrobkoch, alkohole, sladkostiach",
  "Ochorenia zubov a ďasien",
  "Chudnutie",
  "Poúrazové stavy",
] as const;
</script>

<template>
  <div>
    <!-- 1 — Hero / úvod -->
    <section class="relative overflow-hidden py-16 sm:py-20">
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-full max-w-xl bg-gradient-to-l from-primary/[0.08] to-transparent rounded-l-[3rem] sm:rounded-l-[4rem]"
        aria-hidden="true"
      />
      <SectionContainer class="relative">
        <p
          class="text-base font-semibold tracking-wide text-primary-dark/85 uppercase"
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
          <strong class="font-semibold text-text"
            >Biorezonancia je neinvazívna diagnostická a terapeutická
            metóda</strong
          >
          — v praxi ju realizujeme pomocou prístroja
          <strong class="font-semibold text-text"
            >Bicom Optima 2. generácie</strong
          >. Prístup je bezbolestný, bez použitia chemických liekov a s dôrazom
          na harmonizáciu organizmu, detoxikáciu a podporu jeho prirodzených
          samoregulačných mechanizmov. Podrobnejší opis princípu, prístroja aj
          súvislostí s tradičnou čínskou medicínou nájdete v sekciách nižšie.
        </p>
        <p class="mt-5 max-w-3xl text-lg text-text/70 leading-relaxed">
          Tu nájdete, ako biorezonancia funguje v princípe aj pri konzultácii,
          čo môžete očakávať od
          <strong class="font-semibold text-text/80">prvého stretnutia</strong>
          a pri akých ťažkostiach s ňou
          <strong class="font-semibold text-text/80">vieme pomôcť</strong>.
          Vysvetľujeme to pokojne a zrozumiteľne — aj v širšom odbornom kontexte
          — aby ste sa mohli rozhodnúť s prehľadom.
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
          Čo je biorezonancia a ako pracuje biorezonančný prístroj?
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-lg text-text/75 leading-relaxed"
        >
          <p>
            Biorezonancia je neinvazívna, diagnostická a terapeutická metóda. Je
            vykonávaná pomocou prístroja Bicom Optima 2. generácie. Základy
            tejto terapie vychádzajú z poznatkov kvantovej fyziky t.j. faktu, že
            všetky bunky v živom organizme spolu komunikujú za pomoci vysielania
            elektromagnetických vĺn. Tieto vlnenia majú u človeka v harmonickom
            stave inú štruktúru ako u človeka s telesnými alebo psychickými
            záťažami.
          </p>
          <p>
            Pokiaľ je komunikácia medzi bunkami narušená napr. patogénmi ako sú
            vírusy, baktérie, kvasinky, parazity alebo chemickými látkami,
            elektrosmogom, ťažkými kovmi, stresom, alergénmi dochádza k rozvoju
            zdravotných problémov. Prístroj Bicom tieto elektromagnetické vlny
            /frekvencie/ zachytí z tela klienta cez elektródy za pomoci
            špecifických testovacích látok, ampúl alebo digitalizovaných
            databáz. Následne ich spracuje, upraví a pošle späť do tela ako
            „terapeutický signál“.
          </p>
          <p>
            Týmto postupom dochádza k detoxikácii organizmu, k harmonizácii, k
            úprave samoregulačných mechanizmov organizmu a k celkovému
            ozdraveniu tela. Prístroj je kombináciou moderných technológií s
            prvkami tradičnej čínskej medicíny. Pre klienta je podstatné, že ide
            o neinvazívnu, bezbolestnú metódu, bez použitia chemických liekov.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- 3 — Prístroje a postupy (referenčný kontext) -->
    <section
      class="py-14 sm:py-18 border-t border-primary-light/15 bg-white/30"
    >
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Prístroje a používané postupy
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-lg text-text/75 leading-relaxed"
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
          Ako prebieha prvé stretnutie
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-lg text-text/75 leading-relaxed"
        >
          <p>
            <strong class="font-semibold text-text">Pri prvom stretnutí</strong>
            sa porozprávame o Vašich zdravotných problémoch a súvislostiach,
            ktoré by mohli Vaše zdravotné problémy vyvolávať, o prekonaných
            infekciách, operáciách, stave chrupu a pod.
          </p>
          <p>
            <strong class="font-semibold text-text">Ďalší postup:</strong>
          </p>
          <ul class="list-disc pl-6 space-y-2 marker:text-primary text-text/75">
            <li>Odblokovanie stresu a napätia, aby došlo k Vášmu uvoľneniu;</li>
            <li>
              Odstránenie blokád jazvami, elektrosmogom, geopatogénnymi zónami;
            </li>
            <li>Ďalším krokom je podpora detoxikačných orgánov;</li>
            <li>
              Testovanie, ktorý orgán, systém alebo dráha sú vo Vašom tele
              energeticky oslabené;
            </li>
            <li>
              Testovanie záťaží (vírusy, baktérie, kvasinky, parazity, alergény,
              ťažké kovy atď.).
            </li>
          </ul>
          <p>
            Na základe rozhovoru a testovania sa navrhne ďalší postup, odporučí
            sa úprava stravovania.
          </p>
        </div>
      </SectionContainer>
    </section>

    <!-- 5 — Pre koho (indikácie) -->
    <section
      class="py-14 sm:py-18 bg-gradient-to-b from-primary-light/12 to-transparent"
    >
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Pre koho je biorezonancia
        </h2>
        <p class="mt-6 max-w-3xl text-lg text-text/75 leading-relaxed">
          <strong class="font-semibold text-text">Pomocou biorezonancie</strong>
          pomáhame riešiť nasledujúce problémy:
        </p>
        <ul
          class="mt-6 max-w-3xl space-y-2.5 text-lg text-text/80 leading-relaxed list-disc pl-6 marker:text-primary"
        >
          <li v-for="item in biorezonanciaProblems" :key="item">
            {{ item }}
          </li>
        </ul>
      </SectionContainer>
    </section>

    <!-- 6 — Štúdie a podklady -->
    <section class="py-14 sm:py-18 border-t border-primary-light/15">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Odborné podklady a dostupné štúdie
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-lg text-text/75 leading-relaxed"
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

    <!-- 7 — Prečo ľudia vyhľadávajú -->
    <section class="py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Prečo ľudia vyhľadávajú biorezonanciu
        </h2>
        <div
          class="mt-8 max-w-3xl space-y-5 text-lg text-text/75 leading-relaxed"
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
      larger-subtitle
      title="Máte otázky alebo si chcete dohodnúť konzultáciu?"
      subtitle="Radi vám vysvetlíme priebeh prvého stretnutia, odpovieme na vaše otázky a pomôžeme vám zistiť, či je tento prístup vhodný práve pre vás. Ak hľadáte pokojný, individuálny a zrozumiteľný prístup, prvá konzultácia môže byť dobrým začiatkom."
      primaryCta="Dohodnúť si konzultáciu"
      primaryTo="/kontakt"
      secondaryCta="Prejsť na kontakt"
      secondaryTo="/kontakt"
    />
  </div>
</template>
