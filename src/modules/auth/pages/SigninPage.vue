<template>
  <main id="signin-page" class="flex flex-col items-center justify-center h-screen">
    <img class="mb-8 h-14" src="@//assets/logo-ngtv-inline.svg" />
    <BaseForm ref="formEl" @submit.prevent="onSignin">
      <BaseCard width="500px">
        <template #content>
          <BaseFormInput
            id="email"
            ref="emailEl"
            v-model="playerForm.email"
            :label="$t('message.modules.auth.pages.SigninPage.email')"
            icon-left="pi pi-envelope"
            :rules="[requiredRule, emailRule]"
          />
          <BaseFormInput
            id="password"
            ref="passwordEl"
            v-model="playerForm.password"
            :label="$t('message.modules.auth.pages.SigninPage.password')"
            :type="showPassword ? 'text' : 'password'"
            icon-left="pi pi-lock"
            :icon-right="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
            icon-right-class="cursor-pointer"
            :rules="[requiredRule]"
            @click:icon-right="showPassword = !showPassword"
          />
        </template>
        <template #footer>
          <BaseButton block type="submit">
            {{ $t('message.modules.auth.pages.SigninPage.login') }}
          </BaseButton>
        </template>
      </BaseCard>
    </BaseForm>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import useValidationRule from '@/composables/useValidationRule'
  import useAuth from '@auth/composables/useAuth'

  const { requiredRule, emailRule } = useValidationRule()
  const { playerForm, formEl, emailEl, passwordEl, onSignin } = useAuth()
  const showPassword = ref<boolean>(false)
</script>

<style>
  #signin-page .p-card .p-card-content {
    @apply flex flex-col gap-8;
  }
</style>
