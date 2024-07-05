require('dotenv').config()
// console.log(process.env)
const axios = require('axios')
const url = `${process.env.BASE_URL}${process.env.API_KEY}`
axios.get(`${url}&q=berlin`)
.then(res => console.log(res))