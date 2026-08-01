<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findArticle } from '@/services'
import { useProvider } from '@/stores'

const route = useRoute()
const provider = useProvider()

const article = computed(() => findArticle(String(route.params.slug)))
</script>

<template>
  <section v-if="article" scheme-container>
    <router-link :to="{ path: '/', hash: '#services' }" class="back">
      <icon__forward />
      Назад
    </router-link>

    <h1>{{ article.headline ?? article.title }}</h1>

    <p v-if="article.lead" class="lead">{{ article.lead }}</p>

    <div v-for="(block, index) in article.blocks" :key="index" class="block" :class="{ sub: block.sub }">
      <component :is="block.sub ? 'h4' : 'h3'">{{ block.heading }}</component>

      <p v-for="(paragraph, i) in block.text" :key="i">{{ paragraph }}</p>

      <component :is="block.ordered ? 'ol' : 'ul'" v-if="block.items">
        <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
      </component>

      <p v-if="block.after">{{ block.after }}</p>
    </div>

    <nav>
      <h3>Оставить заявку</h3>

      <p>
        {{ article.cta ?? 'Оставьте номер — мастер свяжется с вами, уточнит детали и подберёт удобное время.' }}
      </p>

      <button type="button" @click="provider.open(`Заявка: ${article.title}`)">
        <icon__arrow />

        Записаться

        <icon__forward />
      </button>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: 1560px;
  padding: 160px var(--padding) 100px;
  position: relative;

  h1 {
    margin: 20px 0;
  }

  h3 {
    margin-bottom: 20px;
  }

  h4 {
    color: var(--color__scheme);
  }

  p {
    color: color-mix(in srgb, var(--color__text) 80%, transparent);
  }

  .back {
    align-items: center;
    display: flex;
    gap: 10px;
    text-transform: uppercase;
    width: fit-content;

    svg {
      rotate: 180deg;
    }
  }

  .lead {
    color: var(--color__text);
    font-size: clamp(16px, 4vw, 20px);
    line-height: 1.8;
  }

  .block.sub {
    margin-top: 30px;
  }

  .block {
    display: grid;
    gap: 20px;
    margin-top: 60px;

    ul,
    ol {
      display: grid;
      gap: 12px;
    }

    li {
      color: color-mix(in srgb, var(--color__text) 80%, transparent);
      padding-left: 30px;
      position: relative;

      &::before {
        color: var(--color__scheme);
        position: absolute;
        left: 0;
      }
    }

    ul li::before {
      content: '—';
    }

    ol {
      counter-reset: step;

      li {
        counter-increment: step;

        &::before {
          content: counter(step) '.';
        }
      }
    }
  }

  nav {
    background-color: color-mix(in srgb, var(--color__text) 6%, transparent);
    border-radius: var(--radius__primary);
    display: grid;
    gap: 20px;
    justify-items: start;
    margin-top: 100px;
    padding: 40px;

    button {
      background-color: var(--color__scheme);
      border-radius: var(--radius);
      cursor: pointer;
      display: flex;
      font:
        normal 400 20px / 1.6 'Oswald Variable',
        sans-serif;
      gap: 10px;
      margin-top: 20px;
      padding: 12px 40px 12px 12px;
      place-items: center;
      text-transform: uppercase;

      &:hover {
        background-color: color-mix(in srgb, var(--color__scheme) 80%, transparent);
      }
    }
  }
}

@media only screen and (max-width: 580px) {
  section {
    padding-top: 120px;

    nav {
      padding: 20px;
    }
  }
}
</style>
