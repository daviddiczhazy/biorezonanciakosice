<script setup lang="ts">
const problemItems = [
  "Dlhodobá únava",
  "Stres a vyčerpanie",
  "Opakované ťažkosti",
  "Potreba celostného pohľadu",
  "Záujem o doplnkový prístup",
  "Hľadanie individuálnej konzultácie",
];

const methodBullets = [
  "neinvazívna metóda",
  "individuálny a komplexný prístup",
  "zrozumiteľná formulácia pre laika",
];

const processSteps = [
  "Kontakt a dohodnutie termínu",
  "Úvodný rozhovor",
  "Samotné sedenie",
  "Odporúčanie ďalšieho postupu",
];

const benefits = [
  {
    title: "Individuálny prístup",
    description:
      "Každý človek je iný. Zohľadníme váš kontext a tempo — nič univerzálneho, riešenie prispôsobíme vašej situácii.",
  },
  {
    title: "Pokojné a diskrétne prostredie",
    description:
      "Priestor bez zhonu, kde sa môžete uvoľniť. Čo povieme medzi štyrmi očami, ostane medzi nami.",
  },
  {
    title: "Priestor na otázky",
    description:
      "Nič nie je hlúpa otázka. Vysvetlíme, čo robíme, prečo to dáva zmysel a čo môžete očakávať.",
  },
  {
    title: "Dôraz na komfort a zrozumiteľnosť",
    description:
      "Bez zbytočnej odbornosti — jazykom, ktorému rozumiete. Ide o to, aby ste sa počas celého procesu cítili v pohode.",
  },
];

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
];
</script>

<template>
  <div>
    <HeroSection
      title="Hľadáte iný prístup, keď bežné riešenia nestačia?"
      subtitle="Biorezonancia ponúka neinvazívny a individuálny prístup, ktorý môže pomôcť lepšie porozumieť vášmu organizmu a jeho rovnováhe."
      primaryCta="Dohodnúť si konzultáciu"
      primaryTo="/kontakt"
      secondaryCta="Viac informácií"
      secondaryTo="/informacie"
    />

    <ProblemGrid
      title="Kedy ľudia najčastejšie hľadajú doplnkový prístup?"
      :items="problemItems"
    />

    <MethodIntroSection
      title="Čo je biorezonancia?"
      :bullets="methodBullets"
      ctaLabel="Viac informácií o metóde"
      ctaTo="/informacie"
    />

    <ProcessSection
      title="Ako prebieha prvé stretnutie"
      :steps="processSteps"
    />

    <BenefitsSection title="Prečo si vybrať nás" :benefits="benefits" />

    <FaqSection title="FAQ" :items="faqItems" />

    <CtaSection
      title="Máte otázky alebo si chcete dohodnúť termín?"
      subtitle="Ozvite sa a radi vám vysvetlíme, ako prebieha prvé stretnutie a či je tento prístup vhodný aj pre vás."
      primaryCta="Kontaktovať nás"
      primaryTo="/kontakt#kontakt-form"
      secondaryCta="Dohodnúť si konzultáciu"
      secondaryTo="/kontakt"
    />
  </div>
</template>
