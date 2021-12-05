import React, { useState } from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
//import UkeImg from "../../../img/uke_les_paul.jpg";
//<h1>{props.greeting}</h1>

const Counter = (props) => {
  const [stock, setStock] = useState(15);
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (stock > 0) {
      setCount(count + 1);
      setStock(stock - 1);
      console.log(stock);
    }
  };

  const restar = () => {
    if (stock >= 0 && count > 0) {
      setCount(count - 1);
      setStock(stock + 1);
      console.log(stock);
    }
  };

  return (
    <div className="Counter">
      {/* aca va el contador  */}
      <Card>
        <Card.Content>
          <Image floated="right" size="normal" src={props.img} />
          <Card.Header>{props.header}</Card.Header>
          <Card.Meta>{props.meta}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <h1>
            {" "}
            <span className="highlight"> {count}</span> unidades
          </h1>
          <div className="ui two buttons">
            <Button onClick={sumar}>
              {" "}
              <Icon name="plus" />
            </Button>
            <Button onClick={restar}>
              <Icon name="minus" />
            </Button>
          </div>
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

export default Counter;
