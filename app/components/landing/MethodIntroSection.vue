<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    bullets: string[];
    ctaLabel: string;
    ctaTo: string;
    imageSrc?: string;
    imageAlt?: string;
  }>(),
  {
    imageSrc: "/img/Biorezonancia-pr.jpg",
    imageAlt: "Biorezonancia – zariadenie a pokojné prostredie konzultácie",
  }
);
</script>

<template>
  <section class="py-16 sm:py-20">
    <SectionContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
            {{ title }}
          </h2>

          <ul class="mt-5 space-y-2 text-text/80 leading-relaxed">
            <li v-for="b in bullets" :key="b" class="flex gap-3">
              <span
                class="mt-0.5 w-6 h-6 rounded-xl bg-primary-light/35 border border-primary-light/35 flex items-center justify-center text-primary-dark font-bold"
              >
                ✓
              </span>
              <span>{{ b }}</span>
            </li>
          </ul>

          <div class="mt-8">
            <BaseButton :to="ctaTo" variant="secondary" size="lg" rounded="xl">
              {{ ctaLabel }}
            </BaseButton>
          </div>
        </div>

        <div class="relative">
          <div
            class="relative mx-auto aspect-square w-4/5 rounded-3xl sm:rounded-[2rem] border border-primary-light/20 shadow-soft overflow-hidden bg-primary-light/10"
          >
            <img
              :src="imageSrc"
              :alt="imageAlt"
              class="absolute inset-0 block w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-light/15 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
