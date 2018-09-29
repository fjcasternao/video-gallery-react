import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchBar from './SearchBar';

const props = {
    onUpdateSearch: jest.fn()
} 

it('renders without crashing', () => {
    shallow(
        <SearchBar {...props}/>
    );
});

it('do not call onUpdateSearch when less than 3 characters', () => {
    const wrapper = mount(<SearchBar {...props}/>);
    const input = wrapper.find('input');
    input.instance().value = 'av';
    input.simulate('change');
    expect(props.onUpdateSearch).toHaveBeenCalledTimes(0);
})


it('updates state query based on input value', () => {
    const wrapper = mount(<SearchBar {...props}/>);
    const input = wrapper.find('input');
    input.instance().value = 'avengers';
    input.simulate('change');
    expect(wrapper.state('query')).toBe('avengers');

})

it('call onUpdateSearch with the search query', () => {
    const wrapper = mount(<SearchBar {...props}/>);
    const input = wrapper.find('input');
    input.instance().value = 'avengers';
    input.simulate('change');
    expect(props.onUpdateSearch).toHaveBeenCalledWith("avengers");
    
})

