import React from 'react';
import PropTypes from 'prop-types';

const incrementer = (start, end) => {
  const array = [];
  for (let i = start; i < end; i += 1) {
    if (i / 2 !== 47.5) {
      array.push(i / 2);
    }
  }
  return array;
};

const SizeChart = ({ mensSizes, womensSizes }) => (
  <div className="sizeChart-container">
    <h2>Size Chart</h2>
    <div>
      <table>
        <tr>
          <td className="headcol" />
          {incrementer(72, 97).map(num => <td className="headlong" key={`${num}headerSize`}>{num.toString()}</td>)}
        </tr>
        <tr>
          <td className="headcol">U.S. Men's</td>
          {mensSizes.map(num => <td className="long" key={`${num}mensSize`}>{num.toString()}</td>)}
        </tr>
        <tr>
          <td className="headcol">U.S. Women's</td>
          {womensSizes.map(num => <td className="long" key={`${num}womensSize`}>{num.toString()}</td>)}
        </tr>
        <tr>
          <td className="headcol">EU</td>
          {incrementer(72, 97).map(num => <td className="long" key={`${num}euSize`}>{num.toString()}</td>)}
        </tr>
      </table>
    </div>
  </div>
);

SizeChart.propTypes = {
  mensSizes: PropTypes.arrayOf(PropTypes.string),
  womensSizes: PropTypes.arrayOf(PropTypes.string),
};

SizeChart.defaultProps = {
  mensSizes: [],
  womensSizes: [],
};


export default SizeChart;
