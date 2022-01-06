import React from "react";
import { Card, Image } from "semantic-ui-react";
import ItemShop from "../ItemShop/ItemShop.js";

const ItemDetail = (props) => {
  return (
    <div className="ItemDetail">
      <Card>
        <Card.Content>
          <Image floated="right" size="medium" src={props.img} />
          <Card.Header>{props.header}</Card.Header>
          <Card.Meta>{props.meta}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {" "}
          <div>
            <ItemShop
              id={props.id}
              StockTotal={props.StockTotal}
              Initial={props.Initial}
              img={props.img}
              header={props.header}
              meta={props.meta}
              description={props.description}
            />{" "}
          </div>{" "}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemDetail;
