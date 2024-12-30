export default defineEventHandler(async () => {
  console.log(`api request GET method: /api/posts`)

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        success: true,
        data: [
          {
            id: 1,
            title: 'Post 1',
            content: 'Content 1'
          },
          {
            id: 2,
            title: 'Post 2',
            content: 'Content 2'
          }
        ],
        time: new Date().toLocaleTimeString()
      }
      resolve(res)
    }, 1000)
  })

  try {
    const res = await promise
    return res
  } catch (error) {
    throw createError({
      message: '取得貼文列表失敗',
      statusCode: 400,
      statusMessage: error.message
    })
  }
})
