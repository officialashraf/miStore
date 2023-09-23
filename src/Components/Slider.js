import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'


const Slider = ({start}) => {
  return (
   <Carousel fade>
    {start.map((item)=>(
         <Carousel.Item>
          <img
          className='d-block w-100'
          src={item}
          alt='First Slide'
          />
         </Carousel.Item>
    ))}
   </Carousel>
  )
}

export default Slider