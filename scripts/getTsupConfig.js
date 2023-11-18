// @ts-check

import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions'

const env = process.env.NODE_ENV;

const commonConfig = {
  dts: true,
  sourcemap: true,
  clean: true,
  skipNodeModulesBundle: true,
  esbuildPlugins: [esbuildPluginFilePathExtensions({ esmExtension: 'js' })],
  minify: env === 'production',
}

/**
 * @param {Object} opts - Options for building configurations.
 * @param {string[]} opts.entry - The entry array.
 * @returns {import('tsup').Options}
 */
export function modernConfig(opts) {
  return {
    ...commonConfig,
    entry: opts.entry,
    format: ['cjs', 'esm'],
    target: ['chrome91', 'firefox90', 'edge91', 'safari15', 'ios15', 'opera77'],
    outDir: 'build/modern',
  }
}

/**
 * @param {Object} opts - Options for building configurations.
 * @param {string[]} opts.entry - The entry array.
 * @returns {import('tsup').Options}
 */
export function legacyConfig(opts) {
  return {
    ...commonConfig,
    entry: opts.entry,
    format: ['cjs', 'esm'],
    target: ['es2020', 'node16'],
    outDir: 'build/legacy',
  }
}
