// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["dayjs-nuxt"],
  css: ["~/assets/css/remedy.css", "~/assets/css/global.css"],
});
