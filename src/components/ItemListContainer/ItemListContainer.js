import React from "react";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (!id) {
      fetch("https://61ae7312a7c7f3001786f850.mockapi.io/api/yesican/music")
        .then((res) => res.json())
        .then((json) => {
          setProductos(json);
        })
        .catch((err) => console.log(err));
    } else {
      fetch(`https://61ae7312a7c7f3001786f850.mockapi.io/api/yesican/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setProductos(json);
        });
    }
  }, [id]);

  if (productos.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="ItemListContainer">
        <ItemList products={productos} />
      </div>
    );
  }
};

export default ItemListContainer;
