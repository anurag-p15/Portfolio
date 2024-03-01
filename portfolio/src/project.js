import React,{useEffect} from 'react'
import Footer from "./footer";
import {useNavigate} from 'react-router-dom';

function Projects(){
    const navigate = useNavigate();
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Projects';
    });
    return(
        <div>
        <div className="tabs">
      <button className="tab-btn_active" onClick={() => navigate('/')}>About Myself</button>
      <button className="tab-btn" onClick={() => navigate('/projects')}>Projects</button>
  </div>
            <div className="row" style={{borderBottom:"7px solid white",paddingLeft: '5%',paddingTop:'5%', paddingRight:'5%'}}>
                      <div>
                        <h4>My Projects</h4>
                      </div>
                      <div>
                      <p style={{textAlign:"left"}}>
                        Welcome to my Projects Section! Here, you'll find a showcase of some major projects I've built and contributed to. 
                        These represent my journey and expertise in web development up until now. Explore the diverse range of projects 
                        that highlight my skills and dedication to creating meaningful interfaces and websites. Along with all these projects, various technologies 
                        and framework that are been used are also mentioned in each project.
                      </p>
                      </div>
        </div>

        <div className="row" style={{margin:' 2% 5%'}} >
        <div className="project_description">
            <h4>QuizFiesta</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className='row'>
                        <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                            <img src="https://user-images.githubusercontent.com/108535343/285184196-d734e756-c9fa-4fc2-beb5-62b74b56683c.png" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                            <img src="https://user-images.githubusercontent.com/108535343/285184296-570219f5-e4fd-4e3e-81c7-5d45021b8483.png" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className="box" style={{ marginLeft: "5%" }}>
                        <div className="title">
                            <h4>Insights</h4>
                        </div>
                        <div className="info">

                                <p style={{fontSize:'18px'}}>Collaborated in a team of 3 to develop an online quiz website for users belonging to all age groups. The quiz website mainly consisted of 2 parts:
                                    Online Quizzes and Personalized Quizzes. Online Quizzes contains topics from 12 different topics ranging from sports, literature, music, and history.</p>
                                    <p style={{fontSize:'18px'}}>
                                With the help of personalized quizzes, users were given the opportunity to create their quizzes and share them amongst their peers and family. Each registered user in QuizFiesta had his/her quiz attempts stored in the database. This project was built using MERN full-stack, and MongoDB Atlas was used for storage.</p>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>




<div className="row" style={{margin:' 2% 5%'}} >
        <div className="project_description_1">
            <h4>EventHub</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className='row'>
                        <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                        <img src="https://raw.githubusercontent.com/milindnair/EventHub/main/assets/homepage.png" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src="https://raw.githubusercontent.com/milindnair/EventHub/main/assets/createevent.png" style={{ width: '100%', height: 'auto' }} />
            </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className="box" style={{ marginLeft: "5%" }}>
                        <div className="title">
                            <h4>Insights</h4>
                        </div>
                        <div className="info">

                                <p style={{fontSize:'18px'}}>Collaborated in a team of 3 to develop an event creation and management system for college clubs 
                                and councils. The project aimed to streamline college activities by providing a unified platform for event registration.
                                 Clubs could request events and required rooms, subject to approval by designated personnel. Approved events were visible 
                                 to registered users who could participate, provide feedback, and track their involvement. Developed using HTML, CSS, JS, 
                                 Bootstrap, and PHP.
                                </p>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>



<div className="row" style={{margin:' 2% 5%'}} >
        <div className="project_description_2">
            <h4>Sample Student Records</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className='row'>
                    <div className="image" style={{ width: '100%', marginBottom: '5%',marginTop:'5%' }}>
                <img src="https://user-images.githubusercontent.com/108535343/285189443-eeb9686e-cdda-4f37-a342-5667982d75a9.png" style={{ width: '100%', height: 'auto' }} />
            </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className="box" style={{ marginLeft: "5%" }}>
                        <div className="title">
                            <h4>Insights</h4>
                        </div>
                        <div className="info">

                                <p style={{fontSize:'18px'}}>The platform stores essential student information,including course, year of study, field of 
                                study, and more. Teachers can easily search for students based on these parameters, and have the option to delete individual 
                                or groups of student records.
                                </p>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>


            <Footer/>
        </div>
    )
}
export default Projects