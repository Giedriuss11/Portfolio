import React from 'react'
import './nav.css'
import {BiHomeHeart, BiUser, BiBook} from 'react-icons/bi'
import {MdPermContactCalendar} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" 
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? "active" : ""}><BiHomeHeart/></a>
      <a href="#about"  
      onClick={() => setActiveNav('#about')}
       className={activeNav === '#about' ? "active" : ""}>
        <BiUser/></a>
      <a href="#experience"
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? "active" : ""}
      ><BiBook/></a>
      <a href="#sevices"
      onClick={() => setActiveNav('#sevices')}
      className={activeNav === '#sevices' ? "active" : ""}
      ><RiServiceLine/></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? "active" : ""}
      ><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav