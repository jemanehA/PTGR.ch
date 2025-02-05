import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../assets/blogs.json';
import '../styles/Blogs.css';

const Blogs = () => {
  return (
    <div className="container blogs-container">
      <h1 className="neon-text">PTGR AG Crypto Insights</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4">
            <div className="blog-card h-100">
              <div className="card-image-container">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="card-image"
                />
                <div className="gradient-overlay"></div>
              </div>
              <div className="card-content">
                <div className="meta-info">
                  {/* Display the first category from the array */}
                  <span className="category-badge">
                    {blog.categories[0]}
                  </span>
                  {/* Use the readingTime from the JSON */}
                  <span className="read-time">{blog.readingTime}</span>
                </div>
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-excerpt">{blog.excerpt}</p>
                <Link to={`/blog/${blog.slug}`} className="card-button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;