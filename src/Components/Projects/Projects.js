import React from 'react'
import "./Projects.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import swiper1 from "../../Asserts/gtwebsite.png"
import swiper2 from "../../Asserts/chaiwala.png"
import swiper3 from "../../Asserts/ecommerce.png"
import swiper4 from "../../Asserts/pharmacy.png"
import swiper5 from "../../Asserts/ryor.png"

const Projects = () => {
  const handleSlideClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className='projects'>
         <div className='projectflex'>
        <h1 className='projectsh1'>Projects:</h1>
        </div> 
         <div className='projectright'>
         <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop interval={3000}>
      
      <div onClick={() => handleSlideClick('https://chaiwala-seven.vercel.app/')}>
       <img  className='swiperproject'   src={swiper2} alt="Slide 1" />
      </div>
      <div onClick={() => handleSlideClick('https://gtcomplete.vercel.app/')}>
        <img  className='swiperproject'   src={swiper1} alt="Slide 2" />
      </div>
      <div onClick={() => handleSlideClick('https://e-commercewebsite-sushmitha-uniques-projects.vercel.app/')}>
        <img className='swiperproject'  src={swiper3} alt="Slide 3" />
      </div>
      <div onClick={() => handleSlideClick('https://github.com/Sushmitha-unique/need-some-contribution')}>
        <img  className='swiperproject'    src={swiper4} alt="Slide 4" />
      </div>
      <div onClick={() => handleSlideClick('https://dainty-kataifi-2fd965.netlify.app/')}>
        <img   className='swiperproject'    src={swiper5} alt="Slide 5" />
      </div>
    </Carousel>
         </div>
      </div>
    </div>
  )
}

export default Projects