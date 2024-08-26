export const useTools = () => {
  const add = (a, b) => {
    return a + b
  }

  return {
    add
  }
}

export const getLocaleTime = () => {
  return new Date().toLocaleString()
}
