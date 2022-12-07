const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views","./views")

app.get('/', (req, res) => {
  return res.render("main.ejs")
})










app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})