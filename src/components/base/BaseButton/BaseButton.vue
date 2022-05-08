<template>
  <PButton v-bind="$attrs" :class="[blockClass]" :loading="loading">
    <slot />
  </PButton>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface ButtonProps {
    block?: boolean
    loading?: boolean
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    block: false,
    loading: false,
  })

  const blockClass = computed(() => (props.block ? 'w-full items-center justify-center' : ''))
</script>
