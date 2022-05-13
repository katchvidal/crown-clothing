import './category-item.style.scss'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ category }) => {
    const { title, imageUrl, route  } = category
    const navigate = useNavigate();
    const handleNavigate = () => navigate( route )
  return (
      <>
    <div  className="category-container" onClick={ handleNavigate }>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="category-body-container">
        <h2> { title } </h2>
        <p> Shop Now  </p>
      </div>
    </div>
  </>
  )
}

export default CategoryItem