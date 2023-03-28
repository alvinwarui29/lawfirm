import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import About from './../components/about/About';

const about = () => {
  return (
    <div>
    <Navbar/>
    <Hero heading='About Us' text="Learn more about us here" />
    <About/>
    <Footer/>
    </div>
  )
}

export default about