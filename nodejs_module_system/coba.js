function cetakNama(nama) {
    return `hi, nama saya ${nama}`
}
// console.log('halo dunia')
// console.log(cetakNama('samsul'))
const PI = 3.14

const mahasiswa = {
    nama: 'samsul',
    umur: 21,
    cetakMhs() {
        return `halo nama saya ${this.nama} dan saya ${this.umur} tahun`
    }
}

class Orang {
    constructor() {
        console.log('ini class orang')
    }
}

// module.exports = cetakNama
// module.exports = PI // ini tidak bisa karena export sudah diisi cetak nama

// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang

// module.exports = {
//     cetakNama : cetakNama,
//     PI: PI,
//     mahasiswa : mahasiswa,
//     Orang: Orang
// }
// jika nama properti sama dengan valuenya sama,bisa langsung ditulis seperti di bawah
module.exports = {cetakNama,PI,mahasiswa,Orang};