// const nama = 'samsul'
// const cetakNama = (nama) => `hi, nama saya ${nama}`
// console.log(cetakNama(nama))
//console.log(window) // window tidak terdefinisi karena node sudah keluar dari browser
//console.log(global) // global terdefinisi karena node sudah keluar dari browser
// require('./coba')
// console.log('halo maman')


const cetakNama = require('./coba') // mengimport local module/ module yang dibuat sendiri


console.log(cetakNama('ujang'))