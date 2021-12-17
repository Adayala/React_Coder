import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar NombreTienda="Yes I Can" />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
