// Importation de React, une bibliothèque JavaScript pour la construction d'interfaces utilisateur
import React from "react";

// Définition d'une fonction de composant React appelée Card
// Cette fonction prend un objet en argument, qui est déstructuré pour extraire la propriété 'object'

const Card = ({ object }) => {
  // Le composant retourne une div avec la classe 'card' et une clé unique définie par object.id
  // À l'intérieur de cette div, il y a une image et un élément h2
  // L'image utilise object.cover comme source et a la classe 'card--img'
  // L'élément h2 a la classe 'card__title' et utilise object.title comme contenu

  return (
    <div className="card" key={object.id}>
      <img className="card--img" src={object.cover} alt="" />
      <h2 className="card__title">{object.title}</h2>
    </div>
  );
};

// Exportation du composant Card par défaut
export default Card;
