import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id, tipo } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    if (!id) {
      fetch("https://61ae7312a7c7f3001786f850.mockapi.io/api/yesican/music")
        .then((res) => res.json())
        .then((json) => {
          setProducto(json);
          console.log(tipo);
          console.log(id);
          console.log("ItemDetailContainer 1");

          console.log(producto);
        })
        .catch((err) => console.log(err));
    } else {
      fetch(
        `https://61ae7312a7c7f3001786f850.mockapi.io/api/yesican/${tipo}/${id}`
      )
        .then((res) => res.json())
        .then((json) => {
          setProducto(json);
          console.log(
            `https://61ae7312a7c7f3001786f850.mockapi.io/api/yesican/${tipo}/${id}`
          );
          console.log(tipo);
          console.log(id);

          console.log("ItemDetailContainer 2");

          console.log(producto);
        });
    }
  }, [tipo]);

  if (!producto) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="ItemDetailContainer">
        <ItemDetail
          id={producto.id}
          img={producto.img}
          header={producto.header}
          meta={producto.meta}
          description={producto.description}
          StockTotal={producto.StockTotal}
          Initial={producto.Initial}
        />
      </div>
    );
  }
};

export default ItemDetailContainer;
