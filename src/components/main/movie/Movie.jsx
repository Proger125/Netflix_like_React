import React from "react";
import PropTypes from 'prop-types';
import MovieOptions from "./MovieOptions";

export default class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <div className="movie-icon">
                    <img src={require("../../../static/img/" + this.props.img)} alt="" />
                </div>
                <span className="movie-name">{this.props.name}</span>
                <span className="movie-creation-date">{this.props.movieCreationDate}</span>
                <br />
                <span className="movie-genres">{this.props.movieGenres}</span>
                <MovieOptions />
            </div>
        )
    }
}
Movie.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieCreationDate: PropTypes.number.isRequired,
    movieGenres: PropTypes.string
};

Movie.defaultProps = {
    movieGenres: 'Nice movie'
}