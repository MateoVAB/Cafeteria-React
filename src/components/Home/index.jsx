import React from 'react'
import { CartProvider } from '../../Context/CartContext'
import Cart from '../Cart'
import CartWidget from '../CartWidget'
import Products from '../Products'
import estilos from './estilos.module.css'

export const Home  = () => {
  return (
    <div className={estilos.home}>
    <CartProvider>
         
    </CartProvider>
    </div>
  )
}


export default Home