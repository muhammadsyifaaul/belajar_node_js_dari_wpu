// core module
// file system
const fs = require('node:fs');


// menuliskan string ke file secara sync
// fs.writeFileSync('test.txt', 'Hello World secara sync');
// try {

//     fs.writeFileSync('data/test.txt', 'Hello World secara sync');
// } catch (e) {
//     console.log(e)
// }

// menuliskan string ke file secara async

// fs.writeFile('data/test.txt', 'hello world secara async', (err) => {
//     console.log(err)
// })


// membaca isi file secara sync

// const data =fs.readFileSync('data/test.txt', 'utf-8') // opsi / parameter ketiga adalah encoding, disitu utf-8 mengubah yg tadinya buffer langsung menjadi string
// console.log(data.toString()) // mengubah buffere menjadi string,jika tanpa parameter encoding
// console.log(data)

// secara async
// fs.readFile('data/test.txt','utf-8', (err,data) => {
//     if(err) {
//         throw err
//     } else {
//         console.log(data)
//     }
// })


// readkine

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Masukkan nama anda :', (nama) => {
    // console.log(`Halo ${nama} sekarang anda berada di node js`)
    rl.question('Masukkan no hp anda :' , (noHP) => {
        // console.log(`Halo ${nama} dengan no hp ${noHP} sekarang anda berada di node js`)
        const contact = {
            // nama : nama,
            // noHP : noHP
            nama,
            noHP
        }
        const file = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts = JSON.parse(file);
        contacts.push(contact)
        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
        console.log('terima kasih telah menginputkan data')
        rl.close()
    })
})