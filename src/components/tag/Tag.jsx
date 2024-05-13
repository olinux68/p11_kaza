// Importation de React depuis la bibliothèque React
import React from "react";

// Déclaration du composant Tag
// Ce composant est une fonction qui prend en argument un objet props
// Cet objet props contient une propriété 'tag' qui représente le tag à afficher
export const Tag = ({ tag }) => {
  // Le composant retourne une div avec la classe 'tag'
  // À l'intérieur de cette div, il y a un paragraphe avec la classe 'tag__name'
  // Ce paragraphe affiche le tag passé en props
  return (
    <div className="tag">
      <p className="tag__name">{tag}</p>
    </div>
  );
};
