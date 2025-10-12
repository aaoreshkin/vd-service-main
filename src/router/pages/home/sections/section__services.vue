<script setup lang="ts">
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: 'Детейлинг',
    description: 'Комплексная чистка и восстановление внешнего вида авто',
    image: '/image_73.png',
  },
  {
    id: 2,
    title: 'Полировка',
    description: 'Удаление мелких царапин и восстановление блеска кузова',
    image: '/image_74.png',
  },
  {
    id: 3,
    title: 'Химчистка',
    description: 'Глубокая очистка салона от загрязнений и запахов',
    image: '/image_75.png',
  },
  {
    id: 4,
    title: 'Ремонт подвески',
    description: 'Диагностика и восстановление элементов подвески',
    image: '/image_76.png',
  },
  {
    id: 5,
    title: 'Замена масла',
    description: 'Своевременная замена масла и фильтров по регламенту',
    image: '/image_77.png',
  },
  {
    id: 6,
    title: 'Сервисное обслуживание',
    description: 'Плановое ТО: проверка систем, замена жидкостей и фильтров',
    image: '/image_78.png',
  },
  {
    id: 7,
    title: 'Оклейка пленкой',
    description: 'Защита кузова и изменение цвета без покраски',
    image: '/image_79.png',
  },
  {
    id: 8,
    title: 'Кузовной ремонт',
    description: 'Восстановление формы и геометрии после повреждений',
    image: '/image_80.png',
  },
  {
    id: 9,
    title: 'Покраска',
    description: 'Локальная или полная покраска с подбором точного цвета',
    image: '/image_81.png',
  },
])
</script>

<template>
  <section>
    <div scheme-container>
      <h2>Услуги</h2>

      <component__services-card v-for="(el, index) in services" :key="index" :service="el" />
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
