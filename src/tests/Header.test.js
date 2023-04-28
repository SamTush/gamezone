import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../component/Header';

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
