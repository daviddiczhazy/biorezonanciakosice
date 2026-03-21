<script setup lang="ts">
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

const faqItems = [
  {
    q: "Čo je biorezonancia?",
    a: "Odpovieme stručne a zrozumiteľne – podľa vašich potrieb.",
  },
  {
    q: "Je sedenie bolestivé?",
    a: "Nie. Ide o neinvazívny prístup, v ktorom sa cítite bezpečne.",
  },
  {
    q: "Ako dlho trvá jedno stretnutie?",
    a: "Na prvé stretnutie si zvyčajne vyhradíme dostatok času na rozhovor.",
  },
  {
    q: "Koľko stretnutí býva potrebných?",
    a: "Záleží od vašej situácie. Spolu nastavíme ďalší postup.",
  },
  {
    q: "Je biorezonancia vhodná aj pre deti?",
    a: "Individuálne posúdime, či je to pre vás vhodné.",
  },
  {
    q: "Ako prebieha prvá návšteva?",
    a: "Začneme úvodným rozhovorom a následne prejdeme samotným sedením.",
  },
];
</script>

<template>
  <div>
    <PageHeader
      title="Informácie"
      subtitle="Všetko dôležité, čo potrebujete vedieť pred prvým stretnutím – v pokojnom a zrozumiteľnom štýle."
    />

    <MethodIntroSection
      title="Čo je biorezonancia?"
      :bullets="methodBullets"
      ctaLabel="Kontaktovať nás"
      ctaTo="/kontakt#kontakt-form"
    />

    <ProcessSection title="Ako prebieha sedenie" :steps="processSteps" />

    <section class="py-16 sm:py-20">
      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
          Pre koho môže byť zaujímavá
        </h2>
        <p class="mt-6 max-w-2xl text-text/70 leading-relaxed">
          Ak hľadáte individuálny prístup a chcete sa lepšie zorientovať vo
          svojich ťažkostiach, radi s vami prejdeme aj to, či je tento typ
          konzultácie pre vás dobrý prvý krok.
        </p>
      </div>
    </section>

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
