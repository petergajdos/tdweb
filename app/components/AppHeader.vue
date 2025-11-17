<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mobileMenuOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)

// Close mobile menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (mobileMenuOpen.value && headerRef.value && !headerRef.value.contains(event.target as Node)) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 pt-4">
    <!-- Mobile: px-4, Tablet: px-8, Desktop: px-[180px] -->
    <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[180px]">
      <div ref="headerRef" class="backdrop-blur-[25px] bg-white/5 px-4 md:px-6 border border-white/10" :class="mobileMenuOpen ? 'rounded-[24px]' : 'rounded-full'">
        <div class="flex items-center justify-between h-[60px]">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 flex-shrink-0">
            <img src="/images/logo.svg" alt="Teamday Logo" class="w-6 h-6" />
            <span class="text-[16px] font-semibold text-white whitespace-nowrap">Teamday</span>
          </NuxtLink>

          <!-- Desktop Navigation - Show on desktop only (xl+) -->
          <nav class="hidden xl:flex items-center gap-8">
            <NuxtLink
              to="/finn-cfo"
              class="text-[16px] text-gray-400 hover:text-white transition-colors whitespace-nowrap"
              active-class="!text-white !font-semibold"
            >
              Finn, CFO
            </NuxtLink>
            <NuxtLink
              to="/sarah-analyst"
              class="text-[16px] text-gray-400 hover:text-white transition-colors whitespace-nowrap"
              active-class="!text-white !font-semibold"
            >
              Alice, the Analyst
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="text-[16px] text-gray-400 hover:text-white transition-colors whitespace-nowrap"
              active-class="!text-white !font-semibold"
            >
              Pricing
            </NuxtLink>
            <a href="https://www.teamday.ai/blog" target="_blank" rel="noopener noreferrer" class="text-[16px] text-gray-400 hover:text-white transition-colors whitespace-nowrap">Blog</a>
          </nav>

          <!-- Right Section -->
          <div class="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <!-- Show button on tablet and desktop -->
            <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="hidden md:block px-4 xl:px-6 py-2 mt-[10px] mb-[10px] mr-[-10px] border border-white/20 text-white rounded-full text-[15px] font-semibold hover:border-white/40 transition-colors whitespace-nowrap">
              Hire agent
            </a>

            <!-- Mobile/Tablet menu button - Show on mobile and tablet (<xl) -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="xl:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile/Tablet Menu -->
        <Transition
          enter-active-class="transition-opacity duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="mobileMenuOpen" class="xl:hidden py-6 border-t border-white/10">
            <nav class="flex flex-col gap-6">
            <NuxtLink
              to="/finn-cfo"
              class="text-[16px] text-white/70 hover:text-white transition-colors"
              active-class="!text-white !font-semibold"
              @click="mobileMenuOpen = false"
            >
              Finn, CFO
            </NuxtLink>
            <NuxtLink
              to="/sarah-analyst"
              class="text-[16px] text-white/70 hover:text-white transition-colors"
              active-class="!text-white !font-semibold"
              @click="mobileMenuOpen = false"
            >
              Alice, the Analyst
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="text-[16px] text-white/70 hover:text-white transition-colors"
              active-class="!text-white !font-semibold"
              @click="mobileMenuOpen = false"
            >
              Pricing
            </NuxtLink>
            <a href="https://www.teamday.ai/blog" target="_blank" rel="noopener noreferrer" class="text-[16px] text-white/70 hover:text-white transition-colors">Blog</a>
            <!-- Show hire button only on mobile -->
            <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="md:hidden mt-2 px-6 py-3 border border-white/20 text-white rounded-full text-[15px] font-semibold hover:border-white/40 transition-colors text-center">
              Hire agent
            </a>
          </nav>
        </div>
        </Transition>
      </div>
    </div>
  </header>
</template>
