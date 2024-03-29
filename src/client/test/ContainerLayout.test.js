import React from 'react';
import { shallow } from 'enzyme';
import ContainerLayout from '../containers/ContainerLayout/ContainerLayout';
import SubLayout from '../components/SubLayout/SubLayout';

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContainerLayout />);
  });

  it('should render 1 child component if not authentication', () => {
    expect(wrapper.find(SubLayout)).toHaveLength(1);
  });

  it('should render 2 child component if authentication', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(SubLayout)).toHaveLength(2);
  });
});
