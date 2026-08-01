import { createApp, defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router'

import { createYmaps } from 'vue-yandex-maps'
import VueScrollTo from 'vue-scrollto'

import app from '@/app.vue'

const instance = createApp(app)

type ComponentImport = Record<string, () => Promise<Component>>

/**
 * Register components from a glob import
 * @param components - The components from import.meta.glob
 * @param componentType - The type of component (used for prefix and to remove from filename)
 */
function registerComponents(components: ComponentImport, componentType: string): void {
  for (const [path, component] of Object.entries(components)) {
    const name: string =
      path
        .split('/')
        .pop()!
        .replace(/\.(vue)$/, '')
        .replace(componentType, '') ?? ''

    instance.component(
      `${componentType}${name}`,
      defineAsyncComponent(() => component()),
    )
  }
}

// Import and register components
const iconComponents: ComponentImport = import.meta.glob('@/components/icons/icon*.vue')
registerComponents(iconComponents, 'icon')

const baseComponents: ComponentImport = import.meta.glob('@/components/component*.vue')
registerComponents(baseComponents, 'component')

const sectionComponents: ComponentImport = import.meta.glob('@/router/pages/home/sections/section*.vue')
registerComponents(sectionComponents, 'section')

// Import yandex map API
const map = createYmaps({
  apikey: '13614fae-a5fb-45e4-872d-e75102b1debe',
})

instance.use(createPinia())
instance.use(router)
instance.use(map)
instance.use(VueScrollTo)

instance.mount('body')
