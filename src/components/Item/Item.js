import React from "react";
import Counter from "./Counter/Counter";

const ItemList = (props) => {
  return (
    <div className="Item">
      <Counter
        header={props.header}
        meta={props.meta}
        description={props.description}
        img={props.img}
      />
    </div>
  );
};

export default ItemList;
