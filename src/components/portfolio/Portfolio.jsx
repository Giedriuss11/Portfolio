import React from 'react'
import './portfolio.css'
import IMG1 from "../../assects/portfolio1.jpg"
import IMG2 from "../../assects/portfolio2.jpg"
import IMG3 from "../../assects/portfolio3.jpg"
import IMG4 from "../../assects/portfolio4.jpg"
import IMG5 from "../../assects/portfolio5.png"
import IMG6 from "../../assects/portfolio6.jpg"

const data  = [
  {
    id: 1,
    image: IMG1,
    title: "Now I do not have much to show so I just have some images",
    github: "https://github.com"
  },
  {
    id: 2,
    image: IMG2,
    title: "Now I do not have much to show so I just have some images",
    github: "https://github.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Now I do not have much to show so I just have some images",
    github: "https://github.com"
  },
  {
    id: 4,
    image: IMG4,
    title: "Now I do not have much to show so I just have some images",
    github: "https://github.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "Now I do not have much to show so I just have some images",
    github: "https://github.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "Now I do not have much to show so I just have some images",
    github: "https://github.com"
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='container portfolio__container'>
        {data.map((item, i) => 
        <article className='portfolio__item'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
          <div className="portfolio__item-image">
            <img src={item.image}/>
          </div>
          <h3>{item.title}</h3>
          <a href={item.github} className='btn'>GitHub</a>
        </article>)}
      </div>
    </section>
  )
}

export default Portfolio