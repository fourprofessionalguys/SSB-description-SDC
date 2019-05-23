import React from 'react';
import { shallow } from 'enzyme';
import SizeChart from '../Components/SizeChart';

const dataMens = Array(24).fill('mens');
const dataWomens = Array(24).fill('womens');

describe('SizeChart Renders', () => {
  it('SizeChart renders without crashing', () => {
    shallow(<SizeChart mensSizes={dataMens} womensSizes={dataWomens} />);
  });
});

describe('SizeChart', () => {
  it('renders the table data of a given piece of data', () => {
    const wrapper = shallow(<SizeChart mensSizes={dataMens} womensSizes={dataWomens} />);
    const title = <td key="36headerSize" className="headlong">36</td>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
