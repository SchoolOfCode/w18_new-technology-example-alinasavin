import React from 'react';
import './portfolioList.scss';

const PortfolioList = ({ title, active, setSelectedList, id }) => {
  return (
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelectedList(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
