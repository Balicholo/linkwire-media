import React from "react";
import "../App.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <>
    <section id="home-page">
      <div className="filter">
       <div className="home-container">
        <div className="text-container">
          <p className="welcome-text">WELCOME TO</p>
          <h1 className="company-name">Linkwire Media</h1>
           <p className="subheadline">
             In today’s world, narratives shape power. A crisis can break a business. A single story can shift markets. In an era where 
             misinformation spreads faster than truth, controlling the narrative is not just an advantage—it’s a necessity.
           </p>
           <a href="#" className="get-started-link">
            <button>Get Started</button>
           </a>
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
           <img src="../src/assets/about-image.png" alt="about-img" className="about-image"/>
         </div>

         <div className="ratings-container">
          <div className="rates">
           <h1>20+</h1>
           <p>Years Of Experience</p>            
          </div>

          <div className="rates">
           <h1>100+</h1>
           <p>Projects Completed</p>            
          </div>

          <div className="rates">
           <h1>100%</h1>
           <p>Dedication to Projects</p>            
          </div>

         </div>
       </div>
      </div>
    </section>
    </>
  );
};

export default Home;