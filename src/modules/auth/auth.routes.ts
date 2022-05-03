import SigninPage from '@auth/pages/SigninPage.vue'

export default [
  {
    path: '/auth/signin',
    component: SigninPage,
    name: 'auth-signin',
    meta: {
      requiresAuth: false,
      roles: [],
    },
  },
]
