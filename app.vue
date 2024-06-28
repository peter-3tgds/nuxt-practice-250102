<template>
  <div class="container">
    <h1 class="text-3xl font-bold text-primary">Hello Nuxt!!</h1>
    <p class="text-2xl text-secondary">{{ name }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, magni?</p>
    <div class="flex space-x-1">
      <button type="button" class="btn btn-primary">按鈕</button>
      <button type="button" class="btn btn-secondary">按鈕</button>
    </div>
  </div>
</template>

<script setup>
const name = ref('peter')
</script>

<style lang="scss" scoped>
.title {
  font-size: 100px;
  color: blue;
  line-height: 1.5;
}
</style>
