
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      // 'vue-i18n': 'vue-i18n/dist/vue-i18n.esm.browser.js',
    },
  },
  plugins: [
    // vue(),
    Vue({
      include: [/\.vue$/],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      // global imports to register
      imports: [
        'vue',
        'vue-router',
        'vuex',
        'vue-i18n',
        '@vueuse/core',
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

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      // safelist: markdownWrapperClasses,
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

  ],

  //
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vuex',
      '@vueuse/core',
      // '@vueuse/head',
    ],
    exclude: [
      // 'vue-demi',
    ],
  },
})
