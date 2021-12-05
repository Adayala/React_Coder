import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar NombreTienda="Yes I Can" />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
