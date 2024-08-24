export default function Experience(){
    return (
        <>
<section className="experience-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div>
              <h2 className="experience-title">Experience</h2>
            </div>
            <div className="experience-timeline">
              <div className="experience-timeline-item">
                <div className="experience-timeline-icon"></div>
                <div className="experience-timeline-content">
                  <h3>ReactJS</h3>
                  <p>Infolabz IT Services, Ahmedabad</p>
                    <p>Jan 2024 - Apr 2024</p>
                  <p className="summary-hover">During my React.js internship, I gained practical experience in building dynamic and responsive user interfaces,
                                               mastering key components, state management, and hooks. Through hands-on projects, I improved my frontend development skills and worked effectively in a team setting.</p>
                </div>
              </div>
              <div className="experience-timeline-item">
                <div className="experience-timeline-icon"></div>
                <div className="experience-timeline-content">
                  <h3>Web Development</h3>
                  <p>Internshala Trainings, Virtual</p>
                  <p>Oct 2022 - Nov 2022</p>
                  <p className="summary-hover">During my Web Development internship, I gained practical experience in building and maintaining websites
                                                using HTML, CSS, Bootstrap, DBMS, and ReactJS. Through hands-on projects, I improved my web development
                                                skills and collaborated effectively within a team environment.</p>
                </div>
              </div>
              {/* <div className="experience-timeline-item">
                <div className="experience-timeline-icon"></div>
                <div className="experience-timeline-content">
                  <h3>Intern</h3>
                  <p>Company Name, Summer 2017</p>
                  <p className="summary-hover">Assisted in the development of a web application using React, Node.js, and MongoDB.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}