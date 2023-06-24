const routerBase = process.env.APP_ROUTER_BASE;
const domain = "https://tri-siska.fyi";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: routerBase,
    head: {
      title: "Tri & Siska",
      meta: [
        {
          name: "robots",
          content: "noindex, nofollow",
        },
        {
          name: "description",
          content: "Tri & Siska Wedding Invitation - 30 Juli 2023",
        },
        // Facebook / Open Graph
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: domain,
        },
        {
          property: "og:title",
          content: "Tri & Siska",
        },
        {
          property: "og:description",
          content: "Tri & Siska Wedding Invitation - 30 Juli 2023",
        },
        {
          property: "og:image",
          content: `${domain}/tri-siska-banner.jpg`,
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: domain,
        },
        {
          name: "twitter:title",
          content: "Tri & Siska",
        },
        {
          name: "twitter:description",
          content: "Tri & Siska Wedding Invitation - 30 Juli 2023",
        },
        {
          name: "twitter:image",
          content: `${domain}/tri-siska-banner.jpg`,
        },
      ],
    },
  },
  ssr: true,
  devtools: { enabled: true },
  modules: ["dayjs-nuxt"],
  css: ["~/assets/css/remedy.css", "~/assets/css/global.css"],
});
