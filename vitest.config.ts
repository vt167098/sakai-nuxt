<<<<<<< HEAD
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
=======
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
>>>>>>> 2d5dea2 (Initial commit)

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    vueJsx()
  ],
  test: {}
<<<<<<< HEAD
});
=======
})
>>>>>>> 2d5dea2 (Initial commit)
