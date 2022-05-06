<template>
  <main id="signin-page" class="flex flex-col items-center justify-center h-screen">
    <img class="mb-8 h-14" src="@//assets/logo-ngtv-inline.svg" />
    <BaseCard width="500px">
      <template #content>
        <span class="p-float-label p-input-icon-left">
          <i class="pi pi-envelope" />
          <BaseInput id="email" v-model="playerForm.email" type="text" />
          <label for="email">Email</label>
        </span>
        <BaseInput
          id="password"
          v-model="playerForm.password"
          :label="$t('message.modules.auth.pages.SigninPage.password')"
          :type="showPassword ? 'text' : 'password'"
          icon-left="pi pi-lock"
          :icon-right="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
          icon-right-class="cursor-pointer"
          @click:icon-right="showPassword = !showPassword"
        />
      </template>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import useAuth from '@auth/composables/useAuth'

  const { playerForm } = useAuth()
  const showPassword = ref<boolean>(false)
</script>

<style>
  #signin-page .p-card .p-card-content {
    @apply flex flex-col gap-12;
  }
</style>
