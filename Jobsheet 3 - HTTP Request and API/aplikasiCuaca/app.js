const request = require('postman-request')
const url =
'http://api.weatherstack.com/current?access_key=06bedc8659dff720fb16547c691f9736&query=-0.8971497063862274,100.35075825852482'
request({ url: url }, (error, response) => {
// console.log(response)
const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
console.log(data.current.temperature)
})