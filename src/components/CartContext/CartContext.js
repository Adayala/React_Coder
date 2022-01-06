import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  //const [isInCart, SetisInCart] = useState();

  const isInCart = (prod) => {
    return carrito.find((elem) => elem.key === prod.key);
    //carrito.find((elem) => elem.key === prod.key);

    //console.log(prod.key);
  };

  const agregarProducto = (producto, canti) => {
    //    setCantidad(cantidad + canti);
    //const isInCart = carrito.find((key) => (key = producto.key));
    //SetisInCart(carrito.find((element) => element.key === producto.key));

    //if (!isInCart || carrito.entries(carrito).length === 0) {
    if (isInCart(producto) === undefined) {
      //console.log("isInCart dentro del if");
      //console.log(isInCart);

      setCantidad(cantidad + canti);

      const copyProducto = carrito;
      //SETEO LA CANTIDAD DE UNIDADES PARA ESTE PROD
      producto.cantidad = canti;

      //AGREGO EL PRODUCTO EN EL CARRITO
      setCarrito([...copyProducto, producto]);
    } else {
      console.log("No se puede insertar por producto repetido");
    }

    //isInCart();
    //carrito[0].cantidad = +cantidad ESTO NO!!!
    //const res = array.filter(condicion) // [{}]
  };

  const eliminarProducto = (id, unidades) => {
    //COPIA NUEVA DEL CARRITO SIN EL ELEMENTO A ELIMINAR
    const copyCarrito = carrito.filter((Prod) => Prod.key !== id);
    console.log(
      "copyCarrito: se supone que tiene todo menos el que se eliminó"
    );
    console.log(copyCarrito);
    //ACTUALIZO EL ACCRITO
    setCarrito([]);
    setCarrito(copyCarrito);
    console.log(copyCarrito);
    console.log(carrito);

    setCantidad(cantidad - unidades);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidad(0);
  };

  const valorContexto = {
    carrito,
    cantidad,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
  };
  return <Provider value={valorContexto}>{children}</Provider>;
};

export default CartContext;
