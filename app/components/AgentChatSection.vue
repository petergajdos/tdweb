<script setup lang="ts">
import { ref } from 'vue'

// Role tabs
const roles = [
  { id: 'ceo', label: 'CEO' },
  { id: 'management', label: 'Management' },
  { id: 'company', label: 'Company' },
  { id: 'cfo', label: 'CFO' },
  { id: 'cmo', label: 'CMO' }
]

const activeRole = ref('management')

// Main prompt
const mainPrompt = 'Generate a consolidated report of our digital marketing campaign performance, broken down by channel, for the last 30 days.'

// Suggested questions with different opacity levels (top is most visible, bottom fades out)
const suggestions = [
  {
    text: 'What changed in campaign performance in the last 3 days that I should pay attention to?',
    opacity: 'text-white dark:text-white'
  },
  {
    text: 'Give me an overview of marketing performance of this game. Look only at cohorts that have reached D7 and compare them to previous week. Split by platforms, media sources and campaigns',
    opacity: 'text-white/60 dark:text-white/60'
  },
  {
    text: 'Which creatives performed best in the past month on Facebook and TikTok?',
    opacity: 'text-white/30 dark:text-white/30'
  }
]

// Asset URLs from Figma
const dashboardImage = 'https://www.figma.com/api/mcp/asset/d3dbf4d4-55a4-4683-9859-b7171deccd31'
const arrowIcon = 'https://www.figma.com/api/mcp/asset/e4da4fe7-92b5-4ec5-b69f-836043a0544b'
</script>

<template>
  <section class="relative py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914]">
    <div class="max-w-[1440px] mx-auto px-4 md:px-8">
      <!-- Role Selector Tabs - Scrollable on mobile -->
      <div class="flex items-center justify-start sm:justify-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button
          v-for="role in roles"
          :key="role.id"
          :class="[
            'px-3 py-2 rounded-full text-[14px] font-semibold leading-5 transition-colors whitespace-nowrap flex-shrink-0',
            activeRole === role.id
              ? 'bg-[#40035F] text-[#e3affe]'
              : 'text-[#6c5d73] hover:text-[#4b4152] dark:text-gray-400 dark:hover:text-white'
          ]"
          @click="activeRole = role.id"
        >
          {{ role.label }}
        </button>
      </div>

      <!-- Main Chat Input with Gradient Glow -->
      <div class="relative max-w-[640px] mx-auto mb-4">
        <!-- Gradient Glow Effect (outer) -->
        <div class="absolute -inset-[2px] bg-gradient-to-r from-[rgba(101,158,249,0.5)] to-[rgba(250,72,190,0.5)] rounded-[16px] blur-[12px]"></div>

        <!-- Gradient Border Container -->
        <div class="relative rounded-[16px] p-[1.5px] bg-gradient-to-r from-[#659ef9] to-[#fa48be]">
          <!-- Main Input Card with Dark Background -->
          <div class="relative backdrop-blur-[8px] bg-[rgba(29,25,31,0.8)] rounded-[15px] p-3 sm:p-4">
            <div class="flex items-start justify-between gap-3 sm:gap-4">
              <p class="flex-1 text-[14px] sm:text-[16px] leading-6 text-white">
                {{ mainPrompt }}
              </p>

              <!-- Submit Button with Bright Background -->
              <button class="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <img :src="arrowIcon" alt="Submit" class="w-4 h-4 sm:w-5 sm:h-5 brightness-0" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Suggested Questions -->
      <div class="max-w-[640px] mx-auto mb-6 sm:mb-8 space-y-0">
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="h-[40px] sm:h-[48px] flex items-center px-3 sm:px-4 rounded-[16px] hover:bg-white/5 transition-colors cursor-pointer"
        >
          <p :class="['text-[13px] sm:text-[14px] leading-5 truncate', suggestion.opacity]">
            {{ suggestion.text }}
          </p>
        </div>
      </div>

      <!-- Dashboard Preview with Glassmorphic Container -->
      <div class="flex justify-center">
        <div class="backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] rounded-[16px] p-3 sm:p-5 w-full max-w-[1024px]">
          <div class="relative w-full aspect-[1024/539] rounded-[16px] overflow-hidden">
            <img
              :src="dashboardImage"
              alt="Marketing Dashboard"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
