import React from 'react';
import { shallow } from 'enzyme';
import SizeChart from '../Components/SizeChart';

const dataMens = Array(24).fill('mens');
const dataWomens = Array(24).fill('womens');
const dataEu = Array(24).fill('eu');

describe('SizeChart Renders', () => {
  it('SizeChart renders without crashing', () => {
    shallow(<SizeChart mensSizes={dataMens} womensSizes={dataWomens} />);
  });
});

describe('SizeChart', () => {
  it('renders the table data of a given piece of data', () => {
    const wrapper = shallow(<SizeChart mensSizes={dataMens} womensSizes={dataWomens} euSizes={dataEu} />);
    const title = <td className="headlong" key="euheaderSize">eu</td>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
