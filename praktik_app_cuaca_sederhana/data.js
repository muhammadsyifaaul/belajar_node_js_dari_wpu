require('dotenv').config()
const axios = require('axios')
const https = require('https')
const envData = process.env
const urlForWeather = `${envData.BASE_URL}${envData.API_KEY}`
const urlForLocation = `${envData.URL_LOCATION}${envData.API_KEY_LOCATION}`

function getUserLocation() {
    axios.get(urlForLocation)
    .then((res) => {
        console.log(res.data.city)
    })
}

module.exports = {
    getUserLocation
}