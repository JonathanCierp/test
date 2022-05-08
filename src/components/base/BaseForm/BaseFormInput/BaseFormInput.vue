<template>
  <div>
    <span class="w-full" :class="[labelClass, iconLeftClass, iconRightClass]">
      <i v-if="iconLeft" :class="iconLeft" />
      <PInputText
        v-bind="$attrs"
        :id="id"
        ref="inputEl"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :class="[!input.isValid ? 'p-invalid' : '']"
        @input="onChangeValue"
        @blur="onChangeValue"
      />
      <label v-if="label" :for="id">{{ label }}</label>
      <i v-if="iconRight" :class="[iconRight, iconRightClass]" @click="$emit('click:iconRight')" />
    </span>
    <p v-if="!input.isValid" class="flex items-center mt-2 font-medium text-red-500 text-xs">
      <i class="mr-2 pi pi-exclamation-triangle" />
      {{ input.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import useValidation from '@/composables/useValidation'
  import { InputType } from '.'

  interface InputProps {
    modelValue: string
    id?: string
    label?: string | null
    // background?: string
    width?: string
    iconLeft?: string | null
    iconRight?: string | null
    iconRightClass?: string | null
    type?: InputType
    placeholder?: string | null
    rules?: Array<(...args: any[]) => string>
  }

  const props = withDefaults(defineProps<InputProps>(), {
    modelValue: '',
    id: '',
    label: null,
    // background: 'var(--color-input-background-alt)',
    width: '100%',
    iconLeft: null,
    iconRight: null,
    iconRightClass: null,
    type: InputType.TEXT,
    placeholder: null,
    rules: () => [],
  })

  const emit = defineEmits(['update:modelValue', 'click:iconRight'])

  const inputValue = ref<string>(props.modelValue)
  const inputEl = ref<any>()
  const input = ref<{ message: string; isValid: boolean }>(useValidation(inputValue.value, props.rules, false))
  const isValid = ref<boolean>(input.value.isValid)

  const labelClass = computed(() => (props.label ? 'p-float-label' : ''))
  const iconLeftClass = computed(() => (props.iconLeft ? 'p-input-icon-left' : ''))
  const iconRightClass = computed(() => (props.iconRight ? 'p-input-icon-right' : ''))

  const onChangeValue = (e: Event) => {
    const v = (e.target as HTMLInputElement).value

    if (e.type === 'blur' && props.rules.length) {
      validate(v)
    }

    emit('update:modelValue', v)
  }
  const validate = (v = inputValue.value) => {
    input.value = useValidation(v, props.rules)
    isValid.value = input.value.isValid
  }

  defineExpose({
    isValid,
    validate,
  })
</script>

<style>
  .p-inputtext {
    /* @apply border-0 py-3 !important; */
    width: v-bind(width);
    /* background: v-bind(background) !important; */
    /* box-shadow: 0px 1px 4px 0px #00000040 !important; */
  }

  /* .p-inputtext:focus {
    @apply border-0 !important;
  } */
</style>
