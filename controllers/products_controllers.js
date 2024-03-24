const getAllProducts = async (req, res) => {
  try {
    // Faire une requête GET à l'API
    const response = await fetch("https://dummyjson.com/products"); // Remplacez ceci par l'URL réelle de votre API
    const data = await response.json();

    // Rendre une vue avec les données reçues de l'API
    res.render("products", { apiData: data });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'API:",
      error
    );
    res.status(500).send("Erreur lors de la récupération des données de l'API");
  }
};

module.exports = { getAllProducts };
