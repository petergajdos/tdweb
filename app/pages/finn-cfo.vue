<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Asset URLs from Figma
const finnHeroPortrait = 'https://www.figma.com/api/mcp/asset/89162609-3eb4-46f4-819e-41d9b6da87c4'
const finnProfilePortrait = 'https://www.figma.com/api/mcp/asset/89162609-3eb4-46f4-819e-41d9b6da87c4'
const xeroIcon = 'https://www.figma.com/api/mcp/asset/8ae094ff-0bab-46d7-8df2-9b6e984b03e4'
const slackIcon = 'https://www.figma.com/api/mcp/asset/814883f9-bb1a-4b57-b073-ca808d62dffb'
const paypalIcon = 'https://www.figma.com/api/mcp/asset/06f9a31d-fa0e-4a6c-88f6-5eeeca1b6a56'
const stripeIcon = 'https://www.figma.com/api/mcp/asset/2cebcea4-4e2d-41e2-a8da-2fe08de1c525'
const chartImage = 'https://www.figma.com/api/mcp/asset/09919e9b-5384-4f42-ad1b-017906939c1d'
const architectureImage = 'https://www.figma.com/api/mcp/asset/b2fcd386-85e6-457f-8975-3d12b1a4d6a7'
const teamdayLogo = 'https://www.figma.com/api/mcp/asset/b4891670-cd7e-4948-9d44-63b5d9a1da56'
const teamdayIcon = 'https://www.figma.com/api/mcp/asset/7b0503fe-ddd7-43f0-87a3-1f7266619a72'
const cubeD3Logo = 'https://www.figma.com/api/mcp/asset/8b89a934-27ee-44a7-aa19-e861f49ed80c'
const claudeIcon = 'https://www.figma.com/api/mcp/asset/31ce75ca-5f1c-4ccc-a971-9649d11a4c16'
const openaiIcon = 'https://www.figma.com/api/mcp/asset/f1477ddf-d85c-4bec-8390-2a91ddf28188'
const cashflowDashboard = 'https://www.figma.com/api/mcp/asset/18657e96-cedf-473e-8ba4-73c7ddf755e1'
const arrowUpIcon = '/images/icons/arrow-up.svg'
const ellipseGlowPurple = 'https://www.figma.com/api/mcp/asset/b9b246b8-4f2f-4586-b26f-67625263360e'
const ellipseGlowPurpleInner = 'https://www.figma.com/api/mcp/asset/3864c370-bd4a-4a63-b700-573209e2406e'
const ellipseGlowCyan = 'https://www.figma.com/api/mcp/asset/c68e6800-25bc-4756-87c2-639c16b9e4b1'
const ellipseGlowCyanInner = 'https://www.figma.com/api/mcp/asset/220eef08-89e4-48be-9ddd-dc75e4dee36a'

// Metrics data
const metrics = [
  { value: '15hrs', label: 'Saved weekly on reports' },
  { value: '24/7', label: 'Monitoring &\nalerting' },
  { value: '100%', label: 'Traceable calculations' },
  { value: '5min', label: 'Setup time' }
]

// Hero benefits
const heroBenefits = [
  'Real-time monitoring',
  'Scenario planning',
  'Anomaly detection',
  'Executive dashboards'
]

// Recent activity
const recentActivity = [
  'Flagged unusual AWS spike (+$2.8K)',
  'Reconciling $47K in Stripe payments'
]

// Next steps
const nextSteps = [
  'Prepare Q4 board deck: Revenue ($4M)',
  'Review and approve Q1 department budgets'
]

// Financial Intelligence features
const features = [
  {
    number: '01',
    title: 'Executive Dashboards',
    description: 'Branded, presentation-quality HTML reports.'
  },
  {
    number: '02',
    title: 'Automated Reports',
    description: 'Schedule your weekly cash flow summary or monthly board deck data.'
  },
  {
    number: '03',
    title: 'Proactive Monitoring',
    description: 'Get alerts like, "Your burn rate increased 15% this week, here\'s why...'
  },
  {
    number: '04',
    title: 'Scenario Modeling',
    description: 'Instantly see the projected impact of cutting marketing spend or changing pricing'
  },
  {
    number: '05',
    title: 'Cash Runway',
    description: 'Get a real-time calculator with scenario planning.'
  },
  {
    number: '06',
    title: 'Automated Close',
    description: 'Use a smart checklist to automate the month-end close process.'
  }
]

// Image fade-in state for profile portrait
const profileImageLoaded = ref(false)

// Scroll animation for metrics
const metricsVisible = ref(false)
const metricsRef = ref<HTMLElement | null>(null)

// Scroll reveal for Financial Intelligence features
const { isVisible: financialFeaturesVisible, elementRef: financialFeaturesRef } = useScrollReveal(0.1)

onMounted(() => {
  // Profile portrait fade in
  setTimeout(() => {
    profileImageLoaded.value = true
  }, 100)

  if (metricsRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            metricsVisible.value = true
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(metricsRef.value)

    onBeforeUnmount(() => {
      observer.disconnect()
    })
  }
})
</script>

<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-[100px] sm:pt-[120px]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="relative py-8 sm:py-12 xl:py-[71px] px-0 xl:px-[141px]">
          <!-- Main Content Grid -->
          <div class="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
            <!-- Finn Portrait - First on mobile, Right on desktop -->
            <div class="w-full xl:w-auto order-1 xl:order-2 flex justify-center mb-[-100px] sm:mb-[-120px] xl:mb-0">
              <FinnAgentGraphic />
            </div>

            <!-- Text Content - Second on mobile, Left on desktop -->
            <div class="flex flex-col gap-4 sm:gap-6 max-w-[640px] w-full order-2 xl:order-1 relative z-10">
              <!-- Heading -->
              <h1 class="text-[36px] sm:text-[48px] xl:text-[60px] font-semibold leading-[1.2] tracking-[-0.02em] text-white capitalize">
                Turn Financial Chaos Into Strategic Clarity
              </h1>

              <!-- Subheading -->
              <p class="text-[16px] sm:text-[18px] leading-normal text-white/70">
                Stop wrestling with spreadsheets. Start having conversations with your data. Your new CFO analyzes your financials, builds dashboards, and monitors your business 24/7.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-2">
                <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-white text-[#090914] rounded-full text-[15px] font-semibold hover:bg-white/90 transition-colors text-center">
                  Hire Finn, CFO
                </a>
                <button class="px-4 py-3 border border-white/20 text-white rounded-full text-[15px] font-semibold hover:border-white/40 transition-colors">
                  See how it works
                </button>
              </div>

              <!-- Benefits -->
              <div class="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
                <!-- First Row -->
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div v-for="benefit in heroBenefits.slice(0, 2)" :key="benefit" class="flex items-center gap-3">
                    <div class="relative w-6 h-6 shrink-0">
                      <!-- Glow dot -->
                      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
                        <div class="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#02e9eb] rounded-full blur-[4px]"></div>
                        <div class="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#02e9eb] rounded-full"></div>
                      </div>
                    </div>
                    <span class="text-[14px] font-medium text-white">{{ benefit }}</span>
                  </div>
                </div>

                <!-- Second Row -->
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div v-for="benefit in heroBenefits.slice(2)" :key="benefit" class="flex items-center gap-3">
                    <div class="relative w-6 h-6 shrink-0">
                      <!-- Glow dot -->
                      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
                        <div class="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#02e9eb] rounded-full blur-[4px]"></div>
                        <div class="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#02e9eb] rounded-full"></div>
                      </div>
                    </div>
                    <span class="text-[14px] font-medium text-white">{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Finance Team AI Co-Pilot Section -->
    <section class="py-12 sm:py-16 xl:py-20">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <div class="relative bg-[#13131f] rounded-[24px] sm:rounded-[32px] xl:rounded-[40px] overflow-hidden shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]">
          <div class="flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 xl:gap-[80px] py-12 sm:py-16 xl:py-[100px] px-6 sm:px-12 xl:px-[157px]">
            <!-- Left: Heading -->
            <div class="w-full xl:w-[457px] shrink-0 text-center xl:text-left">
              <h2 class="text-[24px] sm:text-[32px] xl:text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize">
                <span class="text-white/50">Your Finance Team's</span><br />
                <span class="text-white">AI Co-Pilot</span>
              </h2>
            </div>

            <!-- Right: Description -->
            <div class="w-full xl:w-[380px] shrink-0 text-center xl:text-left">
              <p class="text-[16px] sm:text-[18px] leading-normal text-white/90">
                From data analysis to board-ready reports, all in natural language
              </p>
            </div>
          </div>

          <!-- Left Glow (Purple) - Hide on mobile -->
          <div class="hidden sm:block absolute left-[-29px] top-1/2 -translate-y-1/2 w-[58px] h-[58px]">
            <div class="absolute inset-[-172.41%] bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-[100px] opacity-60"></div>
          </div>

          <!-- Left Inner Glow - Hide on mobile -->
          <div class="hidden sm:block absolute left-[-14.5px] top-1/2 -translate-y-1/2 w-[29px] h-[29px]">
            <div class="absolute inset-[-86.21%] bg-gradient-to-r from-purple-400 to-transparent rounded-full blur-[50px] opacity-80"></div>
          </div>

          <!-- Right Glow (Cyan) - Hide on mobile -->
          <div class="hidden sm:block absolute right-[-29px] top-1/2 -translate-y-1/2 w-[58px] h-[58px]">
            <div class="absolute inset-[-172.41%] bg-gradient-to-l from-cyan-400 to-transparent rounded-full blur-[100px] opacity-60"></div>
          </div>

          <!-- Right Inner Glow - Hide on mobile -->
          <div class="hidden sm:block absolute right-[-14.5px] top-1/2 -translate-y-1/2 w-[29px] h-[29px]">
            <div class="absolute inset-[-86.21%] bg-gradient-to-l from-cyan-300 to-transparent rounded-full blur-[50px] opacity-80"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Finn Profile and Metrics Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <div class="flex flex-col xl:flex-row items-start xl:items-center justify-center gap-8 xl:gap-[72px]">
          <!-- Left: Finn Profile Card -->
          <div class="w-full xl:w-[388px] relative flex flex-col items-center mx-auto xl:mx-0">
            <!-- Finn Portrait - Full height with peeking effect -->
            <div class="relative w-full max-w-[420px] h-[350px] mb-[-72px] z-10">
              <img
                :src="finnProfilePortrait"
                alt="Finn - AI CFO"
                class="w-full h-full object-contain object-bottom transition-opacity duration-1000 ease-out"
                :class="profileImageLoaded ? 'opacity-100' : 'opacity-0'"
              />
              <!-- Fade-out gradient at bottom -->
              <div class="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#090914] to-transparent pointer-events-none"></div>
            </div>

            <!-- Chat Input -->
            <div class="relative w-full max-w-[356px] mb-6 z-20">
              <!-- Gradient Glow Effect -->
              <div class="absolute -inset-[2px] bg-gradient-to-r from-[#659ef9]/50 to-[#fa48be]/50 rounded-full blur-[12px]"></div>

              <!-- Gradient Border Container -->
              <div class="relative rounded-full p-[1.5px] bg-gradient-to-r from-[#659ef9] to-[#fa48be]">
                <!-- Main Input Card -->
                <div class="relative backdrop-blur-[8px] bg-[rgba(29,25,31,0.8)] rounded-full px-4 py-3 flex items-center justify-between">
                  <p class="text-[16px] text-white leading-6">What's our cash runway?</p>
                  <button class="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-[#1d191f]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Recent Activity & Next Steps -->
            <div class="w-full max-w-[356px] space-y-4">
              <!-- Recent Activity -->
              <div>
                <h4 class="text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Recent Activity</h4>
                <div class="space-y-2">
                  <div v-for="activity in recentActivity" :key="activity" class="flex items-start gap-2">
                    <!-- Loading Spinner Icon -->
                    <svg class="w-4 h-4 mt-0.5 animate-spin text-[#34d399]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p class="text-[14px] text-gray-600 dark:text-gray-300">{{ activity }}</p>
                  </div>
                </div>
              </div>

              <!-- Next Steps -->
              <div>
                <h4 class="text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Next Steps</h4>
                <div class="space-y-2">
                  <div v-for="step in nextSteps" :key="step" class="flex items-start gap-2">
                    <div class="w-1 h-1 bg-[#60a5fa] rounded-full mt-2"></div>
                    <p class="text-[14px] text-gray-600 dark:text-gray-300">{{ step }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Metrics and Chart -->
          <div class="flex flex-col gap-2 w-full xl:w-[625px]">
            <!-- Top Row: 2 Metrics Cards -->
            <div class="grid grid-cols-2 gap-2">
              <!-- Cash Runway Card -->
              <div class="backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] border border-white/10 rounded-[12px] p-3 sm:p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <p class="text-[11px] sm:text-[12px] font-semibold text-[#6c5d73] uppercase mb-2 tracking-[0.13px]">Cash Runway</p>
                <p class="text-[20px] sm:text-[26px] font-bold text-white mb-2 leading-[1.2]">14.2 months</p>
                <p class="text-[11px] sm:text-[12px] text-[#6c5d73] leading-[1.3]">Based on 3-month average Net Burn.</p>
              </div>

              <!-- Current Cash Balance Card -->
              <div class="backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] border border-white/10 rounded-[12px] p-3 sm:p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <p class="text-[11px] sm:text-[12px] font-semibold text-[#6c5d73] uppercase mb-2 tracking-[0.13px]">Current Cash Balance</p>
                <p class="text-[20px] sm:text-[26px] font-bold text-white mb-2 leading-[1.2]">$4.55 M</p>
                <p class="text-[11px] sm:text-[12px] text-[#10b981] leading-[1.3]">+2.1% MoM</p>
              </div>
            </div>

            <!-- Bottom Row: Avg Monthly Net Burn Card -->
            <div class="backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] border border-white/10 rounded-[12px] p-3 sm:p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <p class="text-[11px] sm:text-[12px] font-semibold text-[#6c5d73] uppercase mb-2 tracking-[0.13px]">Avg. Monthly Net Burn</p>
              <p class="text-[20px] sm:text-[26px] font-bold text-white mb-2 leading-[1.2]">$320K</p>
              <p class="text-[11px] sm:text-[12px] text-[#6c5d73] leading-[1.3]">Goal: Reduce burn to $275K to extend runway.</p>
            </div>

            <!-- Chart Visualization (Outside Card) -->
            <div class="relative h-[180px] sm:h-[220px] xl:h-[258px] w-full">
              <svg viewBox="0 0 400 100" class="w-full h-full" preserveAspectRatio="none">
                <!-- Gradient definitions -->
                <defs>
                  <!-- Line gradient -->
                  <linearGradient id="finnLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                  </linearGradient>
                  <!-- Area gradient (vertical) -->
                  <linearGradient id="finnAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#a855f7;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0" />
                  </linearGradient>
                </defs>
                <!-- Area fill path -->
                <path
                  d="M0,75 C33,80 67,68 100,72 C133,76 167,58 200,60 C233,62 267,48 300,50 C333,52 367,35 400,30 L400,100 L0,100 Z"
                  fill="url(#finnAreaGradient)"
                />
                <!-- Wavy line path -->
                <path
                  d="M0,75 C33,80 67,68 100,72 C133,76 167,58 200,60 C233,62 267,48 300,50 C333,52 367,35 400,30"
                  stroke="url(#finnLineGradient)"
                  stroke-width="1.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Financial Intelligence Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[104px]">
        <div class="text-left mb-8 sm:mb-12 xl:mb-16">
          <h2 class="text-[28px] sm:text-[36px] xl:text-[40px] font-semibold leading-[1.35] text-white mb-4">
            Financial Intelligence, Out Of The Box
          </h2>
          <p class="text-[16px] sm:text-[18px] text-white/70 max-w-2xl">
            Natural language + Financial Guardrails + Reliability. Finn understands financial concepts natively, and knows to ask smart clarifying questions.
          </p>
        </div>

        <!-- Features Grid -->
        <div ref="financialFeaturesRef" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="group relative border border-transparent hover:backdrop-blur-[25px] hover:bg-white/5 hover:border-white/10 pointer-events-auto rounded-[16px] p-4 sm:p-6 transition-all duration-700 ease-out"
            :class="financialFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Number Badge -->
            <div class="inline-flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] mb-4">
              <span class="text-[14px] font-semibold text-white">{{ feature.number }}</span>
            </div>

            <!-- Content -->
            <h3 class="text-[18px] sm:text-[20px] font-semibold leading-7 mb-2 text-white transition-all duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-[14px] text-gray-300 leading-normal">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <!-- Integration Badges Row -->
        <div class="flex flex-wrap items-center justify-center gap-6 mb-8 sm:mb-12">
          <!-- Teamday Badge -->
          <div class="flex items-center gap-3 border border-dashed border-[#d8d2da] rounded-[24px] p-6">
            <img :src="teamdayIcon" alt="Teamday" class="w-[29px] h-[29px] object-contain" />
          </div>

          <!-- CubeD3 Badge -->
          <div class="flex items-center gap-3 border border-dashed border-[#d8d2da] rounded-[24px] p-6">
            <img :src="cubeD3Logo" alt="CubeD3" class="w-[132px] h-[29px] object-contain" />
          </div>

          <!-- AI Labs Badge -->
          <div class="flex items-center gap-3 border border-dashed border-[#d8d2da] rounded-[24px] p-6">
            <img :src="claudeIcon" alt="Claude" class="w-[29px] h-[29px] object-contain" />
            <img :src="openaiIcon" alt="OpenAI" class="w-[29px] h-[29px] object-contain" />
          </div>
        </div>

        <!-- Architecture Diagram -->
        <div class="flex items-center justify-center">
          <div class="w-full max-w-[710px]">
            <img :src="architectureImage" alt="Architecture Diagram" class="w-full h-auto object-contain rounded-[24px] sm:rounded-[32px] xl:rounded-[40px]" />
          </div>
        </div>
      </div>
    </section>

    <!-- Cash Flow Dashboard Section -->
    <section class="py-12 sm:py-16 xl:py-24">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <!-- Chat Input Container -->
        <div class="flex justify-center mb-6 sm:mb-8">
          <div class="w-full max-w-[640px] backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] rounded-[16px] p-3 sm:p-4">
            <!-- Chat Input with Gradient Border -->
            <div class="relative h-[52px]">
              <!-- Gradient Glow -->
              <div class="absolute inset-0 bg-gradient-to-r from-[rgba(101,158,249,0.5)] to-[rgba(250,72,190,0.5)] rounded-full blur-[12px]"></div>

              <!-- Gradient Border Wrapper -->
              <div class="relative rounded-full p-[1.5px] bg-gradient-to-r from-[#659ef9] to-[#fa48be] h-full">
                <!-- Input Container -->
                <div class="relative backdrop-blur-[8px] bg-[#1d191f] rounded-full h-full flex items-center justify-between px-3 sm:px-4">
                  <p class="text-[14px] sm:text-[16px] text-white leading-6">
                    Give me updated cash flow dashboard
                  </p>

                  <!-- Submit Button -->
                  <button class="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full hover:scale-105 transition-transform shrink-0">
                    <img :src="arrowUpIcon" alt="Submit" class="w-4 h-4 sm:w-5 sm:h-5 brightness-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Preview Container -->
        <div class="flex justify-center">
          <div class="backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] rounded-[16px] p-3 sm:p-5 w-full max-w-[999px]">
            <div class="relative w-full aspect-[999/517] rounded-[16px] overflow-hidden">
              <img
                :src="cashflowDashboard"
                alt="Cash Flow Dashboard"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Section -->
    <section class="py-12 sm:py-16 xl:py-24 bg-[#090914]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <!-- Metrics Grid -->
        <div
          ref="metricsRef"
          class="grid grid-cols-2 xl:flex xl:flex-row items-start justify-center gap-6 sm:gap-8 xl:gap-10 mb-12 sm:mb-16"
        >
          <div
            v-for="(metric, index) in metrics"
            :key="metric.value"
            class="flex flex-col items-center gap-2 sm:gap-4 xl:w-[240px] text-center transition-all duration-700 ease-out"
            :class="metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <p class="text-[32px] sm:text-[40px] xl:text-[48px] font-semibold leading-none text-white tracking-[-0.02em]">
              {{ metric.value }}
            </p>
            <p class="text-[16px] sm:text-[18px] xl:text-[20px] leading-[1.1] text-gray-400 tracking-[-0.01em] whitespace-pre-line">
              {{ metric.label }}
            </p>
          </div>
        </div>

        <!-- CTA Container -->
        <div class="flex justify-center">
          <div class="relative bg-[#13131f] rounded-[24px] sm:rounded-[32px] xl:rounded-[40px] w-full max-w-[1306px] overflow-hidden shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]">
            <!-- Content -->
            <div class="flex flex-col items-center justify-center gap-6 sm:gap-8 py-12 sm:py-16 xl:py-20 px-6 sm:px-12">
              <!-- Heading and Description -->
              <div class="flex flex-col items-center gap-3 text-center max-w-[991px]">
                <h2 class="text-[24px] sm:text-[32px] xl:text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize text-white">
                  Ready to Hire Finn as Your AI CFO?
                </h2>
                <p class="text-[16px] sm:text-[18px] leading-normal text-white/90">
                  Start your free trial. No credit card required.
                </p>
              </div>

              <!-- CTA Button -->
              <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-white text-[#090914] rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-white/90 transition-colors text-center">
                Get Started with Teamday
              </a>
            </div>

            <!-- Left Glow (Purple) - Hide on mobile -->
            <div class="hidden sm:block absolute left-[-29px] top-1/2 -translate-y-1/2 w-[58px] h-[58px]">
              <div class="absolute inset-[-172.41%]">
                <img :src="ellipseGlowPurple" alt="" class="w-full h-full object-contain" />
              </div>
            </div>

            <!-- Left Inner Glow - Hide on mobile -->
            <div class="hidden sm:block absolute left-[-14.5px] top-1/2 -translate-y-1/2 w-[29px] h-[29px]">
              <div class="absolute inset-[-86.21%]">
                <img :src="ellipseGlowPurpleInner" alt="" class="w-full h-full object-contain" />
              </div>
            </div>

            <!-- Right Glow (Cyan) - Hide on mobile -->
            <div class="hidden sm:block absolute right-[-29px] top-1/2 -translate-y-1/2 w-[58px] h-[58px]">
              <div class="absolute inset-[-172.41%]">
                <img :src="ellipseGlowCyan" alt="" class="w-full h-full object-contain" />
              </div>
            </div>

            <!-- Right Inner Glow - Hide on mobile -->
            <div class="hidden sm:block absolute right-[-14.5px] top-1/2 -translate-y-1/2 w-[29px] h-[29px]">
              <div class="absolute inset-[-86.21%]">
                <img :src="ellipseGlowCyanInner" alt="" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </NuxtLayout>
</template>
