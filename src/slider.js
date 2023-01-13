import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider()
{
    return(
        <>
          {/* slider section start */}

      <OwlCarousel className='owl-theme mt-2' loop margin={10} items='1' autoplay autoplayTimeout='3000' dots={false}>
        <div class='item'>
          <div className="slider_img">
            <img src={require("./image/one-only-the-palm-3840x2160-dubai-best-hotels-tourism-travel-resort-4601.jpg")} className='img-fluid' alt="" />
          </div>
        </div>
        <div class='item'>

          <div className="slider_img">
            <img src={require("./image/bedroom.jpg")} className='img-fluid' alt="" />
          </div>

        </div>
        <div class='item'>
          <div className="slider_img"><img src={require("./image/sunrise.jpg")} className='img-fluid' alt="" /> </div>

        </div>
        <div class='item'>
          <div className="slider_img"><img src={require("./image/bar.jpg")} className='img-fluid' alt="" /> </div>

        </div>
        <div class='item'>
          <div className="slider_img"><img src={require("./image/royal-food.jpg")} className='img-fluid' alt="" /> </div>

        </div>
        <div class='item'>
          <div className="slider_img"><img src={require("./image/bedroom-2.jpg")} className='img-fluid' alt="" /> </div>

        </div>

      </OwlCarousel>
      {/* slider section end */}
        </>
    )
}
export default Slider