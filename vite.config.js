
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {

    // 定義別名
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
      // include: [
      //   /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      //   /\.vue$/,
      //   /\.vue\?vue/, // .vue
      //   // /\.md$/, // .md
      // ],

      // global imports to register
      imports: [
        'vue',
        'vue-router',
        // 'vuex',
        'pinia',
        'vue-i18n',
        '@vueuse/core',
        // 'vitest',

        {
          // NOTE: Pinia/store
          // 根據路徑自定義自動導入
          '~/store/useCounterStore': [
            'useCounterStore',
          ],
          '~/store/useSiteStore': [
            'useSiteStore',
          ],

          // NOTE: Vuex/store
          // // 根據路徑自定義自動導入
          // '~/store/modules': [
          //   // named imports
          //   // import { modules } from '~/store/modules',
          //   'modules',

          //   // alias
          //   // ['useFetch', 'useMyFetch']
          //   // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],
        },
      ],

      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),

    Components({
      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: false,
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    Icons({
      autoInstall: true,
    }),

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
      // 'pinia',
      '@vueuse/core',
      // '@vueuse/head',
    ],
    exclude: [
      // 'vue-demi',
    ],
  },
})
