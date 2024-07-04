const fs = require('node:fs')

const chalk = require('chalk')
const validator = require('validator')

// membuat folder data
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}

// membuat file contacts.json jika blm ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8') 
}


const simpanContact = (nama,email,noHP) => {
    const contact = {
        nama,
        email,
        noHP
    }

    
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(file);
// cek apakah ada duplikat data
    const duplikat = contacts.find(contact => contact.nama === nama)
    if(duplikat) {
        console.log(chalk.red.inverse.bold('contact sudah terdaftar,gunakan nama lain'))
        return false;
    }

    // cek email
    if (email && !validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email tidak valid.'));
      return false;
    }

    // cek no hp
    if (!validator.isMobilePhone(noHP)) {
      console.log(chalk.red.inverse.bold('Nomor HP tidak valid.'));
      return false;
    }
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
    console.log('terima kasih telah menginputkan data')

}

module.exports = {

    simpanContact
}