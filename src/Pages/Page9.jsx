import React from 'react'
import "./Page3.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page9 = () => {
  useGSAP(() => {
    gsap.from("#page9 h2",{
      y:"30",
      stagger:0.1,
      duration:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:"#page9",
        scroller:".main_wrapper_div",
        scrub:2
      }
    })
  });

  return (
    <div className='page3_wrapper' id='page9'>
        <p>We’re uniquely built</p>
        <h2>Meet your team </h2>
    </div>
  )
}

export default Page9