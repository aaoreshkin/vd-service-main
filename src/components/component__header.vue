<script setup lang="ts">
</script>

<template>
  <header scheme-container>
    <nav>
      <ul>
        <li v-scroll-to="'#services'">Услуги</li>

        <li v-scroll-to="'#about'">О компании</li>

        <li v-scroll-to="'#chat'">Задать вопрос</li>
      </ul>

      <icon__logo v-scroll-to="'#app'" />

      <ul>
        <li v-scroll-to="'#contacts'">Контакты</li>

        <li>
          <a href="https://wa.me/74953239972?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%21%20%D0%9D%D0%B0%D1%88%D0%B5%D0%BB%20%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9%D0%BB%D0%B8%D0%BD%D0%B3%D0%B0%21"
            target="_blank">
            <icon__whatsup />
          </a>
        </li>

        <li>
          <a href="https://t.me/vdservice77" target="_blank">
            <icon__telegram />
          </a>
        </li>

        <li>
          <a href="tel:+74953239972"> +7 (495) 323-99-72 </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  backdrop-filter: blur(40px);
  border-radius: 999px;
  font:
    normal 300 20px / 1.6 'Oswald Variable',
    sans-serif;
  inset: 0 0 auto;
  margin-top: clamp(20px, 4vw, 60px);
  position: fixed;
  text-transform: uppercase;
  z-index: 9;

  nav {
    background-color: color-mix(in srgb, var(--color__text) 0%, transparent);
    display: flex;
    gap: clamp(20px, 4vw, 40px);

    ul {
      display: flex;
      gap: inherit;
      place-items: center;

      li {
        cursor: pointer;

        &:hover {
          color: var(--color__scheme);
        }
      }
    }

    svg {
      cursor: pointer;
      margin: auto;

      &:hover {
        color: var(--color__scheme);
      }
    }
  }
}

@media only screen and (max-width: 1190px) {
  header {
    nav {
      ul {
        &:first-of-type {
          display: none;
        }

        &:last-of-type {
          li {
            &:first-of-type {
              display: none;
            }
          }
        }
      }

      svg {
        margin-left: 0;
      }
    }
  }
}

@media only screen and (max-width: 580px) {
  header {
    nav {
      ul {

        &:last-of-type {
          li {
            &:last-of-type {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
