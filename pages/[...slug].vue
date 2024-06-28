<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">404 找不到網頁</h1>
    <p class="mb-3 text-center text-xl">未匹配道路由，集中處理</p>
    <nav>
      <ul class="flex items-center justify-center gap-x-3">
        <li><nuxt-link to="/" class="text-2xl text-secondary">回首頁</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
setResponseStatus(404) // http 狀態碼 404
</script>
