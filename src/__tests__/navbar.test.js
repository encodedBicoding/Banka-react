import React from 'react';
import Navbar from '../Components/NavComponents/Navbar';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Handle Navbar Component test', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
