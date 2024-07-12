import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Internship from '../Components/Internships/Internship'
import Contact from '../Components/Contact/Contact'
import { Element } from 'react-scroll';
const Homepage = () => {
  return (
    <div>
        <Navbar/>
      <Hero/>
      <Element name='about'>
        <About />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='internship'>
        <Internship />
      </Element>
   <Element name='contact'>
      <Contact/>
      </Element>
    </div>
  )
}

export default Homepage
