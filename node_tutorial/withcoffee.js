const http = require('http')
const express = require('express')
const { coffeeCategory} = require('./coffeeCategory')
const {coffeelist} = require('./coffeelist')
const {coffeedetail} =require('./coffeedetail')
const { json } = require('express')
const {coffeeinfo} = require('./coffeelist')
const {updatePost} = require('./coffeelist')
const {deletePost} = require('./coffeelist')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' })
})
app.get('/products/categories', coffeeCategory); 
app.get('/products', coffeelist );
app.get('/products/2', coffeedetail);
app.post('/products', coffeeinfo);
app.put('/products', updatePost);
app.delete('/products', deletePost);

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})
