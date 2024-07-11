import React from 'react'
import "./About.css"
import Aboutvideo from "../../Asserts/About.mp4"
const About = () => {
  return (
    <div>
      <div className='about'>
        <div className='aboutleft'>
        <video src={Aboutvideo} autoPlay loop muted className='aboutvideo' />
        </div>
        <div className='aboutright'>
        <h1 className='aboutrighth1'>About Me:</h1>
        <p className='aboutrightp'>
            <ul type='square'>
                <li>Hello! I'm <i>Sushmitha Bujjireddy</i>, a passionate Full-Stack Web Developer with a background in Computer Engineering.</li>
                <li>I hold a degree in Information technology in an year and have honed my skills in JavaScript, React, and Node.js through hands-on projects and coursework. </li>
                <li>With over more than a years of experience in developing scalable web applications, I have successfully delivered projects that enhance user experience and drive business growth.</li>
                <li> I thrive in dynamic environments where creativity and innovation are valued, and I am committed to continuous learning and improvement.</li>
                <li>Beyond coding, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects.</li>
                <li> My goal is to leverage my skills in web development to create impactful solutions and contribute to cutting-edge projects in your team.</li>
                <li><i>Let's connect and discuss how I can contribute to your next big idea!</i></li>
            </ul>
</p>
        </div>
      </div>
    </div>
  )
}

export default About
