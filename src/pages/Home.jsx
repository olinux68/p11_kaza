// Importation des composants nécessaires
import React from "react";
import { Banner } from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Nav from "../components/nav/Nav";

// Déclaration du composant Home
const Home = () => {
  // Le composant retourne une div qui contient les composants suivants :
  // - Nav : un composant qui affiche la barre de navigation
  // - Banner : un composant qui affiche une bannière. Ici, la bannière est celle de la page d'accueil
  // - Main : un composant qui affiche le contenu principal de la page
  // - Footer : un composant qui affiche le pied de page
  return (
    <div>
      <Nav />
      {Banner("Chez vous, partout et ailleurs", "banner")}
      <Main />
      <Footer />
    </div>
  );
};

// Exportation du composant Home pour qu'il puisse être utilisé dans d'autres fichiers
export default Home;
