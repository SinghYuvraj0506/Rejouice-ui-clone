import React from 'react'
import "./Page3.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Page3 = () => {
  useGSAP(() => {
    gsap.from("#page3 h2",{
      y:"30",
      stagger:0.1,
      duration:1,
      opacity:0,
      delay:1,
      scrollTrigger:{
        trigger:"#page3",
        scroller:".main_wrapper_div",
        scrub:2
      }
    })
  });

  return (
    <div className='page3_wrapper' id="page3">
        <p>Agency &amp; Venture <span>Models</span> </p>
        <h2>Explore our services </h2>
        <h2>and engagement models</h2>
    </div>
  )
}

export default Page3