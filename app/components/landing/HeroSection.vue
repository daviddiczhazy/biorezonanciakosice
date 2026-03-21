<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
    primaryCta: string;
    primaryTo: string;
    secondaryCta: string;
    secondaryTo: string;
    /** Cesta pod `/public`, napr. `/img/heroImage.jpg` */
    imageSrc?: string;
    imageAlt?: string;
  }>(),
  {
    imageSrc: "/img/heroImage.jpg",
    imageAlt:
      "Pokojný moderný priestor vhodný na konzultáciu, prirodzené svetlo a neutrálne farby",
  }
);
</script>

<template>
  <section class="relative">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] rounded-full bg-primary-light/30 blur-3xl"
    />

    <SectionContainer>
      <div class="grid gap-12 items-center py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <h1
            class="text-4xl sm:text-5xl font-bold tracking-tight text-text leading-[1.05]"
          >
            {{ title }}
          </h1>
          <p
            class="mt-5 text-base sm:text-lg text-text/80 leading-relaxed max-w-xl"
          >
            {{ subtitle }}
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <BaseButton :to="primaryTo" variant="primary" size="lg">
              {{ primaryCta }}
            </BaseButton>
            <BaseButton
              :to="secondaryTo"
              variant="ghost"
              size="lg"
              rounded="xl"
            >
              {{ secondaryCta }}
            </BaseButton>
          </div>

          <div class="mt-10 text-sm text-text/60 leading-relaxed max-w-lg">
            Jemný wellness prístup, profesionálna komunikácia a priestor na
            otázky.
          </div>
        </div>

        <div class="relative">
          <div
            class="relative rounded-3xl sm:rounded-[2rem] border border-primary-light/20 shadow-soft overflow-hidden bg-primary-light/10"
          >
            <div
              class="relative aspect-[40/41] sm:aspect-[125/123] lg:aspect-[40/41] w-full"
            >
              <img
                :src="imageSrc"
                :alt="imageAlt"
                class="absolute left-0 -bottom-8 w-full max-w-none"
                loading="eager"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-text/35 via-text/5 to-primary-light/20"
                aria-hidden="true"
              />
              <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div
                  class="rounded-2xl bg-white/75 backdrop-blur-md border border-primary-light/25 p-5 shadow-soft"
                >
                  <div class="text-sm font-semibold text-text/85">
                    Pokojná konzultácia
                  </div>
                  <p class="mt-2 text-sm text-text/65 leading-relaxed">
                    Moderné, čisté prostredie s dôrazom na komfort a
                    individuálny prístup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary-light/25 blur-xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
