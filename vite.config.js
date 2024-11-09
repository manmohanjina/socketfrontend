import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

    VitePWA({registerType:"autoUpdate",
      manifest: {
        name: 'react pwa app',
        short_name: 'pwa_app',
        description: 'My Awesome App description',
        theme_color: '#0000',
        icons: [
          {
            src: "anroid-chrome-192x192.png",
            sizes: '192x192',
            type: 'image/png',
            purpose:"maskable"
          },
          {
            src: 'anroid-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
    
  ],
})
