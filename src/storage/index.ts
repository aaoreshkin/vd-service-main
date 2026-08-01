export const read = (key: string) => {
  const payload = sessionStorage.getItem(key)

  if (payload === null) {
    return null
  }

  try {
    return JSON.parse(payload)
  } catch (e) {
    return null
  }
}

export const write = (key: string, value: any) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    return null
  }
}

export const remove = (key: string) => {
  try {
    sessionStorage.removeItem(key)
  } catch (e) {
    return null
  }
}

export const clear = (key: string) => {
  try {
    sessionStorage.setItem(key, '')
  } catch (e) {
    return null
  }
}

/**
 * Сохраняет переписку из <ul> в текстовый файл
 * @param elementId - ID элемента <ul> (например, "chat-list")
 * @param fileName - Имя файла (по умолчанию "chat.txt")
 */
export function saveChatAsText(elementId: string, fileName: string = 'chat.txt') {
  const ulElement = document.getElementById(elementId)

  if (!ulElement) {
    console.error(`Элемент с ID "${elementId}" не найден.`)
    return
  }

  // Получаем все <li> внутри <ul>
  const messages = Array.from(ulElement.querySelectorAll('li'))

  // Извлекаем текст из каждого <li>
  const chatText = messages
    .map((li) => li.textContent?.trim() || '') // Удаляем лишние пробелы
    .join('\n') // Объединяем в одну строку с переносами

  // Создаем Blob (бинарный объект) с текстом
  const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' })

  // Создаем ссылку для скачивания
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  link.click()

  // Освобождаем память
  URL.revokeObjectURL(link.href)
}
