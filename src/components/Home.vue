<script setup>

// AutoImport 省略引入 useStore, computed 的部分
const store = useStore()
const name = computed(() => {
  return store.state.user.name
})
const router = useRouter()

const newName = ref('')

function saveName() {
  store.dispatch('saveName', newName.value)

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
</template>
