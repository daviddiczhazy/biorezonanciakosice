<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

type NavItem = { label: string; to: string };

const navItems: NavItem[] = [
  { label: "Domov", to: "/" },
  { label: "Informácie", to: "/informacie" },
  { label: "Kontakt", to: "/kontakt" },
];

const route = useRoute();
const activePath = computed(() => route.path);

const isMobileOpen = ref(false);

const closeMobile = () => {
  isMobileOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50">
    <div
      class="bg-background/70 backdrop-blur border-b border-primary-light/15"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <div class="grid grid-cols-3 items-center gap-4">
          <!-- Left: logo -->
          <div
            class="flex w-fit items-center justify-self-start border-2 border-gray-500 p-1 rounded-lg"
          >
            <NuxtLink
              to="/"
              class="font-[Inter] font-bold tracking-wide text-lg sm:text-xl"
            >
              <span class="text-primary-dark">BIOREZONANCIA</span>
              <span class="text-primary"> KOŠICE</span>
            </NuxtLink>
          </div>

          <!-- Center: navigation -->
          <nav
            class="flex justify-center items-center gap-6 flex-wrap text-center"
          >
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="text-sm font-semibold transition-colors"
              :class="
                activePath === item.to
                  ? 'text-text'
                  : 'text-text/70 hover:text-text'
              "
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- Right: CTA -->
          <div class="flex justify-end">
            <BaseButton to="/kontakt" variant="primary" size="lg">
              Dohodnúť si konzultáciu
            </BaseButton>
          </div>

          <!-- Mobile actions -->
          <div
            class="md:hidden col-span-3 flex items-center justify-between gap-3"
          >
            <BaseButton
              to="/kontakt"
              variant="secondary"
              size="md"
              rounded="xl"
            >
              Dohodnúť si konzultáciu
            </BaseButton>

            <button
              type="button"
              class="w-11 h-11 rounded-xl border border-primary-light/25 bg-white/40 flex items-center justify-center"
              @click="isMobileOpen = !isMobileOpen"
              aria-label="Otvoriť menu"
            >
              <span class="text-text font-semibold">Menu</span>
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="isMobileOpen"
        class="md:hidden border-t border-primary-light/15"
      >
        <div class="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="py-2 text-sm font-semibold text-text/80 hover:text-text transition-colors"
            :class="activePath === item.to ? 'text-text' : ''"
            @click="closeMobile"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="pt-2">
            <BaseButton
              to="/kontakt"
              variant="primary"
              size="lg"
              @click="closeMobile"
            >
              Dohodnúť si konzultáciu
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
