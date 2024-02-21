import React from "react";
import "./Page2.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page5 = () => {
  useGSAP(() => {
    gsap.from("#page5 h6", {
      y: 70,
      stagger: 0.1,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#page5 h6",
        scroller: ".main_wrapper_div",
        scrub: 2,
      },
    });

    gsap.from("#page5 span", {
      y: "30",
      stagger: 0.1,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#page5",
        scroller: ".main_wrapper_div",
      },
    });
  });

  return (
    <div className="page2_wrapper" id="page5">
      {/* heading */}
      <div className="page2_heading">
        <span>
          We operate on a simple philosophy: <br />
          Quality over quantity.{" "}
        </span>
      </div>

      <div className="page2_content">
        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We collaborate with five
        clients each year.</h6>
        <h6>This allows for intense focus on the</h6>
        <h6>transformation and launch of your brand by our</h6>
        <h6>very best team, which is the only team we have.</h6>
      </div>
    </div>
  );
};

export default Page5;
