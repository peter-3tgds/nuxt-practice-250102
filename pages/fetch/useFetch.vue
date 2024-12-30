<template>
  <div class="pb-80 pt-10">
    <div class="text-center">
      <h1 class="mb-20 text-6xl font-bold text-primary">useFetch</h1>
      <p class="my-2 text-2xl text-gray-600">回傳資料:</p>
      <div class="h-6">
        <p v-if="pending" class="text-3xl">Loading...</p>
      </div>
      <p v-if="error">{{ error.message }}</p>
      <p v-else-if="data" class="my-4 text-xl font-semibold text-blue-500">{{ data }}</p>
    </div>
    <div v-if="data" class="mb-20 flex justify-center">
      <ul>
        <li class="text-xl font-semibold text-blue-500">姓名: {{ data.name }}</li>
        <li class="text-xl font-semibold text-blue-500">性別: {{ data.gender }}</li>
        <li class="text-xl font-semibold text-blue-500">信箱: {{ data.email }}</li>
        <li class="text-xl font-semibold text-blue-500">時間: {{ data.time }}</li>
      </ul>
    </div>
    <div class="flex justify-center gap-2">
      <button type="button" class="btn btn-primary" @click="refresh">取得用戶資料</button>
    </div>
    <ul v-if="posts">
      <li v-for="item in posts.data" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data, pending, refresh, error } = useFetch('/api/user')
// const { data: posts } = useFetch('/api/posts')
</script>
