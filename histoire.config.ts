import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: './src/histoire-setup.js',
  plugins: [
    HstVue(),
  ],
})
