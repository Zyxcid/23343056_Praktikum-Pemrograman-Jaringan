import fs from "fs";

const ambilCatatan = () => {
    return 'Ini Catatan Syahid Nur...'
}

const tambahCatatan = (judul, isi) => {
    const catatan = muatCatatan()
    const catatanGanda = catatan.filter(function (note) {
        return note.judul === judul
    })

    if (catatanGanda.length === 0) {
        catatan.push({
            judul: judul,
            isi: isi
        })
        simpanCatatan(catatan)
        console.log('Catatan baru ditambahkan!')
    } else {
        console.log('Judul catatan telah dipakai')
    }
}

const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan)
    fs.writeFileSync('catatan.json', dataJSON)
}
    
const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }  
}

const hapusCatatan = function (judul) {
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul
    })

    if (catatan.length > catatanUntukDisimpan.length) {
        simpanCatatan(catatanUntukDisimpan)
        console.log('Catatan berhasil dihapus')
    } else {
        console.log('Tidak ada catatan dengan judul tersebut')
    }
}

const tampilCatatan = function () {
    const catatan = muatCatatan()
    console.log('Daftar Catatan:')
    catatan.forEach((note, index) => {
        console.log(`${index + 1}. ${note.judul} - ${note.isi}`)
    })
}

export default {
    ambilCatatan,
    tambahCatatan,
    hapusCatatan,
    tampilCatatan
}

// jalankan dengan: node app.js tambah --judul="Catatan 1" --isi="Isi catatan 1"