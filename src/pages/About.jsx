// Importation des composants et des données nécessaires
import React from "react";
import Nav from "../components/nav/Nav";
import { Banner } from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import items from "../assets/data/collapses.json"; // Importation des données pour les éléments "Collapse"
import { TopPage } from "../components/Util/TopPage";
import Collapse from "../components/collapse/Collapse";

// Déclaration du composant About
const About = () => {
  // Le composant retourne une div qui contient les composants suivants :
  // - TopPage : un composant qui affiche le haut de la page
  // - Nav : un composant qui affiche la barre de navigation
  // - Banner : un composant qui affiche une bannière. Ici, la bannière est celle de la page "About"
  // - Collapse : un composant qui affiche un élément "Collapse". Ici, chaque élément de la liste "items" est passé en props à un composant "Collapse"
  // - Footer : un composant qui affiche le pied de page
  return (
    <div>
      <TopPage />
      <Nav />
      <main>
        {Banner("", "banner_about")}
        {items.map(({ id, ...rest }) => (
          <Collapse key={id} object={{ id, ...rest }} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

// Exportation du composant About pour qu'il puisse être utilisé dans d'autres fichiers
export default About;
