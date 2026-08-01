<script setup lang="ts">
import type { LngLat, Customization, BehaviorType } from '@yandex/ymaps3-types'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'
import { ref, shallowRef, watch } from 'vue'

type MapMarker = { coordinates: LngLat; phone: string; address: string }

const enabledBehaviors = ref<BehaviorType[]>(['drag', 'pinchZoom', 'dblClick', 'scrollZoom'])

const props = defineProps<{
  markers: MapMarker[]
  selectedIndex: number | null
}>()

const emit = defineEmits<{
  (e: 'update:selectedIndex', value: number | null): void
}>()

const pos = ref({
  location: {
    center: [37.516306, 55.778871] as LngLat,
    zoom: 13,
  },
  behaviors: enabledBehaviors,
})

const zoomIn = (center: LngLat, zoom: number) => {
  pos.value.location = {
    center,
    zoom,
  }
}

const customization = shallowRef<Customization>([
  {
    tags: {
      any: ['poi', 'transit_location'],
    },
    stylers: {
      visibility: 'off',
    },
  },
  {
    tags: {
      any: ['transit', 'water'],
    },
    elements: ['label.icon', 'label.text'],
    stylers: {
      visibility: 'off',
    },
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry.fill',
    stylers: [
      {
        color: '#d9dadd',
      },
    ],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry.outline',
    stylers: [
      {
        color: '#d9dadd',
      },
    ],
  },
  {
    tags: {
      any: ['water'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#bee3ff',
      },
    ],
  },
  {
    tags: {
      any: 'building',
    },
    elements: 'geometry.fill',
    stylers: [
      {
        color: '#1e233910',
      },
    ],
  },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#f2f3f4',
      },
    ],
  },
])

const openMarker = ref<null | number>(null)

watch(
  () => props.selectedIndex,
  (index) => {
    if (index === null) {
      openMarker.value = null
      return
    }

    const marker = props.markers[index]
    if (!marker) {
      openMarker.value = null
      return
    }

    zoomIn(marker.coordinates, 16)
    openMarker.value = index
  },
  { immediate: true },
)

const handleMarkerClick = (marker: MapMarker, index: number) => {
  zoomIn(marker.coordinates, 16)
  openMarker.value = index
  emit('update:selectedIndex', index)
}

</script>

<template>
  <div id="map">
    <yandex-map :settings="pos">
      <yandex-map-default-scheme-layer :settings="{ customization }" />

      <yandex-map-default-features-layer />

      <template v-for="(point, index) in props.markers" :key="index">
        <yandex-map-marker position="top-center left-center" :settings="point" @click="handleMarkerClick(point, index)">
          <icon__marker />
          <component__popup :phone="point.phone" :address="point.address" v-show="openMarker === index" />
        </yandex-map-marker>
      </template>
    </yandex-map>
  </div>
</template>

<style scoped lang="scss">
#map {
  height: 800px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--color__scheme);
}

section {
  padding: 0 calc(var(--scheme-padding) * 2);

  div {
    opacity: 0.8;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
}

@media only screen and (max-width: 580px) {
  #map {
    height: 400px;
  }
}
</style>
