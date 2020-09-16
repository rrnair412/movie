import React, { Component } from 'react';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'text' : '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    // this.props.searchMovies(e.target.value);
    
  };

  onSubmit(event) {
    event.preventDefault();
    this.props.searchMovies(event.target.elements.searchText.value);
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              id="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;