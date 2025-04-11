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
             Have a Crisis? A Question? A Mission? Contact Linkwire.
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