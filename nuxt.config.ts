import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    'bulma',
    '~/assets/css/main.css',
  ],
  buildModules: [
      '@nuxtjs/pwa'
  ],
  app: {
      head: {
          link: [
              { rel: 'manifest', href: 'manifest.json', crossorigin: 'use-credentials' }
          ]
      }
  },
  pwa: {
      manifest: {
          name: 'pitbull',
          short_name: 'pb',
          theme_color: '#4DBA87',
          useWebmanifestExtension: false,
          icons: [
              {
                  src: '/pwa.png',
                  sizes: '512x512',
                  type: 'image/png'
              }
          ]
      }
  },
  server: {
      https: {
          key: fs.readFileSync(path.resolve(__dirname, 'localhost+2-key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem')),
      }
  }
})
