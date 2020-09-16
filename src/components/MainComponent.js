import React, { Component } from "react";
import Movies from "./MoviesComponent";
import MovieDetail from "./MovieDetail";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchMovies, searchMovies, getMovieDetail } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    movie: state.movies.movie
  }
} 

console.log('mapstateprops',mapStateToProps)

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  searchMovies: (text) => dispatch(searchMovies(text)),
  getMovieDetail: (id) => dispatch(getMovieDetail(id)),
});


class Main extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }


  render() {
    const MovieWithId = ({match}) => {
      return(
        <MovieDetail movieId={parseInt(match.params.movieId,10)}
        getMovieDetail={this.props.getMovieDetail}
        movie={this.props.movie}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route exact path='/movies' component={() => <Movies movies={this.props.movies} searchMovies={this.props.searchMovies} />} />
                  <Route path='/movie/:movieId' component={MovieWithId} />
                  <Redirect to="/movies" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
