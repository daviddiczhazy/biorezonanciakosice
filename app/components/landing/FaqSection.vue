<script setup lang="ts">
defineProps<{
  title: string;
  items: { q: string; a: string }[];
}>();
</script>

<template>
  <section class="py-16 sm:py-20">
    <SectionContainer>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ title }}
      </h2>

      <div class="mt-8">
        <BaseAccordion
          :items="
            items.map((i, idx) => ({
              id: String(idx),
              title: i.q,
              content: i.a,
            }))
          "
        />
      </div>
    </SectionContainer>
  </section>
</template>
