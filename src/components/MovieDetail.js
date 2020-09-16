import React, { Component } from "react";
export class MovieDetail extends Component {
  componentDidMount() {
    
    this.props.getMovieDetail(this.props.movieId);
  }
  render() {
    const { movie } = this.props;
    var img_path = 'https://image.tmdb.org/t/p/w400/';
    if (movie.poster_path == null){
      var path = '/no_img.png'
    }
    else{
      path = img_path+movie.poster_path;
    }

    let movieInfo = (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={path} className="thumbnail" alt={movie.original_title} />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.original_title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Overview:</strong> {movie.overview}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.release_date}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.vote_average}
              </li>
            </ul>
          </div>
        </div>

      </div>
    );

    let content =  movieInfo;
    return <div>{content}</div>;
  }
}

export default MovieDetail;