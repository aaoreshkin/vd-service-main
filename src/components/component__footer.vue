<script setup lang="ts"></script>

<template>
  <footer>
    <nav scheme-container>
      <icon__logo />

      <ul>
        <li>Детейлинг</li>
        <li>Полировка</li>
        <li>Химчистка</li>
        <li>Ремонт подвески</li>
        <li>Замена масла</li>
        <li>Сервисное обслуживание</li>
        <li>Оклейка пленкой</li>
        <li>Кузовной ремонт</li>
        <li>Покраска</li>
      </ul>

      <ul>
        <li>Услуги</li>
        <li>Задать вопрос мастеру</li>
        <li>Часто задаваемые вопросы</li>
        <li>Отзывы</li>
        <li>Контакты</li>
        <li>Социальные сети</li>
      </ul>

      <ul>
        <li>Время работы: <strong>10:00-21:00</strong></li>
        <li>+7 (495) 323-99-72</li>
        <li>г. Москва, ул. Зорге, д.25 б, ст.1</li>
        <li>+7 (495) 255-71-72</li>
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
