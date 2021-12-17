import React from "react";
import Cart from "../Navbar/Cart/cart";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div className="menu_start">
        <h1> Tienda {props.NombreTienda}</h1>
        <ul id="menu">
          <li>
            <NavLink to="#">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/music">MUSIC</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/saxos">SAXOS</NavLink>
          </li>
          <li>
            <NavLink to="#">CONSIGNACIONES</NavLink>
          </li>
          <li>
            <NavLink to="#">CONTACTO</NavLink>
          </li>
        </ul>
      </div>
      <div className="menu_end">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
