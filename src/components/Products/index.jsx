import React, { useContext } from 'react'
import styles from './styles.module.css'
import { ProductsData } from '../../Data/ProductsData'
import { CartContext } from '../../Context/CartContext'
import ItemListContainer from '../../components/ItemListContainer/index'

const Products = () => {
  
  const {addItemToCart} = useContext(CartContext)
  
  
  return (
    <div className={styles.productsCon}>
      {ProductsData.map((Products) => (
        <div className={styles.products}>
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