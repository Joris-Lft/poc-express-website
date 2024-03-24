const express = require("express");
const app = express();
const port = 3000; // Port sur lequel votre serveur écoutera

// import routes by domain
const productsRoutes = require("./routes/products");

// Définissez le moteur de templating EJS
app.set("view engine", "ejs");

// Définissez le répertoire des fichiers statiques (comme CSS, JS, images, etc.)
app.use(express.static("public"));

// Définissez les routes
app.get("/", (req, res) => {
  // Renvoie la vue index.ejs
  res.render("index");
});

app.use("/products", productsRoutes);

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port ${port}`);
});
