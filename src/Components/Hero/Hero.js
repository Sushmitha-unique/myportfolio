import React from 'react'
import "./Hero.css"
import img from "../../Asserts/21121A1215.JPG"
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
const Hero = () => {
    const file = "https://drive.google.com/file/d/1crPpRuEoVeF0Bw6e-CZXL2JKUjNdxuB2/view?usp=sharing";
    const linkedin="https://www.linkedin.com/in/sushmitha-bujjireddy/";
    const github="https://github.com/Sushmitha-unique";
    const leetcode="https://leetcode.com/u/Sushmithabujjireddy/";
    const youtube="https://www.youtube.com/channel/UCYCiWx7GPqlo4bTjW9aIfGQ"
  return (
    <div>
      <div className='hero'>
      <div className='heroleft'>
         <h3 className='herolefth3'>FULL-STACK WEB DEVELOPER</h3>
         <h1 className='herolefth1'>Sushmitha bujjireddy</h1>
         <a className='herolefta' href={file}  download="sushmitha.pdf" target='blank'>Sushmitha_Bujjireddy_Resume</a>
       </div>
       <a className='linkedinimg' href={linkedin} target='blank'><FaLinkedin /></a>
       <a className='gitimg' href={github} target='blank'><ImGithub /></a>
       <a className='leetcodeimg' href={leetcode} target='blank'><SiLeetcode /></a>
       <a className='youtubeimg' href={youtube} target='blank'><FaYoutube /></a>
     <div className='heroright'>
       <img src={img}/>
     </div>
      </div>
    </div>
  )
}

export default Hero
