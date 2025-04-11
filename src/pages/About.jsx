import React from "react";
import "../App.css"; // Import the CSS file for styling
import aboutImage from '../assets/about-page.png';

const About = () => {
  return (
    <>
    <section id="home-page">
      <div className="filter">
       <div className="home-container">
        <div className="text-container">
          <h1 className="company-name">About Us</h1>
           <p className="subheadline">
             Protecting Reputations, Shaping Perception, Leading with Insight
           </p>
        </div>
       </div>        
      </div>
    </section>

        <section id="about-section">
          <div className="about-container">
           <div className="about-text-container">
             <div className="about-text">
               <p className="small-text">About Us</p>
                <h1 className="main-heading">Your Frontline Defense</h1>
                <div className="decorative-line"></div>
                <p className="description-text">
                 Linkwire is your frontline defense. We are a strategic intelligence, crisis 
                 management, and media innovation firm helping governments, businesses, 
                 law enforcement, and organizations navigate uncertainty, protect reputations, 
                 and influence public perception.
                </p>
                <a href="#" className="read-more-button">
                  <button>Read More</button>
                </a>
             </div>
    
             <div className="about-image-container">
               <img src={aboutImage} alt="About" className="about-image" />
             </div>
    
             <div className="ratings-container">
              <div className="rates">
               <h1>20+</h1>
               <p>Years Of Experience</p>            
              </div>
    
              <div className="rates">
               <h1>100+</h1>
               <p>Happy Clients</p>            
              </div>
    
              <div className="rates">
               <h1>100%</h1>
               <p>Dedication to Projects</p>            
              </div>
    
             </div>
           </div>
    
             <div className="about-text2">
               <p className="small-text">With AI-powered intelligence</p>
                <h1 className="main-heading">We Shape Events</h1>
                <div className="decorative-line2"></div>
                <p className="description-text2">
                 Linkwire is your frontline defense. We are a strategic intelligence, crisis 
                 management, and media innovation firm helping governments, businesses, 
                 law enforcement, and organizations navigate uncertainty, protect reputations, 
                 and influence public perception.
                </p>
                <a href="#" className="read-more-button">
                  <button>Read More</button>
                </a>
             </div>
          </div>
        </section>
    </>

  );
};

export default About;