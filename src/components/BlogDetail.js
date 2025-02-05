import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../assets/blogs.json';
import '../styles/detaiBlogs.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);
  const relatedPosts = blogs.filter(b => blog.relatedPosts.includes(b.id));

  // Function to convert body array to HTML string
  const renderBodyToHTML = (body) => {
    return body
      .map((item) => {
        switch (item.type) {
          case 'section':
            return `
              <section class="bd-section">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
                ${item.keyTakeaways ? `
                  <div class="bd-key-takeaways">
                    <h4>Key Takeaways:</h4>
                    <ul>
                      ${item.keyTakeaways.map((takeaway) => `<li>${takeaway}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </section>
            `;
          case 'infographic':
            return `
              <figure class="bd-infographic">
                <img src="${item.image}" alt="${item.title}" />
                <figcaption>${item.caption}</figcaption>
              </figure>
            `;
          case 'quote':
            return `
              <blockquote class="bd-quote">
                <p>${item.text}</p>
                <cite>${item.source}</cite>
              </blockquote>
            `;
          default:
            return '';
        }
      })
      .join('');
  };

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
                  // src={blog.featuredImage} 
                  src="/assets/images/logo.png"
                  alt={blog.title} 
                  className="bd-hero-img"
                />
                <div className="bd-hero-overlay"></div>
                <div className="bd-hero-content">
                  <h1 className="bd-title">{blog.title}</h1>
                  <div className="bd-author-meta">
                    <img 
                      src="/assets/images/logo.png"
                      alt={blog.author.name} 
                      className="bd-author-img"
                    />
                    <div>
                      <p className="bd-author-name">{blog.author.name}</p>
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

            {/* Content Section */}
            <div 
              className="bd-content" 
              dangerouslySetInnerHTML={{ __html: renderBodyToHTML(blog.content.body) }} 
            />

            {/* Media Embed */}
            {blog.content.media?.map((media, index) => (
              media.type === 'video' ? (
                <div key={index} className="bd-media-embed">
                  <iframe 
                    title={media.title}
                    src={media.url}
                    allowFullScreen
                  />
                </div>
              ) : (
                <figure key={index} className="bd-content-image">
                  <img src={media.url} alt={media.alt} />
                  <figcaption className="bd-image-caption">{media.alt}</figcaption>
                </figure>
              )
            ))}

            {/* Author Bio */}
            <div className="bd-author-bio">
              <h3 className="bd-bio-title">About the Author</h3>
              <div className="bd-bio-content">
                <img 
                  src="/assets/images/logo.png"
                  alt={blog.author.name} 
                  className="bd-bio-img"
                />
                <div>
                  <p className="bd-bio-text">{blog.author.bio}</p>
                  <div className="bd-social-links">
                    <a 
                      href={`https://twitter.com/${blog.author.social?.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a 
                      href={blog.author.social?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        {/* Related Posts */}
        <aside className="bd-related-posts">
          <h3 className="bd-related-title">Recommended Reads</h3>
          <div className="bd-related-grid">
            {relatedPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="bd-related-card"
              >
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="bd-related-img"
                />
                <div className="bd-related-content">
                  <h4 className="bd-related-heading">{post.title}</h4>
                  <p className="bd-related-excerpt">{post.excerpt}</p>
                  <span className="bd-related-category">{post.categories[0]}</span>
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