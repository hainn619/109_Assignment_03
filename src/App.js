import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Catalog from "./Components/catalog";
import Home from "./Components/home";
import About from "./Components/about";
import Cart from "./Components/cart";
import Admin from "./Components/admin";
import Todo from "./Components/todo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStoreProvider from "./context/globalStoreProvider";

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
