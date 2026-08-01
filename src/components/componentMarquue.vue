<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
</script>

<template>
  <nav>
    <Vue3Marquee>
      <span>детейлинг</span>
      <span>полировка</span>
      <span>шумоизоляция</span>
      <span>химчистка</span>
      <span>пленка</span>
      <span>детейлинг</span>
      <span>полировка</span>
      <span>шумоизоляция</span>
      <span>химчистка</span>
      <span>пленка</span>
      <span>детейлинг</span>
      <span>полировка</span>
      <span>шумоизоляция</span>
      <span>химчистка</span>
      <span>пленка</span>
    </Vue3Marquee>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  border: 1px solid;
  border-left: none;
  border-right: none;
  inset: 150px 0 auto;
  margin-top: 40px;
  padding: var(--padding) 0;
  position: absolute;

  span {
    align-items: center;
    display: flex;
    font-weight: 600;
    gap: 40px;
    text-transform: uppercase;

    &::before {
      content: '';
      aspect-ratio: 1;
      background-color: var(--color__text);
      border-radius: var(--radius);
      margin-left: 40px;
      width: 5px;
    }
  }
}
</style>
