<script setup lang="ts">
import { ref } from 'vue'

// Scroll reveal for Why AI Agents section
const { isVisible: whyAgentsVisible, elementRef: whyAgentsRef } = useScrollReveal(0.1)

// Parallax effects - subtle movement on scroll
const { parallaxRef: aliceParallaxRef, transform: aliceTransform } = useParallax(-0.15)
const { parallaxRef: finnParallaxRef, transform: finnTransform } = useParallax(-0.15)

// Parallax for agent card images (each needs own ref)
const { parallaxRef: agent0Ref, transform: agent0Transform } = useParallax(-0.2)
const { parallaxRef: agent1Ref, transform: agent1Transform } = useParallax(-0.2)
const { parallaxRef: agent2Ref, transform: agent2Transform } = useParallax(-0.2)

// Model/Lab icons from Figma
const iconClaude = 'https://www.figma.com/api/mcp/asset/31ce75ca-5f1c-4ccc-a971-9649d11a4c16'
const iconOpenAI = 'https://www.figma.com/api/mcp/asset/f1477ddf-d85c-4bec-8390-2a91ddf28188'
const iconGemini = 'https://www.figma.com/api/mcp/asset/8a111fa3-27eb-4095-8c30-1a65cdfd5c80'

// Agent + Chart composite images from Figma (updated)
const agentAdrian = 'https://www.figma.com/api/mcp/asset/26be4cac-9f76-4d06-9db4-3bc9f0cb62aa'
const agentHanna = 'https://www.figma.com/api/mcp/asset/233a4642-a3db-4a17-bc9f-b4776dc76acf'
const agentPhoebe = 'https://www.figma.com/api/mcp/asset/4937a5fd-5d5d-4ef1-a192-7d4d805154d2'

// Agent cards data
const agents = [
  {
    id: 'adrian',
    name: 'Adrian, Ads manager',
    lastActive: 'Weekly Mon, Wed, Fri at 9:00 AM',
    agentImage: agentAdrian,
    metrics: [
      { value: '5.8x', label: 'ROAS', sublabel: '+28%', positive: true },
      { value: '$1.85', label: 'CPC', sublabel: '-18%', positive: false },
      { value: '7.2%', label: 'CTR', sublabel: '+5%', positive: true },
      { value: '1,847', label: 'Conversions', sublabel: 'This Month', positive: null }
    ],
    recentActivity: [
      { text: 'Launched new bidding strategy increasing o...', status: 'completed' },
      { text: 'Added responsive search ads with 12% higher...', status: 'completed' },
      { text: 'Paused underperforming Display campaigns to...', status: 'completed' }
    ],
    nextSteps: [
      { text: 'Implement Performance Max campaigns for hol...', status: 'pending' },
      { text: 'A/B test new ad extensions for local business...', status: 'pending' },
      { text: 'Set up Google Analytics 4 enhanced ecommerc...', status: 'pending' }
    ],
    placeholder: 'Ask about Ad campaigns...'
  },
  {
    id: 'hanna',
    name: 'Hanna, HR specialist',
    lastActive: 'Daily at 9:00 AM',
    agentImage: agentHanna,
    metrics: [
      { value: '18 days', label: 'Time-to-Hire', sublabel: '+22% faster', positive: true },
      { value: '$3,240', label: 'Cost per Hire', sublabel: '-15% reduction', positive: false },
      { value: '94.5%', label: 'Retention Rate', sublabel: '+3% improvement', positive: true },
      { value: '96', label: 'Onboarding Score', sublabel: 'RT completions this week', positive: null }
    ],
    recentActivity: [
      { text: 'Automated offer letter generation reducing pro...', status: 'completed' },
      { text: 'Updated employee handbook with new remote...', status: 'completed' },
      { text: 'Implemented Loxo bot for initial candidate...', status: 'completed' }
    ],
    nextSteps: [
      { text: 'Roll out performance review automation for Q4...', status: 'pending' },
      { text: 'Launch employee wellness program dashboard...', status: 'pending' },
      { text: 'Optimize recruitment funnel for tech roles...', status: 'pending' }
    ],
    placeholder: 'Ask about HR...'
  },
  {
    id: 'phoebe',
    name: 'Phoebe, PPC expert',
    lastActive: 'Automatic',
    agentImage: agentPhoebe,
    metrics: [
      { value: '4.2x', label: 'ROAS', sublabel: '+ 12%', positive: true },
      { value: '$23.50', label: 'CPC', sublabel: '- 8%', positive: false },
      { value: '94.2%', label: 'Quality Score', sublabel: '+ 2%', positive: true },
      { value: '87', label: 'Actions Today', sublabel: 'Real-Time', positive: null }
    ],
    recentActivity: [
      { text: 'Increased bid on premium "lookalike" by 18%', status: 'completed' },
      { text: 'Added negative keywords "cheap" to Brand cam...', status: 'completed' },
      { text: 'Paused all only-search for Desktop', status: 'completed' }
    ],
    nextSteps: [
      { text: 'Customized field strategy for Black Friday campaign', status: 'pending' },
      { text: 'Paused underperforming all groups in Shopping...', status: 'pending' },
      { text: 'Review competitor amount for Q4 strategy', status: 'pending' }
    ],
    placeholder: 'Ask about PPC...'
  }
]

// Arrow icon
const arrowIcon = 'https://www.figma.com/api/mcp/asset/e4da4fe7-92b5-4ec5-b69f-836043a0544b'

// Alice section images
const aliceImage = 'https://www.figma.com/api/mcp/asset/3fd1c4c5-fd17-492a-892d-447d768550e3'
const iconGoogle = 'https://www.figma.com/api/mcp/asset/2a7cdfd5-a01c-4e60-89bf-6f65d5c0e9ac'
const iconMeta = 'https://www.figma.com/api/mcp/asset/4fde3b37-cd1a-4aa1-a7f9-ce80c7a1f1f6'
const iconAnalytics = 'https://www.figma.com/api/mcp/asset/6e2cacd7-e1ff-4711-a147-4127154959cf'
const iconSlack = 'https://www.figma.com/api/mcp/asset/4da517fc-0202-4293-918d-4747f497994e'
</script>

<template>
  <div class="min-h-screen bg-[#090914]">
    <AppHeader />

    <!-- Hero Section -->
    <section class="pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Beyond the Prompt tagline -->
        <p class="text-[16px] sm:text-[18px] md:text-[20px] mb-4 sm:mb-6" style="font-family: 'Permanent Marker', sans-serif; background: linear-gradient(90deg, #659ef9 0%, #fa48be 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;">
          Beyond the Prompt
        </p>

        <!-- Main heading -->
        <h1
          class="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.1] text-white mb-4 sm:mb-6 tracking-tight px-4"
          style="font-family: 'Poppins', sans-serif;"
        >
          Workspace for AI Teams
        </h1>

        <!-- Subheading -->
        <p class="text-[16px] sm:text-[18px] text-gray-400 mb-8 sm:mb-10 max-w-[600px] mx-auto px-4">
          Manage and collaborate with AI agents like real employees.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
          <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-6 py-3 bg-white text-[#090914] rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-white/90 transition-colors text-center">
            Create your first agent
          </a>
          <button class="w-full sm:w-auto px-6 py-3 border border-white/20 text-white rounded-full text-[15px] sm:text-[16px] font-semibold hover:border-white/40 transition-colors">
            Book a quick demo
          </button>
        </div>

        <!-- Powered by text -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-[12px] px-4">
          <span class="text-[#6c5d73] font-medium">POWERED BY THE WORLD'S LEADING AI LABS</span>
          <div class="flex items-center gap-3 sm:gap-4">
            <img :src="iconClaude" alt="Claude" class="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
            <img :src="iconOpenAI" alt="OpenAI" class="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
            <img :src="iconGemini" alt="Gemini" class="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
          </div>
        </div>
      </div>
    </section>

    <!-- Agent Cards Section -->
    <section class="pt-16 sm:pt-24 xl:pt-32 pb-12 sm:pb-16">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          <!-- Agent Card -->
          <div
            v-for="(agent, index) in agents"
            :key="agent.id"
            class="relative w-full max-w-[396px] group"
            :class="{
              'hidden md:block': index === 1,
              'hidden xl:block': index === 2
            }"
          >
            <!-- Gradient Glow (always visible for Hanna, on hover for others) -->
            <div
              class="absolute top-[60px] left-1/2 -translate-x-1/2 w-[450px] h-[650px] rounded-[16px] transition-opacity duration-300"
              :class="agent.id === 'hanna' ? 'opacity-70' : 'opacity-0 group-hover:opacity-70'"
              style="background: linear-gradient(90deg, #659ef9 0%, #fa48be 100%); filter: blur(80px); z-index: 0;"
            ></div>

            <!-- Agent + Chart Composite Image (positioned to peek from behind card) -->
            <div
              v-if="index === 0"
              ref="agent0Ref"
              class="absolute left-1/2 -translate-x-1/2"
              :class="agent.id === 'hanna' ? 'w-[350px] -top-[155px]' : 'w-[370px] -top-[160px]'"
              style="z-index: 10;"
              :style="{ transform: agent0Transform, willChange: 'transform' }"
            >
              <img :src="agent.agentImage" :alt="agent.name" class="w-full h-auto" loading="lazy" />
            </div>
            <div
              v-else-if="index === 1"
              ref="agent1Ref"
              class="absolute left-1/2 -translate-x-1/2"
              :class="agent.id === 'hanna' ? 'w-[350px] -top-[155px]' : 'w-[370px] -top-[160px]'"
              style="z-index: 10;"
              :style="{ transform: agent1Transform, willChange: 'transform' }"
            >
              <img :src="agent.agentImage" :alt="agent.name" class="w-full h-auto" loading="lazy" />
            </div>
            <div
              v-else
              ref="agent2Ref"
              class="absolute left-1/2 -translate-x-1/2"
              :class="agent.id === 'hanna' ? 'w-[350px] -top-[155px]' : 'w-[370px] -top-[160px]'"
              style="z-index: 10;"
              :style="{ transform: agent2Transform, willChange: 'transform' }"
            >
              <img :src="agent.agentImage" :alt="agent.name" class="w-full h-auto" loading="lazy" />
            </div>

            <!-- Card Body -->
            <div class="bg-[#13131f] rounded-[16px] p-5 relative border border-white/10 overflow-hidden w-full max-w-[396px] mt-[120px]" style="z-index: 20;">
              <!-- Agent Header -->
              <div class="mb-4">
                <h3 class="text-[20px] font-bold text-white leading-[28px] mb-1">{{ agent.name }}</h3>
                <p class="text-[12px] text-gray-400 font-medium">{{ agent.lastActive }}</p>
              </div>

              <!-- Metrics Grid (2 rows, overflows card edge) -->
              <div class="mb-4 -mr-5">
                <div class="flex gap-2 mb-2">
                  <div
                    v-for="(metric, idx) in agent.metrics.slice(0, 2)"
                    :key="idx"
                    class="backdrop-blur-sm bg-[rgba(29,25,31,0.6)] rounded-[12px] px-5 py-4 flex items-center gap-4 flex-shrink-0 border border-white/5"
                  >
                    <p class="text-[26px] font-bold text-white leading-[32px] whitespace-nowrap" style="font-family: 'Poppins', sans-serif;">{{ metric.value }}</p>
                    <div class="flex flex-col gap-0.5">
                      <p class="text-[13px] font-semibold text-white leading-normal whitespace-nowrap" style="font-family: 'Poppins', sans-serif;">{{ metric.label }}</p>
                      <p
                        class="text-[12px] font-medium leading-[16px] whitespace-nowrap"
                        :class="{
                          'text-emerald-500': metric.positive === true,
                          'text-[#e21269]': metric.positive === false,
                          'text-gray-400': metric.positive === null
                        }"
                      >
                        {{ metric.sublabel }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <div
                    v-for="(metric, idx) in agent.metrics.slice(2, 4)"
                    :key="idx + 2"
                    class="backdrop-blur-sm bg-[rgba(29,25,31,0.6)] rounded-[12px] px-5 py-4 flex items-center gap-4 flex-shrink-0 border border-white/5"
                  >
                    <p class="text-[26px] font-bold text-white leading-[32px] whitespace-nowrap" style="font-family: 'Poppins', sans-serif;">{{ metric.value }}</p>
                    <div class="flex flex-col gap-0.5">
                      <p class="text-[13px] font-semibold text-white leading-normal whitespace-nowrap" style="font-family: 'Poppins', sans-serif;">{{ metric.label }}</p>
                      <p
                        class="text-[12px] font-medium leading-[16px] whitespace-nowrap"
                        :class="{
                          'text-emerald-500': metric.positive === true,
                          'text-[#e21269]': metric.positive === false,
                          'text-gray-400': metric.positive === null
                        }"
                      >
                        {{ metric.sublabel }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Recent Activity -->
              <div class="mb-3">
                <h4 class="text-[12px] font-bold text-gray-500 uppercase tracking-normal mb-4">RECENT ACTIVITY</h4>
                <div class="space-y-2">
                  <div
                    v-for="(activity, idx) in agent.recentActivity"
                    :key="idx"
                    class="flex items-start gap-[7px]"
                  >
                    <div class="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.6)]"></div>
                    </div>
                    <p class="text-[14px] text-gray-300 leading-[20px] truncate">{{ activity.text }}</p>
                  </div>
                </div>
              </div>

              <!-- Next Steps -->
              <div class="mb-3">
                <h4 class="text-[12px] font-bold text-gray-500 uppercase tracking-normal mb-4">NEXT STEPS</h4>
                <div class="space-y-2">
                  <div
                    v-for="(step, idx) in agent.nextSteps"
                    :key="idx"
                    class="flex items-start gap-[7px]"
                  >
                    <div class="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <div class="w-2 h-2 rounded-full border-2 border-gray-500"></div>
                    </div>
                    <p class="text-[14px] text-gray-300 leading-[20px] truncate">{{ step.text }}</p>
                  </div>
                </div>
              </div>

              <!-- Chat Input -->
              <div class="relative">
                <!-- Gradient glow for Hanna's input (active state) -->
                <div v-if="agent.id === 'hanna'" class="absolute inset-0 rounded-full -z-10" style="background: linear-gradient(90deg, rgb(101, 158, 249) 0%, rgb(250, 72, 190) 100%); filter: blur(16px); opacity: 0.5;"></div>

                <div
                  class="bg-[#1d191f] rounded-full h-[52px] flex items-center gap-3 pl-4 pr-2"
                  :class="agent.id === 'hanna' ? 'border-[1.5px] border-transparent' : 'border-[1.5px] border-white/10'"
                  :style="agent.id === 'hanna' ? 'background: linear-gradient(#1d191f, #1d191f) padding-box, linear-gradient(90deg, #659ef9 0%, #fa48be 100%) border-box;' : ''"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="flex-shrink-0">
                    <path d="M10 4V16M4 10H16" stroke="#6c5d73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    :placeholder="agent.placeholder"
                    class="flex-1 bg-transparent text-[16px] text-white placeholder-gray-500 outline-none"
                  />
                  <button class="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="#13131f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="pt-12 sm:pt-16 xl:pt-24 pb-12 sm:pb-16 xl:pb-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="max-w-[999px] mx-auto text-center">
          <!-- Pill-shaped text box -->
          <div class="inline-flex items-center justify-center px-4 sm:px-5 py-3 sm:py-4 rounded-full bg-[#1d191f] border border-white/10 mb-6 sm:mb-8">
            <p class="text-[13px] sm:text-[14px] font-normal text-gray-400 leading-6">
              Stop choosing between generic AIs that are too shallow and complex BI tools.
            </p>
          </div>

          <h2 class="text-[24px] sm:text-[32px] xl:text-[44px] font-medium leading-[1.35] text-white tracking-[-0.02em] capitalize px-4">
            Teamday is your financial/Data co-pilot, blending deep domain expertise with conversational simplicity to give you reliable answers from your live data.
          </h2>
        </div>
      </div>
    </section>

    <!-- Alice Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="relative max-w-[1158px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
          <!-- Agent Graphic - First on mobile, Left on desktop -->
          <div
            ref="aliceParallaxRef"
            class="w-full xl:w-auto flex justify-center xl:block"
            :style="{ transform: aliceTransform, willChange: 'transform' }"
          >
            <HeroAgentGraphic />
          </div>

          <!-- Text Content - Second on mobile, Right on desktop -->
          <div class="flex flex-col gap-4 sm:gap-6 max-w-[519px] w-full">
            <!-- Title -->
            <p class="text-[18px] sm:text-[20px] text-[#c34aff]" style="font-family: 'Permanent Marker', cursive;">
              Alice, the analyst
            </p>

            <!-- Heading -->
            <h2 class="text-[32px] sm:text-[40px] xl:text-[52px] font-semibold leading-[1.15] text-[#f5f4f6] tracking-[-0.02em] capitalize">
              Turn Ad Spend Into Profitable Growth
            </h2>

            <!-- Description -->
            <p class="text-[16px] sm:text-[18px] text-[#d8d2da] leading-normal">
              Your AI User Acquisition Analyst monitors campaigns 24/7, identifies winning audiences, kills underperforming ads, and scales what works—automatically optimizing your CAC and LTV ratio.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-4 py-3 bg-[#f5f4f6] text-[#1d191f] rounded-full text-[15px] font-semibold hover:bg-white transition-colors text-center">
                Hire Alice
              </a>
              <NuxtLink to="/sarah-analyst" class="w-full sm:w-auto px-4 py-3 border border-[#4b4152] text-[#f5f4f6] rounded-full text-[15px] font-semibold hover:border-white/40 transition-colors inline-block text-center">
                More about Alice
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Finn CFO Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="relative max-w-[1158px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
          <!-- Left Content - Agent Graphic -->
          <div
            ref="finnParallaxRef"
            class="w-full xl:w-auto flex justify-center xl:block"
            :style="{ transform: finnTransform, willChange: 'transform' }"
          >
            <FinnAgentGraphic />
          </div>

          <!-- Right Content -->
          <div class="flex flex-col gap-4 sm:gap-6 max-w-[519px] w-full">
            <!-- Title -->
            <p class="text-[18px] sm:text-[20px] text-[#02e9eb]" style="font-family: 'Permanent Marker', cursive;">
              Finn, CFO
            </p>

            <!-- Heading -->
            <h2 class="text-[32px] sm:text-[40px] xl:text-[52px] font-semibold leading-[1.15] text-[#f5f4f6] tracking-[-0.02em] capitalize">
              Turn Financial Chaos Into Strategic Clarity
            </h2>

            <!-- Description -->
            <p class="text-[16px] sm:text-[18px] text-[#d8d2da] leading-normal">
              Finn monitors cash flow in real-time, forecasts runway scenarios, flags budget anomalies, and delivers executive-ready financial reports—giving you complete visibility without the manual work.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-4 py-3 bg-[#f5f4f6] text-[#1d191f] rounded-full text-[15px] font-semibold hover:bg-white transition-colors text-center">
                Hire Finn
              </a>
              <NuxtLink to="/finn-cfo" class="w-full sm:w-auto px-4 py-3 border border-[#4b4152] text-[#f5f4f6] rounded-full text-[15px] font-semibold hover:border-white/40 transition-colors inline-block text-center">
                More about Finn
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why AI Agents Section -->
    <section class="pt-20 sm:pt-28 xl:pt-40 pb-12 sm:pb-16 xl:pb-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="relative max-w-[1232px] mx-auto">
          <!-- Heading -->
          <h2 class="text-[32px] sm:text-[40px] xl:text-[48px] font-semibold leading-[1.15] tracking-[-0.02em] text-white text-center mb-8 sm:mb-12 xl:mb-16 capitalize">
            Why AI agents?
          </h2>

          <!-- Features Grid -->
          <div ref="whyAgentsRef" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <!-- Complete transparency -->
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] p-10 flex gap-6 transition-all duration-700 ease-out"
              :class="whyAgentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: '0ms' }"
            >
              <div class="w-[68px] h-[68px] shrink-0 rounded-[18px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] flex items-center justify-center">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/734229db-d645-4b75-b2f1-eb74b16250d4" alt="" class="max-w-full max-h-full" />
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h3 class="text-[20px] font-semibold leading-[32px] text-white">Complete transparency</h3>
                <p class="text-[16px] text-[#d8d2da] leading-normal">
                  See every step: what the agent read, which tools it used, why it made each decision.
                </p>
              </div>
            </div>

            <!-- Human-in-the-Loop -->
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] p-10 flex gap-6 transition-all duration-700 ease-out"
              :class="whyAgentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: '100ms' }"
            >
              <div class="w-[68px] h-[68px] shrink-0 rounded-[18px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] flex items-center justify-center">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/4164973d-9e07-48f9-b7a9-e9a86f528c82" alt="" class="max-w-full max-h-full" />
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h3 class="text-[20px] font-semibold leading-[32px] text-white">Human-in-the-Loop</h3>
                <p class="text-[16px] text-[#d8d2da] leading-normal">
                  Agents work independently but request approval for critical decisions. You have the final word.
                </p>
              </div>
            </div>

            <!-- Multi-Model Flexibility -->
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] p-10 flex gap-6 transition-all duration-700 ease-out"
              :class="whyAgentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: '200ms' }"
            >
              <div class="w-[68px] h-[68px] shrink-0 rounded-[18px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] flex items-center justify-center">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/35a39d3d-cb77-4931-bf3a-2ecca1c1c394" alt="" class="max-w-full max-h-full" />
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h3 class="text-[20px] font-semibold leading-[32px] text-white">Multi-Model Flexibility</h3>
                <p class="text-[16px] text-[#d8d2da] leading-normal">
                  Use Claude for reasoning, GPT-4 for code, Mistral for cost efficiency. One workspace, all models.
                </p>
              </div>
            </div>

            <!-- Persistent Memory -->
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] p-10 flex gap-6 transition-all duration-700 ease-out"
              :class="whyAgentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: '300ms' }"
            >
              <div class="w-[68px] h-[68px] shrink-0 rounded-[18px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] flex items-center justify-center">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/48eb6b16-2e9f-4a55-8bd0-91d1ffc7150d" alt="" class="max-w-full max-h-full" />
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h3 class="text-[20px] font-semibold leading-[32px] text-white">Persistent Memory</h3>
                <p class="text-[16px] text-[#d8d2da] leading-normal">
                  Each agent has its own directory, memory, and context. Learns from every run.
                </p>
              </div>
            </div>

            <!-- Tool & MCP Integrations -->
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] p-10 flex gap-6 transition-all duration-700 ease-out"
              :class="whyAgentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: '400ms' }"
            >
              <div class="w-[68px] h-[68px] shrink-0 rounded-[18px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] flex items-center justify-center">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/03625906-2220-40f9-8408-1e135ec9618c" alt="" class="max-w-full max-h-full" />
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h3 class="text-[20px] font-semibold leading-[32px] text-white">Tool & MCP Integrations</h3>
                <p class="text-[16px] text-[#d8d2da] leading-normal">
                  Connect Notion, Slack, HubSpot, GitHub. Agents work with your real tools.
                </p>
              </div>
            </div>

            <!-- Audit & Analytics -->
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] p-10 flex gap-6 transition-all duration-700 ease-out"
              :class="whyAgentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
              :style="{ transitionDelay: '500ms' }"
            >
              <div class="w-[68px] h-[68px] shrink-0 rounded-[18px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] flex items-center justify-center">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/fe5a6dd8-e55d-469c-ba3a-59035bbfe08a" alt="" class="max-w-full max-h-full" />
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h3 class="text-[20px] font-semibold leading-[32px] text-white">Audit & Analytics</h3>
                <p class="text-[16px] text-[#d8d2da] leading-normal">
                  Track performance, ROI, and impact of each agent. Data for better decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Machines Section -->
    <VirtualMachinesSection />

    <!-- Active Direction or Full Autonomy Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <!-- Heading and Description -->
        <div class="flex flex-col gap-4 items-center mb-8 sm:mb-12 xl:mb-16">
          <h2 class="text-[28px] sm:text-[36px] xl:text-[48px] font-semibold leading-[1.25] text-center tracking-[-0.02em] capitalize max-w-[717px] px-4">
            <span class="text-white">Active Direction or Full Autonomy. </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#659ef9] to-[#fa48be]">Your Choice</span>
          </h2>
          <p class="text-[16px] sm:text-[18px] text-[#d8d2da] leading-normal text-center max-w-[688px] px-4">
            Control how involved you want to be. Actively prompt your agents for specific tasks, or let them work autonomously and receive progress reports.
          </p>
        </div>

        <!-- Two Cards -->
        <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
          <!-- Interactive Mode Card -->
          <div class="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] w-full max-w-[423px] h-[408px] overflow-hidden">
            <div class="absolute inset-0 shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]"></div>

            <div class="absolute left-1/2 top-[calc(50%-16px)] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center justify-center">
              <!-- Icon -->
              <div class="backdrop-blur-lg bg-white/[0.02] border border-white/10 rounded-[18px] w-[68px] h-[68px] flex items-center justify-center overflow-hidden">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/ce4ae0ec-ede1-49f7-bd11-396dcef701fc" alt="" class="max-w-full max-h-full brightness-0 invert" />
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-[36px] font-semibold leading-[43.2px] text-white tracking-[-0.36px] capitalize w-[343px] text-center">
                Interactive mode
              </h3>

              <!-- Description -->
              <p class="text-[18px] text-[#d8d2da] leading-normal w-[343px] text-center">
                Full flexibility with instant top-ups. Only pay for what you need.
              </p>
            </div>

            <!-- Bottom Glow - Centered -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
              <img src="https://www.figma.com/api/mcp/asset/5005eaa3-2717-4801-9b75-f9a7bb2e66f4" alt="" class="w-[258px] h-[258px]" />
            </div>
          </div>

          <!-- Autonomous Mode Card -->
          <div class="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-[16px] w-full max-w-[423px] h-[408px] overflow-hidden">
            <div class="absolute inset-0 shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]"></div>

            <div class="absolute left-1/2 top-[calc(50%-16px)] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center justify-center">
              <!-- Icon -->
              <div class="backdrop-blur-lg bg-white/[0.02] border border-white/10 rounded-[18px] w-[68px] h-[68px] flex items-center justify-center overflow-hidden">
                <div class="w-[36px] h-[36px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/d283de92-3fe7-49a5-9e3e-7bfd498ed741" alt="" class="max-w-full max-h-full brightness-0 invert" />
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-[36px] font-semibold leading-[43.2px] text-white tracking-[-0.36px] capitalize text-center">
                Autonomous Mode
              </h3>

              <!-- Description -->
              <p class="text-[18px] text-[#d8d2da] leading-normal w-[343px] text-center">
                Full flexibility with instant top-ups. Only pay for what you need.
              </p>
            </div>

            <!-- Bottom Glow - Centered -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
              <img src="https://www.figma.com/api/mcp/asset/2b2bea1c-85b5-49e5-9a26-40e370cc2cd1" alt="" class="w-[258px] h-[258px]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hire AI Agents Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <!-- Main Heading -->
        <div class="flex flex-col gap-4 items-center mb-12 sm:mb-16 xl:mb-24">
          <h2 class="text-[32px] sm:text-[40px] xl:text-[48px] font-semibold leading-[1.15] text-center tracking-[-0.02em] capitalize">
            <div class="bg-clip-text text-transparent bg-gradient-to-r from-[#659ef9] to-[#fa48be]">Hire AI Agents</div>
            <div class="text-white">Like Real Employees.</div>
          </h2>
          <p class="text-[16px] sm:text-[18px] text-[#d8d2da] leading-normal text-center max-w-[784px] px-4">
            Define goals, assign tools and resources, then watch them work
          </p>
        </div>

        <!-- Agent Visualization -->
        <div class="relative w-full max-w-[980px] mx-auto xl:h-[600px] mb-12 sm:mb-20 xl:mb-32">
          <!-- Central Agent Image with Glow - Desktop only with absolute positioning -->
          <div class="hidden xl:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <!-- Glow Effect -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[608px] h-[450px] -z-10">
              <img src="https://www.figma.com/api/mcp/asset/93c15731-0562-479c-a8b4-53a5de726bf3" alt="" class="w-full h-full object-contain opacity-60" />
            </div>
            <!-- Agent Image with Fade -->
            <div class="relative w-[459px] h-[688px] overflow-hidden">
              <img src="https://www.figma.com/api/mcp/asset/efdf0231-9d76-498b-9a77-2a300678a550" alt="AI Agent" class="w-full h-full object-cover" />
              <!-- Fade-out gradient at bottom -->
              <div class="absolute inset-x-0 bottom-0 h-[350px] bg-gradient-to-t from-[#090914] to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Central Agent Image - Mobile/Tablet with normal flow -->
          <div class="xl:hidden flex justify-center mb-[-140px] sm:mb-[-160px]">
            <div class="relative">
              <!-- Glow Effect -->
              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[300px] sm:h-[375px] -z-10">
                <img src="https://www.figma.com/api/mcp/asset/93c15731-0562-479c-a8b4-53a5de726bf3" alt="" class="w-full h-full object-contain opacity-60" />
              </div>
              <!-- Agent Image with Fade -->
              <div class="relative w-[300px] sm:w-[380px] h-[450px] sm:h-[570px] overflow-hidden">
                <img src="https://www.figma.com/api/mcp/asset/efdf0231-9d76-498b-9a77-2a300678a550" alt="AI Agent" class="w-full h-full object-cover" />
                <!-- Fade-out gradient at bottom -->
                <div class="absolute inset-x-0 bottom-0 h-[200px] sm:h-[280px] bg-gradient-to-t from-[#090914] to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <!-- Cards Container - Single column on mobile/tablet, absolute positioned on desktop -->
          <div class="xl:contents">
            <!-- System tools -->
            <div class="xl:absolute xl:left-0 xl:top-[100px] w-full max-w-[320px] mx-auto xl:mx-0 mb-4 xl:mb-0 bg-[#090914] rounded-[16px] border border-white/10 p-4 backdrop-blur-lg">
              <!-- Title only on mobile/tablet -->
              <p class="xl:hidden text-[14px] font-semibold text-white">System tools</p>

              <!-- Title with tags on desktop -->
              <div class="hidden xl:block">
                <div class="flex items-center gap-2 mb-4">
                  <p class="text-[14px] font-semibold text-white">System tools</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 text-[14px] text-[#a495aa] border border-[#3a3640] rounded-full font-medium">Computer</span>
                  <span class="px-2 py-1 text-[14px] text-white bg-[#650396] border border-[#8403c4] rounded-full font-medium">Search</span>
                  <span class="px-2 py-1 text-[14px] text-white bg-[#650396] border border-[#8403c4] rounded-full font-medium">Website Reader</span>
                  <span class="px-2 py-1 text-[14px] text-[#a495aa] border border-[#3a3640] rounded-full font-medium">Generate Image</span>
                  <span class="px-2 py-1 text-[14px] text-white bg-[#650396] border border-[#8403c4] rounded-full font-medium">Web search</span>
                  <span class="px-2 py-1 text-[14px] text-[#a495aa] border border-[#3a3640] rounded-full font-medium">Architect</span>
                  <span class="px-2 py-1 text-[14px] text-white bg-[#650396] border border-[#8403c4] rounded-full font-medium">Mail</span>
                  <span class="px-2 py-1 text-[14px] text-white bg-[#650396] border border-[#8403c4] rounded-full font-medium">Agent</span>
                  <span class="px-2 py-1 text-[14px] text-[#a495aa] border border-[#3a3640] rounded-full font-medium">Get All Available Tools</span>
                  <span class="px-2 py-1 text-[14px] text-[#a495aa] border border-[#3a3640] rounded-full font-medium">Sequential Thinking</span>
                </div>
              </div>
            </div>

            <!-- Trigger / Scheduler -->
            <div class="xl:absolute xl:right-0 xl:top-[100px] w-full max-w-[320px] mx-auto xl:mx-0 mb-4 xl:mb-0 bg-[#090914] rounded-[16px] border border-white/10 p-4 backdrop-blur-lg">
              <p class="text-[14px] font-semibold text-white">Trigger / Scheduler</p>
            </div>

            <!-- Agent instructions -->
            <div class="xl:absolute xl:right-0 xl:top-[164px] w-full max-w-[320px] mx-auto xl:mx-0 mb-4 xl:mb-0 bg-[#090914] rounded-[16px] border border-white/10 p-4 backdrop-blur-lg">
              <p class="text-[14px] font-semibold text-white">Agent instructions</p>
            </div>

            <!-- Integrations -->
            <div class="xl:absolute xl:right-0 xl:top-[228px] w-full max-w-[320px] mx-auto xl:mx-0 mb-4 xl:mb-0 bg-[#090914] rounded-[16px] border border-white/10 p-4 backdrop-blur-lg">
              <div class="flex items-center justify-between mb-4">
                <p class="text-[14px] font-semibold text-white">Integrations</p>
                <svg class="w-5 h-5 text-[#a495aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div class="flex gap-4 items-center px-1.5">
                <img src="https://www.figma.com/api/mcp/asset/bc85699e-3666-4b2f-b6c7-5d92471c9714" alt="" class="w-6 h-6" />
                <img src="https://www.figma.com/api/mcp/asset/7a020e79-bd5f-41a2-9d61-b26094beb450" alt="" class="w-6 h-6" />
                <img src="https://www.figma.com/api/mcp/asset/3a5aae9b-275c-4ca5-8811-9667ea2b9247" alt="" class="w-6 h-6" />
              </div>
            </div>

            <!-- LLM Model -->
            <div class="xl:absolute xl:right-0 xl:top-[332px] w-full max-w-[320px] mx-auto xl:mx-0 mb-4 xl:mb-0 bg-[#090914] rounded-[16px] border border-white/10 p-4 backdrop-blur-lg">
              <p class="text-[14px] font-semibold text-white mb-4">LLM Model</p>
              <div class="flex gap-4 items-center px-1.5">
                <img src="https://www.figma.com/api/mcp/asset/9964fed2-f008-4780-9d67-eafc5f17d92d" alt="Gemini" class="w-6 h-6" />
                <img src="https://www.figma.com/api/mcp/asset/7b1f8485-fc5a-441d-b565-6b60164701fa" alt="Claude" class="w-6 h-6" />
                <img src="https://www.figma.com/api/mcp/asset/4d84c2fa-dba7-4165-8600-227ea11a7d0a" alt="GPT" class="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <!-- Integrates With Your Stack -->
        <div class="flex flex-col xl:flex-row items-start xl:items-start justify-between max-w-[980px] mx-auto gap-8 xl:gap-0">
          <div class="flex flex-col gap-4 w-full xl:w-[440px]">
            <h3 class="text-[32px] sm:text-[40px] xl:text-[48px] font-semibold leading-[1.15] text-white tracking-[-0.02em] capitalize">
              Integrates with your stack
            </h3>
            <p class="text-[16px] text-[#d8d2da] leading-[28px]">
              Connect Notion, Slack, HubSpot, GitHub. Agents work with your real tools.
            </p>
          </div>

          <!-- Integration Icons Grid -->
          <div class="w-full xl:w-[412px]">
            <div class="flex flex-wrap gap-[18px] justify-center xl:justify-start">
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/ce78ec06-e65a-42fe-ae08-4ee6c5064f4d" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/7adf0847-0b65-41aa-8b63-42a533689489" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/52a5a37f-4b97-4106-a2c1-835d98d76a71" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/b15f5fce-779e-4f9a-925b-25866fa905fc" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/07a363ce-b819-4f81-bb5d-f817816f4b54" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <div class="w-[29px] h-[29px] bg-[#635bff] rounded-[6.4px] flex items-center justify-center p-[4.8px]">
                  <img src="https://www.figma.com/api/mcp/asset/856d6d9a-aba3-4453-a1bb-658db86dd118" alt="" class="w-[19px] h-[19px]" />
                </div>
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/287de06d-6aa1-4521-886f-c0b695c1defc" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/808b11df-7b09-4e2d-910a-778a7413ba3d" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/0f97c013-7a2c-4e88-bdf6-1ec8d59a1fbf" alt="" class="w-[29px] h-[29px]" />
              </div>
              <div class="w-[68px] h-[68px] rounded-[19.2px] backdrop-blur-lg bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] border border-white/10 flex items-center justify-center">
                <img src="https://www.figma.com/api/mcp/asset/5f1fa9ea-fc58-4b45-8b43-4109521bdcae" alt="" class="w-[29px] h-[29px]" />
              </div>
            </div>
            <!-- +500 more on separate row -->
            <div class="flex items-center justify-center xl:justify-start mt-[18px]">
              <div class="flex items-center justify-center w-[117px] h-[67px]">
                <p class="text-[16px] text-[#6c5d73] leading-[28px]">+500 more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="relative bg-[#13131f] rounded-[24px] sm:rounded-[32px] xl:rounded-[40px] overflow-hidden">
          <!-- Inner shadow -->
          <div class="absolute inset-0 pointer-events-none shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]"></div>

          <!-- Glow effects on left - Hide on mobile -->
          <div class="hidden sm:block absolute left-[-29px] w-[58px] h-[58px] top-1/2 -translate-y-1/2">
            <div class="absolute inset-[-172.41%]">
              <img src="https://www.figma.com/api/mcp/asset/b9b246b8-4f2f-4586-b26f-67625263360e" alt="" class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="hidden sm:block absolute left-[-14.5px] w-[29px] h-[29px] top-1/2 -translate-y-1/2">
            <div class="absolute inset-[-86.21%]">
              <img src="https://www.figma.com/api/mcp/asset/3864c370-bd4a-4a63-b700-573209e2406e" alt="" class="w-full h-full object-contain" />
            </div>
          </div>

          <!-- Glow effects on right - Hide on mobile -->
          <div class="hidden sm:block absolute right-[-29px] w-[58px] h-[58px] top-1/2 -translate-y-1/2">
            <div class="absolute inset-[-172.41%]">
              <img src="https://www.figma.com/api/mcp/asset/c68e6800-25bc-4756-87c2-639c16b9e4b1" alt="" class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="hidden sm:block absolute right-[-14.5px] w-[29px] h-[29px] top-1/2 -translate-y-1/2">
            <div class="absolute inset-[-86.21%]">
              <img src="https://www.figma.com/api/mcp/asset/220eef08-89e4-48be-9ddd-dc75e4dee36a" alt="" class="w-full h-full object-contain" />
            </div>
          </div>

          <!-- Content -->
          <div class="relative flex flex-col gap-6 sm:gap-8 items-center justify-center py-12 sm:py-16 xl:py-24 px-4">
            <!-- Text content -->
            <div class="flex flex-col gap-3 items-center text-center max-w-[991px]">
              <h2 class="text-[28px] sm:text-[32px] xl:text-[36px] font-semibold leading-[1.2] text-white tracking-[-0.02em] capitalize">
                Ready to Build Your AI Team?
              </h2>
              <p class="text-[16px] sm:text-[18px] text-white/90 leading-normal">
                Start with your first agent in minutes. No credit card required.
              </p>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-start w-full sm:w-auto">
              <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto bg-white px-4 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors">
                <span class="text-[16px] font-semibold leading-[24px] text-[#1d191f]">Create your first agent</span>
              </a>
              <button class="w-full sm:w-auto bg-transparent border border-white/20 px-4 py-3 rounded-full flex items-center justify-center gap-3 hover:border-white/40 transition-colors">
                <span class="text-[16px] font-semibold leading-[24px] text-white">Book a quick demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
