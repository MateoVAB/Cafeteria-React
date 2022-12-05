import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import img1 from '../../images/cart4.svg';
import ItemCart from "../ItemCart";
import estilos from "./estilos.module.css"

 const CartWidget = () => {
    
    const [cartOpen, setCartOpen] = useState(false)
    const [ProductsLength, setProductsLength] = useState(0)

    const { cartItems } = useContext(CartContext)
    
    useEffect(() =>{    
        setProductsLength(
            cartItems.reduce((previus, current) => previus + current.amount, 0)
        )
    }, [cartItems]);

    const precioFinal = cartItems.reduce(
        (previus, current) => previus + current.amount * current.price, 0)
    
    
    return (
        <div className={estilos.cartCon}>
         <div className={estilos.buttonCartCon} onClick={() => {setCartOpen(!cartOpen)}}>
          <div className={estilos.buttonCart}>
                {!cartOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        class="bi bi-cart-fill" 
                        viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        class="bi bi-cart" 
                        viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                )}
            
            </div>

        </div>
        {!cartOpen && 
           <div className={estilos.productsNum}>{ProductsLength}</div>
        }
        {cartItems && cartOpen && (
            <div className={estilos.cart}>
                <h2 className={estilos.titulo}>Tu Carrito</h2>

                {cartItems.length === 0 ? <p className={estilos.cartVacio}>Tu Carrito esta vacio</p> : (
                    <div>{cartItems.map((item, i) => (
                        <ItemCart key={i} item={item} />
                ))}
                </div>

                )} 
                <h2 className={estilos.total}>Total: ${precioFinal}</h2> 
            </div>
        )}
        </div>
    );
};

export default CartWidget;