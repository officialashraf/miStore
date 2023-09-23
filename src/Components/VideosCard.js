import React from 'react'
import '../Style/VideoCard.css'
import * as Icon from 'react-bootstrap-icons'

const VideosCard = ({name,image}) => {
  return (
    <div className='videoCard' style= {{backgroundImage:`url(${image})`}} >

        <a href='/'><Icon.PlayBtnFill className='icon'/></a>
        <p>{name}</p>
    </div>
  )
}

export default VideosCard