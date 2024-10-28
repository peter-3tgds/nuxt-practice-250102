<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <p class="mt-4 text-slate-500">這裡顯示的是 counterStore 的 doubleCount</p>
      <ClientOnly>
        <span class="text-9xl font-semibold text-emerald-600">
          {{ `count: ${counterStore.count}` }}
        </span>
        <span class="text-9xl font-semibold text-emerald-600">
          {{ `doubleCount: ${counterStore.doubleCount}` }}
        </span>
      </ClientOnly>
      <div class="mt-8 flex gap-2">
        <NuxtLink to="/">回首頁</NuxtLink>
        <NuxtLink to="/store/counter">/store/counter</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const counterStore = useCounterStore()
</script>
