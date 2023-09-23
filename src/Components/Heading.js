import React from 'react'
import '../Style/heading.css'

const Headings = ({text}) => {
  return (
    <div className='headings'>
      <div></div>
      <p>{text}</p>
      <div></div>
    </div>
  )
}

export default Headings