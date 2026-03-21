<script setup lang="ts">
defineProps<{
  title: string;
  steps: string[];
}>();
</script>

<template>
  <section class="relative py-16 sm:py-20 overflow-hidden">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-full max-w-xl bg-gradient-to-r from-primary/[0.07] to-transparent rounded-r-[3rem] sm:rounded-r-[4rem]"
      aria-hidden="true"
    />
    <SectionContainer class="relative">
      <div class="max-w-2xl">
        <p
          class="text-sm font-semibold tracking-wide text-primary-dark/85 uppercase"
        >
          Postup
        </p>
        <h2
          class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-text leading-tight"
        >
          {{ title }}
        </h2>
        <p class="mt-4 text-base text-text/70 leading-relaxed">
          Od prvého kontaktu až po odporúčania — priebeh je pokojný a
          predvídateľný.
        </p>
      </div>

      <!-- Do lg: vertikálna časová os (na tablete je 4 kroky v rade príliš tesné) -->
      <ol
        class="mt-12 lg:hidden relative pl-1 border-l-2 border-primary/25 space-y-0"
      >
        <li
          v-for="(step, idx) in steps"
          :key="step"
          class="relative pb-10 pl-8 last:pb-0"
        >
          <span
            class="absolute left-0 top-1 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm"
            aria-hidden="true"
          />
          <span
            class="text-xs font-semibold uppercase tracking-wide text-primary-dark/80"
          >
            Krok {{ idx + 1 }}
          </span>
          <p class="mt-1.5 text-lg font-semibold text-text leading-snug">
            {{ step }}
          </p>
        </li>
      </ol>

      <!-- Od lg: horizontálna os so spojovacími čiarami -->
      <ol
        class="mt-14 hidden lg:flex w-full items-start gap-0"
        aria-label="Kroky stretnutia"
      >
        <li
          v-for="(step, idx) in steps"
          :key="step"
          class="flex flex-1 min-w-0 flex-col items-center"
        >
          <div class="flex w-full items-center">
            <div
              class="h-0.5 flex-1 min-w-2 rounded-full transition-colors"
              :class="idx === 0 ? 'bg-transparent' : 'bg-primary-light/70'"
              aria-hidden="true"
            />
            <div
              class="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary-dark shadow-sm ring-4 ring-background"
            >
              {{ idx + 1 }}
            </div>
            <div
              class="h-0.5 flex-1 min-w-2 rounded-full transition-colors"
              :class="
                idx === steps.length - 1
                  ? 'bg-transparent'
                  : 'bg-primary-light/70'
              "
              aria-hidden="true"
            />
          </div>
          <p
            class="mt-5 max-w-[11rem] text-center text-[0.9375rem] font-semibold leading-snug text-text sm:max-w-[13rem] sm:text-base"
          >
            {{ step }}
          </p>
        </li>
      </ol>
    </SectionContainer>
  </section>
</template>
