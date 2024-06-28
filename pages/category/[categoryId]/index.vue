<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">類別詳細頁</h1>
    <p class="text-center text-5xl text-secondary">categoryId: {{ categoryId }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { categoryId } = route.params
</script>
