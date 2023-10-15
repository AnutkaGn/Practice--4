import React from 'react';
import '../style/header.css';

const Header = (props) => {
  return (
    <header className="header">
      <p>{props.title}</p>
    </header>
  );
};

export default Header;