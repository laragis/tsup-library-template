import { defineConfig } from 'tsup'
import { legacyConfig, modernConfig } from '@laragis/tsup-config'

export default defineConfig([
  modernConfig({ entry: ['src/**/*.{ts,tsx}'] }),
  legacyConfig({ entry: ['src/**/*.{ts,tsx}'] }),
])
