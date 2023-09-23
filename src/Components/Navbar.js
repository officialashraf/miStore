import React from 'react'
import '../Style/navbar.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
//import * as hm from '../Data/data.json'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <div className='logo'>
         <Link to='/'>
          <Icon.HouseDoorFill  color='red' size={40} className='logoImage'/>
          {/* <Icon.Mailbox className='logoImage' color='white' size={40}/> */}
         </Link>
         </div>
         <Link className='navlinks' to='/miphones'> Mi Phones</Link>
         <Link className='navlinks' to='/redmiphone'> Redmi Phones </Link>
         <Link className='navlinks' to='/tv'> TV</Link>
         <Link className='navlinks' to='/laptop'> Laptops</Link>
         <Link className='navlinks' to='/lifestyle'> Fitness & Lifestyle</Link>
         <Link className='navlinks' to='/home'> Homes</Link>
         <Link className='navlinks' to='/audio'> Radio</Link>
         <Link className='navlinks' to='/accessories'> Accessories</Link>
          <div className='searchbox'>
            <input type='text' placeholder='Search Products'/>
            <Icon.Search color='gray' size={20} style={{margin:'0px'}}/>
          </div>
        </div>
  
    </>
  )
}

export default Navbar