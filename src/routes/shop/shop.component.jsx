
import React, { useContext } from 'react'
import { ProductCard } from '../../components/product-card/product-card.component';
import { ProductsContext } from '../../context/product.context'
import './shop.style.scss'

export const Shop = () => {
    const { products } = useContext( ProductsContext )
  return (
    <div className='products-container'>
       {
           products.map( product => 
                <ProductCard key={product.id} product={ product } />
            )
       }
    </div>
  )
}
