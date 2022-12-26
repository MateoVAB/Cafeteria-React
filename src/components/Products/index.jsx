import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import { ProductsData } from '../../Data/ProductsData'
import { CartContext } from '../../Context/CartContext'
import ItemListContainer from '../../components/ItemListContainer/index'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'

const Products = () => {
  
  const {addItemToCart} = useContext(CartContext)
  const [goToCart, setGoToCart] = useState(false)
  
  const onAdd = (quantity) => {
    setGoToCart(true)
  }
  
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
        {
           
           goToCart
             ? <Link to="/CartWidget">Terminar Compra</Link> 
             : <ItemCount initial={1} stock={6} onAdd={onAdd} />

         }
        </div>
      ))}
    </div>
  )
}

export default Products