import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TAHA</a>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tahatoufik/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TOUFIK-Taha98/" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Taha TOUFIK. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer