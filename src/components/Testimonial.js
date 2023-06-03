import React from 'react';

const Testimonial = ({ quote, author, role, company }) => {
  return (
    <div className="testimonial">
      <blockquote className="quote">{quote}</blockquote>
      <cite className="author">
        {author}, {role} at {company}
      </cite>
    </div>
  );
};

export default Testimonial;