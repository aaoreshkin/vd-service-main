<script setup lang="ts"></script>

<template>
  <section></section>
</template>

<style lang="scss" scoped>
section {
  background: url('/342d.png') no-repeat center;
  background-size: contain;
  position: relative;
  padding: 450px var(--padding);
  display: flex;
  margin: -200px 0 -200px -100px;
}

@media only screen and (max-width: 820px) {
  section {
    padding: 300px var(--padding);
    margin: -100px 0 -100px -100px;
  }
}

@media only screen and (max-width: 540px) {
  section {
    padding: 250px var(--padding);
    margin: -200px 0 -200px -80px;
  }
}
</style>
