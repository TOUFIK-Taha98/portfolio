import React from 'react'
import './formations.css'
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.png"


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const formations = [
  {
    id: 1,
    name: 'H3 Hitema',
    time: '2021-2023',
    avatar: AVTR1,
    review: `
    <b>IT Expert - Web Development</b> <br/>
    <ul>
      <li>Analyze a need, a specification.</li>
      <li>Design architectures</li>
      <li>Develop</li>
      <li>Ensure continuous production, acceptance of the application (test scenario)</li>
      <li>Lead a project and lead a project team</li>
      <li>Work with a complex ecosystem</li>
      <li>Operate a technology watch.</li>
    </ul>
    `
  },
  {
    id: 2,
    name: 'IUT Nancy Charlemagne',
    time: '2020-2021',
    avatar: AVTR2,
    review: `
      <b>Professional License Design-Integration of Web Applications and Services for the Company</b><br/>
      The professional bachelor's degree in IT professions: web applications has the overall objective of training IT specialists specializing in the development, integration and administration of web and/or mobile applications and services. It is aimed at students who have mastered the basics of software development and wish to specialize in web and mobile web technologies.
    `
  }
]

const Formations = () => {
  return (
    <section id="formations">
      <h5>What I</h5>
      <h2>Studied</h2>

      <Swiper className="container formations__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          formations.map(({id, name, time, avatar, review}) => {
            return (
              <SwiperSlide className='testimonial' key={id}>
                <div className="client__avatar">
                  <img src={avatar} alt="formation"/>
                </div>  
                <h5 className='client__name'>{name}</h5>
                <h6>{time}</h6>
                <small className='client__review' dangerouslySetInnerHTML={{__html: review}}></small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Formations