<script setup lang="ts">
import { ref } from 'vue';
import { useProvider } from './stores';
import { read, write } from '@/storage'

const provider = useProvider()

let uuid = read('x0vd_uuid')

const user = ref({
  id: uuid,
  phone: '',
  message: '',
})

if (!uuid) {
  uuid = crypto.randomUUID()

  write('x0vd_uuid', uuid)
}

const send = async () => {
  if (!user.value.phone.trim()) return

  const message = user.value.message
  try {
    const response = await fetch(
      `https://xn--c1a3a.xn--b1aafeq0cfe.xn--p1ai/send?user_id=${user.value.id}&user_phone=%0A${`%2B` + user.value.phone.replace(/\+/g, '')}${user.value.message ? `&message=%0A${encodeURIComponent(message)}` : ''}&description=%0A${encodeURIComponent(provider.subject)}`,
    )
    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    provider.isModal = false

    user.value = {
      id: uuid,
      phone: '',
      message: '',
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <component__header />

  <main>
    <router-view></router-view>
  </main>

  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="provider.isModal" class="modal" role="dialog" aria-modal="true" aria-label="Модальное окно">
        <div class="modal__content">
          <button class="modal__close" type="button" aria-label="Закрыть видео" @click="provider.isModal = false"
            style="display: flex; z-index: 9;">
            <span aria-hidden="true">&times;</span>
          </button>

          <form @submit.prevent>
            <label for="">
              Номер для связи
              <input type="text" v-model="user.phone" placeholder="+79999999999" required></input>
            </label>

            <textarea v-model="user.message" placeholder="Сообщение (необязательно)">
            </textarea>

            <button @click="send">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 43" width="43">
                <circle cx="21.5" cy="21.25" r="21.25" fill="currentColor" />
                <path fill="var(--color__scheme)"
                  d="M28.613 21.613a.867.867 0 0 0 0-1.226l-5.52-5.52a.867.867 0 0 0-1.226 1.226L26.773 21l-4.906 4.907a.867.867 0 0 0 1.226 1.226l5.52-5.52ZM12 21v.867h16v-1.734H12V21Z" />
              </svg>

              Отправить
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>

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

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal {
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: clamp(16px, 4vw, 32px);
  position: fixed;
  z-index: 999;
}

.modal__content {
  position: relative;
  width: min(960px, 100%);
  backdrop-filter: blur(10px);
  background-color: #325fec80;
  border-radius: 20px;
  padding: 60px 80px 40px 20px;

  form {
    display: grid;
    gap: 10px;

    label {
      display: grid;
      gap: 10px;
    }

    input,
    textarea {
      background-color: #fff;
      color: #071116;
      padding: 12px;
      border-radius: 10px;

      &::placeholder {
        opacity: .6;
      }
    }

    textarea {
      min-height: 150px;
    }

    button {
      background-color: color-mix(in srgb, var(--color__text) 6%, transparent);
      border-radius: 999px;
      backdrop-filter: blur(10px);
      display: flex;
      font-weight: 500;
      gap: 10px;
      margin-top: 40px;
      padding: 12px 40px 12px 12px;
      place-content: space-between;
      place-items: center;
      text-transform: uppercase;
      position: relative;
      color: var(--color__text);
      cursor: pointer;
      width: fit-content;

      &:hover {
        background-color: color-mix(in srgb, var(--color__text) 10%, transparent);
      }
    }
  }
}

.modal__close {
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

.modal__close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.modal__close:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.modal__close span {
  font-size: 28px;
  line-height: 1;
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
