import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='NavbarContainer'>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link>About</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar