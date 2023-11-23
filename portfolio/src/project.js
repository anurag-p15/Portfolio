import React,{useEffect} from 'react'
import Navbar from "./navbar";
import Footer from "./footer";

function Projects(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Projects';
    });
    return(
        <div>
            <Navbar/>
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


        <div className="row" style={{ margin: '2% 5%', padding: '2% 5%', backgroundColor: 'rgb(182, 0, 103)', borderRadius: '10vh' }}>
    <div>
        <h4>QuizFiesta</h4>
    </div>
    <div className="col-sm-6">
        <div className='row'>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src="https://user-images.githubusercontent.com/108535343/285184196-d734e756-c9fa-4fc2-beb5-62b74b56683c.png" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src="https://user-images.githubusercontent.com/108535343/285184296-570219f5-e4fd-4e3e-81c7-5d45021b8483.png" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src=" https://user-images.githubusercontent.com/108535343/285184375-76585a58-14ab-4c6f-a915-0c4a8b0303f9.png" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </div>
    <div class="box" style={{ marginLeft: "5%" }}>
        <div className="title">
            <h4>About Project</h4>
        </div>
        <div className="info">
            <ul type="disc">
            <li>Collaborated in a team of 3 to develop an online quiz website for users belonging to all age groups. The quiz website mainly consisted of 2 parts :
              Online Quizzes and Personalized Quizzes. Online Quizzes contains topics from 12 different topics ranging from sports, literature, music and history. 
              With the help of personalized quizzes users were given the opportunity to create their own quizzes and share them amongst their peers and family. 
              Each registered user in QuizFiesta had his/her quiz attempts stored in the database. This project was built using MERN fullstack and MonogDb Atlas was used 
              for storage.
            </li>
            </ul>
        </div>
    </div>
</div>

        <div className="row" style={{ margin: '2% 5%', padding: '2% 5%', backgroundColor: 'rgb(204, 122, 0)', borderRadius: '10vh' }}>
    <div>
        <h4>EventHub</h4>
    </div>
    <div className="col-sm-6">
        <div className='row'>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src="https://raw.githubusercontent.com/milindnair/EventHub/main/assets/homepage.png" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src="https://raw.githubusercontent.com/milindnair/EventHub/main/assets/createevent.png" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </div>
    <div class="box" style={{ marginLeft: "5%" }}>
        <div className="title">
            <h4>About Project</h4>
        </div>
        <div className="info">
            <ul type="disc">
            <li>Collaborated in a team of 3 to develop an event creation and management system for college clubs and councils. 
              The project aimed to streamline college activities by providing a unified platform for event registration. Clubs could request
               events and required rooms, subject to approval by designated personnel. Approved events were visible to registered users who could 
               participate, provide feedback, and track their involvement. Developed using HTML, CSS, JS, Bootstrap, and PHP.</li>
            </ul>
        </div>
    </div>
</div>



<div className="row" style={{ margin: '2% 5%', padding: '2% 5%', backgroundColor: 'rgb(0, 88, 16)', borderRadius: '10vh' }}>
    <div>
        <h4>Sample Student Records</h4>
    </div>
    <div className="col-sm-6">
        <div className='row'>
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
                <img src="https://user-images.githubusercontent.com/108535343/285189443-eeb9686e-cdda-4f37-a342-5667982d75a9.png" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </div>
    <div class="box" style={{ marginLeft: "5%" }}>
        <div className="title">
            <h4>About Project</h4>
        </div>
        <div className="info">
            <ul type="disc">
            <li style={{fontSize:'18px'}}>The platform stores essential student information,including course, year of study, field of study, and more. Teachers can easily search for students based on these parameters, and have the 
              option to delete individual or groups of student records.
            </li>
            </ul>
        </div>
    </div>
</div>


            <Footer/>
        </div>
    )
}
export default Projects