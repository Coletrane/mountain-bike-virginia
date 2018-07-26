const express = require("express")
const app = express()

const dist = "./dist/"
const options = {
  index: "index.html"
}
const port = 3002

app.use(express.static(dist, options))

app.listen(port, function() {
  console.log(
    "Mountain Bike Virginia serving static files from " +
      dist +
      " On port: " +
      port
  )
})
