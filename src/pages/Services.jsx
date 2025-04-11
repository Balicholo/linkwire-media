import React from "react";
import "../App.css"; // Import the CSS file for styling
import aboutImage from '../assets/service-img1.png';
import serviceImage from '../assets/service-img2.png';

const Services = () => {
  return (
    <>
    <section id="home-page">
      <div className="filter">
       <div className="home-container">
        <div className="text-container">
          <h1 className="company-name">Our Services</h1>
           <p className="subheadline">
             Expert Services in Intelligence, Crisis Response, and Media Strategy.
           </p>
        </div>
       </div>        
      </div>
    </section>

        <section id="about-section">
          <div className="about-container">
           <div className="about-text-container">
             <div className="about-text">
               <p className="small-text">Crisis Management & Strategic Communications</p>
                <h1 className="main-heading">Anticipate. Respond. Rebuild.</h1>
                <div className="decorative-line"></div>
                <p className="description-text">
                 Your reputation is your most valuable asset — and we’re here to protect it. From crisis preparedness and real-time simulations to AI-driven narrative control and reputation rebuilding, we help you stay ahead of threats and recover with confidence. Our tailored deliverables include crisis playbooks, monitoring dashboards, and strategic response plans to ensure you're always ready
                </p>
                <a href="#" className="read-more-button">
                  <button>Read More</button>
                </a>
             </div>
    
             <div className="about-image-container">
               <img src={aboutImage} alt="About" className="about-image" />
             </div>
    
             <div className="about-text">
               <p className="small-text">Media Intelligence & Narrative Analysis</p>
                <h1 className="main-heading">Control the Story. Shape the Conversation</h1>
                <div className="decorative-line"></div>
                <p className="description-text">
                 Understand, predict, and influence how the media covers you. We provide deep insights into media bias, sentiment, and disinformation trends—helping you stay ahead of narratives and shape public perception. With tools like message testing and audience sentiment analysis, you’ll communicate with impact. Deliverables include media impact reports, risk assessments, and strategic messaging briefs.
                </p>
                <a href="#" className="read-more-button">
                  <button>Read More</button>
                </a>
             </div>
           </div>
    
             <div className="about-text2">
               <p className="small-text">Threatcasting & Strategic Foresight</p>
                <h1 className="main-heading services-page">See Beyond the Horizon. Prepare for the Future</h1>
                <div className="decorative-line2"></div>
                <p className="description-text2">
                  Through our partnership with Threatcasting.ai, we help organizations anticipate and mitigate future threats before they escalate. Using a structured foresight methodology that blends social science, technical research, and expert insights, we develop scenarios that reveal vulnerabilities across governance, media, and security. Our services include scenario planning, threat mapping, and counterstrategy development, with deliverables such as Threatcasting reports, strategic workshops, and risk prevention playbooks.
                </p>
                <a href="#" className="read-more-button">
                  <button>Read More</button>
                </a>
             </div>

             <div className="about-text-container">
             <div className="about-text">
               <p className="small-text">Intelligence & Policy Advisory</p>
                <h1 className="main-heading">Turn Data into Actionable Policy.</h1>
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
               <img src={serviceImage} alt="About" className="about-image" />
             </div>
    
             <div className="about-text">
               <p className="small-text">Digital Investigations & Cyber Threat Intelligence</p>
                <h1 className="main-heading">Uncover Hidden Threats. Secure Your Digital Operations.</h1>
                <div className="decorative-line"></div>
                <p className="description-text">
                 Cyber threats evolve quickly, and we help you stay ahead of the curve. Our services include detecting misinformation and deepfake threats, monitoring the dark web for emerging risks, and providing cybersecurity awareness training. With tailored threat intelligence reports and disinformation tracking, we empower your team to navigate the digital landscape safely and proactively. Deliverables include cyber threat reports, disinformation tracking, and cybersecurity training.
                </p>
                <a href="#" className="read-more-button">
                  <button>Read More</button>
                </a>
             </div>
           </div>
          </div>
        </section>
    </>

  );
};

export default Services;