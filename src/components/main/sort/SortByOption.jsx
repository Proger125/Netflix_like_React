import React from 'react';
import PropTypes from 'prop-types';

export default class SortByOption extends React.Component {
  render() {
    const sortByOption = this.props.sortByOption;
    return (
      <div className="sort-by-option">
        <span>{sortByOption}</span>
        <div className="arrow-down"></div>
      </div>
    );
  }
}

SortByOption.propTypes = {
  sortByOption: PropTypes.string,
};

SortByOption.defaultProps = {
  sortByOption: 'RELEASE DATE',
};