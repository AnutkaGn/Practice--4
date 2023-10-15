import React from 'react';
import '../style/footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <p>{props.title}</p>
    </footer>
  );
};

export default Footer;