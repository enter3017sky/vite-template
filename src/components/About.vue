<script setup>

// AutoImport 省略引入 useStore, computed 的部分

const store = useStore()
const name = computed(() => {
  return store.state.user.name
})

console.log(' name ', name)
</script>

<template>
  <h1 class="mb-6 text-3xl font-extrabold">About {{ name }}</h1>
</template>
