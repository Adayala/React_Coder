import React, { useState } from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

const ItemCount = ({ stockTotal, initial, CarritoAdd }) => {
  const [stock, setStock] = useState(stockTotal);
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stockTotal) {
      setCount(count + 1);
      setStock(stock - 1);
      console.log(stock);
      console.log(count);
      console.log(stockTotal);
    }
  };

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
      setStock(stock + 1);
      console.log(stock);
    }
  };

  return (
    <Card>
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
          <Button
            disabled={stockTotal <= 0}
            onClick={() => {
              CarritoAdd(count);
            }}
            size="massive"
            animated="fade"
          >
            <Button.Content visible>Agregar al carrito</Button.Content>
            <Button.Content hidden>
              {" "}
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ItemCount;
