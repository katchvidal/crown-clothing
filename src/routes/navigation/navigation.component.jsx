import { Outlet, Link } from "react-router-dom";
import React, { useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss'
import { UserContext  } from "../../context/user.context";
import { SignOutpK } from "../../lib/firebase/firebase.lib";

const Navigation = () => {
  const { CurrentUser } = useContext( UserContext )


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
         
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;