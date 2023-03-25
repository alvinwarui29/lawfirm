import './footer.css';
import React from 'react'
import {FaHome} from 'react-icons/fa';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from './../../../node_modules/react-icons/fa/index.esm';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome style={{color:'#fff',
                    marginRight:'2rem'
                    }} size={20}/>
                    <div>
                        <p>Kayole Junction</p>
                        <p>Junction Plaza</p>
                    </div>
                </div><div className="phone">
                <FaPhone style={{color:'#fff',
                    marginRight:'2rem'
                    }} size={20}/>
                    <p>0743170028</p>
                </div>
                <div className="email">
                <FaMailBulk style={{color:'#fff',
                    marginRight:'2rem'
                    }} size={20}/>
                    <p>info@gmail.com</p>
                </div>
                
            </div>
            <div className="right">
                    <h4>Copyright 2023 VmRanda &co advocates. All Rights Reserved. This website is designed to provide general information only and does not constitute legal advice. Viewing this website or contacting us through it does not create an attorney-client relationship. If you need legal advice, please contact us to schedule a consultation.
                    </h4>
                    <div className="socials">
                    <FaFacebook style={{color:'#fff',
                    marginRight:'1rem'
                    }} size={30}/>
                    <FaTwitter style={{color:'#fff',
                    marginRight:'1rem'
                    }} size={30}/>
                    <FaLinkedin style={{color:'#fff',
                    marginRight:'1rem'
                    }} size={30}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer