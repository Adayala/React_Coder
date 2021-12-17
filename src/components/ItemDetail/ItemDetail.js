import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

const ItemDetail = (props) => {
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
          <div>
            <Button size="massive" animated="fade">
              <Button.Content visible>Agregar al carrito</Button.Content>
              <Button.Content hidden>
                {" "}
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemDetail;
