import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import arrow from '../assets/images/Vector.png'
import arrow2 from '../assets/images/teenyicons_left-solid.png'
import image from '../assets/images/image 3.png'
import i2 from '../assets/images/i2.png'
function Carousal() {
  return (
    <div className='text-light'>
      <Carousel
        indicators={false}
        prevIcon={<span className="custom-prev-icon"><img src={arrow2} alt="" /> </span>}
        nextIcon={<span className="custom-next-icon"><img src={arrow} alt="" /></span>}
      >
        <Carousel.Item>
          <img
            className="car d-block mx-auto"
            src={image}
            alt="First slide"
            style={{ width: '60%' }} // Adjust the width as needed
          />
          <Carousel.Caption>
            {/* Your caption content */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="car d-block mx-auto"
            src={i2}
            alt="Second slide"
            style={{ width: '60%' }} // Adjust the width as needed
          />
          <Carousel.Caption>
            {/* Your caption content */}
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
    </div>
  );
}

export default Carousal;
