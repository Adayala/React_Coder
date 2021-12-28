import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount.js";
import ItemShop from "../ItemShop/ItemShop.js";

const ItemDetail = (props) => {
  const onAdd = (contador) => {
    console.log(contador);
  };

  return (
    <div className="ItemDetail">
      <Card>
        <Card.Content>
          <Image floated="right" size="normal" src={props.img} />
          <Card.Header>{props.header}</Card.Header>
          <Card.Meta>{props.meta}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {" "}
          <div>
            <ItemShop />{" "}
          </div>{" "}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemDetail;
