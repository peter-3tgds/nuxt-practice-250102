<template>
  <div class="container">
    <div class="space-y-4">
      <ClientOnly>
        <p class="border border-black text-4xl font-bold text-green-500">客戶端渲染</p>
        <template #fallback>
          <p class="border border-black text-4xl font-bold text-red-500">伺服器端渲染，載入中...</p>
        </template>
      </ClientOnly>
      <div class="flex">
        <input id="show" v-model="show" type="checkbox" name="show" />
        <label for="show" class="ml-2 text-2xl">延遲載入元件</label>
      </div>
      <div>
        <LazyBaseButton v-if="show" />
      </div>
    </div>
  </div>
</template>

<script setup>
const show = ref(false)
</script>
