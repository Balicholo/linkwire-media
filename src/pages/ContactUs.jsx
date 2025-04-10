import React from "react";
import "../App.css"; // Import the CSS file for styling
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
    <section id="home-page">
      <div className="filter">
       <div className="home-container">
        <div className="text-container">
          <h1 className="company-name">Contact Us</h1>
           <p className="subheadline">
             In today’s world, narratives shape power. A crisis can break a business. A single story can shift markets. In an era where 
             misinformation spreads faster than truth, controlling the narrative is not just an advantage—it’s a necessity.
           </p>
        </div>
       </div>        
      </div>
    </section>
     <section id="contact-form">
      <ContactForm />
     </section>
    </>

  );
};

export default ContactUs;