import React from "react";

const ItemList = (props) => {
  const divStyle = {
    color: "blue",
  };
  return (
    <div className="Item">
      <h1 style={divStyle}> {props.greeting}</h1>
    </div>
  );
};

export default ItemList;
