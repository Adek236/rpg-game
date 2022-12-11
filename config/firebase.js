var admin = require("firebase-admin");

var serviceAccount = require("../rpg-game-5ad55-firebase-adminsdk-vgykr-048fbbf270.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rpg-game-5ad55-default-rtdb.europe-west1.firebasedatabase.app"
});

module.exports = admin;