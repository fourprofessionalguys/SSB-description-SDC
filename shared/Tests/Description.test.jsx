import React from 'react';
import { shallow } from 'enzyme';
import $ from 'jquery';
import Description from '../Components/Description';

const dummyData = {
  bestuse: 'Rock Climbing',
  climbingshoetype: 'Neutral',
  footwearclosure: 'Lace-up',
  gender: 'Unisex',
  last: 'Slip-Lasted',
  lining: 'No',
  outsole: 'FriXion RS rubber',
  resole: 'Yes',
  upper: 'Leather/synthetic leather',
  weight: '1 lb. 2.3 oz.',
};

describe('Description Renders', () => {
  it('Description renders without crashing', () => {
    shallow(<Description {...dummyData} />);
  });
});

describe('Description', () => {
  const Mock = props => (<Description {...props.product} />);
  const wrapper = shallow(<Mock product={dummyData} />);
  const keys = Object.keys(dummyData);

  it('should receive props', () => {
    wrapper.update();
    expect(wrapper.props);
  });

  it('renders table with all data', () => {
    const wrap = shallow(<Description {...dummyData} />);
    keys.map((key) => {
      const value = dummyData[key];
      expect(wrap.contains(<td>{`${value}`}</td>)).toBe(true);
    });
  });

  it('should destructure the props object', () => {
    wrapper.update();
    expect(wrapper.prop('outsole')).toEqual('FriXion RS rubber');
    expect(wrapper.prop('bestuse')).toEqual('Rock Climbing');
    expect(wrapper.prop('climbingshoetype')).toEqual('Neutral');
    expect(wrapper.prop('last')).toEqual('Slip-Lasted');
    expect(wrapper.prop('upper')).toEqual('Leather/synthetic leather');
    expect(wrapper.prop('lining')).toEqual('No');
    expect(wrapper.prop('footwearclosure')).toEqual('Lace-up');
    expect(wrapper.prop('resole')).toEqual('Yes');
    expect(wrapper.prop('gender')).toEqual('Unisex');
    expect(wrapper.prop('weight')).toEqual('1 lb. 2.3 oz.');
  });
});
