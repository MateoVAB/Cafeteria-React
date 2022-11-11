import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemCart = ({item}) => {
    const {deleteItemToCart, addToItemToCart} = useContext(CartContext)
    
    const {id} = item;
    
    
    return (<div>
    <img src={item.img} alt={item.name} />
    <div>
        <div>
            <p>{item.name}</p>
            <div>
                <button onClick={() => addToItemToCart(item)}>Agregar</button>
                <button onClick={() => deleteItemToCart(id)}>Eliminar</button>
            </div>
        </div>
        <div>
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