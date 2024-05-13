// Importation de React, une bibliothèque JavaScript pour la construction d'interfaces utilisateur

import React from "react";

// Définition d'une fonction de composant React appelée Banner
// Cette fonction prend deux arguments : txt et classname

export function Banner(txt, classname) {
  // Le composant retourne une div avec une classe définie par l'argument classname
  // À l'intérieur de cette div, il y a un élément h1 avec la classe "banner__title"
  // Le contenu de cet élément h1 est défini par l'argument txt

  return (
    <div className={classname}>
      <h1 className="banner__title">{txt}</h1>
    </div>
  );
}
