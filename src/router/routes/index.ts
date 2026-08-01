import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/router/pages/home/views/viewsIndex.vue'),
  },
  {
    path: '/services/:slug',
    name: 'service',
    component: () => import('@/router/pages/service/views/viewsIndex.vue'),
  },
]

export { routes }
