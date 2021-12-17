import React from "react";
import Item from "../Item/Item.js";

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      {products.map((product) => (
        <Item
          header={product.header}
          meta={product.meta}
          description={product.description}
          img={product.img}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
