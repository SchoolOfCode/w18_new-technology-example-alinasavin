import React from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
} from '../../data';

const Portfolio = () => {
  const [selectedList, setSelectedList] = useState(1);
  const [data, setData] = useState([]);
  const list = [
    {
      id: 1,
      title: 'Project#1',
    },

    {
      id: 2,
      title: 'Project#2',
    },
    {
      id: 3,
      title: 'Project#3',
    },
    {
      id: 4,
      title: 'Project#4',
    },
    {
      id: 5,
      title: 'Project#5',
    },
  ];

  useEffect(() => {
    switch (selectedList) {
      case 1:
        setData(portfolio1);
        break;
      case 2:
        setData(portfolio2);
        break;
      case 3:
        setData(portfolio3);
        break;
      case 4:
        setData(portfolio4);
        break;
      case 5:
        setData(portfolio5);
        break;
      default:
        setData(portfolio1);
    }
  }, [selectedList]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selectedList === item.id}
            setSelectedList={setSelectedList}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div className="item">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
