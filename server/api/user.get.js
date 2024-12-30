export default defineEventHandler(async () => {
  console.log(`api request GET method: /api/user`)

  // return {
  //   name: 'Peter',
  //   gender: 'male',
  //   email: 'peter.chen@3tgds.com'
  // }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        name: 'Peter',
        gender: 'male',
        email: 'peter.chen@3tgds.com',
        time: new Date().toLocaleTimeString()
      }
      resolve(res)
    }, 1000)
  })

  try {
    const res = await promise
    return res
  } catch (error) {}
})
