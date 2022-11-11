import React from 'react';
import NavBar from "./components/NavBar/index";
import { CartProvider } from './Context/CartContext';
import './logo.svg';
import './components/CartWidget/index.jsx';
import './components/NavBar/NavBar.css'
import Home from './components/Home/index'


  

function App() {
  return (
    <div>
    <CartProvider >
        <NavBar />
        <Home />
    </CartProvider > 
    </div>
  );
}

export default App;
