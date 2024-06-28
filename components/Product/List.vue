<template>
  <div>
    <ul class="space-y-2">
      <li v-for="item in products" :key="item.id">
        <ProductCard :product="item" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const products = ref([
  {
    id: 1,
    name: '商品A'
  },
  {
    id: 2,
    name: '商品B'
  },
  {
    id: 3,
    name: '商品C'
  }
])
</script>
