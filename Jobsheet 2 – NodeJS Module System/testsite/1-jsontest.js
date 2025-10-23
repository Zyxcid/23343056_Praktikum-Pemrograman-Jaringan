import fs from "fs";

// const buku = {
// judul: 'Pemrograman Jaringan',
// penulis: 'Syahid Nur'
// }

// const bookJSON = JSON.stringify(buku)
// fs.writeFileSync('1-jsontest.json', bookJSON)

const dataBuffer = fs.readFileSync('1-jsontest.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.judul)
// kode di atas akan menampilkan 'Pemrograman Jaringan' ke console