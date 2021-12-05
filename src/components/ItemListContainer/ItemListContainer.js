import React from "react";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const products = [
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

  /*const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };*/

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });

    promesa
      .then((resultado) => {
        setProductos(resultado);
      })
      .catch(() => {
        console.log("Error...");
      });
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
