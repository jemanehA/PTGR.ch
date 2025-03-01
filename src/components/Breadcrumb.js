import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link to={item.link}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

// Usage
const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'Education', link: '/education' },
  { label: course.title, link: null }, // No link for the current page
];

<Breadcrumb items={breadcrumbItems} />;