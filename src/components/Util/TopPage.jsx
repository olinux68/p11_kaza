
// Importation de useEffect de React, un Hook qui permet d'effectuer des effets secondaires dans les composants fonctionnels

import { useEffect } from "react";

// Importation de useLocation de react-router-dom, un Hook qui retourne l'objet de localisation actuel qui contient des informations sur l'URL actuelle

import { useLocation } from "react-router-dom";

// Définition d'une fonction de composant React appelée TopPage

export function TopPage() {

  // Utilisation du Hook useLocation pour obtenir l'objet de localisation actuel et déstructuration pour obtenir le chemin d'accès actuel

  const { pathname } = useLocation();

  // Utilisation du Hook useEffect pour effectuer un effet secondaire après chaque rendu
  // Dans cet effet, nous faisons défiler la fenêtre vers le haut
  // Cet effet se déclenche chaque fois que le chemin d'accès change

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Le composant ne rend rien, donc nous retournons null
  return null;
}