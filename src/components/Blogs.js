import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { format, parseISO, isValid } from 'date-fns';
import '../styles/Blogs.css';

const Blogs = ({blogs}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const currentPage = Number(searchParams.get('page')) || 1;
  const selectedCategory = searchParams.get('category') || 'All';
  const itemsPerPage = 6;

  // Simulate fetching data with a delay
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a 500ms delay
    return () => clearTimeout(timer);
  }, [selectedCategory, currentPage]);

  // Filter blogs based on the selected category
  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    navigate(`?page=${newPage}&category=${selectedCategory}`, {
      state: { scrollPos: window.scrollY },
      replace: true
    });
  };

  const handleCategoryChange = (category) => {
    setSearchParams({ page: 1, category }); // Reset to the first page when changing categories
  };

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return isValid(date) ? format(date, 'MMM dd, yyyy') : 'Date unavailable';
  };

  return (
    <div className="container blogs-container">
      <h1>PTGR AG Crypto Insights</h1>

      {/* Category Tabs */}
      {/* <div className="category-tabs">
        <button
          className={`tab ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </button>
        <button
          className={`tab ${selectedCategory === 'News' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('News')}
        >
          News
        </button>
        <button
          className={`tab ${selectedCategory === 'Blogs' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('Blogs')}
        >
          Blogs
        </button>
        <button
          className={`tab ${selectedCategory === 'Insights' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('Insights')}
        >
          Insights
        </button>
      </div> */}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {/* Blog List */}
      {!isLoading && (
        <div className="row">
          {currentBlogs.map((blog) => (
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
                    <span className="category-badge">{blog.category}</span>
                    <div className="date-time">
                      <span className="publish-date">
                        {formatDate(blog.publishedDate)}
                      </span>
                      <span className="read-time">{blog.readingTime}</span>
                    </div>
                  </div>
                  <h3 className="card-title">{blog.title}</h3>
                  <p className="card-excerpt">{blog.excerpt}</p>
                  <div className="button-container">
                    <Link to={`/blog/${blog.slug}`} className="ba-learn-more">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
      <button
        key={number}
        onClick={() => onPageChange(number)}
        className={`page-item ${currentPage === number ? 'active' : ''}`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="pagination-container">
      <button
        className="page-item"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {renderPageNumbers()}
      <button
        className="page-item"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Blogs;