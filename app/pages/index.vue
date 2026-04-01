<script setup lang="ts">
const problemItems = [
  "Dlhodobá únava",
  "Stres a vyčerpanie",
  "Opakované ťažkosti",
  "Potreba celostného pohľadu",
  "Záujem o doplnkový prístup",
  "Hľadanie individuálnej konzultácie",
];

const methodBullets = [
  "neinvazívna metóda",
  "individuálny a komplexný prístup",
  "zrozumiteľná formulácia pre laika",
];

const processSteps = [
  "Kontakt a dohodnutie termínu",
  "Úvodný rozhovor",
  "Samotné sedenie",
  "Odporúčanie ďalšieho postupu",
];

const benefits = [
  {
    title: "Individuálny prístup",
    description:
      "Každý človek je iný. Zohľadníme váš kontext a tempo — nič univerzálneho, riešenie prispôsobíme vašej situácii.",
  },
  {
    title: "Pokojné a diskrétne prostredie",
    description:
      "Priestor bez zhonu, kde sa môžete uvoľniť. Čo povieme medzi štyrmi očami, ostane medzi nami.",
  },
  {
    title: "Priestor na otázky",
    description:
      "Nič nie je hlúpa otázka. Vysvetlíme, čo robíme, prečo to dáva zmysel a čo môžete očakávať.",
  },
  {
    title: "Dôraz na komfort a zrozumiteľnosť",
    description:
      "Bez zbytočnej odbornosti — jazykom, ktorému rozumiete. Ide o to, aby ste sa počas celého procesu cítili v pohode.",
  },
];

const faqItems = [
  {
    q: "Čo je biorezonancia?",
    a: "Ide o neinvazívnu diagnostickú a terapeutickú metódu. V praxi pracujeme s biorezonančným prístrojom Bicom Optima 2. generácie — bez invázie, bezbolestne a bez použitia chemických liekov. Prístup kombinuje modernú techniku s prvkami tradičnej čínskej medicíny a smeruje k harmonizácii organizmu a podpore jeho prirodzených regulačných procesov.",
  },
  {
    q: "Ako biorezonančný prístroj pracuje (v skratke)?",
    a: "Vychádza sa z predstavy, že bunky v organizme spolu komunikujú cez elektromagnetické vlnenie. Prístroj vie tieto signály zachytiť (napr. cez elektródy a testovacie látky), spracovať a späť do tela odovzdať upravený „terapeutický signál“. Presný postup sa vždy individuálne nastavuje — viac o princípe nájdete na stránke Informácie.",
  },
  {
    q: "Ako prebieha prvá návšteva?",
    a: "Zvyčajne začíname rozhovorom o vašich zdravotných ťažkostiach a súvislostiach (vrátane infekcií, operácií či stavu chrupu). Potom nasleduje práca s prístrojom podľa zvoleného postupu. Často ide aj o odblokovanie stresu, prácu s blokádami, podporu detoxikačných orgánov a testovanie záťaží či oslabených oblastí. Na záver preberáme odporúčania vrátane úpravy stravovania — vždy s priestorom na otázky.",
  },
  {
    q: "Je stretnutie bolestivé alebo invazívne?",
    a: "Nie. Metóda je neinvazívna a v praxi ju popisujeme ako bezbolestnú, bez chemických liekov. Stretnutie vedieme pokojne a zrozumiteľne.",
  },
  {
    q: "Ako dlho trvá jedno stretnutie?",
    a: "Dĺžka závisí od konkrétneho postupu a vašej situácie. Orientačný čas si najlepšie dohodnete pri objednaní konzultácie.",
  },
  {
    q: "S akými ťažkosťami môže biorezonancia pomôcť?",
    a: "Okruh tém je široký — napríklad únava a syndrómy vyčerpania, alergie, psychická záťaž, hormonálne a metabolické súvislosti, podpora imunity, eliminácia záťaží či závislostí, príprava a rekonvalescencia, ale aj doplnková podpora pri náročnejších liečbach. Zoznam tém má iba informatívny význam; či je prístup vhodný práve pre vás, posúdime pri osobnej konzultácii. Podrobnejší prehľad nájdete v sekcii Informácie.",
  },
  {
    q: "Existujú k biorezonancii odborné podklady alebo štúdie?",
    a: "Áno — okrem popisov metodiky sa v odborných materiáloch spomína napríklad aj pilotná štúdia zameraná na odvykanie od fajčenia s pozitívnymi výsledkami a bez klinicky pozorovaných vedľajších účinkov počas sledovania; treba ju však vnímať ako jeden z podkladov, nie ako jediný definitívny dôkaz. Viac súvislostí uvádzame na stránke Informácie.",
  },
];
</script>

<template>
  <div>
    <HeroSection
      title="Hľadáte iný prístup, keď bežné riešenia nestačia?"
      subtitle="Biorezonancia ponúka neinvazívny a individuálny prístup, ktorý môže pomôcť lepšie porozumieť vášmu organizmu a jeho rovnováhe."
      primaryCta="Dohodnúť si konzultáciu"
      primaryTo="/kontakt"
      secondaryCta="Viac informácií"
      secondaryTo="/informacie"
    />

    <ProblemGrid
      title="Kedy ľudia najčastejšie hľadajú doplnkový prístup?"
      :items="problemItems"
    />

    <MethodIntroSection
      title="Čo je biorezonancia?"
      :bullets="methodBullets"
      ctaLabel="Viac informácií o metóde"
      ctaTo="/informacie"
    />

    <ProcessSection
      title="Ako prebieha prvé stretnutie"
      :steps="processSteps"
    />

    <BenefitsSection title="Prečo si vybrať nás" :benefits="benefits" />

    <FaqSection title="FAQ" :items="faqItems" />

    <CtaSection
      title="Máte otázky alebo si chcete dohodnúť termín?"
      subtitle="Ozvite sa a radi vám vysvetlíme, ako prebieha prvé stretnutie a či je tento prístup vhodný aj pre vás."
      primaryCta="Kontaktovať nás"
      primaryTo="/kontakt#kontakt-form"
      secondaryCta="Dohodnúť si konzultáciu"
      secondaryTo="/kontakt"
    />
  </div>
</template>
