<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: "h2" | "h3";
    size?: "md" | "lg";
    align?: "left" | "center";
  }>(),
  { as: "h2", size: "lg", align: "left" }
);
</script>

<template>
  <component
    :is="as"
    class="font-[Inter] font-bold tracking-tight text-text"
    :class="{
      'text-3xl sm:text-4xl': size === 'lg',
      'text-2xl sm:text-3xl': size === 'md',
      'text-center': align === 'center',
    }"
  >
    <slot />
  </component>
</template>
