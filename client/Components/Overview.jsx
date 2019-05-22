/* eslint-disable max-len */
import React from 'react';

const Overview = ({
  climbingshoetype, last, resole, upper,
}) => (
  <div className="overview-container">
    <div className="overview-quote-container">
      <div className="overview-quote">
        Designed for the climber looking for a single pair to do it all, the La Sportiva Tarantulace are jack-of-all-trades climbing shoes comfortable enough for all-day climbs or a trip to the rock gym.
      </div>
    </div>
    <div className="overview-specs">
      <div className="os-item">
        <span className="os-title">CLIMBING SHOE TYPE</span>
        <div className="os-value">{`${climbingshoetype}`}</div>
      </div>
      <div className="os-item">
        <span className="os-title">LAST</span>
        <div className="os-value">{`${last}`}</div>
      </div>
      <div className="os-item">
        <span className="os-title">CAN BE RESOLVED</span>
        <div className="os-value">{`${resole}`}</div>
      </div>
      <div className="os-item">
        <span className="os-title">UPPER</span>
        <div className="os-value">{`${upper}`}</div>
      </div>
    </div>
  </div>
);
export default Overview;
