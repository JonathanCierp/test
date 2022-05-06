<template>
  <span :class="[labelClass, iconLeftClass, iconRightClass]">
    <i v-if="iconLeft" :class="iconLeft" />
    <PInputText :id="id" v-model="inputValue" :type="type" :placeholder="placeholder" />
    <label v-if="label" :for="id">{{ label }}</label>
    <i v-if="iconRight" :class="[iconRight, iconRightClass]" @click="$emit('click:iconRight')" />
  </span>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { InputType } from '.'

  interface InputProps {
    modelValue: string
    id?: string
    label?: string | null
    background?: string
    width?: string
    iconLeft?: string | null
    iconRight?: string | null
    iconRightClass?: string | null
    type?: InputType
    placeholder?: string | null
  }

  const props = withDefaults(defineProps<InputProps>(), {
    modelValue: '',
    id: '',
    label: null,
    background: 'var(--color-input-background-alt)',
    width: '100%',
    iconLeft: null,
    iconRight: null,
    iconRightClass: null,
    type: InputType.TEXT,
    placeholder: null,
  })

  defineEmits(['update:modelValue', 'click:iconRight'])

  const inputValue = ref(props.modelValue)

  const labelClass = computed(() => (props.label ? 'p-float-label' : ''))
  const iconLeftClass = computed(() => (props.iconLeft ? 'p-input-icon-left' : ''))
  const iconRightClass = computed(() => (props.iconLeft ? 'p-input-icon-right' : ''))
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
