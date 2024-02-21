import React, { useEffect } from "react";
import "./Page6.css";
import gsap from "gsap";

const Page6 = () => {
  useEffect(() => {
    const doc = document.querySelector(".page6_wrapper");
    const cursor = document.querySelector("#cursor_page6");

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

  return (
    <div className="page6_wrapper">
      {window.screen.width > 600 && <div id="cursor_page6">Take One</div>}

      <video src="/ball.webm" autoPlay loop muted></video>
      <svg
        className="abs tl:0 fit transform rotate:-90deg"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="#000"
          stroke-width="0.25"
          fill="none"
          className="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:616 (.in-view):dashoffset:554.4"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="#ffffffc7"
          stroke-width="0.25"
          fill="none"
          className="$$5$$ $$6$$ $$7$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:308 (.in-view):dashoffset:246.4"
        ></circle>
      </svg>
      <svg
        className="abs tl:0 fit transform rotate:0 $$8$$ (.in-view):tween:all,2.8s,easeOutSlow (.in-view):rotate:72deg"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="1" r="1" fill="#fff"></circle>
      </svg>

      <div>
        <h2>4 seats</h2>
        <span>available for 2024</span>
      </div>
    </div>
  );
};

export default Page6;
