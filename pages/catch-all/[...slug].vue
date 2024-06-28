<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">多個網址參數</h1>
    <p class="text-center text-5xl text-secondary">{{ slug }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { slug } = route.params
</script>
