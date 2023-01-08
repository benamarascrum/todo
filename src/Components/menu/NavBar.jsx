import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  //State (Data)

  //Comportement
  function navbarStyle({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "green" : "blue",
    };
  }

  //Affichage
  return (
    <>
      <NavLink to={"/"} style={navbarStyle}>
        Accueil
      </NavLink>
      <NavLink to={"/connexion"} style={navbarStyle}>
        Connexion
      </NavLink>
    </>
  );
}
