import { React, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount.js";

import { Button, Card, Icon } from "semantic-ui-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../components/CartContext/CartContext";

const ItemShop = (props) => {
  const resultado = useContext(context);
  const [CartConfirm, setCartConfirm] = useState(false);
  const Carrito = (contador) => {
    setCartConfirm(true);
    resultado.agregarProducto({}, contador);

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
    return <ItemCount stockTotal={10} initial={1} CarritoAdd={Carrito} />;
  }

  /*aca le paso hardCodeado el sctockTotal, initial pero se debe tomar de la API*/
};

export default ItemShop;
