import React from 'react'
import "./experiece.css"
import {BsPatchCheck} from "react-icons/bs"

const Experiece = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
                              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
                   <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
                  <h4>Redux</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
                     <h4>TypeScript</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheck className='experiece__details-icons'/>
              <div>
                   <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experiece