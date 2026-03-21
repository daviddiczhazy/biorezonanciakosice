<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    bullets: string[];
    ctaLabel: string;
    ctaTo: string;
  }>(),
  {}
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
          <BaseCard class="p-6 sm:p-8 overflow-hidden">
            <div
              class="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-primary-light/25 blur-2xl"
              aria-hidden="true"
            />
            <div class="relative">
              <div class="text-sm font-semibold text-text/80">
                Jemný wellness vizuál
              </div>
              <div
                class="mt-4 rounded-3xl border border-primary-light/20 bg-white/45 p-6"
              >
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-dark/70" />
                  <div class="w-3 h-3 rounded-full bg-primary-light/90" />
                  <div class="w-3 h-3 rounded-full bg-primary-dark/50" />
                </div>
                <div class="mt-4 space-y-4">
                  <div class="h-2 rounded-full bg-primary-light/25" />
                  <div class="h-2 rounded-full bg-primary-light/35" />
                  <div class="h-2 rounded-full bg-primary-light/20" />
                </div>

                <svg
                  class="mt-6 w-full"
                  viewBox="0 0 520 180"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                      <stop
                        offset="0"
                        stop-color="#4CC8B2"
                        stop-opacity="0.45"
                      />
                      <stop
                        offset="0.5"
                        stop-color="#1F8F7B"
                        stop-opacity="0.25"
                      />
                      <stop
                        offset="1"
                        stop-color="#BFEFE4"
                        stop-opacity="0.35"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 95 C 60 50, 130 140, 190 95 S 320 50, 380 95 S 470 140, 520 95"
                    stroke="url(#g)"
                    stroke-width="6"
                    fill="none"
                    stroke-linecap="round"
                  />
                  <path
                    d="M0 120 C 70 75, 130 155, 210 120 S 330 75, 400 120 S 480 155, 520 120"
                    stroke="url(#g)"
                    stroke-width="4"
                    fill="none"
                    stroke-linecap="round"
                    opacity="0.7"
                  />
                  <circle
                    cx="410"
                    cy="64"
                    r="10"
                    fill="#4CC8B2"
                    fill-opacity="0.25"
                  />
                  <circle
                    cx="108"
                    cy="146"
                    r="8"
                    fill="#BFEFE4"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
