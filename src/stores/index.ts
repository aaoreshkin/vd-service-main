import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProvider = defineStore('app', () => {
  const isModal = ref(false)
  const subject = ref('Заявка с сайта')

  const open = (from = 'Заявка с сайта') => {
    subject.value = from
    isModal.value = true
  }

  return { isModal, subject, open }
})
