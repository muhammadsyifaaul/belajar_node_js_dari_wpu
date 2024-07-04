const fs = require('node:fs')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// membuat folder data
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}

// membuat file contacts.json jika blm ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8') // param(direktori,isi default filenya apa, encoding)
}

const  tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
      rl.question(pertanyaan, nama => {
          resolve(nama)
      })
    })
  }

const simpanContact = (nama,email) => {
    const contact = {
        nama,
        email
    }
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(file);
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
    console.log('terima kasih telah menginputkan data')
    rl.close()
}

module.exports = {
    tulisPertanyaan,
    simpanContact
}