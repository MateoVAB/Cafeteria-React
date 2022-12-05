import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import estilos from "./estilos.module.css"

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext)
    
    
    return (
    <div className={estilos.cartItem}>
    <img src={item.img} alt={item.name} /> 
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
        </div>
    </div>
    </div>
  )
}

export default ItemCart