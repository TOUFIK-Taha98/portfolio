import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Google CLOUD</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CRUD Data on BigQuery</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a cloud functions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trigger functions on a specific date</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use Node JS to get data from firebase API</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Improve code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Find a solution for a specific problem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CRUD Operations.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a Front App with React OR Vue.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create an API with NodeJS And Express.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Secure API's with Middlewares and JWT Token.</p>
            </li>
          </ul>
        </article>
        {/*End OF Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Deployment</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deploy an API Rest</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deploy a SPA (Single Page Application) created with REACT OR VUE</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hosting on Firebase</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Domains on Google Domains</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services