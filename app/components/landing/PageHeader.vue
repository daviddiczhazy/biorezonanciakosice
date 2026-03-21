<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <section class="py-14 sm:py-18">
    <div
      class="bg-gradient-to-b from-primary-light/15 via-transparent to-transparent"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 py-2">
        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="mt-4 max-w-2xl text-text/70 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
