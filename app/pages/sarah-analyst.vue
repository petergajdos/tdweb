<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Alice/Sarah image from Figma
const aliceImage = 'https://www.figma.com/api/mcp/asset/a48164b2-25e4-4a9d-b4cf-988ac61b4980'

// Hero benefits
const heroBenefits = [
  'Real-time optimization',
  'Multi-channel analytics',
  'Audience insights',
  'Budget allocation'
]

// Table data
const tableData = [
  { channel: 'Google Search', cac: '$50', ltv: '$550', ratio: '11.0x', action: 'Scale', color: 'success' },
  { channel: 'Meta Ads', cac: '$75', ltv: '$400', ratio: '5.3x', action: 'Maintain', color: 'info' },
  { channel: 'LinkedIn', cac: '$150', ltv: '$350', ratio: '2.3x', action: 'Monitor', color: 'warning' },
  { channel: 'TikTok', cac: '$400', ltv: '$180', ratio: '0.45x', action: 'CUT!', color: 'error' }
]

// Features
const features = [
  {
    icon: 'chart-icon.svg',
    title: 'Automated Cohort Analysis',
    description: 'Branded, presentation-quality HTML reports.'
  },
  {
    icon: 'bell-icon.svg',
    title: 'Deep Anomaly Detection',
    description: 'Schedule your weekly cash flow summary or monthly board deck data.'
  },
  {
    icon: 'lightbulb-icon.svg',
    title: 'On-Demand SQL Generation',
    description: 'Get alerts like, "Your burn rate increased 15% this week, here\'s why...'
  },
  {
    icon: 'cog-icon.svg',
    title: 'Proactive Data Quality Checks',
    description: 'Sarah monitors your data sources and alerts you to gaps or inconsistencies before they corrupt your reports'
  }
]

// Metrics data
const metrics = [
  { value: '20hrs', label: 'Saved weekly on reports' },
  { value: '24/7', label: 'Data monitoring' },
  { value: '95%', label: 'Query accuracy' },
  { value: '3min', label: 'Response time' }
]

// Image fade-in state for profile portrait
const profileImageLoaded = ref(false)

// Scroll animation for metrics
const metricsVisible = ref(false)
const metricsRef = ref<HTMLElement | null>(null)

// Scroll reveal for features
const { isVisible: featuresVisible, elementRef: featuresRef } = useScrollReveal(0.1)

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

// Glow assets
const ellipseGlowPurple = 'https://www.figma.com/api/mcp/asset/b9b246b8-4f2f-4586-b26f-67625263360e'
const ellipseGlowPurpleInner = 'https://www.figma.com/api/mcp/asset/3864c370-bd4a-4a63-b700-573209e2406e'
const ellipseGlowCyan = 'https://www.figma.com/api/mcp/asset/c68e6800-25bc-4756-87c2-639c16b9e4b1'
const ellipseGlowCyanInner = 'https://www.figma.com/api/mcp/asset/220eef08-89e4-48be-9ddd-dc75e4dee36a'
</script>

<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-[100px] sm:pt-[120px]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
        <div class="relative py-8 sm:py-12 xl:py-[71px] px-0 xl:px-[141px]">
          <!-- Main Content Grid -->
          <div class="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
            <!-- Sarah Graphic - First on mobile, Right on desktop -->
            <div class="w-full xl:w-auto order-1 xl:order-2 flex justify-center mb-[-100px] sm:mb-[-120px] xl:mb-0">
              <HeroAgentGraphic />
            </div>

            <!-- Text Content - Second on mobile, Left on desktop -->
            <div class="flex flex-col gap-4 sm:gap-6 max-w-[640px] w-full order-2 xl:order-1 relative z-10">
              <!-- Heading -->
              <h1 class="text-[36px] sm:text-[48px] xl:text-[60px] font-semibold leading-[1.2] tracking-[-0.02em] text-white capitalize">
                Turn Ad Spend Into Profitable Growth
              </h1>

              <!-- Subheading -->
              <p class="text-[16px] sm:text-[18px] leading-normal text-white/70">
                Stop building dashboards. Start having conversations with your data. Your new Data Analyst connects to all your raw data, understands complex questions, and delivers answers in seconds—not days.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-2">
                <a href="https://app.teamday.ai/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-white text-[#090914] rounded-full text-[15px] font-semibold hover:bg-white/90 transition-colors text-center">
                  Hire Sarah, Data Analyst
                </a>
                <button class="px-4 py-3 border border-white/20 text-white rounded-full text-[15px] font-semibold hover:border-white/40 transition-colors">
                  Book a Demo
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

    <!-- Meet Sarah Title Section -->
    <section class="py-12 sm:py-16 xl:py-20">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <div class="relative bg-[#13131f] rounded-[24px] sm:rounded-[32px] xl:rounded-[40px] overflow-hidden shadow-[inset_0px_8px_16px_0px_rgba(0,0,0,0.1)]">
          <div class="flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 xl:gap-[80px] py-12 sm:py-16 xl:py-[100px] px-6 sm:px-12 xl:px-[157px]">
            <!-- Left: Heading -->
            <div class="w-full xl:w-[463px] shrink-0 text-center xl:text-left">
              <h2 class="text-[24px] sm:text-[32px] xl:text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize">
                <span class="text-white/50">Meet Sarah</span><br />
                <span class="text-white">Specialist AI Data Analyst</span>
              </h2>
            </div>

            <!-- Right: Description -->
            <div class="w-full xl:w-[401px] shrink-0 text-center xl:text-left">
              <p class="text-[16px] sm:text-[18px] leading-normal text-white/90">
                Not another generic AI assistant, but a domain-specific AI agent  trained to think like a senior data analyst for your team.
              </p>
            </div>
          </div>

          <!-- Left Glow - Hide on mobile -->
          <div class="hidden sm:block absolute left-[-29px] top-1/2 -translate-y-1/2 w-[58px] h-[58px]">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full blur-[40px] scale-[3]"></div>
          </div>

          <!-- Right Glows - Hide on mobile -->
          <div class="hidden sm:block absolute right-[-29px] top-1/2 -translate-y-1/2 w-[58px] h-[58px]">
            <div class="absolute inset-0 bg-gradient-to-l from-cyan-400/30 to-transparent rounded-full blur-[40px] scale-[3]"></div>
          </div>
          <div class="hidden sm:block absolute right-[-14.5px] top-1/2 -translate-y-1/2 w-[29px] h-[29px]">
            <div class="absolute inset-0 bg-gradient-to-l from-cyan-400/40 to-transparent rounded-full blur-[20px] scale-[2.5]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Sarah Section with Table -->
    <section class="py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <div class="flex flex-col xl:flex-row items-start xl:items-center justify-center gap-8 xl:gap-[72px]">
          <!-- Left: Sarah Profile Card -->
          <div class="w-full xl:w-[388px] relative flex flex-col items-center mx-auto xl:mx-0">
            <!-- Sarah Portrait - Full height with peeking effect -->
            <div class="relative w-full max-w-[420px] h-[350px] mb-[-72px] z-10">
              <img
                :src="aliceImage"
                alt="Alice - AI Data Analyst"
                class="w-full h-full object-contain object-bottom transition-opacity duration-1000 ease-out"
                :class="profileImageLoaded ? 'opacity-100' : 'opacity-0'"
              />
              <!-- Fade-out gradient at bottom -->
              <div class="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#090914] to-transparent pointer-events-none"></div>
            </div>

            <!-- Question Input with Glossy Card & Gradient Glow Border -->
            <div class="relative w-full max-w-[356px] mb-6 z-20">
              <!-- Gradient Glow Effect (outer) -->
              <div class="absolute -inset-[2px] bg-gradient-to-r from-[#659ef9]/50 to-[#fa48be]/50 rounded-full blur-[12px]"></div>

              <!-- Gradient Border Container -->
              <div class="relative rounded-full p-[1.5px] bg-gradient-to-r from-[#659ef9] to-[#fa48be]">
                <!-- Main Input Card with Dark Background -->
                <div class="relative backdrop-blur-[8px] bg-[rgba(29,25,31,0.8)] rounded-full px-4 py-3 flex items-center justify-between">
                  <p class="text-[16px] text-white leading-6">Which channels are profitable?</p>
                  <button class="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-[#1d191f]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Question Suggestions -->
            <div class="space-y-4 w-full max-w-[356px]">
              <p class="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                What is our projected cash runway if we cut marketing spend by 20% and hire two more engineers?
              </p>
              <p class="text-[14px] text-gray-400 dark:text-gray-500 leading-relaxed">
                Where did my budget vs. actuals variance come from for Q3, and what caused the biggest change?
              </p>
            </div>
          </div>

          <!-- Right: Data Table Container -->
          <div class="w-full xl:w-[625px] flex flex-col gap-3">
            <!-- Scrollable Table -->
            <div class="backdrop-blur-[25px] bg-white/20 dark:bg-[rgba(75,65,82,0.2)] rounded-[16px] p-3 sm:p-5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-x-auto">
              <!-- Table Header -->
              <div class="flex gap-10 px-4 py-4 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase min-w-[560px]">
                <div class="w-[140px] shrink-0">Marketing channel</div>
                <div class="w-[60px] shrink-0">CAC</div>
                <div class="w-[60px] shrink-0">LTV</div>
                <div class="w-[60px] shrink-0">LTV/CAC</div>
                <div class="w-[60px] shrink-0">Action</div>
              </div>

              <!-- Table Rows -->
              <div
                v-for="row in tableData"
                :key="row.channel"
                class="flex gap-10 px-4 py-4 border-t border-gray-200 dark:border-white/10 min-w-[560px]"
              >
                <div class="w-[140px] shrink-0 font-semibold text-[14px]" :class="row.color === 'error' ? 'text-[#ef4444]' : 'text-gray-900 dark:text-white'">
                  {{ row.channel }}
                </div>
                <div class="w-[60px] shrink-0 text-[14px] text-gray-600 dark:text-white/70">{{ row.cac }}</div>
                <div class="w-[60px] shrink-0 text-[14px] text-gray-600 dark:text-white/70">{{ row.ltv }}</div>
                <div
                  class="w-[60px] shrink-0 text-[14px] font-semibold"
                  :class="{
                    'text-[#059669]': row.color === 'success',
                    'text-[#2563eb]': row.color === 'info',
                    'text-[#ea580c]': row.color === 'warning',
                    'text-[#e11d48]': row.color === 'error'
                  }"
                >
                  {{ row.ratio }}
                </div>
                <div class="shrink-0">
                  <span
                    class="px-2 py-1 rounded-full text-[14px] font-medium inline-block"
                    :class="{
                      'bg-[#059669]/20 text-[#34d399]': row.color === 'success',
                      'bg-[#2563eb]/20 text-[#60a5fa]': row.color === 'info',
                      'bg-[#ea580c]/20 text-[#fb923c]': row.color === 'warning',
                      'bg-[#e11d48]/20 text-[#fb7185]': row.color === 'error'
                    }"
                  >
                    {{ row.action }}
                  </span>
                </div>
              </div>

              <!-- Average Row -->
              <div class="flex gap-10 px-4 py-4 text-[14px] text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 min-w-[560px]">
                <div class="w-[140px] shrink-0 font-semibold">Avg (Last 30 Days)</div>
                <div class="w-[60px] shrink-0">$144</div>
                <div class="w-[60px] shrink-0">$370</div>
                <div class="w-[60px] shrink-0 font-semibold">2.57x</div>
                <div class="w-[60px] shrink-0"></div>
              </div>
            </div>

            <!-- Key Insight - Outside scroll container -->
            <div class="backdrop-blur-[25px] bg-gradient-to-r from-[rgba(101,158,249,0.15)] to-[rgba(250,72,190,0.15)] rounded-[16px] p-4">
              <p class="text-[14px] text-gray-700 dark:text-gray-300">
                <span class="font-semibold text-gray-900 dark:text-white">Key Insight:</span>
                <span class="font-bold"> </span>
                TikTok is driving high volume but is unprofitable (LTV/CAC ratio of 0.45x) and should be reviewed.
                <span class="font-semibold text-[#d687fd]">Review</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[104px]">
        <div class="text-left mb-8 sm:mb-12 xl:mb-16">
          <h2 class="text-[28px] sm:text-[36px] xl:text-[40px] font-semibold leading-[1.35] text-gray-900 dark:text-white mb-4">
            Everything Your Analyst Team Needs.
          </h2>
          <p class="text-[16px] sm:text-[18px] text-gray-600 dark:text-white/70 max-w-2xl">
            Sarah's entire job is to handle the time-consuming tasks that slow your team down, allowing them to focus on high-level strategy.
          </p>
        </div>

        <div ref="featuresRef" class="grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="group relative transition-all duration-700 ease-out"
            :class="featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Purple Glow (appears on hover) - Hide on mobile -->
            <div class="hidden sm:block absolute left-[-14.5px] top-1/2 -translate-y-1/2 w-[29px] h-[29px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute inset-0 bg-purple-500/30 rounded-full blur-[40px] scale-[3]"></div>
            </div>
            <div class="hidden sm:block absolute left-[-7.25px] top-1/2 -translate-y-1/2 w-[14.5px] h-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute inset-0 bg-purple-500/40 rounded-full blur-[20px] scale-[2.5]"></div>
            </div>

            <!-- Feature Card -->
            <div class="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 xl:p-8 rounded-[16px] border border-transparent group-hover:backdrop-blur-[25px] group-hover:bg-white/80 group-hover:dark:bg-white/5 group-hover:border-gray-200/50 group-hover:dark:border-white/10 transition-all duration-300 pointer-events-auto">
              <!-- Icon -->
              <div class="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-[18px] backdrop-blur-[25px] bg-[rgba(75,65,82,0.2)] border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <img :src="`/images/icons/${feature.icon}`" :alt="feature.title" class="w-8 h-8 sm:w-9 sm:h-9 brightness-0 dark:brightness-100 invert dark:invert-0" />
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-[20px] sm:text-[22px] xl:text-[24px] font-semibold leading-7 sm:leading-8 mb-2 text-gray-900 dark:text-white transition-all duration-300">
                  {{ feature.title }}
                </h3>
                <p class="text-[14px] sm:text-[16px] text-gray-600 dark:text-gray-300 leading-normal">
                  {{ feature.description }}
                </p>
              </div>

              <!-- Number -->
              <span class="text-[16px] sm:text-[18px] text-gray-400 dark:text-gray-500 tracking-[-0.18px] self-end sm:self-auto">
                0<span class="text-gray-500 dark:text-gray-400 transition-colors duration-300">{{ index + 1 }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Machines Section -->
    <VirtualMachinesSection />

    <!-- Agent Chat Section -->
    <AgentChatSection />

    <!-- Metrics Section -->
    <section class="py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914]">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8">
        <!-- Metrics Grid -->
        <div
          ref="metricsRef"
          class="grid grid-cols-2 xl:flex xl:flex-row items-center justify-center gap-6 sm:gap-8 xl:gap-10 mb-12 sm:mb-16"
        >
          <div
            v-for="(metric, index) in metrics"
            :key="metric.value"
            class="flex flex-col items-center gap-2 sm:gap-4 xl:w-[240px] text-center transition-all duration-700 ease-out"
            :class="metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <p class="text-[32px] sm:text-[40px] xl:text-[48px] font-semibold leading-none text-[#1d191f] dark:text-white tracking-[-0.02em]">
              {{ metric.value }}
            </p>
            <p class="text-[16px] sm:text-[18px] xl:text-[20px] leading-[1.1] text-[#4b4152] dark:text-gray-400 tracking-[-0.01em]">
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
                  Ready to Hire Alice as Your Data Analyst?
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
