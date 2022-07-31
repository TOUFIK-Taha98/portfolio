import React from 'react'
import './index.css'

import Home from "./components/header/Header"
import Menu from "./components/menu/Menu"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Formations from "./components/Formations/Formations"
import Contact from "./components/contact/Contact"
import Works from "./components/works/Works"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"

import {
  Routes,Route
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/formations" element={<Formations/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/experiences" element={<Experience/>}/>
    </Routes>
    <Nav/>
    <Footer/>
    </>
  )
}

export default App