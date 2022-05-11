<script setup>

import bigImage from './pic_big.png'
import smallImage from './pic_s.png'

const el = ref(null)

const { width } = useElementSize(el)
const height = ref(0)

onMounted(() => {
  console.log('width', width.value)
})

watchEffect(() => {
  if (width.value) {
    height.value = (width.value / 3.31).toFixed(2)
  }
})
</script>
<template>
  <div class="Demo">
    <div class="flex justify-center mb-3">
      <div>
        <div
          class="w-[360px] h-[403px] mr-3"
          :style="{
            'background-position': 'top',
            'background-size': 'cover',
            'background-image': `url(${smallImage})`
          }"
        />
        <div class="text-center text-xl">360px * 403px</div>
      </div>

      <div>
        <div
          class="w-[260px] h-[260px] mr-3"
          :style="{
            'background-position': 'top',
            'background-size': 'cover',
            'background-image': `url(${smallImage})`
          }"
        />
        <div class="text-center text-xl">260px * 260px</div>
      </div>

      <div>
        <div
          class="w-[190px] h-[124px]"
          :style="{
            'background-position': 'top',
            'background-size': 'cover',
            'background-image': `url(${smallImage})`
          }"
        />
        <div class="text-center text-xl">190px * 124px</div>
      </div>
    </div>

    <div>
      <div
        class="w-[1000px] h-[680px] mx-auto"
        :style="{
          'background-position': 'top',
          'background-size': 'cover',
          'background-image': `url(${bigImage})`
        }"
      />
      <div class="text-center text-xl">1000px * 680px</div>
    </div>

    <div
      ref="el"
      class="wrapper w-full h-[580px] mt-5"
      :style="{ height: `${height}px` }"
    >
      <img :src="bigImage">
    </div>
    <div class="text-center text-xl">1920 * 580px</div>
  </div>
</template>
<style lang="postcss" scoped>

.Demo {
  background:  white;
  /* height: 100vh; */

  padding-bottom: 100px;
}

.wrapper {
  overflow: hidden;
}

img {
  width: 100%;
  /* object-fit: contain; */
}

</style>
