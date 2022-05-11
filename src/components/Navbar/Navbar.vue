<script setup>

const enabled = ref(false)

// 顯式指定 enabled 依赖源
watch(enabled, (isEnabled) => {
  const className = 'dark'
  const { classList } = window.document.body

  isEnabled ? classList.add(className) : classList.remove(className)
})

function changeMode() {
  enabled.value = !enabled.value
}

</script>

<template>
  <nav class="pl-10 ml-5">
    <div>Navbar</div>

    <div @click="changeMode">
      <noto:crescent-moon v-if="enabled" />
      <noto-v1:sun v-else />
    </div>
  </nav>
</template>
