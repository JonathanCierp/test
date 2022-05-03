import { createRouter, createWebHistory } from 'vue-router'
//import checkAuth from '@/middleware/checkAuth'
// import communitiesRoutes from '@/communities/communities.routes'
import authRoutes from '@auth/auth.routes'
import TestPage from '@/pages/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //...communitiesRoutes,
    ...authRoutes,
    {
      path: '/',
      component: TestPage,
      name: 'test-home',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    // @TODO : To remove
    {
      path: '/dashboards-statistics',
      component: TestPage,
      name: 'dashboards-statistics',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/dashboards-settings',
      component: TestPage,
      name: 'dashboards-settings',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/clubs-centers',
      component: TestPage,
      name: 'clubs-centers',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/clubs-installations',
      component: TestPage,
      name: 'clubs-installations',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/clubs-sponsorings',
      component: TestPage,
      name: 'clubs-sponsorings',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/clubs-livestreamings',
      component: TestPage,
      name: 'clubs-livestreamings',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/clubs-documents',
      component: TestPage,
      name: 'clubs-documents',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/services-videos',
      component: TestPage,
      name: 'services-videos',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/services-replays',
      component: TestPage,
      name: 'services-replays',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/services-contests',
      component: TestPage,
      name: 'services-contests',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/supports-home',
      component: TestPage,
      name: 'supports-home',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/supports-ressources',
      component: TestPage,
      name: 'supports-ressources',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/profiles-informations',
      component: TestPage,
      name: 'profiles-informations',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
    {
      path: '/profiles-payements',
      component: TestPage,
      name: 'profiles-payements',
      meta: {
        requiresAuth: true,
        roles: [],
      },
    },
  ],
})

router.beforeEach(async (to) => {
  to.meta.isLoadedApp = false
  const isAuthenticated = false //await checkAuth()
  const isAuthRequired = to.meta.requiresAuth

  if (isAuthenticated) {
    if (!isAuthRequired) {
      return '/'
    }
  } else {
    if (isAuthRequired) {
      return '/auth/signin'
    }
  }
  to.meta.isLoadedApp = true

  return true
})

export default router
