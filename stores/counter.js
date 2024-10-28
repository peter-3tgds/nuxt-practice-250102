import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const count2 = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
      count2.value++
    }

    function decrement() {
      if (count.value > 0) {
        count.value--
      }
    }

    function reset() {
      count.value = 0
      count2.value = 0
    }

    return { count, count2, doubleCount, increment, decrement, reset }
  },
  {
    persist: {
      key: 'counter',
      storage: persistedState.localStorage,
      pick: ['count']
    }
  }
)
