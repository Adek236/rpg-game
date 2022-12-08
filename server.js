const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts');

// app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.use(expressLayouts);
app.set("view engine", "ejs")
app.set("views","./views")


app.get('/', (req, res) => {
  return res.render("login.ejs")
})

app.get('/register', (req, res) => {
  return res.render("register.ejs")
})









app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})