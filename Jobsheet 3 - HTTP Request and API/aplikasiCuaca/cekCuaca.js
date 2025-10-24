const request = require('postman-request')
const urlCuaca =
'http://api.weatherstack.com/current?access_key=06bedc8659dff720fb16547c691f9736&query=-0.8971497063862274,100.35075825852482&units=f'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' + response.body.current.temperature + ' derajat fahrenheit. Kemungkinan terjadinya hujan adalah' + response.body.current.precip + '%')
    // Latihan 1
    console.log('Cuaca saat ini ' + response.body.current.weather_descriptions[0])
})