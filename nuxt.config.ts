// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "dayjs-nuxt"],
  css: ["~/assets/css/remedy.css", "~/assets/css/global.css"],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
});
