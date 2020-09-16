import React, { Component } from "react";
import MovieCard from './MovieCardComponent';
import SearchForm from './SearchForm';

export class Movies extends Component {
    
    render() {
      const { movies } = this.props;
      let content = '';
 
      content =
        movies.total_results
          ? movies.results.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))
          : null;
      return (
        <React.Fragment>
              <SearchForm searchMovies={this.props.searchMovies} />
              <div className="row">
                 {content}
              </div>
        </React.Fragment>
    );

    }
  }

export default Movies;