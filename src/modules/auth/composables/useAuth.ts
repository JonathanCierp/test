import { provide, reactive, ref } from 'vue'
import { PlayerSigninInput } from '@/types/Player'

export default () => {
  const isLoading = ref<boolean>(false)
  const formEl = ref()
  const emailEl = ref()

  const playerForm = reactive<PlayerSigninInput>({
    email: '',
    password: '',
  })

  const onSignin = () => {
    formEl.value.validateForm()
  }

  provide('formChildren', [emailEl])

  return {
    isLoading,
    formEl,
    emailEl,

    playerForm,

    onSignin,
  }
}
