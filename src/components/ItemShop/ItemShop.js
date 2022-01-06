import { React, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount.js";

import { Button, Card, Icon } from "semantic-ui-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../components/CartContext/CartContext";

const ItemShop = (props) => {
  const resultado = useContext(context);
  const [CartConfirm, setCartConfirm] = useState(false);
  const Carrito = (producto, contador) => {
    setCartConfirm(true);
    resultado.agregarProducto(producto, contador);
    console.log("Agregar al carrito: Producto");
    console.log(producto);

    console.log("Agregar al carrito: Cantidad");
    console.log(contador);

    if (CartConfirm) {
      console.log("CartConfirm es true");
    } else {
      console.log("CartConfirm es false");
    }
  };

  if (CartConfirm) {
    return (
      <Card>
        {" "}
        <Card.Content>
          <div>
            <NavLink to="/cart">
              <Button size="massive" animated="fade">
                <Button.Content visible>Confirmar compra</Button.Content>
                <Button.Content hidden>
                  {" "}
                  <Icon name="clipboard outline" />
                </Button.Content>
              </Button>
            </NavLink>
          </div>
        </Card.Content>
      </Card>
    );
  } else {
    return (
      <ItemCount
        id={props.id}
        img={props.img}
        header={props.header}
        meta={props.meta}
        description={props.description}
        stockTotal={props.StockTotal}
        initial={props.Initial}
        CarritoAdd={Carrito}
      />
    );
  }
};

export default ItemShop;
