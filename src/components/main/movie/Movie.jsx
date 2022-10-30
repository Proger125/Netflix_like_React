import React from 'react';
import PropTypes from 'prop-types';
import MovieOptions from './MovieOptions';

export default class Movie extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
    this.setOpened = this.setOpened.bind(this);
  }

  setOpened(value) {
    this.setState({isOpened: value});
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className="movie" onMouseLeave={() => this.setOpened(false)}>
        <div className="movie-icon">
          <img src={`img/${movie.img}`} 
            alt="Movie image" />
        </div>
        <span className="movie-name">{movie.name}</span>
        <span className="movie-creation-date">
          {movie.movieCreationDate.substring(0, 4)}</span>
        <br />
        <span className="movie-genres">{movie.movieGenres}</span>
        <MovieOptions isOpened={this.state.isOpened}
          setOpened={this.setOpened} movie={movie}/>
      </div>
    );
  }
}
Movie.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  movieCreationDate: PropTypes.string.isRequired,
  movieGenres: PropTypes.string,
};

Movie.defaultProps = {
  movieGenres: 'Nice movie',
};