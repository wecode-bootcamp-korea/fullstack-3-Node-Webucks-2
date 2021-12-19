const http = require('http')
const { sendPosts } = require('./sendPosts')

const server = http.createServer((req, res) => {
  console.log
  const { url, method } = req
  res.setHeader('Content-Type', 'application/json')

  if (url === '/') return res.end(JSON.stringify({ message: '/ endpoint' }))
  if (url === '/signup' && method === 'POST') return res.end(JSON.stringify({ message: '회원가입 완료!' }))
  if (url === '/login'  && method === 'POST') return res.end(JSON.stringify({ message: '로그인 완료!' }))
  if (url === '/products' && method === 'GET') return sendPosts(res)

  res.end(JSON.stringify({ message: 'this response answers to every request' }))
})

server.listen(8000, () => { console.log('server is listening on PORT 8000')})