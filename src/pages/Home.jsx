import React from "react";
import "../App.css"; // Import the CSS file for styling
import aboutImage from '../assets/about-image.png';
import greenImage from '../assets/green-image.png';
import ServiceCarousel from "../components/ServiceCarousel";
import DropdownAccordion from '../components/DropdownAccordion';

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

    <section id="green-section">
      <div className="green-container">
        <div className="green-wrapper">
          <div className="green-image-container">
           <img src={greenImage} alt="About" className="green-image" />
          </div>

          <div className="green-text-container">
            <p>
              From crisis management to geopolitical risk analysis, from narrative control to 
              digital investigations, we equip our clients with the tools to anticipate threats, 
              counter misinformation, and drive meaningful change.
            </p>
            <p>
              <i class="ri-ball-pen-line"></i> We don t just respond to crises we prevent them.
            </p>
            <p>
              <i class="ri-ball-pen-line"></i> We don t just analyze risks we neutralize them.
            </p>

            <p>
              <i class="ri-ball-pen-line"></i> We don t just follow narratives we shape them.
            </p>
            <p>
              In a world where information is power, Linkwire puts you in control.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="services-section">
      <div className="services-container">
       <div className="services-wrapper">
        <div className="services-heading">
            <p className="small-text">Our Services</p>
            <h1 className="main-heading">What We Offer</h1>
            <div className="decorative-line2"></div>
        </div>

        <ServiceCarousel />
       </div>
      </div>
    </section>
    <section id="industries-served-section">
      <div className="industries-served-container">
        <div className="industries-served-wrapper">
          <div className="industries-served-heading">
              <p className="small-text">Industries We Serve</p>
              <h1 className="main-heading">We Serve</h1>
              <div className="decorative-line2"></div>
          </div>
          <DropdownAccordion />
        </div>
      </div>
    </section>

    <section id="workshops-section">
     <div className="workshops-container">
      <div className="workshops-wrapper">
         <div className="services-heading workshops-heading">
            <p className="small-text">Explore our workshops</p>
            <h1 className="main-heading">Workshops We Offer</h1>
            <div className="decorative-line2"></div>
        </div>

        <div className="workshops-text-container">
          <div className="row">
            <div className="workshop-card">
              <p className="workshop-heading">OSINT & Digital Surveillance Training</p>
              <p className="workshop-subheading">Learn open source intelligence techniques</p>
            </div>

            <div className="workshop-card">
              <p className="workshop-heading">Crisis Management & Media Training</p>
              <p className="workshop-subheading">Prepare for high pressure media engagements</p>
            </div>

            <div className="workshop-card">
              <p className="workshop-heading">Threatcasting & Strategic Risk Workshops</p>
              <p className="workshop-subheading">Anticipate and prepare for future risks</p>
            </div>

            <div className="workshop-card">
              <p className="workshop-heading">Disinformation & influence Operations</p>
              <p className="workshop-subheading">Identify and counteract digital influence campaigns</p>
            </div>

            <div className="workshop-card">
              <p className="workshop-heading">Cybersecurity Awareness & threat intelligence</p>
              <p className="workshop-subheading">Stay ahead of digital security threats</p>
            </div>

            <div className="workshop-card">
              <p className="workshop-heading">Media Literacy & Fact checking</p>
              <p className="workshop-subheading">Equip journalists to detect and counter misinformation</p>
            </div>
          </div>

        </div>
      </div>
     </div>
    </section>

    <section id="why-choose-us-section">
      <div className="why-choose-us-container">
       <div className="why-choose-us-wrapper">
         <p className="small-text">Why Choose Our Services</p>
         <h1 className="main-heading">Why Linkwire</h1>
         <div className="decorative-line2"></div>

         <div className="why-choose-us-card-container">
          <div className="why-choose-us-card card-1">
            <div className="why-choose-us-card-filter">
             <p className="why-choose-us-card-heading">Africa-Centric Approach</p>
             <p className="why-choose-us-card-subheading">We understand the unique challenges facing African institutions.</p>
            </div>
          </div>

          <div className="why-choose-us-card card-2">
            <div className="why-choose-us-card-filter">
             <p className="why-choose-us-card-heading">Data-Driven Intelligence</p>
             <p className="why-choose-us-card-subheading">Our insights are backed by real-time analytics and AI- driven monitoring.</p>
            </div>
          </div>

          <div className="why-choose-us-card card-3">
            <div className="why-choose-us-card-filter">
             <p className="why-choose-us-card-heading">Rapid Response & Actionable Strategy</p>
             <p className="why-choose-us-card-subheading">Our insights are backed by real-time analytics and AI- driven monitoring.</p>
            </div>
          </div>
         </div>
       </div>
      </div>
    </section>
    </>
  );
};

export default Home;