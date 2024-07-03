// const nama = 'samsul'
// const cetakNama = (nama) => `hi, nama saya ${nama}`
// console.log(cetakNama(nama))
//console.log(window) // window tidak terdefinisi karena node sudah keluar dari browser
//console.log(global) // global terdefinisi karena node sudah keluar dari browser
// require('./coba')
// console.log('halo maman')
//const fs = require('fs') // import core module
// const cetakNama = require('./coba')  // mengimport local module/ module yang dibuat sendiri
//const moment = require('moment') // third party module / npm module / node+modules

// const cetakNama = require('./coba')
// const PI = require('./coba');
const coba = require('./coba')

console.log(
    coba.cetakNama('ujang'),
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);