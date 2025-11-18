<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Asset URLs from Figma design
const finnImage = 'https://www.figma.com/api/mcp/asset/89162609-3eb4-46f4-819e-41d9b6da87c4'

// Image loading state
const imageLoaded = ref(false)

onMounted(() => {
  // Add a small delay to ensure smooth animation
  setTimeout(() => {
    imageLoaded.value = true
  }, 100)
})

// Integration icons with offset for half-circle positioning
const integrations = [
  { name: 'Google Sheets', image: '/images/icons/sheets.svg', offset: -20 },
  { name: 'Xero', image: '/images/icons/xero.svg', offset: 20 },
  { name: 'Slack', image: '/images/icons/slack.svg', offset: 40 },
  { name: 'PayPal', image: 'https://www.figma.com/api/mcp/asset/808b11df-7b09-4e2d-910a-778a7413ba3d', offset: 20 },
  { name: 'Stripe', image: 'https://www.figma.com/api/mcp/asset/856d6d9a-aba3-4453-a1bb-658db86dd118', offset: -20, isStripe: true }
]
</script>

<style scoped>
@keyframes float-container {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float-container {
  animation: float-container 3s ease-in-out infinite;
}
</style>

<template>
  <div class="relative w-full max-w-[512px] h-[400px] sm:h-[500px] xl:h-[550px] shrink-0">
    <!-- Finn Image -->
    <div class="relative w-full h-full rounded-[24px] overflow-hidden">
      <img
        :src="finnImage"
        alt="Finn - AI CFO"
        class="w-full h-full object-contain object-top transition-opacity duration-1000 ease-out"
        :class="imageLoaded ? 'opacity-100' : 'opacity-0'"
        fetchpriority="high"
      />
      <!-- Fade-out gradient at bottom -->
      <div class="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-[#090914] to-transparent pointer-events-none"></div>
    </div>

    <!-- Integration Icons (Floating on Right Side) - Hidden on mobile, visible on tablet+ -->
    <div class="hidden sm:flex absolute right-[-10px] top-[50px] sm:top-[60px] flex-col gap-[12px] sm:gap-[16px] z-10 animate-float-container">
      <div
        v-for="(integration, index) in integrations"
        :key="integration.name"
        class="flex items-center justify-center w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-[20px] sm:rounded-[24px] bg-white/80 dark:bg-white/5 backdrop-blur-[25px] border border-gray-200/50 dark:border-white/10 transition-transform hover:scale-110"
        :style="{ transform: `translateX(${integration.offset}px)` }"
      >
        <!-- Stripe needs special purple background container -->
        <div v-if="integration.isStripe" class="w-7 h-7 bg-[#635bff] rounded-[6px] flex items-center justify-center p-[4px]">
          <img :src="integration.image" :alt="integration.name" class="w-full h-full object-contain" loading="lazy" />
        </div>
        <!-- Other icons render directly -->
        <img v-else :src="integration.image" :alt="integration.name" class="w-7 h-7 object-contain" loading="lazy" />
      </div>
    </div>
  </div>
</template>
