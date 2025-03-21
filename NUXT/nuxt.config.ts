// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: true,
  devtools: { enabled: true },
  modules: ['usebootstrap'],
  // ...
  nitro: {
    azure: {
      config: {
        // ...
        platform: {
          apiRuntime: 'node:18'
        }
      }
    }
  }
})