<script setup lang="ts">
defineProps<{
  title: string;
  benefits: string[];
}>();
</script>

<template>
  <section class="py-16 sm:py-20">
    <SectionContainer>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ title }}
      </h2>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(benefit, idx) in benefits"
          :key="benefit"
          class="rounded-2xl border border-primary-light/20 bg-white/45 backdrop-blur p-6 shadow-soft transition-transform hover:-translate-y-1"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-2xl border border-primary-light/30 bg-primary-light/20 flex items-center justify-center"
            >
              <span class="text-primary-dark font-bold" aria-hidden="true">
                {{ idx + 1 }}
              </span>
            </div>
            <div class="font-semibold text-text text-lg leading-snug">
              {{ benefit }}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
