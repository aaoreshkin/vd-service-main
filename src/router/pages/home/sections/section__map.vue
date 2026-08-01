<script setup lang="ts">
import type { LngLat } from '@yandex/ymaps3-types'
import { ref } from 'vue'

const markers: { coordinates: LngLat; phone: string; address: string }[] = [
  {
    coordinates: [37.504609, 55.791268],
    phone: '+7 (495) 323-99-72',
    address: 'г. Москва ул. Зорге, д. 25Б ст. 1',
  },
  {
    coordinates: [37.61114, 55.787715],
    phone: '+7 (495) 255-71-72',
    address: 'г. Москва Октябрьский переулок, д. 23',
  },
  {
    coordinates: [37.417985, 55.763589],
    phone: '+7 (495) 255-71-72',
    address: 'г. Москва ул. Крылатские Холмы, д. 24 к. 4',
  },
]

const selectedMarkerIndex = ref<number | null>(null)

const selectMarker = (index: number) => {
  selectedMarkerIndex.value = index
}
</script>

<template>
  <section scheme-container>
    <h2>Мы на <span>карте</span></h2>
    <p>Предоставляем широкий спектр услуг по защите и уходу за вашим автомобилем</p>

    <component__map :markers v-model:selected-index="selectedMarkerIndex" />


    <ul>
      <li
        v-for="(el, index) in markers"
        :key="`${el.address}-${index}`"
        :class="{ active: selectedMarkerIndex === index }"
        @click="selectMarker(index)"
      >
        {{ el.address }}
      </li>
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
