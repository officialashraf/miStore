import React from 'react'
import '../Style/HotAccessoriesMenu.css'
import {Link} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
         <Link className='HotAccessorieslink' to='/music'> Music Store</Link>
         <Link className='HotAccessorieslink' to='/smartDevice'> Smart Devices </Link>
         <Link className='HotAccessorieslink' to='/home'> Home</Link>
         <Link className='HotAccessorieslink' to='/lifestyle'>LifeStyle</Link>
         <Link className='HotAccessorieslink' to='/mobile'> Mobile Accessories</Link>      
    </div>
  )
}

export default HotAccessoriesMenu