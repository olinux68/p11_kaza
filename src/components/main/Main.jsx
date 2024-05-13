// Importation de React, une bibliothèque JavaScript pour la construction d'interfaces utilisateur
import React from "react";
// Importation de NavLink de react-router-dom, qui permet de créer des liens de navigation dans l'application
import { NavLink } from "react-router-dom";
// Importation des données des logements à partir d'un fichier JSON
import logements from "../../assets/data/logements.json";
// Importation du composant Card
import Card from "../card/Card";

// Définition d'une fonction de composant React appelée Main
const Main = () => {
  // Le composant retourne un élément main avec la classe 'main'
  // À l'intérieur de cet élément, il y a une liste de liens NavLink, un pour chaque logement dans les données importées
  // Chaque lien NavLink a un id et une clé définis par logement.id, et un chemin défini par "fiche/" + logement.id
  // À l'intérieur de chaque lien, il y a un composant Card avec la propriété object définie par le logement
  return (
    <main className="main">
      {logements.map((logement) => {
        return (
          <NavLink
            id={logement.id}
            key={logement.id}
            to={"fiche/" + logement.id}
          >
            <Card object={logement} />
          </NavLink>
        );
      })}
    </main>
  );
};

// Exportation du composant Main par défaut
export default Main;
