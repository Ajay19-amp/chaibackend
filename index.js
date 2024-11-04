require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('ajaykumar19uk@gmail.com')
})
app.get('/login',(req,res)=>{
    res.send('please login on twitter link')
})
app.get('/youtube',(rqe,res)=>{
    res.send('<h2> chai deploy</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})