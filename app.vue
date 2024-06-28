<template>
  <div>
    <h1 class="title">Hello Nuxt!!</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
const name = 'peter'
</script>

<style lang="scss" scoped>
.title {
  font-size: 100px;
  color: blue;
  line-height: 1.5;
}
</style>
