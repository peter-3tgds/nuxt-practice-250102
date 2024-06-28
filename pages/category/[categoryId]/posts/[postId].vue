<template>
  <div class="container">
    <h1 class="py-5 text-center text-5xl text-primary">類別詳細頁>指定文章</h1>
    <p class="text-center text-5xl text-secondary">categoryId: {{ categoryId }}</p>
    <p class="text-center text-5xl text-secondary">postId: {{ postId }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { categoryId, postId } = route.params
</script>
