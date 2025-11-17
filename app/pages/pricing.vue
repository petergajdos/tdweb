<script setup lang="ts">
import { ref } from 'vue'

// Scroll reveal for sections
const { isVisible: whyChooseVisible, elementRef: whyChooseRef } = useScrollReveal(0.1)
const { isVisible: faqVisible, elementRef: faqRef } = useScrollReveal(0.1)

// Icon assets from Figma
const iconRocket = 'https://www.figma.com/api/mcp/asset/90aab97f-7a3e-4fcc-8e55-523aee99fe20'
const iconUsers = 'https://www.figma.com/api/mcp/asset/0a5c9287-1025-46d3-b6cd-eba9867ea10f'
const iconRefresh = 'https://www.figma.com/api/mcp/asset/c5b1726c-28c7-4a3b-9acf-2a56f919e24d'
const iconChart = 'https://www.figma.com/api/mcp/asset/48b2acf6-ec47-4ef6-b77c-b88a2b486471'
const iconDiamond = 'https://www.figma.com/api/mcp/asset/a211fa88-e835-47d8-8ad3-4d73228d6408'
const iconSupport = 'https://www.figma.com/api/mcp/asset/3bb0aabc-d2fa-4738-a0da-a009e83fe25c'
const iconDatabase = 'https://www.figma.com/api/mcp/asset/4183b2fc-1760-47cb-ae73-cfc338520885'
const iconLogo = 'https://www.figma.com/api/mcp/asset/2bc15664-d992-4d4b-a940-8c576b6701e4'

// Glow assets
const glowPurple = 'https://www.figma.com/api/mcp/asset/434c6aec-82ea-4e0a-bf4b-7b2e369fb46f'
const glowCyan = 'https://www.figma.com/api/mcp/asset/2804f85e-8f92-4a0c-9df7-f74a4996ef65'
const glowBig = 'https://www.figma.com/api/mcp/asset/dd3f643c-4034-46d6-b0a0-9a4657edc4dd'

// Why Choose features with icons
const whyChooseFeatures = [
  {
    icon: iconRocket,
    title: 'Start Free',
    description: '$5 credit to explore everything with no credit card required'
  },
  {
    icon: iconUsers,
    title: 'Unlimited Team Members',
    description: 'No per-user fees - add your entire team at no extra cost'
  },
  {
    icon: iconRefresh,
    title: 'Flexible Top-ups',
    description: 'Add any amount, anytime - complete control over your spending'
  },
  {
    icon: iconChart,
    title: 'Transparent Usage',
    description: 'See exactly what you\'re paying for with real-time tracking'
  },
  {
    icon: iconDiamond,
    title: 'Premium AI Models',
    description: 'Access to Claude, GPT, Gemini, DeepSeek and many more'
  },
  {
    icon: iconSupport,
    title: '24/7 Support',
    description: 'Get help whenever you need it with our responsive support team'
  }
]

// FAQ data
const faqs = ref([
  {
    question: 'How to get started?',
    answer: 'To get started, you\'ll need to make your first purchase through our secure payment provider, Paddle. After that, you can easily add credits to your account at any time with flexible top-up amounts.',
    isOpen: true
  },
  {
    question: 'What happens when I run out of credits?',
    answer: 'You can instantly top up your credits anytime. We\'ll notify you when your balance is running low so you can add more credits without interruption.',
    isOpen: false
  },
  {
    question: 'How much actually cost using AI?',
    answer: 'The cost of using AI varies depending on the model you choose and the size of your input and output. Our dashboard shows real-time usage so you always know exactly what you\'re spending.',
    isOpen: false
  },
  {
    question: 'How do I track my usage?',
    answer: 'Yes! Your dashboard displays real-time credit usage and balance, with detailed breakdowns of spending across different models and agents.',
    isOpen: false
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'Absolutely not. We believe in complete transparency. What you see is what you pay - no surprise charges, no hidden fees.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-[100px] sm:pt-[120px] pb-8 sm:pb-12">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[180px]">
        <div class="text-center max-w-[640px] mx-auto">
          <!-- Tag -->
          <p class="bg-gradient-to-r from-[#659ef9] to-[#fa48be] bg-clip-text text-transparent text-[20px] font-['Permanent_Marker'] mb-4">
            Fair and square
          </p>

          <!-- Heading -->
          <h1 class="text-[36px] sm:text-[48px] xl:text-[60px] font-semibold leading-[1.2] tracking-[-0.6px] text-white capitalize mb-4">
            Credit Based System
          </h1>

          <!-- Subheading -->
          <p class="text-[18px] sm:text-[20px] leading-[28px] text-[#d8d2da] mb-6">
            Complete transparency. Charge your credits and pay for LLM API tokens as you go.
          </p>

          <!-- Small text -->
          <p class="text-[12px] uppercase text-[#a495aa] tracking-normal mb-8">
            Top up any amount, anytime. No hidden fees, no surprises.
          </p>

          <!-- CTA Button -->
          <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-3 bg-white text-[#1d191f] rounded-full text-[16px] font-semibold hover:bg-white/90 transition-colors">
            Start with $5 free credit
          </a>
        </div>
      </div>
    </section>

    <!-- 50/50 Split Section -->
    <section class="py-8 sm:py-12 bg-white dark:bg-[#090914]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <div class="flex flex-col xl:flex-row gap-8 xl:gap-10 max-w-[886px] mx-auto">
          <!-- 50% to LLM Providers -->
          <div class="relative bg-[rgba(75,65,82,0.2)] rounded-[16px] overflow-visible flex-1 min-h-[408px] flex items-center justify-center shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]">
            <div class="flex flex-col items-center gap-6 px-6 py-10 relative z-10">
              <!-- Icon with Glow -->
              <div class="relative">
                <div class="bg-[rgba(75,65,82,0.2)] rounded-[18px] w-[68px] h-[68px] flex items-center justify-center relative z-10">
                  <img :src="iconDatabase" alt="" class="w-9 h-9" />
                </div>
                <!-- Glow positioned under icon -->
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58px] h-[58px] pointer-events-none">
                  <div class="absolute inset-[-172.41%]">
                    <img :src="glowPurple" alt="" class="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              <!-- Percentage -->
              <p class="text-[36px] font-semibold text-white capitalize tracking-[-0.36px] leading-[43.2px]">
                50%
              </p>

              <!-- Description -->
              <p class="text-[18px] text-[#d8d2da] text-center max-w-[343px] leading-normal">
                goes directly to LLM providers (OpenAI, Anthropic, etc.)
              </p>
            </div>
          </div>

          <!-- 50% to Infrastructure -->
          <div class="relative bg-[rgba(75,65,82,0.2)] rounded-[16px] overflow-visible flex-1 min-h-[408px] flex items-center justify-center shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]">
            <div class="flex flex-col items-center gap-6 px-6 py-10 relative z-10">
              <!-- Icon with Glow -->
              <div class="relative">
                <div class="bg-[rgba(75,65,82,0.2)] rounded-[18px] w-[68px] h-[68px] flex items-center justify-center relative z-10">
                  <img :src="iconLogo" alt="" class="w-9 h-9" />
                </div>
                <!-- Glow positioned under icon -->
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58px] h-[58px] pointer-events-none">
                  <div class="absolute inset-[-172.41%]">
                    <img :src="glowCyan" alt="" class="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              <!-- Percentage -->
              <p class="text-[36px] font-semibold text-white capitalize tracking-[-0.36px] leading-[43.2px]">
                50%
              </p>

              <!-- Description -->
              <p class="text-[18px] text-[#d8d2da] text-center max-w-[343px] leading-normal">
                covers our infrastructure, support, and development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="relative py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914]">
      <!-- Large Glow Background -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[846px] h-[846px] pointer-events-none">
        <div class="absolute inset-[-41.74%]">
          <img :src="glowBig" alt="" class="w-full h-full object-contain" />
        </div>
      </div>

      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[104px] relative z-10">
        <div class="text-center mb-8 sm:mb-12 xl:mb-16">
          <h2 class="text-[36px] sm:text-[40px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-white capitalize mb-4">
            Why Choose Our Pricing?
          </h2>
        </div>

        <div ref="whyChooseRef" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1232px] mx-auto">
          <div
            v-for="(feature, index) in whyChooseFeatures"
            :key="feature.title"
            class="bg-transparent hover:bg-[rgba(75,65,82,0.2)] rounded-[16px] p-10 flex flex-col gap-6 transition-all duration-700 ease-out"
            :class="[
              whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              index === 2 ? 'bg-[rgba(75,65,82,0.2)]' : ''
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Icon -->
            <div class="w-[36px] h-[36px] shrink-0">
              <img :src="feature.icon" alt="" class="w-full h-full object-contain" />
            </div>

            <!-- Content -->
            <div class="flex flex-col gap-3">
              <h3 class="text-[24px] font-semibold text-white">
                {{ feature.title }}
              </h3>
              <p class="text-[16px] text-[#d8d2da] leading-normal">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[104px]">
        <div class="text-center mb-8 sm:mb-12 xl:mb-16">
          <h2 class="text-[36px] sm:text-[40px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-white capitalize mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div ref="faqRef" class="max-w-[680px] mx-auto">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border-b border-[#352d39] transition-all duration-700 ease-out"
            :class="faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-0 py-6 flex items-start justify-between text-left transition-colors"
            >
              <span
                class="text-[24px] font-semibold leading-[24px] pr-4 transition-colors"
                :class="faq.isOpen ? 'text-white' : 'text-[#6c5d73]'"
              >
                {{ faq.question }}
              </span>
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-1">
                <svg
                  class="w-2 h-4 transition-transform duration-300"
                  :class="faq.isOpen ? 'rotate-180' : ''"
                  viewBox="0 0 8 16"
                  fill="none"
                >
                  <path
                    d="M1 5L4 8L7 5"
                    :stroke="faq.isOpen ? '#f5f4f6' : '#a495aa'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>

            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="faq.isOpen" class="overflow-hidden">
                <div class="pb-6 text-[16px] text-white leading-[24px]">
                  {{ faq.answer }}
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </NuxtLayout>
</template>
