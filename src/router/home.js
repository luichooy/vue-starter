import Layout1 from '@/views/layout/Layout';

export default [
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout1,
    children: [
      {
        path: 'index',
        meta: {
          requireAuth: false
        },
        component: () => import('@/views/home/index')
      }
    ]
  }
];
