import './navbar.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {FaBars,FaTimes} from 'react-icons/fa';
const Navbar = () => {
    const[click,Setclick] =useState(false);
    const handleClick = () => Setclick(!click);
  return (
    <div className='header'>
        <Link to='/'>
            VmRanda
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu" }>
            <Link to='/'>Home</Link>
            <Link to='/about'>About </Link>
            <Link to='/services' >Services</Link>
            <Link to ='/contact'>Contact</Link>
            
        </ul>
        {/* <button>hello</button> */}
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size="20"/>) :(<FaBars size="20"/>) }
        
        
        </div>
    </div>
  )
}

export default Navbar