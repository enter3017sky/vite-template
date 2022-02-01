<script setup>
// import { useI18n } from 'vue-i18n'

import { storeToRefs } from 'pinia'

const i18n = useI18n()

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

// console.log(availableLocales, locale)

// AutoImport 省略引入 useStore, computed 的部分
// const store = useStore()
// const name = computed(() => {
//   return store.state.user.name
// })

const site = useSiteStore()

const { name } = storeToRefs(site)

console.log(' site ', site)

const router = useRouter()

const newName = ref('')

function saveName() {
  // store.dispatch('saveName', newName.value)

  site.saveName(newName.value)

  newName.value = ''

  router.push('/about')
  console.log('newName: ', newName)
}

// Trailing spaces not allowed.eslintno-trailing-spaces

const a = {
  b: 1,
  c: 2,
}

</script>

<template>
  <div>
    <Navbar />

    <!-- class="icon-btn mx-2" -->

    <button
      class="btn mb-5 mr-3"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <carbon-language />
    </button>

    <span
      class="p-2 mr-4 border border-gray-600 rounded"
    >{{ t('button.home') }}</span>
  </div>

  <hr>
  <router-link to="/pinia">Pinia</router-link>
  <hr>

  <h1 class="mb-6 text-3xl font-extrabold">Home</h1>
  <p class="">Name in store is: <span class="font-bold">{{ name }}</span></p>
  <p class="mb-6">
    newName in store is: <span class="font-bold">
      {{ newName }}</span>
  </p>

  <input
    v-model="newName"
    type="text"
    class="p-2 mr-4 border border-gray-600 rounded"
  />

  <button class="p-2 text-white bg-indigo-600 rounded" @click="saveName">
    Submit
  </button>

  <SideBar />
  <Footer />
</template>
