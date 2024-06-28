<template>
  <div>
    <h1 class="title">Hello Nuxt!!</h1>
    <p>{{ count }}</p>
    <button type="button" @click="() => count += 1">增加</button>
  </div>
</template>

<script setup>

const count = ref(10)
</script>

<style lang="scss" scoped>
.title {
  font-size: 100px;
  color: blue;
  line-height: 1.5;
}
</style>