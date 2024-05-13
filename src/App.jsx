import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import P404 from "./pages/404/Page404";
import Fiche from "./pages/fiche/Fiche";
import Home from "./pages/Home";

// Définition des routes de l'application
const routes = [
  { path: "/", element: <Home /> }, // Route pour la page d'accueil
  { path: "/about", element: <About /> }, // Route pour la page "À propos"
  { path: "/fiche/:appartementId", element: <Fiche /> }, // Route pour la page "Fiche" avec un paramètre dynamique "appartementId"
  { path: "*", element: <P404 /> }, // Route pour la page 404, qui s'affiche lorsqu'aucune autre route ne correspond
];

// Définition du composant App
const App = () => {
  return (
    <BrowserRouter> {/* Utilisation du composant BrowserRouter pour gérer la navigation */}
      <Routes> {/* Utilisation du composant Routes pour définir les routes */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} /> // Création d'un composant Route pour chaque route définie
        ))}
      </Routes>
    </BrowserRouter>
  );
};

// Exportation du composant App pour qu'il puisse être utilisé ailleurs dans l'application
export default App;
