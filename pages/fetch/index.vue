<template>
  <div class="pb-80 pt-10">
    <div class="text-center">
      <h1 class="mb-20 text-6xl font-bold text-primary">$fetch</h1>
      <p class="my-2 text-2xl text-gray-600">回傳資料:</p>
      <div class="h-6">
        <p v-if="isLoading" class="text-3xl">Loading...</p>
      </div>
      <p class="my-4 text-xl font-semibold text-blue-500">{{ user }}</p>
    </div>
    <div class="flex justify-center">
      <ul class="mb-20">
        <li class="text-xl font-semibold text-blue-500">{{ `姓名: ${user.name}` }}</li>
        <li class="text-xl font-semibold text-blue-500">{{ `性別: ${user.gender}` }}</li>
        <li class="text-xl font-semibold text-blue-500">{{ `信箱: ${user.email}` }}</li>
        <li class="text-xl font-semibold text-blue-500">{{ `時間: ${user.time}` }}</li>
      </ul>
    </div>
    <div class="flex justify-center gap-2">
      <button type="button" class="btn btn-primary" @click="getUser">取得用戶資料</button>
      <button type="button" class="btn btn-primary" @click="doSomething">Vue互動</button>
    </div>
  </div>
</template>

<script setup>
// 錯誤: 1
// const user = await $fetch('/api/user')

const isLoading = ref(false)
const user = ref({
  name: '',
  gender: '',
  email: '',
  time: ''
})

const getUser = async () => {
  isLoading.value = true
  const res = await $fetch('/api/user')
  user.value = res
  isLoading.value = false
}

// 錯誤: 2
// getUser()

const doSomething = () => {
  console.log('do something')
}
</script>
