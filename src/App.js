import React from 'react';
import NavBar from "./components/NavBar/index";
import { CartProvider } from './Context/CartContext';
import './logo.svg';
import './components/CartWidget/index.jsx';
import './components/NavBar/NavBar.module.css'
import Home from './components/Home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import Products from './components/Products';
import Formulario from './components/Formulario/Formulario';

  

function App() {
  return (
      <BrowserRouter>
        <CartProvider >
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route patth="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/Formulario" element={<Formulario/>} />
          </Routes>
        <Home />
        </CartProvider > 
      </BrowserRouter>
    
    
  );
}

export default App;
