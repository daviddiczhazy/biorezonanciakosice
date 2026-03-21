<script setup lang="ts">
import { ref } from "vue";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

const props = defineProps<{
  items: AccordionItem[];
  defaultOpenId?: string;
}>();

const openId = ref<string | null>(
  props.defaultOpenId ?? props.items?.[0]?.id ?? null
);

const toggle = (id: string) => {
  openId.value = openId.value === id ? null : id;
};

const panelId = (id: string) => `acc-panel-${id}`;
const buttonId = (id: string) => `acc-button-${id}`;
</script>

<template>
  <div class="w-full">
    <div
      v-for="item in items"
      :key="item.id"
      class="border-b border-primary-light/25 last:border-b-0"
    >
      <button
        :id="buttonId(item.id)"
        class="w-full py-4 text-left flex items-center justify-between gap-4"
        :aria-controls="panelId(item.id)"
        :aria-expanded="openId === item.id"
        type="button"
        @click="toggle(item.id)"
      >
        <span class="text-text font-semibold">{{ item.title }}</span>
        <span
          class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl border border-primary-light/25 bg-white/40 transition-transform"
          :class="{ 'rotate-45': openId === item.id }"
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        :id="panelId(item.id)"
        class="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
        :style="{
          gridTemplateRows: openId === item.id ? '1fr' : '0fr',
          opacity: openId === item.id ? 1 : 0,
        }"
        role="region"
        :aria-labelledby="buttonId(item.id)"
      >
        <div class="overflow-hidden">
          <div class="pb-4 text-text/90 leading-relaxed">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
