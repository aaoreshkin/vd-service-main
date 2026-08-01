<script setup lang="ts"></script>

<template>
  <div>
    <icon-play />
    <button shape>Видео о сервисе</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  backdrop-filter: blur(40px);
  display: grid;
  gap: 20px;
  aspect-ratio: 1;
  width: clamp(100px, 24vw, 520px);
  place-items: center;
  position: absolute;
  border-radius: 25px;
  background-color: rgba(58, 104, 221, 0.4745098039);
  inset: -160px 0 0 auto;

  svg {
    cursor: pointer;

    &:hover {
      color: var(--color__scheme);
    }
  }

  &::before {
    content: '';

    background: url('/range-video.avif') no-repeat center;
    border-radius: 25px;
    background-size: cover;
    position: absolute;
    inset: 0;
    opacity: 0.1;
    z-index: -1;
  }

  svg {
    margin: auto;
  }
}

[shape] {
  background-color: var(--color__scheme);
  border-radius: 0 25px 25px 25px;
  height: 67px;
  padding-left: clamp(55px, 5.5vw, 80px);
  position: absolute;
  width: clamp(200px, 18.5vw, 250px);
  bottom: -40px;
  left: 150px;

  clip-path: path(
    'M17.65 45.938C17.522 57.558 26.845 67 38.465 67H255.7c11.456 0 20.819-9.185 20.839-20.642.015-8.701-.054-16.606-.115-25.354C276.343 9.405 266.937 0 255.339 0H0c16.926 1.72 17.948 19.087 17.65 45.938Z'
  );
}
</style>
