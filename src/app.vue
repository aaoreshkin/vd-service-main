<script setup lang="ts"></script>

<template>
  <component__header />

  <main>
    <router-view></router-view>
  </main>

  <component__footer />
</template>

<style lang="scss">
@use '@/assets/scss/reset.scss';
@use '@fontsource-variable/manrope';
@use '@fontsource-variable/oswald';

:root {
  --color: #071116;
  --color__accent: #e0e7ed;
  --color__scheme: #325fec;
  --color__warn: #ffa448;
  --color__success: #48ff58;
  --color__text: #ffffff;
  --color__accent: #616369;

  --padding: clamp(10px, 3vw, 20px);
  --radius: 999px;
  --radius__primary: 15px;

  --section__width: 1560px;
}

a {
  &:hover {
    color: var(--color__scheme);
  }
}

b,
strong {
  font-weight: 500;
}

h1 {
  font:
    500 clamp(32px, 6vw, 65px) / clamp(42px, 6vw, 68px) 'Oswald Variable',
    sans-serif;
}

h2 {
  font:
    400 clamp(24px, 6vw, 45px) / clamp(32px, 6vw, 64px) 'Oswald Variable',
    sans-serif;
  text-transform: uppercase;

  span {
    color: color-mix(in srgb, var(--color__text) 50%, transparent);
  }

  margin: 40px 0;
}

h3 {
  font:
    400 clamp(18px, 6vw, 24px) / clamp(22px, 6vw, 32px) 'Oswald Variable',
    sans-serif;
  text-transform: uppercase;
}

h4 {
  font:
    400 clamp(16px, 4vw, 18px) / clamp(18px, 6vw, 25px) 'Oswald Variable',
    sans-serif;
  text-transform: uppercase;
}

main {
  // background: url('/elipse.svg') no-repeat 50% 70%;
}

svg {
  display: block;
}

[scheme-container] {
  margin: auto;
  max-width: var(--section__width);
  padding: var(--padding);
  width: 100%;
}

@keyframes shimmer {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
}
</style>
