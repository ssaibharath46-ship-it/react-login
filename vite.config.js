import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/react-login/',
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ]
})