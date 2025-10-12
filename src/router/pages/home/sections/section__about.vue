<script setup lang="ts"></script>

<template>
  <section scheme-container>
    <icon__logo />

    <h2>> 20 тыс. <span>довольных клиентов</span></h2>

    <ul>
      <li>
        <span>01</span>
        Детейлинг
      </li>

      <li>
        <span>02</span>
        Сервис
      </li>

      <li>
        <span>03</span>
        Кузовной ремонт
      </li>

      <li>
        VD Service — это комплексный центр по обслуживанию и восстановлению премиальных автомобилей
        в Москве.
      </li>
    </ul>

    <nav>
      <h2>Работаем честно и дорожим <br />каждым клиентом и партнером</h2>

      <p>Внимание к деталям — без компромиссов.</p>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 100px var(--padding);
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  nav {
    flex: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 60px;

    h2 {
      font-size: 48px;
      max-width: 900px;
      font-size: 48px;
      line-height: 72px;
      margin: 0;

      strong {
        color: var(--color__scheme);
      }
    }

    p {
      opacity: 0.6;
    }
  }

  >h2 {
    font-size: clamp(72px, 6vw, 100px);
    line-height: clamp(72px, 6vw, 82px);
    color: var(--color__scheme);
    margin: 0;

    span {
      display: block;
      font-size: 22px;
      padding-left: 90px;
      color: var(--color__text);
      font-weight: 400;
    }
  }

  ul {
    display: flex;
    place-items: center;
    gap: 20px;
    margin-top: 60px;

    li {
      // background-color: rgba(40, 48, 67, 0.4);
      backdrop-filter: blur(40px);
      border: 2px solid color-mix(in srgb, var(--color__text) 60%, transparent);
      height: 200px;
      border-radius: 999px;
      min-width: 200px;
      display: flex;
      place-items: center;
      justify-content: center;
      position: relative;

      &:nth-child(2) {
        margin-left: -60px;
      }

      &:nth-child(3) {
        margin-left: -60px;
      }

      &:last-child {
        width: fit-content;
        padding: 40px;
      }

      span {
        position: absolute;
        top: -40px;
        opacity: 0.6;
      }
    }
  }
}

@media only screen and (max-width: 1190px) {
  section {
    ul {
      flex-wrap: wrap;
    }
  }
}

@media only screen and (max-width: 580px) {
  section {
    ul {
      flex-direction: column;
      gap: 60px;

      li {
        margin: 0 !important;
      }
    }

    nav {
      align-items: flex-start;
      gap: 20px;
      flex-direction: column;
    }
  }
}
</style>
