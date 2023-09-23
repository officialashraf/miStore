import React from 'react'
import'../Style/Prefooter.css'
import '../Style/Footer.css'
import * as Icon from 'react-bootstrap-icons'

const PreFooter = ({footer}) => {
  return (
   <>
    <div className='prefooter'>
       <div>
         <Icon.Repeat/>
         <p><b>Hassle-free replacement</b><br></br> 10-day easy replacement on mi.com</p>
       </div>
       <div><Icon.ShieldFillCheck/><p><b>100% secure payments</b> <br></br> We Support Cards, Wallets,  EMI and COD</p></div>
       <div><Icon.Map/><p><b>Vast Service Network</b><br></br> 1000 Mi service-centers  across 600 cities</p></div>
    </div>
    <div className='prefooter-2'>
        <div>
            <p>LET'S STAY IN TUOCH</p><span>Get Updates on sales specials and more</span>
        </div>
        <div>
            <div>
                <input type='email' name='email' placeholder='Enter Email Address'/>
                <button> <Icon.Arrow90degRight/> </button>
            </div>
            <span>Thanks. You're on email list for spesial offers.</span>
        </div>
        <div>
            <p>FOLLOW UP</p>
            <span>We want to hear from you!</span>
        </div>
        <div><Icon.Facebook/> <Icon.Youtube/> <Icon.Instagram/> <Icon.Twitter/></div>
    </div>
    <div className='footer'>
      <div>
        <p>SUPPORT</p>
        {
            footer.support.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>
            ))
        }
      </div>
      <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>


                  
        </div>
        <div className="footerBorder">
       <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
    
    </div>

   </>
  )
}

export default PreFooter