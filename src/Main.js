import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/categoria/:tipo/:id" element={<ItemDetailContainer />} />
        {/* /item/:id  = ItemDetailContainer */}
      </Routes>
    </main>
  );
};

export default Main;
