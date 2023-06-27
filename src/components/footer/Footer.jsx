import React from 'react'
import './footer.css'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Giedrius Ališaukas</a>

      <ul className='permalinks'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#sevices">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_black'><AiFillFacebook/></a>
        <a href="https://instagram.com" target='_black'><AiOutlineInstagram/></a>
        <a href="https://twitter.com" target='_black'><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Giedrius Ališausko. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer