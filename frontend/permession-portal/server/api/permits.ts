export default defineEventHandler(async (event) => {
  const method = event.node.req.method
  const url = 'http://localhost:3001/permit'

  // GET → جلب كل الطلبات
  if (method === 'GET') {
    return await $fetch(url)
  }

  // POST → تقديم طلب جديد
  if (method === 'POST') {
    const body = await readBody(event)
    return await $fetch(url, {
      method: 'POST',
      body,
    })
  }

  // أي حاجة تانية → 405 Method Not Allowed
  setResponseStatus(event, 405)
  return { error: 'Method Not Allowed' }
})