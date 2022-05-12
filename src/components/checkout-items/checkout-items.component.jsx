import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout-items.style.scss'

export const CheckOutItems = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const handleRemoveItem = () => clearItemToCart(cartItem)
    const handleRestItem= () => removeItemToCart( cartItem )
    const handleAddItem= () => addItemToCart( cartItem )

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={ handleRestItem }>  &#10094; </div>
                <span className='value'>
                    {quantity}
                </span>
                <div className='arrow' onClick={ handleAddItem }>  &#10095; </div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={handleRemoveItem}> &#10005; </div>
        </div>
    )
}
