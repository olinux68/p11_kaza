// Importation de React et des Hooks useEffect et useState
import React, { useEffect, useState } from "react";

// Importation de l'image de la flèche vers le bas

import arrowDown from "../../assets/img/down-arrow.png";

// Définition d'une fonction de composant React appelée Collapse
// Cette fonction prend deux arguments : object et content

const Collapse = ({ object, content }) => {
  // Utilisation du Hook useState pour créer des états pour object, content et isActive

  const [setObject, setObjectState] = useState(object);
  const [setContent, setContentState] = useState(content);
  const [isActive, setIsActive] = useState(false);

  // Utilisation du Hook useEffect pour mettre à jour les états setObject et setContent chaque fois que object ou content change

  useEffect(() => {
    setObjectState(object);
    setContentState(content);
  }, [object, content]);

  // Définition d'une fonction Rotate qui inverse l'état isActive

  function Rotate() {
    setIsActive(!isActive);
  }

  // Extraction des propriétés id, title et description de setObject

  let idCollapse = setObject.id;
  let titleCollapse = setObject.title;
  let descriptionCollapse = setObject.description;

  // Si setObject a une propriété cover

  if (setObject.cover) {
    // Si setContent est un tableau

    if (Array.isArray(setContent)) {
      // Définition de titleCollapse à "Equipements"

      titleCollapse = "Equipements";

      // Définition de descriptionCollapse à une liste d'éléments li, un pour chaque équipement dans setContent

      descriptionCollapse = setContent.map((equipement) => {
        return <li key={equipement}>{equipement}</li>;
      });
    } else {
      // Si setContent n'est pas un tableau, définition de titleCollapse à "Description" et de descriptionCollapse à setContent

      titleCollapse = "Description";
      descriptionCollapse = setContent;
    }
  }

  // Le composant retourne une div avec la classe 'collapse' et un id défini par idCollapse
  // À l'intérieur de cette div, il y a un bouton et une image
  // Le bouton a la classe 'collapse__container__btn' et appelle la fonction Rotate lorsqu'il est cliqué
  // L'image a la classe 'collapse__container__img' et une classe supplémentaire 'rotate' si isActive est vrai
  // L'image utilise arrowDown comme source et a "Arrow" comme alt text
  // Si isActive est vrai, une div supplémentaire avec la classe 'collapse__content' est rendue, contenant descriptionCollapse

  return (
    <div className="collapse" id={idCollapse}>
      <div className="collapse__container">
        <button className="collapse__container__btn" onClick={Rotate}>
          {titleCollapse}
        </button>
        <img
          className={`collapse__container__img ${isActive ? "rotate" : "rotate"}`}
          src={arrowDown}
          alt="Arrow"
        />
      </div>
      {isActive && (
        <div className="collapse__content">{descriptionCollapse}</div>
      )}
    </div>
  );
};

// Exportation du composant Collapse par défaut
export default Collapse;
