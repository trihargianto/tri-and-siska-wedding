const routerBase = process.env.APP_ROUTER_BASE;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: routerBase,
  },
  ssr: true,
  devtools: { enabled: true },
  modules: ["dayjs-nuxt"],
  css: ["~/assets/css/remedy.css", "~/assets/css/global.css"],
});
