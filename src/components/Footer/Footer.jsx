import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container-footer ">
          <h3>GET IN TOUCH</h3>
          <p><IoCall style={{ fill: '#ef6603' }} />+91 76192 21922</p>
          <p><IoCall style={{ fill: '#ef6603' }} />+91 89041 72505</p>
          <p><MdEmail style={{ fill: '#ef6603' }} /><a href="/#">admin@amigosbusinesscorp.com</a></p>
          <div className="social-links">
            <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>

          <div className='links'>
            <h1>USEFUL LINK</h1>
            <a href="about.html">About Us</a> <br />
            <a href="story.html">Our Story</a> <br />
            <a href="services.html">Our Services</a> <br />
          </div>

          <div className='stay-updated'>
            <h1>STAY UPDATED</h1>
            <p>Watch here for more information on cources and trainings we conduct.</p>
          </div>

          <div className='contact-us'>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;







