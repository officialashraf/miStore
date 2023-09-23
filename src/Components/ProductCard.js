import React from 'react'
import '../Style/ProductCard.css'

const ProductCard = ({name,price,image,index,review}) => {
  return (
    <div className='ProductCard'>
        <img src={image} alt={`${index} product`}/>
        <h5>{review}</h5>
        <p>{name}</p>
        <b>{price}</b>
    </div>
  )
}

export default ProductCard