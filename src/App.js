import React from 'react'
import Homepage from './Pages/Homepage';
// import About from './Components/About/About';
// import Skills from './Components/Skills/Skills';
// import Projects from './Components/Projects/Projects';
// import Internship from './Components/Internships/Internship';
// import Contact from './Components/Contact/Contact';
// import Navbar from './Components/Navbar/Navbar';
// import {Route,Routes} from "react-router-dom";
const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <Routes>
      <Route index path="/" element={<Homepage />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Homepage />
    </div>
  )
}

export default App
