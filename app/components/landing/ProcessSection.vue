<script setup lang="ts">
defineProps<{
  title: string;
  steps: string[];
}>();
</script>

<template>
  <section class="py-16 sm:py-20">
    <SectionContainer>
      <div class="flex items-start justify-between gap-10 flex-col md:flex-row">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
          {{ title }}
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div
          v-for="(step, idx) in steps"
          :key="step"
          class="rounded-2xl border border-primary-light/20 bg-white/45 backdrop-blur p-6 shadow-soft"
        >
          <div class="flex items-center justify-between gap-4">
            <div class="text-sm font-semibold text-text/70">
              Krok {{ idx + 1 }}
            </div>
            <div
              class="w-10 h-10 rounded-xl bg-primary-light/30 border border-primary-light/30 flex items-center justify-center"
            >
              <span class="text-primary-dark font-bold">{{ idx + 1 }}</span>
            </div>
          </div>
          <div class="mt-4 font-semibold text-text text-lg leading-snug">
            {{ step }}
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
