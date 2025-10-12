<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    default: '/0619.mov',
  },
})

const isModalOpen = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const previousOverflow = ref<string | null>(null)

const lockScroll = () => {
  if (typeof document === 'undefined') {
    return
  }

  if (previousOverflow.value === null) {
    previousOverflow.value = document.body.style.overflow || ''
  }
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  if (typeof document === 'undefined') {
    return
  }

  if (previousOverflow.value !== null) {
    document.body.style.overflow = previousOverflow.value
    previousOverflow.value = null
  } else {
    document.body.style.removeProperty('overflow')
  }
}

const stopVideo = () => {
  const video = videoRef.value

  if (!video) {
    return
  }

  video.pause()
  video.currentTime = 0
}

const openModal = () => {
  if (isModalOpen.value) {
    return
  }

  isModalOpen.value = true
}

const closeModal = () => {
  if (!isModalOpen.value) {
    return
  }

  isModalOpen.value = false
}

watch(isModalOpen, (value) => {
  if (value) {
    lockScroll()
  } else {
    stopVideo()
    unlockScroll()
  }
})

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  unlockScroll()
})
</script>

<template>
  <div class="video-card">
    <button class="video-card__play" type="button" aria-label="Смотреть видео о сервисе" @click="openModal">
      <icon__play />
    </button>

    <button shape type="button" @click="openModal">Видео о сервисе</button>

    <Teleport to="body">
      <Transition name="video-modal-fade">
        <div v-if="isModalOpen" class="video-modal" role="dialog" aria-modal="true" aria-label="Видео о сервисе"
          @click.self="closeModal">
          <div class="video-modal__content">
            <button class="video-modal__close" type="button" aria-label="Закрыть видео" @click="closeModal"
              style="display: flex; z-index: 9;">
              <span aria-hidden="true">&times;</span>
            </button>

            <video ref="videoRef" :src="props.videoSrc" controls autoplay playsinline></video>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.video-card {
  position: relative;
  backdrop-filter: blur(40px);
  background-color: rgba(58, 104, 221, 0.4);
  border: 1px solid color-mix(in srgb, var(--color__text) 50%, transparent);
  border-radius: 25px;
  display: grid;
  gap: 20px;
  height: 202px;
  place-items: center;
  width: 329px;

  &::before {
    content: '';
    background: url('/range-video.webp') no-repeat center;
    background-size: cover;
    border-radius: 25px;
    position: absolute;
    inset: 0;
    opacity: 0.6;
    z-index: -1;
  }
}

.video-card__play {
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0;
  transition: color 0.2s ease;
  z-index: 1;
}

.video-card__play:hover,
.video-card__play:focus-visible {
  color: var(--color__scheme);
}

.video-card__play:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

.video-card__play svg {
  display: block;
  margin: auto;
}

.video-card [shape] {
  background-color: var(--color__scheme);
  border-radius: 0 25px 25px 25px;
  bottom: -40px;
  cursor: pointer;
  height: 67px;
  left: 40px;
  padding-left: clamp(55px, 5.5vw, 80px);
  position: absolute;
  width: clamp(200px, 18.5vw, 250px);
  z-index: 1;
  clip-path: path('M17.65 45.938C17.522 57.558 26.845 67 38.465 67H255.7c11.456 0 20.819-9.185 20.839-20.642.015-8.701-.054-16.606-.115-25.354C276.343 9.405 266.937 0 255.339 0H0c16.926 1.72 17.948 19.087 17.65 45.938Z'
    );
}

.video-modal {
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: clamp(16px, 4vw, 32px);
  position: fixed;
  z-index: 999;
}

.video-modal__content {
  position: relative;
  width: min(960px, 100%);
}

.video-modal__close {
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 40px;
  transition: background 0.2s ease;
}

.video-modal__close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.video-modal__close:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.video-modal__close span {
  font-size: 28px;
  line-height: 1;
}

.video-modal video {
  background: #000;
  border-radius: 20px;
  display: block;
  max-height: 80vh;
  width: 100%;
}

.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}
</style>
