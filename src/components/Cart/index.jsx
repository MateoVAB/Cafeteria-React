import React from 'react'
import './style.module.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext} from '../../Context/CartContext'
import ItemCart from '../ItemCart'

const Cart = () => {
  


  return (
    <h1>Cart</h1>
  )
}

export default Cart