import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {VscWorkspaceTrusted} from "react-icons/vsc"
import {AiOutlineComment} from "react-icons/ai"
import {MdOutlineWorkOutline} from "react-icons/md"
import {useState} from 'react'

import {
  Link
} from "react-router-dom";

function Nav() {
  const [activeNav, setActiveNav] = useState('home')
  return (
    <>
    <nav>
          <Link to="/" className={activeNav === 'home' ? 'active':''} onClick={()=>setActiveNav('home')}><AiOutlineHome/></Link>
          <Link to="/about" className={activeNav === 'about' ? 'active':''} onClick={()=>setActiveNav('about')}><AiOutlineUser/></Link>
          <Link to="/experiences" className={activeNav === 'experiences' ? 'active':''} onClick={()=>setActiveNav('experiences')}><BiBook/></Link>
          <Link to="/works" className={activeNav === 'works' ? 'active':''} onClick={()=>setActiveNav('works')}><MdOutlineWorkOutline/></Link>
          <Link to="/services" className={activeNav === 'services' ? 'active':''} onClick={()=>setActiveNav('services')}><RiServiceLine/></Link>
          <Link to="/portfolio" className={activeNav === 'portfolio' ? 'active':''} onClick={()=>setActiveNav('portfolio')}><VscWorkspaceTrusted/></Link>
          <Link to="/formations" className={activeNav === 'formations' ? 'active':''} onClick={()=>setActiveNav('formations')}><AiOutlineComment/></Link>
          <Link to="/contact" className={activeNav === 'contact' ? 'active':''} onClick={()=>setActiveNav('contact')}><BiMessageSquareDetail/></Link>
    </nav>
    </>
  )
}

export default Nav