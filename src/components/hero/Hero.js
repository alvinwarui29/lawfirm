import './hero.css';
import React, { Component } from 'react';
import hero from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

class Hero extends Component {
  render(){
  return (
    <div className="hero">
      <div className="mask">
        <img src={hero} alt="" className="into-img" />
      </div>
      {/* delete divs */}
      <div className="divs">
      <div className="left-h">
        <img src={logo} alt="" />
      </div>
      <div className="right-h">
        <h1>VmRanda &CO. advocates</h1>
        <p>{this.props.heading}</p>
        <p className="two">{this.props.text}</p>
        <div className="buttons">
          <Link className='btn' to='/about'>Learn more</Link>
          <Link className='btn' to="/contact">Get in Touch</Link>
          </div>
      
    </div>
    </div>
    </div>
    
  )
}}

export default Hero


