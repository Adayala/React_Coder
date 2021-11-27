import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <h1> Tienda {props.NombreTienda}</h1>
      <ul id="menu">
        <li>HOME</li>
        <li>VIENTOS</li>
        <li>CUERDAS</li>
        <li>CONSIGNACIONES</li>
        <li>CONTACTO</li>
      </ul>
    </nav>
  );
};

export default Navbar;
