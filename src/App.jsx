import gsap from "gsap";
import "./App.css";
import Page1 from "./Pages/Page1";
import Page10 from "./Pages/Page10";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier:2
    });
  }, []);

  return (
    <>
      <div className="main_wrapper_div" ref={scrollRef} data-scroll-container>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
      </div>
    </>
  );
}

export default App;
