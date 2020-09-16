import * as ActionTypes from './ActionTypes';

const initialState = {
    text:'',
    errMess: null,
    movies: [],
    isLoading: true,
    movie:[]
  };

export const Movies = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIE:
            return {...state, isLoading: false, errMess: null, movies: action.payload};

        case ActionTypes.ADD_MOVIES:
            return {...state, isLoading: false, errMess: null, movies: action.payload};

        case ActionTypes.GET_MOVIE_DEATIAL:
            return {...state, isLoading: false, errMess: null, movie: action.payload};

        case ActionTypes.MOVIES_LOADING:
            return {...state, isLoading: true, errMess: null, movies: []}

        case ActionTypes.MOVIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};