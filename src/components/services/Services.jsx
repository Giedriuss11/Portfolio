import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='sevices'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container service__container">
        <article>
          <div className='service'>
            <div className="service__head">
              <h3>Web development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
            </ul>
          </div>
        </article>
        <article>
          <div className='service'>
            <div className="service__head">
            <h3>Web development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
            </ul>
          </div>
        </article>
        <article>
          <div className='service'>
            <div className="service__head">
            <h3>Web development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
              <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                <AiOutlineCheck/> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services