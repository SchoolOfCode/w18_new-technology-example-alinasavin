import React from 'react';
import './topbar.scss';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';

const Topbar = ({ menuOpen, setmenuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Alina Savin
          </a>
          <div className="itemContainer">
            <a href="https://github.com/alinasavin" className="github">
              <GitHub className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://twitter.com/home?lang=en-gb" className="linkedin">
              <Twitter className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/alina-savin-40142982/"
              className="linkedin"
            >
              <LinkedIn className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
