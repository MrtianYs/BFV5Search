import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    redirect: '/profile',
    children: [
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
