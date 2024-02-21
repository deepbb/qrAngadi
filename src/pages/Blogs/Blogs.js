// BlogList.js

import React from "react";
import "./Blogs.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const blogs = [
  {
    title: "Getting Started with React",
    date: "February 21, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  {
    title: "CSS Best Practices for Web Development",
    date: "February 15, 2024",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
  },
  {
    title: "JavaScript Fundamentals Every Developer Should Know",
    date: "February 10, 2024",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
  },
  {
    title: "Responsive Design Techniques for Modern Websites",
    date: "February 5, 2024",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  {
    title: "Exploring the Latest Features in HTML5",
    date: "January 30, 2024",
    content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae...",
  },
];

const Blogs = () => {
  return (
    <>
    
    <Navbar></Navbar>
    <div className="blog-list-container">
       
       {/* <h1 className="blog-list-title">Latest Blogs</h1> */}
       {blogs.map((blog, index) => (
         <div key={index} className="blog-card">
           <h2 className="blog-title">{blog.title}</h2>
           <p className="blog-date">{blog.date}</p>
           <p className="blog-content">{blog.content}</p>
           <a href="#" className="read-more-link">
             Read More
           </a>
         </div>
       ))}
      
     </div>
    <Footer></Footer>
    </>
   
  );
};

export default Blogs;
