<script setup lang="ts">
import {
  Layers2,
  Moon,
  PlusCircle,
  RefreshCw,
  UserRound,
  Waves,
} from "lucide-vue-next";

withDefaults(
  defineProps<{
    title: string;
    items: string[];
    intro?: string;
  }>(),
  {
    intro:
      "Ak sa v niečom z toho nájdete, nie ste sami — mnohí ľudia hľadajú práve takýto pokojný a individuálny prístup.",
  }
);

const problemIcons = [Moon, Waves, RefreshCw, Layers2, PlusCircle, UserRound];

/** Doplňujúci text pri hoveri / fokuse — poradie ako položky na domovskej stránke. */
const hoverDetails = [
  "Dlhodobý pocit únavy často súvisí s tým, že telo dlho funguje v režime záťaže. Ak bežné vyšetrenia nič konkrétne nenájdu, môže pomôcť jemnejší, celostnejší pohľad na rovnováhu organizmu a na to, čo vám reálne robí dobre.",
  "Stres a psychická záťaž sa v tele prejavujú rôznymi signálmi. Nie vždy stačí „len to vydržať“ — niekedy pomôže pokojný priestor, kde sa dá bez tlaku porozprávať a spolu hľadať súvislosti, ktoré dávajú zmysel.",
  "Keď sa ťažkosti vracajú alebo dlho stagnujú, je prirodzené hľadať ďalšiu cestu. Biorezonancia môže byť jednou z možností, ako lepšie porozumieť signálom tela a doplniť doterajšiu starostlivosť o ďalší uhol pohľadu.",
  "Niektoré situácie vyžadujú súvislosti, ktoré presahujú jednu oblasť či diagnózu. Individuálny prístup berie do úvahy váš kontext a smeruje k tomu, aby ste sa v celom procese cítili bezpečne a zrozumiteľne.",
  "Záujem o metódy mimo klasických postupov nemusí znamenať nesúhlas s medicínou. Ide skôr o rozšírenie perspektívy a o hľadanie spôsobu, ktorý rešpektuje vaše tempo, hranice a osobné potreby.",
  "Každý človek je iný — preto má zmysel osobný kontakt a priestor na otázky. Pri prvom stretnutí vám radi vysvetlíme, čo môžete očakávať, a spoločne zvážime, či je tento prístup pre vás vhodný.",
] as const;

const accentClass = [
  "border-l-[3px] border-l-primary-dark/55",
  "border-l-[3px] border-l-primary/50",
  "border-l-[3px] border-l-primary-light/90",
] as const;

const iconBgClass = [
  "bg-primary-dark/10 text-primary-dark",
  "bg-primary/10 text-primary-dark",
  "bg-primary-light/40 text-primary-dark",
] as const;

/** Zjavenie slov pri hoveri — krátke, ale čitateľné. */
const wordReveal = {
  staggerMs: 30,
  durationMs: 200,
} as const;

function detailWords(index: number): string[] {
  const text = hoverDetails[index % hoverDetails.length] ?? "";
  return text.trim().split(/\s+/).filter(Boolean);
}
</script>

<template>
  <section class="relative py-20 sm:py-24 overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-light/[0.12] via-transparent to-transparent"
      aria-hidden="true"
    />
    <SectionContainer class="relative">
      <div class="max-w-3xl">
        <p
          class="text-sm font-semibold tracking-wide text-primary-dark/85 uppercase"
        >
          Možno to poznáte
        </p>
        <h2
          class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-text leading-tight"
        >
          {{ title }}
        </h2>
        <p class="mt-4 text-base sm:text-lg text-text/75 leading-relaxed">
          {{ intro }}
        </p>
      </div>

      <ul
        class="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0"
      >
        <li v-for="(item, idx) in items" :key="item">
          <article
            tabindex="0"
            class="group relative h-full min-h-[8rem] sm:min-h-[8.75rem] overflow-hidden rounded-3xl border border-primary-light/25 border-l-[3px] bg-white/55 backdrop-blur-sm shadow-soft outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary-light/40 focus-within:-translate-y-0.5 focus-within:shadow-lg focus-within:border-primary-light/40 focus-visible:ring-2 focus-visible:ring-primary-light/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :class="accentClass[idx % 3]"
          >
            <span
              class="pointer-events-none absolute right-3 top-2 z-30 font-bold tabular-nums text-5xl sm:text-6xl leading-none text-primary-light/20 transition-opacity duration-300 group-hover:opacity-[0.12] group-focus-within:opacity-[0.12] select-none"
              aria-hidden="true"
            >
              {{ String(idx + 1).padStart(2, "0") }}
            </span>

            <div
              class="relative z-20 flex h-full gap-3 sm:gap-4 items-center px-4 sm:px-5 py-4 sm:py-5 will-change-transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:pointer-events-none group-hover:translate-x-7 group-hover:opacity-0 group-focus-within:pointer-events-none group-focus-within:translate-x-7 group-focus-within:opacity-0"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-light/30"
                :class="iconBgClass[idx % 3]"
                aria-hidden="true"
              >
                <component
                  :is="problemIcons[idx % problemIcons.length]"
                  :size="18"
                  :stroke-width="1.75"
                  class="opacity-90"
                />
              </div>

              <p
                class="min-w-0 pr-9 text-base font-semibold text-text leading-snug"
              >
                {{ item }}
              </p>
            </div>

            <div
              class="problem-grid-hover absolute inset-0 z-10 overflow-y-auto overflow-x-hidden overscroll-y-contain px-4 sm:px-5 py-3 sm:py-4 pr-10 sm:pr-11 opacity-0 -translate-x-8 sm:-translate-x-10 will-change-transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.35,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 bg-gradient-to-r from-white/96 via-white/92 to-primary-light/[0.18] backdrop-blur-[3px] [scrollbar-width:thin] [scrollbar-color:rgba(42,157,143,0.45)_transparent]"
            >
              <p
                class="text-sm text-text/80 leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1 pb-1"
              >
                <span
                  v-for="(word, wi) in detailWords(idx)"
                  :key="wi"
                  class="inline-block opacity-0 translate-y-0.5 transition-[opacity,transform] ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:[transition-delay:0ms] motion-reduce:[transition-duration:0ms] group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
                  :style="{
                    transitionDuration: `${wordReveal.durationMs}ms`,
                    transitionDelay: `${wi * wordReveal.staggerMs}ms`,
                  }"
                >
                  {{ word }}
                </span>
              </p>
            </div>
          </article>
        </li>
      </ul>
    </SectionContainer>
  </section>
</template>

<style scoped>
.problem-grid-hover::-webkit-scrollbar {
  width: 6px;
}
.problem-grid-hover::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background: rgb(42 157 143 / 0.35);
}
.problem-grid-hover::-webkit-scrollbar-track {
  background: transparent;
}
</style>
