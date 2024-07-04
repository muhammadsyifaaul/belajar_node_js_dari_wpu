const yargs = require('yargs');
const { simpanContact } = require('./contacts');
// mengambil argument dari command line
// const command = process.argv[2]
// if(command === 'add') {

// } else if (comman === 'remove') {

// }else if(comman === 'list') {

// }
yargs.command({
    command: 'add',
    describe: 'Add a new contact',
    builder: {
        nama: {
            describe: 'Contact name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Contact email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'noHp',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // const contact = {
        //     nama : argv.nama,
        //     email : argv.email,
        //     noHP : argv.noHP,
        // } 
        // console.log(contact)
        simpanContact(argv.nama,argv.email,argv.noHP)
    }
});



yargs.parse()














// const contacts = require('./contacts') // bisa ini

// const main = async() => {
//     const nama = await contacts.tulisPertanyaan('Masukkan nama anda :')
//     const email =await  contacts.tulisPertanyaan('Masukkan email anda: ')
//     contacts.simpanContact(nama,email)
// }

// main()