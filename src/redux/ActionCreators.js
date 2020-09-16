import * as ActionTypes from './ActionTypes';
import { apiKey } from '../shared/keys';
import axios from 'axios';

// Movies Action Creators

  export const fetchMovies = text => dispatch => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
      .then(response =>
        dispatch({
          type: ActionTypes.ADD_MOVIES,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const searchMovies = text => dispatch => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=742e0082c3d9596c6c792c70f0930e14&language=en-US&query=${text}`)
      .then(response =>
        dispatch({
          type: ActionTypes.SEARCH_MOVIE,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const getMovieDetail = id => dispatch => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=742e0082c3d9596c6c792c70f0930e14`)
      .then(response =>
        dispatch({
          type: ActionTypes.GET_MOVIE_DEATIAL,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

export const moviesLoading = () => ({
  type: ActionTypes.MOVIES_LOADING
});

export const moviesFailed = (errmess) => ({
  type: ActionTypes.MOVIES_FAILED,
  payload: errmess
});

