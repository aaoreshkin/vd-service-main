<script setup lang="ts">
const props = defineProps({
  phone: String,
  address: String,
})
</script>

<template>
  <ul>
    <li>Время работы <b>10:00-21:00</b></li>
    <li>
      <a :href="`tel:${props.phone}`">{{ props.phone }}</a>
    </li>
    <li>{{ props.address }}</li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  background-color: #fff;
  border-radius: 10px;
  color: #151922;
  font-weight: 400;
  line-height: 2;
  margin: 10px -150px 0 -150px;
  min-width: 400px;
  padding: 20px;
  position: absolute;

  li {
    a {
      &:hover {
        opacity: 0.6;
      }
    }
  }
}

@media only screen and (max-width: 580px) {
  ul {
    padding: 10px;
    min-width: 300px;
  }
}
</style>
