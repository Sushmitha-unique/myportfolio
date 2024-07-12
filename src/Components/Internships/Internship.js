import React from 'react'
import "./Internship.css"
const Internship = () => {
  const handleclick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div>
      <div className='internship'>
        <h1 className='internshiph1'>Internship:</h1>
        <div className='internshipflex'>
         <div className='techynerves' onClick={()=>handleclick('https://drive.google.com/file/d/1U_jYTttjtSlAaCRwROf38ptOg1AO0TyB/view?usp=sharing')}>
            <h2><i>TechyNerves</i></h2>
            <h3>EMP ID:2023 022</h3>
            <h3>Software Developer Intern(Remote)</h3>
            <h3>25th-sep-2023 to 29th-march-2024</h3>
         </div>
         <div className='gangaaram'>
         <h2><i>Gangaaram Technologies</i></h2>
            <h3>Web development Intern</h3>
            <h3>27th-may-2024 to 17th-july-2024</h3>
            <h3>Onsite</h3>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Internship
