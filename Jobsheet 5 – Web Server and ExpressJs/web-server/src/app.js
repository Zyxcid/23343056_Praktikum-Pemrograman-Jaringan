const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Mendefinisikan path untuk Express config
const direktoriPublik = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

// Setup handlebars engine dan views location
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

// Setup direktori statis
app.use(express.static(direktoriPublik))

//ini halaman/page utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Syahid Nur',
    })
})

//ini halaman bantuan/FAQ (Frequently Asked Questions)
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        nama: 'Syahid Nur',
        teksBantuan: 'ini adalah teks bantuan'
    }) 
})

//ini halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
    judul: 'Tentang Saya',
    nama: 'Syahid Nur',
    })
})

//ini halaman info cuaca
app.get('/infoCuaca', (req, res) => {
    res.send([{ 
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang', 
    }])
})

app.get('/bantuan/*page', (req, res) => {
    res.render('404', {
        pesanKesalahan: 'Artikel ' + req.params.page + ' Tidak Ditemukan.'
    })
})

app.get('/*page', (req, res) => {
    res.render('404', {
        pesanKesalahan: 'Halaman Tidak Ditemukan.'
    })
})

app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
})