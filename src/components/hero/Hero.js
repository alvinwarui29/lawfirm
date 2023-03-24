import './hero.css';
import React from 'react';
import hero from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img src={hero} alt="" className='into-img' />
    </div>
      
      <div className="left-h">
          <img src={logo} alt="" className='logo'/>
      </div>
      <div className="right-h">
        <h1>VmRanda advocates and co. Truth and justice</h1>
        <p>Compassionate Counsel. Aggressive Advocacy.</p>
        <Link className='btn' to='/about'>About us</Link>
        <Link className='btn contact' to='/about'>Contact Us</Link>

      </div>
      </div>
    
  )
}

export default Hero