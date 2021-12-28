import { React, useContext } from "react";
import { context } from "../../components/CartContext/CartContext";
import {
  Button,
  Card,
  Image,
  Icon,
  Header,
  Table,
  Rating,
} from "semantic-ui-react";

const PurchaseDetail = ({ products }) => {
  const resultado = useContext(context);

  const ClearCart = (contador) => {
    resultado.vaciarCarrito();

    console.log("Se vacio el carritooo");
  };

  return (
    <div className="PurchaseDetail">
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Preview</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>Modelo</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Accion</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {resultado.carrito.map((product) => (
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Image floated="right" size="small" src={product.img} />
              </Table.Cell>
              <Table.Cell singleLine>{product.id}</Table.Cell>
              <Table.Cell>{product.header}</Table.Cell>
              <Table.Cell textAlign="right">{product.meta}</Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>
                <Button secondary>Quitar del carrito</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell singleLine>
              Total de unidades en el carrito
            </Table.HeaderCell>
            <Table.HeaderCell>{resultado.cantidad}</Table.HeaderCell>
            <Table.HeaderCell>
              <Button
                onClick={() => {
                  ClearCart();
                }}
                primary
              >
                Vaciar el carrito
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default PurchaseDetail;
