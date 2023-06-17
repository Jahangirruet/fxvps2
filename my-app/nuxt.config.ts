// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;500;600;700&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.gstatic.comm",
          rel: "preconnect",
        },
      ],
      style: [],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" },

        { innerHTML: '' } 
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  css: [
    // CSS file in the project
    "~/assets/css/style.css",
    "~/assets/css/tailwind.css",
  ],
});