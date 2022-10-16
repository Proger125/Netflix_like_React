import React from "react";
import PropTypes from 'prop-types';

export default class MovieNumber extends React.Component {
    render() {
        return(
            <span className="movie-number"><b>{this.props.movieNumber}</b> movies found</span>
        )
    }
}

MovieNumber.propTypes = {
    movieNumber: PropTypes.number.isRequired
}