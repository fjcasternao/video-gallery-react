import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import DetailsPage from '../DetailsPage/DetailsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:movieId" component={DetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
