
import React, { useContext } from 'react'
import { CheckOutItems } from '../../components/checkout-items/checkout-items.component'
import { CartContext } from '../../context/cart.context'
import './checkout.style.scss'

export const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span> Product</span>
                </div>
                <div className='header-block'>
                    <span> Description</span>
                </div>
                <div className='header-block'>
                    <span>
                    
                        Quantity
                 
                    </span>
                </div>
                <div className='header-block'>
                    <span> Price</span>
                </div>
                <div className='header-block'>
                    <span> Remove </span>
                </div>
            </div>


            {
                cartItems.map(cartItem => {

                    return (
                        <CheckOutItems key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <span className='total'> Total: ${cartTotal} </span>
        </div>
    )
}
