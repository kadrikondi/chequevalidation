import React from 'react'
import Images from './assets/imag/timed.jpg'
import Slide1 from './assets/imag/smile1.jpg'
import Rev from './assets/imag/ch1.jpg'
import {Carousel, Button} from 'react-bootstrap'
import './corousal.css'
import {Link} from 'react-router-dom'


export default function Corousal() {
//   const hero= {
//   width: '100%',
//  padding: '60px 0',
//   overflow: 'hidden',
//   position: 'relative',

  
// }
    return (
        <div >
            <Carousel  >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images}
      alt="First slide"
    />
    <Carousel.Caption className="card-img-overlay d-flex flex-colunm justify-content-start ">
      <div className="p-2">
      <h3 className="text-bold text-white" id="corousals">IT'S TIME FOR THE  BLACKMAN’S REVOLUTION</h3>
      <Link to='/join' className="mt-5" id="btncorousal" ><Button  variant="success" size="lg" className="mt-5" style={{backgroundColor:'#095a24'}} id="btncorousal">Join The Blackman's Revolution</Button></Link> 
       <a  href="https://www.amazon.com/dp/B09GTMJY9Q" target ="_blank"  rel="noreferrer"className="mt-5" id="btncorousal" ><Button variant="succes" size="lg" className="mt-5" style={{backgroundColor:'#095a24',color:'#fff'}} id="btncorousal"  >The Book "Its Time For The Blackman's Revolution"</Button></a> 
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Rev}
      alt="Second slide"
    />

    <Carousel.Caption  className="card-img-overlay  d-flex flex-column justify-content-start">
        <div className=" p-2 text-bold text-white">
      <h3 id="corousals"> WE MUST TAKE ACTION NOW TO AVOID NIGERIA BECOMING A FAILED STATE </h3>
     <Link to='/join' id="btncorousal"><Button variant="success" size="lg">Join The Blackman's Revolution</Button></Link> 
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="Third slide"
    />

    <Carousel.Caption  className=" card-img-overlay d-flex flex-column justify-content-center">
      <div className="p-2 ">
      <h3 id="corousals">JOIN THE VANGUARDS FOR THE BLACKMAN'S REVOLUTION</h3>
   </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




        </div>
    )
}
