const express = require('express')
const app = express()

const dist = './dist'
const port = 3001

app.use(express.static(dist))

app.listen(port, function() {
    console.log("Mountain Bike Virginia serving static files from " + dist +
                "On port: " + port)
})

