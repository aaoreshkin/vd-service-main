<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { read, write, saveChatAsText } from '@/storage'

interface Message {
  text: string
  type: 'sent' | 'received'
  timestamp: string // Добавляем поле времени
}

const messages = ref<Message[]>([])

const dialog = ref(false)

let interval: number

let uuid = read('x0vd_uuid')

const getTime = () => {
  const currentDate = new Date()

  const hours = String(currentDate.getHours()).padStart(2, '0')
  const minutes = String(currentDate.getMinutes()).padStart(2, '0')
  const seconds = String(currentDate.getSeconds()).padStart(2, '0')

  const formattedTime = `${hours}:${minutes}:${seconds}`

  return formattedTime
}

if (!uuid) {
  uuid = crypto.randomUUID()

  write('x0vd_uuid', uuid)
}

const user = ref({
  id: uuid,
  phone: '',
  message: '',
  description: 'Сообщение из чата'
})

const send = async () => {
  if (!user.value.message.trim()) return

  dialog.value = true

  const message = user.value.message

  messages.value.push({ text: message, type: 'sent', timestamp: getTime() })

  user.value.message = ''

  try {
    const response = await fetch(
      `https://xn--c1a3a.xn--b1aafeq0cfe.xn--p1ai/send?user_id=${user.value.id}${user.value.phone ? `&user_phone=%0A${`%2B` + user.value.phone.replace(/\+/g, '')}` : ''}&message=%0A${encodeURIComponent(message)}&description=%0A${encodeURIComponent(user.value.description)}`,
    )
    if (!response.ok) {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    messages.value.push({ text: 'Failed to send message', type: 'received', timestamp: getTime() })
  }
}

const sync = async () => {
  try {
    const response = await fetch(`https://xn--c1a3a.xn--b1aafeq0cfe.xn--p1ai/updates?user_id=${user.value.id}`)
    if (!response.ok) return

    const text = await response.text()
    if (text) {
      messages.value.push({ text, type: 'received', timestamp: getTime() })
    }

    dialog.value = true
  } catch (error) {
    clearInterval(interval)
  }
}

onMounted(() => {
  interval = window.setInterval(sync, 2000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section>
    <span>6 мастеров онлайн</span>

    <ul id="chat-list">
      <li>
        <span>VD сервис</span>Добрый день! Чем я могу помочь?
      </li>

      <li v-for="(el, index) in messages" :style="el.type === 'received' ? 'margin-left: auto;' : 'margin-right: auto;'"
        :key="index">
        <span>{{ el.timestamp }}</span> {{ el.text }}
      </li>
    </ul>

    <form @submit.prevent>
      <input type="text"
        placeholder="Краткое описание проблемы (например: «стук в передней подвеске», «горит Check Engine»)"
        v-model="user.message" />

      <button type="button" @click="send">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 43 43" width="43">
          <circle cx="21.5" cy="21.25" r="21.25" fill="currentColor" />
          <path fill="var(--color__scheme)"
            d="M28.613 21.613a.867.867 0 0 0 0-1.226l-5.52-5.52a.867.867 0 0 0-1.226 1.226L26.773 21l-4.906 4.907a.867.867 0 0 0 1.226 1.226l5.52-5.52ZM12 21v.867h16v-1.734H12V21Z" />
        </svg>
      </button>
    </form>
  </section>
</template>

<style scoped lang="scss">
section {
  background: linear-gradient(184.39deg, #0E1E52 2.82%, #224190 96.42%);
  border-radius: 25px;
  display: grid;
  gap: 20px;
  margin: 0 auto 60px;
  max-width: 1560px;
  min-height: 600px;
  padding: 40px;
  position: relative;
  z-index: 1;

  >span {
    position: absolute;
    right: 40px;
    top: -40px;
    padding: 20px 30px 20px 40px;
    border-radius: 999px;
    background-color: color-mix(in srgb, var(--color__scheme) 100%, transparent);
    backdrop-filter: blur(20px);

    &::before {
      content: '';
      background: color-mix(in srgb, var(--color__success) 100%, transparent);
      width: 10px;
      height: 10px;
      position: absolute;
      left: 20px;
      border-radius: 999px;
      bottom: 25px;
    }
  }

  ul {
    display: grid;
    gap: 20px;
    place-content: start stretch;

    li {
      display: grid;
      background-color: #fff;
      border-radius: 20px;
      width: fit-content;
      height: fit-content;
      padding: 20px;
      color: #333;
      position: relative;


      span {
        display: block;
        color: var(--color__scheme);
        position: relative;
      }

      &:not(&:first-of-type) {
        span {
          color: #666;
          font-size: 12px;
          order: 1;
          margin-left: auto;
        }

      }
    }
  }


  form {
    display: flex;
    gap: 10px;
    place-items: center;
    height: 43px;
    margin-top: auto;

    input {
      background-color: #fff;
      border-radius: 999px;
      padding: 0 20px;
      height: 53px;
      flex: 1;
      color: #333;
    }

    input {
      &::placeholder {
        opacity: 0.6;
      }
    }

    button {
      background-color: #fff;
      border-radius: 999px;
      height: 53px;
      width: 53px;
      display: flex;
      place-content: center;

      &:hover {
        background-color: var(--color__scheme);
      }
    }

    svg {
      color: #fff;
      cursor: pointer;

      &:hover {
        color: var(--color__scheme);

        path {
          fill: #fff
        }
      }
    }
  }
}
</style>
