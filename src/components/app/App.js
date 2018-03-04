import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import MovieDetail from '../movies/MovieDetail';


export default class App extends Component {

  render() {
  
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route path="/movies/:id" render={({ match }) => 
              {return <MovieDetail imdbID={match.params.id} history={history}/>;
              }}/>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return <div>This is Jenny home page!</div>;
  }
}
