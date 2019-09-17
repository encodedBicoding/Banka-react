import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';
import { BigNav } from './BigNav';

describe('Handle Navbar Component test', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('test bignav mount', () => {
  let wrapper, props, instance;
  beforeEach(() => {
    props = {
      showSignupFormModal: jest.fn(),
      showLoginFormModal: jest.fn(),
    }
    wrapper = shallow(<BigNav {...props}/>);
    instance= wrapper.instance()
  })
  it('should mount properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should dispatch signup modal', () => {
    const showSignupFormModal =jest.fn();
    const link = wrapper.find('li[datatest="signupmodal"]');
    link.simulate('click');
    showSignupFormModal();
    expect(showSignupFormModal).toHaveBeenCalled();
  })
  it('should test useEffect function', () => {
    const window = {
      onscroll: jest.fn()
    }
    const scrollPosition = 0;
    const setScrollPosition = jest.fn();
    window.onscroll()
    setScrollPosition()
    expect(scrollPosition).toMatchSnapshot()
    expect(setScrollPosition).toHaveBeenCalled();
  })
});

