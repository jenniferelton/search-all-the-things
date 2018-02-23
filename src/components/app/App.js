import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import Movies from '../movies/Movies';
import './App.css';

export default class App extends Component {
  static propTypes = {
    home: PropTypes.bool
  };

  state = {
    movies: null
  };

handleSearch = searchTerm => {

}
  
render() {
  const { movies } = this.state;
  return (
    <Router>
       
      <div>
        <Search onSearch={this.handleSearch}/>
        {movies && <Movies movies={movies}/>}
      </div>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id} history={history}/>
          }/>
          <Redirect to="/"/>
        </Switch>
      </main>
       
    </Router>
  );
}
}

class Home extends Component {
  render() {
    return <div>I am Home!</div>;
  }
}
