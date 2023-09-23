import React from 'react'
import '../Style/preNavbar.css'
import * as Icon from 'react-bootstrap-icons'
const PreNavbar = () => {
  return (
   <>
    <div className='preNav'>
        <div>
              <a href='/'>MI INDIA</a><span>|</span>
              <a href='/'>GET MI STORE APP</a><span>|</span>
              <a href='/'>ONLINE HELP</a><span>|</span>
              <a href='/'>RETAIL STORE \/ </a><span>|</span>
        </div>
        <div>
              <a href='/'>SIGN IN</a><span>|</span>
              <a href='/'>SIGN UP</a><span>|</span>
              <a href='/'> <Icon.Cart size={20}/> CART <Icon.ArrowBarDown size={20}/> </a>
        </div>
    </div>
  </>)
}

export default PreNavbar