import React from "react";
import "../App.css"; // Import the CSS file for styling
import Blogs from "../components/Blogs";

const Blog = () => {
  return (
    <>
    <section id="home-page">
      <div className="filter">
       <div className="home-container">
        <div className="text-container">
          <h1 className="company-name">Our Blogs</h1>
           <p className="subheadline">
             Stay Ahead with Expert Perspectives and Thought Leadership.
           </p>
        </div>
       </div>        
      </div>
    </section>
     <section id="blog-section">
      <Blogs />
      <div className="explore-blogs-btn">
        <a href="https://blog-system-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button class="modern-button">Explore More Blogs</button>
        </a>
      </div>
     </section>
    </>

  );
};

export default Blog;