const mongoose = require('mongoose'),
      Schema   = mongoose.Schema

const currentTime = () => {
    let time = new Date()
    return time.toString().slice(0,24)
}

const user = new Schema({
    foto: String,
    nama: {
        type: String,
        minlength: 2
    },
    email: {
        type: String,
        minlength: 5
    },
    password: {
        type: String,
        minlength: 6
    },
    telpon: {
        type: String,
        minlength: 6
    },
    kelas : {
        type: String,
        minlength: 6
    },
    nrp: {
        type: Number
    },
    saldo: {
        type: Number,
        default: 0
    },
    transaksi: {
        waktu: {
            type: String,
            default: currentTime()
        },
        produk: String,
        jumlah: Number
    }
}, {collection: "dataUser"})

user.path('nama').validate((value) => {
    return /([a-zA-Z]+\s?)+/.test(value)
})
user.path('telpon').validate((value) => {
    return /^(\+62|0)8[0-9]{5,11}/.test(value)
})
user.path('nrp').validate((value) => {
    return /^(1103|1110|1203|1210|1303|1310|2103|2110|2210|3110|3210|4103|4210)[0-9]{6}/
})

const deliverer = new Schema({
    foto: String,
    nama: {
        type: String,
        minlength: 2
    },
    email: {
        type: String,
        minlength: 5
    },
    password: {
        type: String,
        minlength: 6
    },
    telpon: {
        type: String,
        minlength: 6
    },
    kelas : {
        type: String,
        minlength: 6
    },
    nrp: {
        type: Number
    },
    saldo: {
        type: Number,
        default: 0
    },
    transaksi: {
        waktu: {
            type: String,
            default: currentTime()
        },
        produk: String,
        jumlah: Number,
        user: String
    }
}, {collection: "dataDeliverer"})

const owner = new Schema({
    foto: String,
    pemilik: {
        type: String,
        minlength: 2
    },
    fotoWarung: String,
    namaWarung: {
        type: String,
        minlength: 2
    },
    produk: Object,
    email: {
        type: String,
        minlength: 5
    },
    password: {
        type: String,
        minlength: 6
    },
    telpon: {
        type: String,
        minlength: 6
    },
    saldo: {
        type: Number,
        default: 0
    },
    jadwalBuka: {
        senin: String,
        selasa: String,
        rabu: String,
        kamis: String,
        jumat: String,
    },
    lokasi: String,
    deskripsi: String,
    transaksi: {
        waktu: {
            type: String,
            default: currentTime()
        },
        produk: String,
        jumlah: Number
    }
}, {collection: "dataOwner"})

module.exports = mongoose.model("user", user)
module.exports = mongoose.model("owner", owner)
module.exports = mongoose.model("deliverer", deliverer)