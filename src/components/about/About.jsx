import React from 'react'
import './about.css'
import ME from '../../assects/me.jpg'
import {FiAward, FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Abou Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>0 Yeas Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ inCompleted 1+ Completed</small>
            </article>
          </div>

          <p>I am a hardworking, proactive, and responsible individual who takes great pride in my work. With a strong sense of self-criticism, I constantly strive for improvement and excellence. Punctuality is a core value of mine, and I consistently ensure that tasks are completed on time. Moreover, I deeply understand the significance of delivering high-quality work and consistently strive to exceed expectations. My dedication and commitment make me an asset to any team or organization, as I consistently demonstrate my ability to meet and exceed goals. With these qualities, I am confident in my ability to contribute effectively and make a positive impact within any professional environment</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About