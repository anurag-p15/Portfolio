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
        <div style={{ margin: '2% 5%', padding: '2% 5%', backgroundColor: '#a80000', borderRadius: '10vh' }}>
    <div>
        <h4>Profile</h4>
    </div>
    <div className="row">
            <div className="image" style={{ width: '100%', marginBottom: '20px' }}>
            <img src="https://media.licdn.com/dms/image/C4D03AQHWaMz8xN5LQg/profile-displayphoto-shrink_800_800/0/1662729843355?e=1706140800&v=beta&t=PANqjm3FcJ9d8DLXuXYw5GN8Ioxun8oYGfMqEQMIiF0" alt="Sample Image" style={{ position: 'absolute', top: '80', right: '15%', width: '100px', height: '100px' }}/>
            </div>
    </div>
    <div className="row" style={{ marginTop: '5%' }}>
      <div className="col-md-6">
        <p className="ribbon">
          <span className="text">Name: Anurag Pandey</span>
        </p>
      </div>
    </div>

    <div className="row" style={{ marginTop: '2%' }}>
      <div className="col-md-6">
        <p className="ribbon">
          <span className="text">About Myself</span>
        </p>
      </div>
    </div>
    
    <div className='row'>
        <div className='text' >
            <p style={{textAlign:'left',marginTop:'2%'}}>Computer Engineering Student from K.J. Somaiya College of Engineering. Interest on problem solving and analysing data and website development.
                 Also passionate about field of finance and market along with management. An ardent sports lover, represented my school in various competitions and played Inter-District Championships in Basketball.</p>
        </div>
    </div>

    <div className="row" style={{ marginTop: '2%' }}>
      <div className="col-md-6">
        <p className="ribbon">
          <span className="text"><a href="https://github.com/anurag-p15" style={{textDecoration:'none',color:'black'}}>Click here to see my Github Profile</a></span>
        </p>
      </div>
      <div className="col-md-6">
        <p className="ribbon">
          <span className="text"><a href="https://www.linkedin.com/in/anurag-pandey-10106b241/" style={{textDecoration:'none',color:'black'}}>Click here to see my LinkedIn Profile</a></span>
        </p>
      </div>
    </div>

    <div className="row" style={{ marginTop: '2%' }}>
      <div className="col-md-6">
        <p className="ribbon">
          <span className="text">Languages : Python, Java, C, C++, SQL</span>
        </p>
      </div>
      <div className="col-md-6">
        <p className="ribbon">
          <span className="text">Development : HTML, CSS, Sass(SCSS), Js, Php, MERN</span>
        </p>
      </div>
    </div>


    

    </div>
        <Footer/>
        </div>
    )
}
export default Home