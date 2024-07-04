
// rl.question('Masukkan nama anda :', (nama) => {
//     // console.log(`Halo ${nama} sekarang anda berada di node js`)
//     rl.question('Masukkan no hp anda :' , (noHP) => {
//         // console.log(`Halo ${nama} dengan no hp ${noHP} sekarang anda berada di node js`)
//         const contact = {
//             // nama : nama,
//             // noHP : noHP
//             nama,
//             noHP
//         }
//         const file = fs.readFileSync('data/contacts.json', 'utf8')
//         const contacts = JSON.parse(file);
//         contacts.push(contact)
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//         console.log('terima kasih telah menginputkan data')
//         rl.close()
//     })
// })

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Masukkan email anda :', email => {
//         resolve(email)
//     })
//   })
// }
const contacts = require('./contacts') // bisa ini
// const {tulisPertanyaan,simpanContact} = require('./contacts') bisa ini
const main = async() => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda :')
    const email =await  contacts.tulisPertanyaan('Masukkan email anda: ')
    contacts.simpanContact(nama,email)
}

main()