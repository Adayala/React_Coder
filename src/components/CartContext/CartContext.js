import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      header: "Ukelele soprano",
      meta: "Modelo Les Paul",
      description: "Bellisimo ukelele con diseño Les Paul",
      img: "https://www.mrcdinstrumentos.com.mx/shared/productos/19757/EULTVSNH1.jpg",
    },
    {
      id: 2,
      header: "Ukelele soprano 2",
      meta: "Modelo Pineapple",
      description: "Clasico diseño con maderas solidas",
      img: "https://deukelele.com/wp-content/uploads/2020/03/Ukelele-Pineaple.jpg",
    },
    {
      id: 3,
      header: "Ukelele soprano 2",
      meta: "Banjolele",
      description: "Todo el jazz en un instrumento",
      img: "https://www.banjoteacher.com/5528-large_default_2x/gold-tone-banjolele-deluxe.jpg",
    },
  ]);
  const [cantidad, setCantidad] = useState(12);
  const agregarProducto = (producto, canti) => {
    //    setCantidad(cantidad + canti);
    setCantidad(cantidad + canti);
    console.log("luego de modificar el contador por context");
    console.log(cantidad);
    //isInCart();
    //carrito[0].cantidad = +cantidad ESTO NO!!!
    //const res = array.filter(condicion) // [{}]
  };

  const isInCart = (id) => {};
  const eliminarProducto = (id) => {};

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
