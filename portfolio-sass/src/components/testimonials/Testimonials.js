import React from 'react';
import './testimonials.scss';
import { experienceData } from '../../data';

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Experience</h1>
      <div className="container">
        {experienceData.map((data) => (
          <div className={data.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={data.img} className="project" alt="" />
              <img src={data.icon} className="right" alt="" />
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.title}</h3>
              <h4>{data.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
