
import { createContext, useEffect, useState, useContext } from "react";


export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        try{
            const productoEnLocalStorage = localStorage.getItem('cartProducts')
            return productoEnLocalStorage ? JSON.parse (productoEnLocalStorage) : [];
        } catch (error) {
            return [];
        }


    })
    
    useEffect(() => {
       localStorage.setItem('cartProducts', JSON.stringify(cartItems))
       console.log(cartItems)
    }, [cartItems])

    const addItemToCart = (Products) => {
        const inCart = cartItems.find(
            (ProductsInCart) => ProductsInCart.id === Products.id)
            
        if(inCart){
            setCartItems(
                cartItems.map((ProductsInCart) => {
                    if (ProductsInCart.id === Products.id) {
                        return {...inCart, amount: inCart.amount + 1 };
                    } else return ProductsInCart;
                })
            );
        } else {
            setCartItems([...cartItems, {...Products, amount: 1}])
            
        }
        }
        const deleteItemToCart = (Products) => {
            const inCart = cartItems.find(
                (ProductsInCart) => ProductsInCart.id === Products.id
                );

                if(inCart.amount === 1 ){
                    setCartItems(
                        cartItems.filter((ProductsInCart) => ProductsInCart.id !== Products.id)
                    )
                }

                else {
                    setCartItems(
                    cartItems.map((ProductsInCart) => {
                        if (ProductsInCart.id === Products.id){
                        return {...inCart, amount: inCart.amount - 1 };
                    } else return ProductsInCart;
                }))
        }
    }

        return (
            <CartContext.Provider value ={{cartItems, addItemToCart, deleteItemToCart}}>
                {children}
            </CartContext.Provider>
        )   
    };


