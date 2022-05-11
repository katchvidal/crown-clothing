
import React from 'react'

import Button from '../buttom/button.component'
import './cart-dropdown.style.scss'


export const CartDropDown = () => {

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button> Check Out  </Button>
        </div>
    )
}
