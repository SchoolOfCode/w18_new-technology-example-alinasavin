import React from 'react';
import './projects.scss';
import { dataWorks } from '../../data';
import { useState } from 'react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(side) {
    if (side === 'left') {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
    } else {
      setCurrentSlide(
        currentSlide < dataWorks.length - 1 ? currentSlide + 1 : 0
      );
    }
  }
  return (
    <div className="works" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {dataWorks.map((data) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <a href="https://rockpaperscrissors.netlify.app/">
                    Try it out
                  </a>
                  <a href="https://github.com/SchoolOfCode/w3_rock-paper-scissors-alinasavin">
                    GitHub Link
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/leftarrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/rightarrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick('right')}
      />
    </div>
  );
};

export default Projects;
