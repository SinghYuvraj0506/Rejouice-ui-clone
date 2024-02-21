import React from "react";
import "./Page10.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page10 = () => { 

  useGSAP(() => {
    gsap.from("#page10", {
      y:-150,
      opacity: 0.8,
      scrollTrigger: {
        trigger: "#page10",
        scroller: ".main_wrapper_div",
        scrub:true,
      },
    });

    gsap.from("#page10 section h1 span", {
      y: -30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
      delay:1,
      scrollTrigger: {
        trigger: "#page10",
        scroller: ".main_wrapper_div"
      },
    });
  });

  return (
    <div className="page10_wrapper" id="page10"> 
      <div className="page10_heading">
        <div>
          <span>Relax. We've got you.</span>
          <button>Take a seat</button>
        </div>

        <section>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Services & Models</li>
            <li>Conatact</li>
          </ul>

          <ul>
            <li>X↗</li>
            <li>Instagram↗</li>
            <li>LinkedIn↗</li>
          </ul>
        </section>
      </div>

      <section>
        <div className="page10_section">
          <div>
            <span>San Diego—California</span>
            <span>Paris—France</span>
          </div>

          <section>
            <span>biz@rejouice.com</span>
            <span>©2023 legal</span>
          </section>
        </div>

        <h1>
          <span>r</span>
          <span>e</span>
          <span>j</span>
          <span>o</span>
          <span>u</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </h1>
      </section>
    </div>
  );
};

export default Page10;
