import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/categoria/:tipo/:id" element={<ItemDetailContainer />} />
        {/* /item/:id  = ItemDetailContainer */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
