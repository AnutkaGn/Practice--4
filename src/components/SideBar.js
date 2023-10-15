import React from 'react';
import '../style/sideBar.css';

const SideBar = (props) => {
  return (
    <aside className="sidebar">
      <p>{props.title}</p>
    </aside>
  );
};

export default SideBar;