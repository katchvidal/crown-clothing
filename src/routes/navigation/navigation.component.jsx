import { Outlet, Link } from "react-router-dom";
import React, { useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss'
import { UserContext  } from "../../context/user.context";
import { SignOutpK } from "../../lib/firebase/firebase.lib";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropDown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { CurrentUser } = useContext( UserContext )
  const { isCartOpen } = useContext( CartContext )


  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={''}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">SHOP</Link>
          {
            CurrentUser ? (
              <span className="nav-link" onClick={SignOutpK}> SIGN OUT  </span>
            ) : <Link to="auth" className="nav-link">AUTH</Link>
          }

          <CartIcon />
        </div>
        {
          isCartOpen && <CartDropDown />
        }
       
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;