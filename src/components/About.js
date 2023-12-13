import React from 'react';
import about from '../assets/images/about.png'
import img1 from '../assets/images/image 4sdfs.png'
export default function About(){
return(
    < >

<div className='acolor'>
         <br />
         
     <h1 className='mx-5 ab skillhead fw-bold '> About Pinpoint</h1>
     <div className="my-5 container">
      <div className='my-3 row'>
        <div className="justify-content-center text-center col-lg-12 col-md-6 col-sm-6">
        <img id='aboutimg' src={img1} alt="h22ee" />
        <p className='my-5 ab'>Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features.

We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more secure with the live tracking system</p>
        </div>
        </div>
        </div>   
        </div>

    </>
)


}