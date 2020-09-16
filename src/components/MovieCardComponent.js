import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    var img_path = 'https://image.tmdb.org/t/p/w400/';
    if (movie.poster_path == null){
      var path = '/no_img.png'
    }
    else{
      path = img_path+movie.poster_path;
    }
    
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-card text-center h-100">
          <img className="w-100 mb-2" src={path} alt="Movie Cover" />
          <h5 className="text-light card-title">
          
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + movie.id}>
            Movie Details
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;