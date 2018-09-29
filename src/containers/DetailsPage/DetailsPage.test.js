import React from 'react';
import { shallow, mount } from 'enzyme';

import DetailsPage from './DetailsPage';

const props = {
    match: {
        params:{
            movieId: "1234"
        }
    }
}

it('renders without crashing', () => {
    shallow(
        <DetailsPage {...props}/>
    );
});

it('get movie details and related movies at start', () => {
    
    const wrapper = shallow(
        <DetailsPage {...props} />
    );

    const movieDetailsSpy = jest.spyOn(wrapper.instance(), 'getMovieDetails');
    const relatedMoviesSpy = jest.spyOn(wrapper.instance(), 'getSimilarMovies');

    wrapper.instance().componentDidMount();  
    expect(movieDetailsSpy).toHaveBeenCalled();
    expect(relatedMoviesSpy).toHaveBeenCalled();
});
