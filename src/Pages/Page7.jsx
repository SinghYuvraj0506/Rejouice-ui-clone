import React from 'react'
import "./Page2.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Page7 = () => {
  useGSAP(() => {
    gsap.from("#page7 h6", {
      y: 70,
      stagger: 0.1,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#page7 h6",
        scroller: ".main_wrapper_div",
        scrub: 2,
      },
    });

    gsap.from("#page7 span", {
      y: "30",
      stagger: 0.1,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#page7",
        scroller: ".main_wrapper_div",
      },
    });
  });

  return (
    <div className='page2_wrapper' id='page7'>

    {/* heading */}
    <div className='page2_heading'>
      <span>Strategy &amp; emotion. <br/>You need both. </span>
    </div>


    <div className="page2_content">
      <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data matters, yet it's the emotion that drives</h6>
      <h6>buying decisions. We don't believe in 'one size fits</h6>
      <h6>all.' Instead, we collaborate closely with our clients</h6>
      <h6>to craft unique brand experiences that deeply</h6>
      <h6>resonate with their audiences and boost their</h6>
      <h6>KPIs. 90% come back for a second project.</h6>
    </div>

    </div>
  )
}

export default Page7