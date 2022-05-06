<template>
  <div class="flex flex-col items-center justify-center text-center">
    <h1 class="mb-2 text-xl font-bold text-center text-white">{{ title.toUpperCase() }}</h1>
    <div class="w-1/6 h-1 mb-12 bg-[#CE1618] rounded"></div>
  </div>
</template>

<script setup lang="ts">
  interface BaseTitleProps {
    title: string
  }
  withDefaults(defineProps<BaseTitleProps>(), {
    title: '',
  })
</script>
