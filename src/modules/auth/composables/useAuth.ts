import { provide, reactive, ref } from 'vue'
import { PlayerSigninInput } from '@/types/Player'

export default () => {
  const isLoading = ref<boolean>(false)
  const formEl = ref()
  const emailEl = ref()
  const passwordEl = ref()

  const playerForm = reactive<PlayerSigninInput>({
    email: '',
    password: '',
  })

  const onSignin = () => {
    formEl.value.validateForm()

    if (formEl.value.isValid) {
    }
  }

  provide('formChildren', [emailEl, passwordEl])

  return {
    isLoading,
    formEl,
    emailEl,
    passwordEl,

    playerForm,

    onSignin,
  }
}
