import React from 'react'
import './about.css'
import advocate from '../../assets/advocate.jpg'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="about">
        <div className="left">
            <h3>Who are we?</h3>
            <p> we are a team of experienced attorneys who are dedicated to providing our clients with high-quality legal services. Our firm is comprised of skilled professionals who have a deep understanding of the law and a commitment to achieving the best possible results for our clients. </p>
            <Link className='btn'>CONTACT</Link>

        </div>
        <div className="right">

        </div>
    </div>
  )
}

export default About