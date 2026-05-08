<script setup lang="ts">
withDefaults(
  defineProps<{
    badge?: string;
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    buttonTo?: string;
  }>(),
  {
    badge: "Antinikotínová terapia",
    title: "Prestaňte fajčiť",
    subtitle:
      "Biorezonančná antinikotínová terapia je zameraná na elimináciu signálu „nikotínového hladu“, aby sa potlačila chuť na cigaretu a abstinenčná reakcia.",
    buttonLabel: "Objednať terapiu",
    buttonTo: "/kontakt#kontakt-form",
  }
);
</script>

<template>
  <section class="relative min-h-[64vh] overflow-hidden">
    <img
      src="/img/antinikotinova-hero.png"
      alt="Zlomená cigareta medzi rukami ako symbol odvykania od fajčenia"
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 bg-text/45" aria-hidden="true" />

    <SectionContainer class="relative flex min-h-[64vh] items-center py-16">
      <div class="max-w-3xl">
        <p
          class="inline-flex rounded-full border border-white/45 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white/95"
        >
          {{ badge }}
        </p>
        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.08]"
        >
          {{ title }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          {{ subtitle }}
        </p>
        <div class="mt-9">
          <NuxtLink
            :to="buttonTo"
            class="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            {{ buttonLabel }}
          </NuxtLink>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
