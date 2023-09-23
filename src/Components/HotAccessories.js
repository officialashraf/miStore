import React from 'react'
import '../Style/HotAccessories.css'
import HotItemCard from './HotItemCard.js'
const HotAccessories = ({ music, musicCover,smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <div className='HotAccessories'>
            <div>
                <img src={musicCover || smartDeviceCover || lifeStyleCover || homeCover || mobileAccessoriesCover} alt='Cover' />
            </div>
            <div>

                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} price={item.price} image={item.image} index={index} />
                ))}

                { smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} price={item.price} image={item.image} index={index} />
                ))}

                {home && home.map((item, index) => (
                    <HotItemCard key={item.image} price={item.price} image={item.image} index={index} />
                ))}

                {lifeStyle && lifeStyle.map((item, index) => (
                    <HotItemCard key={item.image} price={item.price} image={item.image} index={index} />
                ))}

                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} price={item.price} image={item.image} index={index} />
                ))}
                 <HotItemCard image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'
               alt='not found'  />
            </div>
        </div>
    )
}

export default HotAccessories