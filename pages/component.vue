<template>
  <div class="container">
    <div class="space-y-4">
      <BannerCard />
      <ProductCard :product="product" />
      <PermissionAccountList />
      <PermissionAccountMenu />
    </div>
  </div>
</template>

<script setup>
const product = ref({
  id: 1,
  name: '我是商品卡片'
})
</script>
