import React from 'react';
import axios from 'axios'


import Header from '../../components/Header/Header';

const API_KEY = 'd45b0197ddc4c01c4e294489cac57c05';
const API_URL = 'https://api.themoviedb.org/3/movie/';

class DetailsPage extends React.PureComponent {

    state = {
        movieDetails: {}
    }

    componentDidMount = () => {
        this.getMovieDetails(this.props.match.params.movieId);
    }

    getMovieDetails = (movieId) => {
        axios.get(`${API_URL}${movieId}?api_key=${API_KEY}`)
            .then(({ data }) => {
                this.setState({
                    movieDetails: data
                })
            })
    }

    render() {
        return (
            <div>
                <Header text="Technical interview: Movie Gallery" />
                <div>
                    { JSON.stringify(this.state.movieDetails) }
                </div>
            </div>
        );
    }
}

export default DetailsPage;