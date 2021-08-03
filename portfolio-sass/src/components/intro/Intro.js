import React from 'react';
import './intro.scss';
import { ArrowDownward } from '@material-ui/icons';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Programmer'],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/IMG_0662.jpg" alt="profile"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi 👋🏼 There, I'm</h2>
          <h1>Alina Savin</h1>
          <h3>
            Web <span ref={textRef}></span>
          </h3>
          <p>
            I live in UK and I am currently studying to become a front-end
            developer. I have studied Chemistry and that but I feel like now I'm
            following my dreams. I can't wait to solve real life problems
            through tech.
          </p>
          <a href="#portfolio">
            <ArrowDownward className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
