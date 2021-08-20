import React from 'react';
import './menu.scss';

const Menu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#portfolio">Skills</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#experience">Experience</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
