import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function Genre(props) {
  const { genreTitle } = props;
  const router = useRouter();
  const { genre, sortBy, search } = router.query;
  const searchParam = search === undefined ? '' : search;
  const isSelected = genre === genreTitle;
  return (
    <div
      className="genre"
      onClick={() => {
        router.push(
          `/search?genre=${genreTitle}&sortBy=${sortBy}&search=${searchParam}`,
        );
      }}
      role="search"
      aria-hidden="true"
      action="/api/form"
    >
      <span className={genreTitle}>{genreTitle.toUpperCase()}</span>
      {isSelected && <div className="is-selected-block" />}
    </div>
  );
}

Genre.propTypes = {
  genreTitle: PropTypes.string.isRequired,
};
