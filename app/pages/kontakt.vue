<script setup lang="ts"></script>

<template>
  <div>
    <!-- <PageHeader
      title="Kontakt"
      subtitle="Napíšte nám. Odpovieme v pokojnom a zrozumiteľnom štýle."
    /> -->

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
                <span class="font-semibold text-text/90">Meno:</span> Judita
                Glücková
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
                Ak máte otázku, napíšte ju priamo do správy. Všetko prejdeme
                pokojne na prvom stretnutí.
              </p>
            </div>
          </div>

          <div
            id="kontakt-form"
            class="rounded-3xl border border-primary-light/20 bg-white/45 backdrop-blur shadow-soft p-7 sm:p-8"
          >
            <div class="text-sm font-semibold text-text/80">
              Dohodnúť si konzultáciu
            </div>
            <div class="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
