import React from 'react';
import PropTypes from 'prop-types';

const SizeChart = ({ mensSizes, womensSizes, euSizes }) => (
  <div className="sizeChart-container">
    <div className="sizeChart-wrap">
      <table className="header-table">
        <tbody>
          <tr>
            <td className="headlong headcol" />
          </tr>
          <tr>
            <td className="headcol">U.S. Men's</td>
          </tr>
          <tr>
            <td className="headcol">U.S. Women's</td>
          </tr>
          <tr>
            <td className="headcol">EU</td>
          </tr>
        </tbody>
      </table>
      <div className="scroll-div">
        <table className="shoeSizes-table">
          <tbody>
            <tr>
              {euSizes.map(num => <td className="headlong" key={`${num}headerSize`}>{num.toString()}</td>)}
            </tr>
            <tr>
              {mensSizes.map(num => <td className="long" key={`${num}mensSize`}>{num.toString()}</td>)}
            </tr>
            <tr>
              {womensSizes.map(num => <td className="long" key={`${num}womensSize`}>{num.toString()}</td>)}
            </tr>
            <tr>
              {euSizes.map(num => <td className="long" key={`${num}euSize`}>{num.toString()}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

SizeChart.propTypes = {
  mensSizes: PropTypes.arrayOf(PropTypes.string),
  womensSizes: PropTypes.arrayOf(PropTypes.string),
  euSizes: PropTypes.arrayOf(PropTypes.string),
};

SizeChart.defaultProps = {
  mensSizes: [],
  womensSizes: [],
  euSizes: [],
};


export default SizeChart;
