/* eslint-disable jsx-a11y/anchor-is-valid */
import hacker from './images/hacker.png';
 import React from 'react';
 
 function Home() {
     const handleDownload = () => {
         // URL of the resume file
         const resumeUrl = '/path/to/your/resume.pdf'; // Adjust the path to where your resume is stored
         const link = document.createElement('a');
         link.href = resumeUrl;
         link.download = 'RakeshKumar_Resume.pdf'; // Desired file name
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
     };
 
     return (
         <section className="section">
             <div className="section-container">
                 <div className="content">
                     <p className="subtitle">Hello</p>
                     <h1 className="title">
                         I'm <span>Rakesh Kumar</span>
                     </h1>
                     <p className="description">
                         As a fresher Frontend Developer proficient in React JS, I bring a solid foundation in
                         web development principles, including component-based architecture and state management.
                         Eager to contribute my enthusiasm and learning to create engaging and user-centric interfaces.
                     </p>
                     <div className="action-btns">
                         <button className="hire-me">Hire Me</button>
                         <button className="download-cv" onClick={handleDownload}>Download CV</button>
                     </div>
                     <div className="social-media">
                         <i className="fa-brands fa-facebook-f"></i>
                         <i className="fa-brands fa-instagram"></i>
                         <i className="fa-brands fa-linkedin-in"></i>
                     </div>
                 </div>
                 <div className="image">
                     <img src={hacker} alt="profile" />
                 </div>
             </div>
         </section>
     );
 }
 
 export default Home;
 