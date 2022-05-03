<template>
  <div v-if="$route.meta.isLoadedApp">
    <!-- <AppHeader v-if="$route.meta.requiresAuth" /> -->
    <!-- <AppSidebar v-if="$route.meta.requiresAuth" /> -->
    <RouterView />
  </div>
</template>
