import React from "react";
import PropTypes from 'prop-types';
import "../../static/css/footer-styles.css"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                {this.props.children}
            </div>
        )
    }
}

Footer.propTypes = {
    children: PropTypes.element.isRequired
}