<template>
  <div>
    <p class="my-2 px-2 text-2xl text-gray-700">這裡是最外層 app.vue</p>
    <div>
      <NuxtLayout>
        <p class="px-12 py-6 text-xl text-rose-500">
          被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot 插槽中
        </p>
      </NuxtLayout>
    </div>
  </div>
</template>
