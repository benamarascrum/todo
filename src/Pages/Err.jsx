import React from "react";
import { NavLink } from "react-router-dom";

export default function Err() {
  return (
    <>
      <h1>Sorry, Not Found</h1>
      <NavLink to={"/"}>Accueil</NavLink>
    </>
  );
}
