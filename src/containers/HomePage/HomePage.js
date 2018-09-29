import React from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieItem from '../../components/MovieItem/MovieItem';

const API_KEY = 'd45b0197ddc4c01c4e294489cac57c05';
const API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular';
const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

class HomePage extends React.PureComponent {

    state = {
        results: [],
    };

    componentDidMount = () => {
        this.getPopularMovies();
    }

    getPopularMovies = () => {
        axios.get(`${API_URL_POPULAR}?api_key=${API_KEY}`)
            .then(({ data }) => {
                this.updateResults(data.results);
            })
    }

    getMoviesByTitle = (movieTitle) => {
        axios
            .get(`${API_URL_SEARCH}?api_key=${API_KEY}&query=${movieTitle}`)
            .then(({ data }) => {
                this.updateResults(data.results)
            })
    }

    updateResults = (movieResults) => {
        this.setState({
            results: movieResults
        })
    }

    onUpdateSearch = (movieTitle) => {
        this.getMoviesByTitle(movieTitle);
    }


    render() {
        return (
            <div>
                <Header text="Technical interview: Movie Gallery" />
                <SearchBar onUpdateSearch = {this.onUpdateSearch} />
                <ul>
                    {
                        this.state.results.map(movie => {
                            return (
                                <MovieItem {...movie} key={movie.id}/>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default HomePage;