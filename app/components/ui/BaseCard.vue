<script setup lang="ts">
defineProps<{
  variant?: "default" | "flat";
}>();
</script>

<template>
  <div
    class="rounded-2xl border border-primary-light/25 bg-white/55 backdrop-blur shadow-soft"
  >
    <slot />
  </div>
</template>
