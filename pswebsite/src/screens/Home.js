import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import './Home.css';
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";

const Home = () => {

return <div >
<div className='home w-100' id="Font">
<div className="navbar">
    <Navbar/>
    </div>
    <section>    
    <div id="headline">
    <h1 id="nyaya" >NYAAYA</h1>
    <h2 id="case">CASE MANAGEMENT</h2>
    </div>
    </section>
    <section >
    <div className="buttons"  >
    <Link to="/login" id="first"> <button id="Font">LOGIN</button> </Link> 
        <button id="Font">SIGN UP</button>
    </div>
</section>
<section >
<div className="dropup">
  <button className="dropbtn" id="Font">Select Language</button>
  <div className="dropup-content">
  <button>Assamese</button>
  <button >Bengali</button>
  <button >Bodo</button>
  <button >Dogri</button>
  <button >Gujarati</button>
  <button >Hindi</button>
  <button>Kannada</button>
  <button>Kashmiri</button>
  <button >Konkani</button>
  <button >Maithili</button>
  <button >Malayalam</button>
  <button >Manipuri</button>
  <button >Marathi</button>
  <button >Nepali</button>
  <button>Odhia</button>
  <button >Punjabi</button>
  <button >Sanskrit</button>
  <button >Santali</button>
  <button >Sindhi</button>
  <button>Tamil</button>
  <button >Telugu</button>
  <button >Urdu</button>
  </div>
</div>
</section>

      <About/>
      <Faq/>
      <Contact/>
      
</div>
</div>

}
export default Home;