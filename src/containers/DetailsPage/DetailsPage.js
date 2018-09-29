import React from 'react';
import axios from 'axios'

import './DetailsPage.css';
import Header from '../../components/Header/Header';
import MovieItem from '../../components/MovieItem/MovieItem';

const API_KEY = 'd45b0197ddc4c01c4e294489cac57c05';
const API_URL = 'https://api.themoviedb.org/3/movie/';

class DetailsPage extends React.PureComponent {

    state = {
        movieDetails: {},
        similars: []
    }

    componentDidMount = () => {
        this.getMovieDetails(this.props.match.params.movieId);
        this.getSimilarMovies(this.props.match.params.movieId);
    }

    getMovieDetails = (movieId) => {
        axios.get(`${API_URL}${movieId}?api_key=${API_KEY}`)
            .then(({ data }) => {
                this.setState({
                    movieDetails: data
                })
            })
    }

    getSimilarMovies = (movieId) => {
        axios.get(`${API_URL}${movieId}/similar?api_key=${API_KEY}`)
            .then(({ data }) => {
                this.setState({
                    similars: data.results
                })
            })
    }


    render() {
        return (
            <div>
                <Header text="Technical interview: Movie Gallery" />
                <div className="details__description">
                    <img
                        className="movie__img"
                        src={"https://image.tmdb.org/t/p/w300/" + this.state.movieDetails.poster_path}
                        onError={(e) => {
                            e.target.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBg4QEBAWDxUQFxYQEBEVFxAREBUVFhEWFhYSExYaHSggGxolJxYVITEhJS8rLjouGCAzRDMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EADQQAAIBAwMCAwcCBQUAAAAAAAABAgMEEQUSITFBEyJRBhQyYXGRsULwcoGhwdEVJjVSkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTVL1afaOo47sNLCeOrI0y/jqFtvjx2lF9UwNwFdaaornUatHa14efNlYeHgsMgSAGABX2Go++XFSGyUPD7vo+WuDfyBIIySAAyAAGSMgSCMkgAAAAAAAAAAAAAAAAU/tV/w8v4o/kp9PqS0a5pTeXTrxTb9OP7Z+zLr2mpyq6VJRi5PMeEm31+RD0/3zQadOS2yUU456qSQGlo7/wBxXT/if9Ueada41q7qeHVdGEHhYzn5GP2YtalG/qb4Sj5WstPGcruTbOroN3VTpSqQm8px/p+QNjS72rbao7atLf8A9Zd+mV9zoOxzumW9S+1d3NSDpxXwp8N8YR0XYCg0S7qV766UpuSjnan0XmfQ1NKlc6nQqLx3BQfxdZN46Z7L/Js6DQnTv7tyi4qWcNprPmfQ9+ytGVG2rKUXHMlhNNfp+YGnpdS51OnKHjOCp9Z4zNt9It+nDNz2cvatxCtCb3un8LfV5zw36cEeytGdF190XHMljKaz16GDRrerBXuIuMpLEG01z58YyB4ulXpwqTq3apSWXGnGXD+XGPwben6rP/Qp1Z+aUG4p+r4xn7lXYQ2W9Sm7WU60spSa4WV1y+mDe0mylW0KtSknCTba3Jr0a/ACxp3dzau48d5eXGm+YtLtjsetF1Ka0y4q1JObg+M/ThGOwurm3s3Q93e5JqM3lQS55b6Mx+z9t73pFzDo5NJP54TQHilWrXVtKs7tU5cuNLOFx2xn+xeaDfu/sVKXxJ7Zej75OfoP3S3dOdnvqLKjLa2n9TotGoypWicqcaTk8uMU0vTn5gWAAAAAAAAAAAAAAAAAAyAAyRkCQRkkADT1K7laW+6FN1HlLas5578I1dR1d2VpRm6eXU6xbaxxn0AtiMEQluin6k5Akw3Vurm3lB9JLHHVfM0bvVXb6pSo7M78Pdnplvt/IswOeho11RpyhC4Wx+qeeevbgtNJ09ada7E9zbzKXTLMOo6q7O+o09m7xMc5xjMsFnkCQAAAAAAAAAAAAAAAAABD6HLXlOSqVHXvNkv0Qg219MLodPWi5UpJPDaaT+eODk9NoVLPxIStXUqS4jUaW1cdcvt3A2tIq1dQ0atHe90H5JJtS6J4z9/uZNO1VrQqkpvM6WY89cv4f38j37L29S1p1Yzg4vcmm+j4xw+5X6jpFV6nKFOL8OrKMm0vKvr9OQLDSYV3o0p+J56nMZTbaiumfyyqvG7Wgpe9udXKzGLbj9y/1q0lU0l06S6YxFd4rsUjpVK2l+FC1cGsOc2sN4fbu2wN7UrypL2dpVFJxlLblptPvk1tek56RaNvLfVvq/KZry2qVPZmlBU5bouKccPdxnsRrFpUq6VaxjCUnH4kllry45A3dXhUnb09lWNGPG+Te19OiZTU7l2mq0o0riVaMmlLOWuZYxzwbuvWlSdxQmqbqwikpQWXz34Na6o1a97QqRtnThBrEUlu4km20v3wBk1+Mpa/QUHtk1FRfXD3S5I1KFbRalOoq0qik8SUvX0wZ9atq1TWaVSlBvbFPP6cpvhsw3/j61Vp0/BlSjF5k3nGfXOPqB716W/V7N+u1r/2TrV/KrqioKr4EF8c+j6Z6mTWbSc9TtXCDlGG3LSyliXc8avZTo6oriFLxov44Yz2x0/kBisb52Wqwpxr+PTqYWW8tN8I6ldDntPVS5v1L3aFGnHD80FvyvR4XJ0KAAAAAAAAAAAAAAAAAAACMDBIAEYJADBGCQAwRgkARgYJAEYGCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=' // some replacement image
                        }}
                        alt=""
                    />

                    <div className="movie__details">
                        <p><label>Summary: </label>  {this.state.movieDetails.overview}</p>
                        <p><label>Release Date: </label> {this.state.movieDetails.release_date}</p>
                        <p><label>Languages: </label> {this.state.movieDetails.release_date}</p>
                        <p><label>Budget: </label> {this.state.movieDetails.budget} $</p>
                        <p><label>Popularity: </label> {this.state.movieDetails.popularity} </p>
                    </div>
                </div>
                <div>
                    <h2> Related Movies </h2>
                    <ul>
                        {
                            this.state.similars.map(movie => {
                                return (
                                    <MovieItem {...movie} key={movie.id}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default DetailsPage;