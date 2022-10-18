<<<<<<< HEAD
import { fileURLToPath } from 'url';
import { resolve } from 'pathe';
import { defineNuxtConfig } from 'nuxt/config';

const resolvePath = (...paths: string[]) => resolve(fileURLToPath(new URL('./', import.meta.url)), ...paths);

export default defineNuxtConfig({

  app: {
    head: {
      meta: [
        { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
=======
import { fileURLToPath } from 'url'
import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt/config'

const resolvePath = (...paths: string[]) => resolve(fileURLToPath(new URL('./', import.meta.url)), ...paths)

export default defineNuxtConfig({
  alias: {
    public: resolvePath('./public/')
>>>>>>> 2d5dea2 (Initial commit)
  },

  build: {
    transpile: [
      'chart.js',
      'primevue'
    ]
  },

  components: {
    dirs: [
      {
        extensions: ['vue'],
        global: true,
        path: '~/components/common/',
        pathPrefix: false
      }
    ]
  },

  css: [
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    'prismjs/themes/prism-coy.css',
    '~/assets/styles/layout.scss',
    '~/assets/demo/flags/flags.css'
  ],

  dir: {
<<<<<<< HEAD
    public: '../public/'
=======
    public: resolvePath('./public/')
>>>>>>> 2d5dea2 (Initial commit)
  },

  experimental: {
    reactivityTransform: true,
    viteNode: false
  },

  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true
    }
  },

<<<<<<< HEAD
=======
  meta: {
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ]
  },

>>>>>>> 2d5dea2 (Initial commit)
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '~/modules/primevue'
  ],

  nitro: {
    preset: 'vercel'
  },

  srcDir: 'src/',

  vite: {
    build: {
      sourcemap: process.env.NODE_ENV !== 'production'
    },
    clearScreen: true,
    logLevel: 'info'
  }
<<<<<<< HEAD
});
=======
})
>>>>>>> 2d5dea2 (Initial commit)
