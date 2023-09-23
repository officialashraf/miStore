import React from 'react'
import '../Style/Videos.css'
import VideosCard from './VideosCard'
const Videos = ({Video}) => {
  return (
    <div className='video'>
    {
        Video.map((item,index)=>(
            <VideosCard key={item.image} index={index} name={item.name} image={item.image}/>
        ))
    }
    </div>
  )
}

export default Videos