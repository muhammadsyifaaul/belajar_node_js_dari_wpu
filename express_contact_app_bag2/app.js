const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const { loadContact,findContact,addContact,cekDuplikat } = require('./utils/contacts')
const {body, validationResult,check} = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')


const port = 3000

// konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
  cookie: {maxAge: 6000},
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
app.use(flash)

app.set('view engine','ejs');

app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


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
  const contacts = loadContact()
  res.render('contact',
    {
      layout: 'layouts/main-layout',
      title:'halaman contact',
      contacts,
      msg: req.flash(msg)
    }
  )
})

// halaman form tambah contac
app.get('/contact/add',(req,res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layout',
    title:'Form tambah data contact'
  })
})

// proses data contact
app.post('/contact',[
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value)
    if(duplikat) {
      throw new Error('nama contact sudah terdaftar')
    }
    return true
  }),
  check('email','email tidak valid').isEmail(),
  check('noHP','no hp tidak valid').isMobilePhone('id-ID')
],(req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    // return res.status(400).json({errors: errors.array()})
    res.render('add-contact', {
      title: 'Form tambah data contact',
      layout:'layouts/main-layout',
      errors: errors.array()
    })
  } else {
    // kirimkan flash massage
    req.flash('msg','data contact berhasil ditambahkan')
    addContact(req.body)
  res.redirect('/contact') 
  }
  
})

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('detail',
    {
      layout: 'layouts/main-layout',
      title:'detail contact',
      contact
    }
  )
})




app.use((req,res) => { 
  res.status(404)
  res.send('<h1>404</h1>')
})
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}]`)
})