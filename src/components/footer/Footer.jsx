import React from 'react'
import './footer.css'
import {FaFacebook} from'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook"><FaFacebook/></a>
        <a href="https://instagram"><FaInstagram/></a>
        <a href="https://twitter"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;My Portfolio - All rights are reserved</small>
      </div>
    </footer>
  )
}

export default footer
