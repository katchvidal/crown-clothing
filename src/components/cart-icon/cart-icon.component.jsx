
import React, { useContext } from 'react'
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import './cart-icon.style.scss'

export const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItems, cartCount } = useContext( CartContext )
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={ toggleIsCartOpen }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> { cartCount } </span>
    </div>
  )
}
