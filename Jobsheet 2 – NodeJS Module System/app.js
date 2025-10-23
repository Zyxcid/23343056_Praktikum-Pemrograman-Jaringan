// // A Node.js module system

// // a. import core module node.js
// import fs from "fs";
// // fs.writeFileSync('catatan.txt', 'Nama Saya Syahid Nurhidayatullah')
// fs.appendFileSync("catatan.txt", " Saya tinggal di Padang");
// // Saat menggunakan fs.appendFileSync isi file akan ditambahkan di akhir file sedangkan fs.writeFileSync akan menimpa isi file yang lama.

// // b. import file pada node.js
// import catatan from './catatan.js';
// const pesan = catatan()
// console.log(pesan)
// // Console menampilkan 'Ini Catatan Syahid Nur...' dari file catatan.js

// // c. import npm
// import validator from 'validator';

// console.log(validator.isURL('https'))
// // Menampilkan false karena 'https' bukan URL yang valid

// console.log(validator.isURL('https://sha.com'))
// // Menampilkan true karena 'https://sha.com' adalah URL yang valid


// // d. LATIHAN 1
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.bgWhite.red.bold('RRRaaahhhhh Indonesiaaa!'));

// // e. LATIHAN 2
// npm install -g nodemon 
// nodemon app.js

//_________________________________________________________________________________________//
//_________________________________________________________________________________________//

// // B. Command Line Arguments

// // a. Mendapatkan input dari user melalui argumen command line

// const command = process.argv[2]
// console.log(process.argv)

// console.log(process.argv[2])

// if (command === 'tambah') {
//   console.log('Tambah Catatan')
// } else if (command === 'hapus') {
//   console.log('Hapus Catatan')
// }

// // akan menampilkan array berisi argumen yang diberikan saat menjalankan file app.js
// // contoh menjalankan di terminal:
// // node app.js tambah
// // maka akan menampilkan:
// // Tambah Catatan

// b. Argument parsing dengan Yargs (penguraian argumen)

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import catatan from './catatan.js'

const argv = yargs(hideBin(process.argv))
  .version('10.1.0')
  .command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
      judul: {
        describe: 'Judul catatan',
        demandOption: true,
        type: 'string'
      },
      isi: {
        describe: 'Isi catatan',
        demandOption: true,
        type: 'string'
      }
    },
      handler: function (argv) {
      catatan.tambahCatatan(argv.judul, argv.isi)
      // menyempurnakan aplikasi buku-catatan dengan menambahkan fungsi tambahCatatan di file catatan.js
    }
  })
  .command({
    command: 'hapus',
    describe: 'hapus catatan',
    handler: function (argv) {
      catatan.hapusCatatan(argv.judul)
      // menyempurnakan aplikasi buku-catatan dengan menambahkan fungsi hapusCatatan di file catatan.js
    }
  })
  .command({
    command: 'tampil',
    describe: 'tampilkan semua catatan',
    handler: function () {
      catatan.tampilCatatan()
      // menyempurnakan aplikasi buku-catatan dengan menambahkan fungsi tampilCatatan di file catatan.js
    }
  })
  .parse()

  // Jalankan perintah di terminal:
  // node app.js tambah --judul="Belajar Node.js" --isi="Node.js adalah runtime JavaScript"
  // maka akan menampilkan:
  // Judul: Belajar Node.js
  // Isi: Node.js adalah runtime JavaScript