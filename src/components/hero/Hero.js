import './hero.css';
import React from 'react';
import hero from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
    
      <div className="left">
      <img src={logo} alt="" />
      </div>
      <div className="right">
          <div className="content">
          <h1>VmRanda & co advocates.Truth and justice</h1>
          <p>Compassionate Counsel. Aggressive Advocacy.</p>
          <div className="buttons">
          <Link className='btn about' to='/about'>About us</Link>
          <Link className='btn contact' to='/about'>Contact Us</Link>
          </div>
      
          </div>
      </div>
      
    </div>
    
  )
}

export default Hero


// <div className="hero">
//     <div className="mask">
//       <img src={hero} alt="" className='into-img' />
//     </div>
      
      
//           <img src={logo} alt="" className='logo'/>
      
//       <div className="right-h">
//         <h1>VmRanda advocates and co. Truth and justice</h1>
//         <p>Compassionate Counsel. Aggressive Advocacy.</p>
//         <Link className='btn' to='/about'>About us</Link>
//         <Link className='btn contact' to='/about'>Contact Us</Link>

      
//       </div>
//       </div>