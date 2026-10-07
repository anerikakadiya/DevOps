import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// The `base` must match the GitHub repository name so asset URLs resolve
// correctly on a Project Pages site: https://<user>.github.io/<repo>/
// Change this string if you rename the repo.
export default defineConfig({
  base: '/DevOps/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        test: resolve(__dirname, 'test.html'),
      },
    },
  },
});

