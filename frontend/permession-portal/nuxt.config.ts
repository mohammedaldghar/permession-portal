// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-25',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'ar' },
      title: 'بوابة طلبات التصاريح',
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  css: ['./public/assets/css/tailwind.css'],
})