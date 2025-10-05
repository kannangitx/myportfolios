import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Intro from './Intro/intro';
import About from './about/About';
import Skill from './skill/Skill';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Loader from './loader/Loader'; // Import the Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., data fetching or initial setup)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust this time based on your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <Intro />
          <About />
          <Skill />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
