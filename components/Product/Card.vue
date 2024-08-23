<template>
  <div class="max-w-[600px] rounded border-2 border-black p-4">
    <h2 class="text-2xl font-bold">{{ props.product.name }}</h2>
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
