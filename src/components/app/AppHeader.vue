<template>
  <PMenubar>
    <template #start>
      <span class="text-xl font-medium">Services NGTV</span>
    </template>

    <template #end>
      <ul>
        <li>
          <i class="pi pi-wallet" />
        </li>
        <li>
          <i class="pi pi-comment" />
        </li>
        <li>
          <i class="pi pi-bell" />
        </li>
        <li>
          <PAvatar label="J" size="large" shape="circle" />
        </li>
      </ul>
    </template>
  </PMenubar>
</template>

<style>
  .p-menubar {
    @apply rounded-none border-0 px-4 !important;
    background: linear-gradient(90deg, #b82d28 -41.92%, #3d0d07 100%) !important;
    transform: translateX(275px);
    width: calc(100% - 275px);
    height: 64px;
  }
  .p-menubar ul {
    @apply flex items-center gap-6;
  }
  .p-menubar ul i {
    @apply text-lg;
  }
</style>
