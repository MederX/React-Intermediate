import React from 'react';
import './BlogCard.css';
const BlogCard = ({ title, description, imageUrl }) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} />
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-description">{description}</p>
        <a href="#!" className="blog-card-button">
          Read More
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
