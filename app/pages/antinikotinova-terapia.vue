<script setup lang="ts">
useSeoMeta({
  title: "Antinikotínová terapia",
  description:
    "Antinikotínová biorezonančná terapia: priebeh sedenia, odporúčania pred a po terapii, dĺžka a cena.",
  ogTitle: "Antinikotínová terapia",
  ogDescription:
    "Prestaňte fajčiť s podporou antinikotínovej biorezonančnej terapie. Zistite, ako terapia prebieha a čo dodržať pre lepší výsledok.",
});

const methodBenefits = [
  "bezbolestná",
  "bez vedľajších účinkov",
  "vhodná pre každého fajčiara, ktorý je rozhodnutý prestať fajčiť",
  "podľa podkladov dosahuje približne 90% úspešnosť",
] as const;

const preparationRules = [
  "Pred terapiou si klient zafajčí poslednú cigaretu.",
  "Zvyšok nedofajčenej cigarety s popolom sa použije počas terapie.",
  "Pred terapiou sa neodporúča znižovať počet cigariet.",
  "Deň pred terapiou a v deň terapie sa nesmie piť alkohol.",
  "V deň terapie sa neodporúča káva, čierny čaj ani iné kofeínové nápoje.",
] as const;

const postTherapyRules = [
  "Odstrániť cigarety, popolníky a zapaľovače.",
  "Piť aspoň 2 litre vody denne pre podporu vylučovania toxických látok.",
] as const;
</script>

<template>
  <div>
    <AntiSmokingHeroBanner />

    <section class="border-t border-primary-light/15 py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Ako terapia funguje
        </h2>
        <div class="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-text/75">
          <p>
            Po ukončení fajčenia sa často objavuje takzvaný „nikotínový hlad“.
            Telo volá po nikotíne, čo spúšťa silnú chuť na cigaretu.
          </p>
          <p>
            Cieľom antinikotínovej biorezonančnej metódy je tento signál
            eliminovať. Vďaka vzorke nikotínu a zvoleným programom dochádza k
            odrušeniu signálu, ktorý „nikotínový hlad“ vyvoláva, a tým sa
            zmierňuje aj abstinenčná reakcia.
          </p>
        </div>
      </SectionContainer>
    </section>

    <section class="bg-gradient-to-b from-primary-light/12 to-transparent py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Charakteristika metódy
        </h2>
        <ul
          class="mt-8 max-w-3xl list-disc space-y-2.5 pl-6 text-lg leading-relaxed text-text/80 marker:text-primary"
        >
          <li v-for="item in methodBenefits" :key="item">
            {{ item }}
          </li>
        </ul>
      </SectionContainer>
    </section>

    <section class="border-t border-primary-light/15 py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Priebeh terapie
        </h2>
        <ul
          class="mt-8 max-w-3xl list-disc space-y-2.5 pl-6 text-lg leading-relaxed text-text/80 marker:text-primary"
        >
          <li v-for="item in preparationRules" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="mt-8 max-w-3xl text-lg leading-relaxed text-text/75">
          Aj keď má metóda vysokú úspešnosť, je dôležité ju podporiť následnou
          disciplínou a zodpovednosťou. Terapia neodstraňuje návyky typu káva –
          cigareta, pivo – cigareta alebo cigareta po jedle.
        </p>
      </SectionContainer>
    </section>

    <section class="border-t border-primary-light/15 py-14 sm:py-18">
      <SectionContainer>
        <h2 class="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Odporúčania po terapii
        </h2>
        <ul
          class="mt-8 max-w-3xl list-disc space-y-2.5 pl-6 text-lg leading-relaxed text-text/80 marker:text-primary"
        >
          <li v-for="item in postTherapyRules" :key="item">
            {{ item }}
          </li>
        </ul>
      </SectionContainer>
    </section>

    <section class="border-t border-primary-light/15 py-14 sm:py-18">
      <SectionContainer>
        <div class="grid gap-6 sm:grid-cols-2 max-w-3xl">
          <article class="rounded-3xl border border-primary-light/25 bg-white/70 p-7">
            <h3 class="text-base font-semibold uppercase tracking-wide text-primary-dark/85">
              Dĺžka terapie
            </h3>
            <p class="mt-3 text-2xl font-bold text-text">90 – 120 minút</p>
          </article>
          <article class="rounded-3xl border border-primary-light/25 bg-white/70 p-7">
            <h3 class="text-base font-semibold uppercase tracking-wide text-primary-dark/85">
              Cena
            </h3>
            <p class="mt-3 text-2xl font-bold text-text">70 EUR</p>
          </article>
        </div>
      </SectionContainer>
    </section>

    <CtaSection
      title="Chcete prestať fajčiť a objednať sa na terapiu?"
      subtitle="Napíšte nám alebo zavolajte. Radi vám vysvetlíme priebeh a dohodneme termín antinikotínovej terapie."
      primaryCta="Objednať terapiu"
      primaryTo="/kontakt#kontakt-form"
    />
  </div>
</template>
