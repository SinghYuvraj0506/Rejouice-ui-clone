import React, { useEffect } from "react";
import "./Page2.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page2 = () => {

  useGSAP(() => {
    gsap.from(
      "#page2 h6",
      {
        y: 70,
        stagger: 0.1,
        opacity: 0,
        duration:0.5,
        delay:0.2,
        scrollTrigger:{
          trigger:"#page2 h6",
          scroller:".main_wrapper_div",
          scrub:2
        }
      }
    );

    gsap.from("#page2 span",{
      y:"30",
      stagger:0.1,
      duration:1,
      opacity:0,
      delay:0.5,
      scrollTrigger:{
        trigger:"#page2",
        scroller:".main_wrapper_div",
      }
    })
  });


  return (
    <div className="page2_wrapper" id="page2" data-scroll-section>
      {/* heading */}
      <div className="page2_heading">
        <span>
          Strategy. Design. Development.
          <br />
          Two engagement models.
        </span>
        <span>Paris / San Diego</span>
      </div>

      <div className="page2_content">
        <h6>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a digital brand
          accelerator for fast-
        </h6>{" "}
        <h6>growing companies. Our mission is to transform</h6>
        <h6>founders' visions into remarkable brands. All our</h6>{" "}
        <h6> clients drive their businesses with sustainability at</h6>{" "}
        <h6> the forefront. Choose traditional compensation or</h6>{" "}
        <h6> an equity offset of up to 50% of our fees through</h6>{" "}
        <h6> our Venture Model—your vision, your decision.&nbsp;In</h6>{" "}
        <h6> any case, we are your new unfair advantage.</h6>
      </div>
    </div>
  );
};

export default Page2;
