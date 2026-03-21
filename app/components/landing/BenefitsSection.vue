<script setup lang="ts">
import { Armchair, BookOpen, MessageCircle, UserRound } from "lucide-vue-next";
import type { Component } from "vue";

defineProps<{
  title: string;
  benefits: { title: string; description: string }[];
}>();

const benefitIcons: Component[] = [
  UserRound,
  Armchair,
  MessageCircle,
  BookOpen,
];

const iconWrapClass = [
  "bg-primary-dark/10 text-primary-dark border-primary-dark/15",
  "bg-primary/10 text-primary-dark border-primary/20",
  "bg-primary-light/35 text-primary-dark border-primary-light/50",
  "bg-primary-dark/10 text-primary-dark border-primary-dark/15",
] as const;
</script>

<template>
  <section class="py-16 sm:py-20">
    <SectionContainer>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text">
        {{ title }}
      </h2>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <article
          v-for="(benefit, idx) in benefits"
          :key="benefit.title"
          class="rounded-2xl border border-primary-light/20 bg-white/45 backdrop-blur p-6 sm:p-7 shadow-soft text-center flex flex-col items-center transition-transform hover:-translate-y-0.5"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm"
            :class="iconWrapClass[idx % iconWrapClass.length]"
            aria-hidden="true"
          >
            <component
              :is="benefitIcons[idx % benefitIcons.length]"
              class="h-7 w-7"
              stroke-width="1.75"
            />
          </div>
          <h3 class="mt-5 text-lg font-semibold text-text leading-snug">
            {{ benefit.title }}
          </h3>
          <p
            class="mt-2 text-sm sm:text-[0.9375rem] text-text/70 leading-relaxed"
          >
            {{ benefit.description }}
          </p>
        </article>
      </div>
    </SectionContainer>
  </section>
</template>
