import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../Components/Overview';

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

describe('Overview Renders', () => {
  it('Overview renders without crashing', () => {
    shallow(<Overview {...dummyData} />);
  });
});

describe('Overview', () => {
  it('renders the specs with the passed in props', () => {
    const wrapper = shallow(<Overview {...dummyData} />);
    const climbingshoetype = <div className="os-value">{dummyData.climbingshoetype}</div>;
    const last = <div className="os-value">{dummyData.last}</div>;
    const resole = <div className="os-value">{dummyData.resole}</div>;
    const upper = <div className="os-value">{dummyData.upper}</div>;

    expect(wrapper.contains(climbingshoetype)).toEqual(true);
    expect(wrapper.contains(last)).toEqual(true);
    expect(wrapper.contains(resole)).toEqual(true);
    expect(wrapper.contains(upper)).toEqual(true);
  });

  const Mock = props => (<Overview {...props.product} />);
  const wrap = shallow(<Mock product={dummyData} />);

  it('should receive props', () => {
    wrap.update();
    expect(wrap.props);
  });

  it('should destructure the props object', () => {
    wrap.update();
    expect(wrap.prop('outsole')).toEqual('FriXion RS rubber');
    expect(wrap.prop('bestuse')).toEqual('Rock Climbing');
    expect(wrap.prop('climbingshoetype')).toEqual('Neutral');
    expect(wrap.prop('last')).toEqual('Slip-Lasted');
    expect(wrap.prop('upper')).toEqual('Leather/synthetic leather');
    expect(wrap.prop('lining')).toEqual('No');
    expect(wrap.prop('footwearclosure')).toEqual('Lace-up');
    expect(wrap.prop('resole')).toEqual('Yes');
    expect(wrap.prop('gender')).toEqual('Unisex');
    expect(wrap.prop('weight')).toEqual('1 lb. 2.3 oz.');
  });
});
