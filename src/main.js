import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// import './index.css'

// TODO: https://github.com/antfu/vitesse/tree/main/src/modules
import { createI18n } from 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(

  Object.entries(
    import.meta.globEager('../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')

      // 根據 path 長度切
      return [key.slice(11, yaml ? -5 : -4), value.default]
    })
)

console.log('messages ', messages)

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages,
})

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')
