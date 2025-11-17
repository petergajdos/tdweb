<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

// Set dark mode on mount
onMounted(() => {
  colorMode.preference = 'dark'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
