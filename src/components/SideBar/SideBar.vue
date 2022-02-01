
<template>
  <!--
    NOTE: 暗黑模式
    bg-gray-100 text-white shadow-lg
    dark:bg-gray-900 dark:text-white"
  -->
  <section
    class="fixed top-0 left-0 h-screen w-16 m-0
    flex flex-col
    bg-gray-100 text-white shadow-lg
    dark:bg-gray-900 dark:text-white"
  >
    <SideBarIcon>
      <fa-solid:brain />
    </SideBarIcon>
    <SideBarIcon>
      <mdi:cursor-default-click-outline />
    </SideBarIcon>
    <SideBarIcon>
      <la:safari />
    </SideBarIcon>
    <SideBarIcon>
      <ph:face-mask-light />
    </SideBarIcon>
    <SideBarIcon text="+1">
      <ic:baseline-plus />
    </SideBarIcon>
  </section>
</template>
