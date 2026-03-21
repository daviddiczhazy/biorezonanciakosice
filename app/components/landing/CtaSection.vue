<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryTo: string;
  secondaryCta: string;
  secondaryTo: string;
}>();
</script>

<template>
  <section class="py-16 sm:py-20">
    <div
      class="bg-gradient-to-b from-primary-light/25 via-white/0 to-transparent"
    >
      <SectionContainer class="pt-4">
        <div
          class="rounded-[2rem] border border-primary-light/25 bg-white/45 backdrop-blur shadow-soft p-8 sm:p-12 overflow-hidden relative"
        >
          <div
            aria-hidden="true"
            class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary-light/35 blur-3xl"
          />

          <div
            class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
                {{ title }}
              </h2>
              <p class="mt-5 text-text/75 leading-relaxed">
                {{ subtitle }}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <BaseButton :to="primaryTo" variant="primary" size="lg">
                {{ primaryCta }}
              </BaseButton>
              <BaseButton
                :to="secondaryTo"
                variant="secondary"
                size="lg"
                rounded="xl"
              >
                {{ secondaryCta }}
              </BaseButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  </section>
</template>
