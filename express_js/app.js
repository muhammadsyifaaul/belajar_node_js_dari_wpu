// const http = require('http');
// const fs = require('fs')

// // membuat server bisa seperi ini disimpan dalam variabel
// // const server = http.reateServer((req,res) => {

// // })

// //server.listen(3000,()=>{ // param pertama port(opsional, jika dikosongkan akan default port 3000)
//     // param kedua adalah hostname(opsional,jika kosong akan otomatis menga,mbil localhost)
//     // param ketiga(opsional) adalah listeninglistener/callback,biasanya ditulis pesan yg ditampilkan di konsol saat server berjalan /
//     // atau bisa juga diisi eror
//   //  console.log('Server running on http://localhost:3000');
// //})
// const renderHTML = (path,res) => {
//   fs.readFile(path,(err,data)=>{
//     if(err) {
//       res.writeHead(404);
//       res.write('Error, file not found')
//     }else {
//       res.write(data)
//     }
//     res.end()
//   })
// }

// // atau bisa  langsung
//  http.createServer((req,res) => {
  
//   res.writeHead(200,{
//     'Content-Type':'text/html'
//   })
//   const url = req.url
//   //if(url === '/about') {
//     // fs.readFile('./about.html',(err,data)=>{
//     //   if(err) {
//     //     res.writeHead(404);
//     //     res.write('Error, file not found')
//     //   }else {
//     //     res.write(data)
//     //   }
//     //   res.end()
//     // })
//     //renderHTML('./about.html',res)
//   //}else if(url ==='/contact'){
//     // res.write('<h1>Ini adalah halaman contact</h1>')
//     // res.end()
//    // renderHTML('./contact.html',res)
//   //}else {
//     // res.write('Hello Dunia')
//     // fs.readFile('./index.html',(err,data)=>{
//     //   if(err) {
//     //     res.writeHead(404);
//     //     res.write('Error, file not found')
//     //   }else {
//     //     res.write(data)
//     //   }
//     //   res.end()
//     // })
//     // res.end()
//     //renderHTML('./index.html',res)
//  // }
    
//   switch(url) {
//     case '/about':
//       renderHTML('./about.html',res)
//       break
//     case '/contact':
//       renderHTML('./contact.html',res)
//       break
//     default:
//       renderHTML('./index.html',res)
//       break
//   }
// })
// .listen(3000,()=>{
//     console.log('Server running on http://localhost:3000');
// })



const express = require('express')
const app = express()

const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  // res.send('hello world')
  // res.json({
  //   nama: 'samsul',
  //   email: 'samsul@hmail.com',
  //   noHP: "0987378293"
  // })
  res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res) => {
  // res.send('ini adalah about')
  res.sendFile('./about.html', {root: __dirname})
})
app.get('/contact', (req, res) => {
  // res.send('ini adalah contact')
  res.sendFile('./contact.html', {root: __dirname})
})

// app.get('/product/:id/category/:idCat', (req,res) => {
//   res.send(
//     `Product id : ${req.params.id} <br> Category : ${req.params.idCat}`
//   )
// })
app.get('/product/:id/', (req,res) => {
  res.send(
    `Product id : ${req.params.id} <br> Category : ${req.query.category}`
  )
})

app.use('/',(req,res) => { // middleware,akan jalan untuk request apapun,bahkan yg tidak ada
  res.status(404)
  res.send('<h1>404</h1>')
})
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}]`)
})