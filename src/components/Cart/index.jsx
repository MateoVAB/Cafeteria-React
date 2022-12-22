import React from 'react'
import './style.module.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext} from '../../Context/CartContext'
import ItemCart from '../ItemCart'

const Cart = () => {
  
  const { cart, totalPrice } = useCartContext();

  const order ={
    buyer: {
      name:"",
      email:"", 
      phone:"",
      address:"",
    },
    items: cart.map(product => ({ id: product.id, price: product.price, amount: product.amount, name: product.name})),
    total: totalPrice(),
  }
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then (({ id }) => console.log(id))
  }

  if (cart.length === 0) {
    return (
      <>
         <p>No hay elementos en el carrito</p>
         <Link to="/home"></Link>
      
      </>
    )
  }

  return (
    <>
     {
      cart.map(product => <ItemCart key={product.id} product={product} />)
     }
    
    <p>
      total: {totalPrice()}
    </p>
    
    <buttom onClick={handleClick}>Emitir Compra</buttom>  
    
    </>
  )
}

export default Cart