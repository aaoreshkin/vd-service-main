import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProvider = defineStore('app', () => {
  const isModal = ref(false)

  return { isModal }
})
