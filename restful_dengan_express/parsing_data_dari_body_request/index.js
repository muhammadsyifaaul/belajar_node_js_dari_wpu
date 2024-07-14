const express = require('express')
const app = express()


app.length('/order',(req,res) => {
    res.send('Order Page')
})

app.listen(3000,() => {
    console.log('server running on port 3000')
})