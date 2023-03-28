import React from 'react'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import abouts from '../assets/abouts.jpg';
import About from '../components/about/About'
import WhyUs from './../components/whyus/WhyUs';


const about = () => {
  return (
    <div>
    <Navbar/>
    <Hero img={abouts} heading='About Us' text="Learn more about us here" />
    <About/>
    <WhyUs/>
    <Footer/>
    </div>
  )
}

export default about