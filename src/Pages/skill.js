import Image from 'react-bootstrap/Image';
import bootstrap from './images/bootstrap.png';
import css from './images/css.png';
import html from './images/html.png';
import react from './images/react.png';
import javascript from './images/js.png';
import { FaCommentDots, FaHandsHelping, FaLightbulb, FaRecycle, FaBrain } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { src: html, title: 'HTML' },
    { src: css, title: 'CSS' },
    { src: bootstrap, title: 'Bootstrap' },
    { src: javascript, title: 'JavaScript' },
    { src: react, title: 'React' }
  ];
  
  const softSkills = [
    { icon: <FaCommentDots />, title: 'Communication' },
    { icon: <FaHandsHelping />, title: 'Teamwork' },
    { icon: <FaLightbulb />, title: 'Problem-solving' },
    { icon: <FaRecycle />, title: 'Adaptability' },
    { icon: <FaBrain />, title: 'Creativity' }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">I Like To Craft Beautiful And Scalable Web Products</p>
        
        <h2 className="skill-title">Technical Skills</h2>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <Image className="skill-image" src={skill.src} roundedCircle />
              <div className="skill-overlay">
                <div className="skill-text">{skill.title}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="skill-title">Soft Skills</h2>
        <div className="skill-container">
          {softSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-text">{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
