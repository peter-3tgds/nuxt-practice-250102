<template>
  <div>
    <p>status: {{ status }}</p>
    <p>data: {{ data }}</p>
  </div>
</template>

<script setup>
const { data, status } = await useAsyncData('index', async () => {
  const apis = [$fetch('/api/user'), $fetch('/api/posts')]
  const res = await Promise.allSettled(apis)
  return res
})
</script>
