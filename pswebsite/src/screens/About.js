import React from 'react'
import { Link } from "react-router-dom";
import './About.css';

const About = () => {
  return (
    <>
    <section className="about" id='about'>
        <div className="maincontainer">
        <div className="container1">     
        <div className="box1">
          <p className='font'>Seek efficient resolution <br /> for managing multiple cases</p>
          <div className="boxbutton">
          <button>
            SignUp
            <span className='icon'><i class="fa-solid fa-arrow-right"></i></span>
          </button>
          </div>
        </div>
        <div className="box2">
          <p className='font'>Access your case data <br />and track your case <br />status</p>
          <div className="boxbutton">
          <Link to="/login"><button>
            Login
            <span className='icon'><i class="fa-solid fa-arrow-right"></i></span>
          </button></Link>
          </div>
        </div>
        </div>
        <div className="container2">
        <div className="vision">
          <h2>VISION</h2>
          <p >NYAAYA envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>
        </div>
        <div className="vision">
          <h2>MISSION</h2>
          <p >NYAAYA envisions a future where case management is synonymous with efficiency, transparency, and positive outcomes. This suggests a commitment to ongoing improvement and innovation in the field of legal case management.</p>

        </div>
        </div>
        </div>
      </section>
    <section className="about2" >
        <div className="aboutpage">
          <h2>ABOUT</h2>
          <p>At NYAAYA, we understand the complexities and challenges that come with case management.<br/>
          Whether you're an individual seeking efficient resolution for a personal matter or a proffessional <br/>managing multiple cases , our e-portal is designed to streamline the entire process.  </p>
        </div>
        <div className="aboutpage">
          <h2>Why NYAAYA?</h2>
          <p >We believe that powerful tools should also be simple to use, NYAAYA boastsan intuitive interface that <br/>
          allows you to effortlessly manage and track your cases , giving you more time to focus on what <br/>
          matters most.</p>
        </div>
        
      </section>
      </>
  )
}

export default About