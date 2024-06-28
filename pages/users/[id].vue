<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">個人頁</h1>
    <p class="text-center text-5xl text-secondary">{{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>
