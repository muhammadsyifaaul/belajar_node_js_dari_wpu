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
const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(file);
    return contacts
}

const simpanContact = (nama,email,noHP) => {
    const contact = {
        nama,
        email,
        noHP
    }

    const contacts = loadContact()
    // const file = fs.readFileSync('data/contacts.json', 'utf8')
    // const contacts = JSON.parse(file);
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


const listContact = () => {
  const contacts = loadContact()
  console.log(chalk.greenBright.inverse.bold('Daftar kontak'))
  contacts.forEach((contact,i) => {
    console.log(`${i+1} . ${contact.nama} - ${contact.noHP}`)
  })
}
const detailContact = (nama) => {
  const contacts = loadContact();
  console.log(chalk.cyanBright.inverse.bold('Contact detail'))
  const contact = contacts.find(contact => 
    contact.nama.toLowerCase() === nama.toLowerCase());
    if(!contact) {
      console.log(chalk.red.inverse.bold(`can't find contact ${nama}`))
      return false
    }
    console.log(contact.nama)
    console.log(contact.noHP)
    if(contact.email) {
      console.log(contact.email)
    }
}

const deleteContact = (nama) => {
  const contacts = loadContact();
  //  membuat array nama nama orang selain nama yang ditemukan
  const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() != nama.toLowerCase())
  if(contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`can't find contact ${nama}`))
    return false
  }
  fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts))
    console.log(chalk.green.inverse.bold(`contact ${nama} delete succesfully`))
}
module.exports = {

    simpanContact,
    listContact,
    detailContact,
    deleteContact
}