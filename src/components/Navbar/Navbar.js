import React from "react";
import Cart from "../Navbar/Cart/cart";

const Navbar = (props) => {
  return (
    <nav>
      <div className="menu_start">
        <h1> Tienda {props.NombreTienda}</h1>
        <ul id="menu">
          <li>HOME</li>
          <li>VIENTOS</li>
          <li>CUERDAS</li>
          <li>CONSIGNACIONES</li>
          <li>CONTACTO</li>
        </ul>
      </div>
      <div className="menu_end">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
