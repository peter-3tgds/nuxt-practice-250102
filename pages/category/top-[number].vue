<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">熱門類別</h1>
    <p class="text-center text-5xl text-secondary">number: {{ number }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { number } = route.params
</script>
