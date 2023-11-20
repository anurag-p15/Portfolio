import React,{useEffect} from 'react'
import Navbar from './navbar'
import Footer from './footer'
function Home(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Anurag Pandey:Portfolio';
    });
    return(
        <div>
        <Navbar/>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#e10000',borderRadius:'10vh'}}>
                <div className="text">
                      <div>
                        <h4>Quizzes Covering the World</h4>
                      </div>
                      <div style={{marginTop:'5%'}}>
                        <p style={{textAlign:"left"}}>Explore knowledge across sectors with our quizzes. Elevate skills through engaging questions, 
                        honing critical thinking. Empowering you for a diverse world. Join us to transcend boundaries!</p></div>
                </div>
                <div className="image">
                    <img src="https://www.analyticsinsight.net/wp-content/uploads/2021/05/Brainstorm.jpg" style={{borderRadius:'5vh',marginTop:'10%'}}/>
                </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Home