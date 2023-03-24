import './navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className="header">
        <Link to='/'>
            {/* <img src={logo} alt="" /> */}
            <h2>VmRanda</h2>
        </Link>
        <ul>
        <Link to='/'>Home</Link>
            <Link to='about' >About us</Link>
            <Link to='services'>Services</Link>
            <Link to='contact' >Contact Us</Link>
        </ul>
    </div>
  )
}

export default Navbar