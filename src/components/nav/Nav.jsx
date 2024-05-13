// Importation des composants nécessaires
import React from "react";
import { NavLink } from "react-router-dom"; // Importation du composant NavLink pour la navigation
import logo from "../../assets/img/Logo.png"; // Importation du logo

// Initialisation de la liste des liens de navigation
const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "A Propos" },
];

// Déclaration du composant Nav
const Nav = () => {
  return (
    <header className="header">
      <div className="header__logo">
        
        <a href="/" >
          <img src={logo} alt="Logo de l'entreprise Kasa" />
        </a>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          {navLinks.map(({ to, label }, index) => (
            <NavLink
              key={index}
              to={to}
              className={(nav) =>
                nav.isActive ? "header__nav__ul--active" : ""
              }
            >
              <li>{label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Exportation du composant Nav
export default Nav;
