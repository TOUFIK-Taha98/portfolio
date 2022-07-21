import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'

const portfolios = [
  {
    id : 1,
    image: IMG1,
    title: 'API Places',
    github: 'https://github.com/TOUFIK-Taha98/API-PLACES'
  },
  {
    id : 2,
    image: IMG2,
    title: 'BLOG Hitema',
    github: 'https://github.com/BLOG-HITEMA'
  },
  {
    id : 3,
    image: IMG3,
    title: 'PORTFOLIO',
    github: 'https://github.com/TOUFIK-Taha98/portfolio'
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolios.map(({id, image, title, github, demo}) => {
            return(
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-CTA">
                  <a href={github} target="_blank" rel="noreferrer" className='btn'>Github</a>
                </div>
              </article>
            )  
          })
        }
      </div>
    </section>
  )
}

export default Portfolio