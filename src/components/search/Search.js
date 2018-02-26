import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movies from '../movies/Movies';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/movieApi';
import queryString from 'query-string';
import Paging from '../app/Paging';



const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    movies: null,
    error: null,
    searchTerm: '',
    page: 1,
    totalResults:'',
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: searchTerm } = queryString.parse(query);
    this.setState({ searchTerm });
    if(!searchTerm) return;

    search(searchTerm, this.state.page)
      .then((response) => {
        this.setState({
          movies: response.Search,
          totalResults: response.totalResults
        });

      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handlePrev = () => this.handlePaging(-1);
  handleNext = () => this.handlePaging(1);

  handlePaging = incr => {
    this.setState(
      prev => ({ page: prev.page + incr }),
      () => this.searchMovies()
    );
  };

  handleSearch = searchTerm => {
    this.setState({ error: null });
    
    this.props.history.push({
      search: searchTerm ? queryString.stringify({ search: searchTerm }) : ''
    });
  };
  
  render() {
    const { movies, error, searchTerm, totalResults, page } = this.state;

    return (
      <div>
        <div>
          <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
          {error && <div>{error}</div>}
          {(!error && movies) && <Movies movies={movies}/>}
          {movies && (
            <div>
              <Paging totalResults={totalResults} 
                page={page} 
                onPrev={this.handlePrev} 
                handlePaging={this.handlePaging}
                onNext={this.handleNext}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}