import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from ".//components/ItemListContainer/ItemList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar NombreTienda="Yes I Can" />
      <ItemList greeting="HOla que tal" />
      <Footer />
    </div>
  );
}

export default App;
