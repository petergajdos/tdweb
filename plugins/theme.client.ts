export default defineNuxtPlugin(() => {
  // Initialize theme on page load
  const initTheme = () => {
    // Check if user has a stored preference, otherwise use system preference
    const theme = localStorage.getItem('theme')

    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }

  // Run on mount
  initTheme()

  // Listen for system theme changes when using system preference
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    const theme = localStorage.getItem('theme')
    // Only respond to system changes if no manual preference is set
    if (!theme) {
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  mediaQuery.addEventListener('change', handleSystemThemeChange)

  // Provide theme utilities
  return {
    provide: {
      theme: {
        // Set theme to light mode
        setLight: () => {
          localStorage.setItem('theme', 'light')
          document.documentElement.classList.remove('dark')
        },
        // Set theme to dark mode
        setDark: () => {
          localStorage.setItem('theme', 'dark')
          document.documentElement.classList.add('dark')
        },
        // Use system preference
        setSystem: () => {
          localStorage.removeItem('theme')
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        },
        // Get current theme
        getCurrent: () => {
          const stored = localStorage.getItem('theme')
          if (stored) return stored
          return 'system'
        },
        // Check if dark mode is active
        isDark: () => {
          return document.documentElement.classList.contains('dark')
        }
      }
    }
  }
})
