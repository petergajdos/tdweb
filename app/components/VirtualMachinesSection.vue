<script setup lang="ts">
// Premium features list
const premiumFeatures = [
  'Dedicated CPU and memory',
  'Isolated file system and storage',
  'Configurable regions and resources',
  'Priority support and SLA'
]

// Asset URLs from Figma
const serverImage = 'https://www.figma.com/api/mcp/asset/24e4e460-cb31-45e1-a0d4-7e23c0e928a0'
const checkIcon = 'https://www.figma.com/api/mcp/asset/74bf061e-ca9e-4842-a8bc-54942f2bc5c5'
const ellipseGlow = 'https://www.figma.com/api/mcp/asset/469cbc4e-a4fc-41f6-93f3-56fc59ac8f2d'
</script>

<style scoped>
@keyframes float-subtle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-radial {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    transform: translate(var(--end-x), var(--end-y)) scale(1);
    opacity: 0;
  }
}

.animate-float-subtle {
  animation: float-subtle 6s ease-in-out infinite;
}

.particle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, rgba(147, 197, 253, 0.9) 0%, rgba(99, 102, 241, 0.6) 50%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: float-radial ease-out infinite;
  filter: blur(0.5px);
}
</style>

<template>
  <section class="relative py-12 sm:py-16 xl:py-24 bg-white dark:bg-[#090914] overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-4">
      <div class="relative py-8 sm:py-12 xl:py-[71px] px-0 xl:px-[36px]">
        <div class="relative flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-0">
          <!-- Left Content -->
          <div class="flex flex-col gap-4 sm:gap-6 max-w-[540px] w-full order-2 xl:order-1 text-center xl:text-left">
            <h2 class="text-[36px] sm:text-[44px] xl:text-[52px] font-semibold leading-[1.15] tracking-[-0.02em] capitalize text-white">
              24/7 Operation With Virtual Machines
            </h2>
            <p class="text-[16px] sm:text-[18px] leading-normal text-white/70">
              Your agents don't sleep. They work in isolated virtual environments, executing tasks around the clock.
            </p>
            <div class="inline-flex items-center gap-2 self-center xl:self-start mt-2">
              <span class="text-[14px] font-semibold leading-7 text-white uppercase tracking-normal">
                ✨ PREMIUM FEATURES
              </span>
            </div>
            <div class="flex flex-col gap-3">
              <div v-for="feature in premiumFeatures" :key="feature" class="flex items-center gap-3 h-[40px] px-1.5">
                <div class="w-5 h-5 shrink-0 flex items-center justify-center">
                  <img :src="checkIcon" alt="" class="w-full h-full object-contain" loading="lazy" />
                </div>
                <span class="text-[16px] leading-6 text-white/70">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
          <!-- Right - Server Image -->
          <div class="relative w-full max-w-[400px] sm:max-w-[450px] xl:max-w-[512px] h-[400px] sm:h-[450px] xl:h-[512px] order-1 xl:order-2 flex items-center justify-center shrink-0 xl:-ml-12">
            <!-- Subtle static glow -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] xl:w-[846px] h-[600px] sm:h-[700px] xl:h-[846px] pointer-events-none opacity-60">
              <img :src="ellipseGlow" alt="" class="block w-full h-full object-contain" loading="lazy" />
            </div>

            <!-- Floating particles radiating from center -->
            <div class="absolute inset-0 overflow-visible pointer-events-none">
              <!-- Top particles -->
              <div class="particle" style="animation-duration: 4s; animation-delay: 0s; --end-x: 0px; --end-y: -250px;"></div>
              <div class="particle" style="animation-duration: 5s; animation-delay: 1s; --end-x: 0px; --end-y: -280px;"></div>
              <div class="particle" style="animation-duration: 4.6s; animation-delay: 2.3s; --end-x: 20px; --end-y: -265px;"></div>
              <!-- Top-right particles -->
              <div class="particle" style="animation-duration: 4.5s; animation-delay: 0.5s; --end-x: 180px; --end-y: -200px;"></div>
              <div class="particle" style="animation-duration: 5.5s; animation-delay: 1.5s; --end-x: 220px; --end-y: -180px;"></div>
              <!-- Right particles -->
              <div class="particle" style="animation-duration: 4.2s; animation-delay: 0.8s; --end-x: 260px; --end-y: -50px;"></div>
              <div class="particle" style="animation-duration: 5.2s; animation-delay: 2s; --end-x: 280px; --end-y: 0px;"></div>
              <div class="particle" style="animation-duration: 4.8s; animation-delay: 3s; --end-x: 270px; --end-y: -25px;"></div>
              <!-- Bottom-right particles -->
              <div class="particle" style="animation-duration: 4.8s; animation-delay: 1.2s; --end-x: 200px; --end-y: 150px;"></div>
              <div class="particle" style="animation-duration: 5.8s; animation-delay: 2.5s; --end-x: 180px; --end-y: 180px;"></div>
              <!-- Bottom particles -->
              <div class="particle" style="animation-duration: 4.3s; animation-delay: 0.3s; --end-x: 50px; --end-y: 220px;"></div>
              <div class="particle" style="animation-duration: 5.3s; animation-delay: 1.8s; --end-x: -30px; --end-y: 240px;"></div>
              <div class="particle" style="animation-duration: 4.7s; animation-delay: 2.7s; --end-x: 10px; --end-y: 230px;"></div>
              <!-- Bottom-left particles -->
              <div class="particle" style="animation-duration: 4.7s; animation-delay: 1s; --end-x: -180px; --end-y: 160px;"></div>
              <div class="particle" style="animation-duration: 5.7s; animation-delay: 2.2s; --end-x: -200px; --end-y: 140px;"></div>
              <div class="particle" style="animation-duration: 5.1s; animation-delay: 3.2s; --end-x: -190px; --end-y: 150px;"></div>
              <!-- Left particles -->
              <div class="particle" style="animation-duration: 4.4s; animation-delay: 0.6s; --end-x: -260px; --end-y: 0px;"></div>
              <div class="particle" style="animation-duration: 5.4s; animation-delay: 1.3s; --end-x: -280px; --end-y: -40px;"></div>
              <!-- Top-left particles -->
              <div class="particle" style="animation-duration: 4.9s; animation-delay: 1.6s; --end-x: -200px; --end-y: -180px;"></div>
              <div class="particle" style="animation-duration: 5.9s; animation-delay: 2.8s; --end-x: -180px; --end-y: -200px;"></div>
            </div>

            <!-- Server cube with subtle float -->
            <div class="relative w-[500px] sm:w-[600px] xl:w-[740px] h-[500px] sm:h-[600px] xl:h-[740px] flex items-center justify-center animate-float-subtle z-10">
              <img :src="serverImage" alt="Virtual Machine Server" class="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
