import React from 'react'
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.style.jsx'

const BUTTON_TYPES_CLASES = {
    base: 'base',
    inverted: 'inverted',
    google: 'google'
} 

const getButton = (buttonType = BUTTON_TYPES_CLASES.base ) => (
  {
    [BUTTON_TYPES_CLASES.base]: BaseButton,
    [BUTTON_TYPES_CLASES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASES.inverted]: InvertedButton,
  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
  const CUSTOMBUTTON = getButton( buttonType )
  return (
    <CUSTOMBUTTON {...otherProps}> { children } </CUSTOMBUTTON>
  )
}

export default Button