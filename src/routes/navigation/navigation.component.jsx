import React, { useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { SignOutpK } from "../../lib/firebase/firebase.lib";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropDown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { LogoContainer, NavigationContainer, NavLinks, NavLink } from './navigation.style';
//import './navigation.style.jsx'

const Navigation = () => {
  const { CurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)


  return (
    <>
      <NavigationContainer>
        <LogoContainer to={''}>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={'shop'}>SHOP</NavLink>
          {
            CurrentUser ? (
              <span className="nav-link" onClick={SignOutpK}> SIGN OUT  </span>
            ) : <NavLink to={'auth'}>AUTH</NavLink>
          }

          <CartIcon />
        </NavLinks>
        {
          isCartOpen && <CartDropDown />
        }

      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;