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
        <span class="p-float-label p-input-icon-left p-input-icon-right">
          <i class="pi pi-lock" />
          <BaseInput id="password" v-model="playerForm.password" :type="showPassword ? 'text' : 'password'" />
          <label for="password">Mot de passe</label>
          <i class="pi cursor-pointer" :class="[showPassword ? 'pi-eye-slash' : 'pi-eye']" @click="showPassword = !showPassword" />
        </span>
      </template>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
  import useAuth from '@auth/composables/useAuth'
  import { ref } from 'vue'

  const { playerForm } = useAuth()
  const showPassword = ref<boolean>(false)
</script>

<style>
  #signin-page .p-card .p-card-content {
    @apply flex flex-col gap-12;
  }
</style>
