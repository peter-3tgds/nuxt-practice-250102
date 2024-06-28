<template>
  <div class="rounded border p-4">
    <h2>{{ props.product.name }}</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, vero.</p>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default() {
      return {
        id: '',
        name: ''
      }
    }
  }
})
</script>
