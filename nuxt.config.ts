// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light'
  },

  routeRules: {
    '/': { ssr: true },
    '/**': {
      headers: {
        'Content-Security-Policy': 'frame-src \'self\' https://vk.com https://vkvideo.ru'
      }
    }
  },

  compatibilityDate: '2025-01-15',

  vite: {
    server: {
      allowedHosts: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
