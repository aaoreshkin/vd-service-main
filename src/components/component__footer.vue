<script setup lang="ts">
import { articles } from '@/services'

const sections = [
  { hash: '#services', title: 'Услуги' },
  { hash: '#chat', title: 'Задать вопрос мастеру' },
  { hash: '#faq', title: 'Часто задаваемые вопросы' },
  { hash: '#reviews', title: 'Отзывы' },
  { hash: '#contacts', title: 'Контакты' },
  { hash: '#social', title: 'Социальные сети' },
]
</script>

<template>
  <footer>
    <nav scheme-container>
      <icon__logo />

      <ul>
        <li v-for="el in articles" :key="el.slug">
          <router-link :to="`/services/${el.slug}`">{{ el.title }}</router-link>
        </li>
      </ul>

      <ul>
        <li v-for="el in sections" :key="el.hash">
          <router-link :to="{ path: '/', hash: el.hash }">{{ el.title }}</router-link>
        </li>
      </ul>

      <ul>
        <li>Время работы: <strong>10:00-21:00</strong></li>
        <li><a href="tel:+74953239972">+7 (495) 323-99-72</a></li>
        <li>г. Москва, ул. Зорге, д.25 б, ст.1</li>
        <li><a href="tel:+74952557172">+7 (495) 255-71-72</a></li>
        <li>г. Москва, Октябрьский переулок, д.23</li>
      </ul>

      <ul>
        <li>© 2025 ВД сервис</li>
        <li>Политика конфиденциальности</li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: color-mix(in srgb, var(--color__text) 90%, transparent);
  color: var(--color);
  padding-top: 40px;

  nav {
    display: grid;
    gap: 40px 0;
    grid-template: auto / repeat(4, 1fr);

    ul {

      li {
        line-height: 1.8;
      }

      &:nth-of-type(3) {
        li {
          &:first-of-type {
            margin-bottom: clamp(20px, 4vw, 40px);
          }

          &:nth-of-type(4) {
            margin-top: clamp(20px, 4vw, 40px);
          }
        }
      }

      &:last-of-type {
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
      }

      li {
        color: var(--color);

        strong {
          font-size: 24px;
          color: color-mix(in srgb, var(--color) 80%, transparent);
        }
      }
    }
  }
}

@media only screen and (max-width: 1190px) {
  footer {
    nav {
      grid-template-columns: repeat(3, 1fr);

      svg {
        grid-column: 1 / -1;
      }
    }
  }
}

@media only screen and (max-width: 820px) {
  footer {
    nav {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media only screen and (max-width: 580px) {
  footer {
    nav {
      grid-template-columns: 1fr;
    }
  }
}
</style>
