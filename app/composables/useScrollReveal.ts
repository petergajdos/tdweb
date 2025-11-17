import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal(threshold = 0.1) {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (elementRef.value) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true
            }
          })
        },
        { threshold }
      )

      observer.observe(elementRef.value)

      onBeforeUnmount(() => {
        observer.disconnect()
      })
    }
  })

  return {
    isVisible,
    elementRef
  }
}
