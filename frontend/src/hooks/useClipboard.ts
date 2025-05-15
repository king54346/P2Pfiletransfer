import { ref, watchEffect } from 'vue'

export default function useClipboard(
    text: string,
    delay = 1000
) {
  const hasCopied = ref(false)

  const onCopy = () => {
    navigator.clipboard
        .writeText(text)
        .then(() => {
          hasCopied.value = true
        })
        // 可以添加错误处理（可选）
        .catch(() => {
          console.error('Failed to copy text')
        })
  }

  watchEffect((onCleanup) => {
    if (hasCopied.value) {
      const timeoutId = setTimeout(() => {
        hasCopied.value = false
      }, delay)

      onCleanup(() => clearTimeout(timeoutId))
    }
  })

  return {
    hasCopied,
    onCopy
  }
}
