import React from 'react'

import logo from '../images/logo.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' alt="logo" src={logo} />
    <h2 className='navTitle'> Crypto Sphere </h2>
    </div>
  )
}

export default Navbar
