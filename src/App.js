//import logo from './logo.svg';
import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider'
import data from './Data/data.json'
import Offers from './Components/Offers.js'
import Heading from './Components/Heading.js'
import { Route, Routes } from 'react-router-dom'
import StarProducts from './Components/StarProducts.js';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu.js'
import HotAccessories from './Components/HotAccessories.js';
import ProductRewies from './Components/ProductRewies.js';
import Videos from './Components/Videos.js';
import Banner from './Components/Banner.js';
import PreFooter from './Components/PreFooter';
import NavOption from './Components/NavOption';

function App() {
  return (
    <div className="App">



      <PreNavbar />
      <Navbar />
      
         
      <Routes>
          
          <Route path='/miPhones' element={
            <NavOption miPhones={data.miPhones}  />
          }>
          </Route>
          <Route path='/redmiphone' element={
            <NavOption redmiPhones={data.redmiPhones}  />
          }>
          </Route>
          <Route path='/home' element={
            <NavOption home={data.home}  />
          }>
          </Route>
          <Route path='/lifeStyle' element={
            <NavOption fitnessAndLifeStyle={data.fitnessAndLifeStyle}  />
          }>
          </Route>
          <Route path='/audio' element={
            <NavOption audio={data.audio}  />
          }>
          </Route>
          <Route path='/tv' element={
            <NavOption tv={data.tv}  />
          }>
          </Route>
          <Route path='/laptop' element={
            <NavOption laptop={data.laptop}  />
          }>
          </Route>
          <Route path='/accessories' element={
            <NavOption accessories={data.accessories}  />
          }>
          </Route>
  
        </Routes>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text='STAR PRODUCTS' />
      <StarProducts starProduct={data.starProduct} />
      <Heading text='HOT  ACCESSORIES' />
      <HotAccessoriesMenu />

      <Routes>
          
        <Route path='/music' element={
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        }>
        </Route>
        <Route path='/smartDevice' element={
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        }>
        </Route>
        <Route path='/home' element={
          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
        }>
        </Route>
        <Route path='/lifestyle' element={
          <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
        }>
        </Route>
        <Route path='/mobile' element={
          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
        }>
        </Route>

      </Routes>
      <Heading text='PRODUCT REVIEW' />
      <ProductRewies productRewies={data.productReviews}/>
      <Heading text='VIDEOS' />
      <Videos Video={data.videos}/>
      <Heading text='IN THE PRESS' />
      <Banner banner={data.banner}/>
      <PreFooter footer={data.footer}/>
    </div>
  );
}

export default App;
