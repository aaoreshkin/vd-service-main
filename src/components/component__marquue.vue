<script setup lang="ts"></script>

<template>
  <nav>
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
  </nav>
</template>

<style lang="scss" scoped>
nav {
  border: 1px solid;
  border-left: none;
  border-right: none;
  inset: clamp(100px, 10vw, 150px) 0 auto;
  margin-top: 40px;
  padding: var(--padding) 0;
  position: absolute;
  display: flex;
  overflow: hidden;
  justify-content: center;
  background-color: color-mix(in srgb, var(--color__text) 5%, transparent);
  z-index: 1;

  span {
    font:
      normal 400 20px / 1.6 'Oswald Variable',
      sans-serif;
    align-items: center;
    display: flex;
    gap: clamp(20px, 4vw, 60px);
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
