<template>
  <PCard class="m-2 sm:ml-12 lg:w-1/4 sm:w-1/3">
    <template #title>
      <h1 class="text-center">{{ videoName }}</h1></template
    >
    <template #content>
      <video controls>
        <source :src="src" type="video/mp4" />
      </video>
    </template>
    <template #footer>
      <div class="flex items-center text-center flex-nowrap">
        <div class="flex flex-col w-1/4 space-x-2 sm:flex-row">
          <span class="text-center">
            {{ videoDate }}
          </span>
          <PPills class="bg-[#ce1618] rounded-full m-auto w-fit h-8 px-2">
            <span class="align-middle">
              {{ privacyStatus }}
            </span>
          </PPills>
        </div>
        <div class="ml-auto">
          <PButton label="Telecharger" icon="pi pi-download" icon-pos="right" class="text-color p-button-danger" />
        </div>
      </div>
    </template>
  </PCard>
</template>

<script setup lang="ts">
  interface CardVideoProps {
    videoName: string
    src: string
    videoDate: string
    privacyStatus: string
    videoLink?: string
  }
  withDefaults(defineProps<CardVideoProps>(), {
    videoName: '',
    src: '',
    videoDate: '',
    privacyStatus: '',
    videoLink: '',
  })
</script>

<style scoped>
  .communities-videos.v-card {
    border-radius: 0px;
    margin: 1rem;
  }
  .text-color {
    color: white !important;
  }
</style>
