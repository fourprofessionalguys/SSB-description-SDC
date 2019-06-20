/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({
  climbingshoetype, last, resole, upper, quote,
}) => (
  <div className="overview-container">
    <div className="overview-quote-container">
      <div className="overview-quote">{quote}</div>
    </div>
    <div className="overview-specs">
      <div className="os-item">
        <span className="os-title">CLIMBING SHOE TYPE</span>
        <div className="os-value">{climbingshoetype}</div>
      </div>
      <div className="os-item">
        <span className="os-title">LAST</span>
        <div className="os-value">{last}</div>
      </div>
      <div className="os-item">
        <span className="os-title">CAN BE RESOLVED</span>
        <div className="os-value">{resole}</div>
      </div>
      <div className="os-item">
        <span className="os-title">UPPER</span>
        <div className="os-value">{upper}</div>
      </div>
    </div>
  </div>
);

Overview.propTypes = {
  climbingshoetype: PropTypes.string,
  last: PropTypes.string,
  resole: PropTypes.string,
  upper: PropTypes.string,
  quote: PropTypes.string,
};

Overview.defaultProps = {
  climbingshoetype: '',
  last: '',
  resole: '',
  upper: '',
  quote: '',
};

export default Overview;

// Designed for the climber looking for a single pair to do it all, the La Sportiva Tarantulace are jack-of-all-trades climbing git shoes comfortable enough for all-day climbs or a trip to the rock gym.
