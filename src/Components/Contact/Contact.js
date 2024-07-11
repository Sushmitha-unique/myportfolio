import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
const Contact = () =>{
    const file = "https://drive.google.com/file/d/1crPpRuEoVeF0Bw6e-CZXL2JKUjNdxuB2/view";
    const linkedin="https://www.linkedin.com/in/sushmitha-bujjireddy/";
    const github="https://github.com/Sushmitha-unique";
    const leetcode="https://leetcode.com/u/Sushmithabujjireddy/";
    const youtube="https://www.youtube.com/channel/UCYCiWx7GPqlo4bTjW9aIfGQ"
    return(
        <div className="footer">
            <h1 className="contacth1">Contact:</h1>
        <div className="fooicons">
        <a className='icons' href={linkedin} target='blank'><FaLinkedin /></a>
       <a className='icons' href={github} target='blank'><ImGithub /></a>
       <a className='icons' href={leetcode} target='blank'><SiLeetcode /></a>
       <a className='icons' href={youtube} target='blank'><FaYoutube /></a>
        <div className="contact">
            <h3>Phone no<span>:7093589607</span></h3>
            <h3>Email:sushmithareddy014@gmail.com</h3>
            <p>&copy; Designed by <i>sushmitha Reddy</i></p>
        </div>
        </div> 
       
        </div>
    )
}

export default Contact; 