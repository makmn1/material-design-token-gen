import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  build: {
    target: 'node18',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'bin/scaffold-material-tokens': resolve(__dirname, 'src/bin/scaffold-material-tokens.ts'),
        'bin/create-material-theme-tokens': resolve(__dirname, 'src/bin/create-material-theme-tokens.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      external: [
        '@materialx/material-color-utilities',
        '@inquirer/prompts',
        'prettier',
        'prettier/plugins/postcss',
        'node:fs/promises',
        'node:fs',
        'node:path',
        'node:os',
      ],
    },
  },
  plugins: [
    dts(),
  ],
});


