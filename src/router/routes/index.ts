import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/router/pages/home/views/viewsIndex.vue'),
  },
]

export { routes }
