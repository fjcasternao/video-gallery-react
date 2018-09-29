import React from 'react';
import './MovieItem.css';

export default class MovieItem extends React.Component {
    render() {
        return (
            <li key={this.props.id} className="movie">
                <a href={`/movie/${this.props.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185/${this.props.poster_path}`}
                    />
                    <p title={this.props.title}> {this.props.title} </p>
                </a>
            </li>
        );
    }
}
