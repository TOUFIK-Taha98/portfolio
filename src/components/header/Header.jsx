import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/portfolio-logo1.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Taha TOUFIK</h1>
        <h5 className='text-light'>A Junior Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header