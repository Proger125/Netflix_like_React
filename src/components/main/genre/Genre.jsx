import React from "react";
import '../../../static/css/content-style.css';
import PropTypes from 'prop-types';

export default class Genre extends React.Component {

    isSelected(props) {
        const isSelected = props.isSelected;
        if (isSelected) {
            return <div className="is-selected-block"></div>   
        } else {
            return null;
        }
    }

    render() {
        const genre = this.props.genre;
        return (
            <div className="genre">
                <span>{genre}</span>
                <this.isSelected isSelected={this.props.isSelected}/>
            </div>
        )
    }
}

Genre.propTypes = {
    genre: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired
}