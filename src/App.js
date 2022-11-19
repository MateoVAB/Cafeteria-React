import React from 'react';
import NavBar from "./components/NavBar/index";
import { CartProvider } from './Context/CartContext';
import './logo.svg';
import './components/CartWidget/index.jsx';
import './components/NavBar/NavBar.css'
import Home from './components/Home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import Products from './components/Products';
import Productos from './components/Productos';
  

function App() {
  return (
      <BrowserRouter>
        <CartProvider >
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria:categoriaId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<Productos/>} />
          </Routes>
        <Home />
        </CartProvider > 
      </BrowserRouter>
    
    
  );
}

export default App;
