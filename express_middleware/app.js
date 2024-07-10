const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const port = 3000

// gunakan ejs
app.set('view engine','ejs');
// third party middlware
app.use(expressLayouts)
app.use(morgan('dev'))
// built in middleware
app.use(express.static('public'))
// application level middleware
app.use((req,res,next) => {
  console.log('Time:', Date.now())
  next()
})
app.use((req,res,next) => {
  console.log('ini middleware ke-2')
  next()
})

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'samsul',
      email: 'samasul@gmail'
    },
    {
      nama: 'jamal',
      email: 'jamall@gmail'
    },
    {
      nama: 'wisnu',
      email: 'wisnu@gmail'
    },
  ]

  res.render('index',{
    nama : 'ujang',
    title:'Halaman Home',
    // mahasiswa : mahasiswa
    mahasiswa,
    layout: 'layouts/main-layout'
  })
})
app.get('/about', (req, res) => {

  res.render('about',{
    layout: 'layouts/main-layout',
    title:'halaman about'
  })
})
app.get('/contact', (req, res) => {
  // res.send('ini adalah contact')
  res.render('contact',
    {
      layout: 'layouts/main-layout',
      title:'halaman contact'
    }
  )
})


app.get('/product/:id/', (req,res) => {
  res.send(
    `Product id : ${req.params.id} <br> Category : ${req.query.category}`
  )
})

app.use((req,res) => { // middleware,akan jalan untuk request apapun,bahkan yg tidak ada
  res.status(404)
  res.send('<h1>404</h1>')
})
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}]`)
})