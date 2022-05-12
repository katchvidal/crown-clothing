import { createContext, useEffect, useState } from "react";


//  Helper Function
const addCartItem = ( cartItems, productToAdd ) => {
    // find if cartitems containes products to add 
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id )
    // if found increment quantity
    if (existingCartItem){
        return cartItems.map(( cartItem ) => cartItem.id === productToAdd.id ? 
            { ...cartItem, quantity : cartItem.quantity + 1 } : cartItem
        )
    }
    // return new array of cart items / new cart item
    return [...cartItems, {...productToAdd, quantity : 1 }]
}

const removeProductItemToCart = ( cartItems, productToRemove ) => {
    //  Verificar si el producto existe en el carrito
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id )

    if ( existingCartItem.quantity === 1 ){
        //  Si la cantidad es = 1 significa que quedaria 0 asi que regresa un nuevo arreglo excluyendo este item para borrarlo
        return cartItems.filter( cartItem => cartItem.id !== productToRemove.id )
    }

    return cartItems.map(( cartItem ) => cartItem.id === productToRemove.id ? 
    { ...cartItem, quantity : cartItem.quantity - 1  } : cartItem)
}

const removeItemCompleteToCart =( cartItems, productToRemove ) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id )

    if( existingCartItem ){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart : () => {},
    clearItemToCart: () => {},
    cartCount : 0,
    cartTotal: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen ] = useState( false )
    const [cartItems, setcartItems] = useState([])
    const [cartCount, setcartCount] = useState(0)
    const [cartTotal, setcartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0)
        setcartCount( newCartCount )
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem ) => total + cartItem.quantity * cartItem.price, 0)
        setcartTotal( newCartTotal )
    }, [cartItems])
    

    const addItemToCart = ( productToAdd ) => {
        setcartItems( addCartItem( cartItems, productToAdd ))
    }

    const removeItemToCart = ( productToRemove ) => {
        setcartItems( removeProductItemToCart(cartItems, productToRemove ))
    }

    const clearItemToCart = ( productToRemove ) => {
        setcartItems( removeItemCompleteToCart( cartItems, productToRemove))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemToCart, cartTotal  }
    return (
        <CartContext.Provider value={value }> { children } </CartContext.Provider>
    )
}

/**
 * funciones:
 * 1.   Add Item to Cart ==> Funcion para agregar items al carrito espera recibir un Producto para Agregarlo
 * 2.   Add Cart Item ==> Funcion ( Helper ) contiene la logica para agregar items al carrito espera recibir CartItems[] y Producto to Add
 *      Verifica si existe dentro del arreglo el producto agregar mediante un find ( id ) 
 *      Si existe significa que intenga agregar un item extra
 *      Si no hace match significa que el carrito esta vacio de ese item y esta intentado agregar uno nuevo
 *      
 * 
 */