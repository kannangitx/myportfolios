import React, { useState } from "react";
import "./Skill.css";

const Skill = () => {
  const skills = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Webpack", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Three.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  ];

  const renderMarquee = (reverse = false) => (
    <div className={`marquee ${reverse ? "reverse" : ""}`}>
      <div className="marquee-inner">
        {skills.concat(skills).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // FAQ Section
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is Vertigo?",
      answer:
        "Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project.",
    },
    {
      question: "How can Vertigo benefit my business?",
      answer:
        "Vertigo enhances productivity by providing insights and automation tools that help teams focus on high-impact tasks.",
    },
    {
      question: "Is Vertigo suitable for businesses of all sizes?",
      answer:
        "Yes, Vertigo is scalable and works efficiently for startups, SMEs, and large enterprises alike.",
    },
    {
      question: "Can I integrate Vertigo with other tools we use?",
      answer:
        "Absolutely! Vertigo supports integration with popular tools like Slack, Jira, and Google Workspace.",
    },
    {
      question: "Is my data secure with Vertigo?",
      answer:
        "Security is our top priority — Vertigo uses end-to-end encryption and regular audits to keep your data safe.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Tech Stack</h2>
      {renderMarquee()}
      {renderMarquee(true)}

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">
          FREQUENTLY <span>ASKED</span> <br /> QUESTIONS
        </h2>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
