import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { findArticle } from '@/services'

const description = document.querySelector('meta[name="description"]')

// значения главной берём из index.html, чтобы не дублировать их ещё и в коде
const homeTitle = document.title
const homeDescription = description?.getAttribute('content') ?? ''

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) return savedPosition

    if (!to.hash) return { top: 0 }

    // секции главной подгружаются асинхронно, сразу после перехода цели скролла ещё нет в DOM
    if (to.path !== from.path) await new Promise((resolve) => setTimeout(resolve, 300))

    const header = document.querySelector('header')

    return {
      el: to.hash,
      top: header ? header.getBoundingClientRect().bottom + 20 : 0,
      behavior: 'smooth',
    }
  },
})

router.beforeEach((to) => {
  if (to.name === 'service' && !findArticle(String(to.params.slug))) return { path: '/' }
})

router.afterEach((to) => {
  const article = to.name === 'service' ? findArticle(String(to.params.slug)) : undefined

  document.title = article ? `${article.title} — ВД Сервис` : homeTitle
  description?.setAttribute('content', article ? article.metaDescription : homeDescription)
})

export { router }
