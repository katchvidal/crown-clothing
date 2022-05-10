import { Outlet, Link } from "react-router-dom";
import React from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss'


const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={''}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">SHOP</Link>
          <Link to="auth" className="nav-link">AUTH</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;