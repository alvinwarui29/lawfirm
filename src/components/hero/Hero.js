import './hero.css';
import React from 'react';
import hero from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'

const Hero = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img src={hero} alt="" className='into-img' />
    </div>
      <div className="left-h">
          <img src={logo} alt="" />
      </div>
      <div className="right-h"></div>
    </div>
  )
}

export default Hero