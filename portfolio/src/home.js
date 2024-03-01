import React, { useEffect } from 'react';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';


function Portfolio() {
    const navigate = useNavigate();

    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Anurag Pandey: Portfolio';
    }, []);

    return (
      <><div className="tabs">
      <button className="tab-btn_active" onClick={() => navigate('/')}>About Myself</button>
      <button className="tab-btn" onClick={() => navigate('/projects')}>Projects</button>
  </div>
  
      <div className="homepage-container">
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <section className="about-section">
                <h2>About Myself</h2>
                <p>
                Computer Engineering Student from K.J. Somaiya College of Engineering. Interest on problem solving and analysing data 
                Also passionate about field of finance and market along with management. An state-level basketball player &#127936; and also love to play badminton &#127934;,cricket &#127951;,football &#9917;.
                </p>
                <p>
                  Also participated at various cultural competitions and inter-school festivals with my school Don Bosco Matunga and won accolades. 
                </p>
                <p>Finalist with my team at Datathon 2024, a Data-Science oriented Hackathon under case study domain.</p>
            </section>
            <section className="education-section">
                <h2>Education</h2>
                <p>
                    Completed my SSC at Don Bosco High School Matunga in 2019, securing 92.8%.
                </p>
                <p>
                    Completed my HSC at Mumbai Junior College of Arts,Sciene and Commerce in 2021, securing 92.18%.
                </p>
                <p>
                    Will be completing my B.Tech in Computer Engineering in 2025 from K.J Somaiya College of Engineering, Vidyavihar along with minor in Finance.
                </p>
            </section>
            <section className="sports-section">
                <h2>Sports and Awards</h2>
                <p>
                Basketball: Represented school and college in various inter-school and inter-college tournaments and played Inter-District State Championships for Mumbai Central District
                </p>
                <p>
                Exemplary Student Award: Best all-round student Award at Don Bosco High School in 2019
                </p>
            </section>
            <section className="skills-section">
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: JavaScript, Python, Java,C</li>
                    <li>Web Development: HTML, CSS, React,MERN,Php,Django</li>
                    <li>Database Management: SQL, MongoDB</li>
                    <li>Other Skills: Problem-solving, Teamwork, Communication</li>
                </ul>
            </section>
            
        </div>
          <Footer />
        </>
    );
}
export default Portfolio;