/**
 * We have 3 types of button
 * default
 * inverted
 * googe sign in
 */

import React from 'react'
import './button.style.scss'

const BUTTON_TYPES_CLASES = {
    default: 'default',
    inverted: 'inverted',
    google: 'google-sign-in'
} 

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPES_CLASES[buttonType]}`} {...otherProps} > { children } </button>
  )
}

export default Button