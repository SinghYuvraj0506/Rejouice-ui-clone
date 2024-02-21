import React, { useEffect } from "react";
import "./Page1.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page1 = () => {
  useEffect(() => {
    const doc = document.querySelector(".page1_contents");
    const cursor = document.querySelector(".cursor_page1");

    doc.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
      });
    });

    doc.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });

    doc.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });

    return () => {
      doc.removeEventListener("mousemove", (e) => {
        gsap.to(cursor, {
          x: e.x,
          y: e.y,
        });
      });
      doc.removeEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
        });
      });

      doc.removeEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
        });
      });
    };
  }, []);


  useGSAP(() => {
    let t1 = gsap.timeline()

    t1.from("#loader h3",{
      x:"40",
      opacity:0,
      duration:1,
      stagger:0.2,
      delay:1
    })

    t1.to("#loader h3",{
      x:"-40",
      opacity:0,
      stagger:0.1,
      duration:1
    })

    t1.to("#loader",{
      opacity:0
    })

    t1.from(".page1_contents h1 span",{
      y:80,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      delay:-0.5
    })

    t1.to("#loader",{
      display:"none"
    })
   
  }, [])
  

  return (
    <>
      <div id="loader">
        <h3>Tommorrow's</h3>
        <h3>Brands,</h3>
        <h3>Today.™️</h3>
      </div>

      <div className="page_1_wrapper" data-scroll-section>
        <video src="/main.mp4" autoPlay muted loop></video>

        {/* cursor */}
        {window.screen.width > 600 && <div className="cursor_page1">
          <h5>Play Reel</h5>
        </div>}

        <div className="page1_contents">
          {/* NAVBAR */}
          <nav className="navbar_wrapper">
            <h2>The Venture Agency.</h2>
            <h4>Menu</h4>
          </nav>

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
        </div>
      </div>
    </>
  );
};

export default Page1;
