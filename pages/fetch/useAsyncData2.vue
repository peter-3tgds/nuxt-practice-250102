<template>
  <div>
    <p>status: {{ status }}</p>
    <!-- <p>error: {{ error }}</p> -->
    <!-- <p>data: {{ data }}</p> -->
    <p v-if="data && data[0]?.status === 'fulfilled'">user1: {{ data[0].value.results[0].name }}</p>
    <p v-if="data && data[1]?.status === 'fulfilled'">user2: {{ data[1].value.results[0].name }}</p>
    <button type="button" class="btn btn-primary" @click="refresh">讀取</button>
  </div>
</template>

<script setup>
const { data, error, status, refresh } = await useAsyncData('index', async () => {
  // const apis = [$fetch('https://randomuser.me/api/'), $fetch('https://randomuser.me/api/')] // 2正確 API
  const apis = [$fetch('https://randomuser.me/api/'), $fetch('https://randomuser123.me/api/')] // 1正確 1錯誤 API
  const res = await Promise.allSettled(apis)
  return res
})
</script>
