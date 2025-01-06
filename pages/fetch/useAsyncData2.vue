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
import { FetchError } from 'ofetch'

// 定義轉換函數
function transformPromiseResults(results) {
  return results.map((response) => {
    // 錯誤的 ajax, 轉換回傳格式
    if (response.status === 'rejected' && response.reason instanceof FetchError) {
      // 將 FetchError 物件轉為字串，避免序列化問題
      return {
        ...response,
        reason: response.reason.toString()
      }
    }

    // 正確的 ajax 不用轉換
    return response
  })
}

// 使用 useAsyncData 搭配 Promise.allSettled
const { data, error, status, refresh } = await useAsyncData(
  'index',
  async () => {
    // 模擬一個成功、一個失敗的 API 請求
    const apis = [$fetch('https://randomuser.me/api/'), $fetch('https://randomuser123.me/api/')]
    const res = await Promise.allSettled(apis)
    return res
  },
  {
    transform: transformPromiseResults // 使用轉換函數處理結果
  }
)

// 解法一：
// 原本 return res
// 改成 return JSON.parse(JSON.stringify(res));

// 解法二：
// transform: transformPromiseResults // 使用轉換函數處理結果
</script>
