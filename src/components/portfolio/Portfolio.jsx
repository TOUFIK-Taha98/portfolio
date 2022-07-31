import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/educateYourself.png'
import IMG5 from '../../assets/discoveryday.png'
import IMG6 from '../../assets/calendar.png'
import IMG7 from '../../assets/udalost.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const portfolios = [
  {
    id : 1,
    image: IMG3,
    title: 'PORTFOLIO',
    stack: 'ReactJS',
    github: 'https://github.com/TOUFIK-Taha98/portfolio'
  },
  {
    id : 2,
    image: IMG2,
    title: 'BLOG Hitema',
    stack: 'VueJS - NodeJS - MongoDB - Express',
    github: 'https://github.com/BLOG-HITEMA'
  },
  {
    id : 3,
    image: IMG1,
    title: 'API Places',
    stack: 'NodeJS - Express - API REST',
    github: 'https://github.com/TOUFIK-Taha98/API-PLACES'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Educate Yourself',
    stack: 'PHP - Laravel',
    github: 'https://github.com/tahathedancer98/EducateYourself'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Discovery day',
    stack: 'PHP - Symfony - Twig',
    github: 'https://github.com/tahathedancer98/JourneeDecouvert'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Calendar',
    stack: 'ReactJS',
    github: 'https://github.com/tahathedancer98/calendrier-reactjs'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Udalost',
    stack: 'VueJS - PHP - Dart - Javascript - CSS',
    github: 'https://github.com/tahathedancer98/udalost'
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <Swiper className="container portfolio__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          portfolios.map(({id, image, title, stack, github, demo}) => {
            return(
              <SwiperSlide className='portfolio' key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <h5>{stack}</h5>
                <div className="portfolio__item-CTA">
                  <a href={github} target="_blank" rel="noreferrer" className='btn'>Github</a>
                </div>
              </SwiperSlide>
            )  
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio