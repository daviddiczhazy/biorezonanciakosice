// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    /** Resend API key — nastavte v lokálnom .env ako NUXT_RESEND_API_KEY a na Verceli v Environment Variables */
    resendApiKey: "",
    /** Kam dorazí kontaktný formulár (neprefillovať verejné údaje klienta do repa — radšej .env / Vercel) */
    contactToEmail: "",
    /** Odosielateľ musí byť overená doména v Resend (alebo onboarding@resend.dev len na test) */
    contactFromEmail: "",
  },
  app: {
    head: {
      title: "Biorezonancia Košice",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
