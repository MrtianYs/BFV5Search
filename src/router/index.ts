import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    redirect: '/search',
    children: [
      {
        path: '/search',
        name: 'search',
        component: () => import('@/view/search.vue')
      },
      {
        path: '/b5',
        name: 'b5',
        component: () => import('@/view/b5.vue')
      },
      {
        path: '/b1',
        name: 'b1',
        component: () => import('@/view/b1.vue')
      }
      // {
      //   path: '/b2042',
      //   name: 'b2042',
      //   component: () => import('@/view/b2042.vue')
      // }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
