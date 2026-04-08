<script setup lang="ts">
const mapEmbedSrc =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("BCM, Moldavská cesta 10/b, Košice") +
  "&hl=sk&z=16&output=embed";
</script>

<template>
  <div>
    <section class="py-16 sm:py-20">
      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div
            class="rounded-3xl border border-primary-light/20 bg-white/45 backdrop-blur shadow-soft p-7 sm:p-8"
          >
            <div class="text-md font-semibold text-text/80">
              Kontaktné údaje
            </div>
            <div class="mt-5 space-y-4 text-sm text-text/70 leading-relaxed">
              <div>
                <span class="font-semibold text-text/90">Meno:</span> Mgr.
                Judita Glücková
              </div>
              <div>
                <span class="font-semibold text-text/90">Telefón:</span> +421
                903 848 434
              </div>
              <div>
                <span class="font-semibold text-text/90">Email:</span>
                info@biorezonancia.sk
              </div>
              <div>
                <span class="font-semibold text-text/90">Adresa:</span>
                BCM, Moldavská cesta 10/b, Košice 1.poschdie
              </div>
            </div>

            <div
              class="mt-7 rounded-2xl bg-primary-light/20 border border-primary-light/25 p-5"
            >
              <div class="font-semibold text-text">Tip</div>
              <p class="mt-2 text-sm text-text/70 leading-relaxed">
                Ak máte otázku, ozvite sa telefónom alebo e-mailom. Na prvom
                stretnutí všetko prejdeme v pokoji.
              </p>
            </div>
          </div>

          <div
            id="kontakt-form"
            class="rounded-3xl border border-primary-light/20 bg-white/45 backdrop-blur shadow-soft overflow-hidden"
          >
            <div class="p-7 sm:p-8 pb-5">
              <div class="text-md font-semibold text-text/80">
                Ako sa k nám dostanete
              </div>
              <p class="mt-2 text-sm text-text/70 leading-relaxed">
                Prevádzka je v budove BCM (Moldavská cesta 10/b, Košice), 1.
                poschodie.
              </p>
            </div>
            <div
              class="relative w-full h-[min(50vh,26rem)] min-h-[220px] sm:min-h-[280px]"
            >
              <iframe
                title="Mapa: Moldavská cesta 10/b, Košice"
                :src="mapEmbedSrc"
                class="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
