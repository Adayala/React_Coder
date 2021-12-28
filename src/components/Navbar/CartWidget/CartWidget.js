import { React, useContext } from "react";
import carritoImg from "../../../assets/carrito.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../../components/CartContext/CartContext";

const Cart = () => {
  const clickCarrito = () => {
    console.log("hola");
  };

  const resultado = useContext(context);
  console.log("resultado");
  console.log(resultado);

  return (
    <div>
      <NavLink to="/cart">
        <img
          src={carritoImg}
          alt="Carrito"
          onClick={() => {
            clickCarrito(); /*aca la funcionalidad detras de hacer un click en el carrito*/
          }}
        />
        <h>{resultado.cantidad} productos</h>
      </NavLink>
    </div>
  );
};

export default Cart;
