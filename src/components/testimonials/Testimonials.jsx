import React from 'react'
import './testimonials.css'
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Taha TOUFIK',
    avatar: AVTR2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae rerum non cumque aspernatur neque doloremque nulla, officiis, culpa eum eveniet. Voluptatem labore eveniet quaerat illo officia vitae minus quasi.'
  },
  {
    id: 2,
    name: 'Mohamed TOUFIK',
    avatar: AVTR3,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae rerum non cumque, culpa  . Voluptatem labore eveniet quaerat illo officia vitae minus quasi.'
  },
  {
    id: 3,
    name: 'Yassin TOUFIK',
    avatar: AVTR2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  illo officia vitae minus quasi.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonials.map(({id, name, avatar, review}) => {
            return (
              <SwiperSlide className='testimonial' key={id}>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>  
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials