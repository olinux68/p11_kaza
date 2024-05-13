// Importation de React, une bibliothèque JavaScript pour la construction d'interfaces utilisateur
import React from "react";
// Importation de useEffect de React, un Hook qui permet d'effectuer des effets secondaires dans les composants fonctionnels
import { useEffect } from "react";
// Importation de Star de "./../assets/img/star.svg", une image SVG d'une étoile
// ReactComponent est utilisé pour importer le SVG en tant que composant React
import { ReactComponent as Star } from "./../assets/img/star.svg";

// Définition d'une fonction de composant React appelée Rating
// Cette fonction prend en argument un objet nb qui contient le nombre d'étoiles à afficher
export const Rating = (nb) => {
  // Définition d'un tableau numberOfStar qui contient les nombres de 1 à 5
  const numberOfStar = [1, 2, 3, 4, 5];

  // Utilisation de useEffect pour appeler la fonction handleRating avec nb.rate comme argument lorsque le composant est monté
  useEffect(() => {
    handleRating(nb.rate);
  });

  // Définition de la fonction handleRating qui prend en argument un nombre rate
  // Cette fonction modifie la couleur de remplissage des étoiles jusqu'à l'étoile numéro rate en rouge
  const handleRating = (rate) => {
    for (let i = 1; i <= rate; i++) {
      const starColorModif = document.querySelector(".star" + i);
      starColorModif.setAttribute("fill", "#ff6060");
    }
  };

  // Le composant retourne une div avec la classe 'container__rate'
  // À l'intérieur de cette div, il y a une étoile pour chaque nombre dans numberOfStar
  // Chaque étoile a une classe définie par "star" + star, une clé définie par "star" + star, une couleur de remplissage gris par défaut, et une hauteur de 30px
  return (
    <div className="container__rate">
      {numberOfStar.map((star) => {
        return (
          <Star
            className={"star" + star}
            key={"star" + star}
            fill="#E3E3E3"
            height={"30px"}
          ></Star>
        );
      })}
    </div>
  );
};
