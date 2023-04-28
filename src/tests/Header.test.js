import React from 'react';
import { shallow } from 'enzyme';
import Header from '../component/Header';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.navbar-brand').text()).toEqual('gameZone');
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
