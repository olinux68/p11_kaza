// Importation de React, une bibliothèque JavaScript pour la construction d'interfaces utilisateur

import React from "react";

// Importation des images copyright et logoFooter

import copyright from "../../assets/img/copyright.png";
import logoFooter from "../../assets/img/Logo-background.png";

// Définition d'une fonction de composant React appelée Footer

const Footer = () => {
  // Le composant retourne une div avec la classe 'footer'
  // À l'intérieur de cette div, il y a une image avec la classe 'footer__logo' et une autre div avec la classe 'footer__copyright'
  // L'image utilise logoFooter comme source et a "Logo du site Kasa" comme alt text
  // La div 'footer__copyright' contient une autre image et un élément p
  // Cette image a la classe 'footer__copyright--pic', utilise copyright comme source et a "Copyright" comme alt text
  // L'élément p a la classe 'footer__copyright--txt' et contient le texte "2020 Kasa. All rights reserved"

  return (
    <div className="footer">
      <img className="footer__logo" src={logoFooter} alt="Logo du site Kasa" />
      <div className="footer__copyright">
        <img
          className="footer__copyright--pic"
          src={copyright}
          alt="Copyright"
        />
        <p className="footer__copyright--txt">2024 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

// Exportation du composant Footer par défaut
export default Footer;
