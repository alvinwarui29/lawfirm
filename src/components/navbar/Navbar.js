import './navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className="header">
        <Link>
            VmRanda
        </Link>
        <ul className="nav-menu">
            <Link to='/'>Home</Link>
            <Link to='/about'>About </Link>
            <Link to='/services' >Services</Link>
            <Link to ='/contact'>Contact</Link>
            
        </ul>
        {/* <button>hello</button> */}
    </div>
  )
}

export default Navbar