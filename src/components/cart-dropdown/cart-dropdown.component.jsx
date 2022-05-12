
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom';
import Button from '../buttom/button.component'
import { CartItem } from '../cart-item/cart-item.component'
import './cart-d.style.scss'


export const CartDropDown = () => {
    const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext)
    const navigate = useNavigate()
    const handleClick = () =>  {
        setIsCartOpen(!isCartOpen)
        navigate('checkout');
    }
    return (

            <div className='cart-dropdown-container'>
                <div className='cart-items'>

                    {
                        cartItems.map(( item ) => <CartItem key={ item.id } cartItem={ item } />)
                    }
                </div>
                <Button onClick={ handleClick }> GO TO CHECKOUT  </Button>
            </div>
    )
}
