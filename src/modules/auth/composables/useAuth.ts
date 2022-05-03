import { reactive, ref } from 'vue'
import { PlayerSigninInput } from '@/types/Player'

export default () => {
  const isLoading = ref<boolean>(false)
  const playerForm = reactive<PlayerSigninInput>({
    email: '',
    password: '',
  })

  return {
    isLoading,
    playerForm,
  }
}
