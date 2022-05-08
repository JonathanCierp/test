<template>
  <form ref="formEl" novalidate>
    <slot />
  </form>
</template>

<script setup lang="ts">
  import { inject, ref } from 'vue'

  const children = inject<any>('formChildren', [])
  const formEl = ref()
  const isValid = ref<boolean>(true)

  const validateForm = () => {
    isValid.value = true

    for (let child of children) {
      if (child.value && 'validate' in child.value) {
        child.value.validate()
        if (!child.value.isValid) isValid.value = child.value.isValid
      }
    }
  }

  defineExpose({
    validateForm,
    isValid,
  })
</script>
