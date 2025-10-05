import './intro.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import video_1 from '../image/herovideo.mp4';
import Typed from "typed.js";

function Intro() {
  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Typing animation
    const typed = new Typed(".typed-text", {
      strings: ["Full Stack Developer", "Graphic Designer", "Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  // Custom cursor follow
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="main">
      <div className="intro">
        {/* Background Video */}
        <video src={video_1} loop autoPlay muted playsInline />

        {/* Text Overlay */}
        <div className="box">
          <div className="box1" data-aos="fade-up">
            KANNAN
            <p><span className="typed-text"></span></p>
            <button className="hero-btn">Know More</button>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      <div className="cursor-dot"></div>
    </div>
  );
}

export default Intro;
