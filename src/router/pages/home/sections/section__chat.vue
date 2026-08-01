<script setup lang="ts">

import { useProvider } from '@/stores';

const provider = useProvider()
</script>

<template>
  <section scheme-container>
    <h2>
      <span>Задай свой вопрос</span>
      Консультация с мастером
    </h2>

    <component__chat />

    <nav scheme-container>
      <p>
        Запишитесь в любой из наших сервисов на более подробную диагностику. <br />
        Подберем лучшие решения с заботой о качестве.
      </p>

      <button @click="provider.isModal = true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 43" width="43">
          <circle cx="21.5" cy="21.25" r="21.25" fill="currentColor" />
          <path fill="var(--color__scheme)"
            d="M28.613 21.613a.867.867 0 0 0 0-1.226l-5.52-5.52a.867.867 0 0 0-1.226 1.226L26.773 21l-4.906 4.907a.867.867 0 0 0 1.226 1.226l5.52-5.52ZM12 21v.867h16v-1.734H12V21Z" />
        </svg>

        Записаться на диагностику

        <icon__forward />
      </button>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: unset;
  position: relative;

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;

    button {
      background-color: color-mix(in srgb, var(--color__text) 6%, transparent);
      border-radius: 999px;
      backdrop-filter: blur(10px);
      display: flex;
      font-weight: 500;
      gap: 10px;
      padding: 12px 40px 12px 12px;
      place-content: space-between;
      place-items: center;
      text-transform: uppercase;
      position: relative;
      color: var(--color__text);
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 1;
      cursor: pointer;

      &:hover {
        background-color: color-mix(in srgb, var(--color__text) 10%, transparent);
      }
    }
  }

  h2 {
    max-width: 1560px;
    margin: 100px auto;

    span {
      display: block;
      font-size: 18px;
    }
  }
}

@media only screen and (max-width: 1190px) {
  section {
    nav {
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
