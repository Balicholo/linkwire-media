import React, { useState } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show success or error messages
  const [isLoading, setIsLoading] = useState(false); // To show the preloader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show the preloader

    // Replace these with your EmailJS credentials
    const serviceID = "service_d4ut4bo";
    const templateID = "template_z9qaeci";
    const publicKey = "BNpDeq7Eg_HVr2UHA"; // Your public key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("SUCCESS");
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
          });
          setIsLoading(false); // Hide the preloader
          setTimeout(() => setStatus(""), 5000); // Clear the success message after 5 seconds
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("ERROR");
          setIsLoading(false); // Hide the preloader
          setTimeout(() => setStatus(""), 5000); // Clear the error message after 5 seconds
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="background-pattern">
        {/* Add SVG or other background elements here if needed */}
      </div>
      {/* Popup overlay for success or error messages */}
      {status && (
        <div className={`popup-overlay ${status === "SUCCESS" ? "success" : "error"}`}>
          <p>{status === "SUCCESS" ? "Your message has been sent successfully!" : "Something went wrong. Please try again."}</p>
        </div>
      )}

      <div className="content-wrapper">
        <h2 className="heading">Let's talk about your project</h2>
        <p className="subheading">We help companies and individuals build out their brand guidelines.</p>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-grid">
              <div>
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <div className="input-wrapper">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <div className="input-wrapper">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <div className="input-wrapper">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div className="full-width">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? "Sending..." : "Let's talk"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
