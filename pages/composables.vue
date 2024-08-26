<template>
  <div class="container space-y-8">
    <h1>組合式函式 (Composables)</h1>
    <div class="flex flex-col items-start">
      <p class="text-bold text-3xl">{{ count }}</p>
      <p class="text-bold text-3xl">{{ doubleCount }}</p>
      <button type="button" class="btn btn-primary" @click="increment">增加</button>
    </div>
    <div class="flex flex-col items-start">
      <div class="flex space-x-2">
        <input v-model.number="num1" type="text" @keyup.enter="handleAdd" />
        <input v-model.number="num2" type="text" @keyup.enter="handleAdd" />
      </div>
      <p class="text-bold text-3xl">{{ sum }}</p>
      <button type="button" class="btn btn-primary" @click="handleAdd">加法</button>
    </div>
    <div class="flex flex-col items-start">
      <p class="text-bold text-3xl">{{ time }}</p>
      <button type="button" class="btn btn-primary" @click="handleTime">時間</button>
    </div>
  </div>
</template>

<script setup>
const { count, increment, doubleCount } = useCounter()
const { add } = useTools()

const sum = ref(0)
const num1 = ref(0)
const num2 = ref(0)
const handleAdd = () => {
  sum.value = add(num1.value, num2.value)
}

const time = ref('')
const handleTime = () => {
  time.value = getLocaleTime()
}
</script>
