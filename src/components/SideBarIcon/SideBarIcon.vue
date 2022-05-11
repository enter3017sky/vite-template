
<script setup>
defineProps({
  text: {
    type: String,
    default: 'tooltip',
  },
})

</script>
<template>
  <!-- group/group-hover: 處理鼠標懸停在父層才顯示 -->
  <div class="sidebar-icon group">
    <slot></slot>
    <div class="sidebar-tooltip group-hover:scale-100">
      {{ text }}
      <noto:light-bulb />
    </div>
  </div>
</template>
