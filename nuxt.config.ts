// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Permanent Marker', provider: 'google' }
    ]
  },
  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      htmlAttrs: {
        class: 'dark'
      },
      link: [
        { rel: 'preconnect', href: 'https://www.figma.com' },
        { rel: 'dns-prefetch', href: 'https://www.figma.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap' }
      ]
    }
  },
  image: {
    domains: ['www.figma.com'],
    quality: 80,
    format: ['webp']
  },
  experimental: {
    inlineSSRStyles: false
  },
  features: {
    inlineStyles: false
  }
})