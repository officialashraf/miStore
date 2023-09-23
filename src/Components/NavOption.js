import React from 'react'
import '../Style/NavOption.css'
import NavOptionCard from './NavOptionCard.js';
import { useEffect, useState } from 'react';

const NavOption = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

        
      
     
        
         return (
             <div className="navOptions"> 
     
                 {miPhones && miPhones.map((item)=>(
     
                      < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                   )) 
                 }
                 
           
                 {redmiPhones && redmiPhones.map((item)=>(
     
                    < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) 
             }
          
     
                 {tv && tv.map((item)=>(
     
                     < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) 
             }
     
                {laptop && laptop.map((item)=>(
     
                   < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) 
             }
          
        
     
                 {fitnessAndLifeStyle && fitnessAndLifeStyle.map((item)=>(
     
                   < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) 
                 }
          
     
                    {home && home.map((item)=>(
     
                        < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                   )) 
                    }
          
          
     
                 {audio && audio.map((item)=>(
     
                  < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                 )) 
                 }
          
     
                 {accessories && accessories.map((item)=>(
     
                     < NavOptionCard name={item.name} price={item.price} image={item.image} key={item.image} />
                  )) 
                 }
          
             </div>
         )
                 }
        

export default NavOption