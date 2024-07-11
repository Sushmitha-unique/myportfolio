import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Internship from '../Components/Internships/Internship'
import Contact from '../Components/Contact/Contact'
const Homepage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Internship/>
      <Contact/>
    </div>
  )
}

export default Homepage
