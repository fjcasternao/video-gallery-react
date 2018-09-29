import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage/NotFoundPage';
import HomePage from '../HomePage/HomePage';
import DetailsPage from '../DetailsPage/DetailsPage';
import App from './App';

it('renders without crashing', () => {
  shallow(
    <Router>
      <App />
    </Router>
  );
});

it('invalid path goes to 404', () => {
  const wrapper = mount(
    <Router initialEntries={[ '/random' ]}>
      <App />
    </Router>
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});

it('base path navigates home', () => {
  const wrapper = mount(
    <Router initialEntries={[ '/' ]}>
      <App />
    </Router>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
});

it('movie path wit id navigates to movie details', () => {
  const wrapper = mount(
    <Router initialEntries={[ '/movie/123' ]}>
      <App />
    </Router>
  );
  expect(wrapper.find(DetailsPage)).toHaveLength(1);
});