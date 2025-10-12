<script setup lang="ts"></script>

<template>
  <section scheme-container>
    <h2>Мы на <span>карте</span></h2>
    <p>Предоставляем широкий спектр услуг по защите и уходу за вашим автомобилем</p>

    <div id="map"></div>

    <ul>
      <li class="active">г. Москва, ул. Зорге, д.25 б, ст.1</li>
      <li>г. Москва, Октябрьский переулок, 23</li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  #map {
    height: 500px;
    width: 100%;
    background-color: var(--color__scheme);
    flex: 100%;
    border-radius: 20px;
  }

  span {
    color: var(--color__scheme);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    grid-column: 1 / -1;

    li {
      border: 1.5px solid;
      padding: 16px 20px;
      border-radius: var(--radius);

      &.active {
        background-color: var(--color__scheme);
        border-color: var(--color__scheme);
      }
    }
  }
}
</style>
