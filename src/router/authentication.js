export default [
  {
    path: '/loginV1',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/authentication/loginV1')
  },
  {
    path: '/registerV1',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/authentication/registerV1')
  },
  {
    path: '/loginV2',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/authentication/loginV2')
  },
  {
    path: '/registerV2',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/authentication/registerV2')
  },
  {
    path: '/lockscreen',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/authentication/lockscreen')
  }
  // {
  //   path: '/password_reset',
  //   meta: {
  //     requireAuth: false
  //   },
  //   component: () => import('@/views/authentication/password_reset')
  // }
];
