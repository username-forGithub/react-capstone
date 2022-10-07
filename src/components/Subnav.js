import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/chart.png';

function Subnav({ title, symbol }) {
  return (
    <div className="subnav">
      <div className="left"><img src={image} alt="chart" /></div>
      <div className="right">
        {symbol ? (
          <>
            <div className="tit">{title}</div>
            <div className="sym">{symbol}</div>
          </>
        )
          : <div className="tit1">{title}</div> }
      </div>
    </div>
  );
}

Subnav.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};
Subnav.defaultProps = {
  title: null,
  symbol: null,
};

export default Subnav;
