import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useParallax(speed = 0.5) {
  const parallaxRef = ref<HTMLElement | null>(null)
  const transform = ref('translateY(0px)')

  const handleScroll = () => {
    if (!parallaxRef.value) return

    try {
      const rect = parallaxRef.value.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementTop = rect.top + scrolled
      const viewportHeight = window.innerHeight

      // Only apply parallax when element is near viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const offset = (scrolled - elementTop + viewportHeight) * speed
        transform.value = `translateY(${offset}px)`
      }
    } catch (error) {
      // Silently handle errors if element is not yet mounted
      console.warn('Parallax error:', error)
    }
  }

  onMounted(() => {
    // Add small delay to ensure DOM is ready
    setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial calculation
    }, 100)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    parallaxRef,
    transform
  }
}
