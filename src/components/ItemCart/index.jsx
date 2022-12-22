import React from 'react'

import { useCartContext } from '../../Context/CartContext'
import estilos from "./estilos.module.css"
import Cart from '../Cart'
import { Link } from 'react-router-dom'


const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useCartContext
    const compra = (
    <div>
        <Link to="/Formulario"><p>Emitir Compra</p></Link>
    </div>
   )
    
    
    return (
    <div className={estilos.cartItem}>
    <img src={item.img} alt={item.name}/> 
    <div className={estilos.dataCon}>
        <div className={estilos.left}>
            <p>{item.name}</p>
            <div className={estilos.buttons}>
                <button onClick={() => addItemToCart(item)}>Agregar</button>
                <button onClick={() => deleteItemToCart(item)}>Eliminar</button>
                
            </div>
        </div>
        <div className={estilos.right}>
            
            <div>
                {item.amount}
                <p>Total: ${item.amount * item.price}</p>
            </div>
            <div className={estilos.compra}>
                 {compra}
            </div>
             </div>
        </div>
    </div>
    
    
    
  )

}

export default ItemCart