const yargs = require('yargs');
const { simpanContact,listContact,detailContact,deleteContact } = require('./contacts');
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
}).demandCommand()

// menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'show all data contact',
    handler()  {
        listContact();
    }
})
// menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'show detail  contact By Name',
    builder: {
        nama: {
            describe: 'Contact name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv)  {
        detailContact(argv.nama)
    }
});
// menghapus kontak berdesarkan nama

yargs.command({
    command: 'delete',
    describe: 'delete contact By Name',
    builder: {
        nama: {
            describe: 'Contact name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv)  {
        deleteContact(argv.nama)
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