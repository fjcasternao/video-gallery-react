import React from 'react';
import { shallow, mount } from 'enzyme';

import HomePage from './HomePage';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

it('renders without crashing', () => {
    shallow(
        <HomePage />
    );
});

it('contains header and a search input', () => {
    const wrapper = mount(
        <HomePage />
    );
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
});


it('get popular movies at start', () => {
    
    const wrapper = shallow(
        <HomePage />
    );
    const spy = jest.spyOn(wrapper.instance(), 'getPopularMovies');
    wrapper.instance().componentDidMount();  
    expect(spy).toHaveBeenCalled();
});
