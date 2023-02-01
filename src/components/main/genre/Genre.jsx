import React from 'react';
import PropTypes from 'prop-types';
import { useSubmit, useLoaderData, Form } from 'react-router-dom';
import '../../../static/css/content-style.css';

export default function Genre(props) {
  const { genre } = props;
  const { genreParam, sortBy, movie } = useLoaderData();
  const isSelected = genre === genreParam;
  const submit = useSubmit();
  return (
    <Form
      className="genre"
      onClick={(event) => {
        submit(event.currentTarget);
      }}
      role="search"
      tabIndex={0}
      aria-hidden="true"
    >
      <input type="hidden" name="genre" value={genre} />
      <input type="hidden" name="sortBy" value={sortBy} />
      {movie && <input type="hidden" name="movieId" value={movie.id} />}
      <span className={genre}>{genre.toUpperCase()}</span>
      {isSelected && <div className="is-selected-block" />}
    </Form>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
};
