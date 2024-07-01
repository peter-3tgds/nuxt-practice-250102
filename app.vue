<template>
  <div>
    <p class="my-2 px-2 text-2xl text-gray-700">這裡是最外層 app.vue</p>
    <NuxtLayout>
      <template #header>
        <p class="px-12 text-green-500">這段文字會顯示 header 插槽</p>
      </template>
      <template #default>
        <p class="px-12 py-6 text-xl text-rose-500">
          被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot 插槽中
        </p>
      </template>
      <template #footer>
        <p class="px-12 text-sky-500">這段文字會顯示 footer 插槽</p>
      </template>
    </NuxtLayout>
  </div>
</template>
