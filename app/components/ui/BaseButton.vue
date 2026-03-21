<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const props = withDefaults(
  defineProps<{
    to?: string;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: "xl" | "2xl" | "3xl";
    disabled?: boolean;
  }>(),
  {
    type: "button",
    variant: "primary",
    size: "md",
    rounded: "2xl",
    disabled: false,
  }
);

const className = computed(() => {
  const radius =
    props.rounded === "xl"
      ? "rounded-xl"
      : props.rounded === "3xl"
      ? "rounded-3xl"
      : "rounded-2xl";

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-light/60 disabled:opacity-60 disabled:pointer-events-none";

  const size =
    props.size === "lg"
      ? "px-6 py-3 text-base"
      : "px-5 py-2.5 text-sm sm:text-base";

  const variants: Record<ButtonVariant, string> = {
    primary: `bg-primary text-background shadow-soft hover:translate-y-[-1px] hover:shadow-soft ${radius}`,
    secondary: `bg-primary-light/25 text-text hover:bg-primary-light/35 ${radius} border border-primary-light/35`,
    ghost: `bg-transparent text-text hover:bg-text/5 ${radius}`,
  };

  return `${base} ${size} ${variants[props.variant]}`;
});
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="className">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :disabled="disabled" :class="className">
    <slot />
  </button>
</template>
