// userRoutes.js
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products_controllers");

// Définir les routes pour les utilisateurs
router.get("/", productsController.getAllProducts);

module.exports = router;
