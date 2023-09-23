import React from 'react'
import '../Style/ProductRewies.css'
import ProductCard from './ProductCard.js'

const ProductRewies = ({productRewies}) => {
  return (
    <div className='ProductReview'>
        {productRewies.map((item,index)=>(
            <ProductCard 
            key={item.image} image={item.image} price={item.price} name={item.name} review={item.review} index={index} />
        ))} 
    </div>
  )
}

export default ProductRewies