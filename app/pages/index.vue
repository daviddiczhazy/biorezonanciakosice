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
  "Individuálny prístup",
  "Pokojné a diskrétne prostredie",
  "Priestor na otázky",
  "Dôraz na komfort a zrozumiteľnosť",
];

const faqItems = [
  {
    q: "Čo je biorezonancia?",
    a: "Doplňte odpoveď (upresníme pri konzultácii).",
  },
  {
    q: "Je sedenie bolestivé?",
    a: "Doplňte odpoveď (upresníme pri konzultácii).",
  },
  {
    q: "Ako dlho trvá jedno stretnutie?",
    a: "Doplňte odpoveď (upresníme pri konzultácii).",
  },
  {
    q: "Koľko stretnutí býva potrebných?",
    a: "Doplňte odpoveď (upresníme pri konzultácii).",
  },
  {
    q: "Je biorezonancia vhodná aj pre deti?",
    a: "Doplňte odpoveď (upresníme pri konzultácii).",
  },
  {
    q: "Ako prebieha prvá návšteva?",
    a: "Doplňte odpoveď (upresníme pri konzultácii).",
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
