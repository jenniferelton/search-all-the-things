import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import movieDetail from '../movies/MovieDetail';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header>
            <main>
              <Switch>
                
              </Switch>
            </main>
          </Header>
        </div>


      </Router>
    )
  }
}