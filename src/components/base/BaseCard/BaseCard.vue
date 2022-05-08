<template>
  <PCard v-bind="$attrs">
    <template #header>
      <slot name="header" />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </PCard>
</template>

<script setup lang="ts">
  interface CardProps {
    // background?: string
    width?: string
  }

  withDefaults(defineProps<CardProps>(), {
    // background: 'var(--color-card-background)',
    width: '',
  })
</script>

<style>
  .p-card {
    width: v-bind(width);
    /* background: v-bind(background); */
  }
</style>
