import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect, useRef } from 'react';
import images from '../image/cont.png';

function About() {
  const [text, setText] = useState("ABOUT ME");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]',./?><0987654321";
  const intervalRef = useRef(null);

  useEffect(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setText(prevText =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return "ABOUT ME"[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      if (iteration >= "ABOUT ME".length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1/7;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="about" id="about1">
      <div className="about-container" data-aos="fade-up">
        
        {/* Left side image */}
        <div className="about-image">
          <img src={images} alt="About" />
        </div>

        {/* Right side content */}
        <div className="about-content">
          <h2 className="about-title">{text}</h2>
          <hr className="about-line" />
          <p className="about-description">
            I am <b>Kamalakannan</b>, a passionate <b>Full Stack Developer</b> and <b>Graphic Designer</b> 
            with a strong background in creating innovative solutions and impactful designs.  
            <br/><br/>
            With expertise in both <b>front-end</b> and <b>back-end development</b>, as well as proficiency 
            in modern design principles and tools, I strive to deliver projects that blend 
            functionality with aesthetics and exceed client expectations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
