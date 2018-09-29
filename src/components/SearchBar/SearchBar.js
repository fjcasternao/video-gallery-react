import React, { Component } from 'react';
import axios from 'axios';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query: ''
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value,
        }, () => {
            if (this.state.query && this.state.query.length > 2) {
                this.props.onUpdateSearch(this.state.query);
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
