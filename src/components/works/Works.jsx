import React from 'react'
import './works.css'
import AVTR1 from "../../assets/Orange_logo.png"
import AVTR2 from "../../assets/logo-inria.png"


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const works = [
  {
    id: 1,
    name: 'ORANGE ARCUEIL',
    time: '11 months',
    avatar: AVTR1,
    review: `
    <b>Web Developer/Tracker</b> <br/>
    <ul>
      <li>Support the evolution of sites and mobile applications</li>
      <li>Optimization of data stored in BigQuery</li>
      <li>Implement the web tracking</li>
      <li>Use firebase API to achieve a defined goal</li>
    </ul>
    <b>Technologies/Framework used :</b>
    <ul>
      <li>Javascript</li>
      <li>NodeJS - Express</li>
      <li>Google Cloud</li>
      <li>Firebase</li>
      <li>BigQuery</li>
      <li>Cloud functions</li>
    </ul>
    `
  },
  {
    id: 2,
    name: 'LORIA Nancy',
    time: '4 months',
    avatar: AVTR2,
    review: `
      <b>Web Developer</b><br/>
      Development and improvement of the ORAL application, which allows
      teachers to teach foreign languages ​​to students of a playful way.<br/>
      <b>Technologies/Framework used :</b>
      <ul>
        <li>Javascript / React.JS</li>
        <li>API Rest / POSTGRESQL</li>
        <li>Material UI</li>
        <li>Yarn / Docker</li>
        <li>Git</li>
      </ul>
      
    `
  }
]

const Works = () => {
  return (
    <section id="works">
      <h5>Where I</h5>
      <h2>Worked</h2>

      <Swiper className="container works__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          works.map(({id, name, time,  avatar, review}) => {
            return (
              <SwiperSlide className='Wwork' key={id}>
                <div className="work__avatar">
                  <img src={avatar} alt="work"/>
                </div>  
                <h5 className='work__name'>{name}</h5>
                <h6>{time}</h6>
                <small className='work__review' dangerouslySetInnerHTML={{__html: review}}></small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Works