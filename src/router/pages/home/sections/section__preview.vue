<script setup lang="ts">
import { useProvider } from '@/stores'

const provider = useProvider()
</script>

<template>
  <component__marquue />

  <section>
    <div scheme-container>
      <article>
        <p>
          <b>VD СЕРВИС —</b> это комплексный центр по обслуживанию и восстановлению премиальных автомобилей в Москве.
        </p>

        <button @click="provider.isModal = true">
          <icon__arrow />

          Записаться

          <icon__forward />
        </button>
      </article>

      <article>
        <component__video />
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: url('/shape_1.avif') no-repeat right top;
  background-size: contain;
  height: 1020px;
  position: relative;

  &::before {
    content: '';
    background: url('/preview__bg2.avif') no-repeat center bottom;
    background-size: 2560px;
    position: absolute;
    inset: 0;
  }

  button {
    background-color: var(--color__scheme);
    border-radius: 999px;
    cursor: pointer;
    display: flex;
    font:
      normal 400 20px / 1.6 'Oswald Variable',
      sans-serif;
    gap: 10px;
    padding: 12px 40px 12px 12px;
    place-content: space-between;
    place-items: center;
    position: relative;
    text-transform: uppercase;
  }

  [scheme-container] {
    padding-top: 500px;
    display: flex;
    gap: 20px;
    justify-content: space-between;

    article {
      display: grid;
      gap: 60px;
      place-content: center;
      position: relative;

      p {
        max-width: 350px;
      }

      img {
        margin: auto auto 37px;
        min-width: 500px;
        max-width: 778px;
        width: 100%;
        z-index: 1;
      }
    }
  }
}

@media only screen and (max-width: 1190px) {
  section {
    height: 1080px;

    &::before {
      background-position: bottom;
    }

    [scheme-container] {
      padding-top: 280px;
      display: flex;
      gap: 40px;
      justify-content: space-between;
      flex-direction: column;
    }
  }
}

@media only screen and (max-width: 820px) {
  section {
    &::before {
      background-size: 1020px;
    }
  }
}
</style>
