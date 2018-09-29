import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <h1>
        <img
          className="header__image"
          src="https://www.redpoints.com/wp-content/uploads/2017/03/red-points.svg"
        />
        <span className="header__text"> {this.props.text}</span>
      </h1>
    );
  }
}
