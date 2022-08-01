import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

function Experience() {
  const frontend = [
    {title: 'HTML', level: 'Intermediate'},
    {title: 'CSS', level: 'Intermediate'},
    {title: 'Javascript', level: 'Intermediate'},
    {title: 'Bootstrap', level: 'Experienced'},
    {title: 'ReactJS', level: 'Experienced'}
  ];
  const backend = [
    {title: 'Node JS', level: 'Experienced'},
    {title: 'MongoDB', level: 'Experienced'},
    {title: 'API REST', level: 'Experienced'},
    {title: 'JWT', level: 'Experienced'},
    {title: 'Auth guard', level: 'Experienced'},
  ]
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend.map(front => (
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{front.title}</h4>
                  <small className='text-light'>{front.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend.map(back => (
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>{back.title}</h4>
                <small className='text-light'>{back.level}</small>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience