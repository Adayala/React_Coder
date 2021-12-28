import React from "react";
import Preview from "./Preview/Preview";

const ItemList = (props) => {
  return (
    <div className="Item">
      <Preview
        header={props.header}
        meta={props.meta}
        description={props.description}
        img={props.img}
        id={props.id}
      />
    </div>
  );
};

export default ItemList;
