const express = require("express");
const app = express();
const port = 3000;

// import routes by domain
const productsRoutes = require("./routes/test-products-list");
const bankLoanRateCalculatorRoutes = require("./routes/bank-loan-rate-calculator");

// Définissez le moteur de templating EJS
app.set("view engine", "ejs");

// Set directory for static files (like CSS, JS, images, etc.)
app.use(express.static("public"));

// Define routes
app.get("/", (req, res) => {
  // render index.ejs
  res.render("index");
});
// other routes
// the name of the route file must be the same as the url
app.use("/test-products-list", productsRoutes);
app.use("/bank-loan-rate-calculator", bankLoanRateCalculatorRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
