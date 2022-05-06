<template>
  <Component :is="BaseTitleVue" title="Liste des clips videos" />
  <main class="flex flex-wrap">
    <Component
      :is="VideosList"
      v-for="index in 12"
      :key="index"
      src="https://raw.githubusercontent.com/VachetVirginie/ressourcesPourTest/main/basket1.mp4"
      :video-date="new Date(Date.now()).toLocaleDateString() + ' ' + new Date(Date.now()).toLocaleTimeString('fr-FR')"
      privacy-status="private_owner"
      video-name="Video de Toto"
    />
  </main>
</template>
<script setup lang="ts">
  import VideosList from '@/modules/communities/pages/videos/VideosList.vue'
  import BaseTitleVue from '@/components/base/BaseTitle/BasePageTitle.vue'
</script>
