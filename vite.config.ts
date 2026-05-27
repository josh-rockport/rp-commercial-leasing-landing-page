import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rp-commercial-leasing-landing-page/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'legacy-js-api']
      }
    }
  }
})
