import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    rollupOptions: {
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
      input: {
        index: resolve(__dirname, 'src/index.ts'),
        'bin/cli': resolve(__dirname, 'src/bin/cli.ts'),
        'bin/theme-color': resolve(__dirname, 'src/bin/theme-color.ts'),
      },
      output: [
        {
          format: 'es',
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'index') return 'index.js';
            return `${chunkInfo.name}.js`;
          },
          dir: 'dist',
        },
      ],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      include: ['src/**/*'],
      outDir: 'dist',
    }),
  ],
});


