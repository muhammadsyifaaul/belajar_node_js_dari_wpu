const http = require('http');
const fs = require('fs')

// membuat server bisa seperi ini disimpan dalam variabel
// const server = http.reateServer((req,res) => {

// })

//server.listen(3000,()=>{ // param pertama port(opsional, jika dikosongkan akan default port 3000)
    // param kedua adalah hostname(opsional,jika kosong akan otomatis menga,mbil localhost)
    // param ketiga(opsional) adalah listeninglistener/callback,biasanya ditulis pesan yg ditampilkan di konsol saat server berjalan /
    // atau bisa juga diisi eror
  //  console.log('Server running on http://localhost:3000');
//})
const renderHTML = (path,res) => {
  fs.readFile(path,(err,data)=>{
    if(err) {
      res.writeHead(404);
      res.write('Error, file not found')
    }else {
      res.write(data)
    }
    res.end()
  })
}

// atau bisa  langsung
 http.createServer((req,res) => {
  
  res.writeHead(200,{
    'Content-Type':'text/html'
  })
  const url = req.url
  //if(url === '/about') {
    // fs.readFile('./about.html',(err,data)=>{
    //   if(err) {
    //     res.writeHead(404);
    //     res.write('Error, file not found')
    //   }else {
    //     res.write(data)
    //   }
    //   res.end()
    // })
    //renderHTML('./about.html',res)
  //}else if(url ==='/contact'){
    // res.write('<h1>Ini adalah halaman contact</h1>')
    // res.end()
   // renderHTML('./contact.html',res)
  //}else {
    // res.write('Hello Dunia')
    // fs.readFile('./index.html',(err,data)=>{
    //   if(err) {
    //     res.writeHead(404);
    //     res.write('Error, file not found')
    //   }else {
    //     res.write(data)
    //   }
    //   res.end()
    // })
    // res.end()
    //renderHTML('./index.html',res)
 // }
    
  switch(url) {
    case '/about':
      renderHTML('./about.html',res)
      break
    case '/contact':
      renderHTML('./contact.html',res)
      break
    default:
      renderHTML('./index.html',res)
      break
  }
})
.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
})