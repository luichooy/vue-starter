export default [
  {
    path: '/error',
    redirect: '/error/404',
    component: () => import('@/views/error/index'),
    children: [
      {
        path: '404',
        meta: {
          requireAuth: false
        },
        component: () => import('@/views/error/404')
      },
      {
        path: '500',
        meta: {
          requireAuth: false
        },
        component: () => import('@/views/error/500')
      }
    ]
  }
];
