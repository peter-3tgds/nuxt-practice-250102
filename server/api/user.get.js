export default defineEventHandler(async () => {
  console.log(`api request GET method: /api/user`)

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        name: 'Peter',
        gender: 'male',
        email: 'peter.chen@ccc.com',
        time: new Date().toLocaleTimeString()
      }
      resolve(res)
      reject(new Error('test:Server API error'))
    }, 500)
  })

  try {
    const res = await promise
    return res
  } catch (error) {
    throw createError({
      message: '取得用戶資料失敗',
      statusCode: 400,
      statusMessage: error.message
    })
  }
})
