<script setup lang="ts">
import { services } from '@/services'
</script>

<template>
  <section>
    <div scheme-container>
      <h2>Услуги</h2>

      <component__services-card v-for="el in services" :key="el.id" :service="el" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;

  &::after {
    content: '';

    background-image:
      radial-gradient(500px 500px at 50% 60%, #3a68dd28 7%, rgba(7, 58, 255, 0) 100%),
      radial-gradient(300px 300px at 30% 60%, #325fec79 6%, rgba(94, 7, 255, 0) 100%);
    position: absolute;
    z-index: -1;
    inset: 0;
  }

  [scheme-container] {
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 20px;
  }

  h2 {
    grid-column: 1 / -1;
    margin: 0;
  }

  h4 {
    max-width: 180px;
  }
}

@media only screen and (max-width: 1190px) {
  section {
    [scheme-container] {
      grid-template: auto / repeat(2, 1fr);
    }
  }
}

@media only screen and (max-width: 820px) {
  section {
    [scheme-container] {
      grid-template: auto / repeat(1, 1fr);
    }
  }
}
</style>
