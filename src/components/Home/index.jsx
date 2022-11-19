import React from 'react'
import { CartProvider } from '../../Context/CartContext'
import Cart from '../Cart'
import Products from '../Products'
import estilos from './estilos.css'

export const Home  = () => {
  return (
    <CartProvider className={estilos.home}>
         <Cart />
    </CartProvider>
  )
}


export default Home