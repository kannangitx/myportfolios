import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar.jsx';
import Intro from './component/Intro.jsx';
import About from './component/About.jsx';
import Skill from './component/Skill.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';
import Loader from './component/Loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <section id="intro"><Intro /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skill /></section>
          <section id="projects"><div>Projects Section</div></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
