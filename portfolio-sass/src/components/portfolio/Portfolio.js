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
      title: 'Languages',
    },

    {
      id: 2,
      title: 'Frameworks and Libraries',
    },
    {
      id: 3,
      title: 'Design',
    },
    {
      id: 4,
      title: 'Planning',
    },
    {
      id: 5,
      title: 'Tools',
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
      <h1>Skills</h1>
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
