// Importation des modules nécessaires
import React from "react"; // React est une bibliothèque JavaScript pour la construction d'interfaces utilisateur
import Footer from "../../components/footer/Footer"; // Footer est un composant personnalisé qui représente le pied de page de l'application
import Nav from "../../components/nav/Nav"; // Nav est un composant personnalisé qui représente la barre de navigation de l'application
import { NavLink } from "react-router-dom"; // NavLink est un composant de la bibliothèque react-router-dom qui permet de créer des liens de navigation

// Définition du composant P404
const P404 = () => {
  return (
    <div>
      <Nav />
      <main className="main__404">
        <h1 className="main__404--title">404</h1>{" "}
        {/* Titre de la page d'erreur */}
        <p className="main__404--txt">
          Oups! la page que vous demandez n'existe pas. {/* Message d'erreur */}
        </p>
        <NavLink className="main__404--btn" to="/">
          {/* Lien pour retourner à la page d'accueil */}
          Retourner sur la page accueil
        </NavLink>
      </main>
      <Footer /> {/* Insertion du composant Footer */}
    </div>
  );
};

export default P404; // Exportation du composant P404 pour qu'il puisse être utilisé ailleurs dans l'application
