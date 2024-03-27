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
        path: '/profile',
        name: 'profile',
        component: () => import('@/view/profile.vue')
      },
      {
        path: '/servers',
        name: 'servers',
        component: () => import('@/view/servers.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
