<script setup lang="ts">
const navItems = [
  { label: "Domov", to: "/" },
  { label: "Informácie", to: "/informacie" },
  { label: "Kontakt", to: "/kontakt" },
];
</script>

<template>
  <footer class="border-t border-primary-light/15">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div class="font-[Inter] font-bold tracking-tight text-text text-xl">
            Biorezonancia
          </div>
          <p class="mt-3 text-sm text-text/70 leading-relaxed">
            Pokojný a individuálny prístup, ktorý vám pomôže nájsť rovnováhu.
          </p>
        </div>

        <div>
          <div class="text-sm font-semibold text-text/90">Navigácia</div>
          <div class="mt-4 flex flex-col gap-3">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="text-sm text-text/70 hover:text-text transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold text-text/90">Kontakt</div>
          <div class="mt-4 flex flex-col gap-3 text-sm text-text/70">
            <div>
              <span class="font-semibold text-text/90">Meno:</span> Mgr. Judita
              Glücková
            </div>
            <div>
              <span class="font-semibold text-text/90">Telefón:</span> +421 903
              848 434
            </div>
            <div>
              <span class="font-semibold text-text/90">Email:</span>
              info@biorezonancia.sk
            </div>
            <div>
              <span class="font-semibold text-text/90">Adresa:</span> BCM,
              Moldavská cesta 10/b, Košice 1.poschdie
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-xs text-text/50">
        © {{ new Date().getFullYear() }} Biorezonancia. Všetky práva vyhradené.
      </div>
    </div>
  </footer>
</template>
