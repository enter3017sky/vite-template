
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      // global imports to register
      imports: [
        'vue',
        'vue-router',
        'vuex',
        // '@vueuse/core',
        // 'vitest',

        {
          // 根據路徑自定義自動導入
          '~/store/modules': [
            // named imports
            // import { modules } from '~/store/modules',
            'modules',

            // alias
            // ['useFetch', 'useMyFetch']
            // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
        },
      ],

      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),

    Components(),
  ],
})
