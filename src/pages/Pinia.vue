<script setup>
// NOTE: AutoImport: 自動按需載入了 useCounterStore
// import { useCounterStore, mapActions } from '~/store/useCounter'

const main = useCounterStore()

// 解構需使用 storeToRefs
const { counter, name } = storeToRefs(main)

console.log(' main ', main, counter, name)
console.log(counter.value, (counter.value || 0) + (Math.floor(Math.random() * 10 + 1)))

// # 方式 1: 直接調用 action: main.addOne
// # 方式 2: 使用 mapActions, 調用 action
const { addTwo } = mapActions(useCounterStore, ['addTwo'])

// # 方式 3: 解構 action
const { addThree } = main

function add() {
  // 相當於 react setState
  // # 方式 4: $patch 傳遞參數
  main.$patch({
    counter: counter.value += (Math.floor(Math.random() * 10 + 1)),
  })

  // # 方式 5: $patch 傳遞函數
  // main.$patch(state => {
  //   state.counter += (Math.floor(Math.random() * 10 + 1))
  // })
}

//
main.$subscribe((mutation, state) => {
  console.log('mutation, state: ', mutation, state)
})

</script>

<template>
  <div>
    <div>
      <button
        class="mb-5 mr-3 p-2 text-white bg-indigo-600 rounded"
        @click="$router.push('/')"
      >
        Back
      </button>
    </div>
    <h1>{{ counter }}</h1>
    <h1 class="mb-6 text-3xl font-extrabold">yoooo </h1>

    <button
      class="
      mb-5 mr-3 p-2 text-white bg-indigo-600 rounded"
      @click="main.$reset"
    >
      reset
    </button>
    <button
      class="
      mb-5 mr-3 p-2 text-white bg-indigo-600 rounded"
      @click="main.addOne"
    >
      +1
    </button>
    <button
      class="
      mb-5 mr-3 p-2 text-white bg-indigo-600 rounded"
      @click="addTwo"
    >
      +2
    </button>
    <button
      class="
      mb-5 mr-3 p-2 text-white bg-indigo-600 rounded"
      @click="addThree"
    >
      +3
    </button>
    <button
      class="
      mb-5 mr-3 p-2 text-white bg-indigo-600 rounded"
      @click="add"
    >
      +value
    </button>
  </div>
</template>
