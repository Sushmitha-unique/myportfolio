import React from 'react'
import "./Skills.css"
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
const Skills = () => {
  return (
    <div>
      <div className='skills'>
       <div className='skillsleft'>
        <h1 className='skillsh1'>Skills:</h1>
        <p className='skillsp'>HTML  <GoDotFill style={{"marginLeft":"60px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /></p>
        <p className='skillsp'>CSS <GoDotFill style={{"marginLeft":"90px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /></p>
        <p className='skillsp'>JavaScript<GoDotFill style={{"marginLeft":"15px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /><GoDot  className='fill' /><GoDot  className='fill' /></p>
        <p className='skillsp'>React<GoDotFill  style={{"marginLeft":"70px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /><GoDot  className='fill' /><GoDot  className='fill' /></p>
       </div>
       <div className='skillsright'>
        <p className='skillsrp'>Node<GoDotFill style={{"marginLeft":"80px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /><GoDot  className='fill' /><GoDot  className='fill' /></p>
        <p className='skillsrp'>Express<GoDotFill style={{"marginLeft":"50px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /><GoDot  className='fill' /><GoDot  className='fill' /></p>
        <p className='skillsrp'>Mongodb<GoDotFill style={{"marginLeft":"30px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /><GoDot  className='fill' /><GoDot  className='fill' /></p>
        <p className='skillsrp'>Core Java<GoDotFill style={{"marginLeft":"30px"}} className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/>
        <GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDotFill  className='fill'/><GoDot  className='fill' /></p>
       </div>
      </div>
    </div>
  )
}

export default Skills
