<template>
  <PSidebar :visible="true" :show-close-icon="false">
    <template #header>
      <div></div>
      <img class="h-8" src="@//assets/logo-ngtv-inline.svg" alt="Logo NGTV inline" />
      <i class="pi pi-sign-out" />
    </template>
    <div class="p-4">
      <span class="p-input-icon-left w-full">
        <i class="pi pi-search" />
        <PInputText class="w-full" placeholder="Rechercher..." />
      </span>
    </div>
    <PPanelMenu :model="menus" :expanded-keys="expandedKeys">
      <template #item="{ item }">
        <template v-if="!item.to">
          <div class="flex items-center gap-4 px-4 py-3" @click="toggleMenu(item)">
            <i :class="[item.icon]" />
            <span>{{ item.label }}</span>
          </div>
        </template>
        <template v-else>
          <i class="pi pi-circle-fill" />
          <RouterLink :to="item.to">
            {{ item.label }}
          </RouterLink>
        </template>
        <!-- <RouterLink v-slot="{ href }" custom :to="item.to ?? ''">
          <a :href="href">{{ item.label }}</a>
        </RouterLink> -->
        <!-- <p @click="item.items.length ? toggleMenu(item) : () => {}">
          {{ item.label }}
        </p> -->
      </template>
    </PPanelMenu>
  </PSidebar>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const menus = ref([
    {
      key: 0,
      label: t('message.components.app.AppSidebar.menu0.label'),
      icon: 'pi pi-fw pi-table',
      items: [
        {
          label: t('message.components.app.AppSidebar.menu0.subMenus.0'),
          to: { name: 'dashboards-statistics' },
        },
        {
          label: t('message.components.app.AppSidebar.menu0.subMenus.1'),
          to: { name: 'dashboards-settings' },
        },
      ],
    },
    {
      key: 1,
      label: t('message.components.app.AppSidebar.menu1.label'),
      icon: 'pi pi-fw pi-building',
      items: [
        {
          label: t('message.components.app.AppSidebar.menu1.subMenus.0'),
          to: { name: 'clubs-centers' },
        },
        {
          label: t('message.components.app.AppSidebar.menu1.subMenus.1'),
          to: { name: 'clubs-installations' },
        },
        {
          label: t('message.components.app.AppSidebar.menu1.subMenus.2'),
          to: { name: 'clubs-sponsorings' },
        },
        {
          label: t('message.components.app.AppSidebar.menu1.subMenus.3'),
          to: { name: 'clubs-livestreamings' },
        },
        {
          label: t('message.components.app.AppSidebar.menu1.subMenus.4'),
          to: { name: 'clubs-documents' },
        },
      ],
    },
    {
      key: 2,
      label: t('message.components.app.AppSidebar.menu2.label'),
      icon: 'pi pi-fw pi-play',
      items: [
        {
          label: t('message.components.app.AppSidebar.menu2.subMenus.0'),
          to: { name: 'services-videos' },
        },
        {
          label: t('message.components.app.AppSidebar.menu2.subMenus.1'),
          to: { name: 'services-replays' },
        },
        {
          label: t('message.components.app.AppSidebar.menu2.subMenus.2'),
          to: { name: 'services-contests' },
        },
      ],
    },
    {
      key: 3,
      label: t('message.components.app.AppSidebar.menu3.label'),
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: t('message.components.app.AppSidebar.menu3.subMenus.0'),
          to: { name: 'communities-players' },
        },
        {
          label: t('message.components.app.AppSidebar.menu3.subMenus.1'),
          to: { name: 'communities-videos' },
        },
      ],
    },
    {
      key: 4,
      label: t('message.components.app.AppSidebar.menu4.label'),
      icon: 'pi pi-fw pi-phone',
      items: [
        {
          label: t('message.components.app.AppSidebar.menu4.subMenus.0'),
          to: { name: 'supports-home' },
        },
        {
          label: t('message.components.app.AppSidebar.menu4.subMenus.1'),
          to: { name: 'supports-ressources' },
        },
      ],
    },
    {
      key: 5,
      label: t('message.components.app.AppSidebar.menu5.label'),
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: t('message.components.app.AppSidebar.menu5.subMenus.0'),
          to: { name: 'profiles-informations' },
        },
        {
          label: t('message.components.app.AppSidebar.menu5.subMenus.1'),
          to: { name: 'profiles-payements' },
        },
      ],
    },
  ])
  const expandedKeys: { [key: number]: boolean } = reactive({})

  const toggleMenu = (menu: any) => {
    if (menu.items && menu.items.length) {
      if (expandedKeys[menu.key]) {
        expandedKeys[menu.key] = false
      } else {
        expandedKeys[menu.key] = true
      }

      for (let item of menus.value) {
        if (menu.key !== item.key) {
          expandedKeys[item.key] = false
        }
      }
    }
  }
</script>

<style>
  .p-sidebar {
    @apply rounded-none border-0 !important;
    width: 275px !important;
    background: var(--color-background-alt-2) !important;
  }
  .p-sidebar .p-sidebar-header {
    height: 64px;
    background: var(--color-background-alt) !important;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-header-content {
    @apply w-full flex items-center justify-between;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-header-content i {
    @apply text-xl cursor-pointer;
  }
  .p-sidebar .p-sidebar-content {
    @apply p-0 !important;
  }
  .p-sidebar .p-panelmenu-header {
    @apply font-bold cursor-pointer;
  }
  .p-sidebar .p-panelmenu-header.p-highlight {
    border-right: 4px solid var(--color-error);
    background: linear-gradient(180deg, rgba(196, 196, 196, 0.13) 0%, rgba(196, 196, 196, 0.04) 100%);
  }
  .p-sidebar .p-panelmenu-header.p-highlight span {
    color: var(--color-error-alt);
  }
  .p-sidebar .p-panelmenu-header.p-highlight ~ .p-toggleable-content {
    border-right: 4px solid var(--color-error);
  }
  .p-sidebar .p-toggleable-content .p-panelmenu-content {
    @apply border-0 !important;
    background: var(--color-background-alt-2) !important;
  }
  .p-sidebar .p-toggleable-content .p-panelmenu-content li {
    @apply flex items-center ml-5;
  }
  .p-sidebar .p-toggleable-content .p-panelmenu-content i {
    font-size: 0.5rem;
  }
  .p-sidebar .p-toggleable-content .p-panelmenu-content a {
    @apply w-full block p-4;
  }
  .p-sidebar .p-panelmenu-icon {
    @apply absolute right-0;
  }
  .p-sidebar-mask {
    @apply hidden;
  }
</style>
