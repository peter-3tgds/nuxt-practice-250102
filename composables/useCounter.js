export default function () {
  const count = ref(0)

  const increment = () => {
    count.value += 1
  }

  const doubleCount = computed(() => count.value * 2)

  return {
    count,
    increment,
    doubleCount
  }
}
