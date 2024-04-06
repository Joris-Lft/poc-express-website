// userRoutes.js
const express = require("express");
const router = express.Router();

// Définir les routes pour les utilisateurs
router.get("/", (req, res) => {
  res.render("bank-loan-rate-calculator");
});

module.exports = router;
