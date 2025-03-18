import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import blogs from '../assets/blogs1.json';
import '../styles/detaiBlogs.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);
  const relatedPosts = blogs.filter(b => blog?.relatedPosts?.includes(b.id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!blog) {
    return (
      <div className="bd-container">
        <h2>Blog not found</h2>
        <Link to="/Bloglist" className="bd-back-btn">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bd-container">
      <div className="bd-layout">
        {/* Main Content */}
        <main className="bd-main">
          <Link to="/Bloglist" className="bd-back-btn">
            &larr; All Articles
          </Link>

          <article className="bd-article">
            {/* Hero Section */}
            <header className="bd-article-header">
              <div className="bd-hero">
                <img 
                  src={blog.detailImage} 
                  alt={blog.title} 
                  className="bd-hero-img"
                  loading="lazy"
                />
                <div className="bd-hero-overlay"></div>
                <div className="bd-hero-content">
                  {!blog.titletop && <h1 className="bd-title">{blog.title}</h1>}
                  <div className="bd-author-meta">
                    <img 
                      src="/assets/images/log1.png"
                      alt="PTGR AG Logo"
                      className="bd-author-img"
                      loading="lazy"
                    />
                    <div>
                      <p className="bd-author-name">PTGR AG</p>
                      <p className="bd-post-date">{blog.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Meta Info */}
            <div className="bd-meta">
              <span className="bd-category">{blog.categories.join(' / ')}</span>
              <span className="bd-read-time">{blog.readingTime}</span>
            </div>

            {/* Sanitized HTML Content */}
            <div 
              className="bd-content" 
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(blog.htmlContent) 
              }} 
            />
          </article>
        </main>

        {/* Related Posts Sidebar */}
        <aside className="bd-related-posts">
          <h3 className="bd-related-title">Recommended Reads</h3>
          <div className="bd-related-grid">
            {relatedPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="bd-related-card"
              >
                <div>
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="bd-related-img"
                  loading="lazy"
                />
                <div className="bd-related-content">
                  <h4 className="bd-related-heading">{post.title}</h4>
                  <p className="bd-related-excerpt">{post.excerpt}</p>
                  </div>
                </div>
                  <div className="bd-related-meta bd-related-content">
                    <span className="bd-related-category">{post.categories[0]}</span>
                    <span className="bd-related-readtime">{post.readingTime}</span>
                  </div>
                
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;