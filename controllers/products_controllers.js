const getAllProducts = async (req, res) => {
  try {
    // API GET request
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // render a view with data loaded
    res.render("test-products-list", { apiData: data });
  } catch (error) {
    console.error("Error during request:", error);
    res.status(500).send("Error during request");
  }
};

module.exports = { getAllProducts };
