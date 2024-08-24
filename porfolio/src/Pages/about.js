// import './About.css'; // Import your CSS file
// import Header from '../commonpages/header';
import hacker from './images/hacker.png';


export default function About() {
    return (
        <>
            {/* ==== About Section Start Here */}
            {/* <Header /> */}
            <section className='about section'>
                <div className='container'>
                    <div className='row'>
                        <div>
                        <h1>About Me</h1>
                        </div>
                        <summary>I’m a fresh frontend developer with skills in ReactJS. I specialize in building responsive, 
                                user-friendly interfaces. I’m passionate about learning and staying updated with the latest 
                                web development trends. I’m excited to join a team where I can use my skills to create great user 
                                experiences and contribute to the success of the business.
                        </summary>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="part">
                                <div className="about-image">
                                    <img src={hacker} alt="About Image"/>
                                </div>
                                <div className="about-details">
                                    <p><strong>Name:</strong> Patel RakeshKumar</p>
                                    <p><strong>D O B:</strong> April 02, 1998</p>
                                    <p><strong>Address:</strong> Nathaji Dhulaji Ni Chali, Opp. Shankarnagar Gate No.3, Bhilwada, Amraiwadi, Ahmedabad-380026</p>
                                    <p><strong>Email:</strong> <a href="mailto:patelrakeshamar309@gmail.com">patelrakeshamar309@gmail.com</a></p>
                                    <p><strong>Phone:</strong> +91 7819987186</p>
                                </div>
                            </div>
                            
                            <div className='additional-info'>
                                <div className='info-section'>
                                    <h3>Hobbies</h3>
                                    <ul className='info-list'>
                                        <li><i className="fas fa-code"></i><span>Coding</span></li>
                                        <li><i className="fas fa-hiking"></i><span>Hiking</span></li>
                                        <li><i className="fas fa-music"></i><span>Music</span></li>
                                    </ul>
                                </div>
                                <div className='info-section'>
                                    <h3>Languages</h3>
                                    <ul className='info-list'>
                                        <li><i className="fas fa-globe"></i><span>Hindi</span></li>
                                        <li><i className="fas fa-globe"></i><span>Gujarati</span></li>
                                        <li><i className="fas fa-globe"></i><span>English</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
