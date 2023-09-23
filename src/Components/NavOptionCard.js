import React from 'react'
import '../Style/NavOptionCard.css'

const NavOptionCard = ({name,price,image,index}) => {
  return (
    <div className="NavCard" >
    <img src={image} alt={`${index} phone`} />
    <p>{name}</p>
    <span>{price}</span>
</div>
  )
}

export default NavOptionCard