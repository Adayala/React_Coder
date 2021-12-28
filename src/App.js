import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import CartContext from "./components/CartContext/CartContext"; //custom provider

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <div className="App">
          <Navbar NombreTienda="Yes I Can" />
          <Main />
          <Footer />
        </div>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
