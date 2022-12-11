const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const expressLayouts = require("express-ejs-layouts");
const admin = require("./config/firebase");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  return res.render("login.ejs"); 
})
 
app.post("/", async (req, res) => {
  // admin create usersg
    return res.redirect("/game");
});

app.get("/register", (req, res) => { 
  return res.render("register.ejs");
}); 

app.get("/game", (req, res) => {
  return res.render("game.ejs");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
