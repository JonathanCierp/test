<template>
  <PInputText />
</template>

<script setup lang="ts">
  interface CardProps {
    background?: string
    width?: string
  }

  withDefaults(defineProps<CardProps>(), {
    background: 'var(--color-input-background-alt)',
    width: '100%',
  })
</script>

<style>
  .p-inputtext {
    @apply border-0 py-3 !important;
    width: v-bind(width);
    background: v-bind(background) !important;
    box-shadow: 0px 1px 4px 0px #00000040 !important;
  }

  .p-inputtext:focus {
    @apply border-0 !important;
  }
</style>
