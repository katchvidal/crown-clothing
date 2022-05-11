
import React from 'react'
import Button from '../buttom/button.component'
import './product-card.style.scss'

export const ProductCard = ({ product }) => {
    const {id, name, price, imageUrl } = product
  return (
    <div className='product-card-container'>
        <img src={ imageUrl } alt={ `${ name }` }/>
        <div className='footer'>
            <span className='name'> { name } </span>
            <span className='price'> { price } </span>
        </div>
        <Button buttonType={'inverted'}> Add to Cart </Button>
    </div>
  )
}
