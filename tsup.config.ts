import { defineConfig } from 'tsup'
import { legacyConfig, modernConfig } from '@laragis/tsup-config'

export default defineConfig([
  modernConfig({ entry: ['src/*.ts', 'src/*.tsx'] }),
  legacyConfig({ entry: ['src/*.ts', 'src/*.tsx'] }),
])
