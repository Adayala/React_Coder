import { React, useContext } from "react";
import { context } from "../../components/CartContext/CartContext";
import PurchaseDetail from "../../components/PurchaseDetail/PurchaseDetail";

const Cart = () => {
  const resultado = useContext(context);
  console.log("resultado");
  console.log(resultado);

  const productos = [
    {
      id: 1,
      header: "Ukelele soprano",
      meta: "Modelo Les Paul",
      description: "Bellisimo ukelele con diseño Les Paul",
      img: "https://www.mrcdinstrumentos.com.mx/shared/productos/19757/EULTVSNH1.jpg",
    },
    {
      id: 2,
      header: "Ukelele soprano 2",
      meta: "Modelo Pineapple",
      description: "Clasico diseño con maderas solidas",
      img: "https://deukelele.com/wp-content/uploads/2020/03/Ukelele-Pineaple.jpg",
    },
    {
      id: 3,
      header: "Ukelele soprano 2",
      meta: "Banjolele",
      description: "Todo el jazz en un instrumento",
      img: "https://www.banjoteacher.com/5528-large_default_2x/gold-tone-banjolele-deluxe.jpg",
    },
  ];

  return <PurchaseDetail products={productos} cantidad={resultado.cantidad} />;
};

export default Cart;
