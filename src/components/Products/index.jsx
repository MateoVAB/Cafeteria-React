import React, { useContext } from 'react'
import './style.css'
import { ProductsData } from '../../Data/ProductsData'
import { CartContext } from '../../Context/CartContext'

const Products = () => {
  
  const {addItemToCart} = useContext(CartContext)
  
  
  return (
    <div>
      {ProductsData.map((Products) => (
        <div>
          <img src={Products.img} alt={Products.name} />
        <div>
          <p>
             {Products.name} - ${Products.price}
          </p>
        </div>
        <button onClick={() => addItemToCart(Products)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  )
}

export default Products