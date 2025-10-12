<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

const config = {
  itemsToShow: 1,
  gap: 20,
  snapAlign: 'start' as 'start',

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 580px and up
    580: {
      itemsToShow: 2,
      snapAlign: 'start' as 'start',
    },
    820: {
      itemsToShow: 3,
      snapAlign: 'start' as 'start',
    },
    1190: {
      itemsToShow: 4,
      snapAlign: 'start' as 'start',
    },
  },
}

const videoSources = [
  '/about.MOV',
  '/porshe.MOV',
  '/li7.MP4',
  '/0619.mov',
  '/lamba.mov',
]

const videoRefs = ref<(HTMLVideoElement | null)[]>([])
const isPlaying = ref<boolean[]>(videoSources.map(() => false))

const setVideoRef = (element: HTMLVideoElement | null, index: number) => {
  videoRefs.value[index] = element
}

const togglePlayback = (index: number) => {
  const video = videoRefs.value[index]

  if (!video) {
    return
  }

  if (video.paused) {
    void video.play()
  } else {
    video.pause()
  }
}

const handlePlay = (index: number) => {
  isPlaying.value[index] = true
}

const handlePause = (index: number) => {
  isPlaying.value[index] = false
}
</script>

<template>
  <section>
    <div scheme-container>
      <h2>Видео из соц.сетей</h2>

      <Carousel v-bind="config">
        <Slide v-for="(src, index) in videoSources" :key="src">
          <article>
            <div class="video-wrapper">
              <video :class="{ active: isPlaying[index] }" :src="src"
                :ref="(el) => setVideoRef(el as HTMLVideoElement | null, index)" playsinline preload="metadata"
                @click="togglePlayback(index)" @play="handlePlay(index)" @pause="handlePause(index)"
                @ended="handlePause(index)"></video>

              <button type="button" class="video-control" :class="{ 'video-control--hidden': isPlaying[index] }"
                :aria-label="isPlaying[index] ? 'Поставить на паузу' : 'Запустить видео'"
                @click.stop="togglePlayback(index)">
                <svg v-if="!isPlaying[index]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10-6.86a1 1 0 0 0 0-1.7l-10-6.86A1 1 0 0 0 8 5.14Z"
                    fill="currentColor" />
                </svg>
                <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </article>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  position: relative;

  h2 {
    flex: 100%;
  }

  article {
    border-radius: 20px;
    overflow: hidden;
    height: 100%;
    min-height: 600px;
    flex: 1;

    .video-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      background-color: var(--color__scheme);
      opacity: .4;

      &.active {
        opacity: 1;
      }
    }

    .video-control {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: none;
      background: color-mix(in srgb, var(--color__scheme) 60%, transparent);
      color: #fff;
      cursor: pointer;
      transition: background 0.2s ease, opacity 0.2s ease;
    }

    .video-control:hover {
      background: color-mix(in srgb, var(--color__scheme) 100%, transparent);
    }

    .video-control:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
    }

    .video-control svg {
      width: 24px;
      height: 24px;
    }

    .video-control--hidden {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
