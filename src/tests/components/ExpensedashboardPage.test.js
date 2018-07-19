import React from 'react';
import { shallow } from 'enzyme';
import ExpensedashboardPage from '../../components/ExpensedashboardPage';

test('should render ExpensedashboardPage correctly', () => {
  const wrapper = shallow(<ExpensedashboardPage />);
  expect(wrapper).toMatchSnapshot();
});