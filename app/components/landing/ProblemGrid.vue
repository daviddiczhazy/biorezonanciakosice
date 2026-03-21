<script setup lang="ts">
defineProps<{
  title: string;
  items: string[];
}>();
</script>

<template>
  <section class="py-16 sm:py-20">
    <SectionContainer>
      <div class="flex items-end justify-between gap-6 flex-col md:flex-row">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
          {{ title }}
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <BaseCard
          v-for="(item, idx) in items"
          :key="item"
          class="transition-transform hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-2xl border border-primary-light/30 bg-white/55 shadow-soft flex items-center justify-center"
                :class="
                  idx % 2 === 0 ? 'text-primary-dark' : 'text-primary-dark'
                "
              >
                <span class="text-2xl" aria-hidden="true">✦</span>
              </div>
              <div class="font-semibold text-text text-lg">{{ item }}</div>
            </div>
          </div>
        </BaseCard>
      </div>
    </SectionContainer>
  </section>
</template>
