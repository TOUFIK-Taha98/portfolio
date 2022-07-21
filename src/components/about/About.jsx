import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpeg"
import {FaAward} from "react-icons/fa"
import {FaTools} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article>
              <div className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>+2 Years Working</small>
              </div>
            </article>

            <article>
              <div className="about__card">
                <FaTools className='about__icon'/>
                <h5>Technical Stack</h5>
                <small>MERN</small><br/>
              </div>
            </article>

            <article>
              <div className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projets</h5>
                <small>+3 Completed</small>
              </div>
            </article>
          </div>

          <p>
            A Fullstack developer located in Paris, I have a serious passion for Web Development, user experiences.
            Well-organised person, problem solver with high attention of details. <br/>
            Interested in the entire Front/Back spectrum and working on ambitious projects.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About