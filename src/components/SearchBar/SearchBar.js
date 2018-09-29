import React, { Component } from 'react';
import axios from 'axios';

import './SearchBar.css';

const API_KEY = 'd45b0197ddc4c01c4e294489cac57c05';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

class SearchBar extends Component {
    state = {
        query: '',
        results: [],
    };

    getInfo = () => {
        axios
            .get(`${API_URL}?api_key=${API_KEY}&query=${this.state.query}`)
            .then(({ data }) => {
                this.props.updateResults(data.results)
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value,
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo();
                }
            }
        })
    };

    render() {
        return (
            <form>
                <div className="input__wrapper">
                    <input
                        type="search"
                        placeholder="Search by movie title"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                </div>
            </form>
        )
    }
}

export default SearchBar;
